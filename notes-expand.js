/* PrinceXmahto Study — long-form classroom expansion engine
   Every real syllabus section becomes a structured mini-chapter.
   The goal is depth, clean pagination and beginner-first teaching — not duplicated filler.
*/
(function(){
  const L=window.PX_LESSONS||(window.PX_LESSONS={});
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  const has=(n,h)=>n.sections.some(s=>s[0]===h);
  const strip=s=>String(s||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  Object.keys(L).forEach(topic=>{
    const n=L[topic]; n.sections=n.sections||[];
    const original=n.sections.slice();
    const additions=[];
    original.forEach((sec,idx)=>{
      const title=sec[0], plain=strip(sec[1]);
      const base=esc(plain.slice(0,520))+(plain.length>520?'…':'');
      additions.push([`${idx+1}.1 ${title} — Start From Zero`,
        `<p><b>Starting point:</b> ${base}</p><p>First understand the ordinary-language meaning of this section. Do not memorise a difficult sentence before you know what the idea is trying to explain. Ask: <b>What is it? Why do we study it? What are its parts? What happens step by step?</b></p><div class="formula">BASIC IDEA → PARTS → RELATION → WORKING → EXAMPLE → APPLICATION</div><p><span class="star">★</span> <b>Checkpoint:</b> explain the idea aloud in your own words before continuing.</p>`]);
      additions.push([`${idx+1}.2 ${title} — Vocabulary`,
        `<p>Build the vocabulary before moving to advanced questions. For each new technical word write its meaning, symbol/unit if applicable, purpose and one example.</p><div class="term-grid"><div><b>TERM</b><span>Exact technical word</span></div><div><b>MEANING</b><span>Simple-language explanation</span></div><div><b>ROLE</b><span>What it describes or does</span></div><div><b>EXAMPLE</b><span>One easy example</span></div></div><p><b>Rule:</b> never leave an unfamiliar symbol or abbreviation unexplained.</p>`]);
      additions.push([`${idx+1}.3 ${title} — Concept in Small Steps`,
        `<ol class="steps"><li>Identify the starting condition or basic idea.</li><li>List the important parts, quantities or terms.</li><li>Understand the relationship between them.</li><li>State the governing rule, law, formula or process.</li><li>Work through a simple example.</li><li>Check the result and connect it to an application.</li></ol><div class="diagram-note"><span class="pen-blue">BLUE:</span> headings and labels &nbsp; <span class="pen-black">BLACK:</span> explanation &nbsp; <span class="pen-red">RED:</span> formula/key warning &nbsp; <span class="pen-green">GREEN:</span> example/result</div>`]);
      additions.push([`${idx+1}.4 ${title} — Detailed Understanding`,
        `<p>Read the original section sentence by sentence. For every statement ask four questions: <b>What?</b> What exactly is being described? <b>Why?</b> Why does it happen or matter? <b>How?</b> What mechanism, sequence or relationship explains it? <b>Where?</b> Where is it used or observed?</p><p><b>Section connection:</b> ${base}</p><p><span class="pen-green"><b>Learning tip:</b></span> after each paragraph, write one sentence in your own words. These sentences become quick revision hooks.</p>`]);
      additions.push([`${idx+1}.5 ${title} — Diagram / Visual Learning`,
        `<div class="diagram-note"><h3>Clean diagram page</h3><p>Use a labelled diagram, graph, flowchart, table or symbolic representation whenever the concept has a visual structure.</p><div class="sketch-lines"><span class="pen-blue">START</span> → <span class="pen-black">MAIN CONCEPT</span> → <span class="pen-red">IMPORTANT RELATION</span> → <span class="pen-green">RESULT / USE</span></div><p><b>Anti-overlap rule:</b> keep labels outside crowded shapes, use short arrows, leave white space and never place text on top of lines or symbols. Number process stages clearly.</p></div><p>For science and engineering, include units and symbols. For components, label the part and its function. For mathematics, show axes, points and scale where appropriate.</p>`]);
      additions.push([`${idx+1}.6 ${title} — Worked Understanding`,
        `<p><b>Numerical method:</b></p><div class="formula">GIVEN → FIND → CONCEPT → FORMULA → SUBSTITUTION → CALCULATION → CHECK → FINAL ANSWER + UNIT</div><p><b>Theory method:</b></p><div class="formula">DEFINITION → PRINCIPLE → STEP-BY-STEP EXPLANATION → DIAGRAM/EQUATION → APPLICATION → CONCLUSION</div><p><span class="star">★</span> Start with an easy example before attempting a difficult one. Understanding the method is more important than copying a final answer.</p>`]);
      additions.push([`${idx+1}.7 ${title} — Application & Connection`,
        `<p>Connect the concept with a real situation appropriate to the subject. Think about where the principle appears in an engineering system, laboratory, machine, electrical circuit, computer system, communication situation or daily life.</p><div class="diagram-note"><b class="pen-green">Connection map</b><br>Concept → property/behaviour → requirement → practical use → expected result</div><p><b>Remember:</b> definition tells <i>what</i>; principle tells <i>how/why</i>; application tells <i>where/when</i>.</p>`]);
      additions.push([`${idx+1}.8 ${title} — Common Mistakes`,
        `<ul><li>Memorising before understanding the meaning.</li><li>Mixing similar terms, symbols or units.</li><li>Using a formula without checking its conditions.</li><li>Drawing an unlabelled or overcrowded diagram.</li><li>Skipping working steps in a numerical.</li><li>Writing an application instead of a definition.</li></ul><p><span class="pen-red"><b>Red-pen warning:</b></span> when you make a mistake, record <b>why</b> it happened and how to avoid it next time.</p>`]);
      additions.push([`${idx+1}.9 ${title} — Exam Writing Practice`,
        `<p>For short answers, begin with the definition or principle. For long answers, use clear headings and numbered steps. For numericals, show the full method and unit.</p><p><span class="star">★</span> <b>High-priority practice:</b> close the notes and explain this section from memory, then check what you missed.</p><div class="formula">CLEAR DEFINITION + CORRECT STEPS + LABELLED DIAGRAM/FORMULA + FINAL RESULT</div>`]);
      additions.push([`${idx+1}.10 ${title} — Recall & Self-Test`,
        `<div class="term-grid"><div><b>WHAT?</b><span>Can I define it?</span></div><div><b>WHY?</b><span>Can I explain its purpose?</span></div><div><b>HOW?</b><span>Can I explain the mechanism?</span></div><div><b>USE?</b><span>Can I give an application?</span></div></div><ol><li>Write three facts without looking.</li><li>Write the main formula/principle if applicable.</li><li>Draw the main diagram if applicable.</li><li>Answer one ★ question in your own words.</li><li>Mark weak points for another revision round.</li></ol><p><b>Move ahead only after you can explain the section without copying it word-for-word.</b></p>`]);
    });
    additions.forEach(x=>{if(!has(n,x[0]))n.sections.push(x);});
    n.longForm=true;
    n.pageTarget='150-300';
  });
  window.PX_LESSONS=L;
})();
