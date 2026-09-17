/* PrinceXmahto Study — one-click A4 PDF download */
(function(){
  const q=new URLSearchParams(location.search);
  window.PX_UNIT_META={branch:q.get('branch'),subject:q.get('subject'),topic:q.get('topic')};

  function title(){
    const b=window.PX_CURRICULUM&&PX_CURRICULUM.findBranch(q.get('branch'));
    const s=b&&PX_CURRICULUM.findSubject(q.get('branch'),q.get('subject'));
    const t=q.get('topic')||'Unit Notes';
    return `${b?.short||'SEM-I'}-${s?.[0]||''}-${t}`.replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').slice(0,110)+'.pdf';
  }

  function loadHtml2Pdf(){
    return new Promise((resolve,reject)=>{
      if(window.html2pdf) return resolve(window.html2pdf);
      const s=document.createElement('script');
      s.src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      s.onload=()=>window.html2pdf?resolve(window.html2pdf):reject(new Error('PDF library unavailable'));
      s.onerror=()=>reject(new Error('PDF library unavailable'));
      document.head.appendChild(s);
    });
  }

  window.PX_DOWNLOAD_PDF=async function(){
    const target=document.querySelector('.notebook');
    if(!target){window.print();return;}
    const button=document.querySelector('[data-pdf-download]');
    const old=button&&button.innerHTML;
    if(button){button.disabled=true;button.innerHTML='⏳ Preparing PDF…';}
    try{
      await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
      const pdf=await loadHtml2Pdf();
      const clone=target.cloneNode(true);
      clone.querySelectorAll('.unit-download,.screen-only,.no-print,.print-hide').forEach(x=>x.remove());
      const holder=document.createElement('div');
      holder.style.cssText='position:fixed;left:-100000px;top:0;width:190mm;background:#fff;z-index:-1;';
      holder.appendChild(clone);document.body.appendChild(holder);
      await pdf().set({
        margin:[9,9,10,9],
        filename:title(),
        image:{type:'jpeg',quality:.96},
        html2canvas:{scale:1.6,useCORS:true,backgroundColor:'#ffffff',scrollX:0,scrollY:0},
        jsPDF:{unit:'mm',format:'a4',orientation:'portrait',compress:true},
        pagebreak:{mode:['css','legacy'],avoid:['.formula','.definition','.vvi','.diagram-note','figure','table']}
      }).from(clone).save();
      holder.remove();
    }catch(e){
      console.warn('One-click PDF failed; using browser print.',e);
      window.print();
    }finally{
      if(button){button.disabled=false;button.innerHTML=old||'📄 Download PDF';}
    }
  };

  window.PX_PRINT_UNIT=function(){window.print();};
  window.PX_UNIT_TITLE=function(){
    const b=PX_CURRICULUM.findBranch(q.get('branch')); const s=b&&PX_CURRICULUM.findSubject(q.get('branch'),q.get('subject'));
    return b&&s?`${b.short} — ${s[1]} — Semester I`:'PrinceXmahto Study — Semester I';
  };
})();
