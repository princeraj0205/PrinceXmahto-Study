import { chromium } from 'playwright';
import fs from 'fs';
import vm from 'vm';

const DATA='sbte-pyq-data.js';
const SOURCE='https://sbte.bihar.gov.in/previous-year-questions';
const source=fs.readFileSync(DATA,'utf8');
const ctx={window:{}}; vm.createContext(ctx); vm.runInContext(source,ctx);
const data=ctx.window.PX_PYQ;
const norm=s=>String(s||'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,' ').trim();
const branches=data.branches.map(b=>({...b,n:norm(b.name)}));
const findBranch=t=>{
  const n=norm(t), code=(String(t).match(/\\b(\\d{2})\\b/)||[])[1];
  return branches.find(b=>code&&b.code===code)||branches.find(b=>n.includes(b.n)||b.n.includes(n));
};
const codeFrom=(href,row)=>{
  const m=String(href).match(/\\/([^/?#]+?)(?:\\.pdf)?(?:[?#].*)?$/i);
  if(m&&/^[A-Za-z0-9_-]{5,}$/.test(m[1])) return m[1].replace(/\\.pdf$/i,'');
  const c=String(row).match(/\\b(?:T|P|20|26|16|24|25|202)\\w{4,}\\b/i);
  return c?c[0]:'';
};

const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
await page.goto(SOURCE,{waitUntil:'networkidle',timeout:90000});
await page.waitForTimeout(1500);
const selects=page.locator('select');
if(await selects.count()<3) throw new Error('SBTE page controls changed: expected at least 3 select controls');
const info=await selects.evaluateAll(ss=>ss.map(s=>({options:[...s.options].map(o=>({text:o.textContent.trim(),value:o.value}))})));
const year=info[0].options.find(o=>/2025/.test(o.text)||o.value==='2025');
if(!year) throw new Error('SBTE 2025 exam-year option not found');
await selects.nth(0).selectOption(year.value);
await page.waitForTimeout(700);
const branchOpts=await selects.nth(1).locator('option').evaluateAll(os=>os.map(o=>({text:o.textContent.trim(),value:o.value})));
const semOpts=await selects.nth(2).locator('option').evaluateAll(os=>os.map(o=>({text:o.textContent.trim(),value:o.value})));
const sem=semOpts.find(o=>/^1(?:st)?\\s*semester/i.test(o.text)||/semester[- ]?1\\b/i.test(o.text)||o.value==='1');
if(!sem) throw new Error('SBTE Semester-I option not found');

const found=[];
for(const bo of branchOpts){
  if(!bo.value||/select|choose|all branch/i.test(bo.text)) continue;
  const b=findBranch(bo.text); if(!b) continue;
  await selects.nth(1).selectOption(bo.value);
  await selects.nth(2).selectOption(sem.value);
  const ss=page.locator('select');
  if(await ss.count()>3){
    const opts=await ss.nth(3).locator('option').evaluateAll(os=>os.map(o=>({text:o.textContent.trim(),value:o.value})));
    const reg=opts.find(o=>/regular/i.test(o.text)); if(reg) await ss.nth(3).selectOption(reg.value);
  }
  await page.getByRole('button',{name:/search/i}).first().click();
  await page.waitForTimeout(900);
  const rows=await page.locator('table tbody tr').evaluateAll(trs=>trs.map(tr=>({cells:[...tr.querySelectorAll('td')].map(x=>x.textContent.trim()),links:[...tr.querySelectorAll('a')].map(a=>a.href)})));
  for(const row of rows){
    for(const href of row.links){
      if(!/\\.pdf(?:$|[?#])|questionbank/i.test(href)||!/^https:\\/\\/sbte\\.bihar\\.gov\\.in\\//i.test(href)) continue;
      const name=(row.cells[3]||row.cells[2]||'').trim();
      const code=codeFrom(href,name+' '+row.cells.join(' '));
      if(code) found.push({branchId:b.id,branchCode:b.code,branchName:b.name,code,name:name||code,url:href});
    }
  }
}
await browser.close();

const unique=[...new Map(found.map(x=>[x.branchId+'|'+x.code+'|'+x.url,x])).values()];
if(unique.length===0) throw new Error('SBTE returned zero verified official Semester-I 2025 PDFs; refusing to overwrite archive.');

for(const x of unique){
  const b=data.branches.find(b=>b.id===x.branchId); if(!b) continue;
  let s=b.subjects.find(s=>s.code===x.code);
  if(!s){s={code:x.code,name:x.name,papers:{}};b.subjects.push(s);}
  s.papers=s.papers||{}; s.papers['2025']=x.url;
}
data.version='2026.10.2025sync';
data.synced2025={at:new Date().toISOString(),count:unique.length,source:SOURCE};
data.stats.verifiedSubjects=data.branches.flatMap(b=>b.subjects).filter(s=>s.papers?.['2025']).length;
data.stats.verifiedPdfs=data.branches.flatMap(b=>b.subjects).reduce((n,s)=>n+Object.keys(s.papers||{}).length,0);
fs.writeFileSync(DATA,'window.PX_PYQ='+JSON.stringify(data,null,2)+';\\n');
console.log('SYNCED_2025_PDFS='+unique.length);