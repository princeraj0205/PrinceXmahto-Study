const root=document.querySelector('#branches'),search=document.querySelector('#search'),results=document.querySelector('#searchResults');
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function branchCard(b){const topics=b.subjects.reduce((n,s)=>n+s[2].length,0);return `<a class="card" href="branch.html?branch=${encodeURIComponent(b.id)}"><div><span class="code">${esc(b.short)} · SEMESTER I</span><h3>${esc(b.name)}</h3><p>${b.subjects.length} subjects · ${topics} mapped units</p></div><span class="arrow">↗</span></a>`}
function render(){root.innerHTML=PX_CURRICULUM.branches.map(branchCard).join('')}
function doSearch(v){v=v.trim().toLowerCase();if(!v){results.hidden=true;root.hidden=false;return}const hits=[];for(const b of PX_CURRICULUM.branches)for(const s of b.subjects)for(const t of s[2]){const hay=[b.name,b.short,s[0],s[1],t].join(' ').toLowerCase();if(hay.includes(v))hits.push({b,s,t})}root.hidden=true;results.hidden=false;if(!hits.length){results.innerHTML='<div class="empty">No matching curriculum item found.</div>';return}results.innerHTML=`<div class="result-head"><b>${hits.length}</b> matching curriculum topics</div>${hits.map(x=>`<a class="result" href="topic.html?branch=${x.b.id}&subject=${encodeURIComponent(x.s[0])}&topic=${encodeURIComponent(x.t)}"><div><span>${esc(x.b.short)} · ${esc(x.s[0])}</span><strong>${esc(x.t)}</strong><small>${esc(x.s[1])}</small></div><b>→</b></a>`).join('')}`}
render();search.addEventListener('input',e=>doSearch(e.target.value));document.querySelector('#printCatalogue')?.addEventListener('click',()=>window.print());

(function(){
  const E='https://dvoioacvqrujywwqqygo.supabase.co/functions/v1/track-visitor';
  const K='sb_publishable_XJ-KHZyM2H9-ADJudvRKlw_9Mr17W1J';
  const S='pxm_sid';
  let sid=localStorage.getItem(S)||crypto.randomUUID();
  localStorage.setItem(S,sid);
  let accessToken='';
  let client=null;
  let ready=false;

  function loadSupabase(){
    return new Promise((resolve,reject)=>{
      if(window.supabase){resolve();return}
      const sc=document.createElement('script');
      sc.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      sc.onload=resolve;
      sc.onerror=reject;
      document.head.appendChild(sc);
    });
  }

  async function init(){
    try{
      await loadSupabase();
      client=window.supabase.createClient('https://dvoioacvqrujywwqqygo.supabase.co',K);
      const {data}=await client.auth.getSession();
      accessToken=data.session?.access_token||'';
      client.auth.onAuthStateChange((_event,session)=>{
        accessToken=session?.access_token||'';
      });
      ready=true;
      send('page_view',{title:document.title});
    }catch(e){}
  }

  function send(eventType,meta){
    if(!ready)return;
    const headers={apikey:K,'Content-Type':'application/json'};
    if(accessToken)headers.Authorization='Bearer '+accessToken;
    fetch(E,{
      method:'POST',
      keepalive:true,
      headers,
      body:JSON.stringify({
        session_id:sid,
        event_type:eventType,
        page_path:location.pathname+location.search,
        target:meta?.target||null,
        metadata:meta||{}
      })
    }).catch(()=>{});
  }

  document.addEventListener('click',e=>{
    const a=e.target.closest('a,button');
    if(a)send('click',{
      target:(a.innerText||a.getAttribute('aria-label')||a.href||'').trim().slice(0,200),
      href:(a.href||'').slice(0,500)
    });
  },{passive:true});

  addEventListener('pagehide',()=>send('page_exit',{duration_seconds:Math.round(performance.now()/1000)}));
  init();
})();