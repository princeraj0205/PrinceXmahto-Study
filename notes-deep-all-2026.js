/* PrinceXmahto Study — Semester-I deep expansion, 2026
   Scope: every topic currently configured in curriculum.js.
   This file adds non-repetitive, topic-specific explanations, origins, mechanisms,
   engineering context, examples and exam points. It never fabricates page counts.
*/
(function(){
  const L=window.PX_LESSONS||(window.PX_LESSONS={});
  const S=(h,b)=>[h,b];
  const A=(t,overview,sections,questions)=>{
    const n=L[t]||(L[t]={overview:'',sections:[],questions:[],revision:''});
    if(overview && !n.overview) n.overview=overview;
    n.sections=Array.isArray(n.sections)?n.sections:[];
    const seen=new Set(n.sections.map(x=>String(x[0])));
    sections.forEach(x=>{if(!seen.has(x[0])){n.sections.push(x);seen.add(x[0]);}});
    n.questions=[...(n.questions||[]),...(questions||[])].filter((v,i,a)=>a.indexOf(v)===i);
    n.longForm=true;
  };

A('Algebra Determinant','Algebraic tools for simultaneous equations, transformations and engineering vector calculations.',[
S('Where the idea comes from','<p>Determinants developed from the need to solve systems of linear equations and study transformations. In engineering they appear whenever several unknown quantities are coupled by linear equations. The determinant gives a compact test of whether those equations have a unique inverse-based solution.</p>'),
S('Worked engineering interpretation','<p>For A=[[a,b],[c,d]], |A|=ad−bc. If |A|≠0, the coefficient system has an inverse. If |A|=0, the rows or columns are linearly dependent and the ordinary inverse does not exist. This is why checking the determinant is a logical step before applying A⁻¹.</p>'),
S('Vector products in practice','<p>The dot product measures the component of one vector along another and is used for work, projection and power calculations. The cross product produces a perpendicular vector and is used for torque, angular momentum and area calculations.</p>')
],['★ Why must determinant be non-zero before using A⁻¹?','★ Explain the engineering meaning of dot and cross products.']);

A('Differential Calculus','The mathematical language of instantaneous change.',[
S('Average rate to instantaneous rate','<p>For two nearby points, average rate of change is Δy/Δx. Making the interval smaller and taking its limiting value gives the derivative. This is the key idea behind tangent slope, velocity and sensitivity.</p>'),
S('Physical meaning','<p>If displacement is s(t), then v=ds/dt and a=d²s/dt². If current changes with time, di/dt measures its rate of change. Thus differentiation is not only an algebraic rule; it converts a changing quantity into a local rate.</p>'),
S('Checking a derivative','<p>After differentiating, substitute a simple value or compare the sign and approximate slope of the original function. Common errors include losing the inner derivative in a chain rule and forgetting dy/dx in implicit differentiation.</p>')
],['★ Explain derivative as a limiting process.','★ Give two engineering meanings of a derivative.']);

A('Application of Differential Calculus','Applications of derivatives to curve behaviour and optimization.',[
S('Why stationary points matter','<p>A stationary point is where the local slope is zero. It is a candidate location for maximum or minimum output, but the sign of the derivative or second derivative must be checked before making the classification.</p>'),
S('Optimization workflow','<p>Translate the physical requirement into a function, state the allowed domain, differentiate, find critical points, classify them and substitute the result back into the original quantity. Ignoring the domain can produce a mathematically valid but physically impossible answer.</p>'),
S('Curvature meaning','<p>Curvature describes how quickly a path changes direction. In machine paths, road geometry and cam profiles, a small radius means sharper turning. The radius-of-curvature formula therefore connects calculus with geometric design.</p>')
],['★ Write the complete steps of an optimization problem.','★ Why is domain important in engineering optimization?']);

A('Co-ordinate Geometry','Algebraic representation of points, lines and circles.',[
S('Origin of the coordinate method','<p>Coordinate geometry links geometric figures with algebraic equations. Once a reference origin and axes are chosen, distance, slope and intersection can be calculated instead of relying only on a drawing.</p>'),
S('Line as an engineering model','<p>A straight edge, centre line, cable direction or motion path can be represented by a line equation. Slope describes direction; intercepts locate where the line meets the axes. Different line forms are simply different ways of storing the same geometry.</p>'),
S('Circle in design','<p>The equation (x−h)²+(y−k)²=r² represents every point at distance r from centre (h,k). This is directly useful for circular holes, shafts, arcs and coordinate-based CAD construction.</p>')
],['★ Explain why coordinate geometry is useful in CAD.','★ Interpret h, k and r in the circle equation.']);

A('Probability and Statistics','Mathematical treatment of uncertainty and observed data.',[
S('Why engineers use probability','<p>Manufacturing variation, measurement noise, reliability and quality control involve uncertainty. Probability provides a numerical language for possible outcomes, while statistics summarises actual observations.</p>'),
S('Independent versus mutually exclusive','<p>Mutually exclusive events cannot occur together in the same trial. Independent events do not change each other’s probability. These ideas are different: two events may be independent without being mutually exclusive, and confusing them leads to incorrect multiplication or addition rules.</p>'),
S('Interpreting averages','<p>Mean uses every observation, median identifies the central ordered observation and mode identifies the most frequent value. A useful report includes units and context rather than presenting an average as if it were the whole dataset.</p>')
],['★ Give an engineering example of probability.','★ Differentiate independent and mutually exclusive events.']);

A('Communication','Communication transfers meaning from a sender to a receiver through a chosen channel.',[
S('Why communication fails','<p>Communication is successful only when the intended meaning is understood. Noise may be physical, semantic, psychological, cultural or technological. Feedback helps identify whether the message was understood.</p>'),
S('Engineering communication','<p>An engineer may communicate through reports, drawings, specifications, emails, meetings and presentations. The medium should match the purpose: a dimension belongs in a drawing, a sequence of work may need a procedure, and a decision may require a concise written record.</p>'),
S('Clarity and accuracy','<p>Use precise terms, logical order, appropriate technical vocabulary and evidence. Avoid unnecessary ambiguity. A good technical message lets another person reproduce the intended action or understand the stated result.</p>')
],['★ Explain noise with engineering examples.','★ Why is feedback important?']);

A('Types of Communication','Different communication channels serve different engineering situations.',[
S('Major classifications','<p>Communication may be verbal or non-verbal, oral or written, formal or informal, and internal or external. These classifications describe how a message is delivered and the relationship between participants.</p>'),
S('Non-verbal signals','<p>Posture, facial expression, eye contact, gestures and tone can modify the meaning of spoken words. In a technical presentation, readable slides, controlled pace and appropriate gestures support the verbal explanation.</p>'),
S('Choosing a channel','<p>Urgent coordination may need a direct oral message, while a specification or safety instruction should normally have a durable written form. Channel selection depends on urgency, complexity, record requirements and audience.</p>')
],['★ Compare oral and written technical communication.','★ Explain formal and informal communication.']);

A('Reading Comprehension','Reading comprehension is the ability to extract, connect and evaluate information from a written passage.',[
S('Reading for structure','<p>First identify the topic, purpose and main idea. Then distinguish supporting details, examples, causes, effects and conclusions. Technical passages often define a term first and explain its application later.</p>'),
S('Inference and evidence','<p>An inference must be supported by the passage. Do not replace the author’s stated information with an outside assumption. Keywords, contrast words such as however, and cause-effect words often reveal the logical structure.</p>'),
S('Exam method','<p>Read the questions carefully, locate the relevant part of the passage, eliminate options contradicted by the text and answer in the wording required by the question. For short answers, include the central idea rather than unrelated detail.</p>')
],['★ Differentiate main idea and supporting detail.','★ How should evidence be used when answering comprehension questions?']);

A('Vocabulary and Grammar','Language accuracy supports clear technical and professional communication.',[
S('Technical vocabulary','<p>Technical vocabulary should be learned with meaning and context rather than isolated memorisation. A word such as resistance, stress or current changes meaning when used in a specific engineering context.</p>'),
S('Sentence structure','<p>A clear sentence normally makes the subject, action and result easy to identify. Subject-verb agreement, tense, articles, prepositions and punctuation prevent avoidable ambiguity in reports and applications.</p>'),
S('Editing method','<p>After drafting, check spelling, subject-verb agreement, tense consistency, punctuation and unnecessary repetition. Then check whether the technical statement itself is accurate.</p>')
],['★ Why is technical vocabulary context-dependent?','★ List the main grammar checks used when editing a report.']);

A('Professional Writing','Professional writing records information so another person can understand, act or decide.',[
S('Structure of a technical document','<p>A useful structure is purpose, background or requirement, main information, evidence or method, result and conclusion/recommendation where appropriate. Headings and lists improve retrieval of information.</p>'),
S('Email and application writing','<p>A professional email needs a meaningful subject, appropriate greeting, concise purpose, necessary context, requested action and polite closing. Avoid unexplained abbreviations when the audience may not know them.</p>'),
S('Report writing','<p>A technical report should separate observation from interpretation. Tables, figures and numbered sections should be referenced in the text. Conclusions should follow from the presented evidence.</p>')
],['★ State the essential parts of a professional email.','★ Differentiate observation and conclusion in a report.']);

A('Basic Elements of Drawing','Engineering drawing uses standardized graphical language to describe shape, size and manufacturing information.',[
S('Why standards are necessary','<p>Different engineers must interpret the same drawing in the same way. Standard line types, lettering, dimensions, symbols and projection methods reduce ambiguity and make drawings transferable between people and software.</p>'),
S('Line types and meaning','<p>Visible outlines, hidden edges, centre lines, dimension lines and construction lines have different purposes. A line should not be selected only for appearance; its type communicates information about the object.</p>'),
S('Dimensioning principle','<p>Dimensions state size and location. A complete dimensioning system should avoid duplication, use clear extension and dimension lines, and place values where they can be read without ambiguity.</p>')
],['★ Why are drawing standards important?','★ Explain the purpose of centre, hidden and dimension lines.']);

A('Orthographic Projections','Orthographic projection represents a three-dimensional object through related two-dimensional views.',[
S('Projection principle','<p>In orthographic projection, projectors are drawn perpendicular to the reference plane. Front, top and side views reveal different dimensions of the same object. The views must remain geometrically related.</p>'),
S('First-angle and third-angle idea','<p>The arrangement of views depends on the projection convention adopted. The symbol for the projection method should be understood before interpreting a drawing because the same object can be arranged differently.</p>'),
S('Reading a drawing','<p>Identify the front view first, locate corresponding edges in the other views, then infer hidden features and dimensions. Never interpret one view in isolation when multiple views are provided.</p>')
],['★ Define orthographic projection.','★ Why are multiple views needed?']);

A('Isometric Projection','Isometric drawing gives a pictorial representation while retaining a consistent three-axis direction system.',[
S('Three principal directions','<p>In an isometric representation, the three principal axes are equally spaced in the drawing convention. Parallel edges along an isometric direction remain parallel, which makes the object easier to visualize.</p>'),
S('Construction method','<p>Start with the overall bounding box, mark major dimensions along the three axes, locate features such as holes and steps, then darken visible outlines. Construction lines should remain light until the geometry is checked.</p>'),
S('Orthographic versus isometric','<p>Orthographic views are better for exact multi-view interpretation and dimensioning. Isometric views are useful for visual understanding because several faces can be seen at once.</p>')
],['★ Compare orthographic and isometric representation.','★ State the steps for constructing an isometric view.']);

A('Free Hand Sketches of Engineering Elements','Free-hand engineering sketches communicate shape and functional features quickly without full instrument construction.',[
S('Purpose','<p>A free-hand sketch is not an artistic drawing. It is a technical communication tool. Proportion, recognizable features, labels and essential dimensions are more important than decorative detail.</p>'),
S('Sketching method','<p>Estimate overall height-to-width ratio, draw the main centreline or bounding form, add major features, then refine edges and labels. Use consistent line weight and avoid excessive erasing.</p>'),
S('Engineering examples','<p>Common elements include bolts, nuts, shafts, bearings, simple joints and machine parts. The sketch should show the feature that matters for the engineering discussion.</p>')
],['★ What makes a free-hand sketch technically useful?','★ Write the recommended sequence for a quick engineering sketch.']);

A('Basic Computer Aided Drafting','CAD converts geometric drafting operations into editable digital objects.',[
S('Why CAD replaced many manual tasks','<p>CAD improves repeatability, editing, storage, copying and geometric accuracy. A line or circle can be modified without redrawing the entire sheet, and standard layers can control visibility and printing.</p>'),
S('Core operations','<p>Typical beginner operations include line, polyline, circle, arc, trim, extend, offset, copy, move, rotate, mirror and dimension. Object snaps help locate exact endpoints, centres and intersections.</p>'),
S('Layers and drawing control','<p>Layers separate information such as dimensions, construction geometry and object outlines. Naming and layer discipline become important as drawings grow because they reduce accidental editing and make printing predictable.</p>')
],['★ Explain the purpose of object snaps.','★ Why are layers useful in CAD?']);

A('Advanced Computer Aided Drafting','Advanced CAD builds accurate models and drawings from constrained, organized geometry.',[
S('Constraints and accuracy','<p>Geometric constraints describe relationships such as horizontal, vertical, tangent, concentric and parallel. Dimensional constraints define size. Together they reduce accidental changes and make a design behave predictably.</p>'),
S('Blocks and reusable content','<p>Repeated symbols can be stored as reusable blocks or components. This reduces duplication and keeps drawings consistent when a standard element is used many times.</p>'),
S('Model-to-drawing workflow','<p>A disciplined workflow separates design geometry, annotations and output settings. Before issuing a drawing, check units, scale, dimensions, layers, line weights, missing references and print preview.</p>')
],['★ Differentiate geometric and dimensional constraints.','★ List checks before printing a CAD drawing.']);

A('Workshop safety and measuring tools','Workshop practice begins with safe behaviour and correct measurement.',[
S('Risk before operation','<p>Before using a tool, identify moving parts, sharp edges, electrical hazards, hot surfaces and possible flying particles. Wear the required protective equipment and keep the work area organized.</p>'),
S('Measurement principle','<p>Choose a measuring instrument whose range and resolution suit the quantity. Zero the instrument where required, keep the contact surfaces clean, read at the correct eye position and record the unit with the value.</p>'),
S('Common tools','<p>Steel rules, vernier calipers, micrometers, screwdrivers, pliers and spanners serve different tasks. A vernier or micrometer should not be used as a general-purpose gripping tool because accuracy depends on proper handling.</p>')
],['★ Why is instrument selection important?','★ List basic measurement precautions.']);

A('Carpentry and wood working','Carpentry introduces safe shaping and joining of timber.',[
S('Wood as a material','<p>Timber is anisotropic, meaning properties depend on direction relative to the grain. Moisture, defects and grain direction influence strength and dimensional stability.</p>'),
S('Marking and cutting','<p>Accurate work starts with marking lines and reference faces. Saws remove material along a controlled path; chisels and planes shape surfaces. The workpiece must be supported so the cutting force does not cause sudden movement.</p>'),
S('Joints and finish','<p>Joints are selected according to load, appearance and ease of assembly. A sound joint depends on accurate mating surfaces, correct dimensions and suitable adhesive or mechanical fastening.</p>')
],['★ Why does grain direction matter in woodwork?','★ State the importance of accurate marking.']);

A('Joining and welding processes','Joining processes create permanent or semi-permanent connections between materials.',[
S('Welding principle','<p>Welding joins materials by producing coalescence, commonly through heat, pressure or a combination. The heat source melts or softens a localized region and the joint solidifies or forms under controlled conditions.</p>'),
S('Welding safety','<p>Welding can involve intense light, heat, fumes and electrical hazards. Use the specified eye/face protection, ventilation, gloves and machine grounding. Keep combustible materials away from the hot-work area.</p>'),
S('Soldering and brazing','<p>Soldering and brazing use a filler metal with a melting temperature below that of the main workpieces. They are widely used for electrical connections and light engineering assemblies because the base material is not normally melted in the same way as welding.</p>')
],['★ Differentiate welding, soldering and brazing.','★ List essential welding safety measures.']);

A('Electrical and electronics workshop practices','Workshop practice connects theory with real components, tools and measurements.',[
S('Identification before connection','<p>Read component markings and ratings before connecting a circuit. A resistor value, capacitor voltage rating, diode orientation or fuse rating should be checked instead of guessed.</p>'),
S('Measurement discipline','<p>Select the correct meter function and range before probing. Voltage is measured across a circuit element; current measurement requires the meter to be inserted in the appropriate current path. Incorrect connections can damage the meter or circuit.</p>'),
S('Assembly quality','<p>Good wiring has secure joints, proper insulation, controlled routing and clear identification. Before energizing a circuit, perform a visual inspection and check for unintended shorts.</p>')
],['★ Explain the correct connection idea for voltage and current measurement.','★ What checks should be made before energizing a circuit?']);

A('Fire safety and first aid','Basic emergency knowledge reduces injury and limits workshop damage.',[
S('Fire triangle','<p>Fire requires fuel, oxygen and sufficient heat. Removing one of these elements can stop combustion. Fire classes differ by the type of material burning, so extinguisher selection must follow the applicable safety procedure.</p>'),
S('Electrical fire principle','<p>For an energized electrical installation, do not treat it as an ordinary water-extinguishing situation. Isolate power safely when possible and use the extinguisher specified for electrical equipment according to site rules.</p>'),
S('First response','<p>First aid is immediate supportive care until trained medical help is available. Protect the rescuer and victim from further danger, raise an alarm, and follow institutional emergency procedures rather than attempting an unsafe intervention.</p>')
],['★ Explain the fire triangle.','★ Why must electrical fires be treated differently?']);

A('Values and Ethics in Day to Day Life','Ethics guides decisions when a person must choose how to act toward others and the wider community.',[
S('Value versus rule','<p>A value is a principle considered important, such as honesty or responsibility. A rule is a specific requirement. Ethical behaviour may require judgement even when no detailed rule covers the situation.</p>'),
S('Everyday examples','<p>Returning borrowed property, reporting a mistake, respecting another person’s privacy and avoiding dishonest claims are examples where values affect practical decisions.</p>'),
S('Conflict of values','<p>Sometimes values appear to conflict, such as speed versus safety. Ethical reasoning requires identifying the stakeholders, consequences, duties and applicable rules before choosing an action.</p>')
],['★ Differentiate values and rules.','★ Explain an ethical conflict using a daily-life example.']);

A('Values and Ethics in Profession','Professional ethics protects trust, safety and responsible use of technical knowledge.',[
S('Professional responsibility','<p>An engineer’s work can affect people, property, environment and public resources. Accuracy, safety, confidentiality, competence and accountability therefore have practical importance.</p>'),
S('Integrity in technical work','<p>Do not alter measurements to fit an expected result. Record observations honestly, identify uncertainty and report defects or unsafe conditions through the appropriate channel.</p>'),
S('Ethical decision process','<p>Identify the technical facts, applicable standards, affected people, risks and possible actions. Separate verified facts from assumptions and document the reasoning behind the final professional action.</p>')
],['★ Why is integrity important in engineering records?','★ Explain professional responsibility with a technical example.']);

A('Sports and Exercises','Physical activity develops fitness qualities that support health and daily functioning.',[
S('Fitness components','<p>Fitness includes cardiorespiratory endurance, muscular strength, muscular endurance, flexibility and body-control skills. Different activities develop these qualities in different proportions.</p>'),
S('Exercise planning','<p>A basic session can include warm-up, main activity and cool-down. Intensity should be appropriate to the individual, and technique should be learned before increasing difficulty.</p>'),
S('Recovery','<p>Rest, hydration, sleep and gradual progression help the body adapt. Sudden excessive workload increases the chance of overuse and poor performance.</p>')
],['★ List major components of physical fitness.','★ Explain the role of warm-up and recovery.']);

A('Yoga and Meditation','Yoga and meditation use structured physical and attention practices to support flexibility, balance, relaxation and concentration.',[
S('Purpose','<p>Yoga practices may involve postures, breathing and controlled attention. Meditation practices train sustained attention or awareness. They should be learned progressively and performed within comfortable limits.</p>'),
S('Breathing and attention','<p>Slow, controlled breathing can be used as an attention anchor. Meditation is not simply sitting still; the practice involves noticing distraction and returning attention to the chosen focus.</p>'),
S('Safe practice','<p>Movements should be controlled and adapted to ability. Pain, dizziness or breathing difficulty is a reason to stop and seek appropriate guidance rather than forcing a posture.</p>')
],['★ Explain the purpose of meditation.','★ State basic principles of safe yoga practice.']);

A('Fitness and Wellness','Wellness combines physical activity, recovery, mental balance and healthy daily habits.',[
S('Wellness dimensions','<p>Wellness includes physical, mental, emotional and social aspects. A student’s performance depends not only on study time but also on sleep, activity, nutrition, stress management and supportive relationships.</p>'),
S('Routine and recovery','<p>A sustainable routine balances work and recovery. Regular moderate activity, adequate sleep and planned breaks are generally more useful than irregular extreme effort.</p>'),
S('Monitoring habits','<p>Simple records such as sleep duration, activity frequency and study breaks can reveal patterns. The purpose is self-management, not comparison with another person.</p>')
],['★ Explain wellness as a multidimensional concept.','★ Why is recovery part of fitness?']);

A('Basic Electrical Parameters and Concepts','Core electrical quantities provide the vocabulary needed for circuit analysis.',[
S('Charge, current and voltage','<p>Charge is measured in coulombs. Current is charge flow per unit time, I=dQ/dt. Voltage is energy transferred per unit charge. These definitions explain why current is measured in a path while voltage is measured between two points.</p>'),
S('Resistance and power','<p>Resistance describes opposition to current. For an ohmic element at constant conditions, V=IR. Power is the rate of electrical energy transfer: P=VI, which can also be written I²R or V²/R.</p>'),
S('Energy in practical circuits','<p>Electrical energy is power multiplied by time. In real systems, conductor resistance, heating, source limitations and load ratings determine how safely energy can be delivered.</p>')
],['★ Define current, voltage, resistance and power.','★ Derive P=I²R from Ohm’s law.']);

A('Fundamentals of D.C. and A.C. Circuits','DC and AC circuits differ mainly in how voltage and current vary with time.',[
S('DC circuit idea','<p>In a DC circuit, polarity remains fixed and the steady-state current direction is fixed for a simple resistive load. Series and parallel combinations can be reduced using equivalent resistance.</p>'),
S('AC waveform','<p>Alternating voltage or current changes magnitude and reverses direction periodically. A sinusoidal waveform can be described by amplitude, frequency, time period and phase.</p>'),
S('Series and parallel reasoning','<p>In series elements the same current flows through each element in the ideal circuit. In parallel branches share the same voltage. These two facts are the starting point for many circuit calculations.</p>')
],['★ Compare DC and AC.','★ State the current and voltage rules for ideal series and parallel circuits.']);

A('Magnetic Circuits and Electromagnetic Induction','Magnetic circuits model flux and explain how changing magnetic fields produce induced emf.',[
S('Flux and magnetic field','<p>Magnetic flux measures the total magnetic field passing through a surface. In a simple magnetic circuit, magnetomotive force drives flux through magnetic reluctance, analogous in form to voltage driving current through resistance.</p>'),
S('Faraday and Lenz laws','<p>A changing flux linkage induces emf. Faraday’s law gives e=−N dΦ/dt for a coil of N turns. Lenz’s law explains the direction represented by the negative sign: the induced effect opposes the change in flux linkage.</p>'),
S('Engineering applications','<p>Transformers, generators, motors and inductive sensors rely on electromagnetic principles. The same concept links static field theory with practical energy conversion.</p>')
],['★ Explain the analogy between electric and magnetic circuits.','★ State Faraday and Lenz laws.']);

A('Basic Electronic Components','Electronic components control, store, convert or sense electrical signals.',[
S('Passive components','<p>Resistors control current and create voltage drops. Capacitors store energy in an electric field and oppose rapid voltage change. Inductors store energy in a magnetic field and oppose rapid current change.</p>'),
S('Diode and transistor','<p>A diode uses a PN junction to provide directional conduction. A transistor uses semiconductor junctions to control current or voltage and can operate as an amplifier or switch depending on configuration and bias.</p>'),
S('Ratings matter','<p>Every component has electrical limits such as voltage, current, power, temperature and frequency. A circuit can fail even when its nominal value is correct if a rating is exceeded.</p>')
],['★ Explain the function of R, C and L.','★ Compare diode and transistor functions.']);

A('Overview of Digital Electronics','Digital electronics represents information using discrete logic levels and combines gates to perform decisions.',[
S('Binary representation','<p>Digital circuits commonly use two logical states represented by binary 0 and 1. Number-system conversion lets engineers represent the same quantity in decimal, binary, octal or hexadecimal form.</p>'),
S('Logic gates','<p>AND, OR and NOT are basic gates. NAND and NOR are universal gates because suitable combinations can reproduce the basic operations. Truth tables list the output for every input combination.</p>'),
S('Combinational versus sequential','<p>Combinational output depends on present inputs. Sequential circuits also depend on stored state. This distinction leads from simple logic gates to memory and digital control systems.</p>')
],['★ Why are NAND and NOR called universal gates?','★ Differentiate combinational and sequential logic.']);

A('Introduction to IT Systems and Digital Technologies','IT systems combine hardware, software, data, networks and users to process information.',[
S('System components','<p>Hardware provides physical resources, software provides instructions, data represents information, networks provide communication, and users or processes determine how the system is used. Reliability depends on the interaction of all these parts.</p>'),
S('From data to information','<p>Raw data becomes useful when it is processed, organized and interpreted in context. Storage, processing and communication are therefore core functions of an information system.</p>'),
S('Digital technologies in engineering','<p>Engineers use digital tools for design, documentation, simulation, measurement, automation and communication. The tool is useful only when the underlying technical assumptions and data are reliable.</p>')
],['★ Differentiate data and information.','★ List major components of an IT system.']);

A('Fundamentals of Artificial Intelligence','AI uses computational methods to perform tasks that normally require aspects of human intelligence.',[
S('Why AI developed','<p>AI grew from the desire to make machines perform reasoning, pattern recognition, planning and learning tasks. Modern systems increasingly use data-driven machine learning rather than only manually written rules.</p>'),
S('Learning versus rule-based logic','<p>A rule-based system explicitly encodes conditions and actions. A machine-learning system learns a relationship from examples. The second approach can handle complex patterns but depends strongly on data quality and evaluation.</p>'),
S('Limitations','<p>An AI output is not automatically correct. Bias in data, distribution changes, incomplete context, errors and inappropriate objectives can produce unreliable results. Human review remains important for consequential technical decisions.</p>')
],['★ Compare rule-based systems and machine learning.','★ List major limitations of AI systems.']);

A('Core AI Applications - Computer Vision & NLP','Computer vision processes visual information, while NLP processes human language.',[
S('Computer vision pipeline','<p>A typical vision system receives an image, converts it into useful representations, detects or classifies patterns and produces an output. Tasks include image classification, object detection and segmentation.</p>'),
S('NLP pipeline','<p>Natural language processing may include tokenization, representation of text, language modelling and task-specific prediction. Applications include search, classification, translation and question answering.</p>'),
S('Evaluation matters','<p>Accuracy alone may be insufficient when classes are imbalanced. Precision, recall, confusion matrices and task-specific error analysis can reveal failure patterns hidden by a single percentage.</p>')
],['★ Differentiate image classification and object detection.','★ Why is evaluation important in AI applications?']);

A('Conversational AI and Generative Systems','Generative systems produce new text, images, code or other content from learned patterns.',[
S('How a language model works conceptually','<p>A language model learns statistical relationships among tokens from large datasets. During generation it estimates likely continuations and produces a sequence according to the model and decoding settings.</p>'),
S('Prompt and output quality','<p>A clear prompt specifies the task, context, constraints and desired format. Output should still be checked because fluent language does not guarantee factual correctness.</p>'),
S('Responsible use','<p>Generative systems can reproduce errors or biases from training data and can generate plausible but unsupported statements. Technical work should verify calculations, sources, code and safety-critical instructions independently.</p>')
],['★ Why can a fluent AI answer still be wrong?','★ List elements of an effective technical prompt.']);

A('Programming Logic & Computational Thinking using Python','Programming converts a problem-solving procedure into precise instructions.',[
S('Problem decomposition','<p>Computational thinking starts by breaking a large problem into smaller tasks, identifying inputs and outputs, recognizing patterns and designing an algorithm before writing code.</p>'),
S('Core Python structures','<p>Variables store values; conditions choose between paths; loops repeat operations; functions package reusable logic; lists and dictionaries organize data. Indentation defines Python block structure.</p>'),
S('Testing and debugging','<p>Test normal, boundary and invalid inputs. When a result is wrong, reproduce the error, inspect intermediate values, isolate the responsible operation and change the smallest necessary part. Good programs are checked, not merely executed once.</p>')
],['★ Explain decomposition with a simple engineering problem.','★ Differentiate for/while loops and functions.']);

A('Word Processing','Word processors create structured documents rather than only typed paragraphs.',[
S('Document structure','<p>Styles, headings, lists, tables, headers and footers create consistent documents. Using styles is better than manually changing every heading because the entire document can be reformatted systematically.</p>'),
S('Technical documents','<p>Reports benefit from page numbering, figure captions, tables, references and consistent margins. Accessibility improves when headings and lists use proper document structure.</p>'),
S('Review tools','<p>Spell check, grammar review, comments and version comparison help reduce errors, but automatic suggestions must be checked against the intended technical meaning.</p>')
],['★ Why are styles useful?','★ List features important in a technical report.']);

A('Spreadsheets','Spreadsheets combine tabular data, formulas, functions and charts for analysis.',[
S('Cell references','<p>A cell can contain text, a number or a formula. Relative references change when copied; absolute references remain fixed. Understanding this distinction prevents many calculation errors.</p>'),
S('Functions and validation','<p>Functions such as SUM, AVERAGE, MIN, MAX and IF automate common calculations. Data validation and sensible formatting reduce entry errors and make results easier to interpret.</p>'),
S('Charts and engineering data','<p>Choose a chart according to the relationship being studied. A scatter plot is useful for two numerical variables; a bar chart compares categories. Always label axes, units and the data source.</p>')
],['★ Differentiate relative and absolute references.','★ Which chart is suitable for two numerical variables and why?']);

A('Presentation Tool','Presentation software organizes information into a sequence designed for an audience.',[
S('Slide hierarchy','<p>Each slide should have one clear purpose. A useful hierarchy is title, key message, supporting visual or concise points. Long paragraphs reduce readability during a live presentation.</p>'),
S('Technical figures','<p>Use diagrams, tables and graphs when they communicate relationships more efficiently than text. Every graph needs readable labels and units; every diagram should identify important components.</p>'),
S('Delivery','<p>Presentation quality depends on preparation, timing, clear speech and audience awareness. Slides support the speaker; they should not become a script that is read word-for-word.</p>')
],['★ State three rules for a technical presentation slide.','★ Why are labels and units essential in graphs?']);

A('Basics of Internet','The Internet is a global network of interconnected networks that communicates using standardized protocols.',[
S('Network and Internet','<p>A computer network connects devices for communication and resource sharing. The Internet is the global interconnection of many such networks using the TCP/IP protocol family.</p>'),
S('Web addressing','<p>A URL identifies a web resource. DNS translates human-readable domain names into network addresses used for communication. HTTP and HTTPS define web request and response behaviour; HTTPS adds cryptographic protection through TLS.</p>'),
S('Safe information practice','<p>Use strong unique passwords, multi-factor authentication where available, software updates and caution with unknown links or attachments. Verify the domain before entering sensitive information.</p>')
],['★ Differentiate Internet and World Wide Web.','★ Explain the roles of DNS and HTTPS.']);

A('Indian Constitution','The Constitution establishes the basic legal and institutional framework of the Republic of India.',[
S('Preamble','<p>The Preamble states the constitutional vision and identifies India as a sovereign, socialist, secular, democratic republic with justice, liberty, equality and fraternity as stated objectives.</p>'),
S('Rights and governance','<p>Fundamental Rights protect specified freedoms and equality interests. Directive Principles guide the State toward social and economic objectives. The Constitution also defines institutions and relationships among them.</p>'),
S('Why students study it','<p>Technical professionals work within laws, regulations and public institutions. Constitutional literacy helps students understand citizenship, rights, duties and the framework within which public decisions are made.</p>')
],['★ Explain the purpose of the Preamble.','★ Distinguish Fundamental Rights and Directive Principles.']);

A('Open Educational Resources','OER are educational materials that are openly available for use under permissions defined by their licenses.',[
S('What makes a resource open','<p>Free access alone does not necessarily make a resource OER. The license must provide the relevant permissions for reuse, adaptation or redistribution. Always check the actual license attached to a resource.</p>'),
S('Quality assurance','<p>Before using OER, check author or institution, date, syllabus alignment, factual accuracy, references and whether diagrams or third-party elements have separate restrictions.</p>'),
S('Student use','<p>OER can support revision, practice and collaborative learning. Keep attribution information when required and do not remove license conditions.</p>')
],['★ Define OER.','★ Why must the license be checked before reuse?']);

A('Copyright and Open Licensing','Copyright controls rights in original creative works, while open licenses provide specified permissions under stated conditions.',[
S('Copyright basics','<p>Copyright can protect original text, images, diagrams, software and other creative works. Ownership and licensing determine what another person may legally reproduce, adapt or distribute.</p>'),
S('License is permission','<p>An open license is not the absence of copyright. It is a permission framework chosen by the rights holder. The user must follow conditions such as attribution or share-alike where applicable.</p>'),
S('Study-site practice','<p>For educational websites, prefer original diagrams, public-domain material or properly licensed resources. Keep source and license information where required.</p>')
],['★ Differentiate copyright and an open license.','★ Why should an educational site keep attribution information?']);

A('Creative Common Licenses','Creative Commons licenses provide standardized ways for creators to communicate reuse conditions.',[
S('License elements','<p>Common conditions include Attribution (BY), ShareAlike (SA), NonCommercial (NC) and NoDerivatives (ND). Different combinations create different permissions and restrictions.</p>'),
S('Reading a license','<p>Before reusing an image or text, identify the exact license version and conditions. A resource marked NC may not permit commercial use, while ND restricts adaptations. Attribution requirements must be followed where applicable.</p>'),
S('Practical rule','<p>If a license is unclear, do not assume that online visibility means permission to copy. Use original content or obtain permission when necessary.</p>')
],['★ Explain BY, SA, NC and ND.','★ Why is “found online” not the same as “free to copy”?']);

A('OER Repositories and Quality Assurance','OER repositories collect educational resources, but users still need to evaluate them.',[
S('Repository search','<p>Search by subject, level, syllabus topic and format. Prefer repositories maintained by educational institutions or recognized open-education organizations when possible.</p>'),
S('Evaluation checklist','<p>Check relevance, accuracy, authority, currency, accessibility, license and completeness. For engineering notes, also check equations, units, diagrams and whether the content matches the official syllabus.</p>'),
S('Version control','<p>Record the resource title, creator, URL and license when using an external OER. This makes future verification and attribution easier.</p>')
],['★ Give a quality checklist for OER.','★ Why should engineering equations be verified before publication?']);

A('Environment and ecosystems','An ecosystem is an interacting system of organisms and their physical environment.',[
S('Levels and components','<p>Abiotic components include light, water, temperature, soil and nutrients. Biotic components include producers, consumers and decomposers. Energy flows through food chains while matter cycles through ecosystems.</p>'),
S('Food chain and web','<p>A food chain shows one feeding pathway; a food web connects multiple pathways. Disturbance at one level can affect several connected populations.</p>'),
S('Engineering connection','<p>Construction, manufacturing, energy projects and waste disposal can alter habitats, water and air. Environmental assessment therefore needs an ecosystem perspective rather than only a site boundary.</p>')
],['★ Differentiate food chain and food web.','★ Explain abiotic and biotic components.']);

A('Natural resources','Natural resources provide materials, energy and ecological services needed by society.',[
S('Renewable and non-renewable','<p>Renewable resources can regenerate on a human timescale when managed within their natural limits. Fossil fuels and many mineral deposits are non-renewable on human timescales.</p>'),
S('Water and energy','<p>Resource management involves demand reduction, efficient technology, reuse and protection of natural cycles. The technically available resource is not always practically or sustainably exploitable.</p>'),
S('Engineering role','<p>Engineers influence resource use through material selection, process efficiency, energy systems, water treatment and infrastructure design.</p>')
],['★ Compare renewable and non-renewable resources.','★ Explain the engineering role in resource conservation.']);

A('Pollution and control','Pollution occurs when harmful substances or energy enter the environment at levels that cause adverse effects.',[
S('Air, water and soil pollution','<p>Air pollutants include particulate matter and harmful gases; water pollution may involve organic matter, nutrients, pathogens or toxic chemicals; soil pollution may result from waste and hazardous substances. Each medium requires appropriate monitoring and control.</p>'),
S('Control hierarchy','<p>Preventing pollution at the source is generally preferable to treating it after release. Process modification, cleaner production, recovery and treatment can be combined depending on the pollutant.</p>'),
S('Monitoring','<p>Environmental decisions require measurements such as concentration, flow, pH, dissolved oxygen or particulate levels. Sampling method and units are as important as the numerical result.</p>')
],['★ Explain source reduction.','★ Name major types of environmental pollution and one control approach for each.']);

A('Sustainable development','Sustainable development balances present needs with long-term environmental, social and economic considerations.',[
S('Core idea','<p>Sustainability is not simply “using less”. It involves meeting needs while maintaining the capacity of natural and social systems to support future generations.</p>'),
S('Engineering design','<p>Life-cycle thinking considers raw materials, manufacturing, operation, maintenance and end-of-life. A design with slightly higher initial cost may reduce energy or maintenance over its life, so whole-life assessment can be more informative than purchase cost alone.</p>'),
S('SDG connection','<p>The Sustainable Development Goals provide a global framework covering areas such as water, energy, infrastructure, responsible consumption, climate and ecosystems. Engineering projects can contribute to several goals simultaneously.</p>')
],['★ Explain life-cycle thinking.','★ Why is initial cost alone insufficient for sustainable design?']);

A('Climate and environmental responsibility','Climate change results from changes in the Earth’s energy balance and has implications for engineering systems.',[
S('Greenhouse effect','<p>Greenhouse gases absorb and re-emit infrared radiation, affecting the temperature structure of the atmosphere. Human activities have increased concentrations of several greenhouse gases, changing radiative forcing.</p>'),
S('Mitigation and adaptation','<p><b>Mitigation</b> reduces the causes of climate change, for example through energy efficiency or lower-carbon energy. <b>Adaptation</b> reduces harm from impacts, for example through resilient infrastructure and water planning.</p>'),
S('Professional responsibility','<p>Engineers can reduce impacts through efficient systems, durable designs, material recovery, renewable energy integration and climate-aware risk assessment.</p>')
],['★ Differentiate mitigation and adaptation.','★ Give three engineering actions related to climate responsibility.']);

A('Introduction to Thermodynamics','Thermodynamics describes energy transfer and conversion in physical systems.',[
S('Historical engineering context','<p>Thermodynamics developed alongside the study of heat engines and the question of how heat can be converted into useful work. Modern thermodynamics provides a general energy framework applicable to engines, refrigeration, turbines and industrial processes.</p>'),
S('State versus process','<p>Pressure, temperature and volume describe a state. Heat and work describe energy transfer during a process between states. This distinction prevents the common mistake of treating heat as a stored property.</p>'),
S('Efficiency idea','<p>No practical heat engine converts all supplied heat into useful work. The first law accounts for energy conservation, while the second law explains direction and limits on conversion.</p>')
],['★ Why are heat and work called process quantities?','★ Distinguish first-law energy balance from second-law limitation.']);

A('Internal Combustion Engine and Refrigeration','Mechanical systems that either produce work from fuel or move heat against a temperature gradient.',[
S('Engine sequence','<p>In a four-stroke engine the piston completes intake, compression, power and exhaust strokes. Valve timing, ignition/injection, compression ratio and heat release strongly influence performance.</p>'),
S('Refrigeration cycle','<p>The compressor raises refrigerant pressure and temperature; the condenser rejects heat; the expansion device reduces pressure; the evaporator absorbs heat from the cooled space. The cycle then repeats.</p>'),
S('Performance quantities','<p>Engine performance can involve power, efficiency and fuel consumption. Refrigerator performance is described by coefficient of performance, COP=desired refrigeration effect/work input. These are different measures and should not be mixed.</p>')
],['★ Explain all four strokes.','★ Explain the function of each major vapour-compression component.']);

A('Manufacturing Processes and Machine Tools','Manufacturing converts raw material into useful components using controlled processes.',[
S('Process families','<p>Manufacturing processes include casting, forming, machining, joining and finishing. The choice depends on geometry, material, quantity, accuracy, surface finish and cost.</p>'),
S('Machine tools','<p>Lathes primarily produce surfaces by rotating the workpiece relative to a cutting tool. Drilling produces holes; milling uses a rotating cutter to remove material from a workpiece. Each machine has characteristic operations and limitations.</p>'),
S('Cutting and accuracy','<p>Tool geometry, cutting speed, feed, depth of cut, machine rigidity and material affect surface finish and tool life. Excessive cutting conditions can increase heat, wear and dimensional error.</p>')
],['★ Compare casting, forming and machining.','★ State major operations of a lathe, drilling machine and milling machine.']);

A('Power Transmission','Power transmission systems transfer mechanical power from a prime mover to a driven machine.',[
S('Why transmission is needed','<p>The motor or engine may operate at a speed and torque different from the driven machine. Transmission elements change speed, torque, direction or the distance between shafts.</p>'),
S('Common methods','<p>Belts and pulleys are suitable for flexible, relatively long-distance transmission. Chains provide positive engagement. Gears give a precise speed ratio and are widely used when compact, controlled transmission is required.</p>'),
S('Selection factors','<p>Selection depends on power, speed, centre distance, shock load, lubrication, noise, maintenance and allowable slip. A belt drive can slip; a geared system normally maintains a defined ratio but needs accurate alignment and lubrication.</p>')
],['★ Compare belt, chain and gear drives.','★ Why does a transmission system change torque and speed?']);

A('Force systems and equilibrium','Engineering mechanics studies forces and their effects on bodies.',[
S('Force as a vector','<p>A force has magnitude, direction and line of action. Resolving a force into components replaces one vector by mathematically equivalent components, making equilibrium equations easier to apply.</p>'),
S('Moment and resultant','<p>The moment of a force about a point measures its turning effect. A system of forces can be replaced by a resultant force and, when required, a resultant moment about a reference point.</p>'),
S('Free-body diagram','<p>A free-body diagram isolates the body and shows all external forces, support reactions and applied loads. A correct FBD is often the most important step before writing equilibrium equations.</p>')
],['★ Explain force resolution and moment.','★ Why is an FBD necessary?']);

A('Friction','Friction is the tangential resistance that develops between contacting surfaces.',[
S('Cause and behaviour','<p>Friction arises from surface interaction and microscopic irregularities. Static friction adjusts up to a limiting value before sliding begins; kinetic friction acts during sliding.</p>'),
S('Angle concepts','<p>The angle of friction is related to the limiting friction condition. The angle of repose is the inclination at which a body is just about to slide. Under the ideal simple model these angles are related through the coefficient of friction.</p>'),
S('Engineering applications','<p>Friction is necessary for brakes, walking, belt drives and power transmission, but undesirable friction causes wear and energy loss in bearings and sliding contacts. Design therefore manages friction rather than always trying to eliminate it.</p>')
],['★ Differentiate static and kinetic friction.','★ Explain angle of friction and angle of repose.']);

A('Centroid and centre of gravity','Centroid locates the geometric centre of an area; centre of gravity locates the resultant position of gravitational force.',[
S('Basic idea','<p>For a uniform plane area, the centroid represents the balance location of the geometric area. For a body in a uniform gravitational field, the centre of gravity is the point through which the resultant weight acts.</p>'),
S('Composite sections','<p>Complex sections can be divided into standard shapes. Use area-weighted coordinates: x̄=ΣAᵢxᵢ/ΣAᵢ and ȳ=ΣAᵢyᵢ/ΣAᵢ. Removed holes can be treated as negative areas when the geometry and reference axes are chosen consistently.</p>'),
S('Engineering importance','<p>Centroid and centre-of-gravity locations affect balance, stability, load distribution and structural analysis. A correct reference axis is essential because the coordinates depend on the chosen origin.</p>')
],['★ Differentiate centroid and centre of gravity.','★ Explain the negative-area method for a hole.']);

A('Simple lifting machines','Lifting machines provide mechanical advantage so a comparatively smaller effort can raise a larger load.',[
S('Mechanical advantage and velocity ratio','<p>Mechanical advantage is MA=Load/Effort. Velocity ratio is VR=distance moved by effort/distance moved by load. Efficiency is η=MA/VR for the standard definitions.</p>'),
S('Law of machine','<p>A practical machine can often be represented by a relation between effort and load, such as P=mW+C under the applicable idealized model. The constants depend on machine characteristics and losses.</p>'),
S('Why machines are not 100% efficient','<p>Friction, deformation and other losses consume part of the input energy. A machine can still be useful when it reduces the required effort or changes the speed and direction of motion.</p>')
],['★ Define MA, VR and efficiency.','★ Explain why machine efficiency is below 100% in practical operation.']);

A('Kinematics and dynamics','Kinematics describes motion; dynamics relates motion to forces and mass.',[
S('Motion variables','<p>Displacement is a vector change in position. Velocity is rate of change of displacement and acceleration is rate of change of velocity. For one-dimensional constant acceleration, standard kinematic equations connect u, v, a, t and s.</p>'),
S('Newton’s laws','<p>Newton’s laws relate force and motion. The second law gives the vector relationship ΣF=ma. A force balance therefore becomes a direct route from a free-body diagram to acceleration.</p>'),
S('Work and energy','<p>Work transfers energy when a force acts through displacement. Kinetic energy depends on speed, while potential energy depends on position in a force field. Energy methods can solve motion problems without explicitly finding every intermediate force.</p>')
],['★ Differentiate kinematics and dynamics.','★ State Newton’s second law and explain its vector meaning.']);

A('Electrical tools and measurements','Electrical measurement requires correct instruments, connections and ranges.',[
S('Multimeter functions','<p>A digital multimeter can measure quantities such as voltage, resistance and current depending on its selected mode and terminals. Resistance should normally be measured on a de-energized circuit.</p>'),
S('Measurement uncertainty','<p>Instrument resolution, calibration, contact quality and user technique affect readings. Record the unit and avoid reporting more precision than the instrument supports.</p>'),
S('Safe probing','<p>Before measuring, identify the circuit reference points, select the correct mode and range, and verify the lead sockets. Never assume the current and voltage terminals are interchangeable.</p>')
],['★ Why must resistance be measured without circuit power?','★ State precautions before using a multimeter.']);

A('Electronic components','Electronic components are identified by their symbols, markings, function and ratings.',[
S('Identification','<p>Resistors may be marked by colour bands or printed codes; capacitors may have capacitance and voltage markings; diodes and LEDs have polarity; transistors have device-specific terminal arrangements. Always verify the component datasheet when the marking is uncertain.</p>'),
S('Function and selection','<p>A component is selected not only by nominal value but also by tolerance, power rating, voltage rating, current rating, temperature and frequency requirements.</p>'),
S('Testing concept','<p>Testing asks whether a component behaves consistently with its expected electrical model. A resistance check, diode-junction check or continuity check can reveal faults, but the test must match the component and circuit condition.</p>')
],['★ Why are component ratings important?','★ Explain the purpose of a diode test.']);

A('Soldering and PCB practices','Soldering creates reliable electrical and mechanical connections between component leads and conductive pads.',[
S('Good joint principle','<p>The surfaces must be clean and heated appropriately so solder wets the joint. A good joint is mechanically secure and electrically continuous without excessive solder or unintended bridges.</p>'),
S('PCB orientation','<p>Before soldering, verify component value, polarity and placement against the circuit diagram or board markings. Polarized components such as LEDs, electrolytic capacitors and many semiconductor packages require particular attention.</p>'),
S('Inspection','<p>After soldering, inspect for cold joints, bridges, lifted pads and wrong component placement. Continuity checks should be performed only after the board is in a safe, de-energized state.</p>')
],['★ What conditions produce a reliable solder joint?','★ Why must polarity be checked before soldering?']);

A('Basic testing with multimeter','A multimeter becomes useful only when its measurement mode, range and connection are correct.',[
S('Voltage test','<p>Voltage is measured across two points, so the meter is connected in parallel with the element or supply being tested. Start with a safe range when the magnitude is unknown.</p>'),
S('Current test','<p>Current measurement places the meter in the current path using the appropriate current terminal. Connecting a current-mode meter directly across a voltage source can create a very low-resistance path and may damage the instrument.</p>'),
S('Resistance and continuity','<p>Resistance and continuity tests should be performed on a de-energized circuit. Unexpected readings may result from parallel paths, charged capacitors or semiconductor junctions, so circuit context matters.</p>')
],['★ Compare voltage and current measurement connections.','★ Why should resistance tests be done on de-energized circuits?']);

A('Safety and first aid','Electrical and electronics workshops require prevention, isolation and appropriate emergency response.',[
S('Electrical hazards','<p>Risks include electric shock, short circuits, burns, fire and stored energy. Prevention includes insulation, correct fusing, proper earthing, de-energization before maintenance and keeping liquids away from electrical work.</p>'),
S('Before touching a circuit','<p>Identify the supply, switch it off, isolate it where required, verify the absence of hazardous voltage using an appropriate method and only then proceed according to institutional procedure.</p>'),
S('Emergency response','<p>Do not place yourself in danger while helping another person. Isolate the hazard if it can be done safely, call trained assistance and follow the laboratory’s first-aid and emergency procedure.</p>')
],['★ List major electrical workshop hazards.','★ Why is isolation important before maintenance?']);

A('Unit and Measurements','Measurement is the foundation of quantitative physics and engineering.',[
S('SI system','<p>The SI system provides a common language for engineering quantities. Derived units such as newton, joule, pascal and watt are combinations of base units, so dimensional consistency can be checked.</p>'),
S('Error sources','<p>Systematic error tends to shift readings in a consistent way; random error causes scatter; gross error comes from mistakes such as wrong scale or transcription. Calibration and repeated careful measurements address different error types.</p>'),
S('Ancient measurement','<p>Historical astronomical instruments demonstrate that accurate observation existed before modern electronic instruments. Their study shows the importance of reference scales, geometry, repeated observation and careful alignment.</p>')
],['★ Explain systematic, random and gross errors.','★ Why can dimensional analysis not determine a numerical constant?']);

A('Simple Harmonic and Wave Motion','Oscillation and waves explain repeated motion and energy transfer.',[
S('Energy in SHM','<p>In ideal SHM, energy continually transfers between kinetic and potential forms. At the mean position speed is maximum and displacement is zero; at an extreme position displacement is maximum and speed is momentarily zero.</p>'),
S('Wave parameters','<p>Amplitude describes maximum disturbance, wavelength is the spatial period and frequency is cycles per second. They are related by v=fλ. Phase describes the relative state of oscillation.</p>'),
S('Superposition','<p>When waves overlap, their displacements add algebraically under the linear approximation. This principle explains interference and several practical wave phenomena.</p>')
],['★ Describe energy conversion during SHM.','★ Define amplitude, wavelength, frequency and phase.']);

A('Electrostatics, Electromagnetism and Current Electricity','Electric and magnetic phenomena are linked through fields, charge motion and induction.',[
S('Field and potential','<p>Electric field is force per unit positive test charge. Potential is potential energy per unit charge. Field direction and potential variation are related, but field is a vector while potential is a scalar.</p>'),
S('Gauss law and capacitance','<p>Gauss law relates electric flux through a closed surface to enclosed charge. A capacitor stores electric energy by separating charge on conductors; its capacitance depends on geometry and dielectric properties.</p>'),
S('Current and magnetism','<p>Moving charge produces magnetic effects. A current-carrying conductor therefore produces a magnetic field, and changing magnetic flux can induce emf. These ideas form the basis of motors, generators and transformers.</p>')
],['★ Differentiate electric field and electric potential.','★ Explain the connection between current and magnetic field.']);

A('Semiconductor Physics','Semiconductors have conductivity between typical conductors and insulators and can be controlled by composition and temperature.',[
S('Energy bands','<p>In a solid, closely spaced atomic energy levels form bands. The valence band and conduction band are separated by a forbidden energy gap. Electrical conduction depends on the availability of mobile charge carriers.</p>'),
S('Intrinsic and extrinsic material','<p>An intrinsic semiconductor is ideally pure. Doping introduces donor or acceptor impurities to create n-type or p-type behaviour. The majority carrier differs between the two types, while both carrier types can exist.</p>'),
S('Junction devices','<p>Combining p-type and n-type material creates a junction with a depletion region. Biasing changes the junction barrier and carrier flow, forming the operating principle of semiconductor diodes and many other devices.</p>')
],['★ Explain band gap and doping.','★ Describe formation of the depletion region.']);

A('Modern Physics','Modern physics explains phenomena where classical models are insufficient.',[
S('Quantum idea','<p>Planck’s quantum hypothesis introduced the idea that energy exchange can occur in discrete amounts. Einstein applied the photon concept to explain the photoelectric effect, showing the particle-like aspect of electromagnetic radiation.</p>'),
S('Matter waves','<p>De Broglie proposed that moving matter has an associated wavelength. This wave-particle duality became a foundation of quantum mechanics and helps explain microscopic behaviour.</p>'),
S('Nuclear phenomena','<p>Radioactive decay, nuclear fission and fusion arise from changes in nuclear states and binding energy. Applications include medical imaging/treatment, energy generation and industrial measurement, alongside the need for controlled handling.</p>')
],['★ Explain the photon concept.','★ State the idea of matter waves.','★ Compare fission and fusion.']);

A('Applied Chemistry - A','Chemistry topics relevant to civil, mechanical and general engineering materials and processes.',[
S('Engineering relevance','<p>Chemistry explains why materials corrode, why water forms scale, why fuels release energy and why polymers have particular properties. The same chemical principles therefore appear in structures, machines, energy systems and maintenance.</p>'),
S('Material-property link','<p>Atomic bonding and composition determine properties such as hardness, conductivity, melting point and chemical resistance. Engineering selection becomes easier when these microscopic causes are linked to macroscopic behaviour.</p>')
],['★ Give four examples of chemistry affecting engineering practice.']);

A('Applied Chemistry - B','Applied Chemistry-B for Electronics Engineering follows the SBTE Semester-I scope: atomic structure and bonding, water and treatment, engineering materials, solid state and electrochemistry.',[
S('Electronics connection','<p>Electronic engineering depends on materials with controlled electrical, thermal and mechanical properties. Semiconductor behaviour, dielectric materials, corrosion, electrochemical power sources and water quality in industrial processes all connect chemistry to electronics.</p>'),
S('Scope of the five units','<p>The five units move from atomic structure and bonding to water, engineering materials, solid-state structure and finally electrochemistry. This sequence links microscopic structure, material properties and chemical-electrical conversion.</p>')
],['★ Explain why chemistry is part of an Electronics Engineering first-semester curriculum.']);

window.PX_LESSONS=L;
})();