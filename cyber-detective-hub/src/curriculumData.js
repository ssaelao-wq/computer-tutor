// Detailed Curriculum Database for Levels 1 to 4
// Mapped from Computer_Tutor_AIEra_Improved_Curriculum.md

export const CURRICULUM_DATA = [
  // ================= LEVEL 1 =================
  {
    id: "l1-s1",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 1: \"How Computers Think\"",
    duration: "2 hours",
    objectives: [
      "Understand that computers follow instructions literally — no assumptions, no common sense",
      "Identify the Input → Process → Output pattern in everyday systems"
    ],
    warmUp: "Simon Says: Robot Edition: Tutor gives instructions. Students follow ONLY literal instructions (e.g., 'raise your hand' — which hand? how high?). Ambiguity causes different outputs from different processors (students).",
    miniLesson: "The IPO Model: Draw Input → Process → Output. Real-world examples (microwave, calculator). Labeled boxes (variables) - a box with a label holding one piece of information.",
    coreActivity: "The Human Computer Simulation (Robot Chef & Malicious Assistant): Students write instructions to perform a simple task. A peer follows instructions literally. A malicious assistant tries to exploit gaps (e.g. placing sealed butter pack on bread). Rewrite with precision.",
    handsOn: "Construct a sandwich maker flowchart in the Sandbox. Write precise steps handling sealed packages and verify robustness against malicious assistants.",
    homework: "Choose a simple everyday task (e.g. brushing teeth, feeding a pet). Write robot-proof literal instructions. Test it on a family member and report failures.",
    ethics: "If you gave bad instructions to a robot chef and someone got food they're allergic to, whose fault is it — yours or the robot's? (Responsibility for automation)",
    adaptations: "Age 9-10: Use physical props (origami paper). Variables are labeled envelopes. Age 15-17: Discuss real IPO systems (search engines, algorithms)."
  },
  {
    id: "l1-s2",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 2: \"Data Types Without Code\"",
    duration: "2 hours",
    objectives: [
      "Distinguish between data types: Numbers, Strings, and Booleans",
      "Understand that different data types have different rules"
    ],
    warmUp: "The Mixing Bowl: Try to add 'apple' + 5. Explain why this doesn't work (data type mismatch).",
    miniLesson: "Data Types: Numbers (math-ready), Strings (characters in quotes), Booleans (true/false switches). Classify real-world info (age, name, door locked status).",
    coreActivity: "Design a character creation form with strict rules (e.g., age must be a number 5-100; name cannot be blank). Try to break a partner's form using invalid inputs.",
    handsOn: "Build a form validation config schema in the Sandbox. Set rules for username, age range, and checkbox toggles.",
    homework: "Find 3 real-world forms. For each, identify the data types expected and list what happens if you input the wrong data type.",
    ethics: "Should a system let people input anything they want as their name? (Validation and data hygiene considerations)",
    adaptations: "Age 9-10: Use colored cards for data types. Age 15-17: Discuss API validation errors."
  },
  {
    id: "l1-s3",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 3: \"Systems in the Real World\"",
    duration: "2 hours",
    objectives: [
      "Model everyday systems using the IPO framework",
      "Identify variables and states in physical machines"
    ],
    warmUp: "Vending Machine Deconstruction: Trace inputs (coins, buttons) to outputs (soda, change).",
    miniLesson: "System States: How machines remember past actions. Variables update state over time (e.g. currentBalance increases when coin is inserted).",
    coreActivity: "Vending Machine Logic: Map out states (Idle, CoinInserted, ItemSelected). Write condition paths for success vs. out-of-stock.",
    handsOn: "Write a vending machine state controller program in the Sandbox handling insufficient funds and stock counts.",
    homework: "Observe a smart appliance at home (e.g. washing machine). Identify 3 inputs, 3 states, and 3 outputs.",
    ethics: "Is it okay for a vending machine to eat your money? How should programmers handle unexpected errors gracefully?",
    adaptations: "Age 9-10: Draw physical boxes for states. Age 15-17: Introduce State Transition Diagrams."
  },
  {
    id: "l1-s4",
    level: 1,
    module: "Module 2: Visual Structures & Logical Loops",
    title: "Session 4: \"Decisions, Decisions\"",
    duration: "2 hours",
    objectives: [
      "Create conditional statements (If/Then/Else)",
      "Diagram logic flowcharts using decision diamonds"
    ],
    warmUp: "The Weather Decision: Mime actions based on conditions ('If raining, open umbrella. Else, put on sunglasses').",
    miniLesson: "Flowcharts: Start/End blocks, Process rectangles, Decision diamonds, Arrows. Nested conditions (If-Within-If).",
    coreActivity: "The Thermostat Challenge: Design flowchart logic for a heater/cooler system with target ranges, emergency shutdowns, and status indicators.",
    handsOn: "Write a conditional thermostat controller script in the Sandbox handling high heat safety overrides.",
    homework: "Draw a flowchart for deciding what to wear based on temperature and weather conditions.",
    ethics: "Self-Driving Cars: If a vehicle must choose between hitting obstacle A or B, who programs that decision? (Ethics of algorithmic choice)",
    adaptations: "Age 9-10: Walk physically on a floor-drawn flowchart grid. Age 15-17: Introduce Boolean Algebra logic gates (AND, OR, NOT)."
  },
  {
    id: "l1-s5",
    level: 1,
    module: "Module 2: Visual Structures & Logical Loops",
    title: "Session 5: \"Round and Round - Loops\"",
    duration: "2 hours",
    objectives: [
      "Distinguish between Counting Loops (For) and Condition Loops (While)",
      "Identify and prevent infinite loops"
    ],
    warmUp: "The Clapping Loop: Clap 5 times (Count). Clap while tutor's hand is up (Condition).",
    miniLesson: "Loop structures: For loops (fixed count), While loops (until condition breaks). Loop variables (counters). Infinite loop danger.",
    coreActivity: "The Sneaky Cat Feeder Challenge: Design flowchart for a feeder that checks bowl weight, tracks time limits, and triggers alarms on dogs.",
    handsOn: "Write a loop-based pet feeding controller in the Sandbox. Ensure counts terminate to prevent infinite food overflows.",
    homework: "Identify 3 loops in daily life. Describe what repeats, the condition/count, and what an infinite loop would look like.",
    ethics: "Should a social media app keep looping notifications infinitely to get your attention? (Ethical design and loop abuse)",
    adaptations: "Age 9-10: Jump in circles for loops. Age 15-17: Discuss stack overflows and CPU resource locks."
  },
  {
    id: "l1-s6",
    level: 1,
    module: "Module 2: Visual Structures & Logical Loops",
    title: "Session 6: \"Building with Blocks\"",
    duration: "2 hours",
    objectives: [
      "Represent flowchart logic in block-based structures (Scratch/Blockly)",
      "Map inputs and triggers to block stacks"
    ],
    warmUp: "Command Translate: Translate a flowchart rectangle into a Blockly code statement.",
    miniLesson: "Block UI: Variables, control blocks, operators, events. Visual nesting of loops inside conditionals.",
    coreActivity: "The Smart Light Grid: Program a lighting grid that turns on at night, dims if motion ceases, and flashes alerts on emergency triggers.",
    handsOn: "Assemble a lighting grid controller in the Sandbox with Night, Motion, and Alert conditions.",
    homework: "Find a simple online block game (e.g. Scratch project). Note down 3 event triggers and their actions.",
    ethics: "Smart cities: Who should have access to override public smart lights? Security concerns of remote overrides.",
    adaptations: "Age 9-10: Use physical color block lego templates. Age 15-17: Compare Blockly syntax directly to raw JS structures."
  },
  {
    id: "l1-s7",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 7: \"Breaking Big Problems Into Small Ones\"",
    duration: "2 hours",
    objectives: [
      "Practice Decomposing complex tasks into independent sub-tasks",
      "Recognize repeating sub-patterns (Abstraction)"
    ],
    warmUp: "Build a House: Break down 'building a house' into independent smaller steps.",
    miniLesson: "Problem Decomposition: Breaking monoliths into units. Interfaces between units (e.g., roof needs walls first). Abstraction of details.",
    coreActivity: "Traffic Light Intersection: Decompose a dual-road traffic system into components (light timers, sensor monitors, emergency overrides).",
    handsOn: "Model decomposed intersections in the Sandbox. Write independent modules for timers and sensor handlers.",
    homework: "Decompose your favorite video game session into at least 4 independent modules (rendering, controls, score, levels).",
    ethics: "If a major decomposed system breaks, who is responsible? (Component liability vs. system architect fault)",
    adaptations: "Age 9-10: Draw a mind map on a whiteboard. Age 15-17: Discuss microservices architecture at a high level."
  },
  {
    id: "l1-s8",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 8: \"Designing Before Building\"",
    duration: "2 hours",
    objectives: [
      "Write pseudocode to outline programmatic logic",
      "Establish program blueprints before writing prompts or code"
    ],
    warmUp: "Recipe Sketch: Write a recipe in plain words, without cooking terms, using only logic variables.",
    miniLesson: "Pseudocode Rules: Standard capitalization (IF, WHILE, FOR), indentation, explicit variable assignments, readable commands.",
    coreActivity: "Elevator Control Blueprint: Write complete pseudocode for a building elevator (handling button presses, floor queues, safety breaks).",
    handsOn: "Draft elevator system pseudocode in the Sandbox, verifying passenger pick-up sequences.",
    homework: "Write pseudocode for an ATM cash withdrawal system handling validation and balance checks.",
    ethics: "Is it better to rush and write buggy code or plan slower? Professional developer ethics and safety.",
    adaptations: "Age 9-10: Fill-in-the-blank pseudocode sheets. Age 15-17: Introduce structured UML sequence drafts."
  },
  {
    id: "l1-s9",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 9: \"Connecting the Pieces\"",
    duration: "2 hours",
    objectives: [
      "Combine independent logic blocks into a coherent pipeline",
      "Handle data flow from one sub-system's output to another's input"
    ],
    warmUp: "Logic Relay: Pass output values from Student A's logic card to Student B's input card.",
    miniLesson: "Pipelines: Output → Input binding. Data transformations. Error propagation along a pipeline.",
    coreActivity: "Smart Home System: Connect temperature controls, fire alarms, and security locks into a single system monitoring grid.",
    handsOn: "Implement a multi-sensor home pipeline script in the Sandbox, verifying alarm overrides instantly cut power grid nodes.",
    homework: "Diagram the steps of ordering food online, tracing how data (items, card details) flow through modules.",
    ethics: "If data flows through multiple vendors, who is responsible for privacy breaches? Data transfer ethics.",
    adaptations: "Age 9-10: Pass paper cards along a string pipeline. Age 15-17: Introduce basic function parameters and returns."
  },
  {
    id: "l1-s10",
    level: 1,
    module: "Module 4: Thinking Like a Tester",
    title: "Session 10: \"The Art of Breaking Things\"",
    duration: "2 hours",
    objectives: [
      "Define happy path vs. edge case inputs",
      "Systematically test systems using a Test Plan Matrix"
    ],
    warmUp: "The Bad Chef: Try to make a sandwich with rocks, air, or infinite bread. Note the failures.",
    miniLesson: "Testing: Happy Path (expected inputs), Edge Cases (extreme, empty, invalid inputs). Boundary values.",
    coreActivity: "Fuzz the Form: Create a test matrix for your Session 2 forms. Execute tests manually to find unchecked exceptions.",
    handsOn: "Write a test validator matrix in the Sandbox, checking extreme values (e.g. negative ages, blank usernames).",
    homework: "Test a local web search bar with 5 edge-case strings (e.g. empty, symbols, HTML code). Log output behavior.",
    ethics: "Is a tester who breaks software a helper or a troublemaker? (The collaborative mindset of software QA)",
    adaptations: "Age 9-10: Mime computer crashes. Age 15-17: Introduce standard QA bug report formats."
  },
  {
    id: "l1-s11",
    level: 1,
    module: "Module 4: Thinking Like a Tester",
    title: "Session 11: \"Designing for Failure\"",
    duration: "2 hours",
    objectives: [
      "Implement defensive logic safeguards in systems",
      "Catch errors early and display user-friendly fallbacks"
    ],
    warmUp: "Seatbelt check: Discuss why cars have airbags. Discuss why software needs error checks.",
    miniLesson: "Defensive Coding: Try/Catch checks. Sanitization. Safe defaults. Fallback recovery states.",
    coreActivity: "The Indestructible Smart Lock: Design logic for a keyless entry pad that locks out hacker brute-forces and runs offline fallbacks.",
    handsOn: "Write a secure smart lock script in the Sandbox handling incorrect password lockouts.",
    homework: "Look up 3 funny software errors (e.g. Y2K bug). Write down how developer checks could have prevented them.",
    ethics: "Should safety critical systems (medical devices) be open source so everyone can audit their error catches?",
    adaptations: "Age 9-10: Use cardboard shield drawings for error catches. Age 15-17: Introduce throw/catch syntax concepts."
  },
  {
    id: "l1-s12",
    level: 1,
    module: "Level 1 Assessment",
    title: "Session 12: \"Level 1 Capstone & Assessment\"",
    duration: "2 hours",
    objectives: [
      "Demonstrate competency in logic, variables, loops, decomposition, and testing",
      "Defend a flowchart logic blueprint against peer attacks"
    ],
    warmUp: "Checklist alignment: Verify assessment criteria.",
    miniLesson: "System Defense: How to present a logical system clearly and answer security vulnerability critiques.",
    coreActivity: "The Grid Defense Tournament: Students present flowcharts for an automated city transport grid. Peers play malicious assistants attempting to break it.",
    handsOn: "Run final verification on your city grid logic map in the Sandbox to pass fuzzer checks.",
    homework: "Submit take-home project: Complete self-reflection documentation for the Level 1 Blueprint.",
    ethics: "Peer reviews: Honesty vs. support. How to critique design templates construction ethically.",
    adaptations: "All Ages: Group evaluations and public presentations."
  },

  // ================= LEVEL 2 =================
  {
    id: "l2-s1",
    level: 2,
    module: "Module 1: \"Read, Don't Write\" - Code Anatomy",
    title: "Session 1: \"Code as a Foreign Language\"",
    duration: "2 hours",
    objectives: [
      "Understand basic code syntax blocks without writing them",
      "Identify functions, parameters, and variable assignments in JavaScript"
    ],
    warmUp: "Syntax Scavenger Hunt: Find where variables are declared and where functions start in a block of code.",
    miniLesson: "Syntax Anatomy: keywords, declaration blocks, brackets, parenthesis, return statements. Reading left-to-right, top-to-bottom.",
    coreActivity: "Translating Code to English: Given code cards, write plain English instructions describing what the code actually does.",
    handsOn: "Load a basic syntax template into the Sandbox. Read the block and document its parameters.",
    homework: "Find a simple JS snippet online. Annotate 3 variables, 1 loop, and 1 condition block.",
    ethics: "Is clean readable code an ethical requirement? The cost of obfuscated code in security.",
    adaptations: "Age 9-10: Color code statements physically. Age 15-17: Introduce simple TypeScript type mappings."
  },
  {
    id: "l2-s2",
    level: 2,
    module: "Module 1: \"Read, Don't Write\" - Code Anatomy",
    title: "Session 2: \"Predict the Output\"",
    duration: "2 hours",
    objectives: [
      "Dry-run code blocks manually using trace tables",
      "Calculate variables updates step-by-step through iteration blocks"
    ],
    warmUp: "Variable Tracer: Manually calculate simple arithmetic series in code.",
    miniLesson: "Trace Tables: Columns for step number, variable values, loop conditions, and outputs. Tracking loops line-by-line.",
    coreActivity: "Manual execution duel: Teams compete to dry-run code blocks containing nested loops, calculating final outputs.",
    handsOn: "Write a tracer program in the Sandbox. Predict variable outputs before running compilation checks.",
    homework: "Complete 3 trace tables for loops with variable increments of varying scales.",
    ethics: "Blind trust in computers: Why dry-running logic manually is crucial for system safety checks.",
    adaptations: "Age 9-10: Use whiteboard tables. Age 15-17: Run trace tables on recursion algorithms."
  },
  {
    id: "l2-s3",
    level: 2,
    module: "Module 1: \"Read, Don't Write\" - Code Anatomy",
    title: "Session 3: \"Code to Flowchart & Back\"",
    duration: "2 hours",
    objectives: [
      "Convert a logic flowchart into clean code structures",
      "Reverse engineer a block of code back into visual flowcharts"
    ],
    warmUp: "Flowchart Match: Match a visual diagram card to its corresponding code snippet.",
    miniLesson: "Equivalence Mapping: Diamond structures to IF/ELSE statement lines. Loop nodes to WHILE or FOR code scopes.",
    coreActivity: "Logic Translation: Teams receive complex code blocks and draw flowcharts. Teams then swap flowcharts to rewrite code.",
    handsOn: "Translate a nested flowchart logic diagram into a Sandbox JavaScript code template.",
    homework: "Draw a flowchart for a provided nested JavaScript conditional structure.",
    ethics: "Visual clarity: How modeling structures prevents developer logic errors and improves safety.",
    adaptations: "Age 9-10: Use drag-and-drop map tools. Age 15-17: Discuss code-to-UML automation tools."
  },
  {
    id: "l2-s4",
    level: 2,
    module: "Module 2: Prompting as a Specification Document",
    title: "Session 4: \"From Wish to Specification\"",
    duration: "2 hours",
    objectives: [
      "Construct detailed prompt specifications using structured headers",
      "Avoid vague wishes and replace them with inputs, outputs, rules, and edge cases"
    ],
    warmUp: "Wish vs Spec: Compare 'make an app that counts' to a structured specifications document. Discuss the difference in AI output.",
    miniLesson: "Prompt Engineering Framework: Role/Persona, Task Context, Input Data Schema, Business Logic Rules, Edge Case Handling, Expected Output Format.",
    coreActivity: "Spec Writing Workshop: Teams draft detailed specs to build a 'Streak Counter' or 'Game Score Tracker'. Try to leave zero ambiguities.",
    handsOn: "Write a structured prompt specification in the Sandbox. Run the generator to see if the output is correct.",
    homework: "Draft a 1-page Prompt Specification for a shopping cart calculator.",
    ethics: "AI Bias and prompt quality: How garbage specifications lead to buggy AI generated applications.",
    adaptations: "Age 9-10: Use a prompt outline template. Age 15-17: Write prompt specs using markdown layouts."
  },
  {
    id: "l2-s5",
    level: 2,
    module: "Module 2: Prompting as a Specification Document",
    title: "Session 5: \"The AI Sandbox\"",
    duration: "2 hours",
    objectives: [
      "Use structured prompts to direct AI code generation",
      "Iterate on prompt specs to refine AI outputs without editing code manually"
    ],
    warmUp: "Prompt Duel Arena: Compete to prompt the AI to build a specific mini-app in secret (e.g. a streak tracker) in one shot.",
    miniLesson: "Feedback Loops: Review AI output, spot logical errors, identify prompt ambiguities, refine prompt specs, regenerate.",
    coreActivity: "One-Shot App Challenge: Build a mini-app inside the Sandbox by writing prompt specifications. Iterate on the prompt for any failures.",
    handsOn: "Write prompt specifications in Sandbox, compile code outputs, and verify with fuzzer tests.",
    homework: "Run your prompt through a different AI model. In your Prompt Journal, document the differences.",
    ethics: "Is using AI to write code cheating? The shift from manual typing to logic specifications writing.",
    adaptations: "Age 9-10: Focus on simple text transformations. Age 15-17: Track versions and prompt diffs."
  },
  {
    id: "l2-s6",
    level: 2,
    module: "Module 2: Prompting as a Specification Document",
    title: "Session 6: \"The Constraint Challenge\"",
    duration: "2 hours",
    objectives: [
      "Add new system constraints without breaking existing features",
      "Inject obfuscated or security parameters into prompt specifications"
    ],
    warmUp: "The Obfuscated Key: Prompt an AI to hide a secret keyword inside an app.",
    miniLesson: "Constraints: Resource limits, user roles, bypass blocks, code size, execution rules.",
    coreActivity: "Requirement Roulette: Students receive random constraint cards (e.g. Hide bypass keywords, restrict user age ranges) and inject them into their prompts.",
    handsOn: "Implement constraints in the Sandbox. Run Chaos Monkey to verify the fuzzer catches backdoor cheats.",
    homework: "Write 5 additional test scenarios for your constraint project and test them against alternative AI nodes.",
    ethics: "Backdoors and hidden logic: The security implications of developers hiding unauthorized access paths in code.",
    adaptations: "Age 9-10: Use simple constraints (colors, counts). Age 15-17: Discuss prompt injection vulnerabilities."
  },
  {
    id: "l2-s7",
    level: 2,
    module: "Module 3: Code Detective - Debugging & Defense",
    title: "Session 7: \"The Bug Classification System\"",
    duration: "2 hours",
    objectives: [
      "Differentiate between Syntax, Runtime, and Logic errors",
      "Locate bugs using browser consoles and execution logs"
    ],
    warmUp: "Bug Hunt: Match compiler messages to their syntax errors.",
    miniLesson: "Bug Classification: Syntax (grammar check), Runtime (execution crash), Logic (runs but output is wrong). Error logs and stacks.",
    coreActivity: "The Bug Bounty: Students receive broken code files and classify all bugs before writing fixes.",
    handsOn: "Find and fix logic bugs in Sandbox templates using browser debug inputs.",
    homework: "Categorize 5 real bugs you encountered during your homework or local app testing. Document logs.",
    ethics: "Reporting bugs: Responsible disclosure ethics. Bug bounties.",
    adaptations: "Age 9-10: Use simple visual code puzzle logs. Age 15-17: Introduce breakpoints and variable watches."
  },
  {
    id: "l2-s8",
    level: 2,
    module: "Module 3: Code Detective - Debugging & Defense",
    title: "Session 8: \"The Broken Machine\"",
    duration: "2 hours",
    objectives: [
      "Debug systems with nested dependencies",
      "Write unit tests to prevent regression bugs"
    ],
    warmUp: "Dependency check: Break a gear in a model toy. Note how it breaks unrelated actions.",
    miniLesson: "Regressions: Fixing bug A breaks feature B. Unit testing: Automating validation of isolated features to guarantee logic stability.",
    coreActivity: "The Broken Vending Machine: Fix logic bugs in a complex coin receiver while ensuring coin payout rules are not broken.",
    handsOn: "Write automated tests inside the Sandbox, checking coin counts and balance bounds.",
    homework: "Write a test suite sheet with 10 test scenarios for a shopping cart checkout module.",
    ethics: "Is it ethical to ship software with known minor bugs? balancing timelines vs. quality.",
    adaptations: "Age 9-10: Simple inputs checklists. Age 15-17: Discuss TDD (Test Driven Development) flows."
  },
  {
    id: "l2-s9",
    level: 2,
    module: "Module 3: Code Detective - Debugging & Defense",
    title: "Session 9: \"Efficiency & Code Quality\"",
    duration: "2 hours",
    objectives: [
      "Recognize code redundancy and refactor logic blocks",
      "Optimize loop execution counts and variable scopes"
    ],
    warmUp: "The Redundant Chef: Clean up a recipe that repeats the same chopping steps 5 times.",
    miniLesson: "Refactoring: Cleaning code without changing its external behavior. DRY principle (Don't Repeat Yourself). Performance checks.",
    coreActivity: "Code Compression Sprint: Compete to shrink a 100-line buggy code block into 30 lines of clean, readable code.",
    handsOn: "Optimize a redundant loop execution inside the Sandbox. Verify performance outputs.",
    homework: "Review one of your previous homework scripts. Refactor it to reduce lines and improve variables naming.",
    ethics: "Energy efficiency: How inefficient software running on millions of devices impacts global carbon footprints.",
    adaptations: "Age 9-10: Code block puzzles. Age 15-17: Discuss Time Complexity (Big O) basics."
  },
  {
    id: "l2-s10",
    level: 2,
    module: "Module 4: Version Control & Collaboration Thinking",
    title: "Session 10: \"Tracking Changes\"",
    duration: "2 hours",
    objectives: [
      "Understand version tracking concepts (Git commits)",
      "Resolve conflicts when merging collaborative changes"
    ],
    warmUp: "Paper Versioning: Two students edit the same text on paper. Resolve their layout conflicts manually.",
    miniLesson: "Version Control: Repositories, commits, diffs, branches, merge conflicts.",
    coreActivity: "The Commit Train: Students simulate Git branches on paper. Merge changes and resolve merge conflicts by comparing diff lines.",
    handsOn: "Run mock merge conflicts resolutions in the Sandbox, choosing correct line updates.",
    homework: "Write a short guide explaining how Git branches work and how to resolve a merge conflict.",
    ethics: "Stealing commits: Ethical rules of attribution in collaborative software projects.",
    adaptations: "Age 9-10: Use physical colored string to trace branches. Age 15-17: Run Git commands locally."
  },
  {
    id: "l2-s11",
    level: 2,
    module: "Module 4: Version Control & Collaboration Thinking",
    title: "Session 11: \"Collaboration & Documentation\"",
    duration: "2 hours",
    objectives: [
      "Write clean developer documentation (README)",
      "Perform code reviews to catch vulnerabilities in peer scripts"
    ],
    warmUp: "The Silent Manual: Build a simple Lego build using only documentation diagrams.",
    miniLesson: "Documentation: Setup instructions, inputs mapping, API parameters description. Code Reviews: Constructive criticism rules.",
    coreActivity: "Code Review Panel: Review partner's Prompt Specifications and Code outputs. Write constructive critique checklists.",
    handsOn: "Write a documentation README outline in the Sandbox explaining how to run the sandbox scripts.",
    homework: "Complete a peer review report on an assignment. Document bugs and suggest optimizations.",
    ethics: "How to give constructive feedback: Supporting your teammates while holding quality standards high.",
    adaptations: "Age 9-10: Group feedback circles. Age 15-17: Write documentation using Markdown formats."
  },
  {
    id: "l2-s12",
    level: 2,
    module: "Level 2 Assessment",
    title: "Session 12: \"Level 2 Assessment Part A\"",
    duration: "2 hours",
    objectives: [
      "Complete comprehensive Prompt Specifications under strict system constraints",
      "Build, debug, and test code outputs in a simulated environment"
    ],
    warmUp: "Assessment alignment and rules check.",
    miniLesson: "Debugging Under Pressure: Techniques for isolating crashes systematically during timed evaluations.",
    coreActivity: "Prompt Sandbox Challenge: Students build a complex logic machine (e.g. Traffic Scheduler) using only prompt spec updates.",
    handsOn: "Run validation matrix checks on the Sandbox project to verify edge-cases.",
    homework: "Submit Assessment Part A codebase package folder.",
    ethics: "Integrity in timed tests: Using tools as helpers vs. plagiarizing structures.",
    adaptations: "All Ages: Timed project sprints."
  },
  {
    id: "l2-s13",
    level: 2,
    module: "Level 2 Assessment",
    title: "Session 13: \"Level 2 Assessment Part B & Defense\"",
    duration: "2 hours",
    objectives: [
      "Perform code audits and reviews on classmate submissions",
      "Defend your prompt specifications against fuzzer exploits"
    ],
    warmUp: "Audit Guidelines: How to review submission branches.",
    miniLesson: "Defensive Coding Defense: Explaining how your prompt design prevents security breaches.",
    coreActivity: "The Bug Bounty Tournament: Students execute peer audits to find flaws in classmates' projects. Defenders write patches.",
    handsOn: "Validate final patch fixes in the Sandbox to complete the Level 2 certification.",
    homework: "Write a Final Vulnerability Report outlining discovered issues and patch designs.",
    ethics: "Responsible auditing: Protecting systems by finding vulnerabilities ethically.",
    adaptations: "All Ages: Peer evaluation tournaments."
  },

  // ================= LEVEL 3 =================
  {
    id: "l3-s1",
    level: 3,
    module: "Module 1: Databases, APIs, and Data Flows",
    title: "Session 1: \"Where Does Data Live?\"",
    duration: "2 hours",
    objectives: [
      "Understand Client-Server models, databases, and schemas",
      "Classify fields into Public, Private, and Sensitive tiers"
    ],
    warmUp: "The Memory Box: Store data in local state, local storage, and database. Discuss what stays when the page restarts.",
    miniLesson: "Client-Server Architecture: Databases (tables, rows, schemas). Data sensitivity categorization. User roles.",
    coreActivity: "Design library database schema: fields, roles, permissions. Audit access boundaries.",
    handsOn: "Create a database schema blueprint in Sandbox. Define table structure for a message logger.",
    homework: "Design self-destructing message database schema fields (read_at, expires_at) and logic.",
    ethics: "Data privacy: Why storing personal info requires explicit access rules and protection.",
    adaptations: "Age 9-10: Use paper cards as database rows. Age 15-17: Introduce SQL syntax statements."
  },
  {
    id: "l3-s2",
    level: 3,
    module: "Module 1: Databases, APIs, and Data Flows",
    title: "Session 2: \"APIs - How Systems Talk\"",
    duration: "2 hours",
    objectives: [
      "Describe API request/response structures",
      "Understand JSON data exchange format"
    ],
    warmUp: "The Restaurant Analogy: Customer (Client), Waiter (API), Kitchen (Server). Send orders.",
    miniLesson: "HTTP request methods (GET, POST). Headers, body, response codes (200, 404, 500). JSON structure.",
    coreActivity: "API Protocol Mapping: Write out API requests and responses for ordering a ride or booking a ticket.",
    handsOn: "Configure an API request simulation in the Sandbox, mapping JSON output parameters.",
    homework: "Find a public API (e.g. weather, pokemon). Write down its endpoint, inputs, and a sample JSON response.",
    ethics: "API rate limits: Ethical use of remote server resources. Preventing API DOS attacks.",
    adaptations: "Age 9-10: Act out request-response exchanges physically. Age 15-17: Fetch real API endpoints in browser console."
  },
  {
    id: "l3-s3",
    level: 3,
    module: "Module 1: Databases, APIs, and Data Flows",
    title: "Session 3: \"Data Flow at Scale\"",
    duration: "2 hours",
    objectives: [
      "Diagram system communications using sequence diagrams",
      "Identify bottlenecks and latency points in web structures"
    ],
    warmUp: "Lag Demonstration: Introduce network delay into a verbal relay race.",
    miniLesson: "Sequence diagrams: actors, lifelines, message arrows. Database latency, caching.",
    coreActivity: "Social Feed Pipeline: Design a sequence diagram mapping how a user posts a photo, updates database, and triggers alerts.",
    handsOn: "Draw sequence diagrams in Sandbox. Outline system flows for a messaging application.",
    homework: "Draw a sequence diagram for logging into a banking app with MFA validation checks.",
    ethics: "Reliability of systems: Designing fallbacks so users aren't locked out when network nodes drop.",
    adaptations: "Age 9-10: Mime network packets delays. Age 15-17: Introduce Mermaid.js diagramming syntaxes."
  },
  {
    id: "l3-s4",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 4: \"Choosing the Right Tools\"",
    duration: "2 hours",
    objectives: [
      "Evaluate and select framework dependencies (Vite, React, next.js)",
      "Analyze package manager files (package.json)"
    ],
    warmUp: "The Tool Chest: Choose the right vehicle (bicycle vs cargo truck) for varying shipping jobs.",
    miniLesson: "Tech Stack: frontend, backend, serverless. Node, NPM, dependencies, version conflicts, script execution.",
    coreActivity: "App Blueprint Sprint: Given a project brief, select appropriate npm packages and design project tree layouts.",
    handsOn: "Inspect and update npm package manager settings in Sandbox config files.",
    homework: "Choose a web application you use daily. Research and guess its frontend and backend tech stack.",
    ethics: "Open source license agreements: Ethical limits of copying software tools.",
    adaptations: "Age 9-10: Categorize tech block cards. Age 15-17: Run npm commands on local terminal shells."
  },
  {
    id: "l3-s5",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 5: \"Project Planning & Architecture\"",
    duration: "2 hours",
    objectives: [
      "Plan engineering roadmap using task checklists",
      "Establish interface boundaries before team splits"
    ],
    warmUp: "The Lego Split: Divide a Lego blueprint among 3 students. Ensure connection points align.",
    miniLesson: "Milestones. Scope creep. API Contracts (aligning input/output shapes before frontend/backend splits).",
    coreActivity: "Contract Negotiation: Divide teams into front/back builders. Agree on API schemas and write contract files.",
    handsOn: "Draft an API JSON schema contract in Sandbox to lock frontend/backend configurations.",
    homework: "Decompose a capstone project idea into 10 component checklist items (task.md layout).",
    ethics: "Accurately reporting progress: Honesty in agile scrum updates and team responsibilities.",
    adaptations: "Age 9-10: Use visual sticky notes. Age 15-17: Introduce Gantt charts and project milestones."
  },
  {
    id: "l3-s6",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 6: \"Building with AI Assistance\"",
    duration: "2 hours",
    objectives: [
      "Iteratively build complex interfaces using AI prompts specs",
      "Isolate and integrate AI generated modules into a pre-existing project"
    ],
    warmUp: "AI Code Merge: Safely insert a function output from AI into an active running script.",
    miniLesson: "Component structure, file organization, loading external scripts, keeping functions modular.",
    coreActivity: "The Module Stitch: Prompt the AI to build a specific chart component. Stitch it manually into a dashboard project.",
    handsOn: "Integrate a generated calculator component into a Sandbox template dashboard interface.",
    homework: "Refine a prompt specification to generate a secure user settings panel components block.",
    ethics: "Copyright of AI generated code: Understanding developer responsibilities for AI creations.",
    adaptations: "Age 9-10: Drag-and-drop component builds. Age 15-17: Discuss package importing patterns."
  },
  {
    id: "l3-s7",
    level: 3,
    module: "Module 2: Complete Project Orchestration",
    title: "Session 7: \"Testing, Debugging & Technical Debt\"",
    duration: "2 hours",
    objectives: [
      "Conduct automated system testing",
      "Identify and refactor legacy technical debt"
    ],
    warmUp: "The Messy Closet: Try to find a shirt in a messy closet vs a organized wardrobe. (Technical debt visual analogy)",
    miniLesson: "Technical Debt: code written fast that makes future updates hard. Refactoring pipelines. Automated integration tests.",
    coreActivity: "Cleanup Sprint: Clean up a legacy application codebase containing messy variables and logic blocks.",
    handsOn: "Refactor a redundant data pipeline inside the Sandbox to pass fuzzer benchmarks.",
    homework: "Identify technical debt in your previous sessions prompts. Document a refactoring guide.",
    ethics: "Rushing features vs. code health: Responsible engineering trade-offs under deadlines.",
    adaptations: "Age 9-10: Organize visual block stacks. Age 15-17: Introduce basic performance Profilers."
  },
  {
    id: "l3-s8",
    level: 3,
    module: "Module 3: Architectural Defense & Security",
    title: "Session 8: \"Security Fundamentals\"",
    duration: "2 hours",
    objectives: [
      "Describe security vulnerabilities: Injection, Authentication failure, XSS",
      "Implement inputs sanitization filters"
    ],
    warmUp: "The Poison Mail: Send an envelope containing instructions to burn the envelope. Mime execution. (Injection attack)",
    miniLesson: "OWASP Top 10 basics. SQL Injection (injecting code commands as data inputs). Cross-Site Scripting (XSS). Sanitizing inputs.",
    coreActivity: "Attack the DB: Write malicious inputs (e.g. OR 1=1) to query mock databases. Implement validation filters to block attacks.",
    handsOn: "Write a SQL input sanitization filter inside the Sandbox to prevent database hacks.",
    homework: "Research a famous data leak. Write down what vulnerability was exploited and how it could have been prevented.",
    ethics: "Ethical hacking: Permitted penetration testing vs cybercrime laws.",
    adaptations: "Age 9-10: Use lock and key physical games. Age 15-17: Introduce OWASP vulnerability mapping."
  },
  {
    id: "l3-s9",
    level: 3,
    module: "Module 3: Architectural Defense & Security",
    title: "Session 9: \"Attack & Defend\"",
    duration: "2 hours",
    objectives: [
      "Audit peer codebases for security vulnerabilities",
      "Deploy security patches to block real-time fuzzer exploits"
    ],
    warmUp: "Lock Audit: Inspect classroom physical security points (windows, doors) for flaws.",
    miniLesson: "Vulnerability Scanning. Log audits. Security patch deployments. Keeping dependencies updated.",
    coreActivity: "The Bug Bounty Fair: A tournament where students act as security auditors to attack classmate apps. Defenders write patches.",
    handsOn: "Deploy security patches in the Sandbox to pass malicious hacker fuzzer scripts.",
    homework: "Document a Vulnerability Audit Report detailing issues found in classmates' apps.",
    ethics: "Ethical disclosure: Reporting vulnerabilities to companies before posting them online.",
    adaptations: "All Ages: Live classroom hacking/defense tournament."
  },
  {
    id: "l3-s10",
    level: 3,
    module: "Module 3: Architectural Defense & Security",
    title: "Session 10: \"Privacy by Design\"",
    duration: "2 hours",
    objectives: [
      "Apply privacy guidelines (GDPR basics) to system design",
      "Implement database schemas that minimize personal data retention"
    ],
    warmUp: "The ID Check: Audit what information a library card actually needs vs what they ask for (phone, address, SSN).",
    miniLesson: "Privacy by Design: Data Minimization (only collect what you need), encryption at rest/transit, user data deletion rights.",
    coreActivity: "Privacy Audit: Re-architect a database schema of a ride-sharing app to hide passenger locations and delete historic routes.",
    handsOn: "Update a database table schema in Sandbox to remove unnecessary personal details.",
    homework: "Read the privacy policy of an app you use. List 3 data elements they collect and list if they are truly required.",
    ethics: "User data exploitation: The ethics of selling user activity profiles to advertisers.",
    adaptations: "Age 9-10: Design a secret agent ID card hiding sensitive info. Age 15-17: Discuss hashing algorithms (SHA-256) basics."
  },
  {
    id: "l3-s11",
    level: 3,
    module: "Module 4: Capstone Project & Defense",
    title: "Sessions 11-12: \"Capstone Completion Sprint\"",
    duration: "4 hours total",
    objectives: [
      "Implement a complete, secure system architecture mapping client, server, database, and APIs",
      "Integrate automated test matrices validating boundaries"
    ],
    warmUp: "Project check: align milestone requirements.",
    miniLesson: "Sprint management: Prioritizing features, setting up mock integrations, testing early.",
    coreActivity: "Capstone completion sprint: Teams finalize system blueprints, prompt scripts, database connections, and run security patches.",
    handsOn: "Compile final system integrations in the Sandbox and execute full test plans.",
    homework: "Complete system documentation draft explaining features and endpoints.",
    ethics: "Collaborative contributions: Aligning team tasks fairly.",
    adaptations: "All Ages: Extended coding hackathons."
  },
  {
    id: "l3-s13",
    level: 3,
    module: "Module 4: Capstone Project & Defense",
    title: "Session 13: \"The Capstone Defense\"",
    duration: "2 hours",
    objectives: [
      "Present and defend a complete system architecture blueprint",
      "Explain system design choices and answer security questions"
    ],
    warmUp: "Mock Defense: Practice presenting a schema to a client.",
    miniLesson: "Engineering presentation: How to explain design choices (e.g. database schema fields) clearly to non-technical managers.",
    coreActivity: "Live Presentation panel: Teams pitch capstone system blueprints, run sandbox demonstrations, and defend architecture against fuzzer checks.",
    handsOn: "Execute final live demo runs in the Sandbox.",
    homework: "Reflect on project feedback. Document 3 optimizations to make post-launch.",
    ethics: "Professional accountability: Taking ownership of design decisions and bug disclosures.",
    adaptations: "All Ages: Live defense panels."
  },
  {
    id: "l3-s14",
    level: 3,
    module: "Module 4: Capstone Project & Defense",
    title: "Session 14: \"Reflection & What's Next\"",
    duration: "2 hours",
    objectives: [
      "Synthesize level learning objectives",
      "Identify advanced topics: deployment, cloud database hosting"
    ],
    warmUp: "Class retrospective: Share the hardest bug you solved.",
    miniLesson: "Software Engineer Roadmap: What separates a sandbox prototype from a production system (real hosting, domains, auth).",
    coreActivity: "Course Review and Career Map: Explore developer roles (frontend, backend, security, DBA). Plan paths to Level 4.",
    handsOn: "Configure sandbox fallbacks to simulate deployment pipelines.",
    homework: "Write down 3 goals for Level 4 study (e.g. learning Git CLI, connecting real Supabase).",
    ethics: "Continuous learning: The professional developer's responsibility to keep skills updated as tech shifts.",
    adaptations: "All Ages: Career planning guidance."
  },

  // ================= LEVEL 4 =================
  {
    id: "l4-s1",
    level: 4,
    module: "Module 1: Production Infrastructure & Database Integration",
    title: "Session 1: \"Connecting to the Cloud Database\"",
    duration: "2 hours",
    objectives: [
      "Connect a React application to a remote cloud database (e.g., Supabase, Firebase)",
      "Perform CRUD operations directly from a client application"
    ],
    warmUp: "Real-Time Sync: Tutor inputs data on a teacher console. Students watch it instantly populate on their screens. Introduce real-time server synchronicity.",
    miniLesson: "Database Client libraries: Instantiating database clients, credentials handling, executing requests. Data Latency.",
    coreActivity: "The Live Database Hookup: Students connect their frontend template to a cloud database project. Create a database table for their campaign context. Write frontend logic to insert and read records.",
    handsOn: "Write a React hook to connect and execute CRUD queries on a remote database client in the Sandbox.",
    homework: "Choose a real-world app context and design its database schema. Design a self-destructing message database schema.",
    ethics: "Data stewardship: Managing remote user records safely and complying with data deletion rules.",
    adaptations: "Age 9-10: Connect pre-made template blocks. Age 15-17: Configure custom tables triggers."
  },
  {
    id: "l4-s2",
    level: 4,
    module: "Module 1: Production Infrastructure & Database Integration",
    title: "Session 2: \"Security Keys & Environment Variables\"",
    duration: "2 hours",
    objectives: [
      "Differentiate between public and private credentials",
      "Configure environment variables to prevent API key exposure"
    ],
    warmUp: "The Leaked Password: Tutor shows a mock public repository containing a plain-text database password. Discuss what a hacker could do with this access.",
    miniLesson: "Environment Variables: Why we separate config keys from codebase logic. Key Rotation. gitignore configuration.",
    coreActivity: "Secret Wards Protection: Move hardcoded API keys out of code. Create .env and .env.local files. Configure .gitignore to block credentials tracking.",
    handsOn: "Configure env files in Sandbox, reference them via import.meta.env, and run checks to ensure zero plaintext secrets are committed.",
    homework: "Write a short guide explaining what happens if someone commits a private password to a public repo. Create a key rotation checklist.",
    ethics: "Developer vigilance: The responsibility of ensuring secrets are never leaked to public version control.",
    adaptations: "Age 9-10: Visual envelope keys. Age 15-17: Practice revoking and rotating API keys."
  },
  {
    id: "l4-s3",
    level: 4,
    module: "Module 1: Production Infrastructure & Database Integration",
    title: "Session 3: \"External API Integration\"",
    duration: "2 hours",
    objectives: [
      "Fetch data from third-party REST APIs",
      "Handle asynchronous network requests and error states"
    ],
    warmUp: "The Mashup App: Tutor demonstrates an app that pulls together weather data, map locations, and news headlines in one page.",
    miniLesson: "REST APIs & JSON: HTTP methods, request headers, query parameters, response codes (429 rate limit). Asynchronous fetch.",
    coreActivity: "API Integration Sprint: Integrate an external public API into their application. Write asynchronous fetch functions, clean response data, and handle failures.",
    handsOn: "Write an async fetch function in Sandbox requesting external API data and handling rate limits.",
    homework: "Design an interface to fetch and cache API responses to avoid exceeding rate limits.",
    ethics: "Scraping vs using APIs: Respecting terms of service of third-party platforms.",
    adaptations: "Age 9-10: Fetch simple text card API data. Age 15-17: Set authorization headers on API calls."
  },
  {
    id: "l4-s4",
    level: 4,
    module: "Module 2: User Access & Identity",
    title: "Session 4: \"User Authentication & Sign-Up\"",
    duration: "2 hours",
    objectives: [
      "Implement registration and login flows",
      "Manage user authentication session states"
    ],
    warmUp: "The Guarded Door: Discuss why apps ask you to login. Introduce authentication (who you are) vs. authorization (what you can do).",
    miniLesson: "Authentication Tokens: How sessions are maintained in browsers (cookies, local tokens, JWTs). Auth guarding routes.",
    coreActivity: "Building the Gate: Configure Email/Password sign-up and login providers. Build sign-up, login, and sign-out pages. Guard routes so logged-out users are redirected.",
    handsOn: "Write a React router auth guard in Sandbox, protecting a dashboard page from unauthenticated tokens.",
    homework: "Create a user flow map showing how the application routes logged-in vs. logged-out users.",
    ethics: "Password hashing: Why storing passwords in plaintext is an ethical crime.",
    adaptations: "Age 9-10: Visual keycards. Age 15-17: Discuss OAuth (social logins) flows."
  },
  {
    id: "l4-s5",
    level: 4,
    module: "Module 2: User Access & Identity",
    title: "Session 5: \"Row-Level Security & Data Wards\"",
    duration: "2 hours",
    objectives: [
      "Configure Row-Level Security (RLS) policies in a database",
      "Prevent unauthorized cross-user data leaks"
    ],
    warmUp: "The Snooping Neighbor: Tutor logs in as User A and tries to read User B's private messages. Discuss why client-side security is not enough.",
    miniLesson: "Row-Level Security (RLS): Securing data at the source (database level) rather than the delivery channel (app level). auth.uid() checks.",
    coreActivity: "Wards of Data Isolation: Write SQL database security policies (e.g. auth.uid() = user_id). Verify User A cannot read User B's rows.",
    handsOn: "Write SQL RLS policies in Sandbox ensuring database isolation limits are fully active.",
    homework: "Write security policies for a shared dashboard (anyone can view, only creators can edit).",
    ethics: "Data leakage liability: Corporate and personal legal liabilities of developer security gaps.",
    adaptations: "Age 9-10: Labeled lockers. Age 15-17: Audit database RLS tables using direct API scripts."
  },
  {
    id: "l4-s6",
    level: 4,
    module: "Module 2: User Access & Identity",
    title: "Session 6: \"Role-Based Access Control (RBAC)\"",
    duration: "2 hours",
    objectives: [
      "Implement permission tiers (e.g. Admin, Operator, Guest)",
      "Restrict UI features and API endpoints based on user roles"
    ],
    warmUp: "Who Has the Key?: Discuss why a standard user shouldn't be able to delete other users' accounts. Define RBAC.",
    miniLesson: "User Roles: Creating robust role tables, checking tokens, securing write actions at database and app level.",
    coreActivity: "The Permissions Matrix: Add a role column to profile tables. Write frontend routes restricting certain panels. Add database policies blocking guest writes.",
    handsOn: "Write a React component in Sandbox that restricts admin settings visibility based on user.role properties.",
    homework: "Outline a permission matrix for a banking app with Customer, Teller, and Audit roles.",
    ethics: "Privilege escalation: The security threats of users hijacking admin roles.",
    adaptations: "Age 9-10: Color coded keys for files. Age 15-17: Configure RBAC tables in postgres SQL."
  },
  {
    id: "l4-s7",
    level: 4,
    module: "Module 3: Cloud Infrastructure & Deployment",
    title: "Session 7: \"Git, Version Control & GitHub\"",
    duration: "2 hours",
    objectives: [
      "Commit and track code changes using Git",
      "Collaborate on repositories via pull requests on GitHub"
    ],
    warmUp: "Collaborative Storytelling: Pass a storybook around the room. Each writer appends a paragraph, maintaining version notes.",
    miniLesson: "Git workflow: init, add, commit, push, pull. GitHub collaboration: PRs, code reviews, resolving merge conflicts.",
    coreActivity: "The Repo Launch: Create local git repositories. Commit code shifts, push to remote GitHub repo, create a PR, and resolve merge conflicts.",
    handsOn: "Simulate a Git pull request review in Sandbox, resolving file conflicts manually.",
    homework: "Create a GitHub account and push one of your homework folders to a public repository.",
    ethics: "Open source community ethics: Contributing, licensing, and code ownership.",
    adaptations: "Age 9-10: Physical folder merging. Age 15-17: Setup SSH keys on GitHub accounts."
  },
  {
    id: "l4-s8",
    level: 4,
    module: "Module 3: Cloud Infrastructure & Deployment",
    title: "Session 8: \"Continuous Deployment (CI/CD) Pipelines\"",
    duration: "2 hours",
    objectives: [
      "Set up automatic deployment pipelines (Vercel, Netlify)",
      "Understand build processes and environment overrides on hosting providers"
    ],
    warmUp: "The Assembly Line: Trace raw parts entering a factory to a finished car exiting the line.",
    miniLesson: "CI/CD (Continuous Integration/Continuous Deployment): Trigger build on git push. Cloud hosting configs. Build time variables.",
    coreActivity: "Live Pipeline Launch: Link a GitHub repository to a Vercel project. Push a code change to Git, trace the build logs, and observe the live site update.",
    handsOn: "Draft a build pipeline config schema in Sandbox verifying environment variable bindings.",
    homework: "Deploy a personal landing page to Vercel/Netlify. Document the live URL.",
    ethics: "Service uptime: The ethical and business costs of system downtime during broken deployments.",
    adaptations: "Age 9-10: Simple visual pipeline maps. Age 15-17: Configure custom webhooks triggers."
  },
  {
    id: "l4-s9",
    level: 4,
    module: "Module 3: Cloud Infrastructure & Deployment",
    title: "Session 9: \"Monitoring and Error Diagnostics\"",
    duration: "2 hours",
    objectives: [
      "Inspect remote application error logs (Sentry, cloud logs)",
      "Diagnose client-side vs. server-side crashes in production"
    ],
    warmUp: "The Flight Recorder: Discuss why airplanes have black boxes. Discuss why systems need telemetry logs.",
    miniLesson: "Production telemetry: error tracking, server logs, network performance. Client-side exceptions vs database server failures.",
    coreActivity: "Production Crash Hunt: Inspect a live log feed of a crashing application. Locate the line of code failing and deploy a patch.",
    handsOn: "Diagnose a production error log trace in the Sandbox fuzzer logs and patch the source code logic.",
    homework: "Write a guide explaining the difference between a 400, 401, 403, and 500 error code. Provide debugging steps for each.",
    ethics: "Log privacy: Ensuring passwords and SSNs are never logged to third-party telemetry tools.",
    adaptations: "Age 9-10: Error code matching games. Age 15-17: Track production bugs using real Sentry consoles."
  },
  {
    id: "l4-s10",
    level: 4,
    module: "Module 4: Product Launch & Defense",
    title: "Session 10: \"Capstone Project Integration\"",
    duration: "2 hours",
    objectives: [
      "Connect frontend code to live database nodes and verify credentials security",
      "Coordinate full pipeline deployment"
    ],
    warmUp: "Integration checklist alignment: mapping connections across nodes.",
    miniLesson: "Integrations architecture: ensuring frontend API endpoints connect to secure backends with active RLS.",
    coreActivity: "Capstone Assembly Sprint: Integrate database tables, user auth flows, and live API endpoints into a unified hosted site.",
    handsOn: "Execute integration pipeline checks in the Sandbox.",
    homework: "Complete final QA testing checklist sheets for the capstone system.",
    ethics: "Safety reviews: Running security scans before pushing updates to users.",
    adaptations: "All Ages: Extended production sprint sessions."
  },
  {
    id: "l4-s11",
    level: 4,
    module: "Module 4: Product Launch & Defense",
    title: "Session 11: \"Load Testing & Code Quality Audit\"",
    duration: "2 hours",
    objectives: [
      "Run load testing scripts to evaluate performance under traffic",
      "Audit codebases for syntax quality and security gaps"
    ],
    warmUp: "The Rush Hour: Discuss how train stations handle holiday traffic rushes.",
    miniLesson: "Performance Audits: database indexes, bundle optimization, load testing. Linters (ESLint). Code quality standards.",
    coreActivity: "Auditing Sprint: Students run linting tools and database query analyzers on peer codebases to spot redundancies.",
    handsOn: "Run query optimization checks on Sandbox SQL statements.",
    homework: "Fix all warnings in project linters. Generate a Code Audit report.",
    ethics: "Accessibility standards: Ensuring software is accessible to users with visual/motor impairments (ADA compliance).",
    adaptations: "Age 9-10: Basic code spelling reviews. Age 15-17: Analyze bundle load graphs."
  },
  {
    id: "l4-s12",
    level: 4,
    module: "Module 4: Product Launch & Defense",
    title: "Session 12: \"The Grand Launch & System Defense\"",
    duration: "2 hours",
    objectives: [
      "Present a live deployed application with custom database states",
      "Defend product launch architecture against system critiques"
    ],
    warmUp: "Warm pitch practice: Presenting URLs in 60 seconds.",
    miniLesson: "Launch procedures: DNS configuration, production keys checks, rollback plans.",
    coreActivity: "The Grand Launch: Live demo presentations. Students present live sites, trigger data records, and defend system design.",
    handsOn: "Demonstrate live sandbox fuzzer passes for the capstone site.",
    homework: "Final course self-reflection journal entry: What makes you a Software Engineer?",
    ethics: "Algorithmic responsibility: The societal impacts of software systems.",
    adaptations: "All Ages: Live site presentations panel."
  }
];
