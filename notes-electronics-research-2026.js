/* PrinceXmahto Study — Electronics / EC research layer
   Source basis: the user's uploaded Electronics Engineering Semester-I curriculum.
   Enrichment approach: original explanations informed by publicly indexed diploma/ECE
   teaching coverage from PW and Unacademy. No third-party note text is copied.
*/
(function(){
 const L=window.PX_LESSONS||(window.PX_LESSONS={});
 const add=(t,overview,sections,qs)=>{
   const n=L[t]||(L[t]={overview:'',sections:[],questions:[],revision:''});
   if(overview && !n.overview) n.overview=overview;
   n.sections=Array.isArray(n.sections)?n.sections:[];
   const have=new Set(n.sections.map(x=>String(x[0])));
   sections.forEach(x=>{if(!have.has(x[0])) n.sections.push(x)});
   n.questions=[...(n.questions||[]),...(qs||[])].filter((v,i,a)=>a.indexOf(v)===i);
   n.longForm=true;
 };
 const S=(h,b)=>[h,b];

 /* MATHEMATICS */
 add('Algebra Determinant','Determinants, matrices and vectors are used to solve simultaneous equations and represent engineering quantities.',[
 S('Determinants and minors','<p>For a square matrix, the determinant is a scalar value that indicates important algebraic properties of the matrix. For a 2×2 matrix, det([[a,b],[c,d]]) = ad − bc. The minor Mij is obtained by deleting row i and column j; the cofactor is Cij=(−1)^(i+j)Mij.</p>'),
 S('Cramer’s rule','<p>For three simultaneous equations written as AX=B, Cramer’s rule gives x=Dx/D, y=Dy/D and z=Dz/D, provided D is not zero. The determinant D is formed from the coefficient matrix; each replacement determinant is formed by replacing the corresponding coefficient column with the constants.</p>'),
 S('Matrices and inverse','<p>Matrix operations include addition, subtraction, scalar multiplication and multiplication of compatible matrices. For a nonsingular square matrix, A⁻¹=adj(A)/|A|. The inversion method solves AX=B by X=A⁻¹B. A zero determinant means the ordinary inverse does not exist.</p>'),
 S('Vectors','<p>A position vector locates a point from the origin. Vector addition and subtraction are performed component-wise. The scalar product A·B=|A||B|cosθ gives a scalar and is useful for projection and work. The vector product A×B has magnitude |A||B|sinθ and direction perpendicular to both vectors.</p>')
 ],['★ Solve three simultaneous equations using Cramer’s rule.','★ Find the inverse of a 3×3 matrix by adjoint method.','★ Explain scalar and vector products with engineering meaning.']);
 add('Differential Calculus','Differential calculus studies rate of change and provides the mathematical basis for motion, optimization and engineering response.',[
 S('Function, domain and range','<p>A function assigns one output to each permitted input. The domain is the set of allowed input values and the range is the set of resulting outputs. Modulus, signum and floor functions are useful examples because their graphs show different continuity and domain behaviour.</p>'),
 S('Limit and continuity','<p>A limit describes the value approached by a function as x approaches a point. A function is continuous at x=a when f(a) exists, the limit exists and lim(x→a)f(x)=f(a). Indeterminate forms such as 0/0 require algebraic simplification, factorisation or another valid method before evaluation.</p>'),
 S('Differentiation rules','<p>From first principles, f′(x)=lim(h→0)[f(x+h)−f(x)]/h. Important rules include d(x^n)/dx=nx^(n−1), d(sin x)/dx=cos x, d(cos x)/dx=−sin x, d(e^x)/dx=e^x and d(ln x)/dx=1/x. Sum, product, quotient and chain rules extend these results.</p>'),
 S('Special differentiation','<p>Logarithmic differentiation is useful when powers, products or quotients are complicated. In implicit differentiation, differentiate both sides with respect to x and retain dy/dx for y terms. For parametric equations x=x(t), y=y(t), dy/dx=(dy/dt)/(dx/dt), when dx/dt is non-zero.</p>')
 ],['★ Derive differentiation by first principle.','★ Solve a chain-rule problem.','★ Differentiate an implicit or parametric equation.']);
 add('Application of Differential Calculus','This unit connects derivatives with physical rates, tangent/normal, optimization and curvature.',[
 S('Successive derivatives and theorems','<p>The second derivative is obtained by differentiating the first derivative. Rolle’s theorem applies when a function is continuous on [a,b], differentiable on (a,b), and f(a)=f(b); then at least one interior point has f′(c)=0. The Mean Value Theorem gives f′(c)=[f(b)−f(a)]/(b−a) under its standard conditions.</p>'),
 S('Rate of change','<p>If a quantity y depends on x and x changes with time, dy/dt=(dy/dx)(dx/dt). For motion, position s(t) gives velocity v=ds/dt and acceleration a=d²s/dt². This lets an engineering problem be translated into a derivative model.</p>'),
 S('Tangent and normal','<p>At a point on y=f(x), the tangent slope is dy/dx. If the tangent slope is m and m is non-zero, the normal slope is −1/m. The point-slope equation is used to form both lines.</p>'),
 S('Maxima, minima and curvature','<p>Stationary points satisfy f′(x)=0, but classification needs a test. A positive-to-negative change in f′ indicates a local maximum, while negative-to-positive indicates a local minimum. Radius of curvature measures how sharply a curve bends; for y=f(x), ρ=[1+(y′)²]^(3/2)/|y″| where defined.</p>')
 ],['★ State conditions of Rolle’s theorem.','★ Solve a maxima/minima engineering problem.','★ Find tangent, normal and radius of curvature.']);
 add('Co-ordinate Geometry','Coordinate geometry represents engineering geometry using equations, slopes, distances and standard conic forms.',[
 S('Coordinate systems and slope','<p>A Cartesian point is represented by (x,y). The slope of a line through two points is m=(y2−y1)/(x2−x1), when x2≠x1. The angle θ between lines of slopes m1 and m2 satisfies tanθ=(m2−m1)/(1+m1m2), when the denominator is non-zero.</p>'),
 S('Forms of straight line','<p>Important forms are point-slope y−y1=m(x−x1), two-point form, slope-intercept y=mx+c, intercept form x/a+y/b=1, normal form x cosα+y sinα=p and general form Ax+By+C=0. These forms should be selected according to the information supplied.</p>'),
 S('Distances and conics','<p>The perpendicular distance from (x1,y1) to Ax+By+C=0 is |Ax1+By1+C|/√(A²+B²). Circle, parabola, ellipse and hyperbola are conic sections with standard equations that reveal centre, vertex, focus or radius parameters.</p>')
 ],['★ Write a straight-line equation in different forms.','★ Find distance from a point to a line.','★ State standard equations of circle, parabola, ellipse and hyperbola.']);
 add('Probability and Statistics','Probability models uncertainty; statistics summarizes and interprets observed engineering data.',[
 S('Probability rules','<p>For events A and B, P(A∪B)=P(A)+P(B)−P(A∩B). If A and B are independent, P(A∩B)=P(A)P(B). These rules prevent double counting and distinguish mutually exclusive events from independent events.</p>'),
 S('Central tendency','<p>The arithmetic mean is the sum of observations divided by their number. The median is the middle ordered observation, with the two middle values averaged for an even count. The mode is the most frequent value. The choice depends on the data and the effect of extreme observations.</p>'),
 S('Dispersion','<p>Range is maximum minus minimum. Variance measures average squared deviation from the mean and standard deviation is its positive square root. Coefficient of variation is commonly expressed as CV=(standard deviation/mean)×100%, allowing relative variability to be compared.</p>')
 ],['★ Apply addition and multiplication theorems.','★ Calculate mean, median and mode.','★ Calculate variance, standard deviation and coefficient of variation.']);

 /* PHYSICS */
 add('Unit and Measurements','Measurement is the quantitative description of a physical quantity using a number, unit and appropriate precision.',[
 S('Units and dimensions','<p>Fundamental quantities form the basis of SI units; derived quantities are combinations such as velocity, force and power. Dimensional formulae express a physical quantity using powers of base dimensions and provide a consistency check.</p>'),
 S('Errors and precision','<p>Accuracy indicates closeness to the accepted value, while precision indicates repeatability. Systematic errors shift measurements in a consistent way; random errors vary between observations. Absolute error, relative error and percentage error quantify deviation, while propagation rules estimate the effect of measurement uncertainty in calculated quantities.</p>'),
 S('Significant figures and dimensional analysis','<p>Significant figures should reflect measurement precision. Dimensional homogeneity requires both sides of a physical equation to have the same dimensions. Dimensional analysis is useful for unit conversion and deriving/checking relationships, but it cannot determine dimensionless numerical constants.</p>')
 ],['★ Distinguish accuracy and precision.','★ Find percentage error.','★ Check an equation using dimensional homogeneity.']);
 add('Simple Harmonic and Wave Motion','Oscillatory motion repeats about an equilibrium position; wave motion transfers energy and information through a medium or field.',[
 S('SHM fundamentals','<p>In simple harmonic motion, acceleration is proportional to displacement and opposite in direction: a=−ω²x. Displacement, velocity and acceleration vary periodically. For ideal SHM, T=2π/ω and f=1/T. The sign in the restoring relation indicates acceleration toward equilibrium.</p>'),
 S('Wave classification','<p>Mechanical waves require a material medium, whereas electromagnetic waves can propagate in vacuum. In transverse waves, particle oscillation is perpendicular to propagation; in longitudinal waves it is parallel. Wave speed, frequency and wavelength are related by v=fλ.</p>'),
 S('Phase and superposition','<p>Phase describes the state of an oscillation. Phase difference compares two oscillations. Superposition states that when waves overlap in a linear medium, the resultant displacement is the algebraic sum of individual displacements. This principle explains interference and standing-wave behaviour.</p>')
 ],['★ Derive the basic SHM relations.','★ Compare mechanical/electromagnetic and transverse/longitudinal waves.','★ Explain superposition and phase difference.']);
 add('Electrostatics, Electromagnetism and Current Electricity','This unit connects charge, fields, potential, capacitance, current and magnetic effects of current.',[
 S('Electrostatics','<p>Coulomb’s law gives the electrostatic force between point charges as F=(1/4πε)q1q2/r² in a uniform medium. Electric field is force per unit positive test charge. Electric potential is potential energy per unit charge, while potential difference is work per unit charge between two points.</p>'),
 S('Gauss law and capacitance','<p>Gauss’s law relates electric flux through a closed surface to enclosed charge. Capacitance measures charge stored per unit potential difference: C=Q/V. For a parallel-plate capacitor, ideal capacitance increases with plate area and dielectric permittivity and decreases with plate separation.</p>'),
 S('Current and circuits','<p>Current is I=dQ/dt. Ohm’s law for an ohmic conductor is V=IR under fixed physical conditions. Kirchhoff’s current and voltage laws follow conservation of charge and energy. Electrical power is P=VI and can also be written I²R or V²/R.</p>'),
 S('Magnetism and induction','<p>Current produces magnetic fields. For a long solenoid the field depends on turns per unit length and current. Faraday’s law states that changing magnetic flux induces emf, while Lenz’s law gives the opposing direction. These principles underpin generators, transformers and many sensors.</p>')
 ],['★ State Coulomb’s law and define electric field.','★ Explain Gauss law and capacitance factors.','★ Apply KCL/KVL to a simple circuit.','★ Explain Faraday and Lenz laws.']);
 add('Semiconductor Physics','Semiconductor behaviour is controlled by charge carriers, energy bands, doping and junction operation.',[
 S('Energy bands and carrier types','<p>In a solid, allowed electron energies form bands. The valence band and conduction band are separated by a forbidden energy gap. An intrinsic semiconductor has thermally generated electron-hole pairs. Electrons and holes are the principal mobile carriers.</p>'),
 S('Doping and p/n material','<p>Doping adds controlled impurities. Donor impurities produce n-type material with electrons as majority carriers; acceptor impurities produce p-type material with holes as majority carriers. The material remains electrically neutral overall, although carrier concentrations change.</p>'),
 S('PN junction and diode','<p>When p-type and n-type regions meet, diffusion and recombination produce a depletion region and a built-in potential barrier. Forward bias reduces the effective barrier and increases current; reverse bias widens the depletion region and normally gives a small reverse current until breakdown. The diode is therefore useful for rectification, switching and protection.</p>')
 ],['★ Draw and explain energy-band diagrams.','★ Compare intrinsic, n-type and p-type semiconductors.','★ Explain PN junction formation and forward/reverse bias.']);
 add('Modern Physics','Modern physics explains phenomena where classical models are insufficient, including photons, atomic transitions and nuclear processes.',[
 S('Photon and quantum ideas','<p>Electromagnetic radiation exchanges energy in packets called photons. Photon energy is E=hf=hc/λ. This quantized picture explains the frequency dependence of effects such as photoelectric emission.</p>'),
 S('Atomic and nuclear structure','<p>Electrons occupy allowed atomic energy states. A transition between states changes the atom’s energy by ΔE=hf. Nuclear processes involve changes in the nucleus and can release or absorb energy associated with mass-energy and binding energy.</p>'),
 S('Radioactivity and applications','<p>Alpha, beta and gamma radiation differ in charge, mass and penetrating ability. Radioactive decay follows statistical laws; half-life is the time required for the number of undecayed nuclei to fall to half its initial value. Applications include imaging, measurement, sterilization and industrial testing.</p>')
 ],['★ Explain photon energy.','★ Compare alpha, beta and gamma radiation.','★ Define half-life and radioactive decay.']);

 /* CHEMISTRY */
 add('Atomic structure and bonding','Atomic structure and chemical bonding explain how electrons determine the properties and behaviour of engineering materials.',[
 S('Atomic models and quantum ideas','<p>The Rutherford model established a small positively charged nucleus, but could not explain atomic stability and spectra. Bohr introduced quantized orbits for hydrogen. The wave-mechanical model describes electrons using orbitals and quantum numbers rather than fixed classical paths.</p>'),
 S('Quantum numbers and configuration','<p>The principal quantum number identifies the main energy level; azimuthal quantum number identifies subshell shape; magnetic quantum number describes orbital orientation; spin quantum number gives electron spin. Aufbau filling, Pauli exclusion and Hund’s rule determine electronic configurations for the required elements.</p>'),
 S('Chemical bonding and solutions','<p>Ionic bonding involves electron transfer and electrostatic attraction; covalent bonding involves sharing of electron pairs; coordinate bonding is a shared pair donated by one atom. Dipole moment helps describe polarity. Solution strength may be expressed using molarity, normality or molality, each with a different definition and unit.</p>')
 ],['★ Explain Rutherford and Bohr models.','★ Write electronic configuration up to atomic number 30.','★ Compare ionic, covalent and coordinate bonds.','★ Differentiate molarity, normality and molality.']);
 add('Water and its treatment','Water treatment converts raw water into water suitable for domestic or industrial use by controlling hardness, suspended matter, dissolved impurities and biological contaminants.',[
 S('Hardness','<p>Temporary hardness is mainly associated with bicarbonates of calcium and magnesium; permanent hardness is associated with other soluble salts such as chlorides and sulphates. Hardness is commonly expressed as an equivalent amount of CaCO3.</p>'),
 S('EDTA method','<p>In complexometric estimation, EDTA reacts with hardness-producing metal ions in a controlled pH condition. The endpoint is detected using a suitable indicator. The calculation converts the titration result into hardness expressed as CaCO3 equivalent.</p>'),
 S('Softening and water quality','<p>Soda-lime treatment precipitates hardness-forming species; zeolite exchanges ions; ion-exchange resins remove cations and anions more extensively. BOD indicates oxygen required by biodegradable matter, while COD represents oxygen equivalent associated with chemically oxidizable material.</p>')
 ],['★ Distinguish temporary and permanent hardness.','★ Explain EDTA estimation of hardness.','★ Compare soda-lime, zeolite and ion-exchange methods.','★ Differentiate BOD and COD.']);
 add('Engineering materials','Engineering materials are selected according to mechanical, thermal, electrical, chemical and manufacturing requirements.',[
 S('Metals, alloys and ceramics','<p>Metals generally provide strength, conductivity and manufacturability. Alloys modify properties by combining elements. Ceramics commonly provide high hardness, thermal stability and corrosion resistance but may be brittle. Selection depends on service conditions rather than one property alone.</p>'),
 S('Cement, glass and refractories','<p>Cement develops binding strength through hydration. Glass is an amorphous inorganic material with useful optical and chemical properties. Refractories are designed to withstand high temperatures and chemical attack and are used to line furnaces and other thermal equipment.</p>'),
 S('Material selection','<p>Engineers consider strength, hardness, toughness, ductility, density, corrosion resistance, thermal behaviour, electrical properties, cost and manufacturability. The correct material is the one that satisfies the complete service requirement safely and economically.</p>')
 ],['★ Compare metal, ceramic and polymer-type engineering materials.','★ Explain factors governing material selection.']);
 add('Fuel and lubricants','Fuel provides useful energy through controlled combustion, while lubricants reduce undesirable friction and wear between moving surfaces.',[
 S('Fuel properties','<p>A useful fuel should have suitable calorific value, ignition characteristics, storage behaviour, availability and controlled emissions. Octane number describes anti-knock quality of petrol-type fuels, while cetane number relates to ignition quality of diesel fuels.</p>'),
 S('Lubricant functions','<p>Lubricants form a separating film, reduce friction and wear, carry away heat, protect against corrosion and help remove contaminants. Important properties include viscosity, viscosity index, flash point, fire point, cloud point and pour point.</p>'),
 S('Selection and maintenance','<p>Lubricant choice depends on load, speed, temperature, material pair and contamination. Using an unsuitable lubricant can increase wear or heat. Correct grade, cleanliness and replacement interval are important for machine reliability.</p>')
 ],['★ Define calorific value.','★ Explain octane and cetane numbers.','★ List important properties of a lubricant.']);
 add('Electrochemistry','Electrochemistry connects chemical reactions with electrical energy and explains cells, electrode potentials and corrosion.',[
 S('Electrolytes and cells','<p>An electrochemical cell converts chemical energy into electrical energy through a redox reaction. Oxidation occurs at the anode and reduction at the cathode. In a galvanic cell the spontaneous reaction produces electrical energy.</p>'),
 S('Electrode potential and Nernst idea','<p>Electrode potential depends on the chemical species, concentration and temperature. The Nernst equation describes the variation of cell potential with reaction quotient; it is useful for predicting non-standard cell voltages and understanding concentration effects.</p>'),
 S('Corrosion','<p>Corrosion is deterioration of a material through chemical or electrochemical interaction with its environment. Dry corrosion occurs through direct chemical attack; wet corrosion involves an electrochemical cell. Prevention methods include coatings, suitable material selection, cathodic protection and environmental control.</p>')
 ],['★ Explain oxidation and reduction in an electrochemical cell.','★ State the Nernst equation and identify its variables.','★ Compare dry and wet corrosion and prevention methods.']);

 /* MECHANICS */
 add('Force systems and equilibrium','Engineering mechanics models forces and their effects so that structures and machines can be analysed safely.',[
 S('Force and vector representation','<p>Force is a vector with magnitude, direction and line of action. A force can be resolved into components, commonly orthogonal components Fx=Fcosθ and Fy=Fsinθ. The principle of transmissibility allows a force to be moved along its line of action for the external effect on a rigid body.</p>'),
 S('Resultant of force systems','<p>For concurrent coplanar forces, resolve each force into components and combine algebraically. Triangle, parallelogram and polygon laws provide graphical constructions. Non-concurrent systems may additionally require moments to locate the resultant effect.</p>'),
 S('Moment and graphical statics','<p>The moment of a force about a point is M=F×perpendicular distance. Graphical statics uses space diagrams, force diagrams and constructions such as a funicular polygon to represent and determine resultants.</p>')
 ],['★ Resolve a force into components.','★ Find resultant of concurrent forces.','★ Explain moment and principle of transmissibility.']);
 add('Friction','Friction is a resisting force that acts between contacting surfaces and affects equilibrium, motion, power loss and machine design.',[
 S('Types and laws','<p>Static friction acts before sliding begins and adjusts up to a limiting value. Kinetic friction acts during sliding. At limiting equilibrium, F=μN for the ideal Coulomb model, where μ is coefficient of friction and N is normal reaction.</p>'),
 S('Angles of friction and repose','<p>The angle of friction φ satisfies tanφ=μ. The angle of repose is the inclination at which a body is just about to slide under its own weight; in the ideal model it is equal to the angle of friction.</p>'),
 S('Inclined plane and ladder','<p>For a body on an inclined plane, resolve weight parallel and perpendicular to the plane and include friction opposite impending or actual motion. Ladder problems require a free-body diagram containing weight, normal reactions and friction at contacts.</p>')
 ],['★ State laws of friction.','★ Derive the relation μ=tanφ.','★ Draw the FBD of a ladder with friction.']);
 add('Centroid and centre of gravity','Centroid locates the geometric centre of an area, while centre of gravity locates the resultant weight of a body.',[
 S('Basic centroids','<p>For symmetric uniform figures, the centroid lies on the symmetry axis. Standard centroid locations are used for rectangle, square, triangle, circle, semicircle and quarter-circle areas. The centroid of a composite area is found using weighted coordinates.</p>'),
 S('Composite and perforated areas','<p>For non-overlapping areas, x̄=ΣAi xi/ΣAi and ȳ=ΣAi yi/ΣAi. A hole is treated as a negative area. Correct reference axes and consistent units are essential.</p>'),
 S('Centre of gravity and moment of inertia','<p>For a uniform solid, centre of gravity coincides with its geometric centre. Moment of inertia describes distribution of area or mass about an axis. The parallel-axis theorem and perpendicular-axis theorem allow standard results to be transferred to new axes.</p>')
 ],['★ Find centroid of a composite area.','★ Explain negative-area treatment for a hole.','★ State parallel- and perpendicular-axis theorems.']);
 add('Simple lifting machines','Lifting machines trade effort for mechanical advantage and allow loads to be raised conveniently.',[
 S('MA, VR and efficiency','<p>Mechanical advantage MA=W/P, where W is load and P is effort. Velocity ratio is distance moved by effort divided by distance moved by load. Efficiency η=(MA/VR)×100%.</p>'),
 S('Law and machine behaviour','<p>The law of machine is commonly written P=mW+C for a real machine. Friction causes effort to exceed the ideal requirement. A machine is reversible when the load can drive the machine under suitable conditions; otherwise it is self-locking/non-reversible.</p>'),
 S('Machine types','<p>Semester-I applications include wheel and axle, differential axle and wheel, worm and worm wheel, crab winches, screw jack, Weston differential pulley and geared pulley arrangements. The velocity ratio follows the geometry or gearing of the machine.</p>')
 ],['★ Define MA, VR and efficiency.','★ Explain law of machine.','★ Compare screw jack, worm wheel and pulley systems.']);
 add('Kinematics and dynamics','Kinematics describes motion without asking what causes it; dynamics relates motion to forces and mass.',[
 S('Basic motion variables','<p>Displacement describes change of position, velocity is rate of change of displacement and acceleration is rate of change of velocity. For constant acceleration, v=u+at, s=ut+½at² and v²=u²+2as.</p>'),
 S('Newton’s laws','<p>Newton’s first law describes inertia, the second gives F=ma, and the third states that interacting bodies exert equal and opposite forces on each other. Free-body diagrams help isolate the body and identify the forces used in F=ma.</p>'),
 S('Work, energy and momentum','<p>Work by a constant force is W=Fs cosθ. Kinetic energy is ½mv² and momentum is p=mv. The work-energy principle links net work with change in kinetic energy; conservation laws simplify many engineering motion problems.</p>')
 ],['★ Derive the three constant-acceleration equations.','★ Apply Newton’s second law to a free-body diagram.','★ Differentiate work, energy and momentum.']);

 /* DRAWING */
 add('Basic Elements of Drawing','Engineering drawing communicates shape, size and manufacturing information using standard instruments, conventions and dimensioning.',[
 S('Drawing instruments and standards','<p>Typical instruments include drawing board, T-square, set squares, compass, divider, scale and pencils of suitable grades. Standard line types, lettering, dimensioning and symbols make drawings readable and unambiguous.</p>'),
 S('Geometrical construction','<p>Construction methods are used for polygons, tangency, bisectors, arcs and engineering curves. Accuracy depends on correct instrument use, construction sequence and light preliminary lines.</p>'),
 S('Scales and dimensioning','<p>A scale represents an object at a chosen ratio. Dimensioning communicates actual size and should use clear extension lines, dimension lines, arrows and readable values without duplication or ambiguity.</p>')
 ],['★ List common drawing instruments and their uses.','★ Explain standard line conventions.','★ Explain principles of dimensioning.']);
 add('Orthographic Projections','Orthographic projection represents a three-dimensional object using related two-dimensional views.',[
 S('Projection principle','<p>In orthographic projection, projectors are perpendicular to the reference plane. Front, top and side views reveal different dimensions and are arranged according to the selected projection convention.</p>'),
 S('Reading views','<p>Corresponding points in adjacent views must align. Hidden edges are shown using appropriate dashed lines and visible edges using continuous lines. Correct projection requires consistent scale and orientation.</p>'),
 S('Engineering use','<p>Orthographic drawings are used for manufacturing and inspection because separate views communicate shape and dimensions more precisely than a perspective sketch.</p>')
 ],['★ Define orthographic projection.','★ Explain relation between front, top and side views.']);
 add('Isometric Projection','Isometric drawing gives a pictorial representation in which the three principal axes are equally inclined to the plane of projection.',[
 S('Axes and scale','<p>Isometric axes are separated by 120°. Horizontal edges are represented along two inclined axes while vertical edges remain vertical. In true isometric projection, dimensions are reduced by the isometric scale; in isometric drawing, true lengths may be used for a visual representation.</p>'),
 S('Circles and curves','<p>A circle on an isometric plane appears as an ellipse. The ellipse must be constructed consistently with the enclosing rhombus or an appropriate standard method.</p>'),
 S('From orthographic to isometric','<p>Start with the overall bounding box, establish isometric axes, transfer principal dimensions, locate features and then add curves and visible edges. Construction lines are removed or lightened in the final drawing.</p>')
 ],['★ State the isometric axes relationship.','★ Explain why a circle appears as an ellipse.']);
 add('Free Hand Sketches of Engineering Elements','Free-hand sketching develops rapid visual communication of machine and engineering components.',[
 S('Sketching method','<p>Begin with centre lines and overall proportions, then add major forms, secondary features and finally visible/hidden details. Light construction lines help maintain symmetry and proportion.</p>'),
 S('Common elements','<p>Typical sketches include bolts, nuts, washers, keys, shafts, bearings, pulleys and simple machine parts. Standard conventions should be retained even when the drawing is free-hand.</p>'),
 S('Orthographic and pictorial sketches','<p>A component may be sketched in orthographic views for dimensions or in an isometric view for quick visualization. The same geometry must remain consistent across views.</p>')
 ],['★ Explain the sequence of a free-hand engineering sketch.','★ Sketch and label a standard machine element.']);
 add('Basic Computer Aided Drafting','CAD uses computer tools to create accurate, editable engineering drawings.',[
 S('CAD interface and commands','<p>Basic CAD work uses commands for line, circle, arc, trim, extend, offset, copy, move, mirror and dimensioning. Object snaps improve geometric accuracy by locking the cursor to endpoints, midpoints, centres and intersections.</p>'),
 S('Layers and properties','<p>Layers organize geometry by purpose such as object, centre, hidden and dimension information. Colour, line type and line weight are controlled through object/layer properties while the final plot should follow drawing standards.</p>'),
 S('Blocks and arrays','<p>Blocks group repeated geometry into reusable objects. Rectangular and polar arrays create controlled repetitions. These tools reduce repetitive work and preserve consistency.</p>')
 ],['★ Explain object snaps and layers.','★ Differentiate block and array.','★ List essential 2D CAD commands.']);
 add('Advanced Computer Aided Drafting','Advanced CAD practice combines efficient editing, dimensioning, templates and 3D/isometric workflows.',[
 S('Precision workflow','<p>Use coordinates, object snaps, polar tracking and construction geometry to create accurate models. Templates can store units, layers, dimension styles and title-block settings.</p>'),
 S('Dimensioning and annotation','<p>Dimensions should communicate size and location without clutter. Standard dimension styles control arrowheads, text height, precision and spacing.</p>'),
 S('3D and practical workflow','<p>Where supported, CAD tools can generate isometric or 3D forms from basic profiles and solids. A disciplined workflow is to create geometry, organize layers, verify dimensions, check views and then plot/export.</p>')
 ],['★ Explain a professional CAD workflow.','★ Why are templates and dimension styles useful?']);

 /* WORKSHOP */
 add('Electrical tools and measurements','Workshop measurement begins with selecting the correct instrument, range and connection method.',[
 S('Tools and instruments','<p>Common tools include wire stripper, cutter, pliers, screwdriver and tester. Measuring instruments include ammeter, voltmeter, wattmeter and multimeter. Selection depends on the quantity, expected range and circuit condition.</p>'),
 S('Safe measurement','<p>An ammeter is connected in series and a voltmeter in parallel. Resistance should normally be measured on an isolated/de-energized component. Start with a safe range, verify leads and observe polarity where required.</p>'),
 S('Practical accuracy','<p>Instrument range, resolution, loading effect and contact quality affect measurements. Record units and significant digits appropriate to the instrument.</p>')
 ],['★ Compare ammeter and voltmeter connection.','★ List precautions before using a multimeter.']);
 add('Electronic components','Component identification is essential before assembly, testing and troubleshooting.',[
 S('Passive components','<p>Resistors oppose current and dissipate power; capacitors store energy in an electric field; inductors store energy in a magnetic field. Their values, tolerances and ratings must be identified before use.</p>'),
 S('Active components','<p>Diodes conduct preferentially in one direction. Transistors have three terminals and can operate as switches or amplifying devices. LEDs convert electrical energy into light under forward bias.</p>'),
 S('Identification and ratings','<p>Check resistor colour/marking, capacitor code and polarity where applicable, diode polarity, transistor package/terminal information and maximum voltage/current/power ratings. Never assume two physically similar parts have identical electrical ratings.</p>')
 ],['★ Identify resistor, capacitor, diode and transistor terminals.','★ Explain why component ratings matter.']);
 add('Soldering and PCB practices','Soldering creates a mechanically secure and electrically conductive joint between component leads and PCB pads.',[
 S('Soldering process','<p>Prepare clean surfaces, heat the joint adequately, feed solder to the heated joint rather than only the iron tip, then remove solder and iron in a controlled sequence. A good joint is smooth, properly wetted and mechanically stable.</p>'),
 S('PCB mounting','<p>Identify component orientation, insert components correctly, avoid excessive lead length and prevent solder bridges. After soldering, inspect for dry joints, shorts, lifted pads and incorrect polarity.</p>'),
 S('Testing','<p>Continuity testing checks whether a low-resistance path exists. Resistance checks help detect open or short components when the circuit is unpowered. Multimeter transistor tests can help identify terminals when used according to the meter procedure.</p>')
 ],['★ List the steps of a reliable solder joint.','★ What defects can occur in PCB soldering?','★ Explain continuity testing.']);
 add('Basic testing with multimeter','A digital multimeter combines several electrical measurements in one instrument.',[
 S('Voltage and current measurement','<p>Voltage is measured across a component; current requires the meter to be inserted into the current path. Incorrectly placing the meter in current mode directly across a voltage source can create a near-short condition, so range and lead position must be checked first.</p>'),
 S('Resistance and continuity','<p>Resistance measurement uses the meter’s internal test source and therefore should normally be performed with the circuit de-energized. Continuity mode provides a quick indication of a low-resistance path.</p>'),
 S('Diode and transistor checks','<p>Diode-test mode applies a small test voltage and reports forward voltage behaviour. Semiconductor tests are diagnostic rather than a complete functional test of a powered circuit.</p>')
 ],['★ Explain correct meter connection for V, I and R.','★ Why should resistance normally be measured with power off?']);
 add('Safety and first aid','Electrical and workshop safety requires hazard identification, isolation, protective equipment and correct emergency response.',[
 S('Electrical safety','<p>Use insulated tools, proper earthing, suitable protective equipment and safe working procedures. De-energize and isolate equipment before maintenance whenever possible, and verify the absence of dangerous voltage with an appropriate tester.</p>'),
 S('Fire classes and extinguisher choice','<p>Different fires require suitable extinguishing agents. Electrical equipment should be handled with an extinguisher appropriate for energized electrical hazards; water should not be used indiscriminately on energized electrical equipment.</p>'),
 S('First aid and housekeeping','<p>For an electrical incident, first make the situation safe by isolating the source before touching the affected person, then activate appropriate emergency assistance and follow trained first-aid procedures. Good housekeeping prevents trips, shorts, spills and blocked emergency access.</p>')
 ],['★ Explain electrical workshop safety.','★ Why must the electrical source be isolated before assisting a casualty?','★ List good housekeeping practices.']);

 /* ENVIRONMENT */
 add('Environment and ecosystems','An ecosystem is an interacting system of living organisms and their physical environment.',[
 S('Components','<p>Biotic components include producers, consumers and decomposers. Abiotic components include air, water, soil, temperature, light and nutrients. Energy generally flows through trophic levels while matter cycles through the ecosystem.</p>'),
 S('Food chains and webs','<p>A food chain shows a simple feeding sequence; a food web connects multiple chains and better represents real ecosystems. Decomposers return nutrients to the environment and maintain material cycling.</p>'),
 S('Engineering connection','<p>Engineering decisions affect land, water, energy and material flows. Environmental assessment helps identify impacts and mitigation measures before projects are implemented.</p>')
 ],['★ Define ecosystem and its components.','★ Differentiate food chain and food web.']);
 add('Natural resources','Natural resources include water, soil, minerals, forests and energy resources that support society and industry.',[
 S('Renewable and non-renewable','<p>Solar, wind and sustainably managed biomass are renewable on human timescales, while many fossil fuels and mineral deposits are finite. Classification depends on regeneration rate and resource use.</p>'),
 S('Energy resources','<p>Solar, wind, hydro, biomass, hydrogen, ocean and tidal energy can reduce dependence on finite fuels when their technical, economic and environmental conditions are suitable. Each source has advantages and limitations.</p>'),
 S('Conservation','<p>Conservation reduces waste and protects future availability through efficient use, reuse, recycling, rainwater harvesting, energy efficiency and responsible resource planning.</p>')
 ],['★ Compare renewable and non-renewable resources.','★ Explain resource conservation methods.']);
 add('Pollution and control','Pollution occurs when harmful substances or energy enter the environment at levels that cause undesirable effects.',[
 S('Air pollution','<p>Major pollutants include particulate matter, sulphur oxides, nitrogen oxides, carbon monoxide and selected volatile compounds. Control methods include source reduction, cleaner fuels, filtration, electrostatic precipitation and emission-control systems as appropriate.</p>'),
 S('Water and solid waste','<p>Water pollution can arise from sewage, industrial effluent, nutrients, chemicals and pathogens. Treatment may involve screening, sedimentation, biological processes and advanced treatment. Solid waste management follows segregation, recovery, recycling, treatment and safe disposal principles.</p>'),
 S('Noise and engineering responsibility','<p>Noise pollution is controlled by reducing source intensity, increasing distance, using barriers/enclosures and applying suitable maintenance. Engineers should consider pollution prevention at the design stage rather than relying only on end-of-pipe control.</p>')
 ],['★ List major air pollutants and controls.','★ Explain stages of water/waste management.']);
 add('Sustainable development','Sustainable development balances present needs with long-term environmental, social and economic considerations.',[
 S('Core idea','<p>Sustainability requires efficient resource use, pollution prevention, resilience and consideration of future generations. The three broad dimensions are environmental protection, social well-being and economic viability.</p>'),
 S('5R and circular thinking','<p>Refuse, Reduce, Reuse, Repair/Recover and Recycle are commonly used waste-minimization ideas. Circular approaches keep materials and products useful for longer and reduce extraction of virgin resources.</p>'),
 S('Green engineering','<p>Engineers can reduce impact through energy-efficient systems, durable materials, renewable energy integration, water conservation, life-cycle thinking and safer process design.</p>')
 ],['★ Explain sustainable development.','★ Explain the 5R concept with engineering examples.']);
 add('Climate change and environmental responsibility','Climate change is driven by changes in the Earth’s energy balance, strongly influenced by human greenhouse-gas emissions.',[
 S('Drivers and impacts','<p>Major human drivers include fossil-fuel combustion, land-use change, industrial processes and some agricultural activities. Impacts can include temperature shifts, changing rainfall patterns, sea-level rise and risks to ecosystems, infrastructure and health.</p>'),
 S('SDGs and action','<p>The Sustainable Development Goals provide a global framework addressing poverty, health, education, clean water, clean energy, responsible consumption, climate action and other interconnected objectives.</p>'),
 S('Low-carbon engineering','<p>Engineering responses include energy efficiency, renewable integration, electrification where appropriate, low-carbon materials, waste reduction, resilient infrastructure and measurement of environmental performance.</p>')
 ],['★ Explain major causes and impacts of climate change.','★ Relate engineering decisions to SDGs.']);

 window.PX_LESSONS=L;
})();
