const q = new URLSearchParams(location.search);
const branchId = q.get('branch');
const subjectCode = q.get('subject');
const selected = q.get('topic');
const branch = PX_CURRICULUM.findBranch(branchId);
const subject = branch && PX_CURRICULUM.findSubject(branchId, subjectCode);
const root = document.querySelector('#notes');
const nav = document.querySelector('#topicNav');
const esc = x => String(x).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

function renderNewLesson(topic, note, index, title, units) {
  const progress = Math.round((index / units.length) * 100);
  nav.innerHTML = `<div class="nav-title">${esc(branch.short)} · ${esc(title)}</div><div class="nav-progress"><span style="width:${progress}%"></span></div>${units.map((u,i)=>`<a class="nav-topic ${u===topic?'active':''}" href="topic.html?branch=${encodeURIComponent(branch.id)}&subject=${encodeURIComponent(subjectCode)}&topic=${encodeURIComponent(u)}"><span>${String(i+1).padStart(2,'0')}</span>${esc(u)}</a>`).join('')}`;
  root.innerHTML = `<div class="notebook"><div class="notebook-inner">
    <div class="unit-download"><span class="progress-badge">${progress}% syllabus</span><button class="pill" onclick="window.PX_PRINT_UNIT?PX_PRINT_UNIT():window.print()">Download / Save Unit PDF ↗</button></div>
    <div class="lesson-head"><div><div class="eyebrow">${esc(branch.short)} · ${esc(subjectCode)} · UNIT ${String(index).padStart(2,'0')}</div><h1>${esc(topic)}</h1><p class="sub">${esc(title)} · ${esc(branch.name)} · Semester I</p></div></div>
    <section class="note-section"><h2>Unit at a Glance</h2><p>${note.overview}</p></section>
    ${note.sections.map(([heading,html])=>`<section class="note-section"><h2>${esc(heading)}</h2>${html}</section>`).join('')}
    <section class="note-section"><h2>Worked Example</h2><p>${note.example}</p></section>
    <section class="note-section"><h2>Practice Questions</h2><ol class="exam-list">${note.questions.map((x,i)=>`<li>${i<Math.min(4,note.questions.length)?'<span class="star">★</span> ':''}${esc(x)}</li>`).join('')}</ol></section>
    <section class="note-section"><h2>MCQ Quick Check</h2><ol class="mcq-list">${note.mcqs.map(x=>`<li>${x}</li>`).join('')}</ol>${note.answerKey?`<details class="answer-key"><summary>Show answer key</summary><p>${note.answerKey.map((x,i)=>`<b>${i+1}. ${esc(x)}</b>`).join(' &nbsp; ')}</p></details>`:''}</section>
    <section class="note-section"><h2>Quick Revision</h2><p>${note.revision}</p></section>
    <section class="note-section final-tip"><h2>Last Page — Revise Before Exam</h2><p>Definitions → principles → formulas → diagrams → solved examples → ★ VVI practice → applications/precautions.</p><p><b>PrinceXmahto Study</b> · Learn · Build · Grow</p></section>
  </div></div>`;
}

if (!branch || !subject) {
  root.innerHTML = '<div class="empty">Topic path not found. <a href="./">Return to catalogue</a>.</div>';
} else {
  const [code, title, units] = subject;
  const topic = units.includes(selected) ? selected : units[0];
  const note = window.PX_LESSONS && window.PX_LESSONS[topic];
  if (note) renderNewLesson(topic, note, units.indexOf(topic)+1, title, units);
  else { const script=document.createElement('script'); script.src='topic.js'; document.body.appendChild(script); }
}
