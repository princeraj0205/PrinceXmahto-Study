const q=new URLSearchParams(location.search);
const branchId=q.get('branch');
const subjectCode=q.get('subject');
const selected=q.get('topic');
const branch=PX_CURRICULUM.findBranch(branchId);
const subject=branch&&PX_CURRICULUM.findSubject(branchId,subjectCode);
const root=document.querySelector('#notes');
const nav=document.querySelector('#topicNav');
const esc=x=>String(x).replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[m]));

/*
  The lesson renderer deliberately stays content-first. It does not invent
  generic study-advice chapters. Every printed A4 page is made from the
  selected topic's actual note sections, worked examples, diagrams and
  questions.
*/
function paginateUnit(){
 const inner=root.querySelector('.notebook-inner');
 if(!inner||inner.dataset.paginated==='1')return;
 inner.dataset.paginated='1';
 const nodes=[...inner.children].filter(el=>!el.classList.contains('unit-download'));
 const pagesWrap=document.createElement('div');
 pagesWrap.className='pdf-pages';
 const PAGE_LIMIT=900;
 let page=null,pageNo=0;
 const newPage=()=>{
   pageNo++;
   page=document.createElement('section');
   page.className='pdf-page';
   page.style.breakAfter='page';
   page.style.pageBreakAfter='always';
   page.style.breakInside='auto';
   page.style.pageBreakInside='auto';
   page.innerHTML=`
     <div class="pdf-page-header">
       <div class="pdf-brand-row">
         <img src="assets/princexmahto-logo.svg" alt="PrinceXmahto logo">
         <div class="pdf-brand-name"><strong>Prince<span>Xmahto</span></strong><small>STUDY • LEARN • GROW • SUCCEED</small></div>
         <div class="pdf-motto">Education<br><i>for a Better</i><br>Tomorrow</div>
       </div>
       <div class="pdf-info-row">
         <span>🎓 Diploma &amp; Polytechnic Study Notes</span><span>🌐 www.princexmahto.in</span><span>◎ @princexmahto</span><span>▶ PrinceXmahto</span>
       </div>
     </div>
     <div class="pdf-page-label"><span>PRINCEXMAHTO STUDY</span><b>PAGE ${String(pageNo).padStart(2,'0')}</b></div>
     <div class="pdf-page-footer">
       <div><strong>PrinceXmahto</strong><small>STUDY RESOURCES</small></div>
       <span>🌐 www.princexmahto.in</span><span>◎ @princexmahto</span><span>▶ PrinceXmahto</span>
       <b>PAGE ${String(pageNo).padStart(2,'0')}</b>
     </div>`;
   pagesWrap.appendChild(page);
   return page;
 };
 const over=()=>page&&page.scrollHeight>PAGE_LIMIT;
 const putSimple=node=>{
   if(!page)newPage();
   const copy=node.cloneNode(true);
   page.appendChild(copy);
   if(over()){
     page.removeChild(copy);
     newPage();
     page.appendChild(copy);
   }
 };
 const putSection=section=>{
   const parts=[...section.children];
   if(!parts.length){putSimple(section);return;}
   let shell=null;
   const makeShell=()=>{
     shell=document.createElement('section');
     shell.className=section.className.replace(/\blesson-page\b/g,'').trim()||'note-section';
     shell.style.breakInside='auto';
     shell.style.pageBreakInside='auto';
     page.appendChild(shell);
   };
   for(const part of parts){
     if(!page)newPage();
     if(!shell)makeShell();
     const copy=part.cloneNode(true);
     shell.appendChild(copy);
     if(over()){
       shell.removeChild(copy);
       if(shell.children.length===1)page.removeChild(shell);
       newPage();
       makeShell();
       shell.appendChild(copy);
     }
   }
 };
 nodes.forEach(node=>node.classList.contains('note-section')?putSection(node):putSimple(node));
 inner.innerHTML='';
 inner.appendChild(pagesWrap);
 pagesWrap.lastElementChild?.style.removeProperty('break-after');
 pagesWrap.lastElementChild?.style.removeProperty('page-break-after');
}

function renderNewLesson(topic,note,index,title,units){
 const progress=Math.round((index/units.length)*100);
 nav.innerHTML=`<div class="nav-title">${esc(branch.short)} · ${esc(title)}</div><div class="nav-progress"><span style="width:${progress}%"></span></div>${units.map((u,i)=>`<a class="nav-topic ${u===topic?'active':''}" href="topic.html?branch=${encodeURIComponent(branch.id)}&subject=${encodeURIComponent(subjectCode)}&topic=${encodeURIComponent(u)}"><span>${String(i+1).padStart(2,'0')}</span>${esc(u)}</a>`).join('')}`;
 const sections=(note.sections||[]).map(([heading,html])=>`<section class="note-section"><h2>${esc(heading)}</h2>${html}</section>`).join('');
 const overview=note.overview?`<section class="chapter-overview"><p>${note.overview}</p></section>`:'';
 const example=note.example?`<section class="note-section"><h2>Worked Example</h2><p>${note.example}</p></section>`:'';
 const questions=Array.isArray(note.questions)&&note.questions.length?`<section class="note-section"><h2>Important Questions</h2><ol class="exam-list">${note.questions.map((x,i)=>`<li>${i<Math.min(4,note.questions.length)?'<span class="star">★</span> ':''}${esc(x)}</li>`).join('')}</ol></section>`:'';
 const mcqs=Array.isArray(note.mcqs)&&note.mcqs.length?`<section class="note-section"><h2>MCQ Practice</h2><ol class="mcq-list">${note.mcqs.map(x=>`<li>${x}</li>`).join('')}</ol>${note.answerKey?`<details class="answer-key"><summary>Answer key</summary><p>${note.answerKey.map((x,i)=>`<b>${i+1}. ${esc(x)}</b>`).join(' &nbsp; ')}</p></details>`:''}</section>`:'';
 const revision=note.revision?`<section class="note-section"><h2>Quick Revision</h2><p>${note.revision}</p></section>`:'';
 root.innerHTML=`<div class="notebook"><div class="print-brand"><img src="assets/princexmahto-logo.svg" alt="PrinceXmahto"><span>PrinceXmahto Study · Semester I</span></div><div class="notebook-inner">
 <div class="lesson-head"><div><div class="eyebrow">${esc(branch.short)} · ${esc(subjectCode)} · TOPIC ${String(index).padStart(2,'0')}</div><h1>${esc(topic)}</h1><p class="sub">${esc(title)} · ${esc(branch.name)} · Semester I</p></div></div>
 ${overview}${sections}${example}${questions}${mcqs}${revision}
 </div></div>`;
 document.documentElement.classList.add('px-paginating');
 requestAnimationFrame(()=>{paginateUnit();document.documentElement.classList.remove('px-paginating');});
}

if(!branch||!subject){root.innerHTML='<div class="empty">Topic path not found. <a href="./">Return to catalogue</a>.</div>';}
else{
 const[code,title,units]=subject;
 const topic=units.includes(selected)?selected:units[0];
 const note=window.PX_LESSONS&&window.PX_LESSONS[topic];
 if(note)renderNewLesson(topic,note,units.indexOf(topic)+1,title,units);
 else{const script=document.createElement('script');script.src='topic.js?v=20260918';document.body.appendChild(script);}
}