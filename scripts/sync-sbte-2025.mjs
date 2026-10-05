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
  const n=norm(t), m=String(t).match(/\b(\d{2})\b/), code=m?.[1];
  return branches.find(b=>code&&b.code===code)||branches.find(b=>n.includes(b.n)||b.n.includes(n));
};

const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
await page.goto(SOURCE,{waitUntil:'networkidle',timeout:90000});
await page.waitForTimeout(1800);

const combos=page.locator('div[role="combobox"]');
if(await combos.count()<4) throw new Error('SBTE filter controls not found');
const optionTexts=async()=>{
  await page.waitForTimeout(250);
  return await page.locator('[role="listbox"] [role="option"]').allTextContents();
};
const choose=async(index,matcher)=>{
  const box=combos.nth(index);
  await box.click();
  const opts=await optionTexts();
  const i=opts.findIndex(t=>typeof matcher==='function'?matcher(t.trim()):norm(t)===norm(matcher));
  if(i<0){await page.keyboard.press('Escape');throw new Error('Option not found in combo '+index+': '+opts.join(' | '));}
  await page.locator('[role="option"]').nth(i).click();
  await page.waitForTimeout(650);
};
const listCombo=async(index)=>{
  await combos.nth(index).click();
  const opts=(await optionTexts()).map(x=>x.trim()).filter(Boolean);
  await page.keyboard.press('Escape');
  return [...new Set(opts)];
};

await choose(0,t=>t.includes('2025'));
const branchOptions=await listCombo(1);
const semesterOptions=await listCombo(2);
const semText=semesterOptions.find(t=>/^1$/.test(t.trim())||/semester\s*[- ]?1\b|1st\s*semester/i.test(t));
if(!semText) throw new Error('Semester-I option not found: '+semesterOptions.join(' | '));
const branchesToRun=branchOptions.filter(t=>!/^select|choose|all branch$/i.test(t)).map(t=>({text:t,b:findBranch(t)})).filter(x=>x.b);
console.log('BRANCHES_FOUND='+branchesToRun.length);

const found=[];
const allBranch=branchOptions.find(t=>/all\s*branch/i.test(t.trim()));
if(allBranch){
  await choose(1,allBranch);
  await choose(2,semText);
  await choose(3,t=>/^regular$/i.test(t.trim()));
  await page.getByRole('button',{name:/^search$/i}).click();
  await page.waitForTimeout(1800);
  const rows=await page.locator('table tbody tr').evaluateAll(trs=>trs.map(tr=>({
    cells:[...tr.querySelectorAll('td')].map(x=>x.textContent.trim()),
    links:[...tr.querySelectorAll('a')].map(a=>({href:a.href,text:a.textContent.trim()}))
  })));
  for(const row of rows){
    const b=findBranch(row.cells[1]||''); if(!b) continue;
    for(const link of row.links){
      const href=link.href;
      if(!/^https:\/\/sbte\.bihar\.gov\.in\//i.test(href)||!/\.pdf(?:$|[?#])|questionbank/i.test(href)) continue;
      const clean=href.split('?')[0].split('#')[0];
      const filename=clean.split('/').pop().replace(/\.pdf$/i,'');
      if(!/^[A-Za-z0-9_-]{5,}$/.test(filename)) continue;
      const name=(row.cells[3]||row.cells[2]||'').trim()||filename;
      found.push({branchId:b.id,branchCode:b.code,branchName:b.name,code:filename,name,url:href});
    }
  }
  console.log('ALL_BRANCH_ROWS='+rows.length);
}else{
  const branchesToRun=branchOptions.filter(t=>!/^select|choose|all branch$/i.test(t)).map(t=>({text:t,b:findBranch(t)})).filter(x=>x.b);
  console.log('BRANCHES_FOUND='+branchesToRun.length);
  for(const item of branchesToRun){
    await choose(1,item.text);
    await choose(2,semText);
    await choose(3,t=>/^regular$/i.test(t.trim()));
    await page.getByRole('button',{name:/^search$/i}).click();
    await page.waitForTimeout(1000);
    const rows=await page.locator('table tbody tr').evaluateAll(trs=>trs.map(tr=>({
      cells:[...tr.querySelectorAll('td')].map(x=>x.textContent.trim()),
      links:[...tr.querySelectorAll('a')].map(a=>({href:a.href,text:a.textContent.trim()}))
    })));
    for(const row of rows){
      for(const link of row.links){
        const href=link.href;
        if(!/^https:\/\/sbte\.bihar\.gov\.in\//i.test(href)||!/\.pdf(?:$|[?#])|questionbank/i.test(href)) continue;
        const clean=href.split('?')[0].split('#')[0];
        const filename=clean.split('/').pop().replace(/\.pdf$/i,'');
        if(!/^[A-Za-z0-9_-]{5,}$/.test(filename)) continue;
        const name=(row.cells[3]||row.cells[2]||'').trim()||filename;
        found.push({branchId:item.b.id,branchCode:item.b.code,branchName:item.b.name,code:filename,name,url:href});
      }
    }
  }
}await browser.close();
const unique=[...new Map(found.map(x=>[x.branchId+'|'+x.code+'|'+x.url,x])).values()];
if(!unique.length) throw new Error('SBTE returned zero official Semester-I 2025 PDFs; refusing to modify archive.');

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
fs.writeFileSync(DATA,'window.PX_PYQ='+JSON.stringify(data,null,2)+';\n');
console.log('SYNCED_2025_PDFS='+unique.length);