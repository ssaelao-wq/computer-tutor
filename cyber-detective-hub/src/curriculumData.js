// Detailed Curriculum Database for Levels 1 to 4
// Mapped from Computer_Tutor_AIEra_Improved_Curriculum.md

export const CURRICULUM_DATA = [
  // ================= LEVEL 1 =================
  {
    id: "l1-s1",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 1: \"Literal Logic & Digital Infiltration\"",
    duration: "2 hours",
    objectives: [
      "Understand that computers follow instructions sequentially, literally, and without common sense",
      "Identify the Input → Process → Output pattern in everyday digital systems",
      "Create sequential instruction lists in Sandbox simulation"
    ],
    warmUp: "Car Autopilot Roleplay: Tutor-student roleplay. Student gives step-by-step instructions to tutor to drive and park a vehicle. Tutor follows them strictly literally, demonstrating computer logical processing.",
    miniLesson: "The IPO Model: Trace Input → Process → Output. Variable concepts as labeled memory registers that hold one state value.",
    coreActivity: "Sequence Blueprinting: Student uses flowcharts inside the app to arrange command blocks (Check P/N, Press Brake, Start Engine, Shift D, Release Handbrake, release brake, press gas) in correct logical order.",
    handsOn: "Complete 5 sandbox tasks: (1) Basic Start & Move, (2) Reversing & Parking, (3) Sequence Correction, (4) Code Cleanup, (5) Emergency Halt.",
    homework: "Complete the \"Household IPO Blueprint\" in the app's Journal tab: Write a process to warm up food from a plate using a microwave. Identify preconditions, inputs, processing logic, and outputs (+50 XP).",
    ethics: "Autonomous Car Crash Responsibility: If an autonomous car crashes because of a logic error in its code, who is responsible — the coder, the company, or the operator?",
    adaptations: "Age 13-16: Use digital sandbox modules and audit terminal outputs. Discuss real IPO algorithms."
  },
  {
    id: "l1-s2",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 2: \"Starting the Game: HTML Structure & Basic Elements\"",
    duration: "2 hours",
    objectives: [
      "Understand how browsers structure documents using HTML tags",
      "Learn HTML syntax: elements, attributes, parent-child relationships, and classes",
      "Create the core layout structure for the Racing Car Game (track and player car containers)"
    ],
    warmUp: "HTML Selector Decoding Puzzle: Match scrambled HTML tags to visual layout blocks representing a highway track.",
    miniLesson: "The DOM Tree & Nested Nodes: Opening and closing tag pairs (div, h2, span). Opening/closing rules, attributes (ids, classes), DOM tree relationships.",
    coreActivity: "Racing Arena Layout Design: Sketch the game layout and design a prompt specification sheet outlining the HTML layout elements needed (track, player-car, scoreboard).",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops: (1) Plan & Design: Arena hierarchy, (2) Write Prompt: track container, (3) Review & Explain: unique selectors, (4) Test & Break: diagnosing unclosed HTML, (5) Iterate & Improve: adding lane-dividers, (6) Plan & Design: Dashboard nesting, (7) Write Prompt: Score HUD widget, (8) Review & Explain: h2-span nesting, (9) Test & Break: correcting DOM selector IDs, (10) Iterate & Improve: merging complete structures.",
    homework: "Garage Dashboard Builder: Create a simple HTML document containing a sidebar and main container layout representing a garage dashboard. Save to Journal under 'Session 2 Homework' (+50 XP).",
    ethics: "Semantic HTML Domino's Case: Why defining accessible text labels and proper semantic elements is a legal and ethical obligation under the ADA.",
    adaptations: "Age 13-16: Trace visual DOM trees using browser elements inspectors."
  },
  {
    id: "l1-s3",
    level: 1,
    module: "Module 1: Inputs, Processing, and Outputs",
    title: "Session 3: \"Styling the Track & Player Car: CSS Lanes & Visuals\"",
    duration: "2 hours",
    objectives: [
      "Write CSS rules using selectors (ID, Class, Element) and declaration blocks",
      "Understand absolute positioning coordinates (top, left, bottom, right) and relative positioning limits",
      "Style the highway lanes, lane dashes, and the player car dimensions"
    ],
    warmUp: "CSS Selector Matching Puzzle: Match CSS selector rules like #player-car or .obstacle to visual layout blocks on a screen.",
    miniLesson: "The CSS Box Model & Layout Flow: Content, padding, border, margins. Relative positioning on the parent track anchors child coordinate systems. Absolute positioning positions elements precisely.",
    coreActivity: "Lane Design Blueprint: Calculate coordinates and widths for a 3-lane highway (width 390px, 3 lanes of 130px each). Draft CSS positioning and boundaries.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops: (1) Plan & Design: dark track specs, (2) Write Prompt: track width/height/color, (3) Review & Explain: ID vs Class selectors, (4) Test & Break: diagnosing drifting absolute cars, (5) Iterate & Improve: lane divider styles, (6) Plan & Design: car X/Y coordinates, (7) Write Prompt: centering player-car, (8) Review & Explain: absolute coordinate values, (9) Test & Break: display utility debugging, (10) Iterate & Improve: scoreboard flex layout.",
    homework: "3-Lane Highway CSS styling: Style a 3-lane road with a dotted yellow center divider line. Save to Journal under 'Session 3 Homework' (+50 XP).",
    ethics: "Color Contrast UI Accessibility: Designing UI maps/dashboards using proper color contrasts and symbols for colorblind accessibility.",
    adaptations: "Age 13-16: Audit styling rules using browser style inspector panels."
  },
  {
    id: "l1-s4",
    level: 1,
    module: "Module 2: Game State, Input & Boundaries",
    title: "Session 4: \"Tracking Game State: JS Variables & Math\"",
    duration: "2 hours",
    objectives: [
      "Declare variables using `let` and `const` and explain data types (Strings, Numbers, Booleans)",
      "Model game variables: speed value, coordinate positions, scoring totals, and game states",
      "Perform mathematical updates on state variables"
    ],
    warmUp: "Variable Value Tracing: Trace variable values through progressive arithmetic code statements on a board worksheet, showing how computers evaluate the right-hand side of an assignment first, then write the result into the variable's memory box.",
    miniLesson: "Registers in Computer Memory: RAM storage boxes and `let` vs. `const` declarations. Data types (String, Number, Boolean). Assignment operators (`=`) and arithmetic increments (`+=`, `++`).",
    coreActivity: "Variable Specifications: Define a state mapping chart identifying every variable the racing game needs (e.g. `score` is a Number initialized to `0`, `gameActive` is a Boolean initialized to `false`), then prompt the AI to generate the `game.js` variable-declaration block and audit the primitive types it chose.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering the game's variable registry (`let`/`const`, data types, math increments). Socratic Debugging — The String Concatenation Trap: the tutor seeds a bug where `speed` is declared as a string (`let speed = \"10\";`); incrementing it (`speed += 5`) produces `\"105\"` instead of `15`. Fix the type declaration and explain why the browser stitched digits together instead of adding them.",
    homework: "In the Journal tab under 'Session 4 Homework', write a JS code snippet declaring variables for a player's `speed`, `laneIndex`, and `isCrashed`, then update them by driving 10 units faster and changing lanes (+50 XP).",
    ethics: "Client-Side Tampering: In 2012, the browser game 'Candy Box' stored its entire game state in client-side variables, letting players set unlimited candies via the console. If variables are exposed in global scope, a player can open DevTools and set `score = 99999` — how do we protect system state from user modification?",
    adaptations: "Age 13-16: Discuss why critical game state (like scores that unlock rewards) should eventually be validated server-side, not just trusted from the client."
  },
  {
    id: "l1-s5",
    level: 1,
    module: "Module 2: Game State, Input & Boundaries",
    title: "Session 5: \"Steering the Car: JS Keydown Event Listeners\"",
    duration: "2 hours",
    objectives: [
      "Understand event-driven programming and event listeners",
      "Capture keyboard inputs using JS event listeners (`keydown` events)",
      "Link keystrokes to updates in game state variables"
    ],
    warmUp: "Reverse Engineering — Dissecting a Live Game: open a working racing game in the browser with DevTools' Elements and Console tabs open, press arrow keys, and identify which event fires, which element property changes, and which function is being called.",
    miniLesson: "The Event Listener Loop: event listeners as triggers that fire functions on hardware actions. The Event Object parameter (`event.key`) reports the specific key pressed. Listeners are bound to the global `window` scope to intercept keyboard events.",
    coreActivity: "Input Controls Diagram: draw a logic flowchart connecting Arrow key presses to car position updates, then draft the input handler specification before prompting the AI to generate an event listener that checks for `\"ArrowLeft\"` or `\"ArrowRight\"`.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering keydown listeners, `event.key` checks, and live car steering in the preview. Socratic Debugging — The Silent Input Fail: the tutor disables the listener (omits `window.addEventListener`, or uses an incorrect key string like `\"left\"` instead of `\"ArrowLeft\"`). Trace the chain Keypress → Browser Event → Listener → Code execution to find and fix the broken link.",
    homework: "In the Journal tab under 'Session 5 Homework', write an event handler script that triggers an alert box reading 'Engine Started' when the student presses the 's' key (+50 XP).",
    ethics: "Alternative Inputs & Accessibility: Microsoft's Xbox Adaptive Controller (2018) was built for gamers with limited mobility, proving accessible input design expands markets rather than limiting them. If a player cannot press physical arrow keys, should we add on-screen click buttons as an alternate input?",
    adaptations: "Age 13-16: Extend the exercise to add on-screen button controls as a second, accessible input path alongside the keyboard listener."
  },
  {
    id: "l1-s6",
    level: 1,
    module: "Module 2: Game State, Input & Boundaries",
    title: "Session 6: \"Track Boundaries: JS Conditionals & Safety Guards\"",
    duration: "2 hours",
    objectives: [
      "Apply conditionals (`if`, `else if`, `else`) and comparison operators (`<`, `>`, `===`) to constrain values",
      "Construct boundary safety guards to prevent the player car from steering off the road",
      "Evaluate boundary-value conditions to predict execution outcomes"
    ],
    warmUp: "Boundary Value Analysis: evaluate a coordinate list against track limits to determine which values cross the left (`35px`) and right (`295px`) lane boundaries, tracing how boundary checkpoints detect violations.",
    miniLesson: "Gating Code with Conditions: logical comparison operators (`<`, `>`, `===`), boundary thresholds that keep values inside a `[min, max]` range, and clamping — snapping a value back when it goes out of bounds.",
    coreActivity: "Bounding Logic Blueprint: sketch the track's left/right lane coordinates (35px, 165px, 295px) and write pseudocode locks (e.g. 'if moving left would take carX below 35, block the movement'), then prompt the AI to generate boundary conditionals wrapping the lane-steering script.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering left/right lane guards (carX clamped to 35/295) and the speed-overheat clamp. Socratic Debugging — The Infinite Teleporting Bug: the tutor changes the boundary check from `carX > 35` to `carX >= -130`, causing the car to teleport off-screen. Trace what value `carX` actually reached and why the boundary guard failed to catch it.",
    homework: "In the Journal tab under 'Session 6 Homework', write a conditional validation block that checks if `speed` is greater than `120` (overheating threshold) and resets it to `100` if true, logging a warning (+50 XP).",
    ethics: "System Safety Checks: the Mars Climate Orbiter (1999) crashed because one team used metric units while another used imperial — a boundary-value mismatch that destroyed a $125 million spacecraft. Autonomous vehicles rely on boundaries to stay in lanes; why do developers write redundant checks?",
    adaptations: "Age 13-16: Discuss why safety-critical systems (like real autopilot lane-keeping) implement multiple redundant boundary checks instead of trusting a single condition."
  },
  {
    id: "l1-s7",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 7: \"Dashing Lanes & Highway Markers: JS Loops & Iteration\"",
    duration: "2 hours",
    objectives: [
      "Learn loop mechanics (`for` and `while` loops) and loop parameters",
      "Generate and render repeating track markers and obstacle items dynamically using loops",
      "Identify and prevent infinite loop crashes"
    ],
    warmUp: "Loop Iteration Tracing: determine the output variables after tracing several loop segments on paper, introducing loop counters, conditions, and increments.",
    miniLesson: "Automation through Loops: loop declarations (initializer, condition, update statement — `for (let i = 0; i < 5; i++)`), iterating over coordinate offsets to build rows/grids, and the danger of infinite loops when a condition never evaluates to false.",
    coreActivity: "Road Marker Spawning Plan: design the layout of repeating dashes down the middle of the road, draft the loop specification (e.g. 5 dashes spaced 120px apart), then prompt the AI to generate a loop that creates marker `div` elements dynamically on screen.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering `for` loop mechanics and dynamic marker generation. Socratic Debugging — Browser Freezes: the tutor triggers an infinite loop by removing the counter increment (`i++`). Identify the missing increment, restore it, and explain how many times the CPU executed the loop block before the fix.",
    homework: "In the Journal tab under 'Session 7 Homework', write a JS `for` loop that logs 'Highway Marker position: X' for positions incrementing by 50 up to 250 (+50 XP).",
    ethics: "Resource Efficiency: in 2020, a poorly optimized JavaScript animation loop on a major news website caused mobile devices to overheat and drain batteries within minutes. If a loop runs a million times a second to draw lanes, what happens to the user's battery?",
    adaptations: "Age 13-16: Discuss loop performance and Big-O intuition — why a nested loop over the same data set is more expensive than a single pass."
  },
  {
    id: "l1-s8",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 8: \"Defining Movement & Game Functions: JS Modular Code\"",
    duration: "2 hours",
    objectives: [
      "Declare and call JavaScript functions with parameters and return structures",
      "Organize game code into modular functions (`renderCar()`, `moveObstacles()`)",
      "Explain variable scope rules: global scope vs. local variables"
    ],
    warmUp: "Scope Trace Challenge: determine which variables are accessible inside functions vs. outside them, tracing accessibility across functions.",
    miniLesson: "Modular Program Design: function signatures (parameters and return data types), global vs. local scope blocks and variable isolation, and packaging repeated operations into reusable, readable actions.",
    coreActivity: "Modular Logic Decomposition: decompose the monolithic game script into a list of isolated, single-purpose functions, and draft each function's interface (inputs and outputs) before prompting the AI to refactor the variables and listeners into modular functions.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops refactoring steering logic into `updatePlayerPosition()`, `moveLeft()`, and `moveRight()`. Socratic Debugging — Scope Access Violations: the tutor declares a position variable inside a movement function, making it inaccessible to the rendering function (which logs `undefined`). Trace where the variable was declared and why its scope is restricted, then correct it.",
    homework: "In the Journal tab under 'Session 8 Homework', write a function `calculateScore(distance, speedMultiplier)` that multiplies its parameters, declares local variables, and returns the score value (+50 XP).",
    ethics: "Clean Code and Collaboration: the Heartbleed bug (2014) existed in OpenSSL for two years partly because the critical code was poorly structured and hard for reviewers to audit, affecting 17% of all secure web servers. Why is write-once, hard-to-read code a problem for engineering teams?",
    adaptations: "Age 13-16: Discuss code review practices — how a reviewer with only 10 minutes benefits from small, well-named functions over one long script."
  },
  {
    id: "l1-s9",
    level: 1,
    module: "Module 3: Problem Decomposition & The Logic Map",
    title: "Session 9: \"The Racing Game Loop: Timers & Animations\"",
    duration: "2 hours",
    objectives: [
      "Understand the concept of frame rates and game loops",
      "Animate obstacles moving down the track using `requestAnimationFrame`",
      "Manage persistent loop states (active, paused, game-over)"
    ],
    warmUp: "Animate the Dots: trace how coordinates update dynamically over time offsets, calculating the spacing steps needed to keep object movement smooth.",
    miniLesson: "Chronological Time Deltas & Frame Rates: the continuous paint cycle and frame-rate targets (60 FPS / 16.6ms per frame), the `requestAnimationFrame` recursion loop, and game-state gates that stop loop updates once a collision flag turns true.",
    coreActivity: "Game Engine Flowcharting: draw a lifecycle flowchart for the game state machine (Start → Update → Check Collision → Redraw → Loop), draft the loop controller's pseudocode, then prompt the AI to construct the core `loop()` function.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering the `requestAnimationFrame` game loop, the `gameActive` gate, and obstacle movement/reset. Socratic Debugging — The Unstoppable Speed Bug: the tutor breaks the recursion exit condition so the animation loop keeps executing after the game-over flag triggers true. Trace why positions keep updating on-screen even though the game says 'Game Over,' and restore the exit check.",
    homework: "In the Journal tab under 'Session 9 Homework', write a game loop structure with an active-check gate that prints 'Tick' to console, a recursive call, and a method to halt execution (+50 XP).",
    ethics: "Hook Loops and Addictive Patterns: Fortnite's 'Battle Pass' system and continuous reward loops have been linked to documented cases of gaming addiction in minors, prompting regulatory investigations. How do fast feedback loops in games keep users hooked, and what's our responsibility as designers?",
    adaptations: "Age 13-16: Discuss the ethics of tuning a game's reward loop for engagement vs. designing it for a satisfying, bounded play session."
  },
  {
    id: "l1-s10",
    level: 1,
    module: "Module 4: Collision Detection & Dashboard Systems",
    title: "Session 10: \"Collision Detection: Auditing AI Overlap Math\"",
    duration: "2 hours",
    objectives: [
      "Understand 2D rectangular collision math (AABB overlap equations)",
      "Code collision sensors comparing coordinate boundary boxes",
      "Integrate collision results to halt updates and trigger game-over sequences"
    ],
    warmUp: "Overlapping Box Coordinate Math: calculate overlap values for colliding boxes on grid paper, determining whether two boxes on a 2D coordinate system overlap.",
    miniLesson: "The Intersection Theorem: Axis-Aligned Bounding Box (AABB) collision checks comparing position and dimensions, finding each box's absolute `left`/`right`/`top`/`bottom` limits, and combining conditions with `&&` logic to declare an overlap.",
    coreActivity: "Collision Blueprint: draw bounding boxes and write the conditional statements that match an overlap condition, draft the parameter specification for the collision check, then prompt the AI to generate the collision-detection function.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering AABB overlap math and wiring `checkCollision()` into the game loop. Socratic Debugging — The Ghost Car Bug: the tutor introduces an error in a comparison operator (checking `>` instead of `<`, or swapping the X/Y axis parameters), so the obstacle drives right through the player car with no crash registered. Trace the coordinates at the moment of impact to find why the intersection formula failed.",
    homework: "In the Journal tab under 'Session 10 Homework', write a JS function `isOverlapping(x1, y1, w1, h1, x2, y2, w2, h2)` that returns a Boolean checking for bounding overlaps (+50 XP).",
    ethics: "Safety Failure Audits: Tesla's Autopilot failed to detect a white truck against a bright sky in 2016, causing a fatal collision — a real-world collision-detection failure. Why do developers write automated unit tests checking coordinates instead of trusting a manual play-test?",
    adaptations: "Age 13-16: Discuss why real autonomous-vehicle perception systems use multiple overlapping sensors (camera, radar, lidar) rather than a single detection method."
  },
  {
    id: "l1-s11",
    level: 1,
    module: "Module 4: Collision Detection & Dashboard Systems",
    title: "Session 11: \"The Dashboard & High-Score Counter: DOM Operations\"",
    duration: "2 hours",
    objectives: [
      "Select and manipulate HTML content using JS selector syntax (`document.getElementById`)",
      "Write defensive checks protecting parameters from invalid inputs (e.g. negative score totals)",
      "Update text and visibility properties dynamically in real time"
    ],
    warmUp: "DOM Link Matching: match DOM JS commands to their target text elements on the HTML structure sheet, tracing how elements are retrieved by ID.",
    miniLesson: "The Document API Bridge: linking code variables to visual text (`.textContent`), input validation and safe bounds-checking on visual updates, and toggling a `.hidden` class (via `classList.add`/`remove`) to show or hide the restart overlay.",
    coreActivity: "UI Wiring Blueprint: draw the data pipeline from state variables directly to their target HTML elements, draft the dashboard-update specification, then prompt the AI to generate the script that displays score, speed level, and the restart overlay.",
    handsOn: "Complete 10 Sandbox Exercises in two 5-step AI-Era loops covering `textContent` scoreboard updates, the hidden-class game-over overlay, and the Space-key restart flow. Socratic Debugging — Negative Values Leakage: the tutor introduces a bug where the score decrement can slide below zero. Insert a conditional guard clamping the lower bound, and explain why the scoreboard was showing 'score: -5' before the fix.",
    homework: "In the Journal tab under 'Session 11 Homework', write a script that updates a 'lane-alert' element to read 'Danger' when the player car's coordinate reaches the leftmost lane (35px) (+50 XP).",
    ethics: "Personal Data Storage: the Cambridge Analytica scandal (2018) showed how seemingly innocent user profile data (quiz answers, likes) could be weaponized at scale. When users enter usernames on a leaderboard, how do we protect their privacy and decide what not to collect?",
    adaptations: "Age 13-16: Discuss what leaderboard data (username only vs. full name/location) is actually necessary, applying data-minimization thinking to their own dashboard design."
  },
  {
    id: "l1-s12",
    level: 1,
    module: "Level 1 Assessment",
    title: "Session 12: \"The Technical Foundations Assessment\"",
    duration: "2 hours",
    objectives: [
      "Demonstrate mastery of the full racing-themed logic stack: DOM structure, CSS layout, variables, input, boundaries, loops, functions, animation, and collision math",
      "Diagnose and correct seeded logic bugs under time pressure",
      "Present and defend code design choices to a 'Malicious QA Officer'"
    ],
    warmUp: "Assessment Alignment: review the three-part assessment structure (Layout Builder, Lab Code Walkthrough, Diagnostic) inside the app before beginning.",
    miniLesson: "System Defense: how to present a logic blueprint clearly and defend it against edge-case fuzzer checks and pointed questions about boundary values.",
    coreActivity: "Part A — The Racing Game Layout Builder: in a clean environment, map the DOM element tags (Track, Car, Scoreboard), declare the styling properties for track lanes and car positions, write the variable declarations for score levels and coordinate bounds, and formulate the safety checks that clamp inputs to track limits.",
    handsOn: "Complete the 10 capstone Sandbox Exercises (CONFIG refactoring, difficulty scaling, final seeded diagnostic, reflection). Part B — The Lab Code Walkthrough: present three of your standalone session labs to the tutor (tutor's choice: one logic lab, one loop/function lab, one DOM/collision lab), who plays a 'Malicious QA Officer' questioning your coordinate logic and testing boundaries. Part C — In-App Code Diagnostic: trace a loop's increments to specify its final output indices, then debug a seeded collision-logic error where the overlap check returns incorrect matches.",
    homework: "Complete the self-audit reflection in the Journal tab under 'Session 12 Assessment': what surprised you about DOM trees and event bindings, how tracing variables helped you find logic bugs, and how writing prompts for game assets differed from conversational chats (+50 XP).",
    ethics: "Design Feedback: how to give and receive constructive critique on a logic blueprint and code — treating the 'Malicious QA Officer' review as collaborative auditing, not adversarial gatekeeping.",
    adaptations: "Age 13-16: Full digital presentation of the logic blueprint plus live fuzzer-testing logs, defended against the tutor's QA questioning."
  },

  // ================= LEVEL 2 =================
  {
    id: "l2-s1",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 1: \"Initializing the Defense Arena: Canvas & Coordinates\"",
    duration: "2 hours",
    objectives: [
      "Understand the difference between DOM-based layout and coordinate Canvas rendering",
      "Set up an interactive `<canvas>` element and retrieve its 2D drawing context",
      "Draw game shapes (colony shield blocks, player ship, lanes) using canvas draw APIs"
    ],
    warmUp: "Reverse Engineering — Inspecting a Canvas Game: open a working Space-Invaders-style game in the browser, open DevTools' Sources tab, and identify how the canvas is initialized, what draw commands render the player ship, and where the game loop function lives.",
    miniLesson: "The Canvas API vs. the DOM: the HTML5 `<canvas>` element as a pixel-array viewport, direct rendering commands (`fillRect()`, `clearRect()`, `stroke()`), and center-alignment vs. coordinate anchoring on canvas.",
    coreActivity: "Defense Grid Blueprint: define the canvas coordinate constraints (e.g. width 480px, height 600px), draft the canvas element spec sheet, then prompt the AI to generate the `canvas.js` initialization script and audit the context bindings it produced.",
    handsOn: "Socratic Debugging — The Overwriting Canvas: the tutor removes the `ctx.clearRect()` call from the draw loop, so the ship leaves a solid trail instead of moving cleanly. Explain the role of `clearRect` before drawing the next frame, and restore it.",
    homework: "In the Journal tab under 'Session 1 Homework', write a JS code snippet that draws a green defense shield block on a canvas using absolute context parameters (+50 XP).",
    ethics: "Color Associations in Systems Design: research shows red enemy indicators in military simulation games can increase aggression and dehumanize adversaries. Why are alien indicators typically colored red, and how do design decisions shape player aggression or anxiety?",
    adaptations: "Age 13-16: Compare Canvas's immediate-mode drawing model to the DOM's retained-mode model and discuss when each is the better tool."
  },
  {
    id: "l2-s2",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 2: \"Drawing and Animating Sprite Lists\"",
    duration: "2 hours",
    objectives: [
      "Declare JavaScript objects representing game sprites (player ship, aliens)",
      "Set up speed variables and update coordinate structures in real time",
      "Implement simple keyboard controls mapping keys to continuous motion increments"
    ],
    warmUp: "Object State Tracing: trace how object properties (e.g. `ship.x`, `ship.speed`) change as inputs are applied, showing that object literal values can be updated dynamically.",
    miniLesson: "Sprites as Object Literals: structuring sprite properties inside a JS object (`let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };`) and modifying those values inside the drawing cycle.",
    coreActivity: "Sprite Object Specs: outline a properties checklist for the Player and Enemy sprite classes, write their baseline object declarations, then prompt the AI to write a function that renders the `ship` object on the canvas context.",
    handsOn: "Socratic Debugging — Object Scope Mutation: the tutor introduces a local variable that shadows the global `ship` object inside the move handler, so moving fails silently. Trace which variable the key listener is actually targeting, then fix the scoping.",
    homework: "In the Journal tab under 'Session 2 Homework', declare an object named `alien` with properties for position `x`/`y`, health, and marching speed (+50 XP).",
    ethics: "Design Standardization: why do standard controls default to WASD and Arrow keys, and how do standardization choices affect inclusivity for new players?",
    adaptations: "Age 13-16: Extend the ship object with a `rotation` or `shieldsUp` property and discuss how growing object shape impacts every function that reads it."
  },
  {
    id: "l2-s3",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 3: \"The Laser Battery: Arrays of Sprites\"",
    duration: "2 hours",
    objectives: [
      "Declare JavaScript arrays and use array methods (`push()`, `pop()`) to store multiple items",
      "Model dynamic lists representing active lasers fired by the player ship",
      "Loop through sprite arrays to invoke rendering functions for each item"
    ],
    warmUp: "Array Queue Exercises: trace array lengths as items are added and removed in sequence, showing how arrays dynamically expand as items are pushed on.",
    miniLesson: "Arrays in Memory: arrays as index-ordered tables, push operations that append laser objects to the end of a list, and loops that iterate over every array element.",
    coreActivity: "Firing Logic Flowcharting: sketch how a spacebar press adds a laser object to the `lasers` array, draft the event-listener trigger conditions, then prompt the AI to write the keypress check that creates and pushes laser objects.",
    handsOn: "Socratic Debugging — The Laser Cannon Stutter: the tutor binds a `keydown` check that only fires on repeated key-down events instead of a continuous held-key check, so lasers stutter instead of auto-firing. Trace how browser key-repeat delay affects inputs and fix the key-state handling.",
    homework: "In the Journal tab under 'Session 3 Homework', write a loop that updates the `y` coordinate of every laser object inside an array of 3 lasers (+50 XP).",
    ethics: "Resource Caps in Software: early online games like Diablo II suffered item-duplication exploits that destroyed their economies. If players can fire infinite lasers, they can lag the browser — why must games enforce cooling-interval limits on weapon rates?",
    adaptations: "Age 13-16: Discuss how the same 'unbounded array growth' problem shows up in real backend systems (e.g. an unthrottled API endpoint)."
  },
  {
    id: "l2-s4",
    level: 2,
    module: "Module 1: Canvas Rendering & Sprite Collections",
    title: "Session 4: \"Laser Motion & Garbage Collection\"",
    duration: "2 hours",
    objectives: [
      "Move all laser elements dynamically by updating coordinates inside loop iterations",
      "Detect off-screen lasers crossing coordinate bounds (e.g. `y < 0`)",
      "Implement memory cleanup (pruning dead objects using `splice()`) to prevent resource leaks"
    ],
    warmUp: "Index Splice Analysis: trace array contents as items are spliced out, noting how the indices of remaining elements shift backward.",
    miniLesson: "Splicing Iterations & Memory Leaks: cleaning up coordinates that cross bounds, the index-shift trap (splicing during a forward loop skips adjacent elements), and reverse-loop iteration as the safe pattern for removing items.",
    coreActivity: "Garbage Collection Logic: blueprint the laser removal rule ('if y < 0, splice it'), write the cleanup loop's pseudocode, then prompt the AI to write a laser-updater loop with bounds checking and splice routines.",
    handsOn: "Socratic Debugging — The Splicing Skip Bug: the tutor changes the loop to iterate forward, so when multiple lasers exit off-screen in the same frame, only every other one gets deleted. Trace what happens to element indices after `splice()` is called, and switch the loop to count down from `lasers.length - 1`.",
    homework: "In the Journal tab under 'Session 4 Homework', write a reverse-iterating loop that checks an array of objects and deletes items where `status === \"dead\"` (+50 XP).",
    ethics: "Memory Optimization: the 2016 Cloudflare 'Cloudbleed' memory leak caused private data from one website to leak into another's responses, affecting millions of users. If backend servers fail to clean up dead sessions, what happens to performance and security?",
    adaptations: "Age 13-16: Connect client-side array pruning to server-side session/connection cleanup as the same underlying resource-management problem."
  },
  {
    id: "l2-s5",
    level: 2,
    module: "Module 2: Interaction, State & Performance",
    title: "Session 5: \"Alien Swarms & Shield Grids: Nested Arrays & Matrices\"",
    duration: "2 hours",
    objectives: [
      "Store grids of alien elements using multi-dimensional array tables",
      "Animate alien groups marching horizontally and vertically, bouncing at grid edges",
      "Map absolute pixel coordinates to grid cell indices to model destructible shield cells"
    ],
    warmUp: "Row/Column Grid Indexing: locate specific aliens using `[row][col]` index labels; then, on grid paper, erase the shield cells that intersect a drawn laser path, showing how absolute coordinates translate to grid columns.",
    miniLesson: "Multi-dimensional Arrays & Index Mapping: matrix grids as arrays containing child arrays, marching-delta loops with boundary-edge triggers, nested loops that access every grid element, and coordinate-to-index mapping (`col = Math.floor((x - offset) / cellWidth)`) for shield cells (`1 = full`, `0 = destroyed`).",
    coreActivity: "Swarm & Shield Blueprint: sketch the grid path ('move right; if edge reached, drop y and reverse marching direction'), then flowchart 'laser intersects shield bounds → find cell index → set cell to 0', then prompt the AI to generate the grid-generation function, the marching function, and a shield-cell lookup function.",
    handsOn: "Socratic Debugging — The Edge Stampede: the tutor disables the boundary indicators, so the alien grid slides completely off-screen; then seeds an off-by-one in the shield column formula so lasers 'hit' the wrong cell. Trace which conditional checks failed and correct the index math.",
    homework: "In the Journal tab under 'Session 5 Homework', write (1) a nested JS loop that prints a 3x3 grid of coordinate values `(row, col)`, and (2) the lookup equation mapping absolute screen X = 145 to a column index given `cellWidth = 50` and offset `100` (+50 XP).",
    ethics: "Drone Swarm Coordination: real robotic search swarms share boundary rules to avoid collisions. What checks must designers implement to prevent a swarm collision catastrophe?",
    adaptations: "Age 13-16: Extend the swarm grid to a non-uniform shape (e.g. a pyramid of aliens) and discuss how nested-loop bounds must adapt."
  },
  {
    id: "l2-s6",
    level: 2,
    module: "Module 2: Interaction, State & Performance",
    title: "Session 6: \"Firing Control: Keyboard Matrices & Collision Sweeps\"",
    duration: "2 hours",
    objectives: [
      "Maintain simultaneous input mappings using key-state map objects (`keydown` → `true`, `keyup` → `false`)",
      "Implement nested-loop collision sweeps (lasers array vs. aliens grid) with correct splice/break behavior",
      "Reason about sweep cost (O(N × M)) and early loop exits"
    ],
    warmUp: "Multiple Inputs Mapping: match keyboard trigger combinations (e.g. ArrowLeft + Space) to output states; then compare two coordinate lists to trace where overlaps occur between them.",
    miniLesson: "Input Matrices & Double Iteration: why single `keydown` listeners fail under simultaneous inputs, declaring a key-state map object (`keysPressed = {}`) with paired `keydown`/`keyup` listeners, sweeping a list of lasers against a grid of active aliens, and breaking loops early once a collision resolves true.",
    coreActivity: "Input & Sweep Blueprint: flowchart how input events toggle key-map values; then flowchart outer-loop-lasers → inner-loop-aliens → check overlap → mark alien dead, splice laser, break. Then prompt the AI to build the key-state listener matrix (`input.js`) and the nested collision-sweeper function.",
    handsOn: "Socratic Debugging — The Firing Spam Lock & The Multiple Kill Bug: the tutor removes the `keyup` handler (space key stuck `true`, infinite lasers), then removes the inner-loop `break` (one laser destroys a whole column in one frame). Trace both failures and restore the `keyup` mapping and the break statement.",
    homework: "In the Journal tab under 'Session 6 Homework', write (1) keydown/keyup logic tracking keys 'a', 'd', and 'w' in a state object, and (2) a nested loop checking overlaps between an array of 2 lasers and a grid of 4 aliens, logging hit locations (+50 XP).",
    ethics: "Input Rate Limits in Security: the 2014 iCloud celebrity photo hack exploited Apple's lack of login rate-limiting on the 'Find My iPhone' API to brute-force passwords. If login endpoints don't enforce input rate thresholds, how do event lockouts and cooling loops protect a system?",
    adaptations: "Age 13-16: Discuss why rate-limiting a login form is the same core pattern as cooling down a laser-fire loop — both cap how often an action can repeat."
  },
  {
    id: "l2-s7",
    level: 2,
    module: "Module 2: Interaction, State & Performance",
    title: "Session 7: \"Colony Status: Game States, HUD Gauges & Performance Audits\"",
    duration: "2 hours",
    objectives: [
      "Implement game-state machines handling wave increments and health counters",
      "Draw graphical HUD gauges (score text, wave counter, health bar) on canvas",
      "Identify and resolve memory leaks and frame drops caused by unbounded array growth"
    ],
    warmUp: "Stage Multipliers & Memory Footprint Trace: calculate speed/scoring outputs using progression formulas (e.g. `speedMultiplier = wave * 0.15`) by hand; then trace array-length counters across 100 simulated frames.",
    miniLesson: "State Machines & Profiling: wave-tracking variables and stage-clear triggers, dynamic drawing of HUD gauges (`fillText`, proportional health bars), garbage-collection pauses, loop optimization (caching lengths, minimizing allocations), and the DevTools Performance tab.",
    coreActivity: "State Machine & Optimization Checklist: sketch the state progression from stage-clear to wave-update; identify optimization candidates (laser-list splicing checks, collision checks); draft the scale formulas and safety constraints.",
    handsOn: "Socratic Debugging — The Infinite Spawn Loop & Out-of-Memory Crash: the tutor seeds a wave-count bug spawning infinite concurrent waves; then disables laser boundary pruning so 500 lasers accumulate and the frame rate crawls. Trace where the guard failed, and why the array's length log keeps climbing.",
    homework: "In the Journal tab under 'Session 7 Homework', write a conditional that checks if the active alien list is empty, increments the wave level, and doubles obstacle speed; then list 3 performance checkpoints you would monitor in a canvas game (+50 XP).",
    ethics: "Difficulty Scaling & Performance Equity: how do games use scaling mechanics to keep players hooked — and where is the line between fair challenge and manipulation? If developers only optimize for high-end laptops, how does that affect players on lower-end devices?",
    adaptations: "Age 13-16: Graph the speed-multiplier formula across waves and profile the game in DevTools' Performance tab to identify one real bottleneck function."
  },
  {
    id: "l2-s8",
    level: 2,
    module: "Module 3: Client-Server & Async APIs",
    title: "Session 8: \"Mission Control Uplink: How the Web Works\"",
    duration: "2 hours",
    objectives: [
      "Explain the client-server model: browsers as clients, servers as remote programs, and the request/response cycle",
      "Read the anatomy of an HTTP request (URL, method, headers, body) and response (status code, headers, JSON payload)",
      "Inspect real network traffic using the browser DevTools Network tab and interpret JSON payloads"
    ],
    warmUp: "The Radio Relay Roleplay: play 'Mars Colony' (client) and 'Mission Control' (server) — write request slips ('GET /supplies', 'POST /report + payload') and answer with response slips carrying status codes (200 OK, 404 Not Found, 500 Server Error).",
    miniLesson: "The Request/Response Cycle: clients vs. servers, what a URL's parts mean (protocol, host, path, query), HTTP methods (GET reads, POST writes), status-code families (2xx success, 4xx client error, 5xx server error), and JSON as the data language of APIs.",
    coreActivity: "API Contract Worksheet: design the 'contract' for a colony telemetry API on paper — endpoint paths, methods, and sample JSON responses (e.g. `GET /api/scores` returns `[{ \"player\": \"cdt_arya\", \"score\": 4200 }]`).",
    handsOn: "Guided Dissection — Network Tab Investigation: open a live site (and the platform itself) with DevTools' Network tab open. Identify real GET/POST requests, read their status codes, headers, and JSON responses. Socratic Debugging — The Wrong Address: after requesting a misspelled endpoint (404) and a malformed payload (4xx), explain which side is at fault for each failure.",
    homework: "In the Journal tab under 'Session 8 Homework', open any public website with the Network tab, pick one request, and document: the URL, the method, the status code, and a sketch of the response payload structure (+50 XP).",
    ethics: "Metadata & Surveillance: in 2018, fitness app Strava's public heatmap of user GPS requests inadvertently revealed the locations of secret military bases worldwide. Even without reading message contents, what can someone learn just from which servers your device talks to and how often?",
    adaptations: "Age 13-16: Compare the page URL in the address bar to the actual API request URLs listed in the Network tab, and discuss why they're often different."
  },
  {
    id: "l2-s9",
    level: 2,
    module: "Module 3: Client-Server & Async APIs",
    title: "Session 9: \"Asynchronous Telemetry: Interfacing Leaderboard APIs\"",
    duration: "2 hours",
    objectives: [
      "Read and explain asynchronous execution (Promises, async/await) vs. synchronous blocking code",
      "Write asynchronous fetch requests to retrieve live high-score records from a telemetry API",
      "Connect the fetch call to the request/response model from Session 8"
    ],
    warmUp: "Sync vs. Async Timelines: chronologically trace execution order in synchronous code vs. asynchronous code logs, comparing when callbacks actually fire.",
    miniLesson: "Asynchronous Pipelines & fetch: blocking vs. non-blocking execution paths, the request-response model in code (GET requests fetching remote JSON — recap Session 8's contract worksheet), and JS Promises with `async`/`await` syntax.",
    coreActivity: "API Telemetry Blueprint: sketch the data pipeline (request URL → server JSON response → parsed data array), draft the async function signature, then prompt the AI to write an async `fetchLeaderboard()` function querying the test endpoint.",
    handsOn: "Socratic Debugging — The Unresolved Promise: the tutor deletes the `await` keyword before the response-parse step, so the code logs `Promise <Pending>` instead of JSON. Trace what `await` actually tells the browser engine to do, then restore it.",
    homework: "In the Journal tab under 'Session 9 Homework', write an async JS function skeleton that fetches data from a mock endpoint and logs the response to the console (+50 XP).",
    ethics: "Server Load Boundaries: in 2023, X (formerly Twitter) imposed strict API rate limits after bots consumed excessive server resources, breaking the platform for legitimate users. If we fetched scores 60 times a second inside the game loop, what would happen to the server?",
    adaptations: "Age 13-16: Discuss polling vs. event-driven updates (e.g. WebSockets) as alternatives to fetching on every frame."
  },
  {
    id: "l2-s10",
    level: 2,
    module: "Module 3: Client-Server & Async APIs",
    title: "Session 10: \"Transmitting to Mission Control: POST, Payloads & Error Handling\"",
    duration: "2 hours",
    objectives: [
      "Compose HTTP POST requests sending JSON payloads to server endpoints",
      "Handle network communication exceptions and server errors using try/catch",
      "Validate submitted payload sizes to prevent server-side errors"
    ],
    warmUp: "Payload Structure Map: structure data parameters into a JSON object literal, writing out the object schema before sending it anywhere.",
    miniLesson: "Writing to Servers: POST requests and request-body payloads, try/catch blocks that capture connection drops, and checking server status (`response.ok` or status codes).",
    coreActivity: "Submission Pipeline Blueprint: flowchart 'player inputs name → build JSON payload → run POST request → verify response status', draft the payload template, then prompt the AI to write a `submitScore(name, score)` handler.",
    handsOn: "Socratic Debugging — Silent Network Drops: the tutor blocks the destination URL, so the page freezes silently on submit because there's no `catch` block. Wrap the fetch call in try/catch and explain how that protects the interface from breaking.",
    homework: "In the Journal tab under 'Session 10 Homework', write a JS fetch options object specifying a POST method, a JSON content-type header, and a body payload containing a test user score (+50 XP).",
    ethics: "Client-Side Integrity and Cheat Prevention: in 2011, hackers modified client-side price values on the Citibank mobile app to transfer funds at manipulated exchange rates, stealing over $2.7 million. If scores are sent from the client, how do we prevent users from forging request packets to post fake scores? (This question is answered properly in Sessions 11–12: the server and its database must validate everything.)",
    adaptations: "Age 13-16: Discuss server-side score validation (e.g. recomputing score from a replay log) as the real-world fix for client-side score forgery."
  },
  {
    id: "l2-s11",
    level: 2,
    module: "Module 4: Database Fundamentals & Data Security",
    title: "Session 11: \"The Colony Data Vault: Tables, Schemas & SQL Queries\"",
    duration: "2 hours",
    objectives: [
      "Explain why persistent data lives in a database on the server, not in client variables",
      "Design a simple relational table (columns, data types, primary key) for colony records",
      "Read and write basic SQL: CREATE TABLE, INSERT, SELECT with WHERE and ORDER BY"
    ],
    warmUp: "The Paper Registry: 'query' a set of colony records scribbled on loose notes by hand (e.g. 'find all colonists with score above 4000'), experiencing how painful unstructured data is.",
    miniLesson: "Relational Tables: tables, rows, columns, and data types (INT, VARCHAR, BOOLEAN, TIMESTAMP); primary keys as unique row identities; where the database sits in the Session 8 diagram (client → server → database — the server is the only one who talks to the vault).",
    coreActivity: "Schema Blueprint: design a `colonist_scores` table on paper — choose columns, types, and the primary key — then draft two sample rows.",
    handsOn: "SQL Playground: create the table, insert 5 rows, and run progressive queries (`SELECT *`, `WHERE score > 4000`, `ORDER BY score DESC`, an `UPDATE` of one row). Socratic Debugging — The Query That Lies: the tutor seeds a wrong-comparison query and a `WHERE`-less `UPDATE` that overwrites every row — identify why the results are wrong and repair both.",
    homework: "In the Journal tab under 'Session 11 Homework', write the SQL to (1) create a `supply_inventory` table with an id primary key, item name, and quantity, (2) insert two items, and (3) select all items with quantity below 10 (+50 XP).",
    ethics: "Data Retention: in 2017, Equifax's breach exposed the stored personal records of 147 million people — data many argued should never have been retained in one place. Our scores table stores player names — should it store birthdays? Addresses? What is the cost of every extra column we keep?",
    adaptations: "Age 13-16: Discuss what fields a real leaderboard service would refuse to collect at all, not just how to protect the ones it does."
  },
  {
    id: "l2-s12",
    level: 2,
    module: "Module 4: Database Fundamentals & Data Security",
    title: "Session 12: \"Defending the Data Vault: Validation, Passwords & Injection Awareness\"",
    duration: "2 hours",
    objectives: [
      "Explain why the server must never trust client input, connecting Session 10's cheat discussion to the database layer",
      "Describe how passwords are stored safely (hashing, never plaintext) at an awareness level",
      "Recognize SQL injection in a query built by string concatenation, and explain parameterized queries as the defense"
    ],
    warmUp: "The Forged Supply Slip: replay Session 8's radio relay, but now play a hostile colonist who edits request slips ('quantity: -50', a name field containing `'; DROP TABLE...`) — the server received well-formed requests, but the content was the attack.",
    miniLesson: "The Trust Boundary: client input as hostile territory (range/type/length checks on the server); password storage awareness (why databases store hashes, not passwords); SQL injection — how gluing user text into a query string changes the query's meaning — and parameterized queries as the professional fix.",
    coreActivity: "Validation Rulebook: for the `colonist_scores` table from Session 11, write the validation rules the server must apply before any `INSERT` (name length, score range, allowed characters) as a field → rule → rejection-message table.",
    handsOn: "SQL Playground + Guided Demo: the tutor demonstrates a login-style query built by string concatenation and shows how `' OR '1'='1` changes its meaning; the student then rewrites it in parameterized form and re-tests the hostile input. Socratic Debugging — The Negative Supply Heist: a purchase of quantity -5 adds stock and refunds credits — write the validation rule that closes the hole.",
    homework: "In the Journal tab under 'Session 12 Homework', write the validation rulebook for a `register_colonist` form (username, password, age) and one sentence explaining why the password column should never contain the password itself (+50 XP).",
    ethics: "Responsible Disclosure: in 2021, a researcher who reported a flaw exposing millions of records via a state website was initially threatened with prosecution — sparking a national debate over disclosure policy. If you discover a score-tampering hole in a real game's API, what is the ethical action?",
    adaptations: "Age 13-16: Keep all injection demonstrations inside the sandboxed playground on throwaway tables — the framing stays defensive throughout, matching the platform's Cyber Detective identity."
  },
  {
    id: "l2-s13",
    level: 2,
    module: "Level 2 Assessment",
    title: "Session 13: \"Graduation Sprint & Level 2 Defense\"",
    duration: "2 hours",
    objectives: [
      "Demonstrate mastery across all four modules: data structures & canvas, state & performance, client-server & async, and database fundamentals",
      "Diagnose and patch seeded syntax or logic glitches across the level's lab types",
      "Defend data-structure choices, async flows, and validation rules in a walkthrough"
    ],
    warmUp: "Final QA Sweeps: re-run three prior labs of the tutor's choosing and document any bugs before the assessment begins.",
    miniLesson: "Assessment Structure: Part A builds/verifies a working stack of standalone snippets (canvas init, sprite array with pruning, input matrix, nested collision sweep, async leaderboard fetch); Part B is a tutor-led systems walkthrough covering coordinate math, memory cleanup, the request/response cycle, and schema/validation rules; Part C is a timed diagnostic challenge.",
    coreActivity: "Part A — The Mars Defense Assembler: in a clean lab environment, build and verify canvas initialization, a sprite array with pruning, an input-state matrix, a nested collision sweep, and an async leaderboard fetch — each as a working standalone snippet.",
    handsOn: "Part B — The Systems Walkthrough: walk the tutor through your completed labs, explaining coordinate calculations, memory-cleanup loops, the request/response cycle of the fetch labs, and the schema + validation rules from the database labs. Part C — Diagnostic Challenges: locate and patch a seeded bug in (a) an asynchronous request handler or array-splice statement, and (b) a SQL query (wrong WHERE logic or an injection-vulnerable concatenation).",
    homework: "Complete the self-audit reflection in the Journal tab under 'Session 13 Assessment' summarizing what broke during QA, what you patched, and how confidently you could defend your data-structure, async, and database-security choices (+50 XP).",
    ethics: "Professional Defense: treating the tutor's code-walkthrough questioning as collaborative auditing rather than adversarial gatekeeping — the same posture a real code review requires.",
    adaptations: "Age 13-16: Full live walkthrough of all four modules plus a recorded code-walkthrough defense."
  },

  // ================= LEVEL 3 =================
  {
    id: "l3-s1",
    level: 3,
    module: "Module 1: From Idea to Plan",
    title: "Session 1: \"How Software Gets Built: The Development Lifecycle\"",
    duration: "2 hours",
    objectives: [
      "Describe the phases of a software project: requirements → design → build → test → deploy → iterate",
      "Map the 5-Step AI-Era loop (Plan → Prompt → Review → Test → Iterate) onto the professional lifecycle",
      "Explore the finished Hacker Arena demo as users and as reverse-engineers, and state what will be built"
    ],
    warmUp: "Play the Finished Product: the tutor demos their own completed Hacker Arena build — the student plays it (registers, logs in, buys a tool, sees credits drop) before writing a line of the project's own code.",
    miniLesson: "The Lifecycle & The Loop: the lifecycle phases and why order matters (requirements before design, design before code), the 5-Step AI loop as the inner cycle that runs inside every build phase, and engineering roles (product, frontend, backend, DBA, QA, DevOps) that the student plays solo, guided.",
    coreActivity: "Demo Deconstruction & Project Charter: with DevTools open, map the demo's moving parts (which requests fire on login? on purchase? where must a database be involved?) and draft a first-guess component list, then write a one-page Project Charter and prompt the AI IDE to critique it for vagueness before tightening it.",
    handsOn: "Socratic Debrief — The Skipped-Phase Disaster: the tutor tells a war story of a team that started coding with no requirements and shipped the wrong product. Explain why the code worked perfectly yet the project still failed, and which phase was skipped.",
    homework: "In the Journal tab under 'Session 1 Homework', write the lifecycle phases in order, and for each phase, one sentence on what the Hacker Arena will need in that phase (+50 XP).",
    ethics: "Building the Right Thing: in 2013, HealthCare.gov launched after skipping integration testing phases under deadline pressure, collapsing on day one under real users — a $1.7B lesson in process discipline. Who gets hurt when engineers skip process steps to go faster? When is 'move fast' irresponsible?",
    adaptations: "Age 13-16: Full reverse-engineering pass on the demo plus an independently drafted Project Charter, defended against AI critique."
  },
  {
    id: "l3-s2",
    level: 3,
    module: "Module 1: From Idea to Plan",
    title: "Session 2: \"Mission Briefing: Requirements & the PRD\"",
    duration: "2 hours",
    objectives: [
      "Turn a vague product idea into user stories with acceptance criteria",
      "Prioritize scope with Must/Should/Could (MoSCoW) and defend the cut line",
      "Produce the Hacker Arena PRD — the document every later session will be audited against"
    ],
    warmUp: "The Ambiguous Client: the tutor plays a client who says only 'I want a cool hacker game with shopping.' The student must extract requirements by asking questions; the tutor answers only what is asked — requirements are pulled, not given.",
    miniLesson: "User Stories & Acceptance Criteria: the story template (As a [player], I want [to buy a tool] so that [my deck gets stronger]), acceptance criteria as testable statements, and MoSCoW prioritization — why 'Could' features die first.",
    coreActivity: "PRD Drafting & Hardening: draft the Hacker Arena PRD skeleton (goal, users, 6–10 user stories, priorities, out-of-scope list), marking each story Must/Should/Could with acceptance criteria for every Must, then prompt the AI to attack the PRD for untestable criteria, hidden assumptions, and missing failure cases before revising.",
    handsOn: "Socratic Debugging — The Untestable Requirement: the tutor plants a requirement like 'the login should be fast and secure.' Rewrite it into measurable criteria (responds within N ms; passwords hashed; lockout after N failures) — if a tester can't prove it done, what is it?",
    homework: "In the Journal tab under 'Session 2 Homework', write two additional user stories for the Hacker Arena (one Must, one Could) with acceptance criteria, and one sentence defending why each sits at that priority (+50 XP).",
    ethics: "Scope Honesty: a client asks for 20 features in the time 8 fit. Is it more ethical to promise everything and fail quietly, or to negotiate the cut line up front? What do engineers owe non-technical stakeholders?",
    adaptations: "Age 13-16: Full PRD draft with at least 8 user stories and a defended MoSCoW cut line."
  },
  {
    id: "l3-s3",
    level: 3,
    module: "Module 1: From Idea to Plan",
    title: "Session 3: \"System Design: Architecture Blueprints\"",
    duration: "2 hours",
    objectives: [
      "Draw the three-tier architecture (client → Express server → MySQL) and trace each PRD story through it",
      "Design the relational schema (`players`, `hacking_tools`, `inventories`) with primary/foreign keys",
      "Draft the API contract: endpoints, methods, payloads, status codes — before any code exists"
    ],
    warmUp: "Relational Schema Match: using the in-app diagramming tool, connect hacking tools to players via primary- and foreign-key nodes — the schema is the load-bearing wall, cheaper to move now, on paper, than after data exists.",
    miniLesson: "Designing Before Building: component diagrams (what talks to what, and what is forbidden — the client never touches the DB), relational modeling (one-to-many, many-to-many, constraints), and API contracts as promises written down before implementation.",
    coreActivity: "The Arena Blueprint: design tables for `players`, `hacking_tools` (id, name, speed_rating, cost), and `inventories` (player_id, tool_id), mapping every PRD Must-story to endpoints, then prompt the AI to generate the SQL schema and audit it against the blueprint's keys, constraints, and types.",
    handsOn: "Socratic Debugging — The Floating Record: the tutor removes the foreign-key constraint on `inventories`; a deleted player's inventory rows are left stranded. Explain why the database still lists tools for a player who no longer exists, then restore the constraint.",
    homework: "In the Journal tab under 'Session 3 Homework', sketch a 3-table relational schema for a virtual card marketplace, indicating primary and foreign keys, and list its API contract (4+ endpoints with methods and status codes) (+50 XP).",
    ethics: "Data Privacy & Sensitivity Classification: the 2017 Equifax breach exposed 147 million people's data because sensitive fields lacked adequate access controls. In our schema, what is public (tool list) vs. private (inventories, credentials), and why must classification happen at design time, not after launch?",
    adaptations: "Age 13-16: Full schema + API contract draft, audited against the AI-generated SQL for deviations."
  },
  {
    id: "l3-s4",
    level: 3,
    module: "Module 1: From Idea to Plan",
    title: "Session 4: \"Base Camp: Git, Repos & the Workspace\"",
    duration: "2 hours",
    objectives: [
      "Initialize the project repository: `git init`, `git add`, `git commit`, and connect it to GitHub with `git push`",
      "Structure the workspace (frontend/, server/, db/) and protect secrets with `.gitignore` + `.env`",
      "Stand up the local MySQL server (Servbay/XAMPP) and apply the Session 3 schema"
    ],
    warmUp: "The Time Machine Demo: the tutor breaks a file in a demo repo, then restores it instantly from history, then shows the commit log of a real open-source project — version control is the profession's undo button and its diary.",
    miniLesson: "Repositories & Secrets: the commit as a snapshot and the staging area, remote repos (push/pull) and why the platform will read this repo for code review from Session 6 onward, and secrets containment (`.env`, `process.env`, `.gitignore`) — credentials must never enter history.",
    coreActivity: "Workspace Layout & Base Camp: plan the folder structure and what gets committed vs. ignored, draft the `.gitignore` list and `.env` key template, then run `git init`, make the initial commit, create the GitHub repo, push, install/start MySQL via Servbay, create the database, and apply the Session 3 schema.",
    handsOn: "Socratic Debugging — The Leaked Key: in a throwaway demo repo, the tutor commits a fake API key, then deletes it in a later commit — and shows it still visible in history. The key is gone from the file; is it gone from the repo? What must happen once a real secret is pushed?",
    homework: "In the Journal tab under 'Session 4 Homework', write the exact command sequence to stage and commit a change and push it to GitHub, plus a mock `.env` with 3 secrets and the code line that loads one of them (+50 XP).",
    ethics: "Code Leakage & AI Tools: in 2022, a Samsung engineer pasted proprietary source code into ChatGPT, exposing trade secrets — prompts are disclosures. What belongs in an AI prompt, and what never does?",
    adaptations: "Age 13-16: Full repo + local MySQL setup, verified live on GitHub with a clean commit history and no leaked `.env`."
  },
  {
    id: "l3-s5",
    level: 3,
    module: "Module 2: The Build Loop",
    title: "Session 5: \"Build Loop I: Feature Specs & Prompting at Project Scale — The Login Gate\"",
    duration: "2 hours",
    objectives: [
      "Convert a PRD story into a feature spec an AI IDE can implement inside an existing codebase",
      "Build the register/login flow: forms → POST routes → hashed passwords (bcrypt) → MySQL",
      "Commit the feature with a message linked to its PRD story"
    ],
    warmUp: "Password Hashing Trace: compare raw password strings with their hashed equivalents — a recap of Level 2 Session 12 awareness, now made real.",
    miniLesson: "The Feature Spec: anatomy of a feature spec (story reference, files affected, inputs/outputs, constraints, out-of-scope), prompting inside a codebase (giving the AI the schema, contract, and constraints — context is the difference between project code and generic code), and the auth chain (form → POST → validate → hash (bcrypt) → INSERT; login compares hashes, never plaintext).",
    coreActivity: "Spec the Login Gate: write the feature spec for register + login from the PRD's Must stories, including failure behaviors (duplicate username, short password), then run the spec through the AI IDE, audit output against spec/schema/contract, and fix deviations via follow-up prompts.",
    handsOn: "Socratic Debugging — The Plaintext Leak: the tutor swaps the hash call for direct string insertion. If attackers dump the table tonight, what do they have — and whose fault is it? Why is hashing non-negotiable even in a class project?",
    homework: "In the Journal tab under 'Session 5 Homework', write a feature spec (story, files, I/O, constraints, out-of-scope) for a 'change password' endpoint — spec only, no code (+50 XP).",
    ethics: "Credential Reuse: LinkedIn's 2012 breach exposed 6.5M unsalted SHA-1 hashes, cracked within hours. Users reuse passwords — what does that make every credentials table, and every developer who stores one?",
    adaptations: "Age 13-16: Full register/login implementation with a PRD-linked commit message."
  },
  {
    id: "l3-s6",
    level: 3,
    module: "Module 2: The Build Loop",
    title: "Session 6: \"Build Loop II: Diff-Based Code Review — The Tool Shop API\"",
    duration: "2 hours",
    objectives: [
      "Review code as professionals do: by diff, not by full file — using the platform's \"Sync Latest Code\" `git diff` view",
      "Build the tool-catalog and inventory endpoints (`GET /tools`, `GET /inventory`, JOIN query)",
      "Apply a review checklist (correctness vs. spec, security, naming, dead code) and annotate findings"
    ],
    warmUp: "Spot the Change: two near-identical 60-line files on screen; hunt differences by eye for 3 painful minutes, then see the same pair as a colour-coded diff — nobody reviews by rereading everything.",
    miniLesson: "Reading Diffs: diff anatomy (additions, deletions, context lines, file headers), the review checklist (does it match the spec? does it trust client input? is anything changed the spec didn't ask for?), and the platform workflow (commit → \"Sync Latest Code\" → annotate the diff → TA/tutor cross-check).",
    coreActivity: "Spec the Shop: write the feature spec for `GET /tools` and `GET /inventory` (the JOIN across `inventories`/`players`/`hacking_tools`) per the API contract, implement via the AI IDE, commit, sync into the platform, and review the diff line-by-line with the checklist, annotating at least three findings.",
    handsOn: "Socratic Debugging — The Smuggled Change: the tutor's prepared diff contains one line the spec never asked for (an extra route, or a widened WHERE clause). The feature works — so why is this diff dangerous to approve? What does 'out of scope' mean in a review?",
    homework: "In the Journal tab under 'Session 6 Homework', review the provided 20-line diff (seeded with one spec deviation and one unsafe query) and write your findings as review comments (+50 XP).",
    ethics: "Review Accountability: if you approve a diff without reading it and it ships a security hole, who is responsible — the author, the AI, or the approver? What does your approval actually certify?",
    adaptations: "Age 13-16: Full diff review with at least three annotated findings, one of which must be a security concern."
  },
  {
    id: "l3-s7",
    level: 3,
    module: "Module 2: The Build Loop",
    title: "Session 7: \"Build Loop III: Test Plans & Break-It QA — The Zero-Trust Server\"",
    duration: "2 hours",
    objectives: [
      "Write a test plan before building: happy path, boundary cases, hostile cases, expected status codes",
      "Build server-side validation guards (types, ranges, existence) returning correct 400/401/404 codes",
      "Execute the plan, log pass/fail results, and treat every fail as a work item"
    ],
    warmUp: "Parameter Sanity Checks: audit a mock request payload to find values that could corrupt the DB (string cost, negative quantity, 10,000-character username).",
    miniLesson: "Testing as a Plan, Not a Vibe: the test-case table (input → expected result → actual result → pass/fail), the zero-trust backend (frontend validation is UX, server validation is security), and status code discipline (400 bad input, 401 unauthenticated, 404 missing, 500 = our bug).",
    coreActivity: "The Test Plan: write the validation spec and 10+ test cases for `POST /purchase` inputs before any implementation, including hostile cases, then implement validation guards via the AI IDE, audit, and execute the full test plan against the running server, logging results in the platform's test checklist.",
    handsOn: "Socratic Debugging — The Free Credits Hack: the tutor removes price validation; a payload with cost `-100` increases the player's balance. Every line executed correctly — where is the bug? What assumption did the code make about the client?",
    homework: "In the Journal tab under 'Session 7 Homework', write a 6-case test plan (2 happy, 2 boundary, 2 hostile) for the login endpoint, with expected status codes (+50 XP).",
    ethics: "Exploits & Blame: if validation has holes and players exploit them, is it the player's fault or the coder's? Does 'nobody would ever send that' survive contact with the internet?",
    adaptations: "Age 13-16: Full 10+ case test plan with server-side guards passing the entire table."
  },
  {
    id: "l3-s8",
    level: 3,
    module: "Module 2: The Build Loop",
    title: "Session 8: \"Build Loop IV: Debugging & Iteration Cycles — The Atomic Purchase\"",
    duration: "2 hours",
    objectives: [
      "Apply a debugging protocol: reproduce → isolate → hypothesize → fix → re-test → log",
      "Implement the credit-to-item purchase as a database transaction (BEGIN/COMMIT/ROLLBACK)",
      "Maintain an iteration log connecting each bug to its root cause and fix commit"
    ],
    warmUp: "Partial Write Simulation: walk through a purchase where the server takes credits, then crashes before granting the tool. Where did the credits go?",
    miniLesson: "Debugging as Process + ACID: the debugging protocol (and why 'change things until it works' is not debugging), atomicity (all queries succeed or all roll back; `BEGIN`/`COMMIT`/`ROLLBACK`), and the iteration log (Step 5 of the loop) as an engineering artifact: symptom → root cause → fix → commit hash.",
    coreActivity: "Transaction Flowchart: draw the purchase flow with rollback triggers (insufficient credits, missing tool, mid-write crash), then implement the transactional purchase via the AI IDE; the tutor activates two seeded bugs in a provided branch for the student to run the full debugging protocol on.",
    handsOn: "Socratic Debugging — The Credit Theft Glitch: a simulated crash mid-purchase deducts credits without granting the card, with no rollback. Why did the player lose credits and get nothing? How does BEGIN/COMMIT make this impossible?",
    homework: "In the Journal tab under 'Session 8 Homework', write a JS transaction script: BEGIN, check credits, deduct, insert item, COMMIT — with ROLLBACK on error — plus one iteration-log entry for a bug you fixed this week (+50 XP).",
    ethics: "Transaction Integrity: Knight Capital (2012) lost $440M in 45 minutes to a deployment/rollback failure executing 4 million unintended trades. Why is atomic rollback mandatory in money systems?",
    adaptations: "Age 13-16: Debug both seeded bugs independently with full iteration-log entries naming root causes, not symptoms."
  },
  {
    id: "l3-s9",
    level: 3,
    module: "Module 2: The Build Loop",
    title: "Session 9: \"Build Loop V: Branches, Merges & Pull Requests\"",
    duration: "2 hours",
    objectives: [
      "Develop a feature on a branch (`git checkout -b`), push it, and open a Pull Request",
      "Resolve a merge conflict deliberately (read markers, choose lines, re-test, commit)",
      "Review a PR diff with the Session 6 checklist — the level's review mechanism now escalates from raw diffs to PRs"
    ],
    warmUp: "Merge Conflict Match: identify Git conflict markers (`<<<<<<< HEAD` vs. `>>>>>>> branch`) and choose the correct resolution lines.",
    miniLesson: "Branch Workflow: why branches exist (main stays shippable; work happens on the side), the PR as a reviewable unit of change tied to its PRD story, and the lifecycle (branch → commits → push → PR → review → merge).",
    coreActivity: "Feature Branch Plan: pick a Should-priority PRD feature (e.g., credit balance display, inventory sorting), spec it, and plan the branch name and PR description, then build it on the branch via the AI IDE, push, open the PR, and review your own diff on GitHub with the checklist.",
    handsOn: "Socratic Debugging — The Scrambled Merge Crash: the server crashes on startup because conflict markers were committed into a code file. What are these `<<<<<<<` lines? Why did Git refuse to decide for you?",
    homework: "In the Journal tab under 'Session 9 Homework', list the git commands to create a feature branch, push it, and merge it back to main after review — and write a model PR description (what/why/how tested) for this week's feature (+50 XP).",
    ethics: "Team Memory: a year from now, someone reads your PR description to understand why this change exists. What do you owe that future reader? What does a useless description ('fixed stuff') cost a team?",
    adaptations: "Age 13-16: Full branch → PR → conflict resolution → merge cycle with a real, well-written PR description."
  },
  {
    id: "l3-s10",
    level: 3,
    module: "Module 3: Integrate, Deploy & Polish",
    title: "Session 10: \"The Integration Sprint: End-to-End Data Flows\"",
    duration: "2 hours",
    objectives: [
      "Verify every PRD Must-story end-to-end: Frontend form → Express route → validation → transaction → DB write → response → UI update",
      "Resolve integration bugs that live between components (mismatched payload keys, wrong status handling)",
      "Enforce per-user data isolation: players can read everyone's tool catalog but only their own inventory"
    ],
    warmUp: "Integration Checkpoints Map: outline the full data-flow checklist for the purchase story, marking every boundary a bug could hide behind.",
    miniLesson: "Integration & Isolation: why components that pass their own tests still fail together (contracts drift), data isolation (every inventory query filters by the authenticated player id — never one the client supplied), and Row-Level Security as the professional belt-and-braces layer (awareness).",
    coreActivity: "The Integration Sprint: run every Must-story end-to-end against the checklist, fixing gaps and verifying tables initialized, env keys loaded, and isolation filters active — commit fixes with story-referenced messages.",
    handsOn: "Cross-User Attack Drill: log in as player A and attempt to fetch/modify player B's inventory by editing request payloads (DevTools) — every attempt must fail with 401/403. Why must the server take the player id from the session and not from the request body?",
    homework: "In the Journal tab under 'Session 10 Homework', write a QA integration log summarizing test outputs for your registration and tool-purchase flows (statuses observed, bugs found, commits that fixed them) (+50 XP).",
    ethics: "Mass Data Leaks: the 2019 Capital One breach exposed 106 million records via a single misconfigured access rule. One forgotten isolation filter = every user's data — why do professionals enforce isolation in more than one layer?",
    adaptations: "Age 13-16: Full end-to-end sweep plus a logged cross-user attack drill with at least one rejected attempt."
  },
  {
    id: "l3-s11",
    level: 3,
    module: "Module 3: Integrate, Deploy & Polish",
    title: "Session 11: \"Ship It: Deploying to the Cloud\"",
    duration: "2 hours",
    objectives: [
      "Understand hosting architectures: static client hosting vs. server hosting vs. managed databases",
      "Deploy the Arena's backend and database to a cloud platform, binding production environment variables",
      "Verify the deployed system with the Session 7 test plan re-run against the live URL"
    ],
    warmUp: "Hosting Options Map: match application elements (client code, Express server, MySQL data) to hosting types (CDN, container/dyno, managed DB).",
    miniLesson: "Cloud Infrastructure Models: local vs. production (what changes — URLs, credentials, data — and what must not — code), deployment pipelines triggering builds on git push events, and binding live environment variables in the cloud dashboard.",
    coreActivity: "Deployment Blueprint: map production connections (client fetches live server URL; server reads cloud DB credentials from the environment), draft the production env-var list and a rollback plan, then prompt the AI to generate the deployment config, deploy, and re-run the Session 7 test plan against the live URL.",
    handsOn: "Socratic Debugging — The Broken Cloud Connection: the tutor deletes the server's cloud DB host variable; the live site throws connection timeouts while localhost works perfectly. It works on your machine — why not in production?",
    homework: "In the Journal tab under 'Session 11 Homework', write a deployment checklist (repo link, env vars, schema seeding, smoke tests) that a classmate could follow to deploy your project without asking you anything (+50 XP).",
    ethics: "Data Sovereignty: where is your database physically stored now? Why does the hosting country matter for privacy laws (e.g. GDPR)? Who can subpoena your players' data?",
    adaptations: "Age 13-16: Full live deployment with the Session 7 test plan re-run and passing against the production URL."
  },
  {
    id: "l3-s12",
    level: 3,
    module: "Module 3: Integrate, Deploy & Polish",
    title: "Session 12: \"Hardening: Logs, Load & the Release Sweep\"",
    duration: "2 hours",
    objectives: [
      "Read server stack traces and production logs to locate failing lines and inputs",
      "Guard resources under load: connection pooling and guaranteed client release (`finally`)",
      "Run a release-readiness sweep: regression pass, security spot-checks, and PRD acceptance sign-off"
    ],
    warmUp: "Log Analysis Sweeps: trace server logs to find the line numbers and inputs behind three stack-trace exceptions.",
    miniLesson: "Diagnostics & Concurrency: request queues and concurrency (500 vs. 503), database pools (sizes, exhaustion, and release discipline), and the release sweep as a gate — every PRD Must acceptance criterion checked and signed off.",
    coreActivity: "Release Checklist: plan load thresholds (simulate 100 concurrent requests) and assemble the release checklist from the PRD's acceptance criteria, then prompt the AI to add pooling and structured logging, and execute the full release sweep against the deployed system, logging every criterion pass/fail.",
    handsOn: "Socratic Debugging — The Exhausted Connection Pool: the tutor removes client release calls; after 10 reloads the server hangs indefinitely. Why does the server refuse to answer after a few clicks? Where were those connections supposed to be returned?",
    homework: "In the Journal tab under 'Session 12 Homework', write a try/catch/finally wrapper that executes a query and always releases the client — plus your top-3 remaining risks going into the defense (+50 XP).",
    ethics: "Denial of Service: if we can hang our own server by leaking connections, what can a hostile script do on purpose? Why is resource cleanup a security requirement, not a style preference?",
    adaptations: "Age 13-16: Full release sweep with every PRD Must acceptance criterion signed off, pass or documented fail."
  },
  {
    id: "l3-s13",
    level: 3,
    module: "Module 4: Defense & Retrospective",
    title: "Session 13: \"The Process Defense\"",
    duration: "2 hours",
    objectives: [
      "Present the project through its process artifacts: PRD → blueprints → commit history → diffs/PRs → test logs → deployed build",
      "Defend design and security decisions in a hostile code-review walkthrough",
      "Diagnose and patch a live fault under time pressure using the debugging protocol"
    ],
    warmUp: "Presentation Checklist: final verification of the live deployed console and the artifact trail.",
    miniLesson: "Assessment Structure: Part A is the artifact walkthrough, Part B is a hostile code-review, Part C is a live diagnostics challenge under time pressure.",
    coreActivity: "Part A — The Artifact Walkthrough: present one PRD story traced from its user story, through its design entries, its feature-spec prompt, its diff review, its test-plan rows, its commits/PR, to its behavior in the live build.",
    handsOn: "Part B — The Hostile Review: the tutor attacks — why this schema? Show me where client input is trusted. Which commit fixed the purchase bug, and what was the root cause? What did you reject from the AI, and why? Part C — Live Diagnostics Challenge: the tutor introduces a fault (env var, validation hole, or broken query) into a copy of the project; run the debugging protocol aloud and patch it.",
    homework: "Complete the self-audit reflection in the Journal tab under 'Session 13 Assessment', summarizing which artifact you're most confident defending and which felt shakiest (+50 XP).",
    ethics: "Professional Accountability: treating the tutor's hostile review as a real pre-launch audit, not a performance — the same posture a production security review demands.",
    adaptations: "Age 13-16: Full live artifact walkthrough, hostile review defense, and live diagnostics patch under time pressure."
  },
  {
    id: "l3-s14",
    level: 3,
    module: "Module 4: Defense & Retrospective",
    title: "Session 14: \"Retrospective & What's Next\"",
    duration: "2 hours",
    objectives: [
      "Run a structured retrospective (Keep / Problem / Try) on the whole project",
      "Connect each process skill to the engineering roles that own it in industry",
      "Prepare for Level 4: same process, run independently, on the student's own game"
    ],
    warmUp: "Portfolio Audit: review the full artifact trail — Prompt Journal versions, commits, PRs, test logs — as a portfolio piece.",
    miniLesson: "Roles & the Real World: who owns what in a company (product managers/PRD, architects/design, engineers/build loop, QA/test plans, DevOps/deploy-harden), how the 12-session process maps to a real sprint cadence, and publishing the project on GitHub as a portfolio item.",
    coreActivity: "Retrospective Round-Table: run the Keep/Problem/Try board — what process steps helped, where the student fought the process, what they will do differently at Level 4.",
    handsOn: "Graduation & Level 4 Planning: present Level 3 graduation, then preview Level 4 — the student proposes their own game and runs this entire process independently, with the option of a different product track (e.g. a web application) if agreed with the teacher.",
    homework: "In the Journal tab under 'Session 14 Reflection', write 3 goals for Level 4 (e.g. an original game concept, a stretch technical goal, a process habit to improve) (+50 XP).",
    ethics: "Continuous Learning: which process step felt like bureaucracy — and did it catch anything? What did the AI get wrong that your process caught? The professional developer's responsibility to keep skills updated as tools and threats shift.",
    adaptations: "All Ages: Full retrospective round-table plus a personalized Level 4 goal-setting conversation with the tutor."
  },

  // ================= LEVEL 4 =================
  {
    id: "l4-s1",
    level: 4,
    module: "Module 1: Define & Found",
    title: "Session 1: \"The Pitch: Your Game, Your PRD\"",
    duration: "2 hours",
    objectives: [
      "Pitch an original game concept and negotiate it into a buildable scope contract",
      "Write the capstone PRD independently: user stories, acceptance criteria, MoSCoW priorities, out-of-scope list",
      "Translate creative ideas into testable system constraints"
    ],
    warmUp: "The Two-Minute Pitch: the student pitches their game concept in two minutes (fantasy, core loop, why it's fun); the tutor responds as a skeptical publisher — 'What does the player actually do, moment to moment?' A game that can't be described in one core loop can't be scoped.",
    miniLesson: "Scoping a Real Product: the Minimum Playable Game (MPG) — the smallest version that is actually fun, scope math (5 build sprints × what one sprint realistically produces, evidenced by the student's own Level 3 velocity), and turning game feel into testable constraints ('enemy spawns every 2±0.5s', not 'enemies feel relentless').",
    coreActivity: "The Capstone PRD & Scope Contract: draft the PRD solo (goal, core loop, 8–12 user stories with acceptance criteria, MoSCoW priorities, explicit out-of-scope list), then prompt the AI to attack it for untestable criteria and hidden scope monsters ('multiplayer', 'level editor') before negotiating the final scope contract with the tutor, who signs off the Must line.",
    handsOn: "Socratic Debugging — The Ambiguous Spec: the tutor picks the vaguest story in the student's own PRD ('the game should feel fast'). Rewrite it as a precise, testable constraint — how does a computer evaluate 'feels fast'? What number is hiding inside that sentence?",
    homework: "In the Journal tab under 'Session 1 Homework', write 3 additional testable user stories for your game with explicit preconditions and acceptance criteria (+50 XP).",
    ethics: "Honest Scope, Honest Games: Cyberpunk 2077's 2020 launch — years of public overpromising met an unfinished product, mass refunds, and delisting from the PlayStation Store. What do players lose when developers promise what they can't ship?",
    adaptations: "Age 13-16: Full solo PRD (8-12 stories) negotiated into a tutor-signed scope contract."
  },
  {
    id: "l4-s2",
    level: 4,
    module: "Module 1: Define & Found",
    title: "Session 2: \"Architecture & the Milestone Plan\"",
    duration: "2 hours",
    objectives: [
      "Design the game's architecture independently: component diagram, data model, API contract (if a backend is in scope)",
      "Choose the tech stack from the taught toolbox and justify each choice in writing",
      "Break the Must-scope into a 5-sprint milestone plan with a demo target per sprint"
    ],
    warmUp: "User Journey Mapping: the student maps their own game's player journey screen-by-screen (menu → play → game over → leaderboard) and traces where each input propagates — the journey map exposes every component the architecture must name.",
    miniLesson: "Architecture at Product Scale: component diagrams (game loop, renderer, input, state, persistence — decoupled so sprints can build them in order), stack decisions as recorded trade-offs (the Architectural Decision Record: Status, Context, Decision, Consequences), and milestone planning where risky components go first.",
    coreActivity: "Blueprints & Sprint Map: draw the component diagram, design the schema (if a backend is in scope), draft the API contract, and slot every Must story into one of the 5 sprints, then prompt the AI to generate a Mermaid architecture diagram and critique the sprint plan for dependency errors.",
    handsOn: "Socratic Debugging — The Dependency Knot: the tutor reorders the student's sprint map to put a dependent feature first. Sprint 2 needs data that doesn't exist until Sprint 4 — what happens in week 2? How do professionals order risk?",
    homework: "In the Journal tab under 'Session 2 Homework', write one ADR for your most debatable stack choice (e.g. Canvas vs. DOM rendering, backend vs. localStorage saves) (+50 XP).",
    ethics: "Clear Specifications in Critical Software: the Healthcare.gov launch disaster (2013) — hundreds of contractors built against no centralized architecture and the pieces met for the first time in production. Why is an architecture diagram a contract?",
    adaptations: "Age 13-16: Full architecture blueprint pack (diagram, schema, contract, sprint map, 2 ADRs)."
  },
  {
    id: "l4-s3",
    level: 4,
    module: "Module 1: Define & Found",
    title: "Session 3: \"Foundation Sprint: Skeleton, Tests & TDD\"",
    duration: "2 hours",
    objectives: [
      "Stand up the capstone repo, workspace, and CI-ready structure independently (Level 3 Session 4, unassisted)",
      "Set up a unit test runner (Vitest) and write the first test suites for core game-logic utilities",
      "Apply the Test-Driven Development cycle (Red → Green → Refactor) on pure logic functions"
    ],
    warmUp: "Manual Test Misery: the student manually verifies a scoring function against 8 cases by hand, timed — at product scale, manual verification cannot keep up with change.",
    miniLesson: "The Test Runner Lifecycle: test suites (`describe`), cases (`test`), assertions (`expect`); TDD (write the failing test first — Red, make it pass — Green, then refactor safely); and what to unit test in a game (pure logic — scoring, collision math, spawn timing, state transitions — not pixels).",
    coreActivity: "Test Targets & First Suites: list the game's pure-logic functions and draft test cases with boundary values (zero, negative, max) for the two most critical, then initialize the repo/workspace/Vitest and TDD one core utility (tests first, then prompt the AI for the implementation, then verify Red → Green).",
    handsOn: "Socratic Debugging — The Ghost Green Bug: the tutor seeds a test whose mock returns true blindly — the suite passes even when the logic is broken. Why did the suite pass when the function was wrong? How do we test that our tests are actually testing?",
    homework: "In the Journal tab under 'Session 3 Homework', write a Vitest suite with 3 assertions for one of your game's utility functions, including one boundary case and one expected throw (+50 XP).",
    ethics: "Testing Failure Liabilities: the Therac-25 radiation machine (1985) killed patients via a race condition never caught in testing. If our tests skip boundary cases, are we responsible for what the live system does?",
    adaptations: "Age 13-16: Full TDD cycle (Red → Green → Refactor) demonstrated live on a real game utility."
  },
  {
    id: "l4-s4",
    level: 4,
    module: "Module 2: Build Sprints",
    title: "Session 4: \"Sprint 1: The Core Mechanic\"",
    duration: "2 hours",
    objectives: [
      "Ship the game's core loop: the mechanic that makes it a game (move/shoot/jump/match — per the PRD)",
      "Drive the sprint end-to-end without tutor prompting: spec → prompt → review → test → commit → demo",
      "Keep TDD discipline on the mechanic's pure logic while the AI generates the rendering shell"
    ],
    warmUp: "Standup & Sprint Spec: state the sprint goal from the milestone plan, write the feature spec with acceptance criteria, and identify the pure-logic parts that get tests first.",
    miniLesson: "The Sprint Protocol: standup (what shipped, what's blocked) → the 5-Step build loop on the sprint goal → commit/PR → updated sprint log → a demo of something that works. Scope cuts are made openly by moving stories below the line, never by silently shipping broken features.",
    coreActivity: "Build Loop — The Core Mechanic: TDD the mechanic's logic, prompt the AI IDE for implementation and rendering, audit diffs against the spec, and iterate until the acceptance criteria pass; commit/PR with a story-linked message and demo the playable mechanic to the tutor's 'hostile publisher' persona.",
    handsOn: "Socratic Debugging — The Untestable Mechanic: if mechanic logic got tangled into rendering code, the tutor asks the student to unit-test it — and they can't. Why can't we test the jump arc without opening a browser? What would separating logic from rendering buy us?",
    homework: "In the Journal tab under 'Session 4 Homework', write the Sprint 1 log: goal, what shipped, what was cut, bugs found by the tutor's key-mashing, and the fix commits (+50 XP).",
    ethics: "Honest Scope Cuts: gating the demo on the PRD's acceptance criteria, not on polish — if the sprint goal is missed, the correction is a scope cut logged openly, not silent overtime. What does it cost a team when 'done' quietly means 'done, mostly'?",
    adaptations: "Age 13-16: Full sprint cycle (standup → build → review/demo) driven independently, survives tutor key-mash QA."
  },
  {
    id: "l4-s5",
    level: 4,
    module: "Module 2: Build Sprints",
    title: "Session 5: \"Sprint 2: Game State & Reliability\"",
    duration: "2 hours",
    objectives: [
      "Centralize game state (single source of truth) and implement clean state transitions (menu → playing → paused → game over)",
      "Apply reliability patterns: state rollback on failed operations, defensive guards on all transitions",
      "(Stretch, only if the concept requires it): live/real-time features via WebSockets, with reconnect handling"
    ],
    warmUp: "Standup & Sprint Spec: triage Sprint 1's issue list into the sprint plan, and spec the state machine with a drawn transition diagram.",
    miniLesson: "State as a Single Source of Truth: centralized state stores and clean transitions, reliability patterns (rollback on failed operations, defensive guards on every transition), and — only for concepts that need it — WebSockets with a connection-status UI and exponential-backoff reconnect.",
    coreActivity: "Build Loop — State & Reliability: implement the state store and transitions, audit that no component mutates state directly, and add rollback for any operation that can fail (e.g. an optimistic save that reverts on reject); commit/PR and demo pause/resume/restart under hostile input, showing one rollback in action.",
    handsOn: "Socratic Debugging — The Overwritten Update: the tutor triggers two state updates concurrently; the older one lands last and overwrites the newer. Why did the newer state disappear? How do we reject updates that represent older state?",
    homework: "In the Journal tab under 'Session 5 Homework', write a JS function implementing optimistic UI update logic for one of your game's actions, reversing changes on request reject (+50 XP).",
    ethics: "Reliability as a Promise to the Player: an optimistic UI that silently loses a rejected update erodes trust the same way an unexplained charge does on a receipt. What does software owe a user when an action doesn't actually succeed?",
    adaptations: "Age 13-16: Full state machine with rollback demonstrated live under hostile input; WebSocket stretch goal only if the concept requires it."
  },
  {
    id: "l4-s6",
    level: 4,
    module: "Module 2: Build Sprints",
    title: "Session 6: \"Sprint 3: Accounts, Saves & the Leaderboard\"",
    duration: "2 hours",
    objectives: [
      "Ship the capstone's data features: player accounts (hashed credentials), persistent saves, and/or a leaderboard — per the PRD's Must line",
      "Re-apply the Level 3 backend discipline unassisted: validation guards, parameterized queries, transactions, per-user isolation",
      "Run the cross-user attack drill against their own endpoints"
    ],
    warmUp: "Standup & Sprint Spec: spec the data features against the schema and API contract from Session 2, and write the hostile test cases first.",
    miniLesson: "Data Features, Unassisted: validation guards, parameterized queries, and transactions applied without tutor scaffolding, and taking the authenticated id from the session — never the payload. Local-only capstones use `localStorage` with the same discipline: a versioned save schema and corrupted-save handling.",
    coreActivity: "Build Loop — Data Features: implement routes and DB (or localStorage) via the AI IDE, audit every query for placeholders, wrap multi-step writes in transactions; commit/PR, then log in as player A and attempt to read/write player B's data by editing payloads — every attempt must fail with 401/403.",
    handsOn: "Socratic Debugging — The Trusted Payload: the tutor finds (or seeds) one endpoint reading `player_id` from the request body. Who controls the request body? Then who controls whose save file this endpoint writes?",
    homework: "In the Journal tab under 'Session 6 Homework', write the test-plan table (happy/boundary/hostile) you executed against your data endpoints, with observed status codes (+50 XP).",
    ethics: "Persistence Is the Feature: even a local-only capstone must handle a corrupted save honestly (try/parse/fallback) rather than silently losing a player's progress. What do players trust a 'Saved!' message to mean?",
    adaptations: "Age 13-16: Full data-feature implementation with a logged cross-user attack drill (at least one rejected attempt)."
  },
  {
    id: "l4-s7",
    level: 4,
    module: "Module 2: Build Sprints",
    title: "Session 7: \"Sprint 4: Integration Tests & Coverage\"",
    duration: "2 hours",
    objectives: [
      "Write integration tests covering component interactions and network roundtrips (mocked and live)",
      "Mock API calls with controlled payloads, including failure responses (500s, timeouts)",
      "Measure code coverage and close the riskiest gaps — not chase 100%"
    ],
    warmUp: "Standup & Test Blueprint: map the game's integration seams (input→state, state→render, client→API), pick the highest-risk flows, and outline test flows: trigger → mocked response → verify state/DOM.",
    miniLesson: "Integration Testing & Coverage: mocking API calls with controlled payloads (including error paths — what does the player see on a 500?), running coverage reports, and closing the riskiest gaps rather than chasing 100%.",
    coreActivity: "Build Loop — Integration Tests: prompt the AI to write integration tests for the chosen seams including error-path renders, run coverage, and write one more test targeting the biggest uncovered branch; commit/PR and show the coverage report, defending which gaps are acceptable and why.",
    handsOn: "Socratic Debugging — Stale Mocks: the tutor seeds a mock payload using an outdated schema — tests pass while the real game breaks on load. Why did the suite report green while the build is broken? How do we keep mocks synchronized with reality?",
    homework: "In the Journal tab under 'Session 7 Homework', write an integration test mocking a POST failure for one of your game's saves and asserting the UI shows the failure state (+50 XP).",
    ethics: "What 'Tested' Actually Claims: a green coverage report that never exercises the failure path is a false promise to whoever reads it next. What does declaring something 'tested' obligate you to have actually checked?",
    adaptations: "Age 13-16: Full integration test suite covering at least one error-path render, defended coverage gaps."
  },
  {
    id: "l4-s8",
    level: 4,
    module: "Module 2: Build Sprints",
    title: "Session 8: \"Sprint 5: Performance & Polish\"",
    duration: "2 hours",
    objectives: [
      "Profile the game with browser tooling (Lighthouse, Performance tab) and fix the top bottlenecks",
      "Apply the Level 2 memory discipline at product scale: prune object pools, cap arrays, stabilize frame rate",
      "Close the Must line: every PRD Must story demonstrably done — this is the feature freeze"
    ],
    warmUp: "Standup & Performance Budget: set measurable targets (stable 60 FPS during play; LCP under 2.5s; no unbounded arrays); run the baseline profile.",
    miniLesson: "Performance at Product Scale: profiling with Lighthouse and the Performance tab, memory discipline (prune object pools, cap arrays, stabilize frame rate), and the feature freeze — every PRD Must story demonstrably done, nothing new enters after this session.",
    coreActivity: "Build Loop — Performance & Freeze: fix the top profiled bottlenecks (sprite pruning, pagination/virtualization of long lists, asset sizes), re-profile, then burn down any remaining Must-story gaps; commit/PR and walk the PRD Must line story-by-story with the tutor — anything failing is cut or fixed now.",
    handsOn: "Socratic Debugging — The Giant Payload Freeze: the tutor injects a 10MB mock payload / 10,000-item list into the game's heaviest view; the tab freezes. Why does rendering 10,000 elements crash the tab? What does pagination change about what the DOM has to hold?",
    homework: "In the Journal tab under 'Session 8 Homework', write your before/after performance numbers (FPS, LCP, array caps) and the 3 changes that moved them (+50 XP).",
    ethics: "Performance as Inclusivity: heavy games exclude players on low-end devices and slow connections. Who can't play your game as shipped today?",
    adaptations: "Age 13-16: Full profiling pass with measured before/after numbers and an enforced feature freeze."
  },
  {
    id: "l4-s9",
    level: 4,
    module: "Module 3: Ship & Operate",
    title: "Session 9: \"The Pipeline: CI/CD\"",
    duration: "2 hours",
    objectives: [
      "Write a GitHub Actions workflow that installs, lints, tests, and builds on every push",
      "Gate merges on green pipelines; connect the pipeline to auto-deploy (staging → production)",
      "Connect the pipeline to the platform's Level 4 review mechanism (audit triggered on push)"
    ],
    warmUp: "YAML Mapping: match pipeline commands to their target environments (staging vs. production).",
    miniLesson: "Deployment Pipelines: commit triggers → build → test → deploy, why humans are removed from the repetitive path, YAML structures (jobs, steps, env keys), and deploy gates — production blocked while tests return error exit codes.",
    coreActivity: "Pipeline Flow & Build: sketch the capstone's pipeline (push → lint → Vitest → build → deploy staging → manual gate → production), then prompt the AI to generate `.github/workflows/deploy.yml`, push a commit and watch it run, and deliberately push a failing test to watch the gate hold.",
    handsOn: "Socratic Debugging — The Broken Pipeline: the tutor introduces a YAML syntax error or failing test command; the staging build fails. Why did the deploy stop? Read the logs upward from the failure — where exactly did the pipeline halt?",
    homework: "In the Journal tab under 'Session 9 Homework', write a YAML workflow fragment running lint checks and unit tests sequentially on pull requests (+50 XP).",
    ethics: "Automated Gates: GitLab (2017) — a production database deleted by hand because safeguards were bypassable. Why should critical changes require automated checks before a human can say yes?",
    adaptations: "Age 13-16: Full working pipeline with one green run and one deliberately blocked run, both shown as evidence."
  },
  {
    id: "l4-s10",
    level: 4,
    module: "Module 3: Ship & Operate",
    title: "Session 10: \"Operate: Monitoring, Logging & the Beta Test\"",
    duration: "2 hours",
    objectives: [
      "Implement structured JSON logging with levels (DEBUG/INFO/WARN/ERROR) and an error-handler middleware",
      "Plan and run a beta UAT: recruit real testers (classmates/family), triage findings by severity × priority",
      "Harden inputs against the hostile beta user (sanitization, numeric extremes, length caps)"
    ],
    warmUp: "Stack Trace Audit: locate the file path and variables behind a crash from a raw server stack trace.",
    miniLesson: "Observability & UAT: structured logging vs. raw prints, log levels and alert fatigue (alert on repeated 500s, not every 404), UAT and the triage matrix (Severity: Blocker/Major/Minor × Priority), and treating the hostile beta user as normal — sanitize inputs, clamp extremes, cap lengths.",
    coreActivity: "Log Schema & Beta Run: design the log entry schema (timestamp, level, endpoint, userId) and write the beta test script and findings form, then prompt the AI for the structured logger middleware and input sanitizers, and run a live mini-beta (2-3 testers) while watching the logs and filing findings into the triage matrix.",
    handsOn: "Socratic Debugging — The Silent Fail: a tester hits a 500 and the logs show nothing. The player saw an error page and our logs are empty — where did the exception go? What does an unlogged failure cost during a real launch?",
    homework: "In the Journal tab under 'Session 10 Homework', write a JS error-handler middleware logging stack trace, timestamp, and client IP in JSON format — and your top-3 triaged beta findings with severity/priority labels (+50 XP).",
    ethics: "When Monitors Fail: the Boeing 737 MAX crashes (2018-2019) were worsened by cockpit alerts that failed to surface faulty sensor data to pilots. When software fails to report its own failures, who pays?",
    adaptations: "Age 13-16: Full live mini-beta run with real testers, triaged findings including at least one honestly-labeled Blocker."
  },
  {
    id: "l4-s11",
    level: 4,
    module: "Module 3: Ship & Operate",
    title: "Session 11: \"Handoff: Documentation & Launch Prep\"",
    duration: "2 hours",
    objectives: [
      "Write the README a stranger can follow: prerequisites, install, env vars, run, deploy",
      "Produce the API spec (OpenAPI-style) for any backend routes, and finalize the ADR set",
      "Fix Blocker/Major beta findings and complete the launch checklist (rollback plan included)"
    ],
    warmUp: "Setup Guide Audit: follow a mock setup guide with missing steps; identify exactly where it breaks.",
    miniLesson: "The Handoff Lifecycle: documentation as the product's front door (install steps, prerequisites, env setup), OpenAPI specs (paths, parameters, schemas, responses), and launch checklists/rollback plans — with feature flags and canary rollouts noted as how big products de-risk launches.",
    coreActivity: "Docs Blueprint & Burn-Down: outline the README, list every env var, and assemble the launch checklist from the release sweep and beta triage, then prompt the AI to draft the README and API spec from the codebase, verify it by clean-machine test (the tutor follows the README from zero), and burn down remaining Blocker/Major findings.",
    handsOn: "Socratic Debugging — The Missing Setup: the tutor's clean-machine run crashes because a setup step (DB seeding, env var) was omitted. It works on your machine and died on mine — what did your documentation assume that it never stated?",
    homework: "In the Journal tab under 'Session 11 Homework', write one ADR justifying a launch-relevant decision of your game (e.g. saves in localStorage vs. server; Canvas vs. DOM), with honest Consequences (+50 XP).",
    ethics: "Building on Others' Work: Heartbleed (2014) lived in OpenSSL partly because critical code was under-documented and under-audited. What do you owe the next developer, including future-you?",
    adaptations: "Age 13-16: README passes a real clean-machine test run by the tutor, plus a complete OpenAPI fragment and ADR set."
  },
  {
    id: "l4-s12",
    level: 4,
    module: "Module 4: Launch",
    title: "Session 12: \"The Grand Launch & System Defense\"",
    duration: "2 hours",
    objectives: [
      "Launch the game publicly (production deploy, shareable URL) and present it end-to-end",
      "Demonstrate the full engineering apparatus: tests, coverage, pipeline gates, logs, docs",
      "Defend the live system against chaos testing (hostile inputs, dependency failures) in real time"
    ],
    warmUp: "Warm Pitch Practice: presenting the live game's URL and premise in 60 seconds before the full assessment begins.",
    miniLesson: "Assessment Structure: Part 1 is the product pitch, Part 2 is the engineering tour, Part 3 is live chaos defense, Part 4 is the retrospective and graduation.",
    coreActivity: "Part 1 — The Product Pitch: present the live game in production — the core loop, the player journey, and how the PRD's promises map to what shipped, including what was honestly cut and why. Part 2 — Engineering Tour: walk the codebase and apparatus — test suites and coverage, CI/CD logs showing a blocked bad build and a green deploy, structured logs from the beta, the README/API spec/ADRs, and the commit/PR history telling the sprint story.",
    handsOn: "Part 3 — Live Chaos Defense: the tutor plays 'Chaos Monkey' against the live game — garbage/extreme inputs, forced network failures mid-save, hostile payloads against data endpoints, restart/resize/key-mash storms. Defend in real time: sanitizers hold, state rolls back, isolation rejects cross-user writes, logs capture every failure, and the debugging protocol runs out loud on anything that breaks.",
    homework: "In the Journal tab under 'Session 12 Homework', submit the final retrospective: 'My Journey from Syntax Writer to System Architect — what I designed, what I cut, what broke, and what I'd build next' (+100 XP).",
    ethics: "Shipping Honestly: Part 4's retrospective must reference the Session 1 scope contract explicitly — what was promised vs. shipped is the capstone's honesty test.",
    adaptations: "All Ages: Full public launch, engineering tour, and live chaos defense in front of the tutor."
  }
];
