/* PrinceXmahto Study — researched, syllabus-aligned Semester-I lesson layer.
   This layer adds topic-specific teaching for topics that previously had little or no dedicated content.
   It does not manufacture repeated filler chapters.
*/
(function(){
 const L=window.PX_LESSONS||(window.PX_LESSONS={});
 const E=s=>String(s).replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[m]));
 const N=(overview,sections,questions=[],revision='')=>({overview,sections,questions,revision});

 L['Differential Calculus']=N(
 'Differential calculus studies how a quantity changes when another quantity changes. The chapter develops the ideas of function, limit, continuity and derivative and then builds the standard differentiation rules used in engineering mathematics.',
 [
 ['1. Function, Domain and Range','<p>A <b>function</b> assigns exactly one output to each allowed input. If y=f(x), x is the independent variable and y is the dependent variable.</p><p>The <b>domain</b> is the set of permissible input values. The <b>range</b> is the set of values actually produced by the function.</p><div class="formula">f: A → B means every x∈A has exactly one image f(x)∈B.</div><p><b>Example:</b> For f(x)=1/(x−2), x=2 is excluded because division by zero is undefined. Hence the domain is all real x except 2.</p>'],
 ['2. Limits','<p>The limit of f(x) as x approaches a is the value approached by f(x) when x is made arbitrarily close to a. The function need not actually be defined at x=a for the limit to exist.</p><div class="formula">lim(x→a) f(x)=L</div><p>For direct substitution, first substitute x=a. If a finite value is obtained, that is often the limit. If an indeterminate form such as 0/0 occurs, algebraic simplification or factorisation is required.</p><p><b>Example:</b> lim(x→2)(x²−4)/(x−2). Factor x²−4=(x−2)(x+2). Cancel the common factor and obtain lim(x→2)(x+2)=4.</p>'],
 ['3. Continuity','<p>A function is continuous at x=a when its value exists, its limit exists, and the two are equal.</p><div class="formula">f is continuous at a if<br>lim(x→a)f(x)=f(a)</div><p>Graphically, a continuous curve can be followed through the point without a break, hole or jump. Polynomial functions are continuous for all real x; rational functions are continuous wherever their denominator is non-zero.</p>'],
 ['4. Differentiation by First Principle','<p>The derivative measures the instantaneous rate of change. It is defined from the limiting value of the average rate of change.</p><div class="formula">f′(x)=lim(h→0)[f(x+h)−f(x)]/h</div><p>For f(x)=x²: f(x+h)=(x+h)²=x²+2xh+h². Therefore the numerator is 2xh+h². Divide by h to get 2x+h. Taking h→0 gives <b>f′(x)=2x</b>.</p>'],
 ['5. Standard Differentiation Rules','<div class="formula">d(c)/dx=0<br>d(xⁿ)/dx=nxⁿ⁻¹<br>d(sin x)/dx=cos x<br>d(cos x)/dx=−sin x<br>d(eˣ)/dx=eˣ<br>d(ln x)/dx=1/x</div><p>For sums and differences, differentiate each term separately. For products and quotients use the corresponding rules rather than differentiating the two parts independently and multiplying or dividing the derivatives.</p>'],
 ['6. Product, Quotient and Chain Rules','<div class="formula">Product: (uv)′=u′v+uv′<br>Quotient: (u/v)′=(vu′−uv′)/v²<br>Chain: d[f(g(x))]/dx=f′(g(x))g′(x)</div><p><b>Chain-rule example:</b> y=(3x²+1)^5. Let u=3x²+1. Then dy/du=5u⁴ and du/dx=6x. Therefore dy/dx=30x(3x²+1)^4.</p>'],
 ['7. Logarithmic, Implicit and Parametric Differentiation','<p><b>Logarithmic differentiation</b> is useful when the variable occurs in both the base and exponent or when many factors are multiplied. Take logarithms first, differentiate, then solve for dy/dx.</p><p><b>Implicit differentiation:</b> when x and y are mixed in one equation, differentiate both sides with respect to x and remember that dy/dx appears whenever y is differentiated.</p><p><b>Parametric differentiation:</b> if x=f(t) and y=g(t), then <span class="formula-inline">dy/dx=(dy/dt)/(dx/dt)</span>, provided dx/dt≠0.</p>']
 ],
 ['★ Define function, domain and range.','★ Evaluate a limit involving 0/0 by factorisation.','★ Derive the derivative of x² from first principle.','★ State and apply product, quotient and chain rules.','Differentiate an implicit equation and a parametric equation.'],
 'Function → limit → continuity → derivative → differentiation rules. Always identify the rule before beginning a derivative.'
 );

 L['Application of Differential Calculus']=N(
 'This unit uses derivatives to interpret change and solve engineering problems involving increasing/decreasing functions, stationary points, maxima, minima and radius of curvature.',
 [
 ['1. Geometrical Meaning of Derivative','<p>The derivative at a point gives the slope of the tangent to the curve. If y=f(x), then <b>dy/dx</b> is the slope of the tangent at the corresponding point.</p><div class="formula">Slope of tangent = dy/dx<br>Slope of normal = −1/(dy/dx), when dy/dx≠0</div><p>The derivative therefore connects algebraic differentiation with the geometry of a curve.</p>'],
 ['2. Increasing and Decreasing Functions','<p>If f′(x)>0 throughout an interval, f(x) is increasing there. If f′(x)<0, the function is decreasing.</p><p>To analyse a function: differentiate it, find critical points from f′(x)=0 or undefined points, divide the number line into intervals, and test the sign of f′ in each interval.</p>'],
 ['3. Stationary Points','<p>A stationary point occurs where the first derivative is zero.</p><div class="formula">f′(x)=0 → stationary point</div><p>A stationary point may be a maximum, minimum or stationary point of inflection. Therefore f′(x)=0 alone does not prove a maximum or minimum.</p>'],
 ['4. Maxima and Minima','<p>For a local maximum, the function changes from increasing to decreasing. For a local minimum, it changes from decreasing to increasing.</p><p>The second derivative test is commonly used: if f′(a)=0 and f″(a)<0, x=a gives a local maximum; if f″(a)>0, it gives a local minimum.</p><p><b>Example:</b> f(x)=x²−4x+3. f′=2x−4=0 gives x=2. Since f″=2>0, x=2 is a minimum and f(2)=−1.</p>'],
 ['5. Radius of Curvature','<p>Curvature describes how rapidly the direction of a curve changes. For y=f(x), the radius of curvature is related to the first and second derivatives.</p><div class="formula">ρ = [1+(dy/dx)²]^(3/2) / |d²y/dx²|</div><p>A small radius means the curve bends sharply; a large radius means the curve is flatter.</p>']
 ],
 ['★ Explain the geometrical meaning of derivative.','★ Determine intervals of increase and decrease.','★ Find and classify stationary points.','★ Solve a maxima/minima problem using the second derivative test.','State the radius-of-curvature formula.'],
 'Derivative → slope → increasing/decreasing → stationary point → maxima/minima → curvature.'
 );

 L['Co-ordinate Geometry']=N(
 'Coordinate geometry represents geometric objects using numbers and algebra. The essential tools are distance, section formula, slope, equations of lines and the standard equation of a circle.',
 [
 ['1. Cartesian Coordinate System','<p>The Cartesian plane consists of two perpendicular axes: the x-axis and y-axis. Their intersection is the origin O(0,0). A point is represented as (x,y).</p><p>The four quadrants are identified by the signs of x and y: (+,+), (−,+), (−,−), (+,−).</p>'],
 ['2. Distance and Section Formula','<div class="formula">Distance between (x₁,y₁) and (x₂,y₂):<br>d=√[(x₂−x₁)²+(y₂−y₁)²]</div><p>If a point P divides the line joining A(x₁,y₁) and B(x₂,y₂) internally in the ratio m:n, then</p><div class="formula">P=((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))</div><p>Use the same ratio order consistently; many errors occur from interchanging m and n.</p>'],
 ['3. Slope and Straight Line','<div class="formula">m=(y₂−y₁)/(x₂−x₁)<br>Point-slope form: y−y₁=m(x−x₁)<br>Slope-intercept: y=mx+c</div><p>Parallel lines have equal slopes. For non-vertical perpendicular lines, m₁m₂=−1.</p>'],
 ['4. Circle','<p>A circle is the locus of points at a constant distance from a fixed centre. If the centre is (h,k) and radius is r:</p><div class="formula">(x−h)²+(y−k)²=r²</div><p>For centre at origin, x²+y²=r². Expanding the standard form gives a general quadratic equation from which the centre and radius can be identified.</p>']
 ],
 ['★ Derive the distance formula.','★ Find the point dividing two coordinates in a given ratio.','★ Find the equation of a straight line through a point with given slope.','★ Test whether two lines are parallel or perpendicular.','Find the centre and radius of a circle from its equation.'],
 'Coordinate pair → distance/section → slope → line → circle.'
 );

 L['Probability and Statistics']=N(
 'Probability measures uncertainty, while statistics organises and interprets data. The unit connects sample spaces and events with numerical summaries such as mean, median and mode.',
 [
 ['1. Basic Probability Language','<p>A <b>random experiment</b> has an outcome that cannot be predicted with certainty before the experiment. The <b>sample space</b> is the set of all possible outcomes. An <b>event</b> is a subset of the sample space.</p><div class="formula">0≤P(A)≤1<br>P(S)=1<br>P(A′)=1−P(A)</div>'],
 ['2. Addition and Multiplication Laws','<div class="formula">P(A∪B)=P(A)+P(B)−P(A∩B)<br>If A and B are independent: P(A∩B)=P(A)P(B)</div><p>For mutually exclusive events, A∩B is empty, so P(A∪B)=P(A)+P(B). Independence is different from mutual exclusivity and should not be confused.</p>'],
 ['3. Conditional Probability','<div class="formula">P(A|B)=P(A∩B)/P(B), P(B)≠0</div><p>Conditional probability means the probability of A after information about B is known. In engineering and data applications, this idea is important because new information changes the relevant sample space.</p>'],
 ['4. Mean, Median and Mode','<p>For ungrouped observations x₁,x₂,...,xₙ:</p><div class="formula">Arithmetic mean = Σx/n</div><p>The <b>median</b> is the middle observation after arranging data. The <b>mode</b> is the most frequently occurring observation. Mean uses every value, median is less affected by extreme values, and mode identifies the most common value.</p>'],
 ['5. Range and Interpretation','<div class="formula">Range = maximum value − minimum value</div><p>Statistics is not only calculation. The result must be interpreted in context: units, sample size, spread and unusual observations can change the meaning of a numerical summary.</p>']
 ],
 ['★ Define sample space and event.','★ State the complement rule.','★ Solve a probability problem using the addition law.','★ Explain conditional probability.','Calculate mean, median, mode and range for a small dataset.'],
 'Probability describes uncertainty; statistics describes observed data. Keep the definitions of event, independence and mutually exclusive events distinct.'
 );

 L['Simple Harmonic and Wave Motion']=N(
 'Oscillatory motion repeats about an equilibrium position. Simple harmonic motion is a special oscillation in which restoring acceleration is proportional to displacement and directed toward equilibrium.',
 [
 ['1. Periodic and Oscillatory Motion','<p><b>Periodic motion</b> repeats after a definite time interval. <b>Oscillatory motion</b> is a repeated to-and-fro motion about a mean position. Examples include a mass-spring system and small-angle pendulum motion.</p><div class="formula">Time period T = time for one complete oscillation<br>Frequency f=1/T</div>'],
 ['2. Condition for SHM','<p>In SHM the restoring acceleration is directly proportional to displacement and opposite in direction.</p><div class="formula">a=−ω²x</div><p>The negative sign indicates that acceleration points toward the mean position.</p>'],
 ['3. Displacement, Velocity and Acceleration','<div class="formula">x=A sin(ωt+φ)<br>v=ωA cos(ωt+φ)<br>a=−ω²x</div><p>A is amplitude, ω is angular frequency and φ is phase constant. Maximum speed occurs at the mean position, while maximum magnitude of acceleration occurs at extreme displacement.</p>'],
 ['4. Wave Motion','<p>A wave transfers energy from one region to another without requiring bulk transport of the medium. Mechanical waves require a material medium, whereas electromagnetic waves can propagate through vacuum.</p><div class="formula">v=fλ<br>ω=2πf</div><p>Transverse waves have particle vibration perpendicular to propagation direction; longitudinal waves have vibration parallel to it.</p>'],
 ['5. Phase and Superposition','<p>Phase describes the state of oscillation at a particular instant. The phase difference between two waves determines how their disturbances combine. By the principle of superposition, the resultant displacement is the algebraic sum of individual displacements.</p>']
 ],
 ['★ State the condition for SHM.','★ Derive the relation f=1/T.','★ Explain amplitude, phase and angular frequency.','★ Differentiate transverse and longitudinal waves.','Solve a numerical using v=fλ.'],
 'SHM: a=−ω²x. Waves: v=fλ. Remember the difference between oscillation of particles and transfer of wave energy.'
 );

 L['Semiconductor Physics']=N(
 'Semiconductor physics explains materials whose electrical conductivity lies between conductors and insulators and changes strongly with temperature, impurities and applied voltage.',
 [
 ['1. Energy Bands','<p>In a solid, closely spaced atomic energy levels form bands. The <b>valence band</b> contains electrons involved in bonding, while the <b>conduction band</b> contains electrons that can contribute to conduction. The forbidden energy gap separates them.</p><p>Conductors have overlapping or very small effective gaps, semiconductors have a moderate band gap, and insulators have a large gap.</p>'],
 ['2. Intrinsic and Extrinsic Semiconductors','<p>An <b>intrinsic semiconductor</b> is chemically pure. Its electrons and holes are thermally generated in pairs. An <b>extrinsic semiconductor</b> is formed by controlled doping.</p><p>Donor impurities produce <b>n-type</b> material where electrons are majority carriers. Acceptor impurities produce <b>p-type</b> material where holes are majority carriers.</p>'],
 ['3. Drift, Diffusion and Conductivity','<p><b>Drift</b> occurs because an electric field causes charge carriers to acquire a directed average velocity. <b>Diffusion</b> occurs because carriers move from regions of high concentration toward regions of low concentration.</p><p>Mobility describes how readily carriers move under an electric field. Conductivity depends on carrier concentration and mobility.</p>'],
 ['4. PN Junction and Depletion Region','<p>When p-type and n-type materials are joined, carriers diffuse across the junction and recombine. This leaves behind fixed ions and creates a <b>depletion region</b> with an internal electric field and barrier potential.</p><p>Forward bias reduces the effective barrier and permits significant current; reverse bias widens the depletion region and produces only a small reverse current until breakdown conditions are reached.</p>'],
 ['5. Rectifiers and Solar Cells','<p>A diode permits current much more readily in one direction than the other, making it useful for rectification. A half-wave rectifier uses one half-cycle; a full-wave rectifier uses both half-cycles through an appropriate circuit.</p><p>A solar cell converts light energy into electrical energy using the photovoltaic effect at a semiconductor junction.</p>']
 ],
 ['★ Compare conductor, semiconductor and insulator using band structure.','★ Differentiate intrinsic and extrinsic semiconductors.','★ Explain p-type and n-type semiconductors.','★ Explain depletion region and forward/reverse bias.','Draw and explain a basic rectifier waveform.'],
 'Band gap → intrinsic material → doping → PN junction → diode/rectifier → semiconductor applications.'
 );

 L['Modern Physics']=N(
 'Modern physics introduces phenomena that cannot be fully explained by classical models, including the photoelectric effect, lasers and optical fibres.',
 [
 ['1. Photoelectric Effect','<p>The photoelectric effect is the emission of electrons from a material surface when incident electromagnetic radiation has sufficient frequency.</p><div class="formula">Kmax = hν − φ<br>eV₀ = Kmax<br>ν₀=φ/h</div><p>φ is the work function, ν₀ is threshold frequency and V₀ is stopping potential. Increasing intensity mainly changes the number of emitted electrons when the frequency is already above threshold; frequency determines the maximum electron energy.</p>'],
 ['2. Laser Principle','<p>LASER means Light Amplification by Stimulated Emission of Radiation. Laser operation involves stimulated emission, population inversion and pumping.</p><p>Ordinary spontaneous emission is random. In stimulated emission, an incoming photon causes an excited atom to emit another photon with matching frequency, phase and direction under idealised conditions.</p>'],
 ['3. He-Ne and Semiconductor Lasers','<p>A He-Ne laser uses a gas mixture and electrical excitation to establish the required population inversion. Semiconductor diode lasers use semiconductor junctions and are compact, efficient sources of coherent light.</p><p>Applications include optical communication, measurement, scanning, sensing, medical equipment and data storage.</p>'],
 ['4. Optical Fibre','<p>An optical fibre guides light mainly by <b>total internal reflection</b>. It consists of a core surrounded by cladding with lower refractive index.</p><div class="formula">Numerical aperture (air): NA=√(n₁²−n₂²)</div><p>The acceptance angle describes the maximum launch angle for guided propagation under the simplified fibre model.</p>']
 ],
 ['★ Explain threshold frequency and work function.','★ State Einstein’s photoelectric equation.','★ Explain spontaneous and stimulated emission.','★ What is population inversion?','★ Explain total internal reflection and optical fibre.'],
 'Photoelectric effect explains photon energy transfer; laser physics explains stimulated emission; fibre optics uses guided light.'
 );

 L['Electrostatics, Electromagnetism and Current Electricity']=N(
 'This unit develops the engineering fundamentals of electric charge, electric field, potential, capacitance, current and magnetic effects.',
 [
 ['1. Charge and Coulomb’s Law','<p>Electric charge exists as positive or negative. Like charges repel and unlike charges attract. Coulomb’s law gives the electrostatic force between point charges.</p><div class="formula">F=(1/4πε₀)|q₁q₂|/r²</div><p>The force acts along the line joining the charges. In a medium, the permittivity changes the magnitude.</p>'],
 ['2. Electric Field and Potential','<div class="formula">E=F/q<br>For a point charge: E=(1/4πε₀)q/r²<br>V=(1/4πε₀)q/r</div><p>Electric field is a vector; electric potential is a scalar. Electric field lines indicate field direction and are drawn from positive toward negative charge in the conventional representation.</p>'],
 ['3. Gauss Law and Capacitance','<div class="formula">∮E·dA = Qenc/ε₀</div><p>Gauss’s law is especially useful for highly symmetric charge distributions. A capacitor stores electrical energy by separating charge.</p><div class="formula">C=Q/V<br>Parallel plate: C=εA/d<br>Energy = 1/2 CV²</div>'],
 ['4. Current and Resistance','<div class="formula">I=Q/t<br>V=IR<br>P=VI=I²R=V²/R</div><p>Resistance opposes current. For a uniform conductor, R depends on resistivity, length and cross-sectional area.</p><div class="formula">R=ρL/A</div>'],
 ['5. Electromagnetic Induction','<p>A changing magnetic flux through a circuit produces an induced emf. Faraday’s law relates induced emf to the rate of change of flux linkage; Lenz’s law gives its direction.</p><div class="formula">e=−d(NΦ)/dt</div><p>The negative sign represents opposition to the change that produces the induced emf.</p>']
 ],
 ['★ State Coulomb’s law.','★ Differentiate electric field and potential.','★ State Gauss law and one application.','★ Derive the electrical power relations.','★ State Faraday’s and Lenz’s laws.'],
 'Charge → field → potential → current → magnetic effect → electromagnetic induction.'
 );

 L['Fundamentals of D.C. and A.C. Circuits']=N(
 'DC and AC circuits are described using circuit elements, Kirchhoff laws and waveform quantities such as RMS value, average value and power factor.',
 [
 ['1. DC and AC','<p><b>DC</b> has a constant direction of current in an ideal steady source. <b>AC</b> changes magnitude and direction periodically.</p><div class="formula">v(t)=Vₘ sin(ωt+φ)</div><p>Here Vₘ is peak value, ω is angular frequency and φ is phase angle.</p>'],
 ['2. Circuit Elements and Topology','<p>Active elements can supply energy under the circuit model; passive elements absorb or store energy. A <b>node</b> is a connection point, a <b>branch</b> is a circuit element/path between nodes, and a <b>loop</b> is a closed path.</p>'],
 ['3. Kirchhoff Laws','<div class="formula">KCL: ΣI entering a node = ΣI leaving the node<br>KVL: algebraic sum of voltages around a closed loop = 0</div><p>KCL follows from charge conservation and KVL from energy conservation in the lumped-circuit model.</p>'],
 ['4. AC Quantities','<div class="formula">T=1/f<br>ω=2πf<br>Vᵣₘₛ=Vₘ/√2 for a sine wave<br>Vavg over half cycle=2Vₘ/π</div><p>Form factor and peak factor compare waveform measures.</p><div class="formula">Form factor = RMS/average rectified value<br>Peak factor = peak/RMS</div>'],
 ['5. Power Factor and Phasors','<p>In an AC circuit, voltage and current may have a phase difference φ. For sinusoidal steady state, power factor is cosφ.</p><div class="formula">P=VᵣₘₛIᵣₘₛcosφ</div><p>A phasor represents the magnitude and phase of a sinusoidal quantity using a rotating-vector convention.</p>']
 ],
 ['★ State KCL and KVL with physical meaning.','★ Define node, branch, loop and mesh.','★ Calculate RMS value of a sinusoidal voltage.','★ Define form factor and peak factor.','★ Explain power factor.'],
 'DC: steady direction. AC: periodic variation. KCL → charge conservation; KVL → energy conservation.'
 );

 L['Basic Electrical Parameters and Concepts']=N(
 'This lesson establishes the electrical quantities and passive components needed before circuit analysis: charge, current, voltage, resistance, capacitance, inductance, power and energy.',
 [
 ['1. Charge, Current and Voltage','<div class="formula">Charge q → coulomb (C)<br>Current I=dq/dt → ampere (A)<br>Voltage V=W/q → volt (V)</div><p>Current is the rate of flow of charge. Voltage represents energy transferred per unit charge between two points.</p>'],
 ['2. Resistance and Ohm’s Law','<p>Resistance describes opposition to current. For an ohmic element at constant physical conditions:</p><div class="formula">V=IR<br>R=ρL/A</div><p>Temperature can change resistance, especially in metallic conductors. Series resistors add directly; reciprocal resistances add for parallel combinations.</p>'],
 ['3. Power and Energy','<div class="formula">P=VI=I²R=V²/R<br>Electrical energy = P×t</div><p>Power is the rate of energy transfer. When t is measured in hours and P in kilowatts, energy is obtained in kWh.</p>'],
 ['4. Capacitor','<p>A capacitor stores energy in an electric field. Capacitance is the charge stored per unit potential difference.</p><div class="formula">C=Q/V<br>Energy=1/2CV²<br>Xc=1/(ωC)</div><p>In a series combination the reciprocal capacitances add; in parallel, capacitances add.</p>'],
 ['5. Inductor','<p>An inductor stores energy in a magnetic field and opposes changes in current.</p><div class="formula">v=L(di/dt)<br>Energy=1/2LI²<br>XL=ωL</div><p>Inductance is measured in henry (H). Inductors are important in filtering, energy storage and electromagnetic systems.</p>']
 ],
 ['★ Define current, voltage and resistance.','★ State Ohm’s law and its limitation.','★ Derive electrical power equations.','★ Compare capacitor and inductor.','Calculate equivalent resistance/capacitance for series and parallel combinations.'],
 'q→I, W/q→V, V/I→R. Capacitor stores electric-field energy; inductor stores magnetic-field energy.'
 );

 L['Basic Electronic Components']=N(
 'Electronic circuits use passive and active components to control voltage, current, energy and signals. This lesson covers semiconductor basics, diodes, transistors and common components.',
 [
 ['1. Semiconductor Materials','<p>Common semiconductor materials include silicon and germanium. Their conductivity can be controlled through temperature and doping, making them useful in electronic devices.</p>'],
 ['2. Diode and PN Junction','<p>A PN junction forms a depletion region and built-in barrier. Forward bias reduces the barrier and allows substantial current after the characteristic knee region; reverse bias normally permits only small leakage current until breakdown.</p><div class="formula">Forward bias: P to +, N to −<br>Reverse bias: P to −, N to +</div>'],
 ['3. BJT: NPN and PNP','<p>A bipolar junction transistor has emitter, base and collector regions. In a transistor used as an amplifier, a small base current controls a larger collector current within the active region.</p><div class="formula">For common-emitter current gain: β=I_C/I_B</div><p>NPN and PNP devices have opposite carrier polarities and conventional current arrangements.</p>'],
 ['4. Resistor, Capacitor and Inductor','<p>A resistor dissipates energy, a capacitor stores electric-field energy and an inductor stores magnetic-field energy. Their symbols and ratings must be identified before connecting them in a practical circuit.</p>'],
 ['5. LED and Practical Identification','<p>An LED is a semiconductor diode that emits light when forward biased. Components are identified using package markings, colour bands, polarity marks, printed codes or datasheets. Correct polarity is essential for diodes and LEDs.</p>']
 ],
 ['★ Explain PN junction and depletion region.','★ Draw the symbols of diode, LED, resistor, capacitor and inductor.','★ Differentiate NPN and PNP transistor.','★ Define transistor current gain.','Explain the practical identification of electronic components.'],
 'Component → symbol → polarity/terminals → electrical behaviour → rating → application.'
 );

 L['Overview of Digital Electronics']=N(
 'Digital electronics represents information using discrete logic levels. Boolean algebra and logic gates provide the foundation for digital circuits used in computers and control systems.',
 [
 ['1. Binary Number System','<p>Digital systems commonly use binary digits 0 and 1. Each position represents a power of two.</p><div class="formula">(1011)₂=1×2³+0×2²+1×2¹+1×2⁰=11₁₀</div><p>Decimal-to-binary conversion can be performed by repeated division by 2 and reading remainders upward.</p>'],
 ['2. Logic Gates','<p>The basic gates are AND, OR and NOT. NAND and NOR are universal gates because suitable combinations can implement the basic logical operations. XOR produces 1 when the inputs are different.</p><div class="formula">AND: Y=A·B<br>OR: Y=A+B<br>NOT: Y=A′<br>XOR: Y=A⊕B</div>'],
 ['3. Truth Tables','<p>A truth table lists every possible input combination and the corresponding output. For n binary inputs there are 2ⁿ combinations.</p><div class="formula">AND: 00→0, 01→0, 10→0, 11→1<br>OR: 00→0, 01→1, 10→1, 11→1</div>'],
 ['4. Boolean Algebra','<p>Boolean algebra provides rules for simplifying logic expressions. Important identities include A+0=A, A·1=A, A+A=A and A·A=A. De Morgan’s laws are especially important:</p><div class="formula">(A+B)′=A′B′<br>(AB)′=A′+B′</div>'],
 ['5. Combinational Logic Idea','<p>In a combinational circuit, output depends on the present input combination. Adders, multiplexers, decoders and encoders are common examples. The first step in solving such a problem is to translate the verbal condition into a truth table and Boolean expression.</p>']
 ],
 ['★ Convert a binary number to decimal.','★ Draw symbols and truth tables of basic gates.','★ State De Morgan’s laws.','★ Explain why NAND and NOR are universal gates.','Simplify a basic Boolean expression.'],
 'Binary representation → gates → truth table → Boolean expression → simplified digital circuit.'
 );

 L['Introduction to IT Systems and Digital Technologies']=N(
 'This lesson covers the digital tools an engineering student uses every day: computer hardware, operating systems, Internet services, cloud collaboration, networks and basic cybersecurity.',
 [
 ['1. Data, Information and Digital Systems','<p><b>Data</b> are raw facts or symbols. <b>Information</b> is processed or organised data that has meaning for a particular purpose. A digital system represents and processes information using discrete states, commonly binary digits.</p><p>Engineering uses digital systems for design, documentation, measurement, simulation, communication and automation.</p>'],
 ['2. Computer Hardware','<p>The <b>CPU</b> executes instructions and coordinates processing. Main memory such as RAM provides fast temporary working storage. Secondary storage such as SSDs retains data when power is removed. Input devices provide data to the computer and output devices present results.</p><div class="formula">Input → Processing (CPU + memory) → Output<br>                 ↕<br>              Storage</div>'],
 ['3. Operating Systems and Files','<p>An operating system manages hardware resources, provides a user interface, controls files and folders, and supports applications. Windows, Linux and mobile operating systems use different interfaces but perform these core management functions.</p><p>Good file organisation uses meaningful names, folders, predictable locations and backups. Avoid running unknown executable files downloaded from untrusted sources.</p>'],
 ['4. Internet and Search','<p>The Internet is a global network of interconnected networks. A web browser requests and displays web resources. Search engines index and rank pages to help users retrieve information.</p><p>Effective technical search uses precise terms, official documentation, file type filters where appropriate, and verification against reliable sources.</p>'],
 ['5. Cloud Collaboration','<p>Cloud storage keeps files on remote infrastructure accessible through a network. Collaboration tools can allow several users to work on a document while permissions control what each person can do.</p><div class="formula">Viewer → read<br>Commenter → read + comment<br>Editor → modify content</div>'],
 ['6. Cybersecurity Hygiene','<p>Basic protection includes strong unique passwords, multi-factor authentication where available, software updates, careful link handling, secure backups and avoiding unnecessary disclosure of personal information.</p><p>Phishing attempts often use urgency or misleading messages to obtain credentials. Verify the sender, domain and context before entering a password.</p>']
 ],
 ['★ Differentiate data and information.','★ Explain the functions of CPU, RAM and storage.','★ What is an operating system?','★ Differentiate Viewer, Commenter and Editor permissions.','★ List safe Internet practices.'],
 'Hardware processes information; the OS manages the computer; Internet connects systems; cloud enables remote storage/collaboration; cybersecurity protects systems and data.'
 );

 L['Fundamentals of Artificial Intelligence']=N(
 'Artificial Intelligence is the study and engineering of systems that perform tasks associated with capabilities such as perception, prediction, language processing and decision support. The unit introduces machine learning, neural networks and the AI development lifecycle.',
 [
 ['1. Human Intelligence and AI','<p>Human intelligence includes learning from experience, reasoning, perception, language and adaptation. AI systems implement specific computational procedures that can produce intelligent-looking behaviour within defined tasks.</p><p>AI should not automatically be treated as human-like understanding. A system may perform a task effectively while still depending on training data, objectives and programmed architecture.</p>'],
 ['2. Evolution of AI','<p>AI developed through several phases: symbolic reasoning and expert systems, statistical learning, large-scale machine learning, deep learning and current generative systems. Progress has depended on algorithms, data, computing power and improved model architectures.</p>'],
 ['3. Machine Learning Types','<p><b>Supervised learning</b> uses labelled examples. <b>Unsupervised learning</b> searches for patterns in unlabelled data. <b>Reinforcement learning</b> learns actions through rewards or penalties from an environment.</p><div class="formula">Supervised → input + known target<br>Unsupervised → input without target<br>Reinforcement → state → action → reward</div>'],
 ['4. Artificial Neural Networks','<p>An artificial neural network contains connected computational units arranged in layers. During training, model parameters are adjusted so predicted outputs become more consistent with training objectives.</p><div class="formula">Input layer → hidden layer(s) → output layer</div><p>Deep learning generally refers to neural networks with multiple processing layers capable of learning hierarchical representations.</p>'],
 ['5. Training, Testing and Data Quality','<p>A dataset is commonly divided so that model performance can be evaluated on data not used directly for fitting. Poor-quality, biased or unrepresentative data can produce unreliable results even when the algorithm is technically correct.</p><p>Important concerns include overfitting, underfitting, data leakage, evaluation metrics and responsible use.</p>']
 ],
 ['★ Differentiate AI, ML and Deep Learning.','★ Explain supervised, unsupervised and reinforcement learning.','★ Draw the basic structure of an ANN.','★ Why are training and test data separated?','Explain how poor-quality data can affect an AI system.'],
 'AI is the broad field; ML is a data-driven approach within AI; deep learning is a family of multi-layer neural-network methods.'
 );

 L['Core AI Applications - Computer Vision & NLP']=N(
 'Computer vision enables machines to process visual data, while Natural Language Processing enables computational systems to analyse and generate human language.',
 [
 ['1. Computer Vision Pipeline','<p>A basic computer-vision workflow may involve image acquisition, preprocessing, feature extraction or learned representation, detection/classification and interpretation.</p><p>Pixels store numerical information. Image resolution, colour representation, noise and lighting influence the quality of subsequent processing.</p>'],
 ['2. Segmentation and Object Analysis','<p><b>Image segmentation</b> divides an image into meaningful regions. Pixel analysis examines numerical pixel values. Object scaling and structural similarity are used when comparing objects or images under changing conditions.</p>'],
 ['3. Object Detection and OCR','<p>Classification assigns a category to an image or region. Object detection identifies both the category and approximate location, often using bounding boxes.</p><p><b>Optical Character Recognition (OCR)</b> converts visual representations of printed or handwritten characters into machine-readable text. OCR accuracy depends on font, image quality, language and layout.</p>'],
 ['4. Natural Language Processing','<p>NLP deals with computational processing of human language. A basic preprocessing step is <b>tokenization</b>, which divides text into manageable units called tokens.</p><p>Applications include classification, information extraction, translation, question answering and summarisation. Language ambiguity, context and domain vocabulary make NLP challenging.</p>'],
 ['5. Engineering Use Cases and Limits','<p>Vision systems can support inspection, counting and defect detection. NLP can assist with document search, classification and technical information extraction. These systems require appropriate data, validation and human oversight for important decisions.</p>']
 ],
 ['★ Define computer vision.','★ Differentiate image classification and object detection.','★ What is OCR?','★ Define tokenization in NLP.','Give two engineering applications of computer vision and NLP.'],
 'Image → pixels → processing → detection/interpretation. Text → tokens → language processing → useful output.'
 );

 L['Conversational AI and Generative Systems']=N(
 'Conversational AI combines language processing, model inference and application logic to interact through natural-language input. Generative systems produce new text, code or other outputs from learned patterns.',
 [
 ['1. Chatbot Architecture','<p>A simple chatbot can be viewed as an input layer, language/model processing layer, application or tool layer and response layer. More advanced systems add retrieval, memory, moderation and monitoring components.</p><div class="formula">User input → interpretation/model → tools or knowledge → response</div>'],
 ['2. Large Language Models','<p>A large language model processes sequences of tokens and estimates likely continuations based on patterns learned during training. Tokenisation converts text into model-readable units.</p><p>Next-token prediction is a useful simplified explanation of the generation process, but real models contain many learned parameters and architectural operations.</p>'],
 ['3. Prompt Engineering','<p>An effective prompt normally specifies the task, relevant context, constraints and desired output format. Clear instructions reduce ambiguity.</p><div class="formula">Task + Context + Constraints + Output format = clearer prompt</div><p><b>Zero-shot prompting</b> asks the model to perform a task without giving task-specific examples in the prompt.</p>'],
 ['4. Industrial Applications','<p>Generative AI can assist with technical-document summarisation, code scaffolding, drafting, information extraction, brainstorming and conversational interfaces. Outputs should be reviewed before use in safety-critical or high-impact engineering work.</p>'],
 ['5. Limitations and Responsible Use','<p>Generative models can produce confident but incorrect information, incomplete reasoning or fabricated references. This is often called <b>hallucination</b>. Verification against primary or authoritative sources is therefore essential.</p><p>Users should also consider privacy, copyright, bias, security and the consequences of automation.</p>']
 ],
 ['★ Explain a basic chatbot architecture.','★ What is tokenization?','★ Explain next-token prediction at an introductory level.','★ Define prompt engineering and zero-shot prompting.','★ List major limitations of generative AI.'],
 'Good AI use = clear task + appropriate context + verification. Never treat generated output as automatically authoritative.'
 );

 L['Programming Logic & Computational Thinking using Python']=N(
 'Computational thinking converts a real problem into a sequence of precise steps that a computer can execute. Python provides a readable programming language for implementing these algorithms.',
 [
 ['1. Problem Decomposition','<p>Large problems are easier when divided into smaller subproblems. <b>Decomposition</b> separates tasks; <b>abstraction</b> focuses on relevant details; <b>pattern recognition</b> identifies repeated structures; an <b>algorithm</b> gives a finite step-by-step method.</p>'],
 ['2. Algorithm and Flowchart','<p>An algorithm should be unambiguous, finite and effective. A flowchart represents logic graphically using standard symbols for start/end, process, input/output and decision.</p><div class="formula">Problem → inputs → processing steps → output → testing</div>'],
 ['3. Variables and Data Types','<p>A variable stores a value associated with a name. Python commonly uses integers, floating-point numbers, strings and booleans.</p><div class="formula">age=18<br>temperature=36.5<br>name="Prince"<br>passed=True</div><p>Explicit conversion can be performed with int(), float(), str() and bool() when appropriate.</p>'],
 ['4. Expressions and Conditions','<p>Arithmetic operators perform calculations. Relational operators compare values. Logical operators combine conditions.</p><div class="formula">+ − * / // % **<br>== != &lt; &gt; &lt;= &gt;=<br>and, or, not</div><p>Conditional statements select a path based on a Boolean condition.</p>'],
 ['5. Loops and Functions','<p>A <b>for</b> loop is useful when iterating over a sequence or known range. A <b>while</b> loop repeats while a condition remains true.</p><p>Functions package reusable logic. They improve readability, testing and maintenance.</p><div class="formula">def add(a,b):<br>    return a+b</div>'],
 ['6. Testing and Debugging','<p>Testing checks whether a program behaves correctly for normal, boundary and invalid inputs. Debugging identifies and corrects faults.</p><p>Common beginner errors include wrong indentation, incorrect variable names, type mismatch, off-by-one loop errors and incorrect conditions.</p>']
 ],
 ['★ Define algorithm and computational thinking.','★ Draw a flowchart for finding the larger of two numbers.','★ Explain Python variables and basic data types.','★ Differentiate if, for and while.','★ Write a function that returns the square of a number.'],
 'Decompose → design algorithm → represent logic → code → test → debug → refine.'
 );

 L['Word Processing']=N(
 'Word-processing software is used to create structured technical documents such as reports, assignments, notices and project documentation.',
 [
 ['1. Document Creation and Formatting','<p>Text can be formatted through font family, size, colour, bold, italic, underline, alignment and paragraph spacing. Consistent formatting improves readability and makes a technical document easier to navigate.</p>'],
 ['2. Editing Tools','<p>Selection, cut, copy, paste, clipboard operations, find and replace, spell checking and grammar checking speed up document preparation. These tools assist editing but do not replace careful proofreading.</p>'],
 ['3. Page Layout','<p>Margins, orientation, page size, indentation, tabs, headers and footers control document structure. Page breaks and section breaks should be used intentionally rather than inserting many blank lines.</p>'],
 ['4. Tables and Images','<p>Tables organise structured information into rows and columns. Cells can be merged or split and borders can be adjusted. Images should be placed with appropriate size, alignment and surrounding text settings.</p>'],
 ['5. Technical Document Workflow','<div class="formula">Plan → type content → apply consistent styles → insert tables/figures → proofread → page setup → export/print</div><p>Before final submission check headings, page numbers, figure captions, spelling, margins and the final PDF appearance.</p>']
 ],
 ['★ Explain page setup and section breaks.','★ Differentiate header and footer.','★ Explain table operations.','★ Why are styles useful in technical documents?','Describe a complete report-preparation workflow.'],
 'A good document is not merely decorated; its formatting communicates structure and makes information easy to find.'
 );

 L['Spreadsheets']=N(
 'A spreadsheet organises numerical and textual data into cells and supports calculations, analysis, sorting, filtering and charts.',
 [
 ['1. Workbook and Worksheet','<p>A workbook contains one or more worksheets. A worksheet is a grid of rows and columns. A cell is identified by an address such as A1.</p>'],
 ['2. Formulas and Functions','<p>A formula begins with an equals sign and calculates a result from cell references or values.</p><div class="formula">=SUM(B2:B10)<br>=AVERAGE(C2:C10)<br>=MAX(D2:D10)<br>=MIN(D2:D10)<br>=COUNT(A2:A20)<br>=IF(B2&gt;=40,"Pass","Fail")</div>'],
 ['3. Cell References','<p>Relative references change when a formula is copied. Absolute references remain fixed using the $ symbol. Mixed references lock either the row or column.</p><div class="formula">A1 → relative<br>$A$1 → absolute<br>$A1 → fixed column<br>A$1 → fixed row</div>'],
 ['4. Sorting, Filtering and Validation','<p>Sorting rearranges records according to selected values. Filtering temporarily displays records matching criteria. Data validation restricts input to an allowed set or condition.</p>'],
 ['5. Charts and Interpretation','<p>Bar charts compare categories, line charts show trends and pie charts show parts of a whole when categories are suitable. A chart must have meaningful labels and should not distort the underlying data.</p>']
 ],
 ['★ Define workbook, worksheet, row, column and cell.','★ Write formulas using SUM and AVERAGE.','★ Explain relative and absolute references.','★ Differentiate sorting and filtering.','★ Select an appropriate chart for category comparison and time trend.'],
 'Data → formula/function → analysis → visualisation → interpretation.'
 );

 L['Presentation Tool']=N(
 'Presentation software combines text, diagrams, images, tables, charts, animation and speaker notes to communicate information to an audience.',
 [
 ['1. Presentation Structure','<p>A technical presentation normally has a clear opening, logical body and concise conclusion. Each slide should communicate one main idea rather than becoming a page of dense text.</p>'],
 ['2. Layout, Theme and Typography','<p>Layouts provide consistent positions for titles and content. Themes coordinate visual appearance. Typography should remain readable from the expected viewing distance.</p>'],
 ['3. Images, Audio, Video and Shapes','<p>Visual elements should support the explanation. Use diagrams for processes and relationships, images for physical objects and charts for numerical comparisons. Unnecessary animation can distract from technical content.</p>'],
 ['4. Tables and Charts','<p>Tables are useful for exact values; charts are better for trends and comparisons. Imported charts should retain correct labels, units and legends.</p>'],
 ['5. Delivery and Speaker Notes','<p>Speaker notes can contain details that should be spoken rather than placed on the slide. A presenter should rehearse timing, check technical terminology and ensure the slide sequence tells a coherent story.</p>']
 ],
 ['★ State principles of an effective technical presentation.','★ Explain slide layouts and themes.','★ Differentiate a table and chart as communication tools.','★ What should speaker notes contain?','Prepare a five-slide structure for an engineering topic.'],
 'Slide = visual support; speaker = explanation. Keep technical information accurate, labelled and readable.'
 );

 L['Basics of Internet']=N(
 'The Internet provides global connectivity, while the World Wide Web is a service that uses Internet infrastructure to deliver linked resources. Understanding browsers, URLs, servers and online services is essential for safe engineering work.',
 [
 ['1. Internet, Web and Intranet','<p>The <b>Internet</b> is the interconnected network infrastructure. The <b>Web</b> is a service built on that infrastructure using web protocols. An <b>intranet</b> is a private network or private web environment within an organisation.</p>'],
 ['2. URL, Browser and Web Server','<p>A URL identifies the location of a web resource. A browser requests resources from servers and renders the received content. Web servers host or deliver web resources to clients.</p><div class="formula">User → Browser → Network → Web server → Response → Browser</div>'],
 ['3. Search and Bookmarks','<p>Search engines help locate indexed resources. Effective searching uses precise keywords, quotation marks for exact phrases where useful, domain restrictions and source verification. Bookmarks store frequently used resources for later access.</p>'],
 ['4. Web Services','<p>Internet-based services include email, cloud applications, video conferencing, e-learning, e-shopping, e-reservation, online forms and social networking. Each service should be used with appropriate privacy and security settings.</p>'],
 ['5. Privacy and Security','<p>Check HTTPS, domain names, permissions and the context of links. Do not reuse important passwords across services. Browser history and cookies can contain information about browsing activity, so privacy settings should be understood rather than blindly accepted.</p>']
 ],
 ['★ Differentiate Internet, Web and intranet.','★ Explain URL, browser and web server.','★ What makes a technical search effective?','★ List common Internet services.','★ State safe web-navigation practices.'],
 'Internet is the network; Web is a service on it. Browser requests resources; server responds.'
 );

 L['Water']=N(
 'Water is essential for domestic and engineering use. Water treatment begins by identifying impurities and quality problems and then selecting suitable physical, chemical and biological treatment steps.',
 [
 ['1. Sources and Impurities','<p>Water sources include rainwater, surface water and groundwater. Impurities may be suspended, dissolved or biological. Common dissolved substances include mineral salts, while suspended matter includes clay and organic particles.</p>'],
 ['2. Hardness of Water','<p>Hardness is mainly caused by calcium and magnesium ions. <b>Temporary hardness</b> is associated mainly with bicarbonates and can be reduced by boiling. <b>Permanent hardness</b> is associated with sulphates, chlorides and related salts and requires chemical or ion-exchange methods.</p>'],
 ['3. Water Treatment Sequence','<div class="formula">Screening → coagulation/flocculation → sedimentation → filtration → disinfection</div><p>The exact sequence depends on raw-water quality. Coagulation helps destabilise fine particles; sedimentation allows heavier aggregates to settle; filtration removes remaining suspended matter; disinfection controls pathogenic organisms.</p>'],
 ['4. Domestic and Industrial Importance','<p>Drinking water requires microbiological safety and acceptable physical and chemical quality. Industrial processes may require additional control of hardness, dissolved gases, suspended solids or specific ions because scale and corrosion can damage equipment.</p>'],
 ['5. Basic Quality Idea','<p>Water quality is assessed using physical, chemical and biological indicators. A treatment process should be selected from measured quality problems rather than applied blindly.</p>']
 ],
 ['★ Define hardness.','★ Differentiate temporary and permanent hardness.','★ Explain the main stages of water treatment.','★ Why is disinfection necessary?','Explain why industrial water treatment can differ from domestic treatment.'],
 'Identify impurity → measure quality → select treatment → verify treated-water quality.'
 );

 L['Engineering Materials']=N(
 'Engineering materials are selected according to mechanical, thermal, electrical, chemical and economic requirements. Material selection is an engineering decision, not simply a choice based on appearance or cost.',
 [
 ['1. Classification','<p>Engineering materials include metals and alloys, polymers, ceramics, composites and other specialised materials. The useful classification depends on the property being discussed.</p>'],
 ['2. Mechanical Properties','<p><b>Strength</b> is resistance to failure under load. <b>Hardness</b> is resistance to indentation or scratching. <b>Toughness</b> is ability to absorb energy before fracture. <b>Ductility</b> is ability to undergo plastic deformation in tension; <b>brittleness</b> describes low plastic deformation before fracture.</p>'],
 ['3. Metals and Alloys','<p>Pure metals can have useful conductivity and ductility, while alloying can modify strength, hardness, corrosion resistance and other properties. Steel, for example, is an iron-based alloy whose properties depend strongly on composition and processing.</p>'],
 ['4. Non-metallic Materials','<p>Polymers are generally lightweight and corrosion resistant. Ceramics often have high hardness and temperature resistance but may be brittle. Composites combine different constituents to obtain a useful combination of properties.</p>'],
 ['5. Material Selection','<div class="formula">Service condition → required properties → candidate materials → cost/manufacturing → safety/environment → final selection</div><p>Engineers must consider load, temperature, corrosion, wear, manufacturability, availability, maintenance and environmental impact.</p>']
 ],
 ['★ Define strength, hardness, toughness and ductility.','★ Classify engineering materials.','★ Differentiate metal, polymer, ceramic and composite.','★ Why are alloys used?','Explain a systematic material-selection procedure.'],
 'Select a material from service requirements, not from a single property.'
 );

 L['Chemistry of Fuel and Lubricants']=N(
 'Fuels release useful energy through combustion, while lubricants reduce friction, wear and heat generation between moving surfaces.',
 [
 ['1. Fuel and Combustion','<p>A fuel is a substance that releases useful energy when undergoing a suitable chemical reaction. Combustion is the reaction of a fuel with an oxidising agent, commonly oxygen, releasing heat.</p><div class="formula">Fuel + O₂ → CO₂ + H₂O + heat (ideal complete combustion of a hydrocarbon)</div>'],
 ['2. Calorific Value','<p>Calorific value is the heat released by complete combustion of a unit quantity of fuel. It is important when comparing fuels and estimating energy supply.</p><p>Higher and lower calorific values differ according to whether the latent heat associated with water vapour condensation is included.</p>'],
 ['3. Qualities of a Good Fuel','<p>A useful fuel should have suitable calorific value, controlled ignition characteristics, manageable storage and transport, predictable combustion, reasonable cost and acceptable environmental impact.</p>'],
 ['4. Lubricants','<p>Lubricants form a separating film between moving surfaces, reducing direct contact, friction and wear. They can also remove heat and protect surfaces from corrosion.</p><p>Important properties include viscosity, viscosity index, flash point, fire point, pour point and chemical stability.</p>'],
 ['5. Selection and Applications','<p>Lubricant selection depends on load, speed, temperature, material pair, contamination and machine design. Oils are common where circulation and cooling are useful; greases are useful where a retained lubricant is required.</p>']
 ],
 ['★ Define fuel and combustion.','★ Define calorific value.','★ List qualities of a good fuel.','★ Explain the functions of lubricants.','★ Define viscosity, flash point and pour point.'],
 'Fuel supplies energy through controlled combustion; lubricant controls friction, wear, heat and surface protection.'
 );

 L['Electrochemistry']=N(
 'Electrochemistry connects chemical reactions with electrical energy. It explains electrolytes, electrochemical cells, electrolysis, Faraday laws and corrosion.',
 [
 ['1. Electrolytes and Ionic Conduction','<p>An electrolyte produces ions in molten or aqueous form and conducts electricity through movement of those ions. Strong electrolytes ionise extensively; weak electrolytes ionise partially.</p>'],
 ['2. Electrochemical Cells','<p>An electrochemical cell contains electrodes and an electrolyte. In a galvanic cell, a spontaneous chemical reaction produces electrical energy. Oxidation occurs at the anode and reduction at the cathode.</p><div class="formula">Oxidation → loss of electrons<br>Reduction → gain of electrons</div>'],
 ['3. Electrolysis and Faraday Laws','<p>Electrolysis uses electrical energy to drive a non-spontaneous chemical reaction. Faraday’s laws relate deposited mass to quantity of electricity.</p><div class="formula">Q=It<br>m ∝ Q<br>m = ZIt</div><p>Z is the electrochemical equivalent.</p>'],
 ['4. Corrosion','<p>Corrosion is the deterioration of a material, commonly a metal, through chemical or electrochemical interaction with its environment. Rusting of iron requires suitable moisture and oxygen conditions.</p>'],
 ['5. Corrosion Prevention','<p>Protection methods include coatings, suitable material selection, cathodic protection, corrosion inhibitors and environmental control. The correct method depends on the mechanism and service environment.</p>']
 ],
 ['★ Define electrolyte.','★ Differentiate galvanic cell and electrolytic cell.','★ State Faraday’s laws.','★ Explain oxidation and reduction.','★ Explain corrosion and two prevention methods.'],
 'Electrochemistry: chemical reaction ↔ electron transfer ↔ electrical energy.'
 );

 L['Force systems and equilibrium']=N(
 'Engineering mechanics begins with force systems. A body is in static equilibrium when the resultant force and resultant moment satisfy the required equilibrium conditions.',
 [
 ['1. Force and Vector Representation','<p>Force has magnitude, direction and line of action. A force can be resolved into rectangular components.</p><div class="formula">Fₓ=F cosθ<br>Fᵧ=F sinθ<br>R=√(ΣFₓ²+ΣFᵧ²)</div>'],
 ['2. Moment of a Force','<p>The moment measures the turning effect of a force about a point.</p><div class="formula">M=F×perpendicular distance</div><p>Choose a sign convention for clockwise and anticlockwise moments and use it consistently.</p>'],
 ['3. Couple','<p>A couple consists of two equal, opposite and parallel forces separated by a distance. Its resultant force is zero, but it produces a pure turning effect.</p><div class="formula">Moment of couple = F×couple arm</div>'],
 ['4. Equilibrium','<div class="formula">For 2-D static equilibrium:<br>ΣFₓ=0<br>ΣFᵧ=0<br>ΣM=0</div><p>Draw a free-body diagram first. Replace supports and contacts by appropriate reaction forces before writing equilibrium equations.</p>'],
 ['5. Free-Body Diagram','<p>A free-body diagram isolates the body and shows all external forces and moments. Weight, applied loads, support reactions and friction must be represented when applicable.</p>']
 ],
 ['★ Define force and moment.','★ Resolve a force into components.','★ Define couple.','★ State the equations of 2-D equilibrium.','★ Draw a free-body diagram for a simply supported body.'],
 'Always draw the free-body diagram before solving an equilibrium problem.'
 );

 L['Friction']=N(
 'Friction is the resisting force that acts between surfaces in relative motion or with a tendency to move. It is essential in brakes, belts, walking, machines and vehicle motion.',
 [
 ['1. Types of Friction','<p><b>Static friction</b> acts when there is no relative sliding. <b>Limiting friction</b> is the maximum static friction just before motion begins. <b>Kinetic friction</b> acts during sliding.</p>'],
 ['2. Laws of Friction','<div class="formula">Limiting friction F=μN</div><p>For the elementary dry-friction model, limiting friction is proportional to normal reaction and depends on the nature/condition of the surfaces. The coefficient μ is dimensionless.</p>'],
 ['3. Angle of Friction','<p>The angle of friction φ is related to coefficient of friction:</p><div class="formula">tanφ=μ</div><p>It provides a geometric way to represent the friction condition at impending motion.</p>'],
 ['4. Engineering Applications','<p>Friction is useful in brakes, clutches, belt drives and traction. It can also cause energy loss and wear in bearings, sliding interfaces and machine components.</p>']
 ],
 ['★ Differentiate static and kinetic friction.','★ State the limiting-friction relation.','★ Define coefficient and angle of friction.','★ Solve a block-on-incline friction problem.','Give two useful and two harmful effects of friction.'],
 'Friction can be necessary for motion control but excessive friction causes heat, wear and energy loss.'
 );

 L['Centroid and centre of gravity']=N(
 'Centroid locates the geometric centre of an area, while centre of gravity locates the point through which the resultant weight of a body acts.',
 [
 ['1. Centroid of Simple Areas','<p>For a uniform simple geometric area, the centroid often lies at a symmetry point. Rectangle and circle centroids are at their geometric centres. For a triangle, the centroid lies at the intersection of the medians and divides each median in the ratio 2:1 measured from the vertex.</p>'],
 ['2. Composite Areas','<p>For a composite plane area divided into simple shapes:</p><div class="formula">x̄=Σ(Aᵢxᵢ)/ΣAᵢ<br>ȳ=Σ(Aᵢyᵢ)/ΣAᵢ</div><p>For holes, treat the removed area as negative area. The reference axes must be common to all component coordinates.</p>'],
 ['3. Centre of Gravity','<p>For a body made of discrete masses:</p><div class="formula">x̄=Σmᵢxᵢ/Σmᵢ</div><p>For a uniform body, centre of gravity coincides with the geometric centre of mass under a uniform gravitational field.</p>'],
 ['4. Engineering Use','<p>Centroid and centre-of-gravity calculations are used for stability, beam sections, machine components, pressure-resultant locations and structural analysis.</p>']
 ],
 ['★ Define centroid and centre of gravity.','★ State the centroid of rectangle, circle and triangle.','★ Solve a composite-area centroid problem.','★ Explain how a hole is handled in centroid calculation.','Differentiate centroid and centre of gravity.'],
 'Choose reference axes → split into simple areas → find A and centroid coordinates → use weighted-average formula.'
 );

 L['Introduction to Thermodynamics']=N(
 'Thermodynamics studies energy, heat, work and the transformation of energy in physical systems. The subject provides the basis for engines, refrigeration and many thermal processes.',
 [
 ['1. System and Surroundings','<p>A <b>system</b> is the part selected for study. Everything outside it is the surroundings. The boundary separates the system from its surroundings.</p><p>An open system permits mass and energy transfer; a closed system permits energy transfer but not mass transfer; an isolated system ideally permits neither.</p>'],
 ['2. Properties and State','<p>Properties describe the condition of a system. Pressure, temperature, volume and density are common properties. A state is specified when sufficient independent properties are known.</p>'],
 ['3. Heat and Work','<p><b>Heat</b> is energy transferred because of a temperature difference. <b>Work</b> is energy transfer associated with a generalised force-displacement interaction. Both are modes of energy transfer, not properties stored in a system.</p>'],
 ['4. First Law','<div class="formula">Energy balance: ΔE=Q−W<br>for a closed system under the common sign convention</div><p>The first law expresses conservation of energy. The exact sign convention for work must be stated when solving numerical problems.</p>'],
 ['5. Engineering Applications','<p>Thermodynamic analysis is used in internal-combustion engines, turbines, compressors, refrigeration and heating systems. Engineers track where energy enters, leaves and changes form.</p>']
 ],
 ['★ Define system, surroundings and boundary.','★ Differentiate open and closed systems.','★ Differentiate heat and work.','★ State the first law for a closed system with sign convention.','Give two engineering applications of thermodynamics.'],
 'System + boundary + energy transfer → thermodynamic analysis.'
 );

 L['Power Transmission']=N(
 'Power transmission systems transfer mechanical power from a driving shaft to a driven shaft. The main systems introduced at diploma level are belt, rope, chain and gear drives.',
 [
 ['1. Basic Relation','<div class="formula">Power P = 2πNT/60</div><p>N is rotational speed in rpm and T is torque in newton-metres. The relation connects shaft rotation with mechanical power.</p>'],
 ['2. Belt Drive','<p>A belt transmits power between pulleys through friction. Slip can reduce the ideal speed ratio. Open and crossed belt arrangements have different rotation directions.</p>'],
 ['3. Chain Drive','<p>Chain drives use positive engagement between chain and sprocket teeth and therefore provide a more definite speed ratio than friction belt drives, provided conditions are suitable.</p>'],
 ['4. Gear Drive','<p>Gears transmit motion through meshing teeth. Important terms include pitch circle, module, pressure angle, gear ratio and number of teeth.</p><div class="formula">For simple gear pair, speed ratio ≈ N₁/N₂ = Z₂/Z₁</div>'],
 ['5. Selection','<p>Drive selection depends on centre distance, required speed ratio, power, alignment, noise, maintenance, shock loading and available space.</p>']
 ],
 ['★ State the power-torque-speed relation.','★ Explain belt drive and slip.','★ Compare belt, chain and gear drives.','★ Define gear ratio and module.','Select a suitable drive for a given engineering situation and justify it.'],
 'Power transmission = required power + speed ratio + torque + reliability + service conditions.'
 );

 L['Values and Ethics in Day to Day Life']=N(
 'Values guide what a person considers important, while ethics provides principles for deciding what is right or responsible. Both influence daily decisions and relationships.',
 [
 ['1. Values','<p>Values such as honesty, respect, responsibility, fairness and empathy influence behaviour. Values may be personal, social or professional and can differ in priority across situations.</p>'],
 ['2. Ethics and Decision Making','<p>Ethical decision making considers facts, affected people, duties, consequences and fairness. A useful process is to identify the issue, collect facts, identify stakeholders, consider alternatives and choose a defensible action.</p>'],
 ['3. Integrity and Responsibility','<p>Integrity means consistency between stated principles and actual behaviour. Responsibility means accepting the consequences of one’s actions and fulfilling legitimate duties.</p>'],
 ['4. Respect and Digital Conduct','<p>Respect applies to communication, privacy, intellectual property and online behaviour. Responsible digital conduct includes not misrepresenting work, not sharing private information without permission and acknowledging sources.</p>']
 ],
 ['★ Define values and ethics.','★ Explain integrity and responsibility.','★ Describe a simple ethical decision-making process.','★ Why is respect important in digital communication?'],
 'Values influence priorities; ethics helps evaluate actions; integrity connects principles with behaviour.'
 );

 L['Values and Ethics in Profession']=N(
 'Professional ethics guides engineers in situations where safety, honesty, confidentiality, public interest and technical responsibility are involved.',
 [
 ['1. Professional Responsibility','<p>An engineer has responsibilities toward users, employers, colleagues, society and the environment. Technical decisions should be based on evidence and within the limits of one’s competence.</p>'],
 ['2. Safety and Public Interest','<p>Safety is a central engineering responsibility. A technically convenient option is not acceptable if it creates unreasonable risk that could have been avoided through proper design, testing or procedure.</p>'],
 ['3. Integrity and Accountability','<p>Professional integrity includes accurate reporting, honest measurement, proper documentation and acknowledging limitations. Accountability means being able to explain and take responsibility for professional decisions.</p>'],
 ['4. Confidentiality and Conflict of Interest','<p>Confidential information should be handled according to legitimate obligations. A conflict of interest exists when personal interests could improperly influence professional judgement; it should be disclosed and managed appropriately.</p>'],
 ['5. Ethical Engineering Workflow','<div class="formula">Identify issue → verify facts → identify stakeholders → check duties/rules → evaluate alternatives → document decision → review consequences</div>']
 ],
 ['★ Explain professional ethics.','★ Why is safety an ethical responsibility?','★ Define accountability and integrity.','★ What is a conflict of interest?','Solve a short engineering ethics case using a structured decision process.'],
 'Professional competence + honesty + safety + accountability + public interest form the core of responsible engineering practice.'
 );

 L['Environment and ecosystems']=N(
 'Environmental education explains how organisms interact with one another and with physical surroundings and why engineering decisions must consider resource use and ecological effects.',
 [
 ['1. Environment','<p>The environment includes living components (biotic) and non-living components (abiotic) such as air, water, soil, temperature and light.</p>'],
 ['2. Ecosystem','<p>An ecosystem contains producers, consumers and decomposers connected by energy flow and nutrient cycles. Food chains show transfer of energy and matter between organisms.</p>'],
 ['3. Energy Flow','<p>Energy enters many ecosystems through sunlight captured by producers and moves through trophic levels. Energy is progressively lost as heat, so food chains normally contain limited trophic levels.</p>'],
 ['4. Engineering Connection','<p>Engineering projects can change land, water, air quality, waste generation and resource demand. Environmental assessment helps identify impacts and mitigation measures before and during projects.</p>']
 ],
 ['★ Define ecosystem.','★ Differentiate biotic and abiotic components.','★ Explain producers, consumers and decomposers.','★ Explain the engineering importance of environmental assessment.'],
 'Environment = biotic + abiotic interactions; ecosystem = organised interaction with energy flow and nutrient cycling.'
 );

 L['Pollution and control']=N(
 'Pollution occurs when harmful substances or energy are introduced into the environment at levels that cause undesirable effects. Engineering control aims to prevent, reduce, treat and monitor pollution.',
 [
 ['1. Air Pollution','<p>Air pollutants include particulate matter and gases such as sulphur oxides, nitrogen oxides and carbon monoxide. Sources include combustion, industry, transport and dust.</p>'],
 ['2. Water Pollution','<p>Water pollution can result from sewage, industrial effluents, agricultural runoff, oil and other contaminants. Effects include reduced dissolved oxygen, ecosystem damage and health risks.</p>'],
 ['3. Noise Pollution','<p>Noise is unwanted sound that can affect comfort, concentration and health. Control includes reducing source noise, increasing distance, barriers and suitable personal protection where required.</p>'],
 ['4. Pollution Control','<div class="formula">Prevention → source reduction → treatment/control → monitoring → compliance</div><p>Examples include filters and scrubbers for air emissions, wastewater treatment for liquid effluents and process modification to reduce waste at source.</p>'],
 ['5. Engineering Responsibility','<p>Pollution control should consider performance, energy use, waste generated by the control process, maintenance and long-term environmental impact.</p>']
 ],
 ['★ Define air, water and noise pollution.','★ List common air pollutants.','★ Explain major sources of water pollution.','★ State methods of pollution control.','Why is source reduction preferable to treating pollution after generation?'],
 'Prevent where possible; control at source; treat remaining pollution; monitor performance.'
 );

 L['Sustainable development']=N(
 'Sustainable development seeks to meet present needs while maintaining the ability of future generations to meet their needs. Engineering has a direct role because infrastructure and technology affect energy, materials and ecosystems.',
 [
 ['1. Three Dimensions','<p>Sustainability is commonly considered through environmental, economic and social dimensions. A technically successful project should also be viable, safe and socially responsible.</p>'],
 ['2. Resource Efficiency','<p>Efficient use of energy, water and raw materials reduces cost and environmental pressure. Life-cycle thinking considers impacts from raw-material extraction through manufacture, use, maintenance and end-of-life.</p>'],
 ['3. Renewable and Non-renewable Resources','<p>Renewable resources can replenish naturally over appropriate time scales, while non-renewable resources are finite on human time scales. Responsible engineering considers resource availability and environmental consequences.</p>'],
 ['4. Engineering Strategies','<p>Examples include energy-efficient systems, renewable energy integration, waste minimisation, recycling, water conservation, durable design and pollution prevention.</p>']
 ],
 ['★ Define sustainable development.','★ Explain the three dimensions of sustainability.','★ What is life-cycle thinking?','★ Give four engineering strategies for sustainability.'],
 'A sustainable engineering solution balances technical performance with environmental, economic and social considerations.'
 );

 L['Fitness and Wellness']=N(
 'Fitness and wellness involve physical activity, recovery, nutrition, mental well-being and healthy daily habits. The purpose of this lesson is educational: understanding basic principles rather than pursuing extreme training.',
 [
 ['1. Components of Fitness','<p>Health-related fitness includes cardiorespiratory endurance, muscular strength, muscular endurance, flexibility and body composition. Different activities develop different components.</p>'],
 ['2. Exercise Principles','<p>Regular, gradual and appropriate activity supports fitness. Warm-up prepares the body for activity, while cool-down allows a gradual return toward resting conditions.</p>'],
 ['3. Recovery and Sleep','<p>Recovery is part of training and everyday wellness. Adequate sleep, hydration, balanced meals and rest support normal functioning and learning.</p>'],
 ['4. Stress and Wellness','<p>Wellness includes mental and social aspects. Simple practices such as regular activity, organised study, adequate sleep, breathing exercises and supportive social contact can contribute to well-being.</p>']
 ],
 ['★ Define health-related fitness.','★ Why are warm-up and recovery important?','★ List major components of fitness.','★ Explain the role of sleep and recovery.'],
 'Healthy fitness is consistent, age-appropriate and balanced with recovery, study and normal daily life.'
 );

})();
