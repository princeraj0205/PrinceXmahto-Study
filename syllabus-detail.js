/* PrinceXmahto Study — SBTE 2026 Semester-I syllabus detail layer
   Source basis: SBTE Semester-I curriculum/syllabus material supplied for this project.
   This layer contains syllabus checkpoints, not generic filler. */
window.PX_SYLLABUS_DETAIL = window.PX_SYLLABUS_DETAIL || {};
const D=window.PX_SYLLABUS_DETAIL;

D['Algebra Determinant']={unit:'Unit-1.0 Algebra Determinant',points:[
 '1.1 Concept and properties of determinant',
 '1.2 Solution of simultaneous equations in three unknowns by Cramer’s Rule',
 '1.3 Algebra of matrices: addition, subtraction, scalar multiplication and multiplication of two matrices',
 '1.4 Transpose, adjoint and inverse of a matrix',
 '1.5 Solution of simultaneous equations of order 3×3 by matrix inversion method',
 '1.6 Position vector',
 '1.7 Algebra of vectors: addition, subtraction and scalar multiplication',
 '1.8 Scalar product',
 '1.9 Vector product',
 '1.10 Indian Knowledge System: solution of simultaneous equations in Indian Mathematics'
],learn:['Definition and notation','Properties with reasons','Step-by-step solved examples','Exam-oriented numerical practice','Matrix and vector interpretation','IKS connection']};

D['Differential Calculus']={unit:'Unit-2.0 Differential Calculus',points:[
 '2.1 Concept of function', '2.2 Different types of functions', '2.3 Domain and range of a function',
 '2.4 Concept of limits and evaluation of limits', '2.5 Continuity with simple problems',
 '2.6 Differentiation by first principle',
 '2.7 Differentiation of algebraic, trigonometric, exponential and logarithmic functions',
 '2.8 Differentiation of sum, product and quotient of two functions',
 '2.9 Differentiation of composite functions by chain rule',
 '2.10 Logarithmic differentiation', '2.11 Implicit differentiation', '2.12 Parametric differentiation'
],learn:['Definitions and graphical interpretation','Standard limits','First-principle derivations','Rules with worked examples','Mixed exam problems']};

D['Unit and Measurements']={unit:'Unit-1.0 Unit and Measurements',points:[
 'Physical quantities and measurement', 'SI system and standard units', 'Dimensions and dimensional formulae', 'Dimensional analysis and applications', 'Errors in measurement and significant figures', 'Accuracy, precision and least count', 'Measurement instruments and practical interpretation'
],learn:['Definitions','Unit conversions','Dimensional checks','Numerical practice','Measurement examples']};

D['Simple Harmonic and Wave Motion']={unit:'Unit-2.0 Simple Harmonic and Wave Motion',points:[
 'Simple harmonic motion and its defining conditions', 'Displacement, velocity and acceleration in SHM', 'Time period, frequency, amplitude and phase', 'Energy in SHM', 'Wave motion and basic terminology', 'Progressive and stationary wave concepts', 'Wave parameters and engineering applications'
],learn:['Equations and symbols','Graphical representation','Derivations where applicable','Numerical examples','Application-based questions']};

D['Electrostatics, Electromagnetism and Current Electricity']={unit:'Unit-3.0 Electrostatics, Electromagnetism and Electric Current',points:[
 'Electric charge and electric field', 'Electric potential and potential difference', 'Electric current and basic circuit quantities', 'Resistance, resistivity and conductivity', 'Ohm’s law and electrical power', 'Magnetic field and magnetic effects of current', 'Electromagnetic induction and related principles', 'Basic DC circuit applications and safety'
],learn:['Definitions and laws','Field/circuit diagrams','Formula derivations','Numerical problems','Engineering applications']};

D['Semiconductor Physics']={unit:'Unit-4.0 Semiconductor Physics',points:[
 'Semiconductor materials and classification', 'Intrinsic and extrinsic semiconductors', 'Doping and charge carriers', 'PN junction and depletion region', 'Forward and reverse bias', 'Basic semiconductor device behaviour', 'Applications of semiconductor devices in electronics'
],learn:['Band/carrier concepts','PN-junction diagrams','Characteristic interpretation','Application questions']};

D['Modern Physics']={unit:'Unit-5.0 Modern Physics',points:[
 'Introduction to modern-physics concepts', 'Quantum nature of radiation and matter', 'Atomic/nuclear concepts included in the prescribed unit', 'Basic modern-physics relations and formulae', 'Engineering and technological applications'
],learn:['Conceptual explanation','Important formulae','Short/long answers','Application-oriented questions']};

D['Introduction to IT Systems and Digital Technologies']={unit:'Unit-1.0 Introduction to IT Systems and Digital Technologies',points:[
 '1.1 Digital systems, data and information, role of IT in engineering, Internet, web browsers, secure navigation, search engines and effective information retrieval',
 '1.2 CPU, memory, storage devices, input and output devices',
 '1.3 Operating-system functions; Windows, Linux and mobile OS; local files, folders and system directories',
 '1.4 Cloud ecosystems; cloud storage; real-time collaboration; Viewer, Commenter and Editor permissions',
 '1.5 Computer networks, safe Internet practices, password hygiene and basic digital safety'
],learn:['Architecture diagrams','Real-world engineering examples','Security scenarios','Practical step-by-step workflows']};

D['Fundamentals of Artificial Intelligence']={unit:'Unit-2.0 Fundamentals of Artificial Intelligence',points:[
 '2.1 Human intelligence versus artificial intelligence; history, evolution and major milestones',
 '2.2 Machine Learning overview: supervised, unsupervised and reinforcement learning',
 '2.2.2 Overview of Artificial Neural Networks (ANN)'
],learn:['Timeline','AI/ML/DL comparison','Simple learning examples','ANN block diagram','Use cases and limitations']};

D['Core AI Applications - Computer Vision & NLP']={unit:'Unit-3.0 Core AI Applications - Computer Vision & NLP',points:[
 '3.1 Computer vision and machine sight; digital-image processing and industrial use cases',
 '3.2 Image segmentation, pixel analysis, object scaling and structural similarity concepts',
 '3.3 Object detection and identification; target boundaries and tracking',
 '3.4 Optical Character Recognition (OCR) and engineering documents',
 '3.5 Natural Language Processing: tokenization and interpretation of human language'
],learn:['Pipeline diagrams','Image-processing examples','OCR workflow','NLP token example','Engineering applications']};

D['Conversational AI and Generative Systems']={unit:'Unit-4.0 Conversational AI and Generative Systems',points:[
 '4.1 AI chatbot architecture and basic operational blocks of Large Language Models',
 '4.2 Next-word prediction, probability-based word selection, context and meaning',
 '4.3 Prompt engineering: effective prompts, clear instructions, context, constraints and zero-shot prompting',
 '4.4 Industrial applications: technical-document summarization, code scaffolding and cross-disciplinary engineering ideation',
 'Limitations, risks, hallucinations and responsible use of AI'
],learn:['Architecture diagrams','Probability examples','Prompt construction examples','Responsible-use checklist']};

D['Programming Logic & Computational Thinking using Python']={unit:'Unit-5.0 Programming Logic & Computational Thinking using Python',points:[
 'Computational thinking and problem decomposition', 'Algorithms and flowcharts', 'Variables, data types and expressions', 'Conditional and iterative logic', 'Functions and modular problem solving', 'Basic Python programming for engineering problems', 'Debugging and testing logic'
],learn:['Flowcharts','Dry runs','Original Python examples','Common errors','Practice problems']};

/* For all remaining curriculum topics, retain the exact topic name as the syllabus checkpoint.
   Rich topic-specific notes are added in the dedicated note layers rather than generic filler. */
Object.keys(window.PX_CURRICULUM||{}).length && (D._version='2026-sem1');
