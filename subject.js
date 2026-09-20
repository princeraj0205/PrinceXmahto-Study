const p=new URLSearchParams(location.search),b=PX_CURRICULUM.findBranch(p.get('branch')),s=b&&PX_CURRICULUM.findSubject(p.get('branch'),p.get('subject')),root=document.querySelector('#subjectPage');
const esc=x=>String(x).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
if(!b||!s)root.innerHTML='<div class="empty">Subject not found. <a href="./">Return to catalogue</a>.</div>';
else{
 const [code,title,units]=s;
 const cards=units.map((u,i)=>{
  const chemSpecial=code==='2600103B'&&(b.id==='elx'||b.id==='electronics')&&(i===0||i===1||i===2);
  const href=chemSpecial?'chemistry-unit'+(i+1)+'.html?v=20260920.12':'topic.html?branch='+b.id+'&subject='+encodeURIComponent(code)+'&topic='+encodeURIComponent(u);
  const label=chemSpecial?'Open complete Unit '+(i+1)+' deep notes →':'Open topic notes →';
  return '<a class="topic-card" href="'+href+'"><span>UNIT '+String(i+1).padStart(2,'0')+'</span><h2>'+esc(u)+'</h2><p>'+label+'</p></a>';
 }).join('');
 root.innerHTML='<div class="eyebrow">'+esc(b.short)+' · '+esc(code)+' · SEMESTER I</div><h1 class="page-title">'+esc(title)+'</h1><p class="lead">'+esc(b.name)+' · '+units.length+' curriculum units. Select a topic to open its lesson view.</p><div class="subject-meta"><span>Course code '+esc(code)+'</span><span>'+units.length+' units</span><span>Session 2026</span></div><div class="topic-grid">'+cards+'</div>';
}