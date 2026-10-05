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

const yearsToRun=['2023','2024','2025'];
const semestersToRun=['2','3','4','5','6'];
const found=[];
const branchOptions=await listCombo(1);
const allBranch=branchOptions.find(t=>/all\\s*branch/i.test(t.trim()));
if(!allBranch) throw new Error('SBTE All Branch option not found.');
for(const yearText of yearsToRun){
  await choose(0,t=>t.trim()===yearText);
  for(const semText of semestersToRun){
    await choose(1,allBranch);
    await choose(2,t=>t.trim()===semText || new RegExp('semester\\\\s*[- ]?'+semText+'\\\\b','i').test(t.trim()));
    await choose(3,t=>/^regular$/i.test(t.trim()));
    await page.getByRole('button',{name:/^search$/i}).click();
    await page.waitForTimeout(1200);
    const rows=await page.locator('table tbody tr').evaluateAll(trs=>trs.map(tr=>({
      cells:[...tr.querySelectorAll('td')].map(x=>x.textContent.trim()),
      links:[...tr.querySelectorAll('a')].map(a=>({href:a.href,text:a.textContent.trim()}))
    })));
    for(const row of rows){
      const b=findBranch(row.cells[1]||''); if(!b) continue;
      for(const link of row.links){
        const href=link.href;
        if(!/^https:\\/\\/sbte\\.bihar\\.gov\\.in\\//i.test(href)||!/\\.pdf(?:$|[?#])|questionbank/i.test(href)) continue;
        const clean=href.split('?')[0].split('#')[0];
        const filename=clean.split('/').pop().replace(/\\.pdf$/i,'');
        if(!/^[A-Za-z0-9_-]{5,}$/.test(filename)) continue;
        const name=(row.cells[3]||row.cells[2]||'').trim()||filename;
        found.push({semester:Number(semText),year:Number(yearText),branchId:b.id,branchCode:b.code,branchName:b.name,code:filename,name,url:clean});
      }
    }
  }
}
await browser.close();
const unique=[...new Map(found.map(x=>[x.semester+'|'+x.year+'|'+x.branchId+'|'+x.code+'|'+x.url,x])).values()];
if(!unique.length) throw new Error('SBTE returned zero official Semester-II to VI PDFs; refusing to modify archive.');
const output={version:'2026.10.semesters',source:SOURCE,generatedAt:new Date().toISOString(),semesters:{}};
for(const sem of semestersToRun) output.semesters[sem]={semester:Number(sem),branches:{}};
for(const x of unique){
  const branch=output.semesters[String(x.semester)].branches[x.branchId] ||= {id:x.branchId,code:x.branchCode,name:x.branchName,subjects:{}};
  const subject=branch.subjects[x.code] ||= {code:x.code,name:x.name,papers:{}};
  subject.papers[String(x.year)]=x.url;
}
fs.writeFileSync('sbte-pyq-semesters-data.js','window.PX_SEM_PYQ='+JSON.stringify(output,null,2)+';\\n');
console.log('SYNCED_SEM_II_VI_PDFS='+unique.length);
