const q=new URLSearchParams(location.search);
const branchId=q.get('branch');
const subjectCode=q.get('subject');
const selected=q.get('topic');
const branch=PX_CURRICULUM.findBranch(branchId);
const subject=branch&&PX_CURRICULUM.findSubject(branchId,subjectCode);
const root=document.querySelector('#notes');
const nav=document.querySelector('#topicNav');
const esc=x=>String(x).replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[m]));

function syllabusBlock(topic){
 const d=window.PX_SYLLABUS_DETAIL&&window.PX_SYLLABUS_DETAIL[topic];
 if(!d)return '';
 const points=(d.points||[]).map(x=>`<li>${esc(x)}</li>`).join('');
 const learn=(d.learn||[]).map(x=>`<span>${esc(x)}</span>`).join('');
 return `<section class="syllabus-map"><h2>SBTE Syllabus Coverage</h2><div class="unit-label">${esc(d.unit||'Prescribed syllabus topic')}</div><ul>${points}</ul>${learn?`<div class="learn"><b>Included in this lesson:</b> ${learn}</div>`:''}</section>`;
}

function teacherBlock(note){
 let out='';
 if(note.def)out+=`<section class="teacher-card concept"><div class="teacher-label">Concept</div><p>${note.def}</p></section>`;
 if(note.body)out+=`<section class="teacher-card explanation"><div class="teacher-label">Detailed Explanation</div>${note.body}</section>`;
 if(note.formula)out+=`<section class="teacher-card formula"><div class="teacher-label">Formula / Core Idea</div><pre>${esc(note.formula)}</pre></section>`;
 if(note.ex)out+=`<section class="teacher-card example"><div class="teacher-label">Solved Example</div>${note.ex}</section>`;
 return out;
}

function renderLesson(topic,note,index,title,units){
 const progress=Math.round((index/units.length)*100);
 nav.innerHTML=`<div class="nav-title">${esc(branch.short)} · ${esc(title)}</div><div class="nav-progress"><span style="width:${progress}%"></span></div>${units.map((u,i)=>`<a class="nav-topic ${u===topic?'active':''}" href="topic.html?branch=${encodeURIComponent(branch.id)}&subject=${encodeURIComponent(subjectCode)}&topic=${encodeURIComponent(u)}"><span>${String(i+1).padStart(2,'0')}</span>${esc(u)}</a>`).join('')}`;
 const overview=note.overview?`<section class="chapter-overview"><div class="teacher-label">Learning Objective</div><p>${note.overview}</p></section>`:'';
 const teaching=teacherBlock(note);
 const sections=(note.sections||[]).map(([heading,html])=>`<section class="note-section"><h2>${esc(heading)}</h2><div class="teacher-copy">${html}</div></section>`).join('');
 const example=note.example?`<section class="note-section"><h2>Worked Examples — Step by Step</h2><div class="worked-example">${note.example}</div></section>`:'';
 const questions=(note.questions||[]).length?`<section class="note-section"><h2>Practice Questions</h2><ol class="exam-list">${note.questions.map((x,i)=>`<li>${i<Math.min(4,note.questions.length)?'<span class="star">★</span> ':''}${esc(x)}</li>`).join('')}</ol></section>`:'';
 const mcqs=(note.mcqs||[]).length?`<section class="note-section"><h2>Quick Check — MCQ</h2><ol class="mcq-list">${note.mcqs.map(x=>`<li>${x}</li>`).join('')}</ol>${note.answerKey?`<details class="answer-key"><summary>Answer Key</summary><p>${note.answerKey.map((x,i)=>`<b>${i+1}. ${esc(x)}</b>`).join(' &nbsp; ')}</p></details>`:''}</section>`:'';
 const revision=note.revision?`<section class="note-section"><h2>Quick Revision</h2><p>${note.revision}</p></section>`:'';
 root.innerHTML=`<div class="notebook"><div class="print-brand"><img src="assets/princexmahto-logo.svg" alt="PrinceXmahto"><span>PrinceXmahto Study · Semester I</span></div><div class="notebook-inner">
 <div class="lesson-head"><div><div class="eyebrow">${esc(branch.short)} · ${esc(subjectCode)} · LESSON ${String(index).padStart(2,'0')}</div><h1>${esc(topic)}</h1><p class="sub">${esc(title)} · ${esc(branch.name)} · Semester I</p></div></div>
 ${syllabusBlock(topic)}${overview}${teaching}${sections}${example}${questions}${mcqs}${revision}
 </div></div>`;
}

if(!branch||!subject){root.innerHTML='<div class="empty">Topic path not found. <a href="./">Return to catalogue</a>.</div>';}
else{
 const[code,title,units]=subject;
 const topic=units.includes(selected)?selected:units[0];
 const note=window.PX_LESSONS&&window.PX_LESSONS[topic];
 if(note)renderLesson(topic,note,units.indexOf(topic)+1,title,units);
 else{const script=document.createElement('script');script.src='topic.js?v=20260918.7';document.body.appendChild(script);}
}
