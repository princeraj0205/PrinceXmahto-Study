/* PrinceXmahto Study — final A4 page packer */
(function(){
  function fixPdfPages(){
    const wrap=document.querySelector('.pdf-pages');
    if(!wrap) return;
    const old=[...wrap.querySelectorAll('.pdf-page')];
    if(!old.length || wrap.dataset.repacked==='1') return;
    const content=[];
    old.forEach(page=>[...page.children].forEach(node=>{
      if(!node.classList.contains('pdf-page-header')&&!node.classList.contains('pdf-page-label')&&!node.classList.contains('pdf-page-footer')) content.push(node);
    }));
    const first=old[0];
    const header=first.querySelector('.pdf-page-header')?.cloneNode(true);
    const footer=first.querySelector('.pdf-page-footer')?.cloneNode(true);
    if(!header||!footer||!content.length) return;
    wrap.innerHTML='';
    wrap.dataset.repacked='1';
    let page=null,body=null,pageNo=0;
    function newPage(){
      pageNo++;
      page=document.createElement('section');
      page.className='pdf-page';
      page.appendChild(header.cloneNode(true));
      const label=document.createElement('div');
      label.className='pdf-page-label';
      label.innerHTML=`<span>PRINCEXMAHTO STUDY</span><b>PAGE ${String(pageNo).padStart(2,'0')}</b>`;
      page.appendChild(label);
      body=document.createElement('div');
      body.className='pdf-page-body';
      page.appendChild(body);
      page.appendChild(footer.cloneNode(true));
      wrap.appendChild(page);
    }
    newPage();
    content.forEach(node=>{
      body.appendChild(node);
      if(body.scrollHeight>body.clientHeight+2 && body.children.length>1){
        body.removeChild(node);
        newPage();
        body.appendChild(node);
      }
    });
    [...wrap.querySelectorAll('.pdf-page')].forEach((p,i)=>{
      const n=String(i+1).padStart(2,'0');
      const f=p.querySelector('.pdf-page-footer>b');
      const l=p.querySelector('.pdf-page-label>b');
      if(f) f.textContent=`PAGE ${n}`;
      if(l) l.textContent=`PAGE ${n}`;
      p.classList.toggle('last-page',i===wrap.children.length-1);
    });
  }
  window.PX_FIX_PDF_PAGES=fixPdfPages;
  const run=()=>setTimeout(fixPdfPages,250);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
  window.addEventListener('beforeprint',fixPdfPages);
})();
