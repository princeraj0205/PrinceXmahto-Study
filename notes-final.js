/* PrinceXmahto Study — final polish / coverage layer */
(function(){
  const L=window.PX_LESSONS||(window.PX_LESSONS={});
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

  const missing={
    'Electrical wiring and tools':{
      focus:'wiring tools, insulated conductors, switches, protection devices, testing instruments and safe isolation before work.',
      facts:'<ul><li>Common tools include insulated screwdrivers, pliers, wire strippers and test instruments.</li><li>Choose conductor size and protection according to the intended circuit and applicable safety rules.</li><li>Never treat a live circuit as a normal practice exercise; isolation and verification come first.</li></ul>',
      example:'A basic wiring question should be answered by identifying the supply, control device, load, protective arrangement and earthing path, then explaining the safe sequence.'
    },
    'Soldering and basic testing':{
      focus:'clean solder joints, correct component placement, continuity checks and basic voltage/resistance verification.',
      facts:'<ul><li>A sound joint should be mechanically secure and electrically continuous.</li><li>Inspect polarity-sensitive components before powering a circuit.</li><li>Use the correct multimeter mode and range for the quantity being measured.</li></ul>',
      example:'For a non-powered continuity check, isolate the circuit, select continuity mode, place probes across the intended path and interpret the meter indication according to the instrument manual.'
    },
    'Safety and first aid':{
      focus:'hazard awareness, personal protective equipment, emergency response, evacuation and basic first-aid principles.',
      facts:'<ul><li>Prevention starts with hazard identification, housekeeping and appropriate PPE.</li><li>In an emergency, raise the alarm, move to a safe location and follow trained institutional procedures.</li><li>First aid is immediate supportive care while appropriate professional help is arranged.</li></ul>',
      example:'If an accident occurs in a workshop, the exam answer should emphasise stopping the hazard when it is safe to do so, alerting responsible personnel, getting the injured person to safety and following trained first-aid/emergency procedures.'
    }
  };

  function build(t,d){
    return {
      overview:`${esc(t)} is a Semester I practical/technical lesson. Study the purpose, components, working sequence, safety points and exam terminology together.`,
      sections:[
        ['1. Concept and Definition',`<div class="definition"><b>What it covers:</b> ${esc(d.focus)}</div><p>${d.facts}</p>`],
        ['2. Key Points',`<ul><li>Identify the purpose before memorising parts or steps.</li><li>Learn symbols, names, units and safety conditions used with the topic.</li><li>Separate normal operation from faults, limitations and precautions.</li></ul><div class="formula">Understand → Identify → Apply → Check → Revise</div>`],
        ['3. Step-by-Step Method',`<ol class="steps"><li>Read the question and underline technical keywords.</li><li>State the definition or purpose in one clear paragraph.</li><li>Explain the components/process in logical order.</li><li>Add a labelled sketch, symbol, table or formula when useful.</li><li>Finish with application, precaution or conclusion.</li></ol>`],
        ['4. Practical Connection',`<p>${d.facts}</p><p><b>Exam focus:</b> connect each theoretical point with a realistic engineering, laboratory or workshop example.</p>`],
        ['5. Common Mistakes',`<ul><li>Skipping safety conditions.</li><li>Confusing component names or measurement modes.</li><li>Giving a process without its purpose.</li><li>Leaving diagrams or symbols unlabelled.</li><li>Using unsupported assumptions instead of stated conditions.</li></ul>`]
      ],
      example:`<b>Worked example:</b> ${d.example}`,
      questions:[`Define ${esc(t)} and state its purpose.`,`List the important tools/components/terms associated with ${esc(t)}.`,`Explain the main process or working sequence of ${esc(t)}.`,`Write the important precautions for ${esc(t)}.`,`Give one practical application of ${esc(t)}.`],
      mcqs:[`The first priority in a practical task is: <b>A)</b> safety and correct procedure &nbsp; <b>B)</b> speed only &nbsp; <b>C)</b> guessing &nbsp; <b>D)</b> skipping checks`,`A good technical record should contain: <b>A)</b> clear observations/steps &nbsp; <b>B)</b> random values &nbsp; <b>C)</b> no units &nbsp; <b>D)</b> no labels`,`Before using a measurement instrument, the student should: <b>A)</b> select the correct mode/range &nbsp; <b>B)</b> use any setting &nbsp; <b>C)</b> ignore leads &nbsp; <b>D)</b> guess the reading`,`A labelled diagram is useful when: <b>A)</b> it clarifies parts or connections &nbsp; <b>B)</b> it replaces all explanation &nbsp; <b>C)</b> labels are unnecessary &nbsp; <b>D)</b> the question has no technical content`,`A strong exam answer ends with: <b>A)</b> a relevant result/application/precaution &nbsp; <b>B)</b> an unrelated fact &nbsp; <b>C)</b> blank space &nbsp; <b>D)</b> repeated heading`],
      revision:`${esc(t)} — revise purpose, components/terms, sequence, precautions and one practical example.`,
      answerKey:['A','A','A','A','A'],
      _pxFinal:true
    };
  }

  Object.keys(missing).forEach(t=>{ if(!L[t]) L[t]=build(t,missing[t]); });

  /* Add a consistent exam-ready layer without overwriting existing detailed notes. */
  Object.keys(L).forEach(t=>{
    const n=L[t];
    if(!Array.isArray(n.sections)) n.sections=[];
    if(!n.sections.some(s=>String(s[0]).toLowerCase().includes('learning objectives'))){
      const focus=(n.overview||'').replace(/<[^>]*>/g,'').slice(0,220);
      n.sections.unshift(['Learning Objectives',`<div class="objective-grid"><div><b>Know</b><span>definitions, terms and symbols</span></div><div><b>Understand</b><span>principle, sequence and relationships</span></div><div><b>Apply</b><span>examples, numericals or practical use</span></div><div><b>Revise</b><span>exam questions and quick checks</span></div></div><p class="muted">${esc(focus)}</p>`]);
    }
    if(!n.sections.some(s=>String(s[0]).toLowerCase().includes('exam answer pattern'))){
      n.sections.push(['Exam Answer Pattern','<div class="answer-pattern"><b>2 marks:</b> definition + one key point.<br><b>5 marks:</b> definition + principle/explanation + example or diagram.<br><b>Long answer:</b> introduction → labelled figure/formula → stepwise explanation → application/conclusion.</div>']);
    }
    if(!Array.isArray(n.mcqs)) n.mcqs=[];
    while(n.mcqs.length<5){
      n.mcqs.push(`<b>Quick check:</b> The most reliable study approach for ${esc(t)} is: <b>A)</b> understand and apply the concept &nbsp; <b>B)</b> memorise random lines &nbsp; <b>C)</b> ignore conditions &nbsp; <b>D)</b> skip practice`);
    }
    if(!n.answerKey && n.mcqs.length>=5 && String(n.overview||'').includes('structured diploma-level lesson')) n.answerKey=['A','A','A','A','A'];
    n.revision=n.revision||`Revise ${esc(t)} using definition, key concepts, application and exam practice.`;
  });

  window.PX_LESSONS=L;
})();
