/* PrinceXmahto Study — unit-level PDF/print controller */
(function(){
  const q=new URLSearchParams(location.search);
  window.PX_UNIT_META={branch:q.get('branch'),subject:q.get('subject'),topic:q.get('topic')};
  window.PX_PRINT_UNIT=function(){
    document.body.classList.add('print-unit');
    setTimeout(()=>window.print(),80);
    setTimeout(()=>document.body.classList.remove('print-unit'),1200);
  };
  window.PX_UNIT_TITLE=function(){
    const b=PX_CURRICULUM.findBranch(q.get('branch')); const s=b&&PX_CURRICULUM.findSubject(q.get('branch'),q.get('subject'));
    return b&&s?`${b.short} — ${s[1]} — Semester I`:'PrinceXmahto Study — Semester I';
  };
})();
