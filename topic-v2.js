const q=new URLSearchParams(location.search);
const branchId=q.get('branch');
const subjectCode=q.get('subject');
const selected=q.get('topic');
const branch=PX_CURRICULUM.findBranch(branchId);
const subject=branch&&PX_CURRICULUM.findSubject(branchId,subjectCode);
const root=document.querySelector('#notes');
const nav=document.querySelector('#topicNav');
const esc=x=>String(x).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

/* Pack the already-rendered lesson into real A4-sized pages before printing.
   Short sections share a page; long sections continue onto the next page. */
function paginateUnit(){
 const inner=root.querySelector('.notebook-inner');
 if(!inner||inner.dataset.paginated==='1')return;
 inner.dataset.paginated='1';
 const nodes=[...inner.children].filter(el=>!el.classList.contains('unit-download'));
 const pagesWrap=document.createElement('div');
 pagesWrap.className='pdf-pages';
 const PAGE_LIMIT=1000;
 let page=null,pageNo=0;
 const newPage=()=>{
   pageNo++;
   page=document.createElement('section');
   page.className='pdf-page';
   page.style.breakAfter='page';
   page.style.pageBreakAfter='always';
   page.style.breakInside='auto';
   page.style.pageBreakInside='auto';
   page.innerHTML=`<div class="pdf-page-label">PRINCEXMAHTO STUDY <span>PAGE ${String(pageNo).padStart(2,'0')}</span></div>`;
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
       if(shell.children.length===1){
         page.removeChild(shell);
         newPage();
         makeShell();
       }else{
         newPage();
         makeShell();
       }
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
 const sections=note.sections.map(([heading,html])=>`<section class="note-section lesson-page"><h2>${esc(heading)}</h2>${html}</section>`).join('');
 root.innerHTML=`<div class="notebook"><div class="print-brand"><img src="assets/princexmahto-logo.svg" alt="PrinceXmahto"><span>PrinceXmahto Study · Semester I</span></div><div class="notebook-inner">
 <div class="unit-download"><span class="progress-badge">${progress}% syllabus</span><button class="pill" onclick="window.PX_PRINT_UNIT?PX_PRINT_UNIT():window.print()">Download / Save Unit PDF ↗</button></div>
 <div class="lesson-head"><div><div class="eyebrow">${esc(branch.short)} · ${esc(subjectCode)} · UNIT ${String(index).padStart(2,'0')}</div><h1>${esc(topic)}</h1><p class="sub">${esc(title)} · ${esc(branch.name)} · Semester I</p></div></div>
 <section class="note-section lesson-page"><h2>Unit at a Glance</h2><p>${note.overview}</p><div class="formula">FIRST UNDERSTAND → THEN LEARN → THEN PRACTISE → THEN REVISE</div></section>
 ${sections}
 <section class="note-section lesson-page"><h2>Worked Example</h2><p>${note.example}</p></section>
 <section class="note-section lesson-page"><h2>Practice Questions</h2><ol class="exam-list">${note.questions.map((x,i)=>`<li>${i<Math.min(4,note.questions.length)?'<span class="star">★</span> ':''}${esc(x)}</li>`).join('')}</ol></section>
 <section class="note-section lesson-page"><h2>MCQ Quick Check</h2><ol class="mcq-list">${note.mcqs.map(x=>`<li>${x}</li>`).join('')}</ol>${note.answerKey?`<details class="answer-key"><summary>Show answer key</summary><p>${note.answerKey.map((x,i)=>`<b>${i+1}. ${esc(x)}</b>`).join(' &nbsp; ')}</p></details>`:''}</section>
 <section class="note-section lesson-page"><h2>Quick Revision</h2><p>${note.revision}</p></section>
 <section class="note-section lesson-page final-tip"><h2>Last Page — Revise Before Exam</h2><p>Definitions → principles → formulas → diagrams → solved examples → ★ VVI practice → applications/precautions.</p><p><b>PrinceXmahto Study</b> · Learn · Build · Grow</p></section>
 </div></div>`;
 /* Temporarily use the compact A4 typography while measuring, then restore the normal site view. */
 document.documentElement.classList.add('px-paginating');
 requestAnimationFrame(()=>{
   paginateUnit();
   document.documentElement.classList.remove('px-paginating');
 });
}
if(!branch||!subject){root.innerHTML='<div class="empty">Topic path not found. <a href="./">Return to catalogue</a>.</div>';}else{const[code,title,units]=subject;const topic=units.includes(selected)?selected:units[0];const note=window.PX_LESSONS&&window.PX_LESSONS[topic];if(note)renderNewLesson(topic,note,units.indexOf(topic)+1,title,units);else{const script=document.createElement('script');script.src='topic.js';document.body.appendChild(script);}}
