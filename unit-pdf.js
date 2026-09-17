/* PrinceXmahto Study — A4 PDF controller */
(function(){
  const q=new URLSearchParams(location.search);
  window.PX_UNIT_META={branch:q.get('branch'),subject:q.get('subject'),topic:q.get('topic')};
  window.PX_PRINT_UNIT=function(){
    /* Pagination is normally completed when the lesson renders. If the user
       clicks immediately, give the browser one frame to finish layout first. */
    const printNow=()=>{
      document.body.classList.add('print-unit');
      document.documentElement.classList.add('px-printing');
      setTimeout(()=>window.print(),80);
      setTimeout(()=>{document.body.classList.remove('print-unit');document.documentElement.classList.remove('px-printing')},1400);
    };
    if(document.querySelector('.notebook-inner[data-paginated="1"]')) printNow();
    else requestAnimationFrame(printNow);
  };
  window.PX_UNIT_TITLE=function(){
    const b=PX_CURRICULUM.findBranch(q.get('branch')); const s=b&&PX_CURRICULUM.findSubject(q.get('branch'),q.get('subject'));
    return b&&s?`${b.short} — ${s[1]} — Semester I`:'PrinceXmahto Study — Semester I';
  };
})();
