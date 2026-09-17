/* PrinceXmahto Study — premium A4 PDF / print controller */
(function(){
  const q=new URLSearchParams(location.search);
  window.PX_UNIT_META={branch:q.get('branch'),subject:q.get('subject'),topic:q.get('topic')};
  window.PX_PRINT_UNIT=function(){
    document.body.classList.add('print-unit');
    document.documentElement.classList.add('px-printing');
    setTimeout(()=>window.print(),100);
    setTimeout(()=>{document.body.classList.remove('print-unit');document.documentElement.classList.remove('px-printing')},1600);
  };
  window.PX_UNIT_TITLE=function(){
    const b=PX_CURRICULUM.findBranch(q.get('branch')); const s=b&&PX_CURRICULUM.findSubject(q.get('branch'),q.get('subject'));
    return b&&s?`${b.short} — ${s[1]} — Semester I`:'PrinceXmahto Study — Semester I';
  };
})();
