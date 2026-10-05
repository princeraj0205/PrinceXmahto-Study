(function(){
  const ENDPOINT='https://dvoioacvqrujywwqqygo.supabase.co/functions/v1/track-visitor';
  const KEY='sb_publishable_XJ-KHZyM2H9-ADJudvRKlw_9Mr17W1J';
  let sid='';
  try{sid=localStorage.getItem('px_pyq_session')||crypto.randomUUID();localStorage.setItem('px_pyq_session',sid)}catch(e){sid=(crypto.randomUUID?crypto.randomUUID():String(Date.now()))}
  const send=(type,target,meta)=>{
    const payload=JSON.stringify({event_type:type,page_path:location.pathname+location.search,session_id:sid,target:target||null,metadata:Object.assign({title:document.title,site:'PrinceXmahto Study',archive:'SBTE 1st Year / 1st Semester'},meta||{})});
    try{fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','apikey':KEY},body:payload,keepalive:true}).catch(()=>{})}catch(e){}
  };
  send('page_view');
  document.addEventListener('click',function(e){
    const a=e.target.closest&&e.target.closest('a,button');
    if(!a)return;
    const label=(a.innerText||a.getAttribute('aria-label')||a.getAttribute('href')||'').trim().slice(0,180);
    if(label)send('click',label,{href:a.href||null});
  },{passive:true});
  window.addEventListener('pagehide',function(){send('page_exit',location.pathname)});
})();