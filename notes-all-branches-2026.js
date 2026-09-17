/* PrinceXmahto Study — all configured Semester-I branches deep study layer.
   This layer augments existing notes instead of replacing them.
   Each topic receives topic-specific: definition, classification, reason/principle,
   working/process, important factors, applications, distinctions and exam points.
*/
(function(){
 const L=window.PX_LESSONS||(window.PX_LESSONS={});
 const A=(topic, sections, questions)=>{
   const n=L[topic]||(L[topic]={overview:'',sections:[],questions:[],revision:''});
   n.sections=Array.isArray(n.sections)?n.sections:[];
   const names=new Set(n.sections.map(s=>String(s[0])));
   sections.forEach(s=>{if(!names.has(s[0])) n.sections.push(s)});
   n.questions=[...(n.questions||[]),...(questions||[])].filter((v,i,a)=>a.indexOf(v)===i);
   n.longForm=true;
 };
 const S=(h,b)=>[h,b];

 A('Algebra Determinant',[
 S('Determinant: meaning and scope','<p>A determinant is a single numerical value associated with a square matrix. It is not the same object as the matrix itself. It helps determine whether a square matrix is singular or non-singular and appears in systems of linear equations, coordinate transformations, area/volume calculations and inverse-matrix methods.</p><p>For a 2×2 matrix A=[[a,b],[c,d]], det(A)=ad−bc.</p>'),
 S('Minors and cofactors','<p>The <b>minor</b> Mᵢⱼ is the determinant obtained after deleting row i and column j. The <b>cofactor</b> is Cᵢⱼ=(−1)ⁱ⁺ʲMᵢⱼ. Cofactors form the basis of expansion of a determinant and construction of the adjoint.</p>'),
 S('Important properties','<p>Interchanging two rows or two columns changes the sign. If two rows/columns are identical or proportional, the determinant is zero. A common factor in a row/column can be taken outside. For a triangular matrix, the determinant is the product of diagonal elements.</p>'),
 S('Singular and non-singular cases','<p>det(A)=0 means A is singular and has no ordinary inverse. det(A)≠0 means A is non-singular and A⁻¹ exists. This distinction is essential before applying inversion methods.</p>')
 ],['★ Define minor and cofactor.','★ State determinant properties.','★ Explain singular and non-singular matrices.']),

 A('Differential Calculus',[
 S('Why differentiation is needed','<p>Differentiation measures the instantaneous rate at which one quantity changes with another. In engineering, position differentiated with respect to time gives velocity, velocity gives acceleration, and a graph differentiated with respect to x gives its local slope.</p>'),
 S('Types of differentiation problems','<p>Common forms include explicit differentiation, implicit differentiation, logarithmic differentiation and parametric differentiation. The correct method depends on how x and y occur in the equation.</p>'),
 S('Higher-order derivatives','<p>The first derivative f′(x) describes rate of change. Differentiating again gives f″(x), which describes the change of the first derivative and is used in acceleration, concavity and maxima/minima tests.</p>'),
 S('Common failure points','<p>Do not treat dy/dx as an ordinary fraction in every situation. In chain-rule problems, the derivative of the inner function must be included. In implicit differentiation, every occurrence of y contributes a dy/dx factor.</p>')
 ],['★ Explain first and second derivatives.','★ Differentiate an implicit function.','★ Explain the chain rule with an example.']),

 A('Application of Differential Calculus',[
 S('Critical points and classification','<p>Critical points occur where f′(x)=0 or where f′ is undefined, subject to the domain. They must be checked because a zero derivative alone does not establish a maximum or minimum.</p>'),
 S('First-derivative test','<p>Check the sign of f′ on both sides of a critical point. A change from + to − indicates a local maximum; − to + indicates a local minimum. No sign change indicates that the point is not classified as a maximum/minimum by this test.</p>'),
 S('Engineering optimization','<p>Optimization converts a practical requirement into a mathematical function, identifies the admissible domain, finds stationary points, tests them and interprets the result using the original physical quantities.</p>')
 ],['★ Explain the first-derivative test.','★ Solve a basic engineering optimization problem.']),

 A('Co-ordinate Geometry',[
 S('Coordinate methods','<p>Coordinate geometry converts geometry into algebra. A point becomes an ordered pair, a line becomes an equation, and geometric relationships can be tested through slopes, distances and algebraic identities.</p>'),
 S('Line classification','<p>Vertical lines have undefined slope and are written x=a. Horizontal lines have slope zero and are written y=b. General, slope-intercept, point-slope and two-point forms describe the same straight-line family in different ways.</p>'),
 S('Circle identification','<p>For (x−h)²+(y−k)²=r², the centre is (h,k) and radius is r. Completing the square converts many general circle equations into this form.</p>')
 ],['★ Distinguish horizontal and vertical lines.','★ Convert a circle equation to standard form.']),

 A('Probability and Statistics',[
 S('Types of events','<p>Events may be simple or compound, mutually exclusive or non-mutually exclusive, independent or dependent, certain or impossible. These classifications determine which probability rule should be used.</p>'),
 S('Probability versus statistics','<p>Probability generally starts with a model and predicts possible outcomes. Statistics starts with observed data and uses summaries or models to understand the population or process that produced the data.</p>'),
 S('Data interpretation','<p>A numerical average must be read with units and context. Outliers can strongly affect the mean, while the median is usually less sensitive to extreme observations. The mode identifies the most frequent value.</p>')
 ],['★ Classify different types of events.','★ Explain probability and statistics as different approaches.']),

 A('Unit and Measurements',[
 S('Physical quantities and units','<p>A physical quantity consists of a numerical magnitude and a unit. SI uses seven base quantities: length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity. Derived quantities are formed from these base quantities.</p>'),
 S('Dimensions','<p>Dimensions express a quantity in powers of fundamental quantities. Dimensional analysis can check the consistency of an equation, derive relationships in suitable problems and convert between unit systems.</p><p>It cannot by itself determine dimensionless constants or prove that a physically incorrect equation is correct.</p>'),
 S('Accuracy, precision and error','<p><b>Accuracy</b> describes closeness to the true value; <b>precision</b> describes repeatability. Error may be systematic, random or gross. Repeated measurements and proper instrument technique help reduce random effects, while calibration helps address systematic error.</p>'),
 S('Significant figures','<p>Significant figures communicate the meaningful precision of a measurement. Zeros between non-zero digits are significant; leading zeros are not; trailing zeros may be significant depending on notation. Calculations should not report unjustified precision.</p>')
 ],['★ Define accuracy and precision.','★ Explain dimensional analysis and its limitations.','★ Classify measurement errors.']),

 A('Simple Harmonic and Wave Motion',[
 S('Types of oscillation','<p>Free oscillation occurs after an initial disturbance with no continuous external driving force. Forced oscillation is maintained by an external periodic force. Damped oscillation loses mechanical energy because of resistive effects.</p>'),
 S('Restoring force and SHM','<p>In ideal SHM the restoring force is proportional to displacement and directed toward equilibrium: F=−kx. Dividing by mass gives a=−ω²x. The negative sign represents the restoring direction.</p>'),
 S('Wave characteristics','<p>Amplitude measures maximum displacement, wavelength is the spatial period, frequency is cycles per second, time period is the duration of one cycle, and phase identifies the state of oscillation. These quantities are linked by v=fλ.</p>')
 ],['★ Differentiate free, forced and damped oscillation.','★ Explain the negative sign in a=−ω²x.']),

 A('Electrostatics, Electromagnetism and Current Electricity',[
 S('Electric charge and field','<p>Electric charge is a fundamental property responsible for electrical interaction. Like charges repel and unlike charges attract. Electric field is force per unit positive test charge and points in the direction of force on a positive test charge.</p>'),
 S('Potential and potential difference','<p>Electric potential at a point is potential energy per unit charge. Potential difference is the work done per unit charge in moving a test charge between two points.</p>'),
 S('Current, resistance and power','<p>Electric current is the rate of flow of charge, I=dQ/dt. Resistance opposes current. For an ohmic conductor at constant physical conditions, V=IR. Electrical power can be written P=VI=I²R=V²/R.</p>'),
 S('Electromagnetic induction','<p>A changing magnetic flux through a circuit induces an emf. Faraday’s law gives the magnitude relation e=−dΦ/dt, while Lenz’s law explains the negative sign: the induced effect opposes the change producing it.</p>')
 ],['★ Define electric field and potential.','★ Explain Faraday and Lenz laws.','★ Derive electrical power relations.']),

 A('Semiconductor Physics',[
 S('Carrier types','<p>Electrons are negative charge carriers and holes represent vacancies in the valence band that behave as positive carriers. In n-type material electrons are majority carriers; in p-type material holes are majority carriers.</p>'),
 S('Doping','<p>Doping deliberately introduces a small concentration of suitable impurity atoms to control conductivity. Donor impurities contribute extra electrons; acceptor impurities create holes.</p>'),
 S('PN junction operation','<p>At a PN junction, diffusion and recombination create a depletion region. Forward bias lowers the effective barrier and permits strong conduction after the characteristic threshold region. Reverse bias increases the barrier and normally gives only a small current until breakdown.</p>'),
 S('Diode uses','<p>A diode is a two-terminal semiconductor device that strongly favours current in one direction. Rectification, switching, protection and signal detection are common applications. The actual behaviour depends on device type and operating region.</p>')
 ],['★ Explain intrinsic and extrinsic semiconductors.','★ Explain depletion region and biasing.']),

 A('Modern Physics',[
 S('Photon concept','<p>Electromagnetic radiation can exchange energy in discrete packets called photons. Photon energy is E=hf=hc/λ. This explains several phenomena that classical wave descriptions alone cannot account for.</p>'),
 S('Atomic energy levels','<p>Electrons in bound atoms occupy allowed energy states. When an electron moves between states, the energy difference is exchanged as electromagnetic radiation: ΔE=hf.</p>'),
 S('Radioactivity','<p>Radioactivity is spontaneous nuclear transformation. Alpha, beta and gamma radiations differ in nature, charge, penetration and ionisation behaviour. Radioactive decay is statistical and is described by the decay constant and half-life.</p>'),
 S('Nuclear energy','<p>Nuclear fission splits a heavy nucleus and can release energy, while fusion combines light nuclei under suitable conditions. Both involve changes in nuclear binding energy and mass-energy equivalence.</p>')
 ],['★ Explain photon energy.','★ Compare alpha, beta and gamma radiation.','★ Define half-life.']),

 A('Basic Electrical Parameters and Concepts',[
 S('Electrical quantities','<p>Voltage is energy per unit charge, current is charge flow rate, resistance opposes current, power is rate of electrical energy transfer, and energy is the accumulated work done.</p>'),
 S('DC and AC','<p>Direct current maintains one direction of conventional current flow. Alternating current periodically changes magnitude and direction. Circuit calculations must use the correct source model and measurement convention.</p>'),
 S('Open and short circuits','<p>An open circuit has an interrupted path and ideally zero current through the break. A short circuit provides a very low-resistance path and can produce excessive current; protection devices are used to limit damage.</p>')
 ],['★ Differentiate open and short circuits.','★ Define voltage, current, power and energy.']),

 A('Fundamentals of D.C. and A.C. Circuits',[
 S('Series and parallel networks','<p>In a series circuit the same current flows through each ideal element, while voltages divide. In a parallel circuit the same voltage appears across each branch, while current divides between branches.</p>'),
 S('Kirchhoff laws','<p>Kirchhoff’s Current Law follows conservation of charge at a node: algebraic sum of currents is zero. Kirchhoff’s Voltage Law follows conservation of energy around a closed loop: algebraic sum of voltage changes is zero.</p>'),
 S('AC quantities','<p>For a sinusoidal waveform, RMS value represents the equivalent DC heating effect in a resistor. Frequency determines cycles per second and angular frequency is ω=2πf.</p>')
 ],['★ Explain KCL and KVL.','★ Compare series and parallel circuits.','★ Define RMS value.']),

 A('Magnetic Circuits and Electromagnetic Induction',[
 S('Magnetic quantities','<p>Magnetic flux Φ measures total magnetic field passing through an area. Flux density B is flux per unit normal area. Magnetomotive force drives flux in a magnetic circuit, while reluctance opposes flux.</p>'),
 S('Inductance','<p>An inductor stores energy in a magnetic field. A changing current produces an induced emf that opposes the change in current. For an ideal inductor, stored energy is proportional to LI².</p>'),
 S('Transformer principle','<p>A transformer transfers AC electrical energy between circuits through mutual electromagnetic induction. The voltage ratio is related to the turns ratio for an ideal transformer. Transformers require changing flux and therefore do not operate as ordinary transformers from steady DC.</p>')
 ],['★ Define flux, flux density and reluctance.','★ Explain mutual induction.']),

 A('Basic Electronic Components',[
 S('Passive components','<p>Resistors dissipate electrical energy, capacitors store energy in an electric field, and inductors store energy in a magnetic field. Their behaviour depends on frequency, ratings and physical construction.</p>'),
 S('Active components','<p>Diodes and transistors can control current or perform rectification, switching and amplification. Active behaviour depends strongly on biasing and operating region.</p>'),
 S('Ratings and failure','<p>Component selection requires checking resistance/capacitance/inductance value, voltage rating, current rating, power dissipation, tolerance, temperature range and physical package. Exceeding ratings can cause failure or unsafe operation.</p>')
 ],['★ Compare resistor, capacitor and inductor.','★ Explain why component ratings matter.']),

 A('Overview of Digital Electronics',[
 S('Analog and digital signals','<p>An analog signal can vary continuously over a range. A digital system represents information using discrete levels, commonly binary 0 and 1. Digital representation improves repeatability and enables logic-based processing.</p>'),
 S('Number systems','<p>Binary uses base 2, decimal base 10, octal base 8 and hexadecimal base 16. Conversions are performed using place values or repeated division/multiplication methods depending on direction.</p>'),
 S('Logic gates','<p>AND, OR and NOT are basic gates. NAND and NOR are universal gates because suitable combinations can implement any Boolean function. XOR is widely used in comparison and addition circuits.</p>'),
 S('Boolean reasoning','<p>Boolean algebra provides rules for simplifying logic expressions. Truth tables list outputs for all possible input combinations and are essential for verifying a logic circuit.</p>')
 ],['★ Compare analog and digital signals.','★ Explain universal gates.','★ Construct a truth table for basic gates.']),

 A('Introduction to IT Systems and Digital Technologies',[
 S('Information system structure','<p>An information system combines people, procedures, hardware, software and data to collect, process, store and communicate information. A computer is one component of a larger information system.</p>'),
 S('Storage hierarchy','<p>Registers and cache are very fast and small, main memory stores active programs/data, and secondary storage retains data persistently. Speed, capacity and cost differ across levels.</p>'),
 S('Networks and web','<p>A network allows devices to communicate. The Internet is a global interconnection of networks. A web browser retrieves and displays resources using web protocols; a search engine indexes and retrieves information rather than being the Internet itself.</p>'),
 S('Cyber hygiene','<p>Strong unique passwords, multi-factor authentication where available, software updates, careful permission handling, backups and verification of links reduce common security risks.</p>')
 ],['★ Differentiate Internet, Web and browser.','★ Explain memory and storage hierarchy.']),

 A('Fundamentals of Artificial Intelligence',[
 S('AI and conventional programming','<p>Traditional programs normally encode explicit rules. Machine-learning systems can learn patterns from data and use the learned model to produce predictions or decisions.</p>'),
 S('Types of machine learning','<p>Supervised learning uses labelled examples, unsupervised learning finds structure in unlabelled data, and reinforcement learning learns actions through rewards or penalties from an environment.</p>'),
 S('Artificial neural networks','<p>An ANN contains interconnected computational units arranged in layers. Inputs are transformed using weighted connections, biases and activation functions. During training, parameters are adjusted to reduce a chosen loss function.</p>'),
 S('Limitations','<p>AI systems can inherit bias from data, fail outside the conditions represented in training, and produce confident but incorrect outputs. Evaluation requires appropriate data, metrics and human oversight.</p>')
 ],['★ Compare supervised, unsupervised and reinforcement learning.','★ Explain the role of weights and activation functions in an ANN.']),

 A('Core AI Applications - Computer Vision & NLP',[
 S('Computer vision pipeline','<p>A typical vision pipeline may include image acquisition, preprocessing, segmentation or feature extraction, model inference and post-processing. The exact stages depend on the application.</p>'),
 S('Classification versus detection','<p>Image classification assigns one or more labels to an image or region. Object detection identifies object categories and their locations, commonly using bounding boxes. Segmentation assigns labels at pixel or region level.</p>'),
 S('OCR and NLP','<p>Optical Character Recognition converts visual characters into machine-readable text. Natural Language Processing handles human language through operations such as tokenization, classification, extraction, translation and generation.</p>'),
 S('Evaluation','<p>Accuracy alone may be misleading for imbalanced data. Precision, recall, F1 score and task-specific error measures provide additional information about model performance.</p>')
 ],['★ Differentiate classification, detection and segmentation.','★ Explain OCR and tokenization.']),

 A('Conversational AI and Generative Systems',[
 S('Chatbot architecture','<p>A conversational system generally receives an input, interprets it, maintains relevant context, produces or retrieves a response, and presents that response to the user. Architecture varies from rule-based systems to neural language models.</p>'),
 S('Large language models','<p>Language models estimate patterns in sequences of tokens. Modern large language models use neural architectures trained on large text datasets and generate outputs by repeatedly selecting probable next tokens under a decoding strategy.</p>'),
 S('Prompt engineering','<p>A useful prompt specifies the task, context, constraints, desired format and relevant examples when needed. Zero-shot prompting asks for a task without examples; few-shot prompting supplies examples to establish the pattern.</p>'),
 S('Risks and responsible use','<p>Generated text can contain factual errors, bias, privacy risks or fabricated references. Important outputs should be checked against reliable sources, and sensitive information should not be unnecessarily supplied to an AI system.</p>')
 ],['★ Explain a basic chatbot pipeline.','★ Differentiate zero-shot and few-shot prompting.','★ State major limitations of generative AI.']),

 A('Programming Logic & Computational Thinking using Python',[
 S('Problem-solving process','<p>A programming solution begins with problem definition, input/output identification, decomposition, algorithm design, implementation, testing and maintenance. Clear problem boundaries prevent many coding errors.</p>'),
 S('Control structures','<p>Sequence executes statements in order, selection chooses among alternatives using conditions, and iteration repeats a block while a condition or collection requires it. These three structures form the foundation of procedural logic.</p>'),
 S('Functions and modularity','<p>A function groups a reusable operation behind a defined interface. Parameters provide inputs and a return value provides output. Modularity reduces duplication and makes testing easier.</p>'),
 S('Testing and debugging','<p>Testing checks expected behaviour using normal, boundary and invalid inputs. Debugging identifies and corrects faults. A program that runs without syntax errors can still contain logical errors.</p>')
 ],['★ Explain sequence, selection and iteration.','★ Differentiate syntax, runtime and logical errors.']),

 A('Communication',[
 S('Communication process','<p>Communication involves a sender, message, encoding, channel, receiver, decoding and feedback. Noise can interfere at any stage. Effective communication requires that the intended meaning and received meaning are sufficiently aligned.</p>'),
 S('Forms of communication','<p>Communication may be oral, written, visual or non-verbal. It may also be formal or informal, internal or external, depending on context and relationship between participants.</p>'),
 S('Effective communication','<p>Clarity, correctness, completeness, conciseness, concreteness, consideration and courtesy improve professional communication. The appropriate channel and level of technical detail should match the audience.</p>')
 ],['★ Draw and explain the communication cycle.','★ Explain communication noise and feedback.']),

 A('Types of Communication',[
 S('Verbal communication','<p>Verbal communication uses spoken or written language. Spoken communication allows rapid feedback and tone, while written communication provides a durable record and can be reviewed before sending.</p>'),
 S('Non-verbal communication','<p>Facial expression, posture, gestures, eye behaviour and other physical signals can support or contradict spoken words. Interpretation depends on context and culture.</p>'),
 S('Formal and informal communication','<p>Formal communication follows recognised organisational channels. Informal communication is more flexible and relationship-based. Professional settings require judgement about which form is appropriate.</p>')
 ],['★ Differentiate verbal and non-verbal communication.','★ Explain formal and informal communication.']),

 A('Reading Comprehension',[
 S('Reading stages','<p>Effective comprehension involves previewing the text, identifying the main idea, locating supporting details, understanding vocabulary from context, making justified inferences and reviewing the passage.</p>'),
 S('Main idea and inference','<p>The main idea is the central point supported by the passage. An inference is a conclusion supported by evidence in the text but not necessarily stated word-for-word.</p>'),
 S('Common errors','<p>Answers should be based on the passage rather than personal assumptions. Avoid choosing an option merely because it contains a familiar word; check whether the complete meaning matches the text.</p>')
 ],['★ Differentiate main idea and supporting detail.','★ Explain inference with an example.']),

 A('Vocabulary and Grammar',[
 S('Word classes','<p>Nouns name entities, pronouns replace nouns, verbs express actions or states, adjectives modify nouns, adverbs modify verbs/adjectives/adverbs, and conjunctions connect words or clauses. Correct identification supports sentence analysis.</p>'),
 S('Tense and agreement','<p>English tense expresses time and aspect. Subject-verb agreement requires the verb form to match the grammatical subject, not simply the nearest noun.</p>'),
 S('Vocabulary building','<p>Meaning can often be inferred from prefixes, suffixes, roots, context and contrast. Technical vocabulary should be learned with definition and usage rather than isolated word lists.</p>')
 ],['★ Explain subject-verb agreement.','★ Identify major parts of speech.']),

 A('Professional Writing',[
 S('Technical writing','<p>Technical writing communicates information accurately for a defined audience. It uses clear structure, precise terminology, logical sequence and evidence where appropriate.</p>'),
 S('Email and application structure','<p>A professional message normally contains a clear subject, appropriate greeting, concise purpose, necessary details, requested action and professional closing. Irrelevant personal detail should be avoided.</p>'),
 S('Report writing','<p>A technical report may contain title, objective, background, method, observations/results, analysis, conclusion and recommendations depending on the assignment. Headings make long material easier to navigate.</p>')
 ],['★ State the structure of a professional email.','★ Explain the purpose of headings in a technical report.']),

 A('Basic Elements of Drawing',[
 S('Drawing standards','<p>Engineering drawing uses standardised lines, lettering, scales, dimensions and symbols so that a drawing can communicate a design without ambiguity.</p>'),
 S('Line types','<p>Object lines show visible outlines, hidden lines indicate unseen features, centre lines identify axes or centres, dimension lines communicate measurements, and construction lines assist geometric construction. Exact conventions should follow the prescribed standard.</p>'),
 S('Scale and dimensioning','<p>Scale relates drawing size to actual size. Dimensioning should state size and location clearly without unnecessary duplication. A drawing is useful only when another person can manufacture or interpret the represented object from it.</p>')
 ],['★ Explain common engineering line types.','★ Define scale and dimensioning.']),

 A('Orthographic Projections',[
 S('Purpose','<p>Orthographic projection represents a three-dimensional object using separate two-dimensional views. Each view shows dimensions and features visible from a particular direction.</p>'),
 S('Principal views','<p>Front, top and side views are selected to describe the object with minimum ambiguity. The choice of front view should expose the most characteristic features of the object.</p>'),
 S('Projection systems','<p>First-angle and third-angle projection use different relative arrangements of views. The projection symbol is used to communicate the adopted method and should be read before interpreting the drawing.</p>')
 ],['★ Explain the purpose of orthographic projection.','★ Differentiate first-angle and third-angle projection.']),

 A('Isometric Projection',[
 S('Principle','<p>Isometric representation shows three principal directions with equal angular spacing in the drawing convention. It gives a pictorial representation while preserving a consistent relationship between the three axes.</p>'),
 S('Isometric scale','<p>True-length measurements and isometric measurements differ depending on whether an isometric projection or an isometric drawing is required. The prescribed construction method must be followed consistently.</p>'),
 S('Circles and curves','<p>A circle on an isometric plane appears as an ellipse-like representation. Correct construction requires locating the centre and major/minor directions according to the selected method.</p>')
 ],['★ Define isometric projection.','★ Explain how a circle is represented in isometric view.']),

 A('Free Hand Sketches of Engineering Elements',[
 S('Purpose','<p>Freehand sketches communicate an idea quickly without full drafting equipment. They are used for observation, design discussion, maintenance notes and preliminary engineering communication.</p>'),
 S('Proportion and construction','<p>Good sketches preserve relative proportion, major geometry, important features and necessary dimensions. Light construction lines can establish axes and overall proportions before darker final lines are added.</p>'),
 S('Typical elements','<p>Common practice includes sketching bolts, nuts, shafts, bearings, keys, simple machine parts and standard views. The objective is communication of form and function rather than decorative drawing.</p>')
 ],['★ State the purpose of freehand engineering sketches.','★ List features of a good engineering sketch.']),

 A('Basic Computer Aided Drafting',[
 S('CAD concept','<p>Computer-aided drafting uses software to create, modify, annotate, store and print engineering drawings. Digital geometry allows accurate editing and reuse.</p>'),
 S('Core operations','<p>Typical operations include line, circle, arc, trim, extend, offset, copy, move, rotate, mirror, dimension and layer control. The exact command names depend on the CAD software.</p>'),
 S('Layers and precision','<p>Layers organise geometry by purpose such as object lines, dimensions or construction. Object snaps and coordinate input improve geometric accuracy.</p>')
 ],['★ Explain the purpose of CAD layers.','★ List common basic CAD operations.']),

 A('Advanced Computer Aided Drafting',[
 S('Advanced editing','<p>Advanced drafting uses blocks/components, templates, reusable standards, parametric constraints where supported, annotation management and systematic layer conventions to improve productivity.</p>'),
 S('Drawing management','<p>Large drawings require consistent units, layers, lineweights, text styles, dimension styles and plotting settings. Poor standards can make a technically correct model difficult to interpret on paper.</p>'),
 S('Model versus documentation','<p>Geometry represents the object, while dimensions, notes and symbols communicate manufacturing or construction information. A professional CAD workflow manages both.</p>')
 ],['★ Explain why CAD standards matter.','★ Differentiate geometry and documentation.']),

 A('Workshop safety and measuring tools',[
 S('Safety principles','<p>Workshop safety begins with identifying hazards, selecting appropriate protective equipment, maintaining a clear work area, using tools for their intended purpose and following machine-specific procedures.</p>'),
 S('Measurement tools','<p>Steel rules, vernier calipers, micrometers and gauges serve different ranges and precision requirements. Instrument choice depends on the dimension, tolerance, accessibility and required accuracy.</p>'),
 S('Measurement errors','<p>Parallax, zero error, poor alignment, excessive measuring force, dirt and worn instruments can affect readings. Instruments should be checked and used with correct contact and viewing technique.</p>')
 ],['★ Compare vernier caliper and micrometer.','★ List common causes of measurement error.']),

 A('Carpentry and wood working',[
 S('Wood classification','<p>Timber may be broadly classified as hardwood or softwood, while engineering selection also considers grain, moisture, strength, workability and defects. Seasoning reduces excess moisture and improves dimensional stability.</p>'),
 S('Basic operations','<p>Common operations include measuring, marking, sawing, chiselling, planing, drilling and joining. Tool selection depends on the operation and required finish.</p>'),
 S('Joints','<p>Butt, lap, mortise-and-tenon and other joints are selected according to load, geometry, appearance and manufacturability. A sound joint depends on accurate marking and fitting.</p>')
 ],['★ Explain seasoning of timber.','★ Describe common carpentry joints.']),

 A('Joining and welding processes',[
 S('Joining classification','<p>Joining processes may be temporary or permanent. Mechanical fasteners allow disassembly, while welding, brazing and soldering create or use a bonded joint with different temperature and material requirements.</p>'),
 S('Welding principle','<p>Welding joins materials by creating a metallurgical bond using heat, pressure or both. Different processes use different heat sources, electrodes, shielding methods and joint configurations.</p>'),
 S('Joint defects','<p>Porosity, cracks, lack of fusion, undercut and distortion can occur due to unsuitable parameters, contamination, poor preparation or incorrect technique. Inspection and process control are used to detect and reduce defects.</p>')
 ],['★ Differentiate welding, brazing and soldering.','★ List common welding defects and causes.']),

 A('Electrical and electronics workshop practices',[
 S('Workshop instruments','<p>Common instruments include multimeters, test leads, power supplies and basic hand tools. Measurements should be made using the correct mode, range and connection.</p>'),
 S('Component identification','<p>Resistors may be identified by colour codes or printed values, capacitors by capacitance and voltage markings, and semiconductor devices by part number and package. Datasheets provide authoritative specifications.</p>'),
 S('Soldering principles','<p>A sound soldered connection requires clean surfaces, suitable soldering temperature, adequate wetting and mechanical stability. Excessive heat can damage components or insulation.</p>')
 ],['★ Explain correct multimeter connection for voltage and current measurement.','★ State features of a good solder joint.']),

 A('Fire safety and first aid',[
 S('Fire triangle','<p>Combustion requires fuel, an oxidising agent and sufficient heat. Fire control works by removing or interrupting one or more required conditions.</p>'),
 S('Fire classes and response','<p>Different fuels produce different fire hazards, so extinguishing methods must match the fire type and the equipment instructions. Electrical hazards require special caution because water can create additional electrical danger.</p>'),
 S('Emergency response','<p>First aid begins with scene safety, calling appropriate emergency help and providing basic care within the responder’s training. Do not take actions that create additional risk to the injured person or rescuer.</p>')
 ],['★ Explain the fire triangle.','★ Why must the fire type be considered before extinguishing it?']),

 A('Values and Ethics in Day to Day Life',[
 S('Values and ethics','<p>Values are principles or standards that influence choices. Ethics is the systematic consideration of what actions are right, fair or responsible in a given context.</p>'),
 S('Everyday ethical decisions','<p>Honesty, respect, responsibility, fairness and empathy influence ordinary decisions. Ethical reasoning considers consequences, duties, rights and the interests of affected people.</p>')
 ],['★ Define values and ethics.','★ Explain ethical decision-making in daily life.']),

 A('Values and Ethics in Profession',[
 S('Professional ethics','<p>Professional ethics governs responsible behaviour in technical work. Engineers and technicians are expected to value safety, honesty, competence, confidentiality where appropriate and responsibility toward society and the environment.</p>'),
 S('Conflict of interest','<p>A conflict of interest occurs when personal interests could improperly influence professional judgement. Transparency, disclosure and following organisational rules help manage such situations.</p>'),
 S('Safety responsibility','<p>Technical decisions can affect people, property and the environment. Safety-related information must not be ignored simply because a shortcut is faster or cheaper.</p>')
 ],['★ Explain conflict of interest.','★ Why is professional responsibility important in engineering?']),

 A('Sports and Exercises',[
 S('Physical fitness components','<p>Fitness includes cardiovascular endurance, muscular strength, muscular endurance, flexibility and body-control abilities. Different activities develop these components to different degrees.</p>'),
 S('Exercise principles','<p>Safe training commonly uses gradual progression, appropriate recovery, correct technique and consistency. Warm-up prepares the body for activity; recovery helps return toward resting condition.</p>')
 ],['★ List major components of physical fitness.','★ Explain the purpose of warm-up and recovery.']),

 A('Yoga and Meditation',[
 S('Yoga concept','<p>Yoga combines physical postures, controlled breathing, concentration and other practices. In educational wellness contexts, it can be studied as a system for physical awareness, mobility, balance and mental focus.</p>'),
 S('Meditation','<p>Meditation practices train attention or awareness. Techniques may focus on breathing, a chosen object, bodily sensations or open monitoring. Benefits and suitability vary among individuals.</p>'),
 S('Practice principles','<p>Begin gradually, use comfortable positions, avoid forcing a movement and stop if pain or unusual symptoms occur. Correct instruction is preferable for unfamiliar techniques.</p>')
 ],['★ Define meditation.','★ State safe principles for yoga practice.']),

 A('Fitness and Wellness',[
 S('Wellness dimensions','<p>Wellness includes physical, mental, emotional and social aspects of healthy functioning. It is broader than the absence of disease.</p>'),
 S('Lifestyle foundations','<p>Regular physical activity, adequate sleep, balanced nutrition, hydration, stress management and supportive social relationships contribute to overall wellbeing.</p>')
 ],['★ Define wellness.','★ Explain major lifestyle factors supporting fitness.']),

 A('Water',[
 S('Water quality parameters','<p>Water quality is assessed through physical, chemical and biological characteristics. Important parameters include turbidity, pH, hardness, dissolved solids and microbial quality depending on intended use.</p>'),
 S('Hardness','<p>Hardness mainly arises from dissolved calcium and magnesium salts. Temporary hardness is associated mainly with bicarbonates and can be reduced by boiling; permanent hardness is associated with other salts and requires suitable treatment methods.</p>'),
 S('EDTA method','<p>In complexometric estimation, EDTA forms stable complexes with hardness-producing metal ions. An indicator changes colour near the endpoint under controlled pH conditions, allowing hardness to be calculated from titrant consumption.</p>'),
 S('Treatment overview','<p>Water treatment may include screening, coagulation, sedimentation, filtration, disinfection and specialised softening or demineralisation depending on the source and required quality.</p>')
 ],['★ Differentiate temporary and permanent hardness.','★ Explain the principle of EDTA hardness estimation.']),

 A('Engineering Materials',[
 S('Material classification','<p>Engineering materials include metals, polymers, ceramics, composites and semiconductor materials. Selection depends on mechanical, thermal, electrical, chemical and economic requirements.</p>'),
 S('Mechanical properties','<p>Strength is resistance to failure under load; hardness is resistance to indentation or scratching; toughness is ability to absorb energy before fracture; ductility is ability to deform plastically in tension; brittleness is tendency to fracture with little plastic deformation.</p>'),
 S('Material selection','<p>A material should be selected from service requirements rather than name alone. Temperature, corrosion, wear, loading, manufacturability, cost and availability can all influence the choice.</p>')
 ],['★ Define strength, hardness, toughness and ductility.','★ Explain factors affecting material selection.']),

 A('Chemistry of Fuel and Lubricants',[
 S('Fuel classification','<p>Fuels may be solid, liquid or gaseous and may be classified by origin or application. A useful fuel must release energy efficiently and be practical to store, transport and use.</p>'),
 S('Calorific value','<p>Calorific value is the heat released by complete combustion of a specified quantity of fuel. Higher and lower calorific values differ according to whether water formed during combustion is considered condensed.</p>'),
 S('Lubricants','<p>Lubricants reduce friction and wear between moving surfaces, carry heat away and may protect against corrosion. Important properties include viscosity, viscosity index, flash point, pour point and chemical stability.</p>')
 ],['★ Differentiate higher and lower calorific value.','★ Explain the functions of lubricants.']),

 A('Electrochemistry',[
 S('Electrolytes','<p>An electrolyte conducts electricity through mobile ions in molten or aqueous form. Strong electrolytes ionise extensively, while weak electrolytes ionise only partially.</p>'),
 S('Electrochemical cells','<p>An electrochemical cell involves oxidation and reduction at electrodes. In a galvanic cell a spontaneous chemical reaction produces electrical energy; in an electrolytic cell electrical energy drives a non-spontaneous reaction.</p>'),
 S('Corrosion','<p>Corrosion is the deterioration of a material, commonly a metal, through chemical or electrochemical interaction with its environment. Prevention methods include suitable material selection, coatings, inhibitors and cathodic protection.</p>')
 ],['★ Differentiate galvanic and electrolytic cells.','★ Explain electrochemical corrosion and prevention.']),

 A('Introduction to Thermodynamics',[
 S('System and surroundings','<p>A thermodynamic system is the chosen portion of matter or space under study; everything outside is the surroundings. Systems may be open, closed or isolated according to mass and energy exchange.</p>'),
 S('Laws of thermodynamics','<p>The zeroth law establishes thermal equilibrium and temperature comparison. The first law expresses conservation of energy. The second law introduces directionality and entropy. Engineering analysis uses these laws to evaluate energy conversion and efficiency.</p>'),
 S('Processes','<p>Common idealised processes include constant-volume, constant-pressure, constant-temperature and adiabatic processes. The defining constraint changes the relationship between pressure, volume and temperature.</p>')
 ],['★ Classify thermodynamic systems.','★ State the first and second laws.','★ Differentiate isothermal and adiabatic processes.']),

 A('Internal Combustion Engine and Refrigeration',[
 S('IC engine types','<p>Internal-combustion engines burn fuel inside the engine cylinder or combustion chamber. Engines may be classified by ignition method, cycle, number of strokes, cooling method and fuel.</p>'),
 S('Four-stroke cycle','<p>The four basic strokes are suction/intake, compression, power/expansion and exhaust. The valve and piston sequence controls the movement of fresh charge and combustion products.</p>'),
 S('Engine performance','<p>Brake power is useful shaft output. Thermal efficiency relates useful work to fuel energy input. Mechanical losses reduce brake output compared with indicated power.</p>'),
 S('Refrigeration principle','<p>A refrigerator removes heat from a low-temperature space and rejects it to a higher-temperature environment using external work. The coefficient of performance compares desired refrigeration effect with work input.</p>')
 ],['★ Explain four-stroke engine operation.','★ Define brake power and thermal efficiency.','★ State the principle of refrigeration.']),

 A('Manufacturing Processes and Machine Tools',[
 S('Process families','<p>Manufacturing processes include casting, forming, machining, joining and additive methods. Selection depends on geometry, material, tolerance, surface finish, production quantity and cost.</p>'),
 S('Machining','<p>Machining removes material using a cutting tool to produce required dimensions and finish. Lathe, drilling and milling are common machine-tool operations, each suited to particular geometries.</p>'),
 S('Casting','<p>Casting produces a component by pouring molten material into a mould and allowing it to solidify. Pattern, mould, gating, riser, shrinkage and defects are important considerations.</p>')
 ],['★ Compare casting and machining.','★ Explain factors affecting process selection.']),

 A('Power Transmission',[
 S('Transmission purpose','<p>Power transmission transfers mechanical power from a source to a driven machine while controlling speed, torque and direction as required.</p>'),
 S('Belt and rope drives','<p>Belt drives transmit power through friction between belt and pulley. They are simple and suitable for moderate centre distances but can experience slip and creep.</p>'),
 S('Chain and gear drives','<p>Chain drives use positive engagement and therefore avoid ordinary belt slip. Gear drives provide accurate speed ratios and compact power transmission but require suitable alignment, lubrication and manufacturing accuracy.</p>'),
 S('Drive selection','<p>Selection considers power, speed ratio, centre distance, noise, maintenance, shock loading, space, efficiency and cost.</p>')
 ],['★ Compare belt, chain and gear drives.','★ List factors used to select a transmission drive.']),

 A('Force systems and equilibrium',[
 S('Force classification','<p>A force may be tensile or compressive, concentrated or distributed, and can act along a line of action. A force is completely described by magnitude, direction, sense and point/line of application as required by the problem.</p>'),
 S('Equilibrium','<p>A body is in static equilibrium when the resultant force and resultant moment satisfy the required equilibrium conditions. In a plane, ΣFx=0, ΣFy=0 and ΣM=0 are the standard independent equations.</p>'),
 S('Free-body diagram','<p>A free-body diagram isolates the body and replaces external interactions with forces or moments. Correct isolation and clear sign conventions are often more important than algebraic manipulation.</p>')
 ],['★ Define a free-body diagram.','★ State plane equilibrium equations.']),

 A('Friction',[
 S('Types of friction','<p>Static friction prevents relative motion up to a limiting value. Kinetic or sliding friction acts during relative sliding. Rolling resistance occurs when a body rolls and is generally influenced by deformation and surface conditions.</p>'),
 S('Laws and coefficient','<p>For dry sliding in the simple engineering model, limiting friction is proportional to normal reaction: F≤μN, with equality at impending motion. The coefficient μ depends on the interacting surfaces and conditions.</p>'),
 S('Applications and control','<p>Friction is necessary in brakes, belts and walking, but excessive friction causes wear and energy loss. Lubrication, surface treatment and appropriate materials can reduce unwanted friction.</p>')
 ],['★ Differentiate static and kinetic friction.','★ State the limiting-friction relation.']),

 A('Centroid and centre of gravity',[
 S('Centroid','<p>The centroid is the geometric centre of a plane area or line distribution. For a uniform plane lamina, the centre of gravity coincides with the centroid when gravitational acceleration is uniform.</p>'),
 S('Composite areas','<p>For composite figures, divide the shape into standard simple areas, assign each area and centroid coordinate, and calculate the area-weighted coordinates: x̄=ΣAx/ΣA and ȳ=ΣAy/ΣA.</p>'),
 S('Centre of gravity','<p>The centre of gravity is the point through which the resultant gravitational force acts. Its position depends on mass distribution and the gravitational field.</p>')
 ],['★ Differentiate centroid and centre of gravity.','★ Explain the composite-area method.']),

 A('Simple lifting machines',[
 S('Machine terms','<p>A simple lifting machine helps raise a load by changing the magnitude or direction of applied effort. Mechanical advantage compares load with effort, while velocity ratio compares distance moved by effort with distance moved by load.</p>'),
 S('Efficiency','<p>Efficiency is the ratio of useful output work to input work. In practical machines it is below 100% because of friction, deformation and other losses.</p>'),
 S('Examples','<p>Lever, pulley systems, wheel and axle, screw jack and inclined plane are common simple machines. Their mechanical advantage depends on geometry and loading arrangement.</p>')
 ],['★ Define mechanical advantage, velocity ratio and efficiency.','★ Explain why practical efficiency is below 100%.']),

 A('Kinematics and dynamics',[
 S('Kinematics','<p>Kinematics describes motion without analysing the forces causing it. Position, displacement, velocity and acceleration are the principal quantities.</p>'),
 S('Dynamics','<p>Dynamics connects motion with force and mass. Newton’s laws provide the basic framework for analysing translational motion.</p>'),
 S('Motion relations','<p>For constant acceleration, standard equations such as v=u+at, s=ut+½at² and v²=u²+2as connect initial velocity, final velocity, acceleration, time and displacement.</p>')
 ],['★ Differentiate kinematics and dynamics.','★ State constant-acceleration equations.']),

 A('Word Processing',[
 S('Document structure','<p>Word processors combine text, paragraphs, styles, tables, images, headers, footers and page settings. Styles provide consistent formatting and make large documents easier to manage.</p>'),
 S('Editing and review','<p>Find/replace, spell checking, comments and revision tools support editing. Professional documents should use consistent headings, spacing, numbering and page layout.</p>')
 ],['★ Why are styles useful in long documents?','★ List common document-review tools.']),

 A('Spreadsheets',[
 S('Spreadsheet model','<p>A spreadsheet stores data in cells arranged by rows and columns. Formulas calculate values from cell references, while functions provide standard operations such as SUM, AVERAGE, MIN and MAX.</p>'),
 S('References','<p>Relative references change when formulas are copied; absolute references remain fixed using the appropriate notation. Correct reference choice prevents calculation errors in repeated formulas.</p>'),
 S('Data analysis','<p>Sorting, filtering, conditional formatting, charts and summary functions help identify patterns. Input data should be validated before analysis.</p>')
 ],['★ Differentiate relative and absolute references.','★ Explain spreadsheet data validation.']),

 A('Presentation Tool',[
 S('Presentation design','<p>A presentation communicates a sequence of ideas using slides. A clear hierarchy, limited text, readable typography and relevant visuals help the audience follow the argument.</p>'),
 S('Structure','<p>A technical presentation commonly uses title, objective, background, method or concept, results/examples and conclusion. Speaker notes can contain details that do not need to appear on the slide.</p>')
 ],['★ State principles of effective technical presentation.']),

 A('Basics of Internet',[
 S('Internet architecture','<p>The Internet is a global network of interconnected networks. Devices communicate using standard protocols. IP addresses identify network interfaces and DNS maps human-readable domain names to network addresses.</p>'),
 S('Web and URLs','<p>The World Wide Web is a service operating over the Internet. A URL identifies a resource location. HTTPS adds encryption and authentication to HTTP through TLS.</p>'),
 S('Safe browsing','<p>Users should verify domains, use secure connections, avoid entering credentials on suspicious pages, keep software updated and use unique passwords with multi-factor authentication where available.</p>')
 ],['★ Differentiate Internet and World Wide Web.','★ Explain DNS and HTTPS.']),

 A('Constitution and Preamble',[
 S('Constitution','<p>A constitution establishes the framework of government, distributes powers, defines institutions and provides fundamental rules for the state. The Indian Constitution begins with the Preamble, which states foundational constitutional ideals.</p>'),
 S('Preamble concepts','<p>The Preamble describes India as sovereign, socialist, secular, democratic and republican and states objectives including justice, liberty, equality and fraternity. These terms should be understood in their constitutional context.</p>')
 ],['★ Explain the purpose of a constitution.','★ Explain major terms used in the Preamble.']),

 A('Fundamental Rights and Directive Principles',[
 S('Fundamental Rights','<p>Fundamental Rights protect important individual freedoms and constitutional guarantees. Their scope and reasonable restrictions are defined within the constitutional framework.</p>'),
 S('Directive Principles','<p>Directive Principles guide the state toward social and economic objectives. They are important constitutional principles even though their legal status differs from enforceable Fundamental Rights.</p>'),
 S('Relationship','<p>Rights and directive principles address different constitutional functions. Understanding their relationship requires reading the relevant constitutional provisions rather than treating either as an unrestricted power.</p>')
 ],['★ Differentiate Fundamental Rights and Directive Principles.']),

 A('Governance and Amendments',[
 S('Governance structure','<p>Indian governance involves constitutional institutions at Union and State levels, with defined functions for legislatures, executives and courts. Local government also operates within the constitutional framework.</p>'),
 S('Constitutional amendment','<p>The Constitution provides procedures for amendment. Different provisions may require different levels of parliamentary approval and, for specified matters, ratification by a required number of states.</p>')
 ],['★ Explain why constitutional amendment procedures differ by subject.']),

 A('Open Educational Resources',[
 S('Definition','<p>Open Educational Resources are teaching, learning and research materials made available with permissions that allow specified forms of reuse and adaptation. “Free to access” and “openly licensed” are not automatically identical.</p>'),
 S('5R framework','<p>Open education is commonly discussed through permissions such as retain, reuse, revise, remix and redistribute, subject to the actual licence terms attached to a resource.</p>')
 ],['★ Define OER.','★ Explain why access and licensing are different concepts.']),

 A('Copyright and Open Licensing',[
 S('Copyright','<p>Copyright generally gives creators or rights holders legal control over specified uses of original works, subject to applicable law and exceptions. Educational usefulness does not automatically remove copyright restrictions.</p>'),
 S('Open licensing','<p>An open licence communicates permissions in advance. Users must follow the licence conditions, including attribution or share-alike requirements where applicable.</p>')
 ],['★ Differentiate copyright and open licensing.','★ Why must licence conditions be checked before reuse?']),

 A('Creative Common Licenses',[
 S('Licence elements','<p>Creative Commons licences combine conditions such as Attribution (BY), ShareAlike (SA), NonCommercial (NC) and NoDerivatives (ND). The exact combination determines what reuse is permitted.</p>'),
 S('Licence checking','<p>Before adapting or redistributing a work, identify the exact licence, preserve required notices and provide attribution in the manner required by that licence. Do not assume that every Creative Commons licence permits every form of reuse.</p>')
 ],['★ Explain BY, SA, NC and ND.','★ Why is the exact CC licence important?']),

 A('OER Repositories and Quality Assurance',[
 S('Repository selection','<p>An OER repository organises educational resources so users can discover and reuse them. Quality should be assessed rather than assumed from repository presence alone.</p>'),
 S('Quality checks','<p>Check author/source, accuracy, currency, alignment with syllabus, accessibility, clarity, evidence, licence information and suitability for learners. A resource should be reviewed before being adopted as study material.</p>')
 ],['★ List criteria for evaluating an OER.']),

 A('Environment and ecosystems',[
 S('Ecosystem structure','<p>An ecosystem contains living organisms interacting with one another and with physical factors. Producers capture energy, consumers transfer it through food relationships, and decomposers recycle matter.</p>'),
 S('Energy and matter','<p>Energy flows through trophic levels and is progressively dissipated as heat, while elements such as carbon and nitrogen cycle through biological and physical reservoirs.</p>')
 ],['★ Explain producers, consumers and decomposers.','★ Differentiate energy flow and nutrient cycling.']),

 A('Natural resources',[
 S('Resource classification','<p>Resources may be renewable or non-renewable depending on the rate and conditions of replenishment. Water, forests, soil, minerals and energy resources require different management strategies.</p>'),
 S('Conservation','<p>Conservation combines efficient use, prevention of waste, restoration where possible and long-term planning. Sustainable use must consider ecological, social and economic effects.</p>')
 ],['★ Differentiate renewable and non-renewable resources.']),

 A('Pollution and control',[
 S('Pollution types','<p>Major forms include air, water, soil, noise and solid-waste pollution. Each has different sources, pathways, impacts and control methods.</p>'),
 S('Control approach','<p>The preferred approach is often prevention or reduction at source, followed by treatment and safe disposal where needed. Monitoring is required to determine whether control measures are effective.</p>')
 ],['★ Classify major types of pollution.','★ Explain source reduction as a pollution-control strategy.']),

 A('Sustainable development',[
 S('Concept','<p>Sustainable development seeks to meet present needs while maintaining the capacity of future generations to meet their needs. Engineering decisions should consider environmental, social and economic dimensions.</p>'),
 S('Engineering role','<p>Energy efficiency, resource conservation, durable design, waste minimisation, life-cycle thinking and appropriate technology can reduce environmental impacts while maintaining required performance.</p>')
 ],['★ Define sustainable development.','★ Explain life-cycle thinking in engineering.']),

 A('Climate and environmental responsibility',[
 S('Climate system','<p>Climate is the long-term pattern of weather conditions. Human activities can alter atmospheric concentrations of greenhouse gases and influence radiative balance, while natural variability also affects climate.</p>'),
 S('Responsibility','<p>Engineers can reduce environmental impact through efficient systems, responsible material selection, pollution prevention, renewable energy where appropriate and evidence-based environmental assessment.</p>')
 ],['★ Differentiate weather and climate.','★ State engineering actions that can reduce environmental impact.'])

 // Common aliases in the configured curriculum are intentionally linked to the same deep concepts.
 Object.keys(L).forEach(k=>{if(L[k]){L[k].sections=L[k].sections||[];L[k].longForm=true;}});
})();
