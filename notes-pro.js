/* PrinceXmahto Study — professional Semester I notes expansion */
(function(){
  const L=window.PX_LESSONS||(window.PX_LESSONS={});
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  const make=(topic,group,focus)=>({
    overview:`${topic} is presented here as a structured diploma-level lesson. The aim is to understand the concept, terminology, working principle, applications and exam method rather than memorising isolated lines.`,
    sections:[
      ['1. Concept and Definition',`<div class="definition"><b>Definition:</b> ${esc(topic)} is studied as a technical concept with a definite meaning, purpose and set of related terms.</div><p><b>Why it matters:</b> In engineering study, the concept becomes useful when you can explain what it is, how it works, where it is used and what limitations or conditions apply.</p><p><b>Focus for this lesson:</b> ${esc(focus)}</p>`],
      ['2. Key Concepts',`<p><b>Core points to learn</b></p><ul><li>Know the standard terminology and symbols used for the topic.</li><li>Understand the relationship between the major parts, quantities or steps.</li><li>Separate definition, principle, application and limitation in your answer.</li><li>For numerical questions, keep units consistent and show every important step.</li></ul><div class="formula">Learn → Understand → Apply → Verify → Revise</div>`],
      ['3. Step-by-Step Study Method',`<ol class="steps"><li>Read the definition and identify the main keywords.</li><li>Draw a small concept diagram or flow sequence where useful.</li><li>Write the important formula/rule/process in your own words.</li><li>Work through one example without skipping intermediate steps.</li><li>Attempt the exam questions below without opening the answer first.</li></ol>`],
      ['4. Practical Connection',`<p>${esc(topic)} is connected with practical engineering, laboratory work, computing or everyday technology depending on the application. A strong student should be able to answer three questions: <b>What?</b> <b>How?</b> and <b>Where is it used?</b></p><p><b>Application note:</b> ${esc(focus)} should be connected to at least one concrete example while revising.</p>`],
      ['5. Common Mistakes',`<ul><li>Writing a definition without explaining the principle.</li><li>Using a formula without defining the symbols or units.</li><li>Mixing two related but different terms.</li><li>Leaving numerical working incomplete.</li><li>Drawing an unlabelled diagram when labels are important.</li></ul>`]
    ],
    example:`<b>Worked example:</b> Suppose an exam asks about ${esc(topic)}. First write a one- or two-line definition, then explain the main principle in ordered points, add a labelled diagram/formula if relevant, give one application, and finish with the required result or conclusion.`,
    questions:[`Define ${topic} and explain its importance.`,`Explain the main concepts or components of ${topic}.`,`Describe the working/principle of ${topic} step by step.`,`Give suitable applications or examples of ${topic}.`,`Write short notes on the most important terms related to ${topic}.`],
    mcqs:[`The most appropriate first part of an exam answer on <b>${esc(topic)}</b> is: <b>A)</b> Definition/concept &nbsp; <b>B)</b> Unrelated history &nbsp; <b>C)</b> Random example &nbsp; <b>D)</b> Blank page`,`A good technical answer should: <b>A)</b> show clear steps/labels where relevant &nbsp; <b>B)</b> hide all working &nbsp; <b>C)</b> mix units &nbsp; <b>D)</b> avoid terminology`,`When solving a numerical problem, units should be: <b>A)</b> consistent &nbsp; <b>B)</b> ignored &nbsp; <b>C)</b> changed randomly &nbsp; <b>D)</b> omitted`],
    revision:`${topic}: definition → key concepts → principle/process → example → application → exam practice. Revise the keywords, diagrams/formulas and common mistakes before the test.`
  });
  const exact={
  'Algebra Determinant':'2×2/3×3 determinants, minors, cofactors, singular matrix and applications to simultaneous equations.',
  'Differential Calculus':'derivative as rate of change, standard derivatives, product/quotient/chain rules and differentiation of algebraic/trigonometric functions.',
  'Application of Differential Calculus':'stationary points, maxima/minima, tangent/normal and rate-of-change problems using first and second derivatives.',
  'Co-ordinate Geometry':'distance, section formula, slope, straight-line equations and basic circle geometry in Cartesian coordinates.',
  'Probability and Statistics':'sample space, events, basic probability and statistical measures such as mean, median and mode.',
  'Unit and Measurements':'SI units, base/derived quantities, dimensions, significant figures, accuracy, precision and measurement error.',
  'Simple Harmonic and Wave Motion':'SHM restoring relation, amplitude, frequency, period, wavelength and the wave relation v=fλ.',
  'Electrostatics, Electromagnetism and Current Electricity':'charge, electric field/potential, current, voltage, resistance, Ohm’s law and magnetic effects of current.',
  'Semiconductor Physics':'intrinsic/extrinsic semiconductors, p-type/n-type material, carriers, p–n junction and diode behaviour.',
  'Modern Physics':'quantum idea, photon energy, atomic/nuclear concepts, radioactivity and fission/fusion at introductory level.',
  'Basic Electrical Parameters and Concepts':'charge, current, voltage, resistance, power, energy, Ohm’s law and SI electrical units.',
  'Fundamentals of D.C. and A.C. Circuits':'DC/AC distinction, series/parallel resistance, Kirchhoff laws and basic circuit analysis.',
  'Magnetic Circuits and Electromagnetic Induction':'magnetic flux, flux density, MMF, reluctance, Faraday’s law and Lenz’s law.',
  'Basic Electronic Components':'resistor, capacitor, inductor, diode, LED and transistor: symbols, functions and common uses.',
  'Overview of Digital Electronics':'binary logic, Boolean expressions, truth tables and AND, OR, NOT, NAND and NOR gates.',
  'Introduction to IT Systems and Digital Technologies':'hardware, software, data, users, operating systems, networks, Internet, cloud basics and digital representation.',
  'Fundamentals of Artificial Intelligence':'AI definition, AI/ML/DL relationship, learning approaches, data/model concepts and responsible AI.',
  'Core AI Applications - Computer Vision & NLP':'vision classification/detection/OCR and NLP tasks such as tokenisation, classification, translation and question answering.',
  'Conversational AI and Generative Systems':'chatbots, intent/entity, prompts, context, tokens, generative systems, grounding and hallucination.',
  'Programming Logic & Computational Thinking using Python':'decomposition, abstraction, algorithms, pseudocode, Python variables, conditions, loops, functions and debugging.',
  'Electrical measuring instruments and components':'ammeter, voltmeter, multimeter, measurement ranges, component identification and safe measurement practice.',
  'Basic electrical wiring and safety':'conductors, switches, protection, earthing, insulation, isolation and safe wiring practice.',
  'Electronic components and identification':'component symbols, markings, polarity, values, datasheets and safe identification before assembly.',
  'Soldering, PCB and multimeter practices':'PCB pads/tracks, solder joints, component placement, inspection, continuity, resistance and voltage checks.',
  'Fire safety and first aid':'fire prevention, alarms, evacuation, emergency response and basic first-aid principles within trained procedures.',
  'Word Processing':'documents, formatting, styles, tables, page setup, headers/footers, spell checking and PDF export.',
  'Spreadsheets':'cells, rows/columns, formulas, functions, references, sorting/filtering and basic charts.',
  'Presentation Tool':'slide structure, layouts, visual hierarchy, diagrams, charts, speaker support and presentation practice.',
  'Basics of Internet':'Internet vs Web, browser, URL, domain, server, HTTP/HTTPS, email and basic online safety.',
  'Constitution and Preamble':'purpose of a constitution and the Preamble’s statement of constitutional values and objectives.',
  'Fundamental Rights and Directive Principles':'their broad purpose, nature, examples and relationship within the constitutional framework.',
  'Governance and Amendments':'constitutional institutions, checks/accountability and the structured process for constitutional amendment.',
  'Open Educational Resources':'meaning of OER, examples, openness, reuse and adaptation permissions.',
  'Copyright and Open Licensing':'copyright, public-domain distinction, licences, permissions and attribution.',
  'Creative Common Licenses':'CC licence elements including BY, SA, NC and ND and checking exact licence conditions.',
  'OER Repositories and Quality Assurance':'finding OER, evaluating accuracy/relevance/accessibility/currentness and checking licence metadata.',
  'Atomic Structure and Chemical Bonding':'subatomic particles, atomic number/mass number, electronic configuration and ionic/covalent bonding.',
  'Water':'water impurities, hardness, temporary/permanent hardness and basic treatment methods.',
  'Engineering Materials':'material classes and properties such as strength, hardness, toughness, ductility and corrosion resistance.',
  'Chemistry of Fuel and Lubricants':'fuel energy and combustion properties plus lubricant functions, viscosity and wear reduction.',
  'Electrochemistry':'oxidation/reduction, cells, electrolysis, electrodes, electrolyte and corrosion basics.',
  'Introduction to Thermodynamics':'system/surroundings, state, heat, work, energy conservation and basic second-law direction.',
  'Internal Combustion Engine and Refrigeration':'four-stroke engine sequence and the basic compressor–condenser–expansion–evaporator refrigeration cycle.',
  'Manufacturing Processes and Machine Tools':'casting, forming, machining, joining, lathe, drilling, milling and grinding basics.',
  'Power Transmission':'belts, chains, gears, shafts, couplings, speed ratio, torque and power transmission.',
  'Communication':'sender, message, channel, receiver, feedback, noise/barriers and characteristics of effective communication.',
  'Types of Communication':'oral, written, non-verbal, visual, formal/informal and choosing the correct channel for purpose.',
  'Reading Comprehension':'main idea, supporting details, inference, vocabulary-in-context and evidence-based answers.',
  'Vocabulary and Grammar':'parts of speech, sentence structure, tense, agreement, synonyms/antonyms and common usage errors.',
  'Professional Writing':'professional email, notice/report structure, clarity, concision, formal tone and proofreading.',
  'Basic Elements of Drawing':'drawing instruments, sheet sizes, line types, lettering, scale, dimensioning and drawing conventions.',
  'Orthographic Projections':'principal views, projection planes, alignment, hidden details and first/third-angle concepts.',
  'Isometric Projection':'three principal axes, isometric scale/representation, visible edges and pictorial construction.',
  'Free Hand Sketches of Engineering Elements':'proportion, centre lines, simple machine elements, labels and clear free-hand representation.',
  'Basic Computer Aided Drafting':'coordinates, drawing/editing tools, layers, object snaps, dimensions and file organisation.',
  'Advanced Computer Aided Drafting':'blocks, hatching, annotations, layouts, layers, standards and controlled plotting/export.',
  'Workshop safety and measuring tools':'PPE, safe tool use, work-area discipline, steel rule, vernier caliper and micrometer basics.',
  'Carpentry and wood working':'measurement, marking, sawing, chiselling, planing, basic joints and safe workholding.',
  'Joining and welding processes':'welding, brazing, soldering, riveting, basic process differences and hot-work safety.',
  'Electrical and electronics workshop practices':'safe wiring, component handling, soldering, continuity testing and basic troubleshooting.',
  'Values and Ethics in Day to Day Life':'honesty, respect, responsibility, fairness, empathy, integrity and ethical decision making.',
  'Values and Ethics in Profession':'professional responsibility, safety, competence, confidentiality, honesty and stakeholder awareness.',
  'Sports and Exercises':'fitness components, warm-up, activity, recovery, coordination and balanced exercise habits.',
  'Yoga and Meditation':'posture, breathing, attention, relaxation and consistent, comfortable practice.',
  'Fitness and Wellness':'physical, mental and social wellness, sleep, activity, nutrition, recovery and healthy routines.',
  'Basic electrical quantities and circuits':'current, voltage, resistance, power, series/parallel circuits and circuit diagrams.',
  'Capacitance and inductance':'charge storage, C=Q/V, magnetic energy storage, inductive behaviour and applications.',
  'D.C. and A.C. circuits':'steady versus alternating current, frequency, period, RMS idea and basic R/L/C behaviour.',
  'Magnetic circuits':'flux, MMF, reluctance, magnetic path and effect of an air gap.',
  'Electromagnetism':'magnetic effect of current, field direction, electromagnetic force, induction and applications.',
  'Atomic structure and bonding':'atomic particles, valence electrons and ionic/covalent bonding at introductory level.',
  'Water and its treatment':'impurities, clarification, filtration, softening and disinfection.',
  'Engineering materials':'metals/alloys, polymers, ceramics/composites and selection by service requirements.',
  'Fuel and lubricants':'fuel energy/combustion and lubricant viscosity, cooling, sealing, cleaning and wear control.',
  'Force systems and equilibrium':'force, moment, free-body diagram and planar equilibrium equations.',
  'Friction':'static/limiting/kinetic friction, coefficient of friction and practical effects.',
  'Centroid and centre of gravity':'centroid of plane areas, centre of gravity and composite-area weighted averages.',
  'Simple lifting machines':'load, effort, mechanical advantage, velocity ratio and efficiency.',
  'Kinematics and dynamics':'displacement, velocity, acceleration, equations of motion and Newton’s second law.',
  'Electrical tools and measurements':'insulated tools, measurement modes, ranges, leads and safe testing.',
  'Electronic components':'component function, symbol, polarity, value and practical application.',
  'Soldering and PCB practices':'component placement, solder joint quality, inspection and continuity testing.',
  'Basic testing with multimeter':'voltage, resistance, continuity and current measurement with correct meter settings.',
  'Environment and ecosystems':'ecosystem components, food chains/webs, energy flow and ecological balance.',
  'Natural resources':'renewable/non-renewable resources, conservation, efficient use and resource management.',
  'Pollution and control':'air, water, soil and noise pollution, sources, effects and control measures.',
  'Sustainable development':'meeting present needs while protecting long-term environmental and social capacity.',
  'Climate and environmental responsibility':'climate change basics, mitigation/adaptation, individual responsibility and sustainable practices.'
  };
  Object.keys(exact).forEach(t=>{
    if(!L[t]) L[t]=make(t,'Semester I',exact[t]);
  });
  // Upgrade earlier lessons without deleting their useful syllabus-aligned material.
  Object.keys(L).forEach(t=>{
    const n=L[t];
    n.sections=n.sections||[];
    if(!n.sections.some(x=>String(x[0]).includes('Common Mistakes'))){
      n.sections.push(['Exam Answer Pattern','<div class="definition"><b>2 marks:</b> definition + one key point.<br><b>5 marks:</b> definition + explanation + example/diagram.<br><b>Long answer:</b> introduction → labelled figure/formula → stepwise explanation → application/conclusion.</div>']);
    }
    n.mcqs=n.mcqs||[];
    while(n.mcqs.length<5)n.mcqs.push(`<b>Quick check:</b> Which approach is most useful for ${esc(t)}? <b>A)</b> Understand the concept and apply it &nbsp; <b>B)</b> Memorise random facts &nbsp; <b>C)</b> Ignore units/labels &nbsp; <b>D)</b> Skip practice`);
    n.revision=n.revision||`Revise ${t} using definition, key concepts, application and exam practice.`;
  });
  window.PX_LESSONS=L;
})();