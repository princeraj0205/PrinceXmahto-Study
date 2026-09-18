/* PrinceXmahto Study — worked examples + exam bank, batch 2026
   Adds concrete practice to the deepest topics without repeating boilerplate.
*/
(function(){
 const L=window.PX_LESSONS||(window.PX_LESSONS={});
 const X={
 "Algebra Determinant":{
  example:"<p><b>Example:</b> For A=[[2,1],[3,4]], |A|=2×4−1×3=5. Since the determinant is non-zero, A has an inverse. For the equations 2x+y=5 and 3x+4y=11, Cramer's rule gives Δ=5, Δx=9 and Δy=7, so x=9/5 and y=7/5.</p>",
  questions:["Evaluate a 2×2 determinant and state the condition for its inverse.","Solve two simultaneous linear equations using Cramer's rule.","Explain minor, cofactor, adjoint and inverse of a matrix.","Differentiate between singular and non-singular matrices.","Verify an inverse by multiplication with the original matrix."],
  revision:"Determinant → minors/cofactors → adjoint → inverse → Cramer's rule → verification."
 },
 "Differential Calculus":{
  example:"<p><b>Example:</b> Let y=x²+3x. By first principles, [f(x+h)−f(x)]/h = [(x+h)²+3(x+h)−(x²+3x)]/h = 2x+h+3. Taking h→0 gives dy/dx=2x+3.</p>",
  questions:["Find the derivative of a polynomial using first principles.","Differentiate a product using the product rule.","Use the chain rule for a composite function.","Explain continuity and its relation to differentiability.","Interpret the derivative as a rate of change."],
  revision:"Limit → first principle → standard derivatives → product/quotient → chain rule → applications."
 },
 "Application of Differential Calculus":{
  example:"<p><b>Example:</b> For f(x)=x²−6x+5, f′(x)=2x−6, so the stationary point is x=3. Since f″(x)=2>0, the point is a local minimum; f(3)=−4.</p>",
  questions:["Find stationary points of a given polynomial.","Classify a stationary point using the second derivative.","Solve a basic maximum-area problem with a constraint.","Find the equation of a tangent at a specified point.","Explain why domain restrictions must be checked in optimization."],
  revision:"Form function → differentiate → solve f′=0 → classify → check endpoints/domain → interpret."
 },
 "Probability and Statistics":{
  example:"<p><b>Example:</b> If P(A)=0.5, P(B)=0.4 and P(A∩B)=0.2, then P(A∪B)=0.5+0.4−0.2=0.7. The intersection term must be subtracted because it was counted twice.</p>",
  questions:["Calculate mean, median and mode for a small data set.","Find variance or standard deviation from grouped data.","Use the addition rule for two events.","Explain independent and mutually exclusive events.","Interpret a statistical result in an engineering context."],
  revision:"Data → central tendency → dispersion → probability rules → interpretation."
 },
 "Water":{
  example:"<p><b>Example:</b> If a water sample contains hardness-producing salts, the hardness calculation is first converted to a common CaCO₃ equivalent basis. In EDTA titration, the endpoint is detected by the indicator colour change after complexing Ca²⁺ and Mg²⁺ with EDTA.</p>",
  questions:["Differentiate temporary and permanent hardness.","Explain EDTA complexometric determination of hardness.","Draw the municipal water-treatment flow sequence.","Compare zeolite and ion-exchange softening.","Explain BOD, COD and dissolved oxygen."],
  revision:"Sources → impurities → hardness → CaCO₃ equivalent → EDTA → treatment → quality indicators."
 },
 "Electrochemistry":{
  example:"<p><b>Example:</b> For a cell reaction involving n electrons, the Nernst equation at 25°C can be written E=E°−(0.0591/n)logQ. First balance the redox reaction, define Q from the reaction, then substitute the stated concentration or activity values.</p>",
  questions:["State Faraday's first law and explain its use.","Differentiate galvanic and electrolytic cells.","Write cell notation for a simple galvanic cell.","Explain electrode potential and SHE.","Explain corrosion and two prevention methods."],
  revision:"Electrolytes → conductance → Faraday → cells → electrode potential → Nernst → batteries → corrosion."
 },
 "Introduction to Thermodynamics":{
  example:"<p><b>Example:</b> For a closed system receiving 500 J of heat and doing 200 J of work on the surroundings, under ΔU=Q−W, ΔU=500−200=300 J. The sign convention must be stated before calculation.</p>",
  questions:["Define system, surroundings and boundary.","Differentiate intensive and extensive properties.","State the first law of thermodynamics.","Differentiate isothermal and adiabatic processes.","Explain the purpose of a thermodynamic cycle."],
  revision:"System → properties → state/process → heat/work → first law → cycles."
 },
 "Force systems and equilibrium":{
  example:"<p><b>Example:</b> A 100 N force acting at 30° to the horizontal has components Fx=100cos30° and Fy=100sin30°. These components can then be used in ΣFx=0 and ΣFy=0 when analysing equilibrium.</p>",
  questions:["Classify common force systems.","Resolve a force into rectangular components.","Calculate the moment of a force about a point.","Draw a free-body diagram for a simply supported beam.","State the conditions of planar static equilibrium."],
  revision:"Force → components → moment → FBD → equilibrium equations → reactions."
 },
 "Friction":{
  example:"<p><b>Example:</b> If a block has normal reaction 500 N and coefficient of friction μ=0.25, the limiting friction is F=μN=125 N. Static friction can be smaller than this before impending motion.</p>",
  questions:["State the laws of dry friction used in basic mechanics.","Define limiting friction and coefficient of friction.","Relate angle of friction to coefficient of friction.","Analyse a block on an inclined plane.","Draw the FBD of a ladder with friction."],
  revision:"Contact → normal reaction → static friction → limiting friction → μ → inclined plane/ladder."
 },
 "Centroid and centre of gravity":{
  example:"<p><b>Example:</b> Divide a composite area into rectangles. For each part record A, x and y, calculate ΣAx and ΣAy, and use x̄=ΣAx/ΣA and ȳ=ΣAy/ΣA. Treat a hole as a negative area.</p>",
  questions:["Define centroid and centre of gravity.","Locate the centroid of a rectangle and triangle.","Calculate centroid of a composite area.","Explain the negative-area method for a hole.","State the role of reference axes in centroid calculations."],
  revision:"Reference axes → component areas → centroid coordinates → first moments → composite result."
 },
 "Simple lifting machines":{
  example:"<p><b>Example:</b> If a machine lifts 800 N using 200 N effort, MA=800/200=4. If its velocity ratio is 5, efficiency=(4/5)×100=80%.</p>",
  questions:["Define mechanical advantage and velocity ratio.","Calculate efficiency from MA and VR.","Explain the law of a machine.","Differentiate self-locking and reversible machines.","Solve a basic load-effort numerical."],
  revision:"Load/effort → MA → VR → efficiency → machine law → reversibility."
 },
 "Kinematics and dynamics":{
  example:"<p><b>Example:</b> A body starts with u=5 m/s and accelerates uniformly at 2 m/s² for 4 s. v=u+at=13 m/s and s=ut+½at²=36 m. The constant-acceleration condition is essential.</p>",
  questions:["Differentiate distance and displacement.","Use equations of uniformly accelerated motion.","State Newton's three laws with engineering examples.","Apply F=ma to a free-body diagram.","Relate work, energy and power."],
  revision:"Position → velocity → acceleration → kinematics → Newton's laws → work/energy/power."
 },
 "Basic Electrical Parameters and Concepts":{
  example:"<p><b>Example:</b> A 12 V source is connected to a 6 Ω resistor. I=V/R=2 A and P=VI=24 W. The result can also be checked using P=I²R.</p>",
  questions:["Define charge, current, voltage and resistance.","State and apply Ohm's law.","Calculate electrical power using different forms.","Compare series and parallel connections.","Explain the correct connection of ammeter and voltmeter."],
  revision:"Charge → current → voltage → resistance → Ohm's law → power → measurement."
 },
 "Fundamentals of D.C. and A.C. Circuits":{
  example:"<p><b>Example:</b> For a sinusoidal voltage with peak value 100 V, Vrms=100/√2≈70.7 V. RMS is used to compare the heating effect of AC with an equivalent DC value in a resistor.</p>",
  questions:["Differentiate DC and AC.","Define peak value, RMS value, period and frequency.","State Kirchhoff's current and voltage laws.","Solve a simple series-parallel circuit.","Explain why reference directions are chosen before applying KCL/KVL."],
  revision:"DC/AC → waveform → RMS → series/parallel → KCL → KVL → verification."
 },
 "Basic Electronic Components":{
  example:"<p><b>Example:</b> A resistor used with an LED limits current. If a supply is 5 V, LED drop is approximately 2 V and desired current is 10 mA, the ideal resistor estimate is R=(5−2)/0.01=300 Ω. Practical selection must also consider power and component ratings.</p>",
  questions:["Explain the function of a resistor.","Explain capacitor energy storage.","Differentiate diode and LED.","State common uses of transistors.","List the ratings that must be checked before selecting a component."],
  revision:"Resistor → capacitor → inductor → diode/LED → transistor → ratings/testing."
 },
 "Overview of Digital Electronics":{
  example:"<p><b>Example:</b> For an AND gate, output is 1 only when both inputs are 1. Writing the four input combinations in a truth table provides a direct verification of the Boolean expression Y=A·B.</p>",
  questions:["Convert a decimal number to binary.","Draw truth tables for AND, OR and NOT.","Explain NAND and NOR as universal gates.","Simplify a basic Boolean expression.","Differentiate combinational and sequential circuits at an introductory level."],
  revision:"Binary → gates → truth tables → Boolean algebra → universal gates → circuit design."
 },
 "Semiconductor Physics":{
  example:"<p><b>Example:</b> In an intrinsic semiconductor, electrons and holes are generated thermally in pairs. Doping introduces donor or acceptor impurities, increasing the concentration of one carrier type and producing n-type or p-type material.</p>",
  questions:["Differentiate conductor, semiconductor and insulator using band theory.","Define intrinsic and extrinsic semiconductor.","Explain donor and acceptor impurities.","Describe formation of a P-N junction.","Relate semiconductor physics to diode operation."],
  revision:"Bands → intrinsic → doping → P/N → junction → device behaviour."
 },
 "Modern Physics":{
  example:"<p><b>Example:</b> For a photon of frequency ν, its energy is E=hν. Increasing frequency increases photon energy, while wavelength follows λ=c/ν. These relations form a bridge between wave and quantum descriptions.</p>",
  questions:["Explain wave-particle duality.","State the photon energy relation.","Explain the photoelectric effect qualitatively.","State de Broglie's hypothesis.","Compare classical and quantum descriptions of matter."],
  revision:"Quantum idea → photon → photoelectric effect → de Broglie → atomic/nuclear concepts."
 },
 "Programming Logic & Computational Thinking using Python":{
  example:"<p><b>Example:</b> To find the largest of three numbers, first compare a with b, retain the larger value, then compare it with c. The same logic can be expressed as pseudocode before writing Python, making testing easier.</p>",
  questions:["Write an algorithm for finding the largest of three numbers.","Draw a flowchart for a loop.","Explain variables and data types in Python.","Differentiate syntax and logic errors.","Write a function and test it with normal and boundary inputs."],
  revision:"Decomposition → algorithm → pseudocode → Python → testing → debugging."
 }
 };
 Object.keys(X).forEach(t=>{if(!L[t])return;Object.assign(L[t],X[t]);L[t].questions=L[t].questions||[];L[t].questions=[...X[t].questions,...L[t].questions.filter(q=>!X[t].questions.includes(q))];L[t].longForm=true});
})();