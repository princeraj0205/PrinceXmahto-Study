/* PrinceXmahto Study — deep topic dossier layer
   Purpose: every syllabus topic gets real depth, not a one-line definition.
   Each dossier covers meaning, classification/types, principle or mechanism,
   causes/factors where applicable, working/process, differences, applications,
   limitations, examples, common mistakes and exam-ready questions.
*/
(function(){
 const L=window.PX_LESSONS||(window.PX_LESSONS={});
 const D={
 'Algebra Determinant':{
  o:'A determinant is a single numerical value calculated from a square matrix. It is used to test singularity, solve simultaneous equations and obtain inverse matrices.',
  s:[
   ['Meaning and notation','<p>For a 2×2 matrix, <b>|a b; c d|=ad−bc</b>. A determinant is defined only for a square matrix. Its value changes according to the order of rows and columns.</p><p>If det(A)=0, A is singular; if det(A)≠0, A is non-singular and an inverse exists.</p>'],
   ['Types and order','<p>Important forms are first-order, second-order and third-or-higher-order determinants. A diagonal determinant contains non-zero entries only on the main diagonal; triangular determinants have zero entries on one side.</p>'],
   ['Properties','<p>Interchanging two rows changes the sign. If two rows are identical or proportional, the determinant is zero. Multiplying one row by k multiplies the determinant by k. Adding a multiple of one row to another does not change its value.</p>'],
   ['Expansion and minors','<p>The <b>minor</b> Mᵢⱼ is obtained by deleting row i and column j. The <b>cofactor</b> is Cᵢⱼ=(−1)ⁱ⁺ʲMᵢⱼ. A determinant can be expanded along any row or column.</p>'],
   ['Cramer rule and inverse','<p>For AX=B, Cramer’s rule uses Δ and the determinants obtained by replacing one column at a time. It is applicable when Δ≠0. The inverse method uses A⁻¹=adj(A)/|A|, again requiring |A|≠0.</p>'],
   ['Worked check','<p>For 2x+3y=7 and x−y=1, solve x=1+y; substitution gives 1+4y=7, so y=3/2 and x=5/2. Determinants give the same result and provide a systematic method.</p>']
  ],q:['★ Define determinant and singular matrix.','★ State five determinant properties.','★ Find the inverse of a 2×2 matrix.','★ Solve two simultaneous equations by Cramer’s rule.']},
 'Differential Calculus':{
  o:'Differential calculus describes local change. It connects functions, limits, continuity, slope, velocity and rates of change.',
  s:[
   ['Function and variation','<p>A function maps each permitted input to one output. Domain restrictions arise from zero denominators, even roots of negative numbers and logarithms of non-positive numbers.</p>'],
   ['Limit and continuity','<p>A limit describes the value approached near a point. Continuity at a requires f(a), the two-sided limit and their equality. Left and right limits must agree for a two-sided limit to exist.</p>'],
   ['Derivative and meaning','<p>f′(x)=lim(h→0)[f(x+h)−f(x)]/h. Geometrically it is tangent slope; physically it represents instantaneous rate such as velocity from displacement.</p>'],
   ['Rules and types','<p>Use constant, power, sum, product, quotient and chain rules. Trigonometric, exponential and logarithmic derivatives form the standard library. Implicit and parametric differentiation handle equations not written directly as y=f(x).</p>'],
   ['Why and where used','<p>Derivatives are used for motion, optimization, error analysis, curve behaviour, engineering rates and control variables. A derivative can be zero at a stationary point but that point is not automatically a maximum or minimum.</p>']
  ],q:['★ Derive x² from first principles.','★ Explain continuity.','★ Differentiate a composite function using chain rule.','★ Explain the physical meaning of derivative.']},
 'Application of Differential Calculus':{
  o:'Applications convert derivatives into decisions about curve shape, optimization and curvature.',
  s:[
   ['Increasing and decreasing','<p>Find f′, locate points where f′=0 or is undefined, divide the domain into intervals and inspect the sign of f′. Positive derivative indicates increase; negative derivative indicates decrease.</p>'],
   ['Stationary points','<p>A stationary point satisfies f′(a)=0. It may be a local maximum, local minimum or stationary inflection. Classification requires a sign test or second derivative test.</p>'],
   ['Maximum and minimum','<p>For a local maximum, slope changes + to −. For a local minimum it changes − to +. If f′(a)=0, f″(a)<0 indicates a local maximum and f″(a)>0 a local minimum.</p>'],
   ['Optimization method','<p>Translate the engineering condition into one variable, form the objective function, differentiate, find critical points, classify them and state the answer with units. Always check domain restrictions and endpoints when the interval is closed.</p>'],
   ['Curvature','<p>For y=f(x), radius of curvature ρ=[1+(dy/dx)²]^(3/2)/|d²y/dx²|. Sharp bending corresponds to smaller radius.</p>']
  ],q:['★ Solve a maximum-area problem.','★ Distinguish stationary point from maximum.','★ State and use the radius-of-curvature formula.']},
 'Co-ordinate Geometry':{
  o:'Coordinate geometry expresses points and geometric relations through algebraic equations.',
  s:[
   ['Coordinate system and types','<p>Cartesian coordinates use perpendicular axes and four quadrants. Polar coordinates use radius r and angle θ. The Cartesian point (x,y) can be represented by x=r cosθ and y=r sinθ.</p>'],
   ['Distance and section','<p>Distance d=√[(x₂−x₁)²+(y₂−y₁)²]. Internal section in ratio m:n is ((mx₂+nx₁)/(m+n),(my₂+ny₁)/(m+n)). Midpoint is the special case m=n.</p>'],
   ['Straight lines','<p>Slope m=Δy/Δx. Forms include point-slope, slope-intercept and two-point form. Parallel lines have equal slopes; non-vertical perpendicular lines satisfy m₁m₂=−1.</p>'],
   ['Circle','<p>(x−h)²+(y−k)²=r² represents centre (h,k) and radius r. Expanding produces x²+y²+2gx+2fy+c=0, where centre is (−g,−f).</p>'],
   ['Applications and checks','<p>Coordinate methods locate components, calculate clearances and describe paths. Check signs, units, quadrant and whether a line is vertical before applying the slope formula.</p>']
  ],q:['★ Derive distance formula.','★ Find the equation of a line through two points.','★ Convert a general circle equation to centre-radius form.']},
 'Probability and Statistics':{
  o:'Probability models uncertainty; statistics summarises and interprets observed data.',
  s:[
   ['Definitions and types','<p>Probability may be classical, empirical or based on a model. Events may be simple/compound, mutually exclusive, exhaustive, independent or dependent. Independence means one event does not change the probability of the other.</p>'],
   ['Probability laws','<p>0≤P(A)≤1, P(S)=1, P(A′)=1−P(A). Addition: P(A∪B)=P(A)+P(B)−P(A∩B). Multiplication: P(A∩B)=P(A)P(B|A).</p>'],
   ['Conditional probability','<p>P(A|B)=P(A∩B)/P(B). Conditional probability changes the reference information. Bayes’ theorem reverses conditioning and is useful in classification and diagnosis.</p>'],
   ['Descriptive statistics','<p>Mean uses every observation; median is the central ordered value; mode is the most frequent. Range measures the simplest spread. For grouped data, class frequencies and class marks are used.</p>'],
   ['Interpretation','<p>A statistic without context can mislead. State the population/sample, units, centre and spread. Extreme observations can pull the mean strongly while median may remain comparatively stable.</p>']
  ],q:['★ Differentiate independent and mutually exclusive events.','★ Solve conditional probability.','★ Calculate mean, median and mode.']},
 'Atomic Structure and Chemical Bonding':{
  o:'Atomic structure explains the arrangement of protons, neutrons and electrons and provides the basis for periodic behaviour and chemical bonding.',
  s:[
   ['Atomic structure','<p>An atom contains a positively charged nucleus of protons and neutrons surrounded by electrons. Atomic number Z equals proton number; mass number A equals protons plus neutrons.</p>'],
   ['Electronic arrangement','<p>Electrons occupy shells and subshells with increasing energy. Valence electrons largely determine chemical reactivity and bonding behaviour. Isotopes have the same Z but different neutron numbers.</p>'],
   ['Bond types','<p><b>Ionic bonding</b> involves electron transfer and electrostatic attraction. <b>Covalent bonding</b> involves shared electron pairs. <b>Metallic bonding</b> involves positive ion cores with delocalised electrons.</p>'],
   ['Polarity and properties','<p>Electronegativity difference affects bond polarity. Bond type influences melting point, hardness, electrical conductivity, solubility and mechanical behaviour.</p>'],
   ['Why bonding matters','<p>Engineering materials are selected partly from bonding and structure because bonding controls how atoms resist separation, how electrons move and how materials respond to heat, stress and electric fields.</p>']
  ],q:['★ Define atomic number and mass number.','★ Compare ionic, covalent and metallic bonds.','★ Explain why bonding affects material properties.']},
 'Water':{
  o:'Water treatment converts raw water into water suitable for a specified use by removing suspended, dissolved and biological impurities.',
  s:[
   ['Impurities and types','<p>Impurities may be suspended, colloidal or dissolved. Dissolved impurities include hardness-producing calcium and magnesium salts. Biological impurities include microorganisms.</p>'],
   ['Hardness','<p>Temporary hardness is mainly associated with bicarbonates and can be reduced by boiling. Permanent hardness is associated with soluble sulphates/chlorides and requires chemical or ion-exchange treatment.</p>'],
   ['Treatment sequence','<p>A typical municipal sequence is screening, aeration where required, coagulation, flocculation, sedimentation, filtration and disinfection. The exact sequence depends on raw-water quality.</p>'],
   ['Disinfection','<p>Disinfection aims to inactivate disease-causing microorganisms. Chlorination is common; ozone and ultraviolet methods are alternatives with different operating requirements.</p>'],
   ['Water quality','<p>Important parameters include pH, turbidity, hardness, dissolved solids and microbial quality. Treatment must be designed around the intended use rather than a single universal standard.</p>']
  ],q:['★ Differentiate temporary and permanent hardness.','★ Explain a conventional water-treatment sequence.','★ Why is disinfection necessary?']},
 'Engineering Materials':{
  o:'Engineering materials are selected according to mechanical, thermal, electrical, chemical, manufacturing and economic requirements.',
  s:[
   ['Major classes','<p>Metals and alloys, polymers, ceramics, glasses and composites are major classes. Ferrous materials contain iron as the principal component; non-ferrous materials do not.</p>'],
   ['Mechanical properties','<p>Strength is resistance to failure under load. Hardness is resistance to indentation or wear. Toughness is energy absorption before fracture. Ductility is ability to deform plastically in tension; brittleness indicates little plastic deformation before fracture.</p>'],
   ['Thermal and electrical properties','<p>Thermal conductivity controls heat flow; electrical conductivity controls current transport. Expansion coefficient describes dimensional change with temperature.</p>'],
   ['Selection factors','<p>Choose material using load, temperature, corrosion, manufacturability, service life, availability, cost and environmental requirements. No single property determines suitability.</p>'],
   ['Failure and protection','<p>Common degradation mechanisms include corrosion, wear, fatigue and creep. Protection may involve coatings, alloying, heat treatment, lubrication or environmental control.</p>']
  ],q:['★ Define strength, hardness, toughness and ductility.','★ Compare ferrous and non-ferrous materials.','★ List factors used for material selection.']},
 'Chemistry of Fuel and Lubricants':{
  o:'Fuels release useful energy through controlled combustion, while lubricants reduce friction and wear between moving surfaces.',
  s:[
   ['Fuel classification','<p>Fuels may be solid, liquid or gaseous and may be natural or manufactured. A good fuel has suitable calorific value, controllable combustion, reasonable storage properties and acceptable emissions.</p>'],
   ['Calorific value','<p>Higher calorific value includes heat recovered by condensing water vapour; lower calorific value excludes that condensation heat. The distinction matters when comparing fuel performance.</p>'],
   ['Combustion','<p>Complete combustion of a hydrocarbon ideally forms carbon dioxide and water. Insufficient oxygen can produce carbon monoxide and unburnt products. Efficient combustion requires suitable fuel-air mixing, temperature and residence time.</p>'],
   ['Lubricant types','<p>Lubricants can be liquid oils, greases or solid lubricants. Important properties include viscosity, viscosity index, flash point, pour point and resistance to oxidation.</p>'],
   ['Functions and selection','<p>Lubrication reduces friction, removes heat, seals gaps and protects surfaces. Selection depends on load, speed, temperature, material pair and environment.</p>']
  ],q:['★ Define calorific value.','★ Explain complete and incomplete combustion.','★ List important lubricant properties and their significance.']},
 'Electrochemistry':{
  o:'Electrochemistry studies chemical reactions associated with electron transfer and the conversion between chemical and electrical energy.',
  s:[
   ['Oxidation and reduction','<p>Oxidation is loss of electrons or increase in oxidation number; reduction is gain of electrons or decrease in oxidation number. They occur together as a redox process.</p>'],
   ['Electrolytic and galvanic cells','<p>A galvanic cell produces electrical energy from a spontaneous redox reaction. An electrolytic cell uses external electrical energy to drive a non-spontaneous reaction.</p>'],
   ['Electrodes and ions','<p>Oxidation occurs at the anode and reduction at the cathode in both cell types; the signs of the electrodes differ between galvanic and electrolytic cells. Ion movement maintains electrical neutrality.</p>'],
   ['Nernst equation','<p>The Nernst equation relates electrode potential to standard potential and reaction conditions. At 25°C it is commonly written E=E°−(0.0591/n)log Q. It explains concentration effects on cell voltage.</p>'],
   ['Applications','<p>Electrochemistry underlies batteries, electroplating, corrosion control, metal extraction and sensors. Practical performance depends on electrode materials, electrolyte, temperature and current density.</p>']
  ],q:['★ Define oxidation and reduction.','★ Compare galvanic and electrolytic cells.','★ State the Nernst equation and explain each term.']},
 'Introduction to Thermodynamics':{
  o:'Thermodynamics studies energy, heat, work and the direction of physical processes using macroscopic state variables.',
  s:[
   ['System and surroundings','<p>A system is the portion selected for study; everything outside is the surroundings. Systems may be open, closed or isolated depending on mass and energy exchange.</p>'],
   ['Properties and state','<p>Pressure, temperature, volume and internal energy describe a state. Intensive properties do not depend on amount of matter; extensive properties do.</p>'],
   ['Zeroth and first laws','<p>The zeroth law establishes thermal equilibrium and the basis of temperature. The first law expresses energy conservation: ΔU=Q−W when W is work done by the system.</p>'],
   ['Processes','<p>Common processes are isothermal, adiabatic, isobaric, isochoric and cyclic. The defining constraint determines which variables remain constant.</p>'],
   ['Second law and efficiency','<p>The second law introduces direction and entropy. No heat engine can convert all supplied heat into work in a cyclic process. Efficiency compares useful work with energy supplied.</p>']
  ],q:['★ Differentiate open, closed and isolated systems.','★ State first law with sign convention.','★ Explain isothermal and adiabatic processes.']},
 'Internal Combustion Engine and Refrigeration':{
  o:'Internal-combustion engines convert chemical energy of fuel into mechanical work, while refrigeration systems transfer heat from a low-temperature region to a higher-temperature sink using work input.',
  s:[
   ['Engine types','<p>Engines are classified as spark-ignition or compression-ignition, two-stroke or four-stroke, and according to cooling and cylinder arrangement. The classification identifies the ignition method and operating cycle.</p>'],
   ['Four-stroke working','<p>Intake draws the charge in, compression raises pressure and temperature, power follows combustion/expansion, and exhaust removes products. Valve timing and compression ratio affect performance.</p>'],
   ['Performance terms','<p>Important terms include bore, stroke, swept volume, compression ratio, indicated power, brake power, mechanical efficiency and thermal efficiency.</p>'],
   ['Refrigeration principle','<p>A refrigerator uses a cycle in which refrigerant evaporates at low pressure to absorb heat and condenses at higher pressure to reject heat. Main components are compressor, condenser, expansion device and evaporator.</p>'],
   ['COP and comparison','<p>Coefficient of performance for a refrigerator is COP=Q_L/W. It is not the same as thermal efficiency. Higher COP means more cooling effect for the same work input under the specified conditions.</p>']
  ],q:['★ Compare SI and CI engines.','★ Explain four-stroke cycle.','★ Explain the four basic components of a vapour-compression refrigerator.']},
 'Manufacturing Processes and Machine Tools':{
  o:'Manufacturing processes convert raw material into useful components by shaping, removing, joining or modifying material.',
  s:[
   ['Process families','<p>Primary shaping includes casting and forming; machining removes material; joining combines parts; finishing improves surface or dimensional quality; additive methods build material layer by layer.</p>'],
   ['Casting','<p>Molten material is poured into a mould and allowed to solidify. Pattern, mould, gating, riser, shrinkage and defects are important concepts.</p>'],
   ['Machining','<p>Turning, drilling, milling and grinding are common processes. Cutting speed, feed and depth of cut influence productivity, tool life and surface finish.</p>'],
   ['Machine tools','<p>A machine tool provides controlled relative motion between tool and workpiece. Lathe, drilling machine, milling machine and grinding machine serve different geometric operations.</p>'],
   ['Quality and safety','<p>Dimensional accuracy, surface finish, tool condition and workholding affect product quality. Workshop operations require guarding, correct tool selection and safe handling of chips and workpieces.</p>']
  ],q:['★ Classify manufacturing processes.','★ Explain basic lathe operations.','★ Differentiate drilling and milling.']},
 'Power Transmission':{
  o:'Power transmission transfers mechanical power from a source to a driven machine while controlling speed, torque and direction.',
  s:[
   ['Types','<p>Common systems include belt drives, chain drives, gear drives and shaft/coupling systems. Each has different slip, efficiency, speed ratio and maintenance characteristics.</p>'],
   ['Belt drive','<p>Power is transmitted by friction between belt and pulley. Slip and creep can alter velocity ratio. Open and crossed arrangements give different shaft rotation directions.</p>'],
   ['Chain and gears','<p>Chains provide positive drive with negligible slip under normal conditions. Gears provide precise velocity ratio and compact transmission, but require alignment and suitable lubrication.</p>'],
   ['Torque and speed','<p>For ideal transmission, P=Tω. If speed decreases while power remains approximately constant, transmitted torque increases. Real systems have losses, so output power is lower than input power.</p>'],
   ['Selection','<p>Select a drive using power, speed, centre distance, required ratio, shock load, noise, maintenance, environment and cost.</p>']
  ],q:['★ Compare belt, chain and gear drives.','★ Explain P=Tω.','★ What causes belt slip and creep?']},
 'Communication':{
  o:'Communication is the purposeful exchange of information, ideas or feelings between a sender and receiver through a suitable channel.',
  s:[
   ['Process','<p>The basic cycle contains sender, encoding, message, channel, receiver, decoding and feedback. Noise can disturb any stage. Effective communication requires a shared meaning, not merely transmission.</p>'],
   ['Forms','<p>Communication may be verbal or non-verbal, oral or written, formal or informal, interpersonal or group-based. The choice depends on purpose, audience, urgency and record requirements.</p>'],
   ['Barriers','<p>Physical noise, language differences, poor listening, emotional states, cultural assumptions and information overload can distort meaning. Barriers are reduced by clear language, active listening and feedback.</p>'],
   ['7 Cs','<p>Good professional communication is commonly described through clarity, conciseness, completeness, correctness, concreteness, coherence and consideration.</p>'],
   ['Engineering use','<p>Engineers communicate specifications, instructions, reports, drawings, warnings and results. Technical accuracy and traceability are as important as grammatical correctness.</p>']
  ],q:['★ Draw and explain communication process.','★ Classify communication.','★ Explain barriers and the 7 Cs.']},
 'Types of Communication':{
  o:'Types of communication are classified by medium, direction, formality, participants and use.',
  s:[
   ['Verbal and non-verbal','<p>Verbal communication uses words; non-verbal communication uses posture, facial expression, gestures, eye behaviour and other cues. Non-verbal signals can reinforce or contradict spoken words.</p>'],
   ['Oral and written','<p>Oral communication allows rapid interaction and feedback. Written communication provides a durable record and is preferred for specifications, formal notices and many technical documents.</p>'],
   ['Formal and informal','<p>Formal communication follows defined organisational channels. Informal communication develops through personal interaction and can be fast, but important decisions should be documented through appropriate official channels.</p>'],
   ['Direction','<p>Downward communication moves from higher to lower levels; upward moves toward higher levels; horizontal occurs among peers; diagonal crosses functions or levels.</p>']
  ],q:['★ Differentiate oral and written communication.','★ Explain upward, downward and horizontal communication.']},
 'Reading Comprehension':{
  o:'Reading comprehension is the ability to extract explicit information, infer meaning, identify structure and evaluate an author’s message.',
  s:[
   ['Reading levels','<p>Literal reading identifies stated facts. Inferential reading derives implied meaning. Critical reading evaluates evidence, assumptions and consistency. Technical reading additionally requires attention to symbols, conditions and units.</p>'],
   ['Method','<p>Preview the title and structure, read for the main idea, identify supporting details, mark key terms, infer only from evidence and answer in the wording required by the question.</p>'],
   ['Vocabulary in context','<p>Unknown words can often be interpreted from surrounding examples, contrast words, definitions and grammatical role. Dictionary meaning should not override the sentence context without reason.</p>'],
   ['Common errors','<p>Do not confuse an inference with a directly stated fact, copy irrelevant lines, ignore qualifiers such as “may” or “usually,” or answer from prior knowledge when the passage gives a different context.</p>']
  ],q:['★ Identify main idea and supporting details from a passage.','★ Explain literal, inferential and critical reading.']},
 'Vocabulary and Grammar':{
  o:'Vocabulary provides precise word choice while grammar provides the rules that organise words into meaningful sentences.',
  s:[
   ['Word classes','<p>Nouns name entities, pronouns replace nouns, verbs express actions/states, adjectives modify nouns, adverbs modify verbs/adjectives/adverbs, and prepositions/conjunctions connect elements.</p>'],
   ['Tense and agreement','<p>Verb tense locates an action in time. Subject–verb agreement requires the verb form to match the grammatical subject, not a nearby noun.</p>'],
   ['Sentence structure','<p>Simple sentences contain one independent clause; compound sentences join independent clauses; complex sentences combine independent and dependent clauses. Clarity depends on logical relationships, not sentence length.</p>'],
   ['Vocabulary building','<p>Learn words through roots, prefixes, suffixes, collocations and technical context. Synonyms are not always interchangeable because register and meaning can differ.</p>']
  ],q:['★ Identify parts of speech.','★ Explain subject–verb agreement.','★ Correct common tense and sentence errors.']},
 'Professional Writing':{
  o:'Professional writing communicates technical or organisational information accurately, efficiently and for a defined audience.',
  s:[
   ['Structure','<p>Most professional documents need a clear purpose, logical order, headings where useful, concise paragraphs and an appropriate conclusion or action point.</p>'],
   ['Email and letter','<p>A professional email normally contains a meaningful subject, appropriate greeting, purpose, essential details, requested action and professional closing. Formal letters follow a more fixed layout.</p>'],
   ['Report writing','<p>A technical report may contain title, objective, background, method, observations, analysis, results, conclusion and recommendations according to the assignment.</p>'],
   ['Accuracy and ethics','<p>Do not invent measurements, sources or results. Use consistent units, cite borrowed material where required and separate observation from interpretation.</p>']
  ],q:['★ Draft a formal email.','★ Explain the structure of a technical report.','★ List qualities of professional writing.']},
 'Basic Elements of Drawing':{
  o:'Engineering drawing is a standard graphical language used to communicate shape, size, location and manufacturing information.',
  s:[
   ['Drawing elements','<p>Standard elements include drawing sheet, border, title block, lines, lettering, dimensions, symbols and scales. Each has a defined communication purpose.</p>'],
   ['Line types','<p>Visible outlines, hidden details, centre lines, dimension lines, extension lines and section-related lines use different conventions. Correct line hierarchy improves readability.</p>'],
   ['Scale and dimensioning','<p>Scale relates drawing size to actual size. Dimensions should communicate size without ambiguity; extension and dimension lines must be placed so the object remains readable.</p>'],
   ['Projection basics','<p>Projection represents a three-dimensional object on a two-dimensional plane. Orthographic methods use related views so dimensions and features can be interpreted accurately.</p>']
  ],q:['★ Explain standard line types.','★ Define scale and dimensioning.','★ Why is engineering drawing called a graphical language?']},
 'Orthographic Projections':{
  o:'Orthographic projection represents an object using perpendicular projectors and multiple views such as front, top and side views.',
  s:[
   ['Purpose','<p>A single pictorial view may hide dimensions or features. Orthographic views reveal geometry systematically and are widely used for technical documentation.</p>'],
   ['First and third angle','<p>In first-angle projection the object is conceptually between observer and plane; in third-angle projection the plane lies between observer and object. The arrangement of views therefore differs.</p>'],
   ['View selection','<p>The front view should reveal the most important shape. Top and side views are placed according to the adopted projection convention and aligned using projectors.</p>'],
   ['Common errors','<p>Typical mistakes include wrong view placement, inconsistent projection, missing hidden lines, incorrect alignment and dimensioning features that are not visible in the selected view.</p>']
  ],q:['★ Compare first-angle and third-angle projection.','★ Explain front, top and side views.']},
 'Isometric Projection':{
  o:'Isometric projection presents three principal directions in one pictorial view, making a three-dimensional object easier to visualise.',
  s:[
   ['Axes and angles','<p>The three isometric axes are equally inclined in the standard representation, with two axes commonly drawn about 30° to the horizontal. Parallel edges remain parallel; circular features appear as ellipses.</p>'],
   ['Isometric scale','<p>True lengths and isometric lengths differ in formal isometric projection. Isometric drawing often uses true lengths for practical sketching, while projection exercises may require isometric scale.</p>'],
   ['Construction','<p>Start from the overall bounding dimensions, establish axes, mark lengths along the axes, construct planes and add details. Circles are represented by suitable ellipses.</p>'],
   ['Uses','<p>Isometric views communicate shape quickly in manuals, layouts and design discussions, but orthographic views remain necessary for precise manufacturing dimensions.</p>']
  ],q:['★ Define isometric axes.','★ Explain difference between isometric drawing and orthographic views.']},
 'Free Hand Sketches of Engineering Elements':{
  o:'Free-hand engineering sketching develops the ability to communicate component shape and function rapidly without full drafting equipment.',
  s:[
   ['Purpose','<p>Sketches are used during inspection, design discussion, field work and early concept development. Proportion and feature clarity are more important than decorative appearance.</p>'],
   ['Method','<p>Estimate overall proportions first, establish centre lines, block major shapes, add functional details, then add dimensions and labels. Use light construction strokes and darker final outlines.</p>'],
   ['Engineering features','<p>Common elements include bolts, nuts, shafts, bearings, keys, gears, brackets, pipes and simple machine parts. Recognising conventional shapes speeds sketching.</p>'],
   ['Quality','<p>A useful sketch should be legible, proportionate, labelled and consistent with engineering conventions. Hidden details should not be confused with visible edges.</p>']
  ],q:['★ State the steps of a free-hand engineering sketch.','★ Why are centre lines important?']},
 'Basic Computer Aided Drafting':{
  o:'CAD uses computer software to create accurate two-dimensional or three-dimensional engineering drawings.',
  s:[
   ['CAD concepts','<p>CAD stores geometry digitally, allowing precise coordinates, editing, duplication and annotation. Layers help separate object types such as dimensions, construction geometry and text.</p>'],
   ['Basic commands','<p>Typical operations include line, circle, arc, trim, extend, offset, move, copy, rotate, mirror, fillet and dimensioning. Exact command names depend on software.</p>'],
   ['Coordinates and snaps','<p>Absolute, relative and polar coordinates define geometry. Object snaps improve accuracy by locating endpoints, centres, intersections and other geometric references.</p>'],
   ['File and output','<p>CAD files can be edited and exported to standard formats. Before printing, check scale, line weights, units, layers and title-block information.</p>']
  ],q:['★ Explain layers and object snaps.','★ Differentiate absolute and relative coordinates.']},
 'Advanced Computer Aided Drafting':{
  o:'Advanced CAD extends basic drawing into parametric, structured and three-dimensional design workflows.',
  s:[
   ['Parametric thinking','<p>Dimensions and constraints define design intent. Changing a controlling dimension can update related geometry rather than requiring manual redrawing.</p>'],
   ['3D modelling','<p>Solid modelling represents volume and supports operations such as extrude, revolve, cut and fillet. Surface modelling represents complex skins when a solid model is unsuitable.</p>'],
   ['Assembly and documentation','<p>Components can be positioned in assemblies with constraints. Engineering drawings can then be generated from model views, sections and dimensions.</p>'],
   ['Benefits and limits','<p>CAD improves repeatability and revision control, but correct modelling still depends on design knowledge, constraints, units, standards and file management.</p>']
  ],q:['★ Explain parametric modelling.','★ Compare solid and surface modelling.']},
 'Workshop safety and measuring tools':{
  o:'Workshop practice combines safe working habits with measurement and inspection of engineering work.',
  s:[
   ['Safety principles','<p>Wear appropriate protective equipment, keep the work area orderly, use tools only for their intended purpose, isolate energy before maintenance and report damaged equipment. Safety rules depend on the workshop and machine.</p>'],
   ['Measuring tools','<p>Steel rule gives basic linear measurement. Vernier instruments provide finer measurement. Micrometers are used for small dimensions with higher precision. Gauges may check limits rather than provide a direct numerical measurement.</p>'],
   ['Accuracy and error','<p>Accuracy describes closeness to a true/reference value; precision describes repeatability. Zero error, parallax, instrument resolution and temperature can influence measurements.</p>'],
   ['Inspection','<p>Choose an instrument whose range and resolution match the feature. Clean the contact surfaces, align correctly and record units and uncertainty where required.</p>']
  ],q:['★ Differentiate accuracy and precision.','★ Compare vernier and micrometer instruments.','★ State essential workshop safety rules.']},
 'Carpentry and wood working':{
  o:'Carpentry shapes and joins timber using measuring, marking, cutting and finishing operations.',
  s:[
   ['Timber basics','<p>Wood may be hardwood or softwood and contains grain, moisture and natural defects. Moisture content strongly affects dimensional stability.</p>'],
   ['Operations','<p>Common operations include measuring, marking, sawing, planing, chiselling, drilling and sanding. Tool choice follows the geometry and required finish.</p>'],
   ['Joints','<p>Butt, lap, mortise-and-tenon and dovetail joints are examples. Joint choice depends on load direction, appearance, manufacturability and required strength.</p>'],
   ['Quality and safety','<p>Secure the workpiece, use suitable sharp tools, keep hands away from cutting paths and inspect timber for defects before machining.</p>']
  ],q:['★ Classify common timber joints.','★ Explain basic carpentry operations.']},
 'Joining and welding processes':{
  o:'Joining processes connect materials permanently or semi-permanently. Welding forms a joint through heat, pressure or both, with or without filler.',
  s:[
   ['Joining types','<p>Mechanical joining uses fasteners; adhesive joining uses bonding materials; welding and brazing use thermal processes. Selection depends on strength, temperature, disassembly and material compatibility.</p>'],
   ['Welding classification','<p>Fusion welding melts the joint region; pressure welding uses force with or without heat. Arc welding uses an electric arc as the heat source, while gas welding uses a flame.</p>'],
   ['Weld quality','<p>Joint preparation, heat input, alignment and cleanliness influence defects such as porosity, cracks, incomplete fusion and distortion. Inspection may be visual or use suitable non-destructive methods.</p>'],
   ['Safety','<p>Welding requires trained supervision, ventilation, eye protection and control of heat, sparks and electrical hazards. Follow the specific workshop procedure and equipment instructions.</p>']
  ],q:['★ Compare welding, brazing and mechanical joining.','★ List common weld defects and causes.']},
 'Electrical and electronics workshop practices':{
  o:'Workshop practice introduces safe measurement, wiring, component identification and basic electronic assembly.',
  s:[
   ['Electrical measurement','<p>Voltage is measured in parallel; current is measured in series in a conventional circuit. Resistance can be measured directly only under appropriate de-energised conditions with the circuit isolated as required.</p>'],
   ['Components','<p>Resistors limit current, capacitors store charge, inductors store magnetic energy, diodes provide directional conduction and transistors provide switching/amplification functions.</p>'],
   ['Soldering and PCB','<p>A soldered joint requires clean surfaces, appropriate heating and sufficient wetting. PCB assembly depends on correct component orientation, polarity and inspection of joints.</p>'],
   ['Safety','<p>Never work on an energised circuit unless the specific laboratory procedure and qualified supervision explicitly permit it. Use appropriate isolation, fusing, insulated tools and protective equipment.</p>']
  ],q:['★ Explain series current and parallel voltage measurement.','★ Identify basic electronic components.','★ List safe soldering practices.']},
 'Fire safety and first aid':{
  o:'Fire safety focuses on prevention, recognition and safe response; first aid provides immediate care until appropriate medical help is available.',
  s:[
   ['Fire basics','<p>Fire requires fuel, oxygen and sufficient heat. Removing one element can stop combustion. Different fuels produce different fire hazards and require appropriate extinguishing methods.</p>'],
   ['Classes and response','<p>Fire classification depends on the burning material and local standard. Use only the extinguisher type specified for the fire. Evacuation and raising the alarm take priority over property protection.</p>'],
   ['Electrical fire','<p>For electrical equipment, isolate the supply if it is safe to do so and use equipment approved for electrical fires. Do not use water on energised electrical equipment.</p>'],
   ['First aid principles','<p>Ensure scene safety, call appropriate emergency help, assess responsiveness and breathing, and provide only trained first aid. Serious injuries require professional medical attention.</p>']
  ],q:['★ Explain the fire triangle.','★ Why should water not be used on energised electrical equipment?','★ State the first priorities in an emergency.']},
 'Sports and Exercises':{
  o:'Exercise develops physical fitness, coordination, mobility and general wellbeing through planned movement.',
  s:[
   ['Types','<p>A balanced programme may include aerobic activity, strength work, mobility/flexibility and skill-based activity. The appropriate amount depends on age, fitness, health and supervision.</p>'],
   ['Warm-up and recovery','<p>A warm-up gradually prepares the body for activity. Recovery allows breathing and heart rate to return toward resting levels and supports adaptation.</p>'],
   ['Training principles','<p>Progressive overload, specificity, recovery and consistency are fundamental. Excessive training without recovery can reduce performance and increase injury risk.</p>'],
   ['Safety','<p>Use suitable technique, hydration, footwear and environment. Stop activity for significant pain, dizziness or other concerning symptoms and seek appropriate adult/medical help.</p>']
  ],q:['★ Explain warm-up and recovery.','★ State principles of physical training.']},
 'Yoga and Meditation':{
  o:'Yoga combines physical postures, controlled movement and breathing practices; meditation trains attention and awareness.',
  s:[
   ['Yoga components','<p>Common educational practice includes asana, breathing awareness and relaxation. Traditional yoga contains broader philosophical and ethical dimensions beyond physical postures.</p>'],
   ['Meditation','<p>Meditation may use attention to breath, an object, bodily sensations or open awareness. The purpose of practice is to develop stable attention and awareness rather than force thoughts to disappear.</p>'],
   ['Benefits and limits','<p>Regular, appropriately taught practice may support flexibility, relaxation and attention. It is not a substitute for medical treatment, and difficult postures should be learned with suitable instruction.</p>'],
   ['Practice principles','<p>Use a comfortable environment, gradual progression and relaxed breathing. Avoid forcing range of motion or continuing through pain.</p>']
  ],q:['★ Explain meditation and its purpose.','★ State safe principles for yoga practice.']},
 'Fitness and Wellness':{
  o:'Fitness is the capacity to perform physical tasks effectively; wellness is broader and includes physical, mental and social aspects of healthy living.',
  s:[
   ['Fitness components','<p>Health-related components include cardiorespiratory endurance, muscular strength, muscular endurance, flexibility and body composition. Skill-related components include balance, coordination, agility, speed and reaction time.</p>'],
   ['Wellness dimensions','<p>Wellness can include physical, emotional, social, intellectual and environmental dimensions. These dimensions influence one another.</p>'],
   ['Lifestyle factors','<p>Regular activity, adequate sleep, balanced nutrition, hydration, stress management and supportive relationships contribute to wellbeing. Individual needs vary.</p>'],
   ['Assessment','<p>Fitness tests should be selected according to purpose and performed safely. A single test is not a complete measure of overall wellness.</p>']
  ],q:['★ Define fitness and wellness.','★ List components of physical fitness.']},
 'Values and Ethics in Day to Day Life':{
  o:'Values are principles that guide what a person considers important; ethics concerns reasoned standards for deciding right action.',
  s:[
   ['Values','<p>Examples include honesty, respect, responsibility, fairness, empathy and discipline. Values influence choices but may conflict, requiring judgement.</p>'],
   ['Ethical decision process','<p>Identify the facts, affected people, possible actions, relevant duties/rules, likely consequences and conflicts of interest; then choose a defensible action and review the outcome.</p>'],
   ['Everyday examples','<p>Returning property, acknowledging mistakes, respecting privacy, avoiding cheating and keeping commitments are practical applications of integrity.</p>'],
   ['Why it matters','<p>Ethical habits build trust and reduce harm. A technically correct action can still be ethically unacceptable if it violates rights, safety or honesty.</p>']
  ],q:['★ Differentiate values and ethics.','★ Explain an ethical decision-making process.']},
 'Values and Ethics in Profession':{
  o:'Professional ethics applies moral responsibilities to engineering work, organisations, clients, colleagues and society.',
  s:[
   ['Professional responsibility','<p>Engineers are expected to protect safety, communicate honestly, maintain competence, respect confidentiality where appropriate and avoid misleading claims.</p>'],
   ['Conflict of interest','<p>A conflict occurs when personal or external interests can interfere with professional judgement. Disclosure and appropriate management protect impartiality.</p>'],
   ['Safety and public interest','<p>Engineering decisions can affect people and the environment. Safety-related information should not be concealed when it materially affects risk.</p>'],
   ['Digital and academic ethics','<p>Plagiarism, fabricated results, unauthorised access and misuse of intellectual property violate professional trust. Proper attribution and responsible use of technology are essential.</p>']
  ],q:['★ Explain professional responsibility.','★ What is conflict of interest?','★ Why is public safety central to engineering ethics?']},
 'Unit and Measurements':{
  o:'Measurement assigns numerical values to physical quantities using defined units and instruments.',
  s:[
   ['Fundamental and derived quantities','<p>SI base quantities include length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity. Derived quantities combine base units, such as velocity m/s and force newton.</p>'],
   ['Dimensions','<p>Dimensional formula represents a quantity using powers of base dimensions. Dimensional analysis checks equation consistency and can help derive relations, but it cannot determine dimensionless constants.</p>'],
   ['Errors','<p>Systematic error shifts measurements consistently; random error varies unpredictably. Accuracy and precision are distinct. Repetition can help estimate random variation but cannot automatically remove systematic error.</p>'],
   ['Significant figures','<p>Significant figures communicate measurement precision. Do not report more digits than justified by the instrument or calculation.</p>']
  ],q:['★ Define fundamental and derived quantities.','★ Differentiate accuracy and precision.','★ Explain dimensional analysis.']},
 'Simple Harmonic and Wave Motion':{
  o:'SHM is oscillation with restoring acceleration proportional to displacement and directed toward equilibrium; wave motion transfers energy through space.',
  s:[
   ['SHM condition and equation','<p>a=−ω²x. The negative sign identifies the restoring direction. Displacement can be written x=A sin(ωt+φ).</p>'],
   ['Energy','<p>In ideal SHM, total mechanical energy is constant. Kinetic energy is greatest at equilibrium and potential energy is greatest at extreme displacement.</p>'],
   ['Wave types','<p>Mechanical waves require a medium; electromagnetic waves do not. Transverse and longitudinal describe the relationship between particle vibration and propagation direction.</p>'],
   ['Wave parameters','<p>Amplitude measures maximum disturbance, wavelength is spatial period, frequency is cycles per second, period is time per cycle and v=fλ connects them.</p>']
  ],q:['★ Derive v=fλ conceptually.','★ Compare transverse and longitudinal waves.','★ Explain energy distribution in SHM.']},
 'Electrostatics, Electromagnetism and Current Electricity':{
  o:'This topic links electric charge, fields, potential, current, magnetic effects of current and electromagnetic induction.',
  s:[
   ['Electrostatics','<p>Charge is a fundamental electrical property. Like charges repel and unlike charges attract. Coulomb’s law gives force magnitude between point charges as proportional to q₁q₂/r².</p>'],
   ['Field and potential','<p>Electric field is force per unit positive test charge. Potential is work done per unit charge in bringing a test charge from a reference point. Field and potential are related through spatial change of potential.</p>'],
   ['Current and circuits','<p>Current is rate of charge flow. Ohm’s law for an ohmic element is V=IR. Series circuits share current; parallel branches share voltage.</p>'],
   ['Magnetism and induction','<p>Current produces a magnetic field. Changing magnetic flux through a circuit induces emf according to Faraday’s law, with Lenz’s law determining the opposing direction.</p>']
  ],q:['★ State Coulomb’s law.','★ Define electric field and potential.','★ Explain Faraday and Lenz laws.']},
 'Semiconductor Physics':{
  o:'Semiconductors have conductivity between conductors and insulators and their carrier concentration can be controlled by temperature, light and doping.',
  s:[
   ['Band model','<p>The valence band and conduction band are separated by an energy gap. Semiconductor behaviour arises because thermal energy can create mobile electrons and holes.</p>'],
   ['Intrinsic and extrinsic','<p>Intrinsic material is pure. Doping creates n-type material with donor-derived electrons and p-type material with acceptor-derived holes. Majority and minority carriers differ between the two types.</p>'],
   ['PN junction','<p>Carrier diffusion creates a depletion region and built-in electric field. Forward bias reduces the barrier; reverse bias increases it. Excess reverse voltage can produce breakdown mechanisms.</p>'],
   ['Devices','<p>Diodes are used for rectification, switching and protection. Transistors can operate as switches or amplifiers. Semiconductor sensors exploit changes caused by light, temperature or other stimuli.</p>']
  ],q:['★ Explain intrinsic and extrinsic semiconductors.','★ Describe depletion region formation.','★ Compare forward and reverse bias.']},
 'Modern Physics':{
  o:'Modern physics explains phenomena that classical models cannot adequately describe, including quantum effects, atomic spectra, relativity and nuclear processes.',
  s:[
   ['Photon concept','<p>Electromagnetic radiation has quantum energy E=hν. The photoelectric effect demonstrates that light can transfer energy in discrete quanta.</p>'],
   ['Matter waves','<p>Particles can exhibit wave behaviour. The de Broglie wavelength is λ=h/p, linking momentum with wavelength.</p>'],
   ['Nuclear structure','<p>Nuclei contain protons and neutrons. Nuclear stability depends on binding energy and the balance of nuclear forces and electrostatic repulsion.</p>'],
   ['Radioactivity','<p>Unstable nuclei may emit alpha, beta or gamma radiation. Decay is probabilistic and follows exponential behaviour at the population level. Radiation requires appropriate safety controls.</p>'],
   ['Applications','<p>Modern physics supports semiconductors, lasers, imaging, nuclear energy, communication and precision measurement.</p>']
  ],q:['★ State Planck relation.','★ Explain photoelectric effect.','★ Compare alpha, beta and gamma radiation.']},
 'Basic Electrical Parameters and Concepts':{
  o:'Electrical engineering begins with charge, current, voltage, resistance, power and energy and the relationships among them.',
  s:[
   ['Core quantities','<p>Charge is measured in coulomb, current in ampere, voltage in volt, resistance in ohm, power in watt and electrical energy in joule or practical billing units.</p>'],
   ['Ohm and power laws','<p>For an ohmic resistor V=IR. Power can be written P=VI=I²R=V²/R. These equations are valid together only when the relevant voltage/current/resistance relationship applies.</p>'],
   ['Sources and loads','<p>A source supplies electrical energy; a load converts it to another form. Real sources have internal resistance, so terminal voltage may differ from ideal emf.</p>'],
   ['DC and AC','<p>DC has a unidirectional polarity in the basic sense; AC varies with time and commonly reverses periodically. RMS values allow AC heating/power comparisons with DC quantities.</p>']
  ],q:['★ Define current, voltage and resistance.','★ Derive electrical power formulas.']},
 'Fundamentals of D.C. and A.C. Circuits':{
  o:'DC circuits involve constant or steady values; AC circuits involve time-varying quantities, commonly sinusoidal.',
  s:[
   ['DC series and parallel','<p>Series elements carry the same current and their voltage drops add. Parallel branches have the same voltage and branch currents add.</p>'],
   ['Kirchhoff laws','<p>KCL states algebraic current sum at a node is zero. KVL states algebraic voltage sum around a closed loop is zero. Sign conventions must be applied consistently.</p>'],
   ['AC waveform','<p>A sinusoidal voltage can be written v=V_m sin(ωt+φ). Frequency f=1/T and angular frequency ω=2πf. RMS voltage is V_m/√2 for an ideal sine wave.</p>'],
   ['Impedance','<p>In AC analysis, resistance and reactance combine into impedance. Capacitive and inductive reactances depend on frequency, causing phase differences between voltage and current.</p>']
  ],q:['★ State KCL and KVL.','★ Explain RMS value.','★ Compare resistor, inductor and capacitor behaviour in AC.']},
 'Magnetic Circuits and Electromagnetic Induction':{
  o:'Magnetic circuits model magnetic flux paths; electromagnetic induction explains emf produced by changing flux linkage.',
  s:[
   ['Magnetic quantities','<p>Flux is measured in weber, flux density in tesla, magnetomotive force in ampere-turns and reluctance opposes flux. These concepts are analogous, but not identical, to electric-circuit quantities.</p>'],
   ['Faraday law','<p>Induced emf magnitude equals the rate of change of flux linkage: e=−N dΦ/dt. The negative sign expresses Lenz’s law.</p>'],
   ['Self and mutual induction','<p>Changing current in a coil changes its own flux and induces self-emf. Changing current in one coil can induce emf in another, producing mutual induction.</p>'],
   ['Applications','<p>Transformers, generators, motors and inductive sensors rely on electromagnetic principles. Core losses and winding resistance make practical devices non-ideal.</p>']
  ],q:['★ Define reluctance.','★ State Faraday and Lenz laws.','★ Explain self and mutual induction.']},
 'Basic Electronic Components':{
  o:'Electronic components control, store, convert or sense electrical signals and energy.',
  s:[
   ['Passive components','<p>Resistors dissipate energy, capacitors store electric-field energy and inductors store magnetic-field energy. Their behaviour depends on frequency and construction.</p>'],
   ['Semiconductor components','<p>Diodes provide nonlinear directional conduction. LEDs emit light when forward biased. Transistors can amplify or switch. The exact behaviour depends on device type and bias conditions.</p>'],
   ['Identification','<p>Components may be identified using markings, colour codes, package shapes and datasheets. Polarity matters for components such as diodes and electrolytic capacitors.</p>'],
   ['Selection','<p>Choose voltage, current, power, tolerance, temperature range and frequency ratings appropriate to the circuit. A component rating is not an instruction to operate continuously at its maximum value.</p>']
  ],q:['★ Compare resistor, capacitor and inductor.','★ Explain diode function.','★ Why are ratings important?']},
 'Overview of Digital Electronics':{
  o:'Digital electronics represents information using discrete logic states and implements decisions with logic gates and switching devices.',
  s:[
   ['Number systems','<p>Binary uses base 2; decimal base 10; octal base 8; hexadecimal base 16. Conversions are fundamental for digital representation.</p>'],
   ['Logic gates','<p>AND requires all inputs high for a high output; OR requires at least one; NOT inverts; NAND and NOR are universal gates; XOR indicates unequal inputs.</p>'],
   ['Boolean algebra','<p>Boolean expressions can be simplified using identity, complement, absorption and De Morgan laws. Simplification reduces hardware complexity.</p>'],
   ['Combinational and sequential','<p>Combinational outputs depend on present inputs. Sequential circuits also depend on stored state, usually through memory elements such as flip-flops.</p>'],
   ['Applications','<p>Digital logic forms the basis of processors, controllers, counters, communication interfaces and embedded systems.</p>']
  ],q:['★ Explain universal gates.','★ Convert decimal to binary.','★ Differentiate combinational and sequential circuits.']},
 'Introduction to IT Systems and Digital Technologies':{
  o:'IT systems combine hardware, software, data, networks and users to collect, process, store and communicate information.',
  s:[
   ['Data and information','<p>Data are raw observations; information is processed data interpreted in context. Quality depends on accuracy, completeness, timeliness and relevance.</p>'],
   ['Computer system','<p>CPU executes instructions; memory provides fast working storage; persistent storage retains data; input devices capture data and output devices present results.</p>'],
   ['Operating systems','<p>An OS manages hardware resources, files, processes, users and interfaces. Desktop, server and mobile systems differ in purpose and design priorities.</p>'],
   ['Networks and cloud','<p>Networks allow systems to exchange data. Cloud services provide remote computing/storage and collaboration, but require authentication, permissions and reliable connectivity.</p>'],
   ['Cyber hygiene','<p>Use strong unique passwords, updates, access control and careful handling of links/files. Security is a layered process rather than a single setting.</p>']
  ],q:['★ Differentiate data and information.','★ Explain CPU, memory and storage.','★ State basic cyber-hygiene practices.']},
 'Fundamentals of Artificial Intelligence':{
  o:'Artificial intelligence develops systems that perform tasks associated with perception, reasoning, learning or decision-making.',
  s:[
   ['AI and related fields','<p>AI is the broad field. Machine learning learns patterns from data. Deep learning uses multi-layer neural networks. These terms overlap but are not interchangeable.</p>'],
   ['Types by capability','<p>Introductory classifications often distinguish narrow/task-specific AI from hypothetical general AI. Capability labels should not be confused with marketing claims.</p>'],
   ['Machine learning types','<p>Supervised learning uses labelled examples; unsupervised learning finds structure without target labels; reinforcement learning learns through interaction and rewards.</p>'],
   ['Neural networks','<p>A neuron combines weighted inputs and an activation function. Networks learn parameters by minimising a loss through optimisation methods such as gradient-based learning.</p>'],
   ['Limitations','<p>AI systems can inherit biased data, fail outside training conditions, produce errors and require careful evaluation. Accuracy on one dataset does not guarantee safe real-world performance.</p>']
  ],q:['★ Differentiate AI, ML and deep learning.','★ Compare supervised, unsupervised and reinforcement learning.','★ Explain a simple neural-network pipeline.']},
 'Core AI Applications - Computer Vision & NLP':{
  o:'Computer vision extracts information from images or video; natural language processing analyses and generates human language.',
  s:[
   ['Computer vision tasks','<p>Classification assigns a label to an image; object detection identifies objects and locations; segmentation assigns pixels to regions; OCR extracts text from images.</p>'],
   ['Image representation','<p>Digital images are arrays of pixels. Colour images commonly use channels such as RGB. Resolution, noise, lighting and scaling influence model performance.</p>'],
   ['NLP pipeline','<p>Tasks may include tokenisation, normalisation, classification, information extraction, translation and generation. Modern systems often represent text as numerical vectors before modelling.</p>'],
   ['Evaluation','<p>Classification can use accuracy, precision, recall and F1 depending on the task. Vision and NLP systems require representative test data and careful error analysis.</p>'],
   ['Applications and limits','<p>Applications include document processing, inspection, accessibility, search and customer support. Errors can arise from ambiguity, poor image quality, domain shift and biased data.</p>']
  ],q:['★ Compare classification, detection and segmentation.','★ Define OCR and tokenisation.','★ Explain precision and recall.']},
 'Conversational AI and Generative Systems':{
  o:'Conversational AI processes user language to generate responses; generative systems create new text, images, code or other content from learned patterns.',
  s:[
   ['Chatbot architecture','<p>A basic system receives input, identifies intent or context, retrieves or generates a response, applies safety/business rules and presents the result. Production systems may also connect tools or databases.</p>'],
   ['Language models','<p>A language model estimates probabilities of token sequences. Next-token prediction is a training objective used in many modern language models.</p>'],
   ['Prompting','<p>Useful prompts specify task, context, constraints, format and examples when needed. Zero-shot prompting asks for a task without providing worked examples.</p>'],
   ['Strengths and limits','<p>Generative models can draft, summarise, classify and transform information, but may produce confident errors, reflect training bias or mishandle confidential information.</p>'],
   ['Responsible use','<p>Verify important outputs, protect private information, disclose AI assistance when required and keep humans responsible for consequential decisions.</p>']
  ],q:['★ Explain next-token prediction.','★ Define zero-shot prompting.','★ List major limitations of generative AI.']},
 'Programming Logic & Computational Thinking using Python':{
  o:'Computational thinking decomposes problems into steps, patterns and abstractions; Python provides a readable language for implementing those solutions.',
  s:[
   ['Problem-solving cycle','<p>Define the problem, identify inputs and outputs, decompose the task, design an algorithm, implement, test, debug and document. A correct program begins with a clear specification.</p>'],
   ['Core Python','<p>Variables reference values. Common types include int, float, str, bool, list, tuple, set and dict. Operators perform arithmetic, comparison and logical operations.</p>'],
   ['Control flow','<p>if/elif/else selects among conditions. for and while repeat work. break and continue alter loop flow. Indentation defines blocks.</p>'],
   ['Functions and data','<p>Functions package reusable logic and can receive parameters and return values. Lists and dictionaries support common data-processing tasks.</p>'],
   ['Testing and debugging','<p>Test normal, boundary and invalid inputs. Syntax errors prevent execution; runtime errors occur during execution; logical errors produce incorrect results without necessarily crashing.</p>']
  ],q:['★ Explain algorithm and flowchart concepts.','★ Differentiate syntax, runtime and logical errors.','★ Write a Python program using conditions and loops.']},
 'Word Processing':{
  o:'Word processors create structured documents with text, tables, images, styles, headers, footers and page layouts.',
  s:[
   ['Core functions','<p>Editing, formatting, paragraph control, styles, tables, page setup, headers/footers and printing/export are common functions.</p>'],
   ['Styles and structure','<p>Styles create consistent headings and body text and support automatic navigation. Manual formatting every heading is harder to maintain.</p>'],
   ['Tables and references','<p>Tables organise structured information. Captions, page numbers and references improve technical-document usability.</p>'],
   ['Professional practice','<p>Use consistent fonts, spacing, margins and headings. Check spelling, page breaks, figures and accessibility before final export.</p>']
  ],q:['★ Explain styles and their advantage.','★ List major word-processing features.']},
 'Spreadsheets':{
  o:'Spreadsheets organise data in cells and provide formulas, functions, charts and analysis tools.',
  s:[
   ['Cell structure','<p>Rows and columns form cells. A formula begins with = and can reference other cells. Relative, absolute and mixed references behave differently when copied.</p>'],
   ['Functions','<p>SUM, AVERAGE, MIN, MAX, COUNT and conditional functions support routine analysis. Function names vary slightly by software.</p>'],
   ['Data quality','<p>Use consistent units, headers and data types. Avoid mixing text and numbers in calculation columns and check formulas for accidental reference changes.</p>'],
   ['Charts and analysis','<p>Choose a chart that matches the data relationship. A chart should clarify a pattern rather than decorate a report.</p>']
  ],q:['★ Explain relative and absolute references.','★ Write a formula using SUM and AVERAGE.','★ Explain chart selection.']},
 'Presentation Tool':{
  o:'Presentation software combines text, graphics, diagrams and sometimes multimedia to communicate a message to an audience.',
  s:[
   ['Structure','<p>A strong technical presentation has a clear opening, logical sequence, evidence/examples and a concise conclusion.</p>'],
   ['Slide design','<p>Use readable typography, limited text, consistent alignment and meaningful visuals. One slide should communicate one main idea rather than become a page of notes.</p>'],
   ['Delivery','<p>Good delivery depends on preparation, timing, clear speech, audience awareness and controlled use of animations. Slides should support the speaker rather than replace explanation.</p>'],
   ['Technical quality','<p>Check fonts, images, media, links and compatibility before presenting. Keep a backup copy when the presentation is important.</p>']
  ],q:['★ State principles of effective presentation design.','★ Explain the role of visuals.']},
 'Basics of Internet':{
  o:'The Internet is a global network of interconnected networks that uses standard protocols to exchange data and provide services.',
  s:[
   ['Core concepts','<p>Clients request services from servers. IP addresses identify network endpoints; DNS maps human-readable domain names to network addresses.</p>'],
   ['Web','<p>The World Wide Web is one Internet service. Browsers retrieve web resources using protocols such as HTTP/HTTPS. URLs identify resources.</p>'],
   ['Search and information quality','<p>Search engines index and rank available information. Evaluate source authority, date, evidence, purpose and corroboration rather than trusting the first result.</p>'],
   ['Security','<p>HTTPS protects data in transit between browser and server under the protocol’s security model. Users still need secure passwords, careful permissions and protection from phishing.</p>']
  ],q:['★ Differentiate Internet and Web.','★ Explain DNS and URL.','★ List methods for evaluating online information.']},
 'Force systems and equilibrium':{
  o:'Engineering mechanics studies forces and their effects. Equilibrium means the resultant force and resultant moment satisfy the required balance conditions.',
  s:[
   ['Force and vector','<p>Force has magnitude, direction and line of action. It may be resolved into rectangular components. A free-body diagram isolates the body and shows external forces and reactions.</p>'],
   ['Moment and couple','<p>Moment about a point equals force times perpendicular distance from the point to the force line. A couple consists of equal opposite parallel forces producing a pure moment.</p>'],
   ['Equilibrium','<p>For a planar rigid body in equilibrium, ΣFₓ=0, ΣFᵧ=0 and ΣM=0. The equations apply to the chosen free body with consistent signs.</p>'],
   ['Applications','<p>Equilibrium analysis determines support reactions, member loads and static forces in structures and machines.</p>']
  ],q:['★ Draw a free-body diagram.','★ State planar equilibrium equations.','★ Calculate moment of a force.']},
 'Friction':{
  o:'Friction is a resisting interaction between surfaces in contact. It can be useful for traction and harmful through wear and energy loss.',
  s:[
   ['Types','<p>Static friction prevents relative motion up to a limiting value. Kinetic/sliding friction acts during sliding. Rolling resistance arises in rolling systems and has different mechanisms.</p>'],
   ['Laws and coefficient','<p>In the basic dry-friction model, limiting friction F=μN, where μ is coefficient of friction and N is normal reaction. Real surfaces can deviate from this simplified model.</p>'],
   ['Angle of friction','<p>The angle of friction φ is defined by tanφ=μ in the ideal model. It provides a geometric representation of the limiting friction condition.</p>'],
   ['Applications','<p>Friction enables walking, braking and power transmission, while lubrication and surface engineering are used to reduce unwanted friction and wear.</p>']
  ],q:['★ Differentiate static and kinetic friction.','★ State limiting friction relation.','★ Explain useful and harmful effects of friction.']},
 'Centroid and centre of gravity':{
  o:'The centroid is the geometric centre of a plane area; the centre of gravity is the point through which the resultant gravitational force acts.',
  s:[
   ['Centroid of simple shapes','<p>For symmetric uniform shapes, the centroid lies on symmetry axes. Rectangle, triangle, circle, semicircle and composite areas have standard centroid locations.</p>'],
   ['Composite areas','<p>Divide the shape into simple areas, assign each area Aᵢ and centroid coordinates xᵢ,yᵢ, then calculate x̄=ΣAᵢxᵢ/ΣAᵢ and ȳ=ΣAᵢyᵢ/ΣAᵢ. Holes are treated as negative areas.</p>'],
   ['Centre of gravity','<p>For a uniform gravitational field, centre of gravity and centre of mass coincide. For non-uniform fields the distinction matters.</p>'],
   ['Engineering use','<p>Centroids help locate neutral/reference geometry and analyse balance, stability and distributed loading.</p>']
  ],q:['★ Define centroid and centre of gravity.','★ Find centroid of a composite area.','★ Explain treatment of holes as negative areas.']},
 'Simple lifting machines':{
  o:'A simple machine changes the magnitude or direction of applied effort to make lifting a load mechanically more manageable.',
  s:[
   ['Terms','<p>Load is the resistance lifted; effort is the applied force; mechanical advantage MA=Load/Effort; velocity ratio VR=distance moved by effort/distance moved by load.</p>'],
   ['Efficiency','<p>Efficiency η=(MA/VR)×100%. An ideal machine has no losses and η=100%; real machines have friction and deformation, so efficiency is below 100%.</p>'],
   ['Types','<p>Examples include lever, pulley systems, wheel and axle, screw jack and inclined plane. Their mechanical advantage depends on geometry and arrangement.</p>'],
   ['Applications','<p>Machines are selected according to required force multiplication, motion, travel, speed and safety considerations.</p>']
  ],q:['★ Define MA, VR and efficiency.','★ Explain the law of a simple machine.']},
 'Kinematics and dynamics':{
  o:'Kinematics describes motion without considering its cause; dynamics relates motion to force and mass.',
  s:[
   ['Motion quantities','<p>Displacement is directed change in position; velocity is rate of displacement; acceleration is rate of velocity change. Average and instantaneous values must be distinguished.</p>'],
   ['Equations of motion','<p>For constant acceleration: v=u+at, s=ut+½at² and v²=u²+2as. These equations require constant acceleration and consistent units.</p>'],
   ['Newton laws','<p>Newton’s first law describes inertia, second law relates net force to acceleration, and third law describes paired interaction forces acting on different bodies.</p>'],
   ['Energy and momentum','<p>Momentum p=mv. Work changes kinetic energy; gravitational potential energy near Earth is mgh. Conservation principles provide powerful alternatives to force-by-force analysis.</p>']
  ],q:['★ Differentiate distance and displacement.','★ State Newton’s three laws.','★ Solve a constant-acceleration problem.']},
 'Environment and ecosystems':{
  o:'An ecosystem is an interacting system of organisms and their physical environment; environmental education examines these interactions and human impacts.',
  s:[
   ['Components','<p>Biotic components include producers, consumers and decomposers. Abiotic components include light, temperature, water, soil and nutrients.</p>'],
   ['Energy flow','<p>Energy enters most ecosystems through producers and passes through trophic levels. Energy flow is not cyclic in the same way nutrients are.</p>'],
   ['Food chains and webs','<p>A food chain is a simple feeding sequence; a food web combines many connected feeding relationships. Decomposers return nutrients to ecological cycles.</p>'],
   ['Human impact','<p>Land-use change, pollution, overexploitation and climate change can alter habitats and ecological balance. Sustainable engineering aims to reduce avoidable impacts.</p>']
  ],q:['★ Define ecosystem.','★ Differentiate food chain and food web.','★ Explain energy flow.']},
 'Natural resources':{
  o:'Natural resources are materials and processes from nature used by society, including water, land, minerals, forests and energy resources.',
  s:[
   ['Renewable and non-renewable','<p>Renewable resources can replenish on human timescales under suitable management; non-renewable resources are finite on those timescales. Renewable does not mean unlimited.</p>'],
   ['Water and land','<p>Water resources depend on rainfall, groundwater, surface storage and demand. Land supports agriculture, settlements and ecosystems and can degrade through erosion and contamination.</p>'],
   ['Minerals and energy','<p>Mineral resources are extracted for materials. Energy resources include fossil, nuclear and renewable sources, each with different technical and environmental characteristics.</p>'],
   ['Conservation','<p>Conservation uses efficiency, recycling, substitution, restoration and demand management. Engineering decisions should consider life-cycle impacts rather than only initial cost.</p>']
  ],q:['★ Compare renewable and non-renewable resources.','★ Explain resource conservation.']},
 'Pollution and control':{
  o:'Pollution is the introduction of harmful substances or energy into the environment at levels that cause adverse effects.',
  s:[
   ['Types','<p>Air, water, soil/noise and other pollution categories are classified by affected medium and pollutant. Pollutants may be physical, chemical or biological.</p>'],
   ['Sources and effects','<p>Industrial emissions, transport, waste, sewage, agricultural runoff and uncontrolled resource use are common sources. Effects may include health impacts, ecosystem damage and material degradation.</p>'],
   ['Control hierarchy','<p>Prevention at source is generally preferable to end-of-pipe treatment. Control can involve process modification, capture, treatment, reuse and safe disposal.</p>'],
   ['Monitoring','<p>Effective control requires measurement of relevant indicators, comparison with applicable standards and continued verification that the control system performs as intended.</p>']
  ],q:['★ Classify pollution.','★ Explain source prevention and end-of-pipe control.']},
 'Sustainable development':{
  o:'Sustainable development seeks to meet present needs while maintaining the capacity of future generations to meet their needs.',
  s:[
   ['Three dimensions','<p>Sustainability commonly integrates environmental protection, social wellbeing and economic viability. A technically efficient solution may still be unsustainable if social or environmental costs are ignored.</p>'],
   ['Engineering role','<p>Engineers can improve energy efficiency, material efficiency, waste reduction, durability, renewable integration and life-cycle performance.</p>'],
   ['Life-cycle thinking','<p>Assess extraction, manufacturing, transport, use, maintenance and end-of-life. A product with low operating energy may still have significant embodied impacts.</p>'],
   ['Indicators','<p>Resource use, emissions, waste, energy intensity, service life and social outcomes can be used as indicators depending on the project.</p>']
  ],q:['★ Define sustainable development.','★ Explain three dimensions of sustainability.','★ What is life-cycle thinking?']},
 'Climate and environmental responsibility':{
  o:'Climate responsibility concerns understanding human influence on climate and reducing or adapting to environmental risks.',
  s:[
   ['Climate and weather','<p>Weather describes short-term atmospheric conditions; climate describes long-term patterns. Climate change refers to persistent changes in climate characteristics.</p>'],
   ['Greenhouse effect','<p>Certain atmospheric gases absorb and re-emit infrared radiation, warming the lower atmosphere. The natural greenhouse effect makes Earth habitable; increased concentrations can alter the energy balance.</p>'],
   ['Mitigation and adaptation','<p>Mitigation reduces causes such as greenhouse-gas emissions; adaptation reduces vulnerability to impacts. Engineering may contribute to both.</p>'],
   ['Responsible action','<p>Energy efficiency, low-carbon systems, resource conservation, resilient design and evidence-based environmental decisions are practical engineering contributions.</p>']
  ],q:['★ Differentiate mitigation and adaptation.','★ Explain the greenhouse effect.']},
 'Constitution and Preamble':{
  o:'The Constitution provides the fundamental legal framework of India, while the Preamble states the broad values and objectives that guide the constitutional order.',
  s:[
   ['Constitutional framework','<p>The Constitution establishes institutions, powers, rights, duties and procedures of governance. It is the supreme legal framework within the constitutional system.</p>'],
   ['Preamble','<p>The Preamble describes India as a sovereign, socialist, secular, democratic republic and expresses commitments including justice, liberty, equality and fraternity.</p>'],
   ['Institutions','<p>The constitutional structure distributes functions among the Union and States and provides for legislatures, executive authorities and courts.</p>'],
   ['Why engineers study it','<p>Technical professionals work within legal and civic institutions. Understanding constitutional values supports responsible citizenship and awareness of public institutions.</p>']
  ],q:['★ Explain the purpose of the Constitution.','★ Explain major terms in the Preamble.']},
 'Fundamental Rights and Directive Principles':{
  o:'Fundamental Rights protect specified constitutional freedoms and protections; Directive Principles guide the State toward social and economic objectives.',
  s:[
   ['Fundamental Rights','<p>Rights in Part III include equality, freedoms, protection against exploitation, freedom of religion, cultural and educational rights and constitutional remedies, subject to constitutional conditions and limitations.</p>'],
   ['Directive Principles','<p>Directive Principles in Part IV provide policy guidance toward welfare and social justice. They are not enforceable in the same manner as Fundamental Rights but are important to constitutional governance.</p>'],
   ['Relationship','<p>Rights and directive principles are studied together because constitutional governance balances individual freedoms with broader social objectives.</p>'],
   ['Practical relevance','<p>Citizens should understand the distinction between a constitutional right, a statutory entitlement and a policy objective rather than treating all protections as identical.</p>']
  ],q:['★ List categories of Fundamental Rights.','★ Differentiate Fundamental Rights and Directive Principles.']},
 'Governance and Amendments':{
  o:'Governance describes how public institutions make and implement decisions; constitutional amendments provide a formal mechanism for changing constitutional provisions.',
  s:[
   ['Governance structure','<p>Governance involves legislatures, executives, courts, constitutional bodies and public administration. Accountability and rule of law are central concepts.</p>'],
   ['Federal features','<p>India has constitutional arrangements dividing powers between Union and States, with specific provisions governing legislative and administrative relationships.</p>'],
   ['Amendment process','<p>Constitutional amendments follow procedures specified in Article 368 and, for some matters, additional ratification by States. Different provisions therefore have different amendment requirements.</p>'],
   ['Importance','<p>Amendment allows constitutional adaptation while requiring formal procedures rather than ordinary administrative change.</p>']
  ],q:['★ Explain governance and rule of law.','★ What is a constitutional amendment?','★ Explain why amendment procedures differ for some provisions.']},
 'Open Educational Resources':{
  o:'Open Educational Resources are teaching, learning or research materials made available with permissions that allow uses such as reuse, adaptation or redistribution according to the licence.',
  s:[
   ['What makes a resource open','<p>Being free to view is not automatically the same as being openly licensed. The licence determines what users may legally do with the material.</p>'],
   ['5R framework','<p>A common OER framework describes retain, reuse, revise, remix and redistribute. The exact permissions depend on the licence attached to the resource.</p>'],
   ['Quality','<p>Check author, source, date, evidence, curriculum alignment, accessibility, clarity and licence information. Open does not mean automatically accurate.</p>'],
   ['Benefits and limits','<p>OER can reduce cost and enable adaptation and sharing, but quality review, attribution and licence compatibility remain essential.</p>']
  ],q:['★ Define OER.','★ Explain the 5R activities.','★ Why is licence information important?']},
 'Copyright and Open Licensing':{
  o:'Copyright gives creators legal rights over qualifying works; open licences communicate permissions that allow specified uses under stated conditions.',
  s:[
   ['Copyright basics','<p>Copyright protects expression rather than ideas in the abstract. Rights and exceptions depend on applicable law. A work being available online does not automatically place it in the public domain.</p>'],
   ['Open licensing','<p>Open licences grant permissions in advance subject to conditions. Users must read the licence rather than assume that every online image or PDF is reusable.</p>'],
   ['Attribution','<p>Where attribution is required, provide the creator, title, source and licence information in a reasonable form. Also check whether adaptations or commercial use are permitted.</p>'],
   ['Academic practice','<p>Use legally reusable material, cite sources and avoid presenting another person’s work as original. When uncertain, consult the institution’s applicable copyright guidance.</p>']
  ],q:['★ Differentiate copyright and open licensing.','★ Why is online availability not equal to free reuse?']},
 'Creative Common Licenses':{
  o:'Creative Commons licences are standardised copyright licences that communicate permissions for sharing and reuse.',
  s:[
   ['Core conditions','<p>CC licences combine conditions such as attribution (BY), share-alike (SA), non-commercial (NC) and no-derivatives (ND). Public-domain dedication CC0 is different from a CC licence.</p>'],
   ['Licence differences','<p>CC BY generally permits broad reuse with attribution. NC restricts commercial use; ND restricts distribution of adaptations; SA requires adaptations to be shared under compatible terms. Exact licence wording controls the legal permission.</p>'],
   ['Choosing material','<p>For a website or PDF, verify the licence, preserve attribution and check whether your planned modification and distribution are permitted.</p>'],
   ['Common mistake','<p>Do not assume “Creative Commons” means every use is allowed. The specific licence matters.</p>']
  ],q:['★ Explain BY, NC, ND and SA.','★ Why must the exact CC licence be checked?']},
 'OER Repositories and Quality Assurance':{
  o:'OER repositories organise openly licensed educational material; quality assurance checks whether a resource is trustworthy, useful and suitable for learners.',
  s:[
   ['Repository functions','<p>Repositories provide search, metadata, subject organisation and access to educational resources. Some provide review or community feedback.</p>'],
   ['Quality criteria','<p>Check accuracy, authority, relevance to syllabus, clarity, accessibility, currency, learning objectives and licence. A visually attractive resource can still contain errors.</p>'],
   ['Review process','<p>Compare important claims with authoritative sources, inspect references and test examples/calculations. For technical notes, verify formulas, units and definitions.</p>'],
   ['Responsible reuse','<p>Record source and licence information when collecting material so attribution can be maintained when the resource is adapted or redistributed.</p>']
  ],q:['★ List OER quality criteria.','★ Explain why licence metadata should be recorded.']}
 };
 Object.keys(D).forEach(k=>{
   const d=D[k];
   const old=L[k]||{};
   old.overview=d.o;
   old.sections=Array.isArray(old.sections)?old.sections.concat(d.s):d.s;
   old.questions=(old.questions||[]).concat(d.q||[]);
   old.revision=(old.revision?old.revision+' ':'')+'Deep study: definition → classification/types → principle/mechanism → working/process → factors → applications → limitations → examples → common mistakes → exam questions.';
   old.deepMode=true;
   L[k]=old;
 });
 window.PX_LESSONS=L;
})();
