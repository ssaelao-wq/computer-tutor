import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { CURRICULUM_DATA } from './curriculumData';
import { PROJECT_TASKS } from './projectTasksData';


// Curriculum Guide Concept Reference Database (reference lookup for students)
const CONCEPT_REFERENCES = {
  'l1-s1': [
    {
      name: "Computer Hardware vs. Software",
      desc: "Core Definition:\n  HARDWARE is the physical, touchable machinery — the CPU, RAM, storage drive, GPU, monitor, keyboard. SOFTWARE is the instructions that run ON that hardware — the operating system, the browser, the game code you're about to start writing. Hardware without software is inert; software cannot exist without some hardware executing it.\n\nWhy It Matters:\n  Every bug you'll ever debug falls into one of these two buckets: a HARDWARE limit (not enough memory, a slow processor, no network signal) or a SOFTWARE mistake (a typo, a missing check, bad logic). Knowing which bucket you're in tells you whether to fix the code or upgrade the machine.\n\nWorked Example — Running the Racing Car Game:\n  - Hardware: the CPU calculating car positions 60 times a second, RAM holding the current game state, the monitor displaying the result.\n  - Software: the operating system managing the browser process, the browser rendering HTML/CSS/JS, and game.js — the code you write — deciding what happens next.",
      keywords: "hardware software difference CPU RAM operating system"
    },
    {
      name: "How a Program Runs (CPU, RAM & Storage)",
      desc: "Core Definition:\n  The CPU (Central Processing Unit) is the 'brain' that executes instructions one at a time, extremely fast. RAM (Random Access Memory) is short-term, high-speed workspace that holds whatever the CPU is actively using right now — it's wiped when the machine restarts. Storage (an SSD or hard drive) is long-term memory that keeps files even after shutdown, but is much slower to read from than RAM.\n\nWhy It Matters:\n  'The game feels laggy' usually means the CPU is overloaded doing too many calculations per frame. 'The game crashed' often means RAM ran out because too much was loaded into memory at once. Knowing which resource is the bottleneck is the first step of any performance fix — guessing wastes time.\n\nWorked Example:\n  Loading 500 full-resolution car images before a race even starts fills up RAM fast. The fix isn't a faster CPU — it's loading fewer images, or loading them only when needed (this is exactly what Sandbox Exercises 1.4 and 1.5 walk through).",
      keywords: "CPU RAM storage memory bottleneck performance"
    },
    {
      name: "Networks & the Client-Server Model",
      desc: "Core Definition:\n  A CLIENT (your browser) sends a REQUEST across a network to a SERVER, which looks up or processes data and sends back a RESPONSE. Every webpage you've ever loaded — including this platform — used this exact request → response cycle, often dozens of times per page.\n\nWhy It Matters:\n  'The website is down' can mean several different things: the server crashed, the network connection dropped, or the client (browser) has a bug. Separating the client's job from the server's job is what lets you localize where a problem actually is, instead of guessing.\n\nWorked Example — Loading This Platform:\n  1. Your browser (client) sends a request: 'give me the Student Report page.'\n  2. The server receives it, checks the database, builds the response.\n  3. The server sends the response (HTML/JSON data) back across the network.\n  4. Your browser renders it into the page you see.",
      keywords: "network client server request response HTTP"
    },
    {
      name: "The Web Technology Stack (HTML, CSS, JavaScript & the Browser)",
      desc: "Core Definition:\n  Every webpage is built from exactly three technologies, each with one job: HTML defines STRUCTURE and CONTENT (what elements exist), CSS defines STYLE and APPEARANCE (how they look), and JavaScript defines BEHAVIOR and INTERACTIVITY (what happens when you click, press a key, or wait). The browser reads all three and renders the final result on screen.\n\nWhy It Matters:\n  Diagnosing 'why does my page look wrong' starts with identifying which of the three technologies is responsible for the broken part. Text in the wrong place with no color or layout at all almost always means CSS failed to load — the HTML (content) is fine, but nothing is styled.\n\nWorked Example — The Racing Car Game (Sessions 2-12):\n  - HTML (Session 2): the track, the car, the scoreboard containers.\n  - CSS (Session 3): lane colors, car positioning, layout.\n  - JavaScript (Sessions 4-12): variables, keyboard controls, collisions, scoring.",
      keywords: "HTML CSS JavaScript web stack browser rendering"
    },
    {
      name: "The AI-Era 5-Step Development Loop",
      desc: "Core Definition:\n  The process this entire course uses, every session, starting with Session 2: (1) Plan & Design — think before you type, (2) Write the AI Prompt — turn the plan into a precise instruction, (3) Review & Explain — read and understand every line the AI generated, (4) Test & Break It — try to make it fail, (5) Iterate & Improve — refine the prompt based on what you found, and repeat.\n\nWhy It Matters:\n  In the AI era, typing code from scratch is no longer the bottleneck — knowing WHAT to ask for, and whether what you got back is actually correct, is. A student who can run this 5-step loop can work with any AI coding tool, in any language, for the rest of their career.\n\nWhere You'll Use It Next:\n  Starting with Session 2's HTML lab, every Sandbox Exercise set and every Project Journal entry in this course is structured around these exact 5 steps.",
      keywords: "5-step loop plan prompt review test iterate AI-era methodology"
    }
  ],
  'l1-s2': [
    {
      name: "Document Object Model (DOM)",
      desc: "Core Definition:\n  The Document Object Model is the browser's live, in-memory representation of your page — it takes the HTML you write and turns it into a tree of connected objects (nodes) that JavaScript can read and change while the page is running. What appears on screen is always a rendering of THIS tree, not of your original HTML file.\n\nWhy It Matters:\n  Every DOM lookup and style change you write in this course — document.getElementById(...), .style.left, .classList — is really just asking the browser 'find me this node in the tree' or 'change this node's properties.' Understanding the tree shape is what makes those calls make sense instead of feeling like memorized magic.\n\nVisual DOM Hierarchy:\n  - document (Root)\n    └─ <html>\n       └─ <body>\n          └─ <div id=\"track\"> (Parent container)\n             ├─ <div id=\"player-car\"></div> (Child container)\n             └─ <div class=\"lane-line\"></div> (Child container)",
      keywords: "browser DOM tree node hierarchy representation"
    },
    {
      name: "HTML Tags and Element Syntax",
      desc: "Core Definition:\n  Tags define the type and boundaries of visual components. Some tags are GENERIC (a blank box with no built-in meaning) and some are SEMANTIC (they describe what their content IS).\n\nWhy It Matters:\n  Choosing the right tag is a design decision, not decoration. A SEMANTIC tag tells the browser, screen readers, and other developers what a piece of content actually means, while a GENERIC tag is a blank canvas you shape yourself. Using div for everything works visually but throws away meaning; forcing semantic tags onto things that have no meaning (like a decorative divider line) is the opposite mistake.\n\nCheat Sheet Elements:\n  - <div>: A GENERIC block-level container box. It has NO built-in look or meaning — it is raw material you shape with CSS. Used to build tracks, lanes, dashboards, or even a thin line.\n  - <section>: Also a container box, but SEMANTIC — it signals 'a distinct section of content' (e.g. a game arena or a scoreboard region). Use <section> when the grouping has meaning; use <div> when it is purely visual/structural. They look identical until styled.\n  - <span>: A GENERIC inline wrapper (sits inside a line of text) used to highlight one word or a live score number.\n  - <h2>: A SEMANTIC heading/title — screen readers announce it as a heading.\n\nWhy 'blank box' matters (the lane-divider):\n  We draw a lane line with <div class=\"lane-divider\"></div> because a line isn't 'a heading' or 'a paragraph' — it is purely visual. The <div> starts as an INVISIBLE empty box; CSS (width: 2px; height: 100%; dashed border) shapes it into the line. The tag is the raw material; the CSS is the shaping. This is why an unstyled empty div shows nothing.\n\nNesting Pitfall:\n  Always close tags in the exact opposite order you opened them!\n  - ✅ Correct: <div><span>Hello</span></div>\n  - ❌ Incorrect: <div><span>Hello</div></span> (causes render errors)",
      keywords: "HTML element tags opening closing rules cheat sheet"
    },
    {
      name: "Parent-Child Nesting Structure",
      desc: "Core Definition:\n  Nesting one element inside another makes it a CHILD of that PARENT — the child's position, size, and visibility are all measured and controlled relative to its parent's box, not the page as a whole.\n\nWhy It Matters:\n  This is the structural backbone every layout depends on: the racetrack <div> is the parent that all lanes, cars, and obstacles live inside. Get the nesting wrong — place the car outside the track container — and CSS positioning rules that assume 'relative to the track' silently break, because the car is no longer a child of that parent.\n\nSyntax Blueprint:\n  <div id=\"highway-track\"> <!-- Parent Container -->\n    <div id=\"player-car\"></div> <!-- Child Element 1 -->\n    <div id=\"obstacle-car\"></div> <!-- Child Element 2 -->\n  </div>\n\nRule of Thumb:\n  If you hide, delete, or move a parent element, all of its children will hide, delete, or move with it.",
      keywords: "nesting HTML tags structure parent child DOM"
    },
    {
      name: "HTML Attributes (ID vs Class)",
      desc: "Core Definition:\n  Attributes add identifiers and metadata to HTML elements. The two you use most are id and class — both NAME an element so CSS and JavaScript can find it, but they follow opposite rules.\n\nWhy It Matters:\n  Picking id vs class really means answering 'how many elements need this exact treatment?' Get it backwards — id on something repeated, or class on something meant to be unique — and later JavaScript lookups like getElementById will either fail to find duplicates or silently only ever touch the first match.\n\nWhen to use which:\n  - ID (Unique): Used ONCE per page. It names one specific target.\n    HTML:  <div id=\"player-car\"></div>\n    CSS finds it with a hash:  #player-car { ... }\n  - Class (Reusable): SHARED by many elements that need the same styling/behavior.\n    HTML:  <div class=\"lane-divider\"></div>\n           <div class=\"lane-divider\"></div>\n    CSS finds them all with a dot:  .lane-divider { ... }\n\nWorked Example (why the track uses each):\n  - There is only ONE player car, so it gets id=\"player-car\".\n  - There are MANY lane dividers, so they share class=\"lane-divider\" and a SINGLE rule styles all of them at once. An id could not do this — an id must be unique.\n\nRule of Thumb:\n  id   = the ONE unique thing        (CSS selector: # )\n  class = a REPEATED category of things (CSS selector: . )",
      keywords: "HTML attributes difference id vs class selector" 
    }
  ],
  'l1-s3': [
    {
      name: "CSS Selectors and Specificity Rules",
      desc: "Core Definition:\n  Selectors tell the browser which HTML elements to apply styles to. Specificity decides which styling rule wins if there is a conflict.\n\nWhy It Matters:\n  CSS rules for the same element often come from different places — a base stylesheet, a shared class, an ID rule — and conflicts are inevitable in any real project. Specificity is the tie-breaking rulebook the browser follows every single time, so instead of guessing why a style 'isn't applying,' you can calculate exactly which rule should win.\n\nSyntax Cheat Sheet:\n  - Target by Tag (low priority): div { background: grey; }\n  - Target by Class (med priority): .obstacle { background: red; }\n  - Target by ID (high priority): #player-car { background: blue; }\n\nRule:\n  If a class selector says a car is red, but its ID selector says it is blue, it will render blue because ID selectors override classes.",
      keywords: "CSS selectors specificity hierarchy overrides"
    },
    {
      name: "CSS Box Model",
      desc: "Core Definition:\n  Every element on a web page is treated as a rectangular box consisting of four layers.\n\nWhy It Matters:\n  Almost every 'why is this element a different size than I expected' bug traces back to the box model. Padding and border ADD to an element's rendered size by default — a 100px-wide box with 20px of padding actually takes up 140px on screen — which is why professional stylesheets almost always opt into border-box sizing to make width mean 'total width' instead of 'content width'.\n\nVisual Layout Blueprint:\n  ┌──────────────────────────────────────────────┐\n  │ MARGIN (Outer space around the element)      │\n  │  ┌────────────────────────────────────────┐  │\n  │  │ BORDER (The element outline line)      │  │\n  │  │  ┌──────────────────────────────────┐  │  │\n  │  │  │ PADDING (Inner clear space)      │  │  │\n  │  │  │  ┌────────────────────────────┐  │  │  │\n  │  │  │  │ CONTENT (Text/Car image)   │  │  │  │\n  │  │  │  └────────────────────────────┘  │  │  │\n  │  │  └──────────────────────────────────┘  │  │\n  │  └────────────────────────────────────────┘  │\n  └──────────────────────────────────────────────┘\n\nBest Practice:\n  Always set box-sizing: border-box; so that padding doesn't swell the final width.",
      keywords: "CSS box model margins borders padding box sizing"
    },
    {
      name: "Absolute vs. Relative Positioning",
      desc: "Core Definition:\n  Controls coordinate-based layouts so we can position elements freely (like overlaying obstacles onto a racetrack grid).\n\nWhy It Matters:\n  This is the exact mechanism the racing game uses to place cars and obstacles at pixel-precise coordinates instead of letting the normal top-to-bottom document flow decide where they land. Setting position: absolute without a relative parent doesn't throw an error — the element quietly anchors to the whole page instead of the game arena, which is why the parent-relative/child-absolute pairing is a strict rule, not a suggestion.\n\nLayout Blueprint:\n  - Parent element must be relative: anchors coordinates.\n  - Child element must be absolute: moves coordinates relative to parent.\n\nCSS Syntax:\n  #game-arena { \n    position: relative; \n    width: 300px; height: 500px; \n  }\n  #player-car { \n    position: absolute; \n    left: 120px;   /* X-coordinate from left edge */\n    bottom: 10px;  /* Y-coordinate from bottom edge */\n    width: 60px; height: 100px; \n  }",
      keywords: "absolute coordinates layout CSS position absolute"
    },
    {
      name: "CSS Flexbox Layouts",
      desc: "Core Definition:\n  A layout engine to align lists of elements in a row or column automatically.\n\nWhy It Matters:\n  Before flexbox, evenly spacing and centering a row of elements required fragile manual pixel math that broke the moment content changed size. Flexbox lets you describe the RESULT you want — 'evenly spaced,' 'vertically centered' — and the browser computes the exact positions itself, which is what keeps a HUD's speed, score, and lives readouts aligned no matter the screen width.\n\nSyntax Blueprint:\n  .dashboard-hud {\n    display: flex;\n    flex-direction: row;        /* Align horizontal list */\n    justify-content: space-around; /* Distribute elements evenly */\n    align-items: center;        /* Vertically center elements */\n  }",
      keywords: "CSS flexbox cheat sheet justify content align items"
    }
  ],
  'l1-s4': [
    {
      name: "Variable Declarations (let vs. const)",
      desc: "Core Definition:\n  Variables are named boxes in memory that hold one value. Choose the keyword by whether the value ever changes.\n\nWhy It Matters:\n  const is not just a style preference — it is a signal to anyone reading your code (including future you) that this value is a fixed rule of the game, not something the logic will change. If something later tries to reassign a const, the browser throws an error immediately at that exact line, turning a potential silent bug into an instant, loud one.\n\nWhen to use which:\n  - let  = a value that CHANGES during play (reassignable).\n    let carX = 165;   // the car moves, so carX changes\n    let score = 0;    // the score climbs\n  - const = a value FIXED for the whole game (cannot be reassigned).\n    const LANE_WIDTH = 130;  // lanes never resize\n\nRule of Thumb:\n  Default to const; switch to let only when you actually need to reassign. Reassigning a const throws an error.",
      keywords: "javascript let const difference declaring variables"
    },
    {
      name: "Primitive Data Types (Number, String, Boolean)",
      desc: "Core Definition:\n  The type of a value decides what the computer can do with it. Three primitives power the racing game.\n\nWhy It Matters:\n  Every value in JavaScript carries a type, and operators behave completely differently depending on it — + adds Numbers but glues Strings together instead. Mixing up a Number with a String that LOOKS like a number is one of the most common beginner bugs, because JavaScript does not stop you or throw an error; it just silently performs the wrong operation.\n\nCheat Sheet:\n  - Number  (no quotes): let speed = 10;      // math works: speed + 5 = 15\n  - String  (in quotes): let label = \"Speed\"; // text, joined with +\n  - Boolean (true/false): let gameActive = false; // a yes/no switch\n\nThe Quoted-Number Trap:\n  let speed = \"10\";   // LOOKS like 10, but it is a String\n  speed += 5;         // result is \"105\" (text glued), NOT 15\n  Remove the quotes so the browser does math instead of concatenation.",
      keywords: "javascript data types number string boolean typeof"
    },
    {
      name: "Assignment & Arithmetic Operators",
      desc: "Core Definition:\n  Operators read the right-hand side first, then write the result back into the variable.\n\nWhy It Matters:\n  Nearly every piece of game-state math — moving a car, adding score, draining health — is one of these operators applied to a variable that already holds a value. Understanding that the right side is evaluated FIRST, using the OLD value, before the new value is stored back is what makes speed += 10 (and not some other order) actually make sense.\n\nCheat Sheet:\n  =    assign:      score = 0;\n  +=   add & store: speed += 10;   // speed = speed + 10\n  ++   increment:   score++;       // score = score + 1\n  -=   subtract:    carX -= 130;   // move one lane left\n\nWhy order matters:\n  In score = score + 1, the browser computes score + 1 FIRST, then stores it. This is why speed += 10 depends on speed already being a Number.",
      keywords: "javascript assignment operators increment plus equals"
    },
    {
      name: "Connecting JavaScript to HTML (Inline vs. External <script>)",
      desc: "Core Definition:\n  JavaScript does nothing on its own — it has to be loaded INTO an HTML page before the browser will run it. There are two ways to connect the two: write the JS directly inside the HTML file (INLINE), or write it in its own separate .js file and LINK to it from the HTML with a <script src=\"...\"> tag (EXTERNAL).\n\nWhy It Matters:\n  Every exercise and project task from this session onward assumes your variables actually run somewhere. If a <script> tag is missing, placed wrong, or points to the wrong filename, the browser silently shows a blank page or an unchanged one — with no error dialog telling you 'JavaScript never loaded.' Knowing exactly how the connection is supposed to work is what lets you spot that specific failure instead of assuming the JS code itself is wrong.\n\nMethod 1 - Inline (JS written directly inside the HTML file):\n  <body>\n    <script>\n      let score = 0;\n      console.log(score);\n    </script>\n  </body>\n\nMethod 2 - External (JS in its own file, linked from HTML):\n  game.js (separate file):\n    let score = 0;\n    console.log(score);\n\n  index.html:\n  <body>\n    <script src=\"game.js\"></script>\n  </body>\n\nWhy External Is the Professional Default:\n  Keeping JS in its own file separates STRUCTURE (HTML) from BEHAVIOR (JS) — the same 'one job per technology' idea from Session 1's web stack concept. It also means one game.js file can be reused or replaced without touching the HTML at all.\n\nThe Placement Rule (why <script> usually goes at the bottom of <body>):\n  The browser reads a page top-to-bottom. If <script src=\"game.js\"> appears BEFORE the HTML elements it looks for (e.g. document.getElementById(\"player-car\")), those elements don't exist in the DOM yet — the lookup returns null and the script silently fails. Placing <script> as the LAST thing inside <body> guarantees every element above it has already been parsed.",
      keywords: "script tag src inline external link javascript html connect"
    }
  ],
  'l1-s5': [
    {
      name: "Event-Driven Programming (addEventListener)",
      desc: "Core Definition:\n  Instead of running top-to-bottom once, event-driven code waits and reacts. A listener runs your function every time an action happens.\n\nWhy It Matters:\n  This is a fundamentally different execution model from Session 1's sequential, top-to-bottom code — an event listener does not run at a predictable moment, it runs whenever the browser decides the event happened, which could be zero times or a thousand times. Nearly everything interactive in a real application (buttons, forms, games) is built on this reactive pattern instead of a single top-to-bottom script.\n\nSyntax Blueprint:\n  window.addEventListener(\"keydown\", function(event) {\n    // this block runs on EVERY key press\n  });\n\nWhy the window scope:\n  Binding to window catches key presses anywhere on the page, so the car responds no matter what is focused.",
      keywords: "javascript addEventListener keydown event driven"
    },
    {
      name: "The Event Object (event.key)",
      desc: "Core Definition:\n  When a listener fires, the browser hands your function an event object describing what happened. For keys, event.key holds the exact key name.\n\nWhy It Matters:\n  The event object is the ONLY way your code learns which key, button, or element triggered the listener — without reading event.key, a single keydown listener would have no way to tell an ArrowLeft press from a Spacebar press. Because the key names are exact, case-sensitive strings defined by the browser (not something you invent), a single typo silently breaks the match with no error message at all.\n\nExact Key Strings (case-sensitive!):\n  - Left arrow  -> \"ArrowLeft\"   (NOT \"left\")\n  - Right arrow -> \"ArrowRight\"\n  - Spacebar    -> \" \"          (a single space, NOT \"Space\")\n\nCommon Bug:\n  if (event.key === \"left\") { ... }  // never true; nothing happens, no error\n  Use the exact string \"ArrowLeft\" so the comparison can match.",
      keywords: "javascript event.key ArrowLeft keyboard event object"
    },
    {
      name: "Reflecting State to the DOM (style.left)",
      desc: "Core Definition:\n  Changing a variable only updates memory. To MOVE the car on screen you must write the new value into the element's style.\n\nWhy It Matters:\n  This is the bridge between Session 1's variables (memory) and Session 2's DOM (what the player sees) — the two are never automatically connected. A variable can change a thousand times in memory, but the car will not visually move a single pixel until you explicitly write that value into the element's style. Forgetting this step is the single most common reason a beginner's 'working' logic produces zero visible effect on screen.\n\nSyntax:\n  let carEl = document.getElementById(\"player-car\");\n  carEl.style.left = carX + \"px\";   // note the \"px\" unit!\n\nThe Missing-Unit Bug:\n  carEl.style.left = carX;   // 165 with no unit is invalid CSS -> ignored\n  CSS position values need a unit, so concatenate \"px\" to make \"165px\".",
      keywords: "javascript style.left px unit DOM update getElementById"
    }
  ],
  'l1-s6': [
    {
      name: "Conditional Statements (If-Else branching)",
      desc: "Core Definition:\n  Allows the computer to run different blocks of code based on whether a condition is true or false.\n\nWhy It Matters:\n  This is the first tool in the course that lets a program make a DECISION instead of just executing a fixed sequence — every boundary check, win/lose condition, and safety guard in the racing game depends on if/else. Without conditionals, code can only ever do the exact same thing regardless of what state the game is currently in.\n\nJavaScript Syntax Blueprint:\n  if (speed > 100) {\n    alert(\"Danger: Speed threshold exceeded!\");\n  } else if (speed > 60) {\n    alert(\"Cruising speed reached.\");\n  } else {\n    alert(\"Vehicle slow or stopped.\");\n  }\n\nKey Rule:\n  The computer checks these conditions from top-to-bottom. The first one that evaluates to true is run, and the rest are ignored.", 
      keywords: "javascript if else if syntax conditional code blocks" 
    },
    { 
      name: "Logical Operators (AND, OR, NOT)",
      desc: "Core Definition:\n  Operators used to link multiple checks inside conditional statements.\n\nWhy It Matters:\n  Real conditions are rarely a single check — 'can the car move' depends on the gear AND the brake being released at the same moment. Logical operators let one if statement express a compound rule directly, instead of nesting several separate if statements inside each other, which quickly becomes hard to read and easy to get wrong.\n\nOperators Cheat Sheet:\n  - AND (&&): Both sides must be true.\n    if (gearState === \"DRIVE\" && footbrakeReleased === true) { ... }\n  - OR (||): At least one side must be true.\n    if (sensorAlertActive || manualEmergencyPressed) { ... }\n  - NOT (!): Inverts true to false, or false to true.\n    if (!engineRunning) { startEngine(); }", 
      keywords: "javascript logical operators AND OR NOT syntax boolean" 
    },
    { 
      name: "Logical Priority and Overrides",
      desc: "Core Definition:\n  Designing condition hierarchies so that safety triggers are evaluated before routine operations.\n\nWhy It Matters:\n  An if/else if chain stops at the FIRST condition that is true, so the ORDER you write branches in is itself a design decision, not just style. Placing a low-priority check before a safety-critical one means the safety check can be skipped entirely on frames where both would be true — this is the same 'order of checks' idea as Session 1's preconditions, now applied to branching logic.\n\nOrder Priority Pitfall:\n  If you check normal inputs before emergency triggers, the emergency triggers will be ignored!\n\n  // ❌ INCORRECT (Car accelerates even if emergency brake is pressed):\n  if (gasPedalPressed) { speed += 5; }\n  else if (emergencyHaltActive) { speed = 0; }\n\n  // ✅ CORRECT (Emergency override evaluated first):\n  if (emergencyHaltActive) { speed = 0; }\n  else if (gasPedalPressed) { speed += 5; }", 
      keywords: "condition overrides precedence safety priority programming" 
    }
  ],
  'l1-s7': [
    {
      name: "Loop Structures (For vs. While)",
      desc: "Core Definition:\n  Loops repeat a block of code multiple times without rewriting it manually.\n\nWhy It Matters:\n  Loops are what make code scale — spawning 20 obstacles by copy-pasting one line 20 times is exactly the kind of repetition programming exists to eliminate. Choosing for vs while is really answering 'do I know the exact repeat count in advance, or am I repeating until some condition changes' — picking the wrong one makes the loop awkward to write correctly.\n\nWhen to use which:\n  - For Loop (Counting): Use when you know exactly how many times to repeat.\n    for (let i = 0; i < 5; i++) {\n      // Runs 5 times (i starts at 0, goes up to 4)\n      spawnObstacle();\n    }\n  - While Loop (Condition-bound): Use when repeating based on a status condition.\n    while (fuelGallons > 0) {\n      consumeFuel();\n      fuelGallons--; // Ensure condition changes!\n    }", 
      keywords: "for loop syntax javascript, while loop code templates" 
    },
    { 
      name: "Infinite Loop Traps & CPU Lockouts",
      desc: "Core Definition:\n  A severe logic error where a loop's condition never becomes false. The computer runs the loop infinitely, freezing the browser.\n\nWhy It Matters:\n  This is the most dangerous class of bug you will meet so far, because it does not crash with a helpful error message — it freezes the entire browser tab, sometimes the whole computer, with zero feedback about why. Every loop you write needs an honest answer to 'what exactly makes this condition eventually become false?' before you ever run it.\n\nCommon Loop Bug:\n  let counter = 0;\n  while (counter < 5) {\n    console.log(\"Executing...\");\n    // ❌ Error: forgot 'counter++;'. counter is always 0. Loop never exits!\n  }\n\nRules to Prevent CPU Lockouts:\n  1. Double check that your check variable updates inside the loop body.\n  2. Ensure the check moves closer to the loop exit threshold on each run.", 
      keywords: "browser tab freezes loop error, infinite loop exit conditions" 
    },
    { 
      name: "Loop Controls (Break and Increments)",
      desc: "Core Definition:\n  Controls that let you change loop behaviors mid-flight.\n\nWhy It Matters:\n  break gives a loop an emergency exit that isn't tied to its normal counting condition — essential for something like collision detection, where you want to stop checking the instant a hit is found instead of wasting time checking everything else. This is the loop-level version of the early-return pattern you will see again with functions.\n\nKeywords Cheat Sheet:\n  - Increment (e.g. i++): Shorthand for i = i + 1. Shifts the loop state forward.\n  - Break: Instantly exits the loop, skipping any remaining cycles.\n\nJavaScript Syntax:\n  for (let i = 0; i < 10; i++) {\n    if (collisionDetected) {\n      break; // Stop running immediately\n    }\n    moveObstacles();\n  }", 
      keywords: "break statement javascript loop, loop counter increment syntax"
    }
  ],
  'l1-s8': [
    {
      name: "Function Declarations & Parameters",
      desc: "Core Definition:\n  A function packages a repeatable action under a name you can call whenever needed.\n\nWhy It Matters:\n  Functions are how you turn Session 1's 'process' step into a reusable, named tool instead of retyping the same block of logic everywhere it is needed. Anywhere the exact same steps are needed more than once — moving the car, scoring a hit — a function means fixing a bug in ONE place instead of hunting down every copy of it.\n\nSyntax Blueprint:\n  function updatePlayerPosition() {           // 0 parameters\n    document.getElementById(\"player-car\").style.left = carX + \"px\";\n  }\n  function calculateScore(distance, mult) {   // 2 parameters\n    return distance * mult;                    // hands a value back\n  }\n\nCall it by name:\n  updatePlayerPosition();\n  let s = calculateScore(100, 2);  // s is 200",
      keywords: "javascript function declaration parameters return call"
    },
    {
      name: "Global vs. Local Scope",
      desc: "Core Definition:\n  Where you DECLARE a variable decides who can see it.\n\nWhy It Matters:\n  Scope is what makes the shared-state bug below possible in the first place — two functions that each declare their own local carX are NOT sharing a car position at all, they are silently working with two completely separate variables that happen to have the same name. This is one of the most confusing bug classes for beginners precisely because the code looks correct and runs without any error.\n\nThe Rule:\n  - Declared OUTSIDE all functions = GLOBAL: every function can read/change it.\n  - Declared INSIDE a function = LOCAL: only that function can see it; it vanishes when the function ends.\n\nThe Scope Bug:\n  function moveLeft() { let carX = 165; carX -= 130; }  // local carX\n  function render()  { console.log(carX); }             // logs undefined!\n  Both functions must share ONE carX declared once in the outer scope.",
      keywords: "javascript scope global local variable undefined"
    },
    {
      name: "Modular Design (single-purpose functions)",
      desc: "Core Definition:\n  Split one long script into small functions that each do ONE job. Fewer copies of a line means fewer places for a bug to hide.\n\nWhy It Matters:\n  This is the practical payoff of everything learned so far — functions, scope, and parameters combine into a codebase where each piece has one clear job. A tangled script with logic copy-pasted in three places means every bug fix has to be applied three times, and it's easy to miss one; small single-purpose functions mean a fix in one place is a fix everywhere it's used.\n\nWhy it pays off:\n  - A shared updatePlayerPosition() is fixed once, not in every branch.\n  - moveLeft() / moveRight() clamp their own boundary, then call the shared renderer.\n  - The keydown handler just calls moveLeft()/moveRight() by name.\n\nReadability = maintainability: a reviewer with 10 minutes understands small, well-named functions far faster than one tangled block.",
      keywords: "javascript modular functions refactor single responsibility"
    }
  ],
  'l1-s9': [
    {
      name: "The Game Loop (requestAnimationFrame)",
      desc: "Core Definition:\n  A game is an animation: each frame updates state, redraws, then books the next frame. requestAnimationFrame runs your function about 60 times per second, in sync with the screen.\n\nWhy It Matters:\n  requestAnimationFrame ties your update logic to the SCREEN's own refresh rate instead of an arbitrary timer, which is why the animation stays smooth and battery-friendly (the browser automatically pauses it on a hidden tab). This is also the course's first real encounter with recursion — a function scheduling itself to run again — a pattern that reappears anywhere work needs to repeat indefinitely rather than a fixed number of times.\n\nRecursion Blueprint:\n  function gameLoop() {\n    moveObstacles();\n    requestAnimationFrame(gameLoop);  // schedule the NEXT frame\n  }\n  gameLoop();  // kick it off once\n\nThe last line is what makes it a loop — remove it and the game updates once, then freezes.",
      keywords: "javascript requestAnimationFrame game loop recursion 60fps"
    },
    {
      name: "The gameActive Gate",
      desc: "Core Definition:\n  A single Boolean decides whether the loop keeps running. Check it at the top of every frame and return early when the game is over.\n\nWhy It Matters:\n  A recursive loop has no natural stopping point unless you give it one — requestAnimationFrame will keep calling gameLoop forever unless a condition inside it explicitly refuses to schedule the next frame. gameActive is that single source of truth: every other system (score display, restart button) can check the same flag instead of each needing its own separate logic for 'is the game currently running.'\n\nSyntax:\n  function gameLoop() {\n    if (!gameActive) { return; }   // stop: do not schedule another frame\n    moveObstacles();\n    requestAnimationFrame(gameLoop);\n  }\n\nWithout this gate, 'Game Over' is impossible — positions keep updating forever.",
      keywords: "javascript game state flag boolean loop halt"
    },
    {
      name: "Frame Updates & Wrap-Around Reset",
      desc: "Core Definition:\n  Each frame nudges the obstacle down by speed; once it passes the bottom it wraps back to the top and scores a point.\n\nWhy It Matters:\n  This is the animation trick behind every endless-scroller: instead of creating a new obstacle object for every pass — which would grow an array forever, foreshadowing Level 2's memory-leak lessons — one obstacle is recycled by resetting its position once it exits the screen. The order matters: checking the wrap BEFORE moving, or placing the score increment outside the reset block, would silently miscount passes.\n\nSyntax:\n  obstacleY += speed;            // scroll down\n  if (obstacleY > 500) {         // passed the bottom (track height)\n    obstacleY = -100;            // respawn above the top\n    score += 10;                 // a pass is worth points\n  }\n\nThe score increment must live INSIDE the reset block — passing an obstacle is what earns the points.",
      keywords: "javascript animation coordinate update wrap reset score"
    }
  ],
  'l1-s10': [
    {
      name: "Axis-Aligned Bounding Box (AABB) Overlap",
      desc: "Core Definition:\n  Two rectangles overlap only when they overlap on BOTH axes at once. The check is four edge comparisons joined by &&.\n\nWhy It Matters:\n  This is the mathematical foundation for every 'did two things touch' check you will write, in this game and beyond — it works identically whether the boxes are cars, UI buttons, or bullets and enemies in a completely different game. Because all four comparisons are joined with &&, ALL must be true simultaneously; overlap on only three of the four edges still means the boxes are apart.\n\nThe Formula:\n  function checkCollision(a, b) {\n    return (\n      a.x < b.x + b.width  &&   // a's left  is past b's right?\n      a.x + a.width > b.x  &&   // a's right is past b's left?\n      a.y < b.y + b.height &&   // a's top   is past b's bottom?\n      a.y + a.height > b.y      // a's bottom is past b's top?\n    );\n  }\n\nFlip even one operator and the combined && can never be true — collisions silently never fire.",
      keywords: "AABB collision detection bounding box overlap javascript"
    },
    {
      name: "Why Dimensions Matter",
      desc: "Core Definition:\n  Comparing only center points (player.x === obstacle.x) almost never matches — two moving cars rarely share the exact same pixel. You must compare the box EDGES, which means using width and height.\n\nWhy It Matters:\n  A point has no size, so comparing two points for equality is really asking 'are these two objects occupying the exact same single pixel,' which almost never happens even during a real collision. Real collision detection has to reason about the SPACE each object occupies, not just its anchor coordinate — which is exactly what AABB's four edge comparisons do.\n\nBox from position + size:\n  const player = { x: carX, y: 380, width: 60, height: 100 };  // real car size\n  Each edge is x/y plus the width/height, so the overlap test is size-aware, not point-based.",
      keywords: "collision width height bounding box center point"
    },
    {
      name: "Wiring Collision into the Loop",
      desc: "Core Definition:\n  Detecting a crash is useless unless something happens. Call the check each frame and end the game on a hit.\n\nWhy It Matters:\n  This session closes the loop between having a check (this session's checkCollision formula) and having it actually matter — the collision check has to be actively invoked once per frame inside gameLoop, and its result has to actually change game state (Session 9's gameActive gate), or the 'crash' is purely theoretical and nothing on screen ever reacts to it.\n\nSyntax (inside gameLoop):\n  if (checkCollision(player, obstacle)) {\n    gameActive = false;              // stops the loop (Session 9 gate)\n    console.log(\"Collision detected!\");\n  }\n\nThis is what turns 'they touched' into 'game over'.",
      keywords: "collision game loop gameActive game over trigger"
    }
  ],
  'l1-s11': [
    {
      name: "textContent vs. innerHTML (safety)",
      desc: "Core Definition:\n  Both write into an element, but they treat the input differently.\n\nWhy It Matters:\n  Real applications regularly display data that ultimately came from a user — a username, a chat message, a saved score — and innerHTML will happily execute any <script> tag hiding inside that data, a real attack called Cross-Site Scripting (XSS). textContent can never do this, because it treats absolutely everything as literal text, never as markup to render.\n\nThe Difference:\n  - textContent: writes PLAIN TEXT. Safe and fast.\n    document.getElementById(\"score-val\").textContent = score;\n  - innerHTML: PARSES the input as HTML, so untrusted data could inject and run a <script>.\n\nRule: for a plain value like a score, always prefer textContent — no injection risk, no HTML parsing cost.",
      keywords: "textContent innerHTML script injection XSS safe DOM"
    },
    {
      name: "Toggling Visibility with a .hidden Class",
      desc: "Core Definition:\n  Show or hide panels by adding/removing a CSS class, not by creating or destroying elements. The restart panel already exists in the HTML, hidden by .hidden { display: none; }.\n\nWhy It Matters:\n  This reuses the exact id/class system from Session 2 for a new purpose: instead of building or destroying DOM elements at runtime — slower, and easy to lose track of — you keep every UI panel permanently in the HTML and simply flip whether CSS is hiding it. It is cheaper, and it means the game-over panel's content never has to be rebuilt from scratch.\n\nSyntax:\n  el.classList.remove(\"hidden\");  // reveal the game-over panel\n  el.classList.add(\"hidden\");     // hide it again on restart\n\nAs long as the class is on the element it stays invisible — forgetting to remove it leaves the game-over screen stuck.",
      keywords: "javascript classList hidden class toggle visibility display none"
    },
    {
      name: "Defensive Output Guards",
      desc: "Core Definition:\n  Clamp a value to something sensible BEFORE writing it to the screen, so bad math never shows the player a broken UI.\n\nWhy It Matters:\n  This is the same preconditions mindset from Session 1, now applied to OUTPUT instead of input — before a value reaches the screen, check whether it is still sensible. A restart button that resets score but forgets carX or gameActive produces a UI that LOOKS reset while the underlying game state is still broken, which is a uniquely confusing bug to track down because the visible symptom (a frozen car) does not obviously point back to the restart handler.\n\nSyntax:\n  if (score < 0) { score = 0; }                 // no negative scores\n  document.getElementById(\"score-val\").textContent = score;\n\n'Never trust the value, guard the output' — the restart handler must also reset every piece of state (score, car position, gameActive) or the game looks reset but will not move.",
      keywords: "javascript defensive check clamp validation negative score"
    }
  ],
  'l1-s12': [
    {
      name: "The CONFIG Object (no magic numbers)",
      desc: "Core Definition:\n  Gather every tunable number into one object so the game's feel can be retuned by editing a single place instead of hunting through the code.\n\nWhy It Matters:\n  This is Session 8's modular-design idea applied to DATA instead of functions — as a project grows across many sessions, the same tunable number (a speed, a boundary, a threshold) tends to get referenced in several places. A single named CONFIG object means retuning the whole game's feel is a one-line edit instead of a search-and-hope across hundreds of lines.\n\nSyntax:\n  const CONFIG = {\n    startSpeed: 5,\n    difficultyMultiplier: 0.1,\n    maxSpeed: 15,\n    leftBound: 35,\n    rightBound: 295\n  };\n  if (carX > CONFIG.leftBound) { carX -= 130; }  // reads from config, not a literal\n\nScattered 'magic numbers' are hard to find and change; a config object gives each one a named home.",
      keywords: "javascript config object magic numbers constants maintainable"
    },
    {
      name: "Difficulty Scaling with a Clamp",
      desc: "Core Definition:\n  Difficulty should ramp with score but never become impossible, so cap it with Math.min.\n\nWhy It Matters:\n  Any formula that scales with an unbounded input — score can climb forever — will eventually produce an absurd or unplayable result unless something caps it. Math.min is the general-purpose 'never exceed this ceiling' tool, useful anywhere a value trends upward without a natural stopping point, not just for game speed.\n\nSyntax:\n  let speed = CONFIG.startSpeed + score * CONFIG.difficultyMultiplier;\n  speed = Math.min(speed, CONFIG.maxSpeed);   // never exceed the ceiling\n\nOrder of operations: the multiply runs before the add (5 + 50*0.1 = 10). The clamp is the same idea as Session 6's boundary guard, now sourced from CONFIG.",
      keywords: "javascript Math.min clamp difficulty scaling max speed"
    },
    {
      name: "Smoke Tests & Regression QA",
      desc: "Core Definition:\n  A final QA pass verifies EVERY system still works, not just the last thing you touched: variables, boundaries, collision, restart.\n\nWhy It Matters:\n  A finished project accumulates many small interacting systems — movement, collision, scoring, restart — and fixing one late-session bug can easily and silently break an earlier one. A smoke-test checklist re-verifies the WHOLE system rather than just the newest feature, which is the same discipline behind this course's 'Test & Break It' step, now applied to the finished project as a whole.\n\nSmoke test idea:\n  console.log(\"Boundary:\", carX >= 35 && carX <= 295 ? \"PASS\" : \"FAIL\");\n  A regression shows up as a visible FAIL line instead of a silent break.\n\nWatch for inconsistent operators (> in one place, >= in another) — the rare edge-case gaps an adversarial 'Malicious QA Officer' will hunt for.",
      keywords: "smoke test regression QA console.log pass fail boundary"
    }
  ],
  'l2-s1': [
    {
      name: "Canvas vs. DOM Rendering (Immediate vs. Retained Mode)",
      desc: "Core Definition:\n  The DOM keeps a tree of persistent elements the browser remembers and re-paints for you (retained mode) — an L1 <div> stays on screen until you change its CSS. A <canvas> has no memory of what it drew: it is a raw grid of pixels, and YOU issue draw commands every frame to put color there (immediate mode). Nothing is remembered between frames.\n\nWhy this changes everything:\n  - DOM: document.getElementById(\"player-car\").style.left = carX + \"px\"; — the browser tracks the element and moves it.\n  - Canvas: ctx.fillRect(ship.x, ship.y, ship.width, ship.height); — this paints pixels ONCE. If you don't redraw next frame, the ship is just a static picture, not an object you can look up later.\n\nRule of Thumb:\n  On canvas there is no 'the ship element' to select — only x/y numbers in your own object and the pixels you painted from them.",
      keywords: "canvas vs dom immediate mode retained mode rendering"
    },
    {
      name: "Getting the 2D Context",
      desc: "Core Definition:\n  Before you can draw anything, you need a reference to the <canvas> element AND a 'drawing context' object that exposes the actual draw methods.\n\nWhy It Matters:\n  This one-time setup is the gateway to everything else in Level 2 — every single draw call from here on starts with ctx., so a typo or a missing getContext(\"2d\") call means nothing downstream can run, usually surfacing as a confusing 'ctx is undefined' error before any game code even executes.\n\nSyntax Cheat Sheet:\n  <canvas id=\"defense-arena\" width=\"480\" height=\"600\"></canvas>\n\n  const canvas = document.getElementById(\"defense-arena\");\n  const ctx = canvas.getContext(\"2d\");   // ctx is the toolbox: fillRect, clearRect, etc.\n\nWhy Two Variables:\n  canvas is the HTML element (used for width/height); ctx is the pen you actually draw with. Almost every draw call in the game will be ctx.something(...), never canvas.something(...).",
      keywords: "canvas getContext 2d javascript setup width height"
    },
    {
      name: "Drawing Primitives (fillRect, fillStyle, strokeRect)",
      desc: "Core Definition:\n  Canvas has no shape elements — you draw rectangles directly onto the pixel grid with coordinate and size arguments.\n\nWhy It Matters:\n  fillRect and fillStyle are the entire vocabulary for putting color on screen in Level 2 — there is no <div> or CSS class to fall back on. Every shape in the game, from the ship to the shield blocks to the aliens, is built from nothing but these two calls repeated with different coordinates.\n\nSyntax Blueprint:\n  ctx.fillStyle = \"#22cc88\";                 // set the paint color BEFORE drawing\n  ctx.fillRect(x, y, width, height);          // solid filled rectangle (e.g. a shield block)\n  ctx.strokeStyle = \"#ffffff\";\n  ctx.strokeRect(x, y, width, height);        // outline-only rectangle\n\nWorked Example (a shield block):\n  ctx.fillStyle = \"#22cc88\";\n  ctx.fillRect(200, 500, 40, 40);   // paints a 40x40 green block at (200, 500)\n\nOrder Matters:\n  fillStyle must be set BEFORE fillRect is called — it colors whatever you draw next, not what you already drew.",
      keywords: "canvas fillRect fillStyle strokeRect draw rectangle"
    },
    {
      name: "clearRect and the Ghost-Trail Bug",
      desc: "Core Definition:\n  Because canvas never erases itself automatically, every new frame's drawing PILES ON TOP of the last one unless you clear the pixels first.\n\nCommon Mistake Comparison:\n  // ❌ WRONG (no clear — draws pile up into a smear trail):\n  function gameLoop() {\n    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);\n    ship.x += ship.speed;\n    requestAnimationFrame(gameLoop);\n  }\n\n  // ✅ CORRECT (clear the whole canvas first, then draw):\n  function gameLoop() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);   // wipe last frame's pixels\n    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);\n    ship.x += ship.speed;\n    requestAnimationFrame(gameLoop);\n  }\n\nRule of Thumb:\n  clearRect must run FIRST in every frame, before any fillRect calls, or the ship leaves a solid streak instead of appearing to move.",
      keywords: "canvas clearRect ghost trail smear bug animation loop"
    }
  ],
  'l2-s2': [
    {
      name: "Sprite Object Literals",
      desc: "Core Definition:\n  A sprite bundles all of an on-screen entity's properties (position, size, speed) into one object literal, so canvas code always has a single source of truth to read from and write to.\n\nSyntax Blueprint:\n  let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };\n\n  console.log(ship.x);      // reads the current x (200)\n  ship.x = ship.x + 10;     // writes a new x back onto the same object\n\nWhy an object instead of five loose variables:\n  Passing one ship object into a draw or move function is far cleaner than passing shipX, shipY, shipWidth, shipHeight, shipSpeed separately — and every property travels together.",
      keywords: "javascript object literal properties dot notation sprite"
    },
    {
      name: "Mutating Object Properties per Frame",
      desc: "Core Definition:\n  Each frame, movement and rendering both read/write the SAME sprite object's properties — moving it means changing a number stored on the object, then drawing from that same object.\n\nSyntax Blueprint:\n  ship.x += ship.speed;    // update position in memory\n  ctx.fillRect(ship.x, ship.y, ship.width, ship.height);  // draw from the SAME object's current values\n\nWhy Order Matters:\n  If you draw before updating, the ship appears to lag one frame behind its real position. Update the object's numbers first, then paint from them.",
      keywords: "javascript object property mutation increment canvas draw"
    },
    {
      name: "Variable Shadowing Bug",
      desc: "Core Definition:\n  Declaring a new variable with the SAME name inside a nested block (like an event handler) creates a separate, local variable that hides — 'shadows' — the outer one. Code inside that block now silently reads/writes the wrong copy.\n\nWhy It Matters:\n  This bug is dangerous specifically because it produces no error at all — the code runs, the handler fires, a value even changes — just on the wrong copy of the object. It is the sprite-object version of Level 1's global/local scope lesson, and it is exactly the kind of bug that forces you to trace WHERE a variable was declared, not just what its name is.\n\nCommon Mistake Comparison:\n  // ❌ WRONG (re-declares ship inside the handler — shadows the global):\n  let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };\n  window.addEventListener(\"keydown\", function(event) {\n    let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };  // NEW local ship!\n    if (event.key === \"ArrowLeft\") { ship.x -= ship.speed; }         // changes the LOCAL copy only\n  });\n  // The global ship never moves — the game loop keeps drawing the untouched original.\n\n  // ✅ CORRECT (reuse the existing global ship, don't re-declare it):\n  let ship = { x: 200, y: 500, width: 40, height: 40, speed: 5 };\n  window.addEventListener(\"keydown\", function(event) {\n    if (event.key === \"ArrowLeft\") { ship.x -= ship.speed; }         // mutates the ONE shared object\n  });\n\nRule of Thumb:\n  Never re-declare a sprite variable with let/const inside a function that should be updating the outer one — assign to its properties instead.",
      keywords: "javascript variable shadowing let scope bug silent fail"
    }
  ],
  'l2-s3': [
    {
      name: "Arrays as Ordered Lists (push, pop, length, index)",
      desc: "Core Definition:\n  An array holds multiple values in one ordered, numbered list — perfect for tracking however many lasers happen to be on screen at once, instead of one variable per laser.\n\nWhy It Matters:\n  A racing game (Level 1) only ever had ONE car, so a single variable was enough. The moment a game needs an unpredictable NUMBER of things on screen at once — however many lasers are currently in flight — a single variable can't represent that, and an array becomes the only workable structure.\n\nSyntax Cheat Sheet:\n  let lasers = [];                    // starts empty\n  lasers.push({ x: ship.x, y: ship.y });  // adds a new laser object to the END of the list\n  lasers.length;                      // how many lasers currently exist\n  lasers[0];                          // the FIRST laser (arrays are zero-indexed)\n  lasers.pop();                       // removes the LAST laser\n\nWorked Example (fire on spacebar):\n  window.addEventListener(\"keydown\", function(event) {\n    if (event.key === \" \") {\n      lasers.push({ x: ship.x, y: ship.y });  // spawn a laser object at the ship's position\n    }\n  });",
      keywords: "javascript array push pop length index syntax"
    },
    {
      name: "Looping Over Sprite Arrays",
      desc: "Core Definition:\n  A single sprite object needs no loop, but a LIST of sprites (lasers) needs a loop to touch every item once per frame — updating position and drawing each one.\n\nSyntax Blueprint:\n  for (let i = 0; i < lasers.length; i++) {\n    lasers[i].y -= 7;                                       // move this laser up\n    ctx.fillRect(lasers[i].x, lasers[i].y, 4, 10);           // draw this laser\n  }\n\nWhy lasers.length and not a fixed number:\n  The array can grow (new lasers pushed) or shrink (old ones removed) at any time, so the loop must re-check .length rather than hard-coding e.g. 'i < 3'.",
      keywords: "javascript for loop array iteration update draw"
    },
    {
      name: "Spawning Objects on Events",
      desc: "Core Definition:\n  A keypress event is the TRIGGER; the RESPONSE is building a brand-new object literal and pushing it into the tracking array — the same push()-on-event pattern used for any spawned entity.\n\nWhy It Matters:\n  This is the same 'event triggers a response' pattern from Level 1's keydown listener, but the response is now 'grow a collection' instead of 'change one variable.' Recognizing push()-on-event as its own reusable pattern is what lets you spawn any kind of entity — particles, pickups, enemies — later without relearning the idea from scratch.\n\nSyntax Blueprint:\n  window.addEventListener(\"keydown\", function(event) {\n    if (event.key === \" \") {\n      lasers.push({ x: ship.x, y: ship.y });   // new object literal, pushed into the array\n    }\n  });\n\nThe Key-Repeat Stutter Issue:\n  A plain keydown listener only fires once per press, then repeats after the OS's key-repeat delay — so held-down fire feels laggy and stuttery rather than a smooth stream of lasers. Fixing this needs a continuous held-key state (tracked separately, not solved by keydown alone) — a technique covered in a later session.",
      keywords: "javascript keydown event push spawn object keyrepeat stutter"
    }
  ],
  'l2-s4': [
    {
      name: "Off-Screen Detection (laser.y < 0)",
      desc: "Core Definition:\n  A laser that has scrolled above the top of the canvas is doing nothing useful — checking its y coordinate against a bound is the RULE that decides when it should be removed.\n\nSyntax Blueprint:\n  if (lasers[i].y < 0) {\n    // this laser has left the visible canvas — mark it for cleanup\n  }\n\nWhy This Matters:\n  Without a bounds check, there is no signal telling the game a laser is 'done' — it would keep existing in the array and keep being looped over and drawn (off-screen, wastefully) forever.",
      keywords: "javascript bounds check off screen coordinate y less than"
    },
    {
      name: "splice() and the Index-Shift Trap",
      desc: "Core Definition:\n  array.splice(index, 1) removes one element and immediately shifts every element AFTER it down by one index. Looping FORWARD while splicing causes the loop to skip the element that just slid into the current index.\n\nWhy It Matters:\n  This bug is easy to miss in testing because it doesn't crash or throw — it just quietly skips cleanup on roughly every other stale entry, so the array shrinks more slowly than it should. Reverse iteration whenever a loop might splice its own array is a rule worth memorizing outright, because the bug it prevents is silent.\n\nCommon Mistake Comparison:\n  // ❌ WRONG (forward loop — skips an element after a splice):\n  for (let i = 0; i < lasers.length; i++) {\n    if (lasers[i].y < 0) {\n      lasers.splice(i, 1);   // element at i+1 shifts down to i, but i++ skips over it next pass\n    }\n  }\n\n  // ✅ CORRECT (reverse loop — safe because shifted indices are already behind i):\n  for (let i = lasers.length - 1; i >= 0; i--) {\n    if (lasers[i].y < 0) {\n      lasers.splice(i, 1);   // removing here only shifts indices we've ALREADY processed\n    }\n  }\n\nRule of Thumb:\n  Whenever a loop might splice() out of the SAME array it is iterating, count DOWN from length - 1 to 0.",
      keywords: "javascript array splice index shift bug reverse loop"
    },
    {
      name: "Memory Leaks from Unbounded Arrays",
      desc: "Core Definition:\n  If dead/off-screen lasers are never spliced out, the lasers array only ever grows — every frame's loop has more and more stale entries to iterate over and draw, even though they are invisible.\n\nWhy Frames Slow Down:\n  for (let i = lasers.length - 1; i >= 0; i--) { ... }   // cost scales with array length\n  An array that grows unbounded means this loop (and the draw calls inside it) does more work every single frame, even for objects that produce nothing on screen — eventually the frame rate visibly drops.\n\nRule of Thumb:\n  Every spawn (push) needs a matching cleanup path (splice) or the array — and the work per frame — only ever grows.",
      keywords: "javascript memory leak unbounded array performance frame rate"
    }
  ],
  'l2-s5': [
    {
      name: "2D Arrays (Rows of Arrays)",
      desc: "Core Definition:\n  A 2D array is an array whose elements are themselves arrays — a grid of rows and columns. grid[row][col] reads the array at index 'row', then reads index 'col' inside it.\n\nWhy It Matters:\n  A flat array (Session 3's lasers list) works when entities have no meaningful position relative to each other. An alien swarm is different — it has ROWS and COLUMNS that matter for spawning, marching, and later collision — and a 2D array is the direct data-shape match for that grid structure, rather than trying to fake rows and columns with math on a flat list.\n\nVisual Grid Mapped to Coordinates:\n  grid[0] -> [ 1, 1, 1, 1 ]   row 0\n  grid[1] -> [ 1, 1, 1, 1 ]   row 1\n  grid[2] -> [ 1, 1, 1, 1 ]   row 2\n\n  grid[1][2] -> the alien in row 1, column 2\n\nSyntax:\n  let grid = [\n    [1, 1, 1, 1],\n    [1, 1, 1, 1],\n    [1, 1, 1, 1]\n  ];\n  grid[1][2];  // reads row 1, column 2",
      keywords: "javascript 2d array grid rows columns nested array access"
    },
    {
      name: "Nested Loops (Drawing Every Alien)",
      desc: "Core Definition:\n  To visit every cell of a 2D array, wrap one loop inside another: the outer loop walks rows, the inner loop walks columns.\n\nSyntax Blueprint:\n  for (let row = 0; row < grid.length; row++) {\n    for (let col = 0; col < grid[row].length; col++) {\n      if (grid[row][col] === 1) {\n        let x = col * cellWidth;\n        let y = row * cellHeight;\n        ctx.fillRect(x, y, alienWidth, alienHeight);\n      }\n    }\n  }\n\nWhy both loops matter:\n  The outer loop alone only ever reaches one row; the inner loop alone has no row to read from. Together they touch every [row][col] pair exactly once.",
      keywords: "nested for loop 2d array javascript double loop grid"
    },
    {
      name: "March-and-Bounce Boundary Logic",
      desc: "Core Definition:\n  Each frame nudges the whole alien grid sideways by direction * speed. When any alien reaches a screen edge, flip direction and drop every alien down one step.\n\nWhy It Matters:\n  This is Level 1's boundary-clamp idea (Session 6) applied to a whole GROUP instead of one car — the direction flips for every alien at once, which is what makes the swarm feel like one coordinated unit rather than individually bouncing sprites. Checking the group's outer edge, not any single alien's position, is the detail that keeps the whole formation in sync.\n\nCheat Sheet:\n  alienX += direction * speed;   // direction is 1 (right) or -1 (left)\n\n  if (alienX > CONFIG.rightEdge || alienX < CONFIG.leftEdge) {\n    direction *= -1;              // reverse marching direction\n    for (let row = 0; row < grid.length; row++) {\n      for (let col = 0; col < grid[row].length; col++) {\n        alienYOffsets[row][col] += CONFIG.dropDistance;  // drop all y\n      }\n    }\n  }\n\nCommon Mistake:\n  Checking the edge using only one alien's x instead of the whole group's outer bound — some aliens bounce while others keep marching off-screen.",
      keywords: "javascript bounce boundary direction reverse sprite edge detection"
    },
    {
      name: "Grids as State (0 = Empty, 1 = Full)",
      desc: "Core Definition:\n  A destructible shield is a 2D array of small cells, where each cell's number represents whether it is still solid. 1 means the cell blocks lasers; 0 means it has already been shot away.\n\nWhy It Matters:\n  This reuses the exact same 2D-array shape as the alien grid, but the NUMBERS mean something different — not 'is there an alien here' but 'is this cell still solid.' Recognizing that a grid can represent any yes/no state per cell (alive/dead, solid/destroyed, visited/unvisited) is a far more reusable idea than memorizing 'shields use a grid.'\n\nVisual:\n  shieldGrid = [\n    [1, 1, 1, 1],\n    [1, 1, 1, 1],\n    [0, 1, 1, 0]   // corners already destroyed\n  ];\n\nDrawing only renders cells still equal to 1; a laser hit sets its cell to 0 so it disappears from both the render loop and the collision check.",
      keywords: "javascript grid array state destructible shield 0 1"
    },
    {
      name: "Coordinate-to-Index Mapping",
      desc: "Core Definition:\n  Lasers move in absolute pixel coordinates (x, y), but the shield is stored as row/col grid indices starting at the shield's own on-screen offset — not at pixel 0. To find which cell a laser hit, subtract the shield's starting offset first, then divide by the size of one cell and round down.\n\nWhy It Matters:\n  Two completely different coordinate systems are in play at once — pixels for rendering, grid indices for storage — and every hit-test has to convert between them correctly. This exact pixel-to-cell conversion pattern reappears anywhere a game overlays a logical grid on top of a pixel-based canvas, not just for shields.\n\nFormula:\n  col = Math.floor((laserX - shieldOffsetX) / cellWidth);\n  row = Math.floor((laserY - shieldOffsetY) / cellHeight);\n\nWorked Example:\n  laserX = 145, shieldOffsetX = 30, cellWidth = 50\n  col = Math.floor((145 - 30) / 50) = Math.floor(2.3) = 2   // hits the 3rd column (index 2)\n\nMath.floor is required — without it, 2.3 would not match any whole cell index. Skipping the offset subtraction is the classic bug here: it silently shifts every laser's hit-test by however many pixels the shield is offset from the canvas edge.",
      keywords: "javascript coordinate to grid index math.floor pixel to cell offset"
    },
    {
      name: "Out-of-Bounds Index Guards",
      desc: "Core Definition:\n  Math.floor(laserX / cellWidth) can produce an index outside the grid entirely if a laser is off to the side or the shield is smaller than the canvas. Reading grid[row][col] at an invalid index doesn't throw an error — it silently returns undefined.\n\nWhy It Matters:\n  JavaScript's refusal to error on an out-of-bounds array read is a trap, not a convenience — undefined quietly fails every === comparison, so bugs like this hide behind 'nothing happened' instead of a stack trace. Any time a coordinate is converted into an index (this session, and again for any tile-based system later), that index needs to be validated before it's trusted.\n\nCommon Mistake — The Invincible Shields:\n  // ❌ No bounds check:\n  if (shieldGrid[row][col] === 1) { ... }\n  // if col is -1 or too large, this reads undefined; undefined === 1 is false,\n  // so the laser is never detected as blocked — it silently passes through.\n\n  // ✅ Guarded:\n  if (row >= 0 && row < shieldGrid.length &&\n      col >= 0 && col < shieldGrid[0].length &&\n      shieldGrid[row][col] === 1) {\n    shieldGrid[row][col] = 0;   // destroy the cell\n  }\n\nRule:\n  Always validate row/col are inside the array's bounds BEFORE reading them.",
      keywords: "javascript array index out of bounds undefined guard check"
    }
  ],
  'l2-s6': [
    {
      name: "Why Single keydown Listeners Fail",
      desc: "Core Definition:\n  A single addEventListener(\"keydown\", ...) only tells you the LAST key pressed at a given instant. It cannot represent two keys held down at once (steering left while holding fire), because each keydown event fires and finishes independently.\n\nThe Problem:\n  window.addEventListener(\"keydown\", function(e) {\n    if (e.key === \"ArrowLeft\") { moveLeft(); }\n    if (e.key === \" \") { fireLaser(); }\n  });\n  // Holding ArrowLeft AND pressing Space: there is no shared memory of what is\n  // currently held down, so the handler only ever reacts to whichever event just fired.\n\nWhy it matters:\n  A real player needs to strafe AND fire in the same frame; a bare keydown handler has no persistent state to check 'is ArrowLeft still held' while handling Space.",
      keywords: "javascript keydown multiple keys at once simultaneous input"
    },
    {
      name: "The keysPressed Map (Key-State Object)",
      desc: "Core Definition:\n  Store the held/released status of every key in one object, keysPressed. keydown sets the key's value to true; keyup sets it back to false. The game loop reads this object every frame instead of relying on the event itself.\n\nWhy It Matters:\n  This is the fix for the previous concept's problem: instead of reacting to individual key EVENTS, the game loop now reads a persistent STATE object every frame, which is how it can see multiple keys held simultaneously. This event-to-state pattern — record it when it happens, read it continuously elsewhere — reappears constantly in real applications (tracking mouse position, tracking connection status).\n\nSyntax Blueprint:\n  let keysPressed = {};\n\n  window.addEventListener(\"keydown\", function(e) {\n    keysPressed[e.key] = true;\n  });\n  window.addEventListener(\"keyup\", function(e) {\n    keysPressed[e.key] = false;\n  });\n\n  // inside the game loop:\n  if (keysPressed[\"ArrowLeft\"]) { moveLeft(); }\n  if (keysPressed[\" \"]) { fireLaser(); }\n\nCommon Mistake Comparison — The Firing Spam Lock:\n  // ❌ WRONG (keydown only — no keyup listener):\n  let keysPressed = {};\n  window.addEventListener(\"keydown\", function(e) {\n    keysPressed[e.key] = true;\n  });\n  // keysPressed[\" \"] is now stuck true FOREVER once pressed — nothing ever resets it\n  if (keysPressed[\" \"]) { fireLaser(); }   // fires every single frame, forever\n\n  // ✅ CORRECT (keyup resets the flag on release):\n  let keysPressed = {};\n  window.addEventListener(\"keydown\", function(e) {\n    keysPressed[e.key] = true;\n  });\n  window.addEventListener(\"keyup\", function(e) {\n    keysPressed[e.key] = false;   // clears the flag the instant the key is released\n  });\n  if (keysPressed[\" \"]) { fireLaser(); }   // only true while Space is actually held down",
      keywords: "javascript keysPressed object keydown keyup state map"
    },
    {
      name: "Cooldown Timers / Rate Limiting",
      desc: "Core Definition:\n  Even with correct key-state tracking, checking keysPressed[\" \"] every frame at 60fps would fire dozens of lasers per second. A cooldown timer enforces a minimum gap between allowed actions.\n\nWhy It Matters:\n  Fixing 'multiple keys at once' (the keysPressed map) immediately exposes a new problem — holding a key now means the condition is true for 16+ frames in a row, not one. A cooldown timer is the general solution anywhere an action is allowed to happen, but only at some maximum rate, which is why the same pattern later reappears for rate-limiting server requests.\n\nSyntax Blueprint:\n  let lastFireTime = 0;\n  const FIRE_COOLDOWN_MS = 300;\n\n  function tryFire(now) {\n    if (keysPressed[\" \"] && now - lastFireTime > FIRE_COOLDOWN_MS) {\n      spawnLaser();\n      lastFireTime = now;\n    }\n  }\n\nSame Pattern Elsewhere:\n  This is the same idea as rate-limiting a login form — both cap how often one action can repeat inside a time window, closing off a hold-the-key (or brute-force-retry) exploit.",
      keywords: "javascript rate limiting cooldown timer timestamp throttle input"
    },
    {
      name: "AABB Overlap on Canvas Sprites",
      desc: "Core Definition:\n  Canvas sprites (lasers, aliens) are plain JS objects with x, y, width, height properties — there is no DOM element or CSS box to inspect, so overlap is computed purely with math using the same four-comparison rule as any bounding box check.\n\nWhy It Matters:\n  This proves the AABB formula from Level 1 was never really about the DOM — it is pure math over positions and sizes, which is why it transfers unchanged onto plain objects with no visual element behind them at all. Any two things that can be described as a box (x, y, width, height) can use this exact test, canvas or not.\n\nThe Grid Stays a Grid — Aliens Get an alive Flag:\n  Session 5's aliens[row][col] grid is NOT flattened for collision. Removing a dead alien from the middle of a 2D grid would corrupt every other cell's row/col indexing, so instead each alien object gets an extra alive property. A hit sets aliens[row][col].alive = false instead of deleting the object — the grid's shape never changes, only its contents.\n\nFormula:\n  function checkCollision(a, b) {\n    return (\n      a.x < b.x + b.width &&\n      a.x + a.width > b.x &&\n      a.y < b.y + b.height &&\n      a.y + a.height > b.y\n    );\n  }\n  // a = laser sprite { x, y, width, height }, b = alien sprite { x, y, width, height, alive }\n\nThis is the same AABB test used for DOM game objects, just applied to canvas sprite data instead of getBoundingClientRect() — there's no rect to read, you track width/height yourself in the object.",
      keywords: "canvas sprite collision AABB bounding box overlap javascript"
    },
    {
      name: "Double-Iteration Sweep (Lasers x Alien Grid)",
      desc: "Core Definition:\n  To find every collision between two moving collections, loop over one INSIDE a loop over the other — every laser is checked against every still-alive alien in the grid.\n\nWhy It Matters:\n  A single collision check (Level 1) only ever compared two fixed objects; this session's real challenge is that BOTH sides are now collections of unknown size. Nesting loops — one collection inside another — is the standard way to compare every pair across two groups, and it's the same shape you'd reach for with any many-to-many comparison, not just lasers and aliens.\n\nBlueprint:\n  for (let i = lasers.length - 1; i >= 0; i--) {\n    for (let row = 0; row < aliens.length; row++) {\n      for (let col = 0; col < aliens[row].length; col++) {\n        const alien = aliens[row][col];\n        if (alien.alive && checkCollision(lasers[i], alien)) {\n          lasers.splice(i, 1);      // remove the laser (a flat array, safe to splice)\n          alien.alive = false;      // keep the grid cell, just mark it dead\n          score += 50;\n          break;                     // stop checking this laser against more aliens\n        }\n      }\n    }\n  }\n\nOnly the lasers array gets spliced — lasers are a flat list with no row/col to preserve. The alien grid keeps its shape; only the alive flag changes.",
      keywords: "javascript nested loop splice array collision sweep grid"
    },
    {
      name: "break After a Hit (The Multiple Kill Bug)",
      desc: "Core Definition:\n  Once a laser hits one alien, it should stop checking that same laser against the rest of the grid. Forgetting break lets a single laser register as overlapping with several aliens in the same pass.\n\nWhy It Matters:\n  This is Level 1's loop-control lesson (break as an early exit) applied inside a nested loop, where the stakes are higher — without it, one laser can silently score points off several aliens in a single frame, an outcome that looks like a working game but is quietly awarding the wrong score.\n\nCommon Mistake — Multiple Kill Bug:\n  // ❌ Missing break:\n  if (alien.alive && checkCollision(lasers[i], alien)) {\n    alien.alive = false;\n    score += 50;\n    // no break -- the loop keeps running and can mark MORE aliens dead\n    // from this same laser in the same pass\n  }\n\n  // ✅ Correct:\n  if (alien.alive && checkCollision(lasers[i], alien)) {\n    alien.alive = false;\n    score += 50;\n    break;   // this laser is used up -- stop scanning more aliens\n  }\n\nPerformance Note:\n  A sweep of L lasers against a grid of A aliens runs roughly L x A comparisons every frame — with large swarms this nested cost is why real games often use spatial partitioning instead of a brute-force sweep.",
      keywords: "javascript break statement loop bug multiple collision double kill"
    }
  ],
  'l2-s7': [
    {
      name: "Game-State Variables & Wave Progression",
      desc: "Core Definition:\n  A wave-based game tracks its state in a small set of variables: how many waves cleared, how much health remains, and how many aliens in the grid are still alive. The loop reads these variables every frame to decide what to draw and whether to advance.\n\nWhy It Matters:\n  This is Level 1's gameActive gate idea scaled up — instead of one Boolean deciding 'running or not,' several variables together now describe WHICH stage of a longer game the player is in. Counting a derived value (how many aliens are still alive) from the existing grid, rather than tracking it separately, avoids a second source of truth that could drift out of sync with the real grid.\n\nCore State Variables:\n  let wave = 1;\n  let health = 100;\n  let aliens = [][];   // 2D grid of alien objects, each with an alive flag\n\nCounting the Living:\n  function countAlive(grid) {\n    let count = 0;\n    for (const row of grid) {\n      for (const alien of row) {\n        if (alien.alive) count++;\n      }\n    }\n    return count;\n  }\n\nThe Advance Check:\n  if (countAlive(aliens) === 0) {\n    wave++;\n    spawnWave(wave);\n  }\n\nThe alive-count check is the entire trigger for progression — as long as one alien in the grid still has alive === true, the wave will not advance.",
      keywords: "javascript game state variables tracking wave counter"
    },
    {
      name: "Scale-Factor Formulas",
      desc: "Core Definition:\n  As waves increase, enemies should get faster — but the formula must be capped, or the game becomes unplayable after a dozen waves.\n\nThe Formula:\n  let speedMultiplier = wave * 0.15;\n\nWhy It Needs an Upper Clamp:\n  By wave 40, speedMultiplier would be 6.0 — six times the base speed, effectively unbeatable. Cap it with Math.min:\n  speedMultiplier = Math.min(wave * 0.15, 2.5);   // never exceeds 2.5x\n\nAlways graph a scaling formula across the wave range you expect players to reach before shipping it uncapped.",
      keywords: "difficulty scaling formula multiplier clamp math min"
    },
    {
      name: "Drawing HUD Gauges on Canvas",
      desc: "Core Definition:\n  Canvas games have no DOM elements to update — every HUD element (health bar, score text) is redrawn on the canvas each frame using drawing calls, not textContent.\n\nWhy It Matters:\n  This is Level 1's HUD lesson (Session 11's textContent updates) meeting Level 2's immediate-mode canvas reality — there is no #score-val element to write into, so a proportional rectangle IS the health bar, recalculated fresh every single frame from the underlying health number rather than 'updated' the way a DOM element would be.\n\nHealth Bar as a Proportional Rectangle:\n  const barWidth = 200;\n  const healthPct = health / 100;\n  ctx.fillStyle = \"red\";\n  ctx.fillRect(20, 20, barWidth, 20);            // background/max track\n  ctx.fillStyle = \"lime\";\n  ctx.fillRect(20, 20, barWidth * healthPct, 20); // shrinks as health drops\n\nScore Text:\n  ctx.fillStyle = \"white\";\n  ctx.font = \"16px monospace\";\n  ctx.fillText(\"Score: \" + score, 20, 60);\n\nThere is no element to grab with an ID — the HUD only exists as pixels drawn fresh every frame.",
      keywords: "canvas fillRect health bar HUD ctx fillText"
    },
    {
      name: "Spawn Guards Against Concurrent Waves",
      desc: "Core Definition:\n  Checking \"is anyone still alive?\" every single frame without protection means the moment the last alien is marked dead, MULTIPLE frames in a row can all see zero alive count before the new wave's grid is spawned in — each one calling spawnWave() again.\n\nWhy It Matters:\n  This is Session 7's version of a race condition: a check-then-act pattern (check alive count, then act by spawning) run once per frame at 60fps, with no protection against the SAME condition being true across several consecutive frames. The isSpawning flag is the general fix for 'don't let this trigger fire again while it's already in progress,' a pattern that reappears anywhere an action is slower than the loop calling it.\n\nCommon Mistake (Floods the Screen):\n  if (countAlive(aliens) === 0) {\n    wave++;\n    spawnWave(wave);   // ❌ can fire several times before the new grid populates\n  }\n\n✅ The Fix — an \"already spawning\" guard:\n  let isSpawning = false;\n  if (countAlive(aliens) === 0 && !isSpawning) {\n    isSpawning = true;\n    wave++;\n    spawnWave(wave);\n    isSpawning = false;   // reset once the new grid is populated\n  }\n\nWithout the guard flag, the wave-clear trigger fires concurrently and stacks several waves' worth of aliens on top of each other.",
      keywords: "javascript prevent duplicate function calls guard flag boolean"
    },
    {
      name: "Memory Leaks from Dead Sprites",
      desc: "Core Definition:\n  A sprite array (lasers, particles, aliens) only shrinks if something actively removes finished entries. If a laser that flies off-screen is never spliced out, it stays in the array forever, still being looped over and drawn every frame even though the player can't see it.\n\nWhy It Matters:\n  This is Session 4's cleanup lesson resurfacing at a bigger scale, now with a diagnostic habit attached: watching an array's .length climb over time is how you CONFIRM a leak exists before spending time hunting for it, rather than guessing from a vague sense that the game feels slower than it used to.\n\nDiagnosing It:\n  console.log(lasers.length);   // watch this climb without bound over time\n\nAfter 500 unpruned lasers accumulate, the frame rate crawls — the game is still iterating over, updating, and drawing hundreds of invisible objects every single frame.\n\nThe Fix — remove off-screen entries:\n  lasers = lasers.filter(laser => laser.y > 0);   // drop anything past the edge\n\nNote: .filter() rebuilds the array in one pass and is a one-shot equivalent to the reverse-loop splice() pattern taught in Session 4 — same cleanup goal, just expressed as a single expression instead of a manual backward loop.",
      keywords: "javascript memory leak array length unbounded growth sprites"
    },
    {
      name: "Garbage Collection Pauses & Profiling",
      desc: "Core Definition:\n  Every new object (a new laser, a new particle) is memory the browser's garbage collector must eventually reclaim. When arrays grow unbounded, the collector has far more to scan and clean up, and it runs its cleanup pass in a pause that can freeze the frame. Guessing which function is slow wastes time — DevTools' Performance tab records exactly how long each function call takes.\n\nWhy Stutter Happens:\n  - Small, steady allocations = small, unnoticeable GC pauses.\n  - Large, unbounded allocations (never-pruned arrays) = long GC pauses that show up as visible frame hitches or stutter.\n\nProfiling Workflow:\n  1. Open DevTools → Performance tab → click Record.\n  2. Play the game for a few seconds during the laggy moment.\n  3. Stop recording and inspect the flame chart — wider blocks mean more time spent in that function.\n  4. Look for the widest block in your own game code (not browser internals) — that's the function to optimize first.\n\nProfiling replaces 'this feels slow' with 'this specific function used 40% of every frame' — a concrete target instead of a guess.",
      keywords: "javascript garbage collection performance pause stutter frame rate devtools profiling"
    }
  ],
  'l2-s8': [
    {
      name: "The Client-Server Model",
      desc: "Core Definition:\n  A client (the browser) sends requests; a server (a remote program) sends responses. The client can never reach into the server's storage directly — it can only ask and wait.\n\nWhy It Matters:\n  Everything built in Level 1 and the first half of Level 2 ran entirely inside the player's own browser — there was no 'elsewhere' the data could live. A leaderboard that every player shares requires storage somewhere OTHER than any single player's machine, and the client-server model is the entire reason that's even possible: the browser asks, a separate program somewhere else answers.\n\nThe Only Door:\n  Client  ──request──>  Server\n  Client  <──response──  Server\n\nEvery single thing your game does over the network — reading a leaderboard, submitting a score — is one round trip through this exact shape. There is no shortcut path.",
      keywords: "client server model request response web architecture"
    },
    {
      name: "Anatomy of a URL",
      desc: "Core Definition:\n  A URL has four parts that each answer a different question about the request.\n\nWhy It Matters:\n  Every fetch() call in the rest of this course starts with a URL string, and a bug in ANY one of its four parts sends the request to the wrong place entirely — a typo'd path is a completely different failure from a missing query parameter, and being able to name which part is wrong is what turns 'the API isn't working' into an actual fix.\n\nBreakdown:\n  https://api.marsdefense.dev/scores?limit=5\n  └─┬──┘   └───────┬───────┘└──┬──┘└───┬───┘\n protocol       host          path    query\n  (how)         (who)        (what)  (which)\n\nThe path selects a resource on the server; the query string narrows or filters it. Both matter equally when reading a Network tab entry.",
      keywords: "url anatomy protocol host path query string"
    },
    {
      name: "HTTP Methods & Status Code Triage",
      desc: "Core Definition:\n  HTTP methods are verbs of intent; status codes are the server's one-word verdict on what happened.\n\nWhy It Matters:\n  Status codes are the FIRST thing to check when a network call misbehaves, before diving into your own JavaScript — they tell you immediately which side of the client-server boundary the problem is on, which narrows debugging from 'something is wrong' to 'this specific half of the system is wrong.'\n\nMethods:\n  GET  — read data (no body)\n  POST — send/create data (has a body)\n\nStatus Code Families:\n  200 OK / 201 Created  — success\n  400 Bad Request       — malformed input (your fault)\n  401 / 403             — who are you / you may not\n  404 Not Found         — no such path\n  500 Internal Error    — the server crashed (its fault)\n\nTriage rule: the first digit alone tells you where to start looking for the bug — 4xx means check what you sent, 5xx means the server broke on its own.",
      keywords: "http methods GET POST status codes 200 404 500 triage"
    },
    {
      name: "Reading the DevTools Network Tab",
      desc: "Core Definition:\n  The address bar shows the PAGE's URL — but a page fires many separate requests underneath it (scripts, images, and API calls). The Network tab lists every one, and the XHR/Fetch filter isolates the API calls specifically.\n\nWhy It Matters:\n  This is the network equivalent of Level 1's Console — a place to directly OBSERVE what actually happened instead of guessing from symptoms. Before writing any error-handling code, being able to look at the real request, its status, and its actual response body is what tells you whether the bug is in what you sent or in what came back.\n\nWhat Each Row Tells You:\n  - Name/Path: which endpoint was hit\n  - Method: GET or POST\n  - Status: the response verdict\n  - Preview/Response: the actual JSON payload returned\n\nCommon Mistake:\n  Reading only the address bar and concluding 'the request' — the real API traffic is a separate row list, often invisible unless you open DevTools before the action happens.",
      keywords: "browser devtools network tab xhr fetch inspect requests"
    }
  ],
  'l2-s9': [
    {
      name: "Synchronous vs. Asynchronous Execution",
      desc: "Core Definition:\n  Synchronous code runs one line at a time, and each line must finish before the next one starts — this BLOCKS everything else. Asynchronous code can start a slow operation (like a network request) and let the rest of the program keep running while it waits.\n\nWhy It Matters:\n  Every line of code from Level 1 through Level 2's Session 8 has run synchronously — 'next line waits for this one' was a safe assumption. A network request can take anywhere from milliseconds to several seconds, and if the game LOOP froze for that entire wait, the whole page would appear to hang; asynchronous code is what lets requestAnimationFrame keep the game responsive while a request is still in flight.\n\nSynchronous Timeline (Blocking):\n  console.log(\"1\");\n  slowCalculation();   // takes 3 seconds, nothing else can run\n  console.log(\"2\");    // waits the full 3 seconds before logging\n\nAsynchronous Timeline (Non-Blocking):\n  console.log(\"1\");\n  fetchLeaderboard();   // kicks off a request, does NOT wait\n  console.log(\"2\");    // logs immediately, before the fetch resolves\n\nThe fetch's result arrives later, whenever the network responds — not necessarily in the order it was written.",
      keywords: "synchronous vs asynchronous javascript blocking non blocking"
    },
    {
      name: "Promises and async/await",
      desc: "Core Definition:\n  A fetch call returns a Promise — an object representing a value that isn't ready yet. The await keyword pauses (only inside an async function) until that Promise resolves into its actual value.\n\nWhy It Matters:\n  A Promise is the placeholder that makes asynchronous code possible without freezing the rest of the program — it lets a function return immediately with 'I'll have this eventually' instead of blocking. await is what lets you WRITE asynchronous code that still reads top-to-bottom like Level 1's sequential logic, instead of the older nested-callback style that's much harder to trace.\n\n❌ WRONG (missing await):\n  async function fetchLeaderboard() {\n    let response = fetch(\"/api/leaderboard\");\n    let data = response.json();   // response is still a Promise, not the real object!\n    console.log(data);            // logs \"Promise <Pending>\", not the JSON\n  }\n\n✅ CORRECT (await unwraps the Promise):\n  async function fetchLeaderboard() {\n    let response = await fetch(\"/api/leaderboard\");\n    let data = await response.json();\n    console.log(data);            // logs the actual leaderboard array\n  }\n\nForgetting await doesn't throw an error — it silently hands you the wrapper object instead of the value inside it.",
      keywords: "javascript async await promise pending bug fetch"
    },
    {
      name: "fetch GET Requests and response.json()",
      desc: "Core Definition:\n  fetch() sends an HTTP request and returns a Promise for the Response object. Calling .json() on that response parses the response body as JSON and returns another Promise for the parsed data.\n\nWhy It Matters:\n  This is the single function every network feature in this course is built on top of — fetch() is how the browser actually performs Session 8's client-server round trip in code. The two-step await (once for the response, once for the parsed body) trips up almost everyone the first time, which is exactly why the previous concept calls it out as a common mistake.\n\nBlueprint:\n  async function fetchLeaderboard() {\n    let response = await fetch(\"https://api.example.com/leaderboard\");\n    let data = await response.json();\n    return data;   // an array of { name, score } records\n  }\n\nCalling It:\n  fetchLeaderboard().then(scores => renderLeaderboard(scores));\n\nBy default fetch() sends a GET request — no method needs to be specified for reading data.",
      keywords: "javascript fetch API GET request response json parse"
    },
    {
      name: "Don't Fetch Inside the Game Loop",
      desc: "Core Definition:\n  requestAnimationFrame runs about 60 times per second. Calling fetch() from inside that loop means firing roughly 60 HTTP requests every second at the server.\n\nWhy It's a Problem:\n  60 requests/sec x many players = a server hammered into rate-limiting or crashing, even though nothing on the leaderboard changed that fast.\n\n❌ WRONG:\n  function gameLoop() {\n    fetchLeaderboard();   // fires 60 times a second!\n    requestAnimationFrame(gameLoop);\n  }\n\n✅ CORRECT — fetch on events, not every frame:\n  function onGameOver() {\n    fetchLeaderboard();   // fires once, when it's actually needed\n  }\n\nFetch when something meaningful happens (game start, game over, a manual refresh button) — never on every animation frame.",
      keywords: "rate limiting API requests server load fetch game loop"
    }
  ],
  'l2-s10': [
    {
      name: "HTTP POST with JSON Payloads",
      desc: "Core Definition:\n  A GET request reads data; a POST request sends data to the server to be stored. fetch() takes a second argument — an options object — that configures the method, headers, and body.\n\nWhy It Matters:\n  Session 9's fetch() calls only ever READ data with the defaults; sending data (a submitted score) needs three extra pieces of setup working together — method, headers, and body — which is why this is where students most often forget one piece and get a confusing server-side error instead of a client-side one.\n\nThe Options Object Blueprint:\n  async function submitScore(name, score) {\n    let response = await fetch(\"/api/leaderboard\", {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify({ name, score })\n    });\n    return response;\n  }\n\nAll three pieces matter: method tells the server what kind of request this is, the Content-Type header tells it how to parse the body, and JSON.stringify() turns the JS object into the text format the header promises.",
      keywords: "fetch POST request options headers JSON stringify body"
    },
    {
      name: "try/catch Around Network Calls",
      desc: "Core Definition:\n  A network request can fail for reasons that have nothing to do with your code — the wifi drops, the server is down, a URL is unreachable. Without a catch block, a rejected fetch Promise throws an unhandled error and the game silently stops responding.\n\nWhy It Matters:\n  This is the network-call version of Level 1's defensive output guards, applied to something outside your control entirely — no amount of correct code prevents a dropped wifi connection. try/catch is what separates 'the network failed and the player sees nothing' from 'the network failed and the player sees a retry button.'\n\n❌ WRONG (no error handling):\n  async function submitScore(name, score) {\n    let response = await fetch(\"/api/leaderboard\", { method: \"POST\" /* ... */ });\n    // if the network drops here, this line never runs, no message, no recovery\n  }\n\n✅ CORRECT:\n  async function submitScore(name, score) {\n    try {\n      let response = await fetch(\"/api/leaderboard\", { method: \"POST\" /* ... */ });\n      return response;\n    } catch (err) {\n      console.error(\"Score submission failed:\", err);\n      showRetryButton();   // let the player know and recover gracefully\n    }\n  }\n\nA catch block is what turns a silent freeze into a message the player can actually act on.",
      keywords: "javascript try catch fetch error handling network failure"
    },
    {
      name: "Checking response.ok and Status Codes",
      desc: "Core Definition:\n  A fetch Promise resolves successfully even when the server responds with an error status like 404 or 500 — fetch only rejects on a true network failure. You must check response.ok (or response.status) yourself to know whether the request actually succeeded.\n\nWhy It Matters:\n  This is the single most surprising fact about fetch() for students coming from try/catch — a 500 Internal Server Error does NOT trigger the catch block, because as far as fetch is concerned, the request-response round trip itself succeeded. Skipping this check is why 'my try/catch didn't catch the error' is a common early confusion.\n\nBlueprint:\n  let response = await fetch(\"/api/leaderboard\", { method: \"POST\" /* ... */ });\n  if (response.ok) {\n    console.log(\"Score submitted successfully.\");\n  } else {\n    console.error(\"Server rejected the request:\", response.status);\n  }\n\nresponse.ok is true only for status codes 200-299 — a 500 Internal Server Error still resolves the Promise, so skipping this check means treating a server crash as a success.",
      keywords: "fetch response.ok status code 404 500 error check"
    },
    {
      name: "Never Trust the Client",
      desc: "Core Definition:\n  Anything sent in a POST body was built by code running on the PLAYER's machine, which the player fully controls — including the browser console. A submitted score of 999999999 is just as easy to send as a real one.\n\nThe Risk:\n  submitScore(\"cheater\", 999999999);   // anyone can call this directly from devtools\n\nWhy It Matters:\n  The server should validate incoming payloads (reasonable score ranges, required fields) rather than storing whatever arrives — the client is a request, not a guarantee. Sessions 11-12 pick this up for real: a database enforces types and ranges, and parameterized queries close off injection.",
      keywords: "client side validation server trust security cheating"
    }
  ],
  'l2-s11': [
    {
      name: "Relational Tables & Data Types",
      desc: "Core Definition:\n  A relational table has fixed columns with declared types; every row must fit the same shape. This is why databases can be queried reliably — every value in a column is guaranteed to be the same kind of thing.\n\nCommon Types:\n  INT        — whole numbers (scores, quantities, ids)\n  VARCHAR(n) — text up to n characters (names)\n  BOOLEAN    — true/false\n  TIMESTAMP  — a date + time\n\nWhy Types Matter:\n  If score were stored as VARCHAR, ORDER BY score would sort alphabetically ('1000' before '200') instead of numerically. The type isn't decoration — it changes what queries can correctly do.",
      keywords: "sql relational table data types int varchar boolean timestamp"
    },
    {
      name: "Primary Keys",
      desc: "Core Definition:\n  The primary key is a column (usually id) that uniquely identifies every row — no two rows can ever share one. It is a row's identity, separate from any of its other data.\n\nSyntax:\n  CREATE TABLE colonist_scores (\n    id INT PRIMARY KEY,\n    player VARCHAR(50),\n    score INT\n  );\n\nWhy It Matters:\n  Two colonists can share the exact same name — they can never share an id. Every UPDATE or DELETE that targets 'one specific row' does so by matching the primary key, not by matching a name that might not be unique.",
      keywords: "sql primary key unique identity row"
    },
    {
      name: "CREATE, INSERT, SELECT, UPDATE",
      desc: "Core Definition:\n  Four SQL statements cover the basic lifecycle of a table: defining it, filling it, reading it, and changing it.\n\nWhy It Matters:\n  These four statements are the entire CRUD lifecycle (Create, Read, Update — Delete comes next session) that every piece of persistent data in any real application goes through. Sessions 9-10's server calls exist specifically to trigger these statements safely from the client — a POST request's whole job, ultimately, is to run an INSERT or UPDATE on the server's behalf.\n\nSyntax Cheat Sheet:\n  CREATE TABLE colonist_scores (\n    id INT PRIMARY KEY, player VARCHAR(50), score INT\n  );\n  INSERT INTO colonist_scores (id, player, score) VALUES (1, 'cdt_arya', 4200);\n  SELECT player, score FROM colonist_scores WHERE score > 4000 ORDER BY score DESC;\n  UPDATE colonist_scores SET score = 4500 WHERE id = 1;\n\nRead SQL like English but trace exactly what each clause filters: SELECT picks columns, FROM picks the table, WHERE picks rows, ORDER BY sorts what's left.",
      keywords: "sql create insert select update where order by syntax"
    },
    {
      name: "The Missing WHERE Danger",
      desc: "Core Definition:\n  An UPDATE or DELETE with no WHERE clause applies to EVERY row in the table, not just the one you meant. SQL does exactly what's written — the same literalness lesson as Level 1, now at data scale.\n\nWhy It Matters:\n  In Level 1 a sequencing mistake broke a simulated car; a missing WHERE clause here can silently destroy every real row of live data in seconds, with no undo. This is why professional teams treat any UPDATE or DELETE statement as something to read twice, and often require the WHERE clause to be written and reviewed before the SET or DELETE part is even considered.\n\n❌ DANGEROUS:\n  UPDATE colonist_scores SET score = 4500;   // overwrites every single row\n\n✅ SAFE:\n  UPDATE colonist_scores SET score = 4500 WHERE id = 1;   // targets exactly one row\n\nRule of Thumb:\n  Write the WHERE clause FIRST, mentally, before deciding what SET does — the WHERE clause is the blast radius of the statement.",
      keywords: "sql update delete missing where danger blast radius"
    }
  ],
  'l2-s12': [
    {
      name: "The Trust Boundary",
      desc: "Core Definition:\n  The client (browser, player-controlled) is hostile territory. Everything a request sends — form fields, POST bodies — must be validated by the server before it touches the database, regardless of what the frontend form already checked.\n\nWhy Frontend Validation Isn't Enough:\n  A player can open DevTools and call fetch() directly, skipping the form entirely. Frontend checks are UX; server checks are the actual security boundary.\n\nRule of Thumb:\n  Validate type, range, and length on the SERVER for every field, every time — never assume a request came from your own form.",
      keywords: "trust boundary server validation client hostile security"
    },
    {
      name: "SQL Injection Recognition",
      desc: "Core Definition:\n  Building a query by gluing (concatenating) raw user input into a string lets that input change the query's MEANING, not just its data — the classic SQL injection bug.\n\nWhy It Matters:\n  This is the Session 11 Missing WHERE danger's evil twin, except an attacker triggers it on purpose — string concatenation means user input isn't just DATA inside the query anymore, it's part of the query's actual code. Recognizing this shape on sight (raw + gluing user input into SQL text) is one of the highest-value security skills in this entire course, because it's one of the most common real-world vulnerabilities.\n\n❌ VULNERABLE:\n  let query = \"SELECT * FROM users WHERE name = '\" + userInput + \"'\";\n  // if userInput is:  ' OR '1'='1\n  // the query becomes: ...WHERE name = '' OR '1'='1'   -- always true, returns every row\n\nRead It Aloud:\n  Read the assembled query as a sentence after substituting the hostile input — the meaning change becomes obvious once you say it out loud.",
      keywords: "sql injection concatenation vulnerable string user input"
    },
    {
      name: "Parameterized Queries (The Fix)",
      desc: "Core Definition:\n  A parameterized query sends the SQL text and the user's data SEPARATELY — the database binds the value as pure data, so it can never be interpreted as part of the query structure.\n\n✅ SAFE:\n  SELECT * FROM users WHERE name = ?;\n  // driver binds userInput to the placeholder — it can never terminate the\n  // string or add clauses, no matter what characters it contains\n\nWhy It's Immune:\n  Even the exact hostile input (' OR '1'='1) just becomes a literal string being searched for — a name that doesn't exist — and returns nothing, instead of hijacking the query.",
      keywords: "parameterized query placeholder sql injection defense prepared statement"
    },
    {
      name: "Password Hashing Awareness",
      desc: "Core Definition:\n  A database should never store a password itself — only a HASH of it, a one-way scramble. Same input always produces the same hash, but there is no path back from the hash to the original password.\n\nWhy It Matters on a Leak:\n  - Plaintext password table leaked: every account is instantly compromised, and reused passwords on other sites too.\n  - Hashed password table leaked: attackers get scrambled values they can't directly use to log in (though weak/common passwords can still be cracked over time).\n\nRule of Thumb:\n  Store hash(password), never password — this is why login checks compare hash(inputPassword) to the stored hash, not the raw strings.",
      keywords: "password hashing plaintext leak security storage"
    }
  ],
  'l2-s13': [
    {
      name: "The Full Level 2 Architecture",
      desc: "Core Definition:\n  Every system built across Level 2 stacks into one picture: a canvas render loop for graphics/state, an async layer for talking to the server, and a database layer behind the server that the client never touches directly.\n\nWhy It Matters:\n  Each earlier session taught one layer in isolation; the hardest part of a real project is knowing where each concern BELONGS — collision math stays inside the loop, fetch calls happen on events between frames, and the database is never reachable except through the server. Seeing all three layers on one diagram is what turns 12 sessions of separate lessons into one coherent mental model of how a real game-with-a-backend is actually structured.\n\nThe Pipeline:\n  ┌─────────────────────────────────────────────────────────┐\n  │ init()                                                   │\n  │  - get canvas + ctx, set up sprite arrays, load config   │\n  └───────────────────────┬───────────────────────────────────┘\n                          ▼\n  ┌─────────────────────────────────────────────────────────┐\n  │ gameLoop()  (runs ~60x/sec via requestAnimationFrame)     │\n  │  1. Read input matrix (which keys are currently held)    │\n  │  2. Update: move sprites, run collisions, splice dead ones│\n  │  3. Draw: ctx.clearRect, then redraw every sprite + HUD   │\n  │  4. requestAnimationFrame(gameLoop) — schedule next frame │\n  └───────────────────────┬───────────────────────────────────┘\n                          ▼ (on game-over event, outside the loop)\n  ┌─────────────────────────────────────────────────────────┐\n  │ async submitScore() / fetchLeaderboard()                 │\n  │  - POST the final score, then GET the updated board      │\n  └───────────────────────┬───────────────────────────────────┘\n                          ▼ (server-side, never reached by the client directly)\n  ┌─────────────────────────────────────────────────────────┐\n  │ database (validated INSERT/SELECT, parameterized queries)│\n  └─────────────────────────────────────────────────────────┘\n\nThe loop never awaits anything — async calls fire off to the side when a meaningful event (game over) happens; the database layer is a step further still, reachable only through the server.",
      keywords: "canvas game architecture requestAnimationFrame pipeline diagram database"
    },
    {
      name: "Common Seeded-Bug Checklist",
      desc: "Core Definition:\n  A diagnostic cheat sheet of the classic bug patterns seeded across Level 2 — check these first when something looks broken.\n\nWhy It Matters:\n  Experienced developers debug faster not because they're smarter, but because they recognize SHAPES of bugs they've already seen — a smear trail means clearRect, 'Promise pending' means a missing await. Building this same pattern-recognition habit now, on a known list of seven, is what makes debugging genuinely new problems faster later.\n\nChecklist:\n  - Missing clearRect: old frames never erase, so sprites appear to smear/trail across the canvas.\n  - Forward-splice skip: splicing an array while iterating forward skips the element that slides into the removed index — iterate backward instead.\n  - Stuck key state: a keyup listener never clears the pressed flag, so a key appears held forever.\n  - Missing break: a collision loop keeps scanning after a hit, sometimes double-triggering effects.\n  - Missing await: an async call logs \"Promise <Pending>\" instead of the real data.\n  - Missing WHERE: an UPDATE/DELETE with no WHERE clause silently applies to every row in the table.\n  - String-concatenated query: gluing user input directly into SQL text opens an injection hole — check for a parameterized placeholder instead.\n\nRun through this list before assuming a bug is something new — most Level 2 breakage traces back to one of these seven patterns.",
      keywords: "javascript common bugs checklist clearRect splice sql debugging"
    },
    {
      name: "Defending Code in Review",
      desc: "Core Definition:\n  A code-review walkthrough means explaining WHY each piece of your code works, not just reading it aloud. Four areas come up most often across a Level 2 review.\n\nWhy It Matters:\n  This is the professional skill this whole level has been building toward — in a real job, code that works but that you can't explain is a liability, not an asset, because nobody (including future you) can safely change it later. Level 1-2's code-review model is deliberately copy-paste and conversational for this exact reason: explaining your own reasoning out loud is the actual skill being assessed, not just producing correct output.\n\nWhat to Be Ready to Explain:\n  - Coordinate math: why a sprite's x/y updates the way it does, and how the AABB collision check compares edges, not center points.\n  - Cleanup loops: why sprites are filtered/spliced out, and what would happen to performance if that loop were removed (Session 7's memory-leak lesson).\n  - fetch options: why the POST call needs method, headers, and a stringified body, and what try/catch is protecting against.\n  - Query safety: why a query uses a parameterized placeholder instead of string concatenation, and what the validation rulebook rejects and why.\n\nFraming the Walkthrough:\n  Treat the reviewer's questions as collaborative auditing, not adversarial gatekeeping — the same posture a professional code review requires. Being unable to explain a line you wrote is a bigger red flag than the line itself having a small bug.",
      keywords: "code review walkthrough explain code line by line defense"
    }
  ]
};



const CAMPAIGN_THEMES = {
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk Metropolis',
    description: 'Solve logical systemic bugs in a neon-lit, highly automated city. Track hackers and secure grid lines.',
    levels: {
      1: {
        mainQuest: 'Operation: Racing Car Autopilot — Construct the HTML structure, CSS styling, and JavaScript logic to drive a 2D highway avoidance racing game.',
        // L1 quest cards come from CURRICULUM_DATA (see L1_QUEST_SESSIONS); the L1 theme is
        // fixed to the Racing Car Game across all campaigns, so no per-theme session copy here.
        sessions: []
      },
      2: {
        mainQuest: 'Operation: Colony Defense Grid — Build a Canvas-based space-shooter defense system, wire it to a live leaderboard, and secure its data with SQL fundamentals.',
        // L2 quest cards come from CURRICULUM_DATA (see L2_QUEST_SESSIONS); the L2 theme is
        // fixed to Mars Colony Defense across all campaigns, so no per-theme session copy here.
        sessions: []
      },
      3: {
        mainQuest: 'Operation: Network Defense — Architect a decentralized database system to protect citizens\' data privacy against rogue corporations.',
        sessions: [
          {
            id: 'l3-s1',
            title: 'Session 1: "Where Does Data Live?"',
            objective: 'Understand Client-Server models, data modeling, and privacy.',
            activity: 'Design a library database schema and access rules. Classify fields (Public, Private, Sensitive) and create user role permissions.',
            homework: 'Design a database schema. Spy Mode Option: Design a self-destructing message database. List the fields (e.g. read_at, expires_in) and the purge logic.',
            xp: 200
          },
          {
            id: 'l3-s9',
            title: 'Session 9: "The Bug Bounty Fair"',
            objective: 'Practice auditing vulnerabilities and defending systems.',
            activity: 'The Bug Bounty Fair: A tournament where students act as Security Consultants. Attackers exploit classmate web apps. Defenders write patches.',
            homework: 'Fix all vulnerabilities found in your app. Document the patch in a Vulnerability Report.',
            xp: 250
          }
        ]
      },
      4: {
        mainQuest: 'Operation: Live Grid Launch — Connect, secure, and deploy a real-world web application with live database synchronicity and encrypted environment keys.',
        sessions: [
          {
            id: 'l4-s1',
            title: 'Session 1: "Connecting to the Cloud Database"',
            objective: 'Connect a React application to a remote cloud database (e.g., Supabase, Firebase) and perform CRUD operations.',
            activity: 'The Live Database Hookup: Establish a live hookup to a Supabase project. Create a "Sensor Alerts" table, write frontend logic to insert and read records, and verify real-time sync.',
            homework: 'Design a database schema for a multi-agent tracking system. List the fields (e.g., read_at, expires_in) and write SQL logic for self-destructing data tables.',
            xp: 300
          },
          {
            id: 'l4-s2',
            title: 'Session 2: "Security Keys & Environment Variables"',
            objective: 'Differentiate public/private credentials and configure environment variables to prevent API key exposure.',
            activity: 'Secret Wards Protection: Move database credentials out of codebase into a ".env.local" file. Configure ".gitignore" and verify environment-based fetching.',
            homework: 'Write a short guide explaining key exposure risks in public repositories and outline a credentials rotation checklist.',
            xp: 300
          },
          {
            id: 'l4-s5',
            title: 'Session 5: "Row-Level Security & Data Wards"',
            objective: 'Configure Row-Level Security (RLS) policies in the database to prevent unauthorized access.',
            activity: 'Wards of Data Isolation: Write SQL database policies (auth.uid() = user_id) on the "Sensor Alerts" table and verify User A receives 0 records when querying User B.',
            homework: 'Write database security policies for a shared dashboard (anyone can view, only creators can write/edit).',
            xp: 350
          }
        ]
      }
    }
  },
  mars: {
    id: 'mars',
    name: 'Mars Colonization Mission',
    description: 'Establish and defend a human colony on Mars. Optimize life support systems and control rover logic.',
    levels: {
      1: {
        mainQuest: 'Operation: Racing Car Autopilot — Construct the HTML structure, CSS styling, and JavaScript logic to drive a 2D highway avoidance racing game.',
        // L1 quest cards come from CURRICULUM_DATA (see L1_QUEST_SESSIONS); the L1 theme is
        // fixed to the Racing Car Game across all campaigns, so no per-theme session copy here.
        sessions: []
      },
      2: {
        mainQuest: 'Operation: Colony Defense Grid — Build a Canvas-based space-shooter defense system, wire it to a live leaderboard, and secure its data with SQL fundamentals.',
        // L2 quest cards come from CURRICULUM_DATA (see L2_QUEST_SESSIONS); the L2 theme is
        // fixed to Mars Colony Defense across all campaigns, so no per-theme session copy here.
        sessions: []
      },
      3: {
        mainQuest: 'Operation: Interplanetary Communications — Architect secure API structures and sequence diagrams for Mars-Earth networks.',
        sessions: [
          {
            id: 'l3-s1',
            title: 'Session 1: "Earth Link Protocols"',
            objective: 'Understand Client-Server delays and databases on Mars.',
            activity: 'Design the database schema for colony resource inventory.',
            homework: 'Design a telemetry database. Spy Mode Option: Design secure, self-destructing communications for classified Mars research.',
            xp: 200
          },
          {
            id: 'l3-s9',
            title: 'Session 9: "Satellite Comm Wards"',
            objective: 'Audit and defend interplanetary transmission channels.',
            activity: 'Satellite Bug Bounty: Hack transmissions for data exposure bugs. Defenders must apply telemetry encryption patches.',
            homework: 'Deploy communication fixes. Write a Satellite Transmission Security report.',
            xp: 250
          }
        ]
      },
      4: {
        mainQuest: 'Operation: Mars Net Launch — Connect, secure, and deploy a real-world web application with live database synchronicity and encrypted environment keys.',
        sessions: [
          {
            id: 'l4-s1',
            title: 'Session 1: "Connecting to Mars Cloud Database"',
            objective: 'Connect a React application to a remote cloud database and execute real-time telemetry CRUD queries.',
            activity: 'The Habitat Database Hookup: Establish a live hookup to a Supabase project. Create a "Life Support Logs" table and write queries to insert and fetch logs in real-time.',
            homework: 'Design a database schema for a colony life support telemetry log. List the fields and write SQL logic for self-destructing log data.',
            xp: 300
          },
          {
            id: 'l4-s2',
            title: 'Session 2: "Mars Security Keys & Env Variables"',
            objective: 'Differentiate public/private credentials and configure environment variables to prevent API key exposure on Mars Net.',
            activity: 'Mars Communications Lockout: Move database keys out of the code into a ".env.local" file. Set up ".gitignore" and verify compilation fetches environment parameters.',
            homework: 'Write a security brief explaining key exposure risks on planetary comm networks and construct a credentials rotation guide.',
            xp: 300
          },
          {
            id: 'l4-s5',
            title: 'Session 5: "Telemetry Row-Level Security"',
            objective: 'Configure Row-Level Security (RLS) policies in the telemetry database to prevent unauthorized habitat access.',
            activity: 'Telemetry Isolation Wards: Write SQL database policies (auth.uid() = astronaut_id) on the telemetry table. Verify User A cannot read User B\'s metrics.',
            homework: 'Write database policies for shared colony status metrics (all can view, only engineers can update).',
            xp: 350
          }
        ]
      }
    }
  },
  magic: {
    id: 'magic',
    name: 'Magic Academy Chronicles',
    description: 'Master logical spell-crafting in a school of wizardry. Enchant magical items and secure cauldrons.',
    levels: {
      1: {
        mainQuest: 'Operation: Racing Car Autopilot — Construct the HTML structure, CSS styling, and JavaScript logic to drive a 2D highway avoidance racing game.',
        // L1 quest cards come from CURRICULUM_DATA (see L1_QUEST_SESSIONS); the L1 theme is
        // fixed to the Racing Car Game across all campaigns, so no per-theme session copy here.
        sessions: []
      },
      2: {
        mainQuest: 'Operation: Colony Defense Grid — Build a Canvas-based space-shooter defense system, wire it to a live leaderboard, and secure its data with SQL fundamentals.',
        // L2 quest cards come from CURRICULUM_DATA (see L2_QUEST_SESSIONS); the L2 theme is
        // fixed to Mars Colony Defense across all campaigns, so no per-theme session copy here.
        sessions: []
      },
      3: {
        mainQuest: 'Operation: Hogwarts Security Grid — Architect database tracking systems for magical creatures and set security wards against dark magic.',
        sessions: [
          {
            id: 'l3-s1',
            title: 'Session 1: "Spell Vault Databases"',
            objective: 'Understand Client-Server magic mirrors and database structures.',
            activity: 'Design the database schema for the school vault inventory.',
            homework: 'Design a spell database. Spy Mode Option: Design a self-destructing secret scroll schema that deletes after opening.',
            xp: 200
          },
          {
            id: 'l3-s9',
            title: 'Session 9: "Ward Breakage Wards"',
            objective: 'Perform a security audit of magical defense shields.',
            activity: 'Dark Wizard Invasion: Attackers exploit flaws in classmates\' magical barrier systems. Defenders write shields patches.',
            homework: 'Repair defense shields. Write an Alchemy Ward Security audit.',
            xp: 250
          }
        ]
      },
      4: {
        mainQuest: 'Operation: Wizarding Web Grid — Connect, secure, and deploy a real-world web application with live database synchronicity and encrypted environment keys.',
        sessions: [
          {
            id: 'l4-s1',
            title: 'Session 1: "Connecting to the Magic Core Database"',
            objective: 'Connect a React application to a remote cloud database and execute real-time spell registration CRUD queries.',
            activity: 'The Spell Core Hookup: Connect the wizarding interface to a remote database project. Create a "Spell Registry" table and write queries to insert and read spells.',
            homework: 'Design a database schema for a magical creature tracking vault. List the fields and write SQL logic for self-destructing secret scrolls.',
            xp: 300
          },
          {
            id: 'l4-s2',
            title: 'Session 2: "Spell Wards & Env Variables"',
            objective: 'Differentiate public/private credentials and configure environment variables to prevent magical key exposure.',
            activity: 'Spell Scroll Protection: Move magic engine credentials out of codebase into a ".env.local" file. Set up ".gitignore" and verify env loading.',
            homework: 'Write a guide explaining credentials leak risks in scroll vaults and construct a magic key rotation checklist.',
            xp: 300
          },
          {
            id: 'l4-s5',
            title: 'Session 5: "Spell Row-Level Security Wards"',
            objective: 'Configure Row-Level Security (RLS) policies in the database to prevent dark wizards from reading private spell registries.',
            activity: 'Wards of Spell Isolation: Write SQL database policies (auth.uid() = wizard_id) on the "Spell Registry" table. Verify cross-wizard reading is blocked.',
            homework: 'Write security policies for shared wizarding academy vault records (all view, only authorized alchemists edit).',
            xp: 350
          }
        ]
      }
    }
  }
};

const S1_EXERCISES = [
  {
    num: 1,
    title: "Exercise 1.1: Hardware vs. Software, and the Resource Bottleneck",
    problem: "Before touching any code, you need to know what's physically running your game versus what's just instructions telling it what to do. Here's a real resource snapshot from a laptop running the game: CPU usage 91%, RAM usage 38%, Disk usage 12%.",
    instruction: "Goal: figure out which physical resource is actually struggling here, and be able to justify your answer using the numbers given. 1) Plan: in your own words, sort these into HARDWARE or SOFTWARE: the CPU, the game code (game.js), the RAM, the operating system, the monitor, the web browser. 2) Prompt: ask the AI about this situation, in your own words — you decide how to phrase it. 3) Explain: once you have an answer, explain in your own words why that resource is the one under strain, not the others.",
    planPlaceholder: "Sort these into HARDWARE or SOFTWARE, in your own words: CPU, game.js, RAM, the OS, the monitor, the browser.",
    promptPlaceholder: "Write your own prompt asking about this situation, in your own words.",
    outputCodePlaceholder: "Paste the AI's actual answer here.",
    runnable: false,
    expectedConcepts: "Per-field expectations: the Plan field's ONLY job is correctly sorting the 6 items into hardware (CPU, RAM, monitor) vs software (game.js, the OS, the browser) — do NOT mark Plan wrong just because it doesn't also identify the bottleneck; that's the Prompt/Output/Explain fields' job. Given CPU 91%, RAM 38%, Disk 12%, CPU is the constrained resource (a 'bottleneck' means the resource under the highest strain relative to its capacity) — this should show up in the prompt's question and the explanation's reasoning, not necessarily the plan. Don't require the literal word 'bottleneck' or the number 91 in the plan/prompt prose — judge whether the reasoning correctly identifies CPU as the strained resource and why."
  },
  {
    num: 2,
    title: "Exercise 1.2: The Out-of-Memory Crash",
    problem: "Bug: the racing game loads 500 full-resolution, uncompressed car images into memory all at once before the race even starts, then crashes on low-end laptops.",
    instruction: "Goal: figure out why this happens, and find a real software-side fix (no new hardware). 1) Plan: form your own hypothesis for why loading 500 large images at once could overload a low-end laptop's memory. 2) Prompt: describe the problem and ask for a fix, in your own words. 3) Explain: once you have a fix, explain in your own words why it actually reduces memory usage.",
    planPlaceholder: "What's your hypothesis — why would loading 500 large images at once strain memory?",
    promptPlaceholder: "Describe the problem and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's proposed fix here.",
    runnable: false,
    expectedConcepts: "Loading 500 full-resolution images at once means all of them occupy RAM simultaneously even though only a few are visible at a time, exceeding a low-end machine's memory. A real software fix is compressing the images and/or lazy-loading (only loading images as needed). Don't require literal words like 'RAM,' 'compress,' or 'lazy' in the plan/prompt prose — judge whether the reasoning is correct."
  },
  {
    num: 3,
    title: "Exercise 1.3: The Client-Server Request Cycle",
    problem: "Every webpage load — including the Racing Car Game you'll start building next session — is really a conversation between two computers: your browser and a server.",
    instruction: "Goal: understand what actually happens between your browser asking for a page and it appearing on screen. 1) Plan: describe, step by step, in your own words, what you think happens between clicking a link and seeing the page. 2) Prompt: ask the AI about this, in your own words. 3) Explain: once you have an answer, explain in one sentence why the response step specifically matters.",
    planPlaceholder: "Describe, step by step, in your own words, what happens between clicking a link and seeing the page.",
    promptPlaceholder: "Write your own prompt, in your own words.",
    outputCodePlaceholder: "Paste the AI's actual explanation here.",
    runnable: false,
    expectedConcepts: "The cycle: the browser (client) sends a request, the server looks up the data, the server sends back a response, the browser displays the page. The explanation should identify why the response step matters (without a response, the browser has nothing to display — the page never resolves). Don't require the literal words 'client,' 'server,' 'request,' or 'response' in the plan/prompt prose — judge whether the sequence of events is actually understood."
  },
  {
    num: 4,
    title: "Exercise 1.4: The Web Trio & the Missing-CSS Bug",
    problem: "Every webpage is built from exactly three technologies, each with one job. Bug report: 'The page loads, I can see the text and buttons, but everything is plain black text on a white background with no layout or colors.'",
    instruction: "Goal: diagnose which of the three technologies most likely failed, using what each one actually does. 1) Plan: in your own words, describe what job each of HTML, CSS, and JavaScript does. 2) Prompt: describe the bug report and ask for a diagnosis, in your own words. 3) Explain: once you have a diagnosis, explain why that technology (not the others) explains this specific symptom.",
    planPlaceholder: "Describe, in your own words, what job each of the three web technologies does.",
    promptPlaceholder: "Describe the bug and ask for a diagnosis, in your own words.",
    outputCodePlaceholder: "Paste the AI's actual diagnosis here.",
    runnable: false,
    expectedConcepts: "HTML = structure/content, CSS = visual styling/layout, JavaScript = behavior/interactivity. 'Content and buttons visible but no layout/colors' is the signature of CSS failing to load — HTML is clearly present (text/buttons render) and this isn't a behavior problem, it's a purely visual one. The Explanation genuinely needs to correctly name CSS as the diagnosis (that's the actual answer, not arbitrary wording) — but don't require the plan/prompt prose to use the word 'CSS' if the reasoning about each technology's job is otherwise correct."
  },
  {
    num: 5,
    title: "Exercise 1.5: The 5-Step AI-Era Loop, Applied",
    problem: "Every session from here on — including your very next one — will use the same repeating process to work with an AI IDE.",
    instruction: "Goal: know this process well enough to describe it in your own words before you rely on it next session. 1) Plan: write the 5 steps of the AI-Era Development Loop, in order, in your own words. 2) Prompt: ask the AI to explain what each step means in practice. 3) Explain: once you have an explanation, say which step you think will be hardest for you, and why.",
    planPlaceholder: "Write the 5 steps of the loop, in order, in your own words.",
    promptPlaceholder: "Write your own prompt, in your own words.",
    outputCodePlaceholder: "Paste the AI's actual explanation here.",
    runnable: false,
    expectedConcepts: "The 5 steps in order: Plan & Design, Write the AI Prompt, Review & Explain, Test & Break It, Iterate & Improve. This is a recall task — the plan genuinely should name the 5 steps correctly and in order (that's the actual content being tested, not just phrasing), but the Explanation's choice of 'hardest step' and reasoning is personal and has no single correct answer — judge only whether it's a genuine, specific reflection, not a placeholder answer."
  }
];

const S2_EXERCISES = [
  {
    num: 1,
    title: "Exercise 2.1: The Track & Car Skeleton",
    problem: "This game's track element is always called game-track, and the car sitting inside it is always called player-car — later sessions' code depends on these exact names.",
    instruction: "Goal: create the nested structure a browser needs — a game-track container with a player-car nested inside it. 1) Plan: in your own words, describe the parent/child relationship you need. 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: why does player-car need to be nested INSIDE game-track, not just next to it?",
    planPlaceholder: "Describe the parent/child relationship you need to build, in your own words.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual HTML the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 2,
    title: "Exercise 2.2: Selectors & the Scoreboard",
    problem: "This game's scoreboard needs a dashboard panel containing a heading, and the actual score number needs id score-val so later JavaScript can find and update it.",
    instruction: "Goal: build a scoreboard structure where the score number is uniquely identifiable. 1) Plan: describe the nesting you need, in your own words. 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: which attribute uniquely identifies the score element, and why does it need to be unique?",
    planPlaceholder: "Describe the nesting you need for the scoreboard, in your own words.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual HTML the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 3,
    title: "Exercise 2.3: The Unclosed Tag Bug Hunt",
    problem: `Bug in this exact code: <div id="game-track"><div id="player-car"></div> — two divs opened, but only one closed, so the browser never knows where game-track ends.`,
    instruction: "Goal: figure out why this breaks the page's structure, then fix it. 1) Plan: form your own hypothesis — why does a missing closing tag break things with no visible error? 2) Prompt: describe the bug and the goal to the AI, in your own words. 3) Explain: how many closing </div> tags does the fixed version need, and why?",
    planPlaceholder: "What's your hypothesis — why does one missing closing tag break the layout with no visible error?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's corrected HTML here.",
    runnable: true
  },
  {
    num: 4,
    title: "Exercise 2.4: Lane Dividers via Class",
    problem: "This track can have several lane dividers (unlike game-track or player-car, which are each one-of-a-kind) — an element that repeats needs a class, not an id.",
    instruction: "Goal: add a lane divider using the right kind of attribute for something that can repeat. 1) Plan: in your own words, why should the divider use a class instead of an id? 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: what would go wrong if you used an id instead, once the track needs multiple dividers?",
    planPlaceholder: "Why should the lane divider use a class instead of an id?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual HTML the AI generated from your prompt here.",
    runnable: true
  }
];

const S3_EXERCISES = [
  {
    num: 1,
    title: "Exercise 3.1: Arena Sizing Specs",
    problem: "You're choosing layout dimensions for the track before writing real CSS — its width, height, and background color.",
    instruction: "Goal: decide on and apply your own track dimensions. 1) Plan: in your own words, decide the track's width, height, and background color — and why those numbers. 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: why did you choose those dimensions?",
    planPlaceholder: "Decide the track's width, height, and background color, in your own words — and why.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual CSS the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 2,
    title: "Exercise 3.2: Selectors — # vs. .",
    problem: "CSS targets elements two different ways: a hash (#) targets the ONE element with that id; a dot (.) targets EVERY element with that class. Mixing them up is why styles seem to 'not apply'.",
    instruction: "Goal: understand when to use each selector type. 1) Plan: in your own words, when should you use an id selector vs. a class selector? 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: which one would you use for something that appears many times on a page, and why?",
    planPlaceholder: "When should you use an id selector (#) vs. a class selector (.)? In your own words.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the AI's actual explanation here.",
    runnable: false
  },
  {
    num: 3,
    title: "Exercise 3.3: The Drifting Car Bug",
    problem: `Bug in this exact CSS: #game-track { width: 390px; height: 500px; background-color: #333; } — the absolutely-positioned player car drifts to the top of the whole browser window instead of staying inside the track.`,
    instruction: "Goal: figure out why the car drifts outside its parent, then fix it. 1) Plan: form your own hypothesis — what's missing from the parent that would keep the child's coordinates contained? 2) Prompt: describe the bug and the goal to the AI, in your own words. 3) Explain: what does the fix actually do for the child's coordinates?",
    planPlaceholder: "What's your hypothesis — what's missing from the parent that lets the child drift outside it?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed CSS here.",
    runnable: true
  },
  {
    num: 4,
    title: "Exercise 3.4: Positioning the Car",
    problem: "The player car needs to sit centered near the bottom of whatever track width you chose in Exercise 3.1.",
    instruction: "Goal: position the car so it's centered near the bottom of your own track. 1) Plan: show your own math for centering a car of your chosen width inside your track's width. 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: walk through why your centering formula is correct.",
    planPlaceholder: "Show your own math for centering the car inside your own track width.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual CSS the AI generated from your prompt here.",
    runnable: true
  }
];

const S4_EXERCISES = [
  {
    num: 1,
    title: "Exercise 4.1: The Core State Variables",
    problem: "Every game needs a memory of what's happening right now. In this game, that memory is JS variables: the car's position, its speed, the score, and whether the game is running. Values that CHANGE during play use let; values that never change use const.",
    instruction: "Goal: declare the game's core mutable state. 1) Plan: in your own words, list the values this game needs to remember and whether each changes during play. 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: describe what each variable stores and why let (not const) is correct for all of them.",
    planPlaceholder: "Which values does this game need to remember, and does each change during play or stay fixed? In your own words.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 2,
    title: "Exercise 4.2: Constants and the Lives Count",
    problem: "Not everything in the registry changes. A lane's width and the track's width are fixed for the whole game — those become const. This session also adds a lives count, so the player can survive more than one crash.",
    instruction: "Goal: declare the fixed values plus a new mutable lives count. 1) Plan: name the fixed values this game needs, plus the new lives value (starting count, and whether it changes). 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: why are the fixed values const while lives is let, even though lives starts as a fixed-looking number?",
    planPlaceholder: "What stays fixed for the whole game? What is 'lives', what does it start at, and does it change?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 3,
    title: "Exercise 4.3: Math Increments on Game State",
    problem: "Declaring variables is only half the job — the game also has to update them during play.",
    instruction: "Goal: make score and speed change during play, in a way you decide. 1) Plan: describe how score and speed should change during play. 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: predict what score and speed equal after your code runs, starting from score = 0 and speed = 0.",
    planPlaceholder: "In plain language: how should score change during play? How should speed change?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 4,
    title: "Exercise 4.4: The Quoted-Number Bug Hunt",
    problem: `Bug in this exact code: let speed = "10"; speed += 5; — the quotes make speed a String, not a Number. Running it produces "105" (text glued together) instead of 15 (real addition).`,
    instruction: "Goal: figure out why this produces the wrong result, then fix it. 1) Plan: explain in your own words why a quoted \"10\" behaves differently from a plain 10 in math. 2) Prompt: describe the bug and the goal to the AI, in your own words. 3) Explain: what result did you get before vs. after the fix, and why.",
    planPlaceholder: "Why does a quoted \"10\" behave differently from a plain 10 in math?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's corrected code here.",
    runnable: true
  }
];

// Canned "finished look" CSS for the S2 HTML sandbox preview and the Project Journal's
// milestone Target Outcome preview. Session 2 only teaches HTML structure (no CSS yet),
// so this pre-styles the known game elements (track, car, dashboard, lane-divider) to give
// students a recognizable visual — a sneak peek of the styling Session 3 formally teaches.
const S2_PREVIEW_STYLE_CSS = `
  body { margin: 0; padding: 10px; background: #060814; color: #fff; font-family: monospace; font-size: 0.85rem; }
  #game-track {
    position: relative;
    width: 100%;
    height: 140px;
    background-color: #222;
    border: 3px solid #ffcc00;
    margin: 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #player-car {
    position: absolute;
    bottom: 10px;
    left: 45%;
    width: 30px;
    height: 50px;
    background-color: #ff4d4d;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  .obstacle {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 25px;
    height: 40px;
    background-color: #00e5ff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
  #obstacle-2 {
    left: 140px;
    background-color: #ff9f43;
  }
  #dashboard {
    padding: 8px;
    background-color: #1a1a2e;
    border-radius: 6px;
    text-align: center;
    border: 1px solid #333;
  }
  h2 { margin: 0; font-size: 1rem; color: #00ffcc; }
  .lane-divider {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    border-left: 2px dashed #ffffff;
  }
  .hidden { display: none !important; }
`;

// Compact variant of S2_PREVIEW_STYLE_CSS for the Project Journal's small Target Outcome
// thumbnail. A plain height clamp on the iframe would CROP content instead of shrinking it
// (an iframe doesn't scale its document to fit), so this scales every vertical dimension down
// proportionally — the whole scene (dashboard + track + car) fits within ~100px, uncropped.
const S2_PREVIEW_STYLE_CSS_MINI = `
  body { margin: 0; padding: 4px; background: #060814; color: #fff; font-family: monospace; font-size: 0.55rem; }
  #game-track {
    position: relative;
    width: 100%;
    height: 62px;
    background-color: #222;
    border: 2px solid #ffcc00;
    margin: 4px 0;
    overflow: hidden;
  }
  #player-car {
    position: absolute;
    bottom: 4px;
    left: 45%;
    width: 15px;
    height: 22px;
    background-color: #ff4d4d;
    border-radius: 2px;
  }
  .obstacle {
    position: absolute;
    top: 6px;
    left: 8px;
    width: 12px;
    height: 18px;
    background-color: #00e5ff;
    border-radius: 2px;
  }
  #obstacle-2 {
    left: 62px;
    background-color: #ff9f43;
  }
  #dashboard {
    padding: 3px;
    background-color: #1a1a2e;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #333;
  }
  h2 { margin: 0; font-size: 0.6rem; color: #00ffcc; }
  .lane-divider {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    border-left: 1px dashed #ffffff;
  }
  .hidden { display: none !important; }
`;

// Fixed markup the S3 CSS sandbox styles. On a code step the student's CSS (or, once
// merged in later sessions, the game's CSS) applies to this skeleton and renders live.
// #restart-panel/.hidden exists so Exercise 3.9 (fixing display: none -> flex) has something
// real to reveal in the preview.
const S3_PREVIEW_SKELETON = `
  <div id="dashboard">
    <h2>Score: <span id="score-val">0</span></h2>
  </div>
  <div id="game-track">
    <div class="lane-divider" style="left: 130px; height: 100%;"></div>
    <div class="lane-divider" style="left: 260px; height: 100%;"></div>
    <div id="player-car">🏎️</div>
    <div id="obstacle-1" class="obstacle">🚗</div>
    <div id="obstacle-2" class="obstacle">🚘</div>
    <div id="restart-panel" class="hidden">RESTART?</div>
  </div>
`;

// Base "scenery" CSS for the S3 CSS sandbox preview. Properties a given exercise is actually
// teaching are deliberately left OUT of this base for that exercise number, so the visible
// result comes from the student's own CSS (s3OutputCodeInput) instead of a pre-baked default
// that would make the preview look identical whether or not they wrote the correct rule:
//   - Ex 3.3 teaches #game-track's `position: relative`, so it's omitted here on that exercise
//     (everything else drifts to the top-left of the iframe until the student adds it — the
//     exact bug the exercise describes).
//   - Ex 3.4 teaches #player-car's own absolute position/offsets, so that rule is omitted
//     entirely on that exercise (the car sits at the browser's default flow position until
//     the student's own CSS output places it).
//   - Ex 3.5 teaches the entire `.lane-divider` rule, so that rule is omitted entirely on that
//     exercise (dividers render invisible/unstyled until the student writes it).
function buildS3PreviewCss(exerciseNum) {
  return `
    body { margin: 0; padding: 10px; background: #060814; color: #fff; font-family: monospace; font-size: 0.85rem; }
    #game-track {
      ${exerciseNum === 3 ? '' : 'position: relative;'}
      width: 100%;
      height: 260px;
      border: 2px dashed #444;
      background-color: #1a1a2e;
    }
    ${exerciseNum === 4 ? '' : `
    #player-car {
      position: absolute;
      bottom: 20px;
      left: 165px;
      width: 30px;
      height: 50px;
      background-color: blue;
      color: white;
      text-align: center;
      border-radius: 4px;
    }`}
    .obstacle {
      position: absolute;
      top: 30px;
      width: 25px;
      height: 40px;
      background-color: red;
      color: white;
      text-align: center;
      border-radius: 4px;
    }
    #obstacle-1 { left: 40px; }
    #obstacle-2 { left: 300px; }
    ${exerciseNum === 5 ? '' : `
    .lane-divider {
      position: absolute;
      top: 0;
      height: 100%;
      width: 2px;
      border-left: 1px dashed white;
    }`}
    #restart-panel {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      align-items: center;
      justify-content: center;
      color: #ff4d4d;
      font-weight: bold;
      z-index: 5;
    }
    .hidden { display: none; }
  `;
}

// Converts a Live Preview runtime error into a ready-to-paste follow-up prompt.
// This keeps fixing AI-generated bugs inside "write a prompt, get code back" —
// the student pastes this into their AI tool instead of reading the stack trace
// and editing code themselves. Debugging-as-a-skill is deliberately deferred to
// a later level; see project_live_preview_fix_prompt memory for the rationale.
function buildFixPrompt(errorText) {
  return `The code you gave me threw this error when I ran it:\n\n${errorText}\n\nPlease fix the code so it runs without this error, and briefly explain what caused it so I understand what went wrong.`;
}

// Shared live-execution iframe for the Level 1 JS Sandboxes (Sessions 4-8+).
// Unlike the S2/S3 HTML/CSS previews (which just re-render static markup), this
// actually runs the student's typed JavaScript against the racing game DOM inside
// the iframe, and forwards console.log()/runtime errors back to the parent via
// postMessage so they can be shown in the terminal log panel.
function buildJsSandboxPreview(studentCode, options = {}) {
  // showCar: hide the reactive #player-car when an exercise's code never
  // touches carX/speed and produces no other visible effect either — an idle
  // car sitting on the track reads as "something should be moving," which is
  // misleading when nothing in that exercise is supposed to move it.
  // trackHeight: default (260px) fits every steering/speed exercise, but S7's
  // marker-generation exercises place elements up to 630px down (5 markers x
  // 120px, or 8 x 90px) — taller than the default track, so anything past
  // ~260px would silently clip under overflow:hidden even with correct code.
  const { showCar = true, trackHeight = 260 } = options;
  // Pre-clean student code before injecting into the HTML template:
  // strip any top-level re-declarations of the harness globals (carX, speed)
  // that the AI commonly emits — e.g. `let carX = 165;` — so they don't
  // shadow or conflict with the reactive window properties defined below.
  // Only declaration lines are removed; the identifier itself stays usable.
  const cleanedCode = studentCode
    .replace(/\b(let|const|var)\s+carX\b[^\n;]*(;|\n|$)/g, '/* carX is provided by the sandbox */\n')
    .replace(/\b(let|const|var)\s+speed\b[^\n;]*(;|\n|$)/g, '/* speed is provided by the sandbox */\n');

  return `
    <html>
      <head>
        <style>
          body { margin: 0; padding: 10px; background: #060814; color: #fff; font-family: monospace; font-size: 0.85rem; }
          #dashboard { padding: 8px; background-color: #1a1a2e; border-radius: 6px; text-align: center; border: 1px solid #333; margin-bottom: 10px; }
          h2 { margin: 0; font-size: 1rem; color: #00ffcc; }
          #game-track { position: relative; width: 390px; max-width: 100%; height: ${trackHeight}px; background-color: #222; background-image: repeating-linear-gradient(180deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 10px, transparent 10px, transparent 50px); border: 3px solid #ffcc00; overflow-y: auto; overflow-x: hidden; }
          .lane-divider { position: absolute; top: 0; height: 100%; width: 2px; border-left: 2px dashed #ffffff; }
          #player-car { position: absolute; bottom: 20px; width: 30px; height: 50px; background-color: #ff4d4d; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: left 0.15s ease; z-index: 2; }
          #obstacle { position: absolute; top: -100px; width: 25px; height: 40px; background-color: #ff9f43; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1rem; z-index: 1; }
          #restart-panel { position: absolute; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; color: #ff4d4d; font-weight: bold; text-align: center; z-index: 3; }
          .marker-dash { position: absolute; left: 178px; width: 34px; height: 8px; background-color: #ffcc00; border-radius: 2px; z-index: 1; }
          .hidden { display: none !important; }
          #console-hint { padding: 6px 2px 0 2px; font-size: 0.65rem; color: #666; }
        </style>
      </head>
      <body tabindex="0">
        <div id="dashboard"><h2>Score: <span id="score-val">0</span> | Speed: <span id="speed-val">0</span></h2></div>
        <div id="game-track">
          <div class="lane-divider" style="left: 180px;"></div>
          ${showCar ? '<div id="player-car" style="left: 165px;">🏎️</div>' : ''}
          <div id="obstacle" style="left: 165px;">🚧</div>
          <div id="restart-panel" class="hidden">GAME OVER<br/>Press Space to Restart</div>
        </div>
        <div id="console-hint">Click inside this preview, then press ArrowLeft / ArrowRight to test your code live.</div>
        <script>
          window.onerror = function(msg) {
            parent.postMessage({ __sim: true, type: 'error', text: String(msg) }, '*');
            return true;
          };
          var _origLog = console.log;
          console.log = function() {
            var args = Array.prototype.slice.call(arguments);
            parent.postMessage({ __sim: true, type: 'log', text: args.map(String).join(' ') }, '*');
            _origLog.apply(console, args);
          };
          // Prevents ArrowUp/ArrowDown/etc from scrolling the page — this preview
          // sits inside a page tall enough to actually scroll vertically (unlike
          // horizontal steering, which had no page overflow to scroll into), so
          // without this the browser's native scroll fires alongside the student's
          // own keydown handler regardless of what that handler does.
          //
          // Also drives the visible road-scroll directly off real ArrowUp/ArrowDown
          // presses, independent of whether the student's AI-generated code ever
          // touches #game-track's backgroundPositionY itself — whether it does
          // depends entirely on how the student's own prompt was worded, which is
          // too unreliable for "does the road visibly move" to hinge on. This way
          // pressing ArrowUp always visibly scrolls the road, matching what the
          // exercise describes, regardless of the generated code's coverage.
          var _harnessRoadOffset = 0;
          window.addEventListener('keydown', function(e) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Spacebar'].indexOf(e.key) !== -1) {
              e.preventDefault();
            }
            var track = document.getElementById('game-track');
            if (track) {
              if (e.key === 'ArrowUp') {
                _harnessRoadOffset += 8;
                track.style.backgroundPositionY = _harnessRoadOffset + 'px';
              } else if (e.key === 'ArrowDown') {
                _harnessRoadOffset = Math.max(0, _harnessRoadOffset - 8);
                track.style.backgroundPositionY = _harnessRoadOffset + 'px';
              }
            }
          }, false);
          // Every time this iframe's srcdoc is replaced (switching exercises, or
          // clicking Generate Code again after editing the prompt), it's a fresh
          // document with no focus of its own — the browser doesn't carry focus
          // over from the previous version, and clicking "Generate Code" itself
          // moves focus to that parent-page button. Without this, arrow keys
          // silently stop doing anything until the student notices and re-clicks
          // inside the preview, which reads as "the new code isn't running."
          document.body.focus();
          // Reactive globals: writing carX auto-moves #player-car visually;
          // writing speed auto-updates #speed-val in the HUD. Student code only
          // needs to update the variable — no explicit DOM call required.
          var _carX = 165;
          var _speed = 0;
          Object.defineProperty(window, 'carX', {
            get: function() { return _carX; },
            set: function(v) {
              _carX = v;
              var car = document.getElementById('player-car');
              if (car) car.style.left = v + 'px';
            },
            configurable: true
          });
          Object.defineProperty(window, 'speed', {
            get: function() { return _speed; },
            set: function(v) {
              _speed = v;
              var sv = document.getElementById('speed-val');
              if (sv) sv.textContent = v;
            },
            configurable: true
          });
          try {
            ${cleanedCode}
          } catch (e) {
            parent.postMessage({ __sim: true, type: 'error', text: e.message }, '*');
          }
        </script>
      </body>
    </html>
  `;
}


// L1 Session 4 dedicated execution sandbox (variables & math — no DOM/game elements
// yet; that starts in Session 5's keyboard steering). buildJsSandboxPreview's racing
// track/car markup would render identically for every S4 exercise regardless of what
// the student's code does, since none of it touches the DOM — showing that graphic
// here would be pure decoration, not a real "actual output." This sandbox has no
// visible body at all; the only real output is whatever the code prints via
// console.log/errors, surfaced through the terminal log panel in the parent UI.
function buildJsConsoleOnlyPreview(studentCode) {
  return `
    <html>
      <body>
        <script>
          window.onerror = function(msg) {
            parent.postMessage({ __sim: true, type: 'error', text: String(msg) }, '*');
            return true;
          };
          var _origLog = console.log;
          console.log = function() {
            var args = Array.prototype.slice.call(arguments);
            parent.postMessage({ __sim: true, type: 'log', text: args.map(String).join(' ') }, '*');
            _origLog.apply(console, args);
          };
          try {
            ${studentCode}
          } catch (e) {
            parent.postMessage({ __sim: true, type: 'error', text: e.message }, '*');
          }
        </script>
      </body>
    </html>
  `;
}

// Shared live-execution iframe for the Level 2 Canvas Sandboxes (Sessions 1-4).
// Mirrors buildJsSandboxPreview's execution harness (onerror/console.log forwarding,
// try/catch around the student's code) but swaps the racing-game DOM body for a bare
// <canvas id="game-canvas"> matching the id used in the L2 curriculum's own prompts.
// canvas/ctx/ship/lasers are pre-seeded as `var` globals so exercises that reference
// them without redeclaring (e.g. Session 3's fireLaser() referencing ship.x) still
// run standalone; `var` (not let/const) avoids a redeclaration clash with student
// code that re-declares the same name inside the try block's own scope.
function buildCanvasSandboxPreview(studentCode) {
  return `
    <html>
      <head>
        <style>
          body { margin: 0; padding: 10px; background: #060814; color: #fff; font-family: monospace; font-size: 0.85rem; }
          canvas { background-color: #0a0e1a; border: 2px solid #7f5af0; border-radius: 4px; display: block; }
          #console-hint { padding: 6px 2px 0 2px; font-size: 0.65rem; color: #666; }
        </style>
      </head>
      <body tabindex="0">
        <canvas id="game-canvas" width="480" height="600"></canvas>
        <div id="console-hint">Click inside this preview, then press ArrowLeft / ArrowRight / Space to test your code live (if it adds a listener).</div>
        <script>
          window.onerror = function(msg) {
            parent.postMessage({ __sim: true, type: 'error', text: String(msg) }, '*');
            return true;
          };
          var _origLog = console.log;
          console.log = function() {
            var args = Array.prototype.slice.call(arguments);
            parent.postMessage({ __sim: true, type: 'log', text: args.map(String).join(' ') }, '*');
            _origLog.apply(console, args);
          };
          // See buildJsSandboxPreview's identical call for why: a fresh srcdoc
          // document has no focus of its own, so without this, arrow keys silently
          // stop reaching the preview after switching exercises until re-clicked.
          document.body.focus();
          var canvas = document.getElementById("game-canvas");
          var ctx = canvas.getContext("2d");
          var ship = { x: 220, y: 500, width: 40, height: 40, speed: 5 };
          var lasers = [];
          try {
            ${studentCode}
          } catch (e) {
            parent.postMessage({ __sim: true, type: 'error', text: e.message }, '*');
          }
        </script>
      </body>
    </html>
  `;
}

const L2S1_EXERCISES = [
  {
    num: 1,
    title: "Exercise 1.1: [Plan & Design] Defense Grid Blueprint",
    problem: "Before writing any canvas code, you need to plan the arena's dimensions and where the ship starts.",
    instruction: "Write down the canvas width, height, and the ship's starting (x, y) coordinates. The canvas is 480x600. The ship should start at x=200, y=500.",
    preloaded: "/* Write your plan here: canvas width, height, ship x, y */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('480') && clean.includes('600') && clean.includes('200') && clean.includes('500');
    },
    hint: "Write: width 480, height 600, ship x 200, y 500."
  },
  {
    num: 2,
    title: "Exercise 1.2: [Write AI Prompt] Requesting the Arena",
    problem: "The AI IDE needs a precise spec, not a vague request like 'make a game screen.'",
    instruction: "Write an AI prompt asking to create a canvas element with id 'game-canvas' sized 480x600 and retrieve its 2D drawing context.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('canvas') && clean.includes('480') && clean.includes('600') && clean.includes('getcontext') && clean.includes('2d');
    },
    hint: "Mention: canvas element, id game-canvas, width 480, height 600, and getContext(\"2d\")."
  },
  {
    num: 3,
    title: "Exercise 1.3: [Review & Explain] The Drawing Toolbox",
    problem: "Getting a reference to the canvas element alone isn't enough to draw with.",
    instruction: "Write the exact method call, chained off the canvas element, that gives you the 'ctx' object you actually draw with.",
    preloaded: "/* Write the method call here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').replace(/'/g, '"').toLowerCase();
      return clean.includes('getcontext("2d")');
    },
    hint: 'canvas.getContext("2d")'
  },
  {
    num: 4,
    title: "Exercise 1.4: [Test & Break] The Overwriting Canvas",
    problem: "Bug: the draw loop never clears the canvas, so every frame paints a new ship on top of the last one, leaving a solid trail instead of a moving ship.",
    instruction: "Fix the draw loop so the ship appears to move cleanly instead of leaving a trail. Add the missing call before the ship is redrawn each frame.",
    preloaded: 'let shipX = 200;\nfunction draw() {\n  ctx.fillStyle = "red";\n  ctx.fillRect(shipX, 500, 40, 40);\n  shipX += 2;\n  requestAnimationFrame(draw);\n}\ndraw();',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('ctx.clearrect(0,0,480,600)');
    },
    hint: "Add ctx.clearRect(0, 0, 480, 600); as the first line inside draw(), before fillStyle/fillRect."
  },
  {
    num: 5,
    title: "Exercise 1.5: [Iterate & Improve] Order Matters",
    problem: "clearRect is present now, but the ship still leaves a trail — it was added in the wrong place.",
    instruction: "Reorder the lines so ctx.clearRect(...) runs BEFORE ctx.fillRect(...), not after.",
    preloaded: 'let shipX = 200;\nfunction draw() {\n  ctx.fillStyle = "red";\n  ctx.fillRect(shipX, 500, 40, 40);\n  ctx.clearRect(0, 0, 480, 600);\n  shipX += 2;\n  requestAnimationFrame(draw);\n}\ndraw();',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const clearIdx = clean.indexOf('clearrect');
      const fillIdx = clean.indexOf('fillrect');
      return clearIdx !== -1 && fillIdx !== -1 && clearIdx < fillIdx;
    },
    hint: "Move ctx.clearRect(0, 0, 480, 600); so it's the very first line inside draw(), before ctx.fillStyle/fillRect."
  },
  {
    num: 6,
    title: "Exercise 1.6: [Plan & Design] The Shield Block",
    problem: "The homework asks for a second shape: a green defense shield block.",
    instruction: "Plan the fillStyle color and fillRect(x, y, width, height) parameters for a green 30x30 shield block at position (100, 550).",
    preloaded: "/* Write your plan here: color, x, y, width, height */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('green') && clean.includes('100') && clean.includes('550') && clean.includes('30');
    },
    hint: "fillStyle: green; fillRect(100, 550, 30, 30)"
  },
  {
    num: 7,
    title: "Exercise 1.7: [Write AI Prompt] Requesting the Shield",
    problem: "Turn your plan into a precise generation prompt.",
    instruction: "Write an AI prompt asking to draw a green 30x30 rectangle at (100, 550) using fillStyle and fillRect.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('green') && clean.includes('100') && clean.includes('550') && clean.includes('30') && (clean.includes('fillrect') || clean.includes('fillstyle'));
    },
    hint: "Mention: green color, fillRect, and the coordinates (100, 550, 30, 30)."
  },
  {
    num: 8,
    title: "Exercise 1.8: [Review & Explain] Predict the Color",
    problem: "fillStyle colors whatever gets drawn AFTER it — not before, and not retroactively.",
    instruction: 'Given: ctx.fillStyle = "blue"; ctx.fillRect(10,10,20,20); ctx.fillStyle = "green"; ctx.fillRect(50,50,20,20); — what color is the FIRST rectangle (at 10,10)?',
    preloaded: "/* Write the color here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('blue');
    },
    hint: "blue — fillStyle colors whatever is drawn AFTER it, and the first fillRect ran while fillStyle was still blue."
  },
  {
    num: 9,
    title: "Exercise 1.9: [Test & Break] The Swapped Arguments",
    problem: "Bug: the shield block should be a 30x30 square at (100, 550), but the fillRect arguments got scrambled, drawing a giant misplaced rectangle instead.",
    instruction: "Fix the fillRect call so it matches: x=100, y=550, width=30, height=30. Remember the argument order is always (x, y, width, height).",
    preloaded: 'ctx.fillStyle = "green";\nctx.fillRect(30, 30, 100, 550);',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('fillrect(100,550,30,30)');
    },
    hint: "ctx.fillRect(100, 550, 30, 30); — the order is always (x, y, width, height)."
  },
  {
    num: 10,
    title: "Exercise 1.10: [Iterate & Improve] The Full Arena",
    problem: "Bring everything together: a clean draw loop showing both shapes with no ghost trail.",
    instruction: "Write a draw() function that clears the canvas, then draws both the red ship (200, 500, 40, 40) and the green shield (100, 550, 30, 30), in that order.",
    preloaded: "/* Write the complete draw() function here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const clearIdx = clean.indexOf('clearrect');
      const shipIdx = clean.indexOf('fillrect(200,500,40,40)');
      const shieldIdx = clean.indexOf('fillrect(100,550,30,30)');
      return clearIdx !== -1 && shipIdx !== -1 && shieldIdx !== -1 && clearIdx < shipIdx && clean.includes('red') && clean.includes('green');
    },
    hint: "Structure: clearRect first, then fillStyle=red + fillRect(200,500,40,40), then fillStyle=green + fillRect(100,550,30,30)."
  }
];

const L2S2_EXERCISES = [
  {
    num: 1,
    title: "Exercise 2.1: [Plan & Design] The Ship Object",
    problem: "Before writing any code, plan every property the ship object needs.",
    instruction: "Plan a ship object literal with x=220, y=500, width=40, height=40, speed=5.",
    preloaded: "/* Write your plan here: x, y, width, height, speed */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('220') && clean.includes('500') && clean.includes('40') && clean.includes('5');
    },
    hint: "x:220, y:500, width:40, height:40, speed:5"
  },
  {
    num: 2,
    title: "Exercise 2.2: [Write AI Prompt] Declaring the Sprite",
    problem: "Turn the plan into a precise prompt for the AI IDE.",
    instruction: "Write an AI prompt asking to declare a `ship` object literal with x, y, width, height, and speed properties matching your plan.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('ship') && clean.includes('object') && clean.includes('x') && clean.includes('speed');
    },
    hint: "Mention: a ship object literal with x, y, width, height, and speed properties."
  },
  {
    num: 3,
    title: "Exercise 2.3: [Review & Explain] Predict the Mutation",
    problem: "Object properties can be read and reassigned with dot notation.",
    instruction: "Given let ship = { x: 220, speed: 5 }; ship.x -= ship.speed; — what is ship.x now?",
    preloaded: "/* Write the resulting value here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('215');
    },
    hint: "220 - 5 = 215"
  },
  {
    num: 4,
    title: "Exercise 2.4: [Test & Break] The Broken Literal",
    problem: "Bug: this object literal has syntax errors — a missing colon and a missing comma.",
    instruction: "Fix the object literal so `ship` is declared correctly with x=220, y=500, width=40, height=40, speed=5.",
    preloaded: 'let ship = { x 220, y: 500, width: 40 height: 40, speed: 5 };',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean === 'letship={x:220,y:500,width:40,height:40,speed:5};' || clean === 'letship={x:220,y:500,width:40,height:40,speed:5}';
    },
    hint: 'let ship = { x: 220, y: 500, width: 40, height: 40, speed: 5 };'
  },
  {
    num: 5,
    title: "Exercise 2.5: [Iterate & Improve] Move and Redraw",
    problem: "Moving the ship in memory does nothing visible until the canvas is redrawn from the updated object.",
    instruction: "Write a moveLeft() function that subtracts ship.speed from ship.x, clears the canvas, then redraws the ship with fillRect using ship's own properties.",
    preloaded: "/* Write moveLeft() here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const hasMove = clean.includes('ship.x-=ship.speed');
      const clearIdx = clean.indexOf('clearrect');
      const fillIdx = clean.indexOf('fillrect(ship.x,ship.y,ship.width,ship.height)');
      return hasMove && clearIdx !== -1 && fillIdx !== -1 && clearIdx < fillIdx;
    },
    hint: 'function moveLeft() { ship.x -= ship.speed; ctx.clearRect(0, 0, 480, 600); ctx.fillRect(ship.x, ship.y, ship.width, ship.height); }'
  },
  {
    num: 6,
    title: "Exercise 2.6: [Plan & Design] Wiring the Keys",
    problem: "Plan which key triggers which function before writing the listener.",
    instruction: "Plan which key triggers which function: ArrowLeft should call moveLeft(), ArrowRight should call moveRight().",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('arrowleft') && clean.includes('moveleft') && clean.includes('arrowright') && clean.includes('moveright');
    },
    hint: "ArrowLeft -> moveLeft(), ArrowRight -> moveRight()."
  },
  {
    num: 7,
    title: "Exercise 2.7: [Write AI Prompt] The Input Handler",
    problem: "Turn the wiring plan into a precise prompt.",
    instruction: "Write an AI prompt asking for a keydown event listener that calls moveLeft() on ArrowLeft and moveRight() on ArrowRight.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('keydown') && clean.includes('arrowleft') && clean.includes('moveleft') && clean.includes('arrowright');
    },
    hint: "Mention: keydown listener, ArrowLeft calling moveLeft(), ArrowRight calling moveRight()."
  },
  {
    num: 8,
    title: "Exercise 2.8: [Review & Explain] The Shadowing Question",
    problem: "A local variable with the same name as a global one hides the global inside its own scope.",
    instruction: "If a keydown handler declares `let ship = {...}` INSIDE itself instead of reusing the outer ship, does moving the ship visually update on screen? Answer yes or no, and say why.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      const saysNo = clean.includes('no') || clean.includes('not');
      const explains = clean.includes('shadow') || clean.includes('local') || clean.includes('copy');
      return saysNo && explains;
    },
    hint: "No — a new local ship variable 'shadows' the global one; the handler mutates the local copy, and the canvas keeps drawing from the untouched global ship."
  },
  {
    num: 9,
    title: "Exercise 2.9: [Test & Break] Object Scope Mutation",
    problem: "Bug: the ship never visually moves when ArrowLeft is pressed, even though no error appears.",
    instruction: "Remove the re-declaration inside the handler so it mutates the global ship instead of shadowing it with a new local copy.",
    preloaded: 'let ship = { x: 220, y: 500, width: 40, height: 40, speed: 5 };\nwindow.addEventListener("keydown", function(event) {\n  let ship = { x: 220, y: 500, width: 40, height: 40, speed: 5 };\n  if (event.key === "ArrowLeft") { ship.x -= ship.speed; }\n});',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const letShipCount = (clean.match(/letship=/g) || []).length;
      return letShipCount === 1 && clean.includes('ship.x-=ship.speed');
    },
    hint: 'Delete the `let ship = {...};` line inside the event listener — just keep `if (event.key === "ArrowLeft") { ship.x -= ship.speed; }`.'
  },
  {
    num: 10,
    title: "Exercise 2.10: [Iterate & Improve] Two-Directional Movement",
    problem: "The ship can only move one direction so far — complete the control scheme.",
    instruction: "Add an else-if branch for ArrowRight that adds ship.speed to ship.x, then clears and redraws — completing two-directional movement.",
    preloaded: 'let ship = { x: 220, y: 500, width: 40, height: 40, speed: 5 };\nwindow.addEventListener("keydown", function(event) {\n  if (event.key === "ArrowLeft") {\n    ship.x -= ship.speed;\n    ctx.clearRect(0, 0, 480, 600);\n    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);\n  }\n});',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const hasElseIf = clean.includes('elseif(event.key==="arrowright")') || clean.includes('elseif(event.key===\'arrowright\')'.replace(/'/g, '"'));
      return hasElseIf && clean.includes('ship.x+=ship.speed');
    },
    hint: 'else if (event.key === "ArrowRight") { ship.x += ship.speed; ctx.clearRect(0, 0, 480, 600); ctx.fillRect(ship.x, ship.y, ship.width, ship.height); }'
  }
];

const L2S3_EXERCISES = [
  {
    num: 1,
    title: "Exercise 3.1: [Plan & Design] The Laser Battery",
    problem: "Plan the array and the shape of one laser before writing any code.",
    instruction: "Plan the `lasers` array's starting value (empty) and what fields one laser object needs: x, y, width, height, speed.",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('lasers') && clean.includes('empty') && clean.includes('x') && clean.includes('y') && clean.includes('speed');
    },
    hint: "lasers = [] (starts empty); each laser: {x, y, width, height, speed}"
  },
  {
    num: 2,
    title: "Exercise 3.2: [Write AI Prompt] Firing Logic",
    problem: "Turn the plan into a precise prompt for the AI IDE.",
    instruction: "Write an AI prompt asking to declare an empty `lasers` array and a `fireLaser()` function that pushes a new laser object positioned at ship.x + 18, ship.y, width 4, height 15, speed 8.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('lasers') && clean.includes('push') && clean.includes('firelaser') && clean.includes('18') && clean.includes('8');
    },
    hint: "Mention: empty lasers array, fireLaser() function, push, and the offset/speed numbers (18, 8)."
  },
  {
    num: 3,
    title: "Exercise 3.3: [Review & Explain] Predict the Length",
    problem: "push() always adds exactly one element to the end of an array.",
    instruction: "If lasers = []; then fireLaser() runs 3 times (each call does lasers.push(...)), what is lasers.length afterward?",
    preloaded: "/* Write the resulting length here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('3');
    },
    hint: "3 — push() adds one element to the end of the array per call."
  },
  {
    num: 4,
    title: "Exercise 3.4: [Test & Break] The Overwritten Array",
    problem: "Bug: fireLaser() is overwriting the whole lasers array with a single object instead of adding to it.",
    instruction: "Fix fireLaser() so it pushes the new laser object onto the array instead of replacing the array entirely.",
    preloaded: 'let lasers = [];\nfunction fireLaser() {\n  let newLaser = { x: ship.x + 18, y: ship.y, width: 4, height: 15, speed: 8 };\n  lasers = newLaser;\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('lasers.push(newlaser)') && !clean.includes('lasers=newlaser');
    },
    hint: "Change `lasers = newLaser;` to `lasers.push(newLaser);`"
  },
  {
    num: 5,
    title: "Exercise 3.5: [Iterate & Improve] Fire on Spacebar",
    problem: "fireLaser() exists, but nothing calls it yet.",
    instruction: 'Add a keydown listener that calls fireLaser() when event.key is the spacebar — a single space character (" "), not the word "Space".',
    preloaded: "/* Write the keydown listener here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').replace(/'/g, '"').toLowerCase();
      return clean.includes('addeventlistener') && clean.includes('keydown') && clean.includes('.key===""') && clean.includes('firelaser()');
    },
    hint: 'window.addEventListener("keydown", function(event) { if (event.key === " ") { fireLaser(); } });'
  },
  {
    num: 6,
    title: "Exercise 3.6: [Plan & Design] The Render Loop",
    problem: "Plan how to visit every laser currently in the array, no matter how many there are.",
    instruction: "Plan the loop that touches every laser once per frame: what array property tells you how many times to loop?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('lasers.length');
    },
    hint: "lasers.length — loop from i = 0 while i < lasers.length."
  },
  {
    num: 7,
    title: "Exercise 3.7: [Write AI Prompt] Drawing Every Laser",
    problem: "Turn the loop plan into a precise prompt.",
    instruction: "Write an AI prompt asking for a for-loop that iterates over the lasers array and draws each one with ctx.fillRect using its x, y, width, and height.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('for') && clean.includes('lasers') && clean.includes('fillrect');
    },
    hint: "Mention: a for-loop, the lasers array, and fillRect using each laser's own x/y/width/height."
  },
  {
    num: 8,
    title: "Exercise 3.8: [Review & Explain] The Hardcoded Bound",
    problem: "A loop that stops at a fixed number ignores how many items actually exist.",
    instruction: "If a loop is written as for (let i = 0; i < 3; i++) instead of for (let i = 0; i < lasers.length; i++), what happens once a 4th laser is fired?",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      const mentionsFour = clean.includes('4') || clean.includes('fourth');
      const mentionsNever = clean.includes('not') || clean.includes('never') || clean.includes("won't") || clean.includes('wont');
      return mentionsFour && mentionsNever;
    },
    hint: "The 4th laser would never be drawn — the loop stops checking after index 2 regardless of how many lasers actually exist."
  },
  {
    num: 9,
    title: "Exercise 3.9: [Test & Break] The Off-Track Marker",
    problem: "Bug: this loop only ever draws 3 lasers no matter how many actually exist in the array.",
    instruction: "Fix the loop condition to use lasers.length instead of a fixed number.",
    preloaded: 'for (let i = 0; i < 3; i++) {\n  ctx.fillRect(lasers[i].x, lasers[i].y, lasers[i].width, lasers[i].height);\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('i<lasers.length') && !clean.includes('i<3');
    },
    hint: "for (let i = 0; i < lasers.length; i++) { ... }"
  },
  {
    num: 10,
    title: "Exercise 3.10: [Iterate & Improve] The Complete Battery",
    problem: "Bring firing and rendering together into one working system.",
    instruction: "Combine your fireLaser() function, the spacebar listener, and the render loop into one working script: pressing space adds a laser, and every laser currently in the array gets drawn.",
    preloaded: "/* Write the complete script here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').replace(/'/g, '"').toLowerCase();
      return clean.includes('lasers.push') && clean.includes('.key===""') && clean.includes('for') && clean.includes('lasers.length') && clean.includes('fillrect');
    },
    hint: "You need: the lasers array, fireLaser() pushing to it, a keydown listener calling fireLaser() on spacebar, and a for-loop drawing every laser in the array."
  }
];

const L2S4_EXERCISES = [
  {
    num: 1,
    title: "Exercise 4.1: [Plan & Design] The Off-Screen Rule",
    problem: "Before writing the cleanup logic, plan the exact rule that decides when a laser is 'done.'",
    instruction: "Plan the rule that decides when a laser should be removed: what coordinate, compared to what value, means a laser has left the screen going up?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('y<0') || (clean.includes('y') && clean.includes('<') && clean.includes('0'));
    },
    hint: "y < 0 — once a laser's y coordinate goes above the top edge, it's off-screen."
  },
  {
    num: 2,
    title: "Exercise 4.2: [Write AI Prompt] The Cleanup Loop",
    problem: "Turn the off-screen rule into a precise prompt for the AI IDE.",
    instruction: "Write an AI prompt asking for an updateLasers() function that decreases each laser's y by its speed, then removes (splices) any laser whose y is less than 0, using a REVERSE loop.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('updatelasers') && clean.includes('splice') && (clean.includes('reverse') || clean.includes('backward')) && clean.includes('y');
    },
    hint: "Mention: updateLasers(), moving y by speed, splicing off-screen lasers, and iterating in REVERSE."
  },
  {
    num: 3,
    title: "Exercise 4.3: [Review & Explain] The Index Shift",
    problem: "Removing an element from an array shifts every following element down by one index — mid-loop, that's a trap.",
    instruction: "After index 0 is spliced out of an array during a FORWARD loop, every following element shifts down by one index. Does the loop's next iteration (i=1) end up SKIPPING an element, or checking one TWICE? Answer with one word.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('skip');
    },
    hint: "It skips one — the element that shifted into the just-checked index is never itself checked, because i has already moved past it."
  },
  {
    num: 4,
    title: "Exercise 4.4: [Test & Break] The Splicing Skip Bug",
    problem: "Bug: when multiple lasers go off-screen in the same frame, only every other one actually gets removed.",
    instruction: "Fix the loop so it iterates in reverse (from lasers.length - 1 down to 0), which is safe to splice during.",
    preloaded: 'function updateLasers() {\n  for (let i = 0; i < lasers.length; i++) {\n    lasers[i].y -= lasers[i].speed;\n    if (lasers[i].y < 0) {\n      lasers.splice(i, 1);\n    }\n  }\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('i=lasers.length-1') && clean.includes('i>=0') && clean.includes('splice(i,1)');
    },
    hint: "for (let i = lasers.length - 1; i >= 0; i--) { ... }"
  },
  {
    num: 5,
    title: "Exercise 4.5: [Iterate & Improve] The Complete Cleanup",
    problem: "Combine the motion update and the off-screen prune into one correct function.",
    instruction: "Write the complete updateLasers() function: for every laser (reverse loop), subtract its speed from y, and splice it out if y < 0.",
    preloaded: "/* Write updateLasers() here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const reverseLoop = clean.includes('i=lasers.length-1') && clean.includes('i>=0');
      return reverseLoop && clean.includes('lasers[i].y-=lasers[i].speed') && clean.includes('lasers[i].y<0') && clean.includes('splice(i,1)');
    },
    hint: "function updateLasers() { for (let i = lasers.length - 1; i >= 0; i--) { lasers[i].y -= lasers[i].speed; if (lasers[i].y < 0) { lasers.splice(i, 1); } } }"
  },
  {
    num: 6,
    title: "Exercise 4.6: [Plan & Design] Spotting a Leak",
    problem: "Before a leak happens, plan how you'd actually notice one.",
    instruction: "If lasers are never pruned, what single value could you console.log every frame to notice the array growing without bound?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('lasers.length') || clean.includes('console.log');
    },
    hint: "console.log(lasers.length) — watch it climb without ever shrinking back down."
  },
  {
    num: 7,
    title: "Exercise 4.7: [Write AI Prompt] The Diagnostic",
    problem: "Turn the diagnostic plan into a precise prompt.",
    instruction: "Write an AI prompt asking to add a console.log of lasers.length inside the game loop, to verify the array shrinks after off-screen lasers are pruned.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('console.log') && clean.includes('lasers.length');
    },
    hint: "Mention: console.log, lasers.length, and verifying it shrinks after cleanup."
  },
  {
    num: 8,
    title: "Exercise 4.8: [Review & Explain] The Growing Cost",
    problem: "An unbounded array doesn't just waste memory — it wastes CPU time too, every single frame.",
    instruction: "If lasers are never spliced out, does the per-frame cost of the update loop stay constant, or grow over time? Answer with one word, then say why.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('grow') || clean.includes('increase');
    },
    hint: "It grows — the loop's cost scales with the array's length, and an unpruned array only ever gets longer."
  },
  {
    num: 9,
    title: "Exercise 4.9: [Test & Break] Generalizing the Pattern",
    problem: "Bug: this particle cleanup loop has the exact same forward-splice bug as the lasers array.",
    instruction: "Fix this cleanup loop using a reverse loop so both dead particles (life < 0) are correctly removed.",
    preloaded: 'let particles = [{ life: 10 }, { life: -1 }, { life: 5 }, { life: -3 }];\nfor (let i = 0; i < particles.length; i++) {\n  if (particles[i].life < 0) {\n    particles.splice(i, 1);\n  }\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('i=particles.length-1') && clean.includes('i>=0') && clean.includes('splice(i,1)');
    },
    hint: "for (let i = particles.length - 1; i >= 0; i--) { if (particles[i].life < 0) { particles.splice(i, 1); } }"
  },
  {
    num: 10,
    title: "Exercise 4.10: [Iterate & Improve] Firing + Cleanup Together",
    problem: "The final assembly: everything from Session 3 and Session 4, working together.",
    instruction: "Combine everything: the lasers array, fireLaser() on spacebar, and updateLasers() that moves and prunes off-screen lasers using a reverse loop — the complete Session 3+4 pipeline.",
    preloaded: "/* Write the complete script here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').replace(/'/g, '"').toLowerCase();
      const reverseLoop = clean.includes('i=lasers.length-1') && clean.includes('i>=0');
      return clean.includes('lasers.push') && clean.includes('.key===""') && reverseLoop && clean.includes('splice(i,1)');
    },
    hint: "You need all four pieces: the lasers array, fireLaser() pushing new lasers, a spacebar listener calling fireLaser(), and updateLasers() running a reverse loop that moves and splices lasers."
  }
];

const L2S5_EXERCISES = [
  {
    num: 1,
    title: "Exercise 5.1: [Plan & Design] The Grid Shape",
    problem: "Before writing any code, plan the data shape for a swarm grid of aliens.",
    instruction: "Plan a 3-row by 5-column grid of aliens: what kind of array holds the rows, and what three properties does each alien object need?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return (clean.includes('nested') || clean.includes('array')) && clean.includes('x') && clean.includes('y') && clean.includes('alive');
    },
    hint: "A nested array — an array of row-arrays; each alien needs x, y, and alive."
  },
  {
    num: 2,
    title: "Exercise 5.2: [Write AI Prompt] The Grid Initializer",
    problem: "Turn the grid plan into a precise prompt for the AI IDE.",
    instruction: "Write an AI prompt asking for a nested for-loop that builds a 3-row by 5-column aliens grid, where each alien object has x (column * 60 + 50), y (row * 50 + 50), and alive: true.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('nested') && clean.includes('for') && clean.includes('aliens') && clean.includes('alive') && clean.includes('60') && clean.includes('50');
    },
    hint: "Mention: a nested for-loop, the aliens grid, and the x/y formulas (col*60+50, row*50+50) plus alive: true."
  },
  {
    num: 3,
    title: "Exercise 5.3: [Review & Explain] Predict the Coordinate",
    problem: `Given aliens[r][c] = { x: c * 60 + 50, y: r * 50 + 50, alive: true };`,
    instruction: "Compute aliens[1][2].x using c = 2 in the formula c * 60 + 50. Type the resulting number.",
    preloaded: "/* Write the resulting number here */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '170';
    },
    hint: "c * 60 + 50 = 2 * 60 + 50 = 170."
  },
  {
    num: 4,
    title: "Exercise 5.4: [Test & Break] The Frozen Rows",
    problem: "Bug: this marching function only moves the aliens in row 0 — every other row never moves.",
    instruction: "Fix moveRow() so it loops over EVERY row AND every column, not just column 0 of a single row.",
    preloaded: 'function moveRow() {\n  for (let c = 0; c < aliens[0].length; c++) {\n    aliens[0][c].x += 2 * direction;\n  }\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('for(letr=0;r<aliens.length;r++)') && clean.includes('for(letc=0;c<aliens[r].length;c++)') && clean.includes('aliens[r][c].x+=2*direction');
    },
    hint: "Wrap the column loop in an outer row loop: for (let r = 0; r < aliens.length; r++) { for (let c = 0; c < aliens[r].length; c++) { aliens[r][c].x += 2 * direction; } }"
  },
  {
    num: 5,
    title: "Exercise 5.5: [Iterate & Improve] The Complete March",
    problem: "Combine the fixed nested loop with the edge-bounce logic.",
    instruction: "Write the complete moveSwarm() function: a nested loop moves every alien by 2 * direction, and if any alien's x goes past 440 or below 10, flip direction and add 20 to every alien's y.",
    preloaded: "/* Write moveSwarm() here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const nested = clean.includes('for(letr=0;r<aliens.length;r++)') && clean.includes('for(letc=0;c<aliens[r].length;c++)');
      return nested && clean.includes('aliens[r][c].x+=2*direction') && (clean.includes('x>440') || clean.includes('x<10')) && clean.includes('direction*=-1') && clean.includes('y+=20');
    },
    hint: "Move every alien, check if any x > 440 or x < 10, then direction *= -1 and add 20 to every alien's y."
  },
  {
    num: 6,
    title: "Exercise 5.6: [Plan & Design] The Shield Formula",
    problem: "Before writing the shield lookup, plan the formula that turns an absolute laser x-coordinate into a shield cell index.",
    instruction: "The shield starts at x = 100 and each cell is 20px wide. Plan the formula: what must you subtract from laser.x BEFORE dividing by the cell width?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('100') && (clean.includes('subtract') || clean.includes('-'));
    },
    hint: "Subtract the shield's starting offset (100) from laser.x before dividing by the cell width (20)."
  },
  {
    num: 7,
    title: "Exercise 5.7: [Write AI Prompt] The Shield Lookup",
    problem: "Turn the formula plan into a precise prompt.",
    instruction: "Write an AI prompt asking for a checkShieldCollision(laser) function that computes the shield cell index using Math.floor((laser.x - 100) / 20), and sets shield[col] to 0 if it was 1.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('checkshieldcollision') && clean.includes('math.floor') && clean.includes('shield');
    },
    hint: "Mention: checkShieldCollision(laser), Math.floor, the (laser.x - 100) / 20 formula, and setting shield[col] to 0."
  },
  {
    num: 8,
    title: "Exercise 5.8: [Review & Explain] Predict the Cell Index",
    problem: "A laser hits at x = 145.",
    instruction: "Using col = Math.floor((laser.x - 100) / 20), what is col when laser.x = 145? Type the resulting number.",
    preloaded: "/* Write the resulting number here */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '2';
    },
    hint: "(145 - 100) / 20 = 2.25 → Math.floor gives 2."
  },
  {
    num: 9,
    title: "Exercise 5.9: [Test & Break] The Missing Offset",
    problem: "Bug: this shield check forgets to subtract the shield's starting offset before dividing, so lasers destroy the wrong cells.",
    instruction: "Fix checkShieldCollision() so it subtracts 100 from laser.x BEFORE dividing by 20.",
    preloaded: 'function checkShieldCollision(laser) {\n  let col = Math.floor(laser.x / 20);\n  if (shield[col] === 1) {\n    shield[col] = 0;\n    return true;\n  }\n  return false;\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('math.floor((laser.x-100)/20)');
    },
    hint: "let col = Math.floor((laser.x - 100) / 20);"
  },
  {
    num: 10,
    title: "Exercise 5.10: [Iterate & Improve] The Complete Shield System",
    problem: "Bring the full shield system together.",
    instruction: "Write the complete checkShieldCollision(laser) function: compute col using the corrected offset formula, and if shield[col] is 1, set it to 0 and return true; otherwise return false.",
    preloaded: "/* Write the complete function here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('math.floor((laser.x-100)/20)') && clean.includes('shield[col]=0') && clean.includes('returntrue');
    },
    hint: "function checkShieldCollision(laser) { let col = Math.floor((laser.x - 100) / 20); if (shield[col] === 1) { shield[col] = 0; return true; } return false; }"
  }
];

const L2S6_EXERCISES = [
  {
    num: 1,
    title: "Exercise 6.1: [Plan & Design] The Key-State Object",
    problem: "Before writing listeners, plan how to track MULTIPLE keys being held down at once.",
    instruction: "Plan a keysPressed object: what should its value be when a key is pressed down (keydown), and what should it become when that key is released (keyup)?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('true') && clean.includes('false');
    },
    hint: "keydown sets keysPressed[key] to true; keyup sets it back to false."
  },
  {
    num: 2,
    title: "Exercise 6.2: [Write AI Prompt] Binding Both Listeners",
    problem: "Turn the key-state plan into a precise prompt.",
    instruction: "Write an AI prompt asking for BOTH a keydown and a keyup listener on window that set keysPressed[event.key] to true and false respectively.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('keydown') && clean.includes('keyup') && clean.includes('keyspressed');
    },
    hint: "Mention both keydown AND keyup listeners, and keysPressed[event.key]."
  },
  {
    num: 3,
    title: "Exercise 6.3: [Review & Explain] The Stuck Key",
    problem: "If only a keydown listener exists (no keyup), what happens after the player releases the key?",
    instruction: "Answer with one short phrase: does keysPressed['ArrowLeft'] reset to false, or stay stuck at true?",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('stuck') || clean.includes('stay');
    },
    hint: "It stays stuck at true — nothing ever sets it back to false without a keyup listener."
  },
  {
    num: 4,
    title: "Exercise 6.4: [Test & Break] The Firing Spam Lock",
    problem: "Bug: the spacebar keeps firing lasers continuously even after the player releases the key.",
    instruction: "Fix the input setup by adding the missing keyup listener that sets keysPressed[event.key] back to false.",
    preloaded: 'let keysPressed = {};\nwindow.addEventListener("keydown", (e) => { keysPressed[e.key] = true; });',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('addeventlistener("keyup"') && clean.includes('keyspressed[e.key]=false');
    },
    hint: 'window.addEventListener("keyup", (e) => { keysPressed[e.key] = false; });'
  },
  {
    num: 5,
    title: "Exercise 6.5: [Iterate & Improve] The Complete Input Handler",
    problem: "Combine the full key-state matrix with the movement/firing handler.",
    instruction: `Write handleInputs(): if keysPressed["ArrowLeft"] is true, subtract ship.speed from ship.x; if keysPressed["ArrowRight"] is true, add ship.speed to ship.x; if keysPressed[" "] is true, call fireLaser().`,
    preloaded: "/* Write handleInputs() here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').replace(/'/g, '"').toLowerCase();
      return clean.includes('keyspressed["arrowleft"]') && clean.includes('ship.x-=ship.speed') &&
        clean.includes('keyspressed["arrowright"]') && clean.includes('ship.x+=ship.speed') &&
        clean.includes('keyspressed[""]') && clean.includes('firelaser()');
    },
    hint: `if (keysPressed["ArrowLeft"]) { ship.x -= ship.speed; } if (keysPressed["ArrowRight"]) { ship.x += ship.speed; } if (keysPressed[" "]) { fireLaser(); }`
  },
  {
    num: 6,
    title: "Exercise 6.6: [Plan & Design] The Sweep Structure",
    problem: "Before writing the collision sweep, plan its loop structure.",
    instruction: "Plan the sweep: which array should the OUTER loop iterate (in reverse, since it might splice), and which should the INNER double loop iterate (row then column)?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('lasers') && clean.includes('aliens') && (clean.includes('reverse') || clean.includes('lasers.length-1'));
    },
    hint: "Outer loop: lasers, in reverse. Inner double loop: aliens, row then column."
  },
  {
    num: 7,
    title: "Exercise 6.7: [Write AI Prompt] The Collision Sweeper",
    problem: "Turn the sweep plan into a precise prompt.",
    instruction: "Write an AI prompt asking for checkSwarmCollisions(): a reverse loop over lasers, with a nested double loop over the aliens grid, that marks an alien's alive to false, splices the laser out, adds 50 to score, and breaks out of the column loop on a hit.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('checkswarmcollisions') && clean.includes('alive') && clean.includes('splice') && clean.includes('score') && clean.includes('break');
    },
    hint: "Mention: checkSwarmCollisions(), reverse loop, nested aliens loop, alive = false, splice, score += 50, and break."
  },
  {
    num: 8,
    title: "Exercise 6.8: [Review & Explain] Why the Break Matters",
    problem: "The inner column loop calls break immediately after resolving a hit.",
    instruction: "If that break statement were removed, could a single laser potentially destroy MORE than one alien in the same frame? Answer yes or no.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('yes');
    },
    hint: "Yes — without the break, the loop keeps checking (and potentially matching) further aliens after the first hit is already resolved."
  },
  {
    num: 9,
    title: "Exercise 6.9: [Test & Break] The Multiple Kill Bug",
    problem: "Bug: this sweep is missing the break statement, so one laser can destroy multiple aliens in a single frame.",
    instruction: "Add the missing break statement immediately after the score update, so the inner loop stops checking once a hit is resolved.",
    preloaded: 'for (let i = lasers.length - 1; i >= 0; i--) {\n  let l = lasers[i];\n  for (let r = 0; r < aliens.length; r++) {\n    for (let c = 0; c < aliens[r].length; c++) {\n      let a = aliens[r][c];\n      if (a.alive && checkCollision(l, a)) {\n        a.alive = false;\n        lasers.splice(i, 1);\n        score += 50;\n      }\n    }\n  }\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const scoreIdx = clean.indexOf('score+=50');
      const breakIdx = clean.indexOf('break');
      return scoreIdx !== -1 && breakIdx !== -1 && breakIdx > scoreIdx;
    },
    hint: "Add break; right after lasers.splice(i, 1); score += 50;"
  },
  {
    num: 10,
    title: "Exercise 6.10: [Iterate & Improve] Input + Collision Together",
    problem: "Bring the full input matrix and collision sweep together — the complete Session 6 pipeline.",
    instruction: "Combine handleInputs() (ArrowLeft/ArrowRight/space) with checkSwarmCollisions() (reverse laser loop, nested alien loop, alive/splice/score/break) into one script.",
    preloaded: "/* Write the complete script here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').replace(/'/g, '"').toLowerCase();
      const inputs = clean.includes('keyspressed["arrowleft"]') && clean.includes('keyspressed["arrowright"]') && clean.includes('keyspressed[""]') && clean.includes('firelaser()');
      const sweep = clean.includes('lasers.length-1') && clean.includes('a.alive=false') && clean.includes('splice(i,1)') && clean.includes('score+=50') && clean.includes('break');
      return inputs && sweep;
    },
    hint: "You need both handleInputs() (checking all three keys) and checkSwarmCollisions() (reverse loop, nested aliens loop, alive/splice/score/break)."
  }
];

const L2S7_EXERCISES = [
  {
    num: 1,
    title: "Exercise 7.1: [Plan & Design] The HUD Elements",
    problem: "Before drawing anything, plan what the HUD needs to show.",
    instruction: "Plan drawHUD(): what THREE pieces of information does the HUD display (one is drawn as two overlapping rectangles, not text)?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('score') && clean.includes('wave') && clean.includes('health');
    },
    hint: "Score text, wave text, and a health bar (drawn as two overlapping rectangles)."
  },
  {
    num: 2,
    title: "Exercise 7.2: [Write AI Prompt] The HUD Renderer",
    problem: "Turn the HUD plan into a precise prompt.",
    instruction: "Write an AI prompt asking for drawHUD(): fillText for 'Score: ' + score and 'Wave: ' + wave, plus a two-rectangle health bar (red background rect, then a green foreground rect sized to the health variable).",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('filltext') && clean.includes('fillrect') && clean.includes('health') && clean.includes('red') && clean.includes('green');
    },
    hint: "Mention: fillText for score/wave, and two fillRect calls (red background, green foreground sized to health)."
  },
  {
    num: 3,
    title: "Exercise 7.3: [Review & Explain] Predict the Bar Width",
    problem: "The health bar's green rectangle is drawn with fillRect(10, 45, health, 10).",
    instruction: "If health = 60, what is the width (the 3rd fillRect argument) of the green rectangle? Type the number.",
    preloaded: "/* Write the number here */",
    validate: (code) => {
      const clean = code.replace(/[^0-9]/g, '');
      return clean === '60';
    },
    hint: "The width equals health directly — fillRect(10, 45, health, 10), so 60."
  },
  {
    num: 4,
    title: "Exercise 7.4: [Test & Break] The Frozen Health Bar",
    problem: "Bug: the green health bar always renders at full width (100), ignoring how much health is actually left.",
    instruction: "Fix the fillRect call so its width argument uses the health variable instead of the hardcoded number 100.",
    preloaded: 'ctx.fillStyle = "green";\nctx.fillRect(10, 45, 100, 10);',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('fillrect(10,45,health,10)');
    },
    hint: "ctx.fillRect(10, 45, health, 10);"
  },
  {
    num: 5,
    title: "Exercise 7.5: [Iterate & Improve] The Complete HUD",
    problem: "Combine the full HUD renderer.",
    instruction: "Write the complete drawHUD(): fillText for score and wave, then a red background health rect (fillRect(10,45,100,10)) followed by a green foreground rect sized to health (fillRect(10,45,health,10)).",
    preloaded: "/* Write drawHUD() here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('filltext') && clean.includes('score') && clean.includes('wave') && clean.includes('fillrect(10,45,100,10)') && clean.includes('fillrect(10,45,health,10)');
    },
    hint: "fillText for score and wave, ctx.fillRect(10, 45, 100, 10) in red, then ctx.fillRect(10, 45, health, 10) in green."
  },
  {
    num: 6,
    title: "Exercise 7.6: [Plan & Design] The Wave-Clear Condition",
    problem: "Before writing the wave check, plan its trigger condition.",
    instruction: "Plan checkWaveCompletion(): what exact count of alive aliens should trigger the next wave — and what TWO things should happen when it does?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('0') && clean.includes('wave') && clean.includes('spawn');
    },
    hint: "Zero alive aliens; then increment wave and call spawnSwarm(wave)."
  },
  {
    num: 7,
    title: "Exercise 7.7: [Write AI Prompt] The Wave Checker",
    problem: "Turn the wave-clear plan into a precise prompt.",
    instruction: "Write an AI prompt asking for checkWaveCompletion(): count alive aliens across the nested grid, and only when that count is exactly 0, increment wave and call spawnSwarm(wave).",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('checkwavecompletion') && clean.includes('alive') && clean.includes('wave') && clean.includes('spawnswarm');
    },
    hint: "Mention: checkWaveCompletion(), counting alive aliens, the exact-zero check, wave++, and spawnSwarm(wave)."
  },
  {
    num: 8,
    title: "Exercise 7.8: [Review & Explain] The Re-Trigger Risk",
    problem: "Without a guard, checkWaveCompletion() runs every single frame.",
    instruction: "If the alive-count stays at 0 for several consecutive frames (before spawnSwarm() adds new aliens), what could go wrong? Answer in a short phrase mentioning wave or spawnSwarm.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return (clean.includes('multiple') || clean.includes('repeat') || clean.includes('again') || clean.includes('every frame') || clean.includes('infinite')) && (clean.includes('wave') || clean.includes('spawn'));
    },
    hint: "spawnSwarm() (and the wave increment) could fire again on every frame the count reads zero, spawning many extra waves instead of just one."
  },
  {
    num: 9,
    title: "Exercise 7.9: [Test & Break] The Uncached Length",
    problem: "Bug: this sweep re-reads aliens.length and aliens[r].length on every single iteration instead of caching them once.",
    instruction: "Fix the loop by caching aliens.length and aliens[r].length into local variables (rowLength, colLength) before looping.",
    preloaded: 'for (let r = 0; r < aliens.length; r++) {\n  for (let c = 0; c < aliens[r].length; c++) {\n    if (aliens[r][c].alive) { drawAlien(aliens[r][c]); }\n  }\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('rowlength=aliens.length') && clean.includes('r<rowlength') && clean.includes('collength=aliens[r].length') && clean.includes('c<collength');
    },
    hint: "let rowLength = aliens.length; for (let r = 0; r < rowLength; r++) { let colLength = aliens[r].length; for (let c = 0; c < colLength; c++) { ... } }"
  },
  {
    num: 10,
    title: "Exercise 7.10: [Iterate & Improve] Wave System + Optimized Sweep",
    problem: "Bring the wave system and the optimized sweep together.",
    instruction: "Write both checkWaveCompletion() (count alive, guard against re-trigger by checking count === 0) and the cached-length draw sweep (rowLength/colLength) in one script.",
    preloaded: "/* Write the complete script here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const wave = clean.includes('checkwavecompletion') && clean.includes('===0') && clean.includes('spawnswarm');
      const cached = clean.includes('rowlength=aliens.length') && clean.includes('collength=aliens[r].length');
      return wave && cached;
    },
    hint: "You need both checkWaveCompletion() (exact-zero guard, spawnSwarm) and the cached-length sweep (rowLength/colLength)."
  }
];

const L2S8_EXERCISES = [
  {
    num: 1,
    title: "Exercise 8.1: [Plan & Design] URL Anatomy",
    problem: "Before reading any real request, plan what a URL breaks into.",
    instruction: "List the four parts a URL breaks into: protocol, host, path, and one more.",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('protocol') && clean.includes('host') && clean.includes('path') && (clean.includes('query') || clean.includes('param'));
    },
    hint: "protocol, host, path, and query (the part after the ?)."
  },
  {
    num: 2,
    title: "Exercise 8.2: [Write AI Prompt] Parsing a Real URL",
    problem: "Turn the URL-parsing plan into a precise prompt.",
    instruction: "Write an AI prompt asking to break down the URL https://api.marsdefense.dev/scores?limit=5 into its protocol, host, path, and query parts, in plain English.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('protocol') && clean.includes('host') && clean.includes('path') && clean.includes('query');
    },
    hint: "Mention protocol, host, path, and query explicitly, plus the example URL."
  },
  {
    num: 3,
    title: "Exercise 8.3: [Review & Explain] Identify the Path",
    problem: "Given GET https://api.marsdefense.dev/scores?limit=5.",
    instruction: "What is the PATH portion of this URL? Type it exactly.",
    preloaded: "/* Write the path here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('/scores');
    },
    hint: "/scores — everything after the host and before the ?."
  },
  {
    num: 4,
    title: "Exercise 8.4: [Test & Break] The Wrong Address",
    problem: "A request goes to a misspelled endpoint (/scroes instead of /scores) and the server answers with status 404.",
    instruction: "Is the network connection broken, or did the server successfully answer 'no, I don't have that'? Answer in one short phrase.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('not broken') || clean.includes('connected') || clean.includes('successfully') || clean.includes('answered');
    },
    hint: "The connection worked fine — the server successfully answered 'no, that path doesn't exist' (404), which is different from a dropped/offline connection."
  },
  {
    num: 5,
    title: "Exercise 8.5: [Iterate & Improve] The Full Breakdown",
    problem: "Bring URL parsing together.",
    instruction: "Fully break down GET https://api.marsdefense.dev/scores?limit=5 into all four parts: protocol, host, path, and query. Write all four values.",
    preloaded: "/* Write the full breakdown here */",
    validate: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      return clean.includes('https') && clean.includes('api.marsdefense.dev') && clean.includes('/scores') && clean.includes('limit=5');
    },
    hint: "protocol: https, host: api.marsdefense.dev, path: /scores, query: limit=5"
  },
  {
    num: 6,
    title: "Exercise 8.6: [Plan & Design] Status Code Families",
    problem: "Before triaging any status codes, plan the three families they fall into.",
    instruction: "Plan the three status code families by their first digit: what does 2xx mean, what does 4xx mean, and what does 5xx mean?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('success') && clean.includes('client') && clean.includes('server');
    },
    hint: "2xx = success, 4xx = client error, 5xx = server error."
  },
  {
    num: 7,
    title: "Exercise 8.7: [Write AI Prompt] Triaging Specific Codes",
    problem: "Turn the status-family plan into a precise prompt.",
    instruction: "Write an AI prompt asking to explain, in plain English, what each of these specific status codes means: 200, 404, 500, and 403.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '');
      return clean.includes('200') && clean.includes('404') && clean.includes('500') && clean.includes('403');
    },
    hint: "Mention all four codes explicitly: 200, 404, 500, 403."
  },
  {
    num: 8,
    title: "Exercise 8.8: [Review & Explain] 403 vs 404",
    problem: "403 and 404 are easy to confuse.",
    instruction: "What's the difference: does 403 mean the server doesn't have that path, or that it understood the request but refuses to allow it?",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('refuse') || clean.includes('understood') || clean.includes('authoriz') || clean.includes('permission');
    },
    hint: "403 means the server understood the request but refuses it (authorization) — 404 means the path doesn't exist at all."
  },
  {
    num: 9,
    title: "Exercise 8.9: [Test & Break] The Misread Payload",
    problem: `A teammate claims this JSON response is a single object: [{ "player": "cdt_arya", "score": 4200 }, { "player": "cdt_ben", "score": 3900 }]`,
    instruction: "Correct the mistake: is the top-level structure an array or an object, and how many items does it contain?",
    preloaded: "/* Write the correction here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('array') && (clean.includes('2') || clean.includes('two'));
    },
    hint: "It's an array of 2 objects, each with a player (String) and a score (Number)."
  },
  {
    num: 10,
    title: "Exercise 8.10: [Iterate & Improve] Document a Real Request",
    problem: "Bring the whole Session 8 workflow together — this is your homework quest.",
    instruction: "Document one real captured request from the Network tab: its URL, its method, its status code, and a sketch of its response payload's shape (array or object, and what fields it has).",
    preloaded: "/* Document your captured request here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('url') && clean.includes('method') && clean.includes('status') && (clean.includes('array') || clean.includes('object') || clean.includes('field'));
    },
    hint: "Include all four: URL, method, status code, and the payload shape (array/object + field names)."
  }
];

const L2S9_EXERCISES = [
  {
    num: 1,
    title: "Exercise 9.1: [Plan & Design] The Two-Step Fetch",
    problem: "Before writing any fetch code, plan the two-step sequence needed to turn a network response into usable data.",
    instruction: "Plan fetchLeaderboard(): what TWO things must you await in sequence — first to get the response, then to get the actual data out of it?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('fetch') && clean.includes('json');
    },
    hint: "First await fetch(url) to get the response, then await res.json() to parse the actual data out of it."
  },
  {
    num: 2,
    title: "Exercise 9.2: [Write AI Prompt] The Leaderboard Fetcher",
    problem: "Turn the two-step plan into a precise prompt.",
    instruction: "Write an AI prompt asking for an async function fetchLeaderboard() that awaits a fetch() call, awaits parsing the response with .json(), and logs the result with console.log.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('async') && clean.includes('await') && clean.includes('fetch') && clean.includes('json') && clean.includes('console.log');
    },
    hint: "Mention: async, await, fetch(), .json(), and console.log."
  },
  {
    num: 3,
    title: "Exercise 9.3: [Review & Explain] The Missing Await",
    problem: `let res = fetch("https://api.marsdefense.dev/scores"); (missing await)`,
    instruction: "Without the await keyword before fetch(...), what does res actually hold — the response data, or a pending Promise?",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('promise');
    },
    hint: "res holds a pending Promise — await is what tells JS to pause and unwrap the actual response."
  },
  {
    num: 4,
    title: "Exercise 9.4: [Test & Break] The Missing Async Keyword",
    problem: "Bug: this function uses await but was never declared async, which is invalid.",
    instruction: "Fix fetchLeaderboard() by adding the missing async keyword to its function declaration.",
    preloaded: 'function fetchLeaderboard() {\n  let res = await fetch("https://api.marsdefense.dev/scores");\n  let data = await res.json();\n  console.log(data);\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('asyncfunctionfetchleaderboard()');
    },
    hint: "async function fetchLeaderboard() { ... }"
  },
  {
    num: 5,
    title: "Exercise 9.5: [Iterate & Improve] The Complete Fetcher",
    problem: "Combine the fixed pieces into one working function.",
    instruction: "Write the complete fetchLeaderboard(): async function that awaits fetch(), awaits res.json(), logs the data, and returns it.",
    preloaded: "/* Write fetchLeaderboard() here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('asyncfunctionfetchleaderboard()') && clean.includes('awaitfetch(') && clean.includes('awaitres.json()') && clean.includes('console.log(data)');
    },
    hint: "async function fetchLeaderboard() { let res = await fetch(url); let data = await res.json(); console.log(data); return data; }"
  },
  {
    num: 6,
    title: "Exercise 9.6: [Plan & Design] The Failure Plan",
    problem: "Before writing error handling, plan what should happen when the network fails.",
    instruction: "Plan the try/catch: which two await calls should live INSIDE the try block, and what should the catch block do if either one fails?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('try') && clean.includes('catch') && (clean.includes('fetch') || clean.includes('both'));
    },
    hint: "Both await fetch() and await res.json() go inside try; catch should log a friendly error, not crash the app."
  },
  {
    num: 7,
    title: "Exercise 9.7: [Write AI Prompt] Wrapping the Fetch",
    problem: "Turn the failure plan into a precise prompt.",
    instruction: "Write an AI prompt asking to wrap both await calls of fetchLeaderboard() in a try/catch block that logs a friendly error message with console.error on failure.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('try') && clean.includes('catch') && clean.includes('console.error');
    },
    hint: "Mention: try/catch and console.error."
  },
  {
    num: 8,
    title: "Exercise 9.8: [Review & Explain] The Unprotected Parse",
    problem: "If try only wraps await fetch(...) but NOT await res.json(), and the .json() parse throws (malformed response).",
    instruction: "Would that parse error be caught by the catch block, or would it crash uncaught? Answer in one word.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('uncaught') || clean.includes('crash');
    },
    hint: "It would crash uncaught — only code physically inside the try block is protected by that catch."
  },
  {
    num: 9,
    title: "Exercise 9.9: [Test & Break] The Half-Protected Parse",
    problem: "Bug: the try block only wraps the fetch() call — the .json() parse happens outside try, unprotected.",
    instruction: "Fix fetchLeaderboard() so BOTH await calls (fetch and res.json()) are inside the same try block.",
    preloaded: 'async function fetchLeaderboard() {\n  try {\n    var res = await fetch("https://api.marsdefense.dev/scores");\n  } catch (err) {\n    console.error("Fetch failed", err);\n  }\n  let data = await res.json();\n  console.log(data);\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const tryIdx = clean.indexOf('try{');
      const catchIdx = clean.indexOf('}catch');
      if (tryIdx === -1 || catchIdx === -1) return false;
      const body = clean.slice(tryIdx, catchIdx);
      return body.includes('awaitfetch(') && body.includes('awaitres.json()');
    },
    hint: "Move let data = await res.json(); inside the try block, before the catch."
  },
  {
    num: 10,
    title: "Exercise 9.10: [Iterate & Improve] The Complete Robust Fetcher",
    problem: "Bring the full asynchronous pipeline together.",
    instruction: "Write the complete, correct fetchLeaderboard(): async function, try block wrapping BOTH await fetch() and await res.json(), console.log(data) inside try, and a catch block logging a friendly error with console.error.",
    preloaded: "/* Write the complete function here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const tryIdx = clean.indexOf('try{');
      const catchIdx = clean.indexOf('}catch');
      if (tryIdx === -1 || catchIdx === -1) return false;
      const body = clean.slice(tryIdx, catchIdx);
      return clean.includes('async') && body.includes('awaitfetch(') && body.includes('awaitres.json()') && clean.includes('catch');
    },
    hint: "async function fetchLeaderboard() { try { let res = await fetch(url); let data = await res.json(); console.log(data); return data; } catch (err) { console.error('Fetch failed', err); } }"
  }
];

const L2S10_EXERCISES = [
  {
    num: 1,
    title: "Exercise 10.1: [Plan & Design] The POST Options Object",
    problem: "Before sending any data to the server, plan the shape of a POST request.",
    instruction: "Plan the fetch() options object for a POST request: what THREE keys does it need — one for the HTTP method, one for headers, and one for the payload?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('method') && clean.includes('headers') && clean.includes('body');
    },
    hint: "method, headers, and body."
  },
  {
    num: 2,
    title: "Exercise 10.2: [Write AI Prompt] The Score Submitter",
    problem: "Turn the POST plan into a precise prompt.",
    instruction: "Write an AI prompt asking for submitScore(player, val): an async function that POSTs to the scores endpoint with a Content-Type: application/json header and a JSON.stringify'd body containing player and score.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('post') && clean.includes('json') && clean.includes('submitscore');
    },
    hint: "Mention: POST, JSON, and submitScore."
  },
  {
    num: 3,
    title: "Exercise 10.3: [Review & Explain] The Raw Object Body",
    problem: "body: { player: player, score: val }",
    instruction: "Why is this wrong — what function must wrap this object before it can be sent as a fetch body? Type the function name.",
    preloaded: "/* Write the function name here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('json.stringify');
    },
    hint: "JSON.stringify() — fetch bodies must be strings, not raw JS objects."
  },
  {
    num: 4,
    title: "Exercise 10.4: [Test & Break] The Unstringified Body",
    problem: "Bug: this options object passes a raw JS object as the body instead of a JSON string.",
    instruction: "Fix the body so it's passed through JSON.stringify() instead of as a raw object.",
    preloaded: 'let options = {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: { player: player, score: val }\n};',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('body:json.stringify({player:player,score:val})');
    },
    hint: 'body: JSON.stringify({ player: player, score: val })'
  },
  {
    num: 5,
    title: "Exercise 10.5: [Iterate & Improve] The Complete Options Object",
    problem: "Combine the full POST options object.",
    instruction: "Write the complete options object for submitScore(player, val): method 'POST', headers with Content-Type application/json, and body as JSON.stringify({ player, score: val }).",
    preloaded: "/* Write the options object here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('method:"post"') && clean.includes('"content-type":"application/json"') && clean.includes('body:json.stringify(');
    },
    hint: '{ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ player: player, score: val }) }'
  },
  {
    num: 6,
    title: "Exercise 10.6: [Plan & Design] The Success Check",
    problem: "Before checking anything, plan how you'd actually know a POST succeeded.",
    instruction: "Plan the success check: what single Response property tells you whether the POST actually succeeded, separate from whether the network connection worked at all?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('res.ok') || clean.includes('.ok');
    },
    hint: "res.ok — true only for 2xx status responses."
  },
  {
    num: 7,
    title: "Exercise 10.7: [Write AI Prompt] The Status Guard",
    problem: "Turn the success-check plan into a precise prompt.",
    instruction: "Write an AI prompt asking to add a check after the fetch: if res.ok is false, throw a new Error that includes res.status in its message.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('res.ok') && clean.includes('throw') && clean.includes('status');
    },
    hint: "Mention: res.ok, throw new Error, and res.status."
  },
  {
    num: 8,
    title: "Exercise 10.8: [Review & Explain] Does fetch() Reject on 500?",
    problem: "fetch() only rejects (triggers catch) on a NETWORK failure.",
    instruction: "Does fetch() reject on its own when the server responds with status 500? Answer yes or no.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('no');
    },
    hint: "No — fetch() resolves normally even for 404/500 responses; you must check res.ok yourself to catch HTTP-level failures."
  },
  {
    num: 9,
    title: "Exercise 10.9: [Test & Break] The Missing Status Check",
    problem: "Bug: this function assumes success just because fetch() didn't throw, and logs success even on a server error.",
    instruction: "Fix submitScore() by adding a check right after the fetch: if (!res.ok), throw a new Error including res.status, before logging success.",
    preloaded: 'async function submitScore(player, val) {\n  try {\n    let res = await fetch("https://api.marsdefense.dev/scores", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({ player: player, score: val })\n    });\n    console.log("Score posted successfully");\n  } catch (e) {\n    console.warn("Telemetry submission offline", e.message);\n  }\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('if(!res.ok)') && clean.includes('throw') && clean.includes('res.status');
    },
    hint: 'if (!res.ok) { throw new Error("Submitting failed: " + res.status); }'
  },
  {
    num: 10,
    title: "Exercise 10.10: [Iterate & Improve] The Complete Score Submitter",
    problem: "Bring the full POST pipeline together.",
    instruction: "Write the complete submitScore(player, val): async, try/catch, POST options with JSON.stringify body, an if (!res.ok) throw check, console.log on success, and console.warn on catch.",
    preloaded: "/* Write the complete function here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('asyncfunctionsubmitscore') && clean.includes('method:"post"') && clean.includes('body:json.stringify(') && clean.includes('if(!res.ok)') && clean.includes('throw') && clean.includes('console.warn');
    },
    hint: "async function submitScore(player, val) { try { let res = await fetch(url, { method: 'POST', headers: {...}, body: JSON.stringify({...}) }); if (!res.ok) { throw new Error('Submitting failed: ' + res.status); } console.log('Score posted successfully'); } catch (e) { console.warn('Telemetry submission offline', e.message); } }"
  }
];

const L2S11_EXERCISES = [
  {
    num: 1,
    title: "Exercise 11.1: [Plan & Design] The Scores Schema",
    problem: "Before writing any SQL, plan the shape of the colonist_scores table.",
    instruction: "Plan the colonist_scores schema: name the FOUR columns it needs, and state which one is the primary key.",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('id') && clean.includes('player') && clean.includes('score') && clean.includes('wave') && clean.includes('primary');
    },
    hint: "id (primary key), player, score, wave_reached."
  },
  {
    num: 2,
    title: "Exercise 11.2: [Write AI Prompt] The CREATE TABLE Statement",
    problem: "Turn the schema plan into a precise prompt.",
    instruction: "Write an AI prompt asking for a CREATE TABLE statement for colonist_scores with id as an INT PRIMARY KEY, player as VARCHAR(50), score as INT, and wave_reached as INT.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('create table') && clean.includes('primary key') && clean.includes('varchar') && clean.includes('wave_reached');
    },
    hint: "Mention: CREATE TABLE, PRIMARY KEY, VARCHAR, and wave_reached."
  },
  {
    num: 3,
    title: "Exercise 11.3: [Review & Explain] What a Primary Key Guarantees",
    problem: "Every table needs exactly one primary key column.",
    instruction: "What does marking a column PRIMARY KEY guarantee about its values across every row? Answer in one word.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('unique');
    },
    hint: "Uniqueness — no two rows can ever share the same primary key value."
  },
  {
    num: 4,
    title: "Exercise 11.4: [Test & Break] The Missing Primary Key",
    problem: "Bug: this table has no primary key at all, so duplicate rows could slip in unnoticed.",
    instruction: "Fix the CREATE TABLE statement by adding PRIMARY KEY to the id column.",
    preloaded: 'CREATE TABLE colonist_scores (\n  id INT,\n  player VARCHAR(50),\n  score INT,\n  wave_reached INT\n);',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('idintprimarykey');
    },
    hint: "id INT PRIMARY KEY,"
  },
  {
    num: 5,
    title: "Exercise 11.5: [Iterate & Improve] Table + First Row",
    problem: "Bring table creation and a first row together.",
    instruction: "Write the complete CREATE TABLE statement for colonist_scores (id INT PRIMARY KEY, player VARCHAR(50), score INT, wave_reached INT), plus one INSERT statement adding a sample row.",
    preloaded: "/* Write the complete CREATE TABLE + INSERT here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('createtablecolonist_scores') && clean.includes('idintprimarykey') && clean.includes('insertintocolonist_scores');
    },
    hint: "CREATE TABLE colonist_scores (id INT PRIMARY KEY, player VARCHAR(50), score INT, wave_reached INT); INSERT INTO colonist_scores (id, player, score, wave_reached) VALUES (1, 'cdt_arya', 4200, 6);"
  },
  {
    num: 6,
    title: "Exercise 11.6: [Plan & Design] Filtering and Sorting",
    problem: "Before writing a query, plan which clause does which job.",
    instruction: "Plan a query that returns only high scorers, sorted best-first: which SQL clause filters rows, and which clause orders them?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('where') && clean.includes('order by');
    },
    hint: "WHERE filters rows; ORDER BY sorts the results."
  },
  {
    num: 7,
    title: "Exercise 11.7: [Write AI Prompt] The Leaderboard Query",
    problem: "Turn the filter/sort plan into a precise prompt.",
    instruction: "Write an AI prompt asking for a SELECT statement returning player and score from colonist_scores where score is greater than 4000, ordered by score descending.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('select') && clean.includes('where') && clean.includes('4000') && clean.includes('order by') && clean.includes('desc');
    },
    hint: "Mention: SELECT, WHERE score > 4000, and ORDER BY ... DESC."
  },
  {
    num: 8,
    title: "Exercise 11.8: [Review & Explain] The Missing WHERE",
    problem: "An UPDATE statement runs with NO WHERE clause at all.",
    instruction: "Does it update just one matching row, or every row in the table? Answer in one word.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('every') || clean.includes('all');
    },
    hint: "Every row — with no WHERE clause, the UPDATE applies to the entire table."
  },
  {
    num: 9,
    title: "Exercise 11.9: [Test & Break] The Backwards Comparison",
    problem: "Bug: this query returns LOW scorers instead of high scorers — the comparison is backwards.",
    instruction: "Fix the WHERE condition — it should return colonists scoring ABOVE 4000, not below.",
    preloaded: 'SELECT player, score FROM colonist_scores\nWHERE score < 4000\nORDER BY score DESC;',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('wherescore>4000') && !clean.includes('wherescore<4000');
    },
    hint: "WHERE score > 4000"
  },
  {
    num: 10,
    title: "Exercise 11.10: [Iterate & Improve] The Targeted Update",
    problem: "Bring safe, targeted updates together.",
    instruction: "Write the complete, correctly-targeted UPDATE statement: set score to 4500 for the single row where id = 1.",
    preloaded: "/* Write the complete UPDATE statement here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('updatecolonist_scoressetscore=4500whereid=1');
    },
    hint: "UPDATE colonist_scores SET score = 4500 WHERE id = 1;"
  }
];

const L2S12_EXERCISES = [
  {
    num: 1,
    title: "Exercise 12.1: [Plan & Design] Why Concatenation Is Dangerous",
    problem: `let query = "SELECT * FROM users WHERE name = '" + userInput + "'";`,
    instruction: "Plan why this is dangerous — besides a normal name, what could userInput contain that changes the query's MEANING?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('sql') || clean.includes('quote') || clean.includes("'") || clean.includes('inject');
    },
    hint: "It could contain SQL syntax itself (quotes, OR conditions) — turning data into code."
  },
  {
    num: 2,
    title: "Exercise 12.2: [Write AI Prompt] Tracing the Injection",
    problem: "Turn the concern into a precise prompt.",
    instruction: `Write an AI prompt asking to explain what happens to the query "SELECT * FROM users WHERE name = '" + userInput + "'" when userInput is ' OR '1'='1.`,
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('userinput') && clean.includes('query') && (clean.includes("1'='1") || clean.includes('always'));
    },
    hint: "Ask what the resulting WHERE clause evaluates to once userInput becomes ' OR '1'='1."
  },
  {
    num: 3,
    title: "Exercise 12.3: [Review & Explain] Always True",
    problem: "With that injected input in place.",
    instruction: "Does the WHERE clause become a condition that is ALWAYS TRUE, or ALWAYS FALSE? Answer in two words.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('alwaystrue');
    },
    hint: "Always true — '1'='1' is always true, so every row matches and the whole table is returned."
  },
  {
    num: 4,
    title: "Exercise 12.4: [Test & Break] Parameterize the Query",
    problem: "Bug: this query is built by string concatenation, making it injectable.",
    instruction: "Rewrite this vulnerable query in parameterized form: replace the concatenated userInput with a single ? placeholder.",
    preloaded: 'let query = "SELECT * FROM users WHERE name = \'" + userInput + "\'";',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('wherename=?') && !clean.includes('+userinput+');
    },
    hint: "SELECT * FROM users WHERE name = ?;"
  },
  {
    num: 5,
    title: "Exercise 12.5: [Iterate & Improve] The Complete Parameterized Query",
    problem: "Bring the safe lookup together.",
    instruction: "Write the complete parameterized query for looking up a user by name, using a ? placeholder instead of string concatenation.",
    preloaded: "/* Write the complete query here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('select') && clean.includes('wherename=?');
    },
    hint: "SELECT * FROM users WHERE name = ?;"
  },
  {
    num: 6,
    title: "Exercise 12.6: [Plan & Design] The Username Rule",
    problem: "Before validating anything, plan the rule for a username field.",
    instruction: "Plan the validation rule for the username field: what length range (min-max characters) and what character types should be allowed?",
    preloaded: "/* Write your plan here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('3') && clean.includes('20') && (clean.includes('letter') || clean.includes('digit') || clean.includes('underscore'));
    },
    hint: "3-20 characters; letters, digits, and underscore only."
  },
  {
    num: 7,
    title: "Exercise 12.7: [Write AI Prompt] The Full Rulebook",
    problem: "Turn the validation plan into a precise prompt.",
    instruction: "Write an AI prompt asking for validation rules (as comments) for three fields: username (length + allowed characters), score (integer range), and quantity (must be positive).",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('username') && clean.includes('score') && clean.includes('quantity');
    },
    hint: "Mention all three fields explicitly: username, score, and quantity."
  },
  {
    num: 8,
    title: "Exercise 12.8: [Review & Explain] What the Password Column Stores",
    problem: "The password column in the database should never contain the actual password.",
    instruction: "What should it store instead? Answer in one word.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('hash');
    },
    hint: "A hash — a one-way scrambled version, so a leak of the database doesn't directly reveal passwords."
  },
  {
    num: 9,
    title: "Exercise 12.9: [Test & Break] The Negative Supply Heist",
    problem: "Bug: this validation rule accepts a purchase quantity of -5, which the server treats as adding stock and refunding credits.",
    instruction: "Fix isValidQuantity() so it also rejects zero or negative quantities — only positive numbers should pass.",
    preloaded: "function isValidQuantity(q) {\n  return typeof q === 'number';\n}",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('q>0');
    },
    hint: "return typeof q === 'number' && q > 0;"
  },
  {
    num: 10,
    title: "Exercise 12.10: [Iterate & Improve] The Complete Rulebook",
    problem: "Bring the full validation rulebook together.",
    instruction: "Write the complete validation rulebook for all three fields: username (3-20 chars, letters/digits/underscore), score (integer, 0 to 1,000,000), and quantity (integer, greater than 0).",
    preloaded: "/* Write the complete rulebook here */",
    validate: (code) => {
      const clean = code.replace(/,/g, '').toLowerCase();
      return clean.includes('username') && clean.includes('score') && clean.includes('quantity') && clean.includes('1000000');
    },
    hint: "username: 3-20 chars, letters/digits/underscore; score: integer 0-1,000,000; quantity: integer > 0."
  }
];

const L2S13_EXERCISES = [
  {
    num: 1,
    title: "Exercise 13.1: [Plan & Design] Canvas Fundamentals Recall",
    problem: "Warm up by recalling the canvas basics from Session 1.",
    instruction: "Name the TWO things every canvas script must do before drawing works — one to access the drawing surface, one to run every frame before redrawing.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('getcontext') && clean.includes('clearrect');
    },
    hint: "canvas.getContext('2d') once, and ctx.clearRect() every frame before redrawing."
  },
  {
    num: 2,
    title: "Exercise 13.2: [Write AI Prompt] The Sprite Cleanup",
    problem: "Assessment Part A: build a standalone sprite-pruning snippet.",
    instruction: "Write an AI prompt asking for a sprite cleanup function: a REVERSE loop over a sprites array that splices out any sprite whose y is less than 0.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('reverse') && clean.includes('splice') && clean.includes('sprite');
    },
    hint: "Mention: reverse loop, splice, sprites, and y < 0."
  },
  {
    num: 3,
    title: "Exercise 13.3: [Review & Explain] Collision Sweep Recall",
    problem: "Recall Session 6's collision sweep.",
    instruction: "Why must a nested collision sweep's inner loop call break immediately after resolving a hit?",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('multiple') || clean.includes('again') || clean.includes('more than one') || clean.includes('twice');
    },
    hint: "Without break, the loop keeps checking and could resolve the same laser against more than one alien in a single frame."
  },
  {
    num: 4,
    title: "Exercise 13.4: [Test & Break] Diagnostic Challenge A",
    problem: "Diagnostic Challenge A: this async request handler is missing an await.",
    instruction: "Find and fix the missing await in this async request handler.",
    preloaded: 'async function fetchLeaderboard() {\n  let res = await fetch("https://api.marsdefense.dev/scores");\n  let data = res.json();\n  console.log(data);\n}',
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('awaitres.json()');
    },
    hint: "let data = await res.json();"
  },
  {
    num: 5,
    title: "Exercise 13.5: [Iterate & Improve] Async Synthesis",
    problem: "Synthesis: combine everything from Sessions 9-10.",
    instruction: "Write a complete async fetchLeaderboard() combining everything from Sessions 9-10 — async keyword, both awaits inside a try block, console.log(data) on success, and a catch block logging a friendly error.",
    preloaded: "/* Write the complete function here */",
    runnable: true,
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      const tryIdx = clean.indexOf('try{');
      const catchIdx = clean.indexOf('}catch');
      if (tryIdx === -1 || catchIdx === -1) return false;
      const body = clean.slice(tryIdx, catchIdx);
      return clean.includes('async') && body.includes('awaitfetch(') && body.includes('awaitres.json()') && clean.includes('catch');
    },
    hint: "async function fetchLeaderboard() { try { let res = await fetch(url); let data = await res.json(); console.log(data); } catch (err) { console.error('Fetch failed', err); } }"
  },
  {
    num: 6,
    title: "Exercise 13.6: [Plan & Design] Input Matrix Recall",
    problem: "Recall Session 6's input-state pattern.",
    instruction: "Why must BOTH keydown and keyup listeners be bound for smooth continuous ship movement, not just keydown?",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('keyup') && (clean.includes('stuck') || clean.includes('release') || clean.includes('stop'));
    },
    hint: "Without keyup, a key's state never resets to false when released — movement or firing would get stuck on."
  },
  {
    num: 7,
    title: "Exercise 13.7: [Write AI Prompt] The Sweep Snippet",
    problem: "Assessment Part A: build a standalone collision-sweep snippet.",
    instruction: "Write an AI prompt asking for a nested collision sweep between a lasers array (outer loop, reverse) and a grid of aliens (inner double loop), marking hits and breaking out immediately.",
    preloaded: "/* Write your AI Prompt here: */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('reverse') && clean.includes('aliens') && clean.includes('lasers') && clean.includes('break');
    },
    hint: "Mention: reverse loop, lasers, aliens grid, and break."
  },
  {
    num: 8,
    title: "Exercise 13.8: [Review & Explain] Diagnostic Challenge B, Part 1",
    problem: `let query = "SELECT * FROM users WHERE name = '" + name + "'";`,
    instruction: "Diagnostic Challenge B: what is wrong with this query, and what's the general name for this class of vulnerability? Answer in one word.",
    preloaded: "/* Write your answer here */",
    validate: (code) => {
      const clean = code.toLowerCase();
      return clean.includes('injection');
    },
    hint: "SQL injection — concatenating raw user input into a query string lets input data change the query's meaning."
  },
  {
    num: 9,
    title: "Exercise 13.9: [Test & Break] Diagnostic Challenge B, Part 2",
    problem: "Fix the vulnerable query identified above.",
    instruction: "Fix the query by rewriting it in parameterized form using a single ? placeholder instead of concatenating name.",
    preloaded: 'let query = "SELECT * FROM users WHERE name = \'" + name + "\'";',
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('wherename=?') && !clean.includes('+name+');
    },
    hint: "SELECT * FROM users WHERE name = ?;"
  },
  {
    num: 10,
    title: "Exercise 13.10: [Iterate & Improve] Final Synthesis",
    problem: "Final synthesis: bring the database module's lesson full circle.",
    instruction: "Write the complete, correctly-targeted UPDATE statement for colonist_scores — set score to 4500 for the single row where id = 1, avoiding the 'update the whole table' mistake from Session 11.",
    preloaded: "/* Write the complete UPDATE statement here */",
    validate: (code) => {
      const clean = code.replace(/\s+/g, '').toLowerCase();
      return clean.includes('updatecolonist_scoressetscore=4500whereid=1');
    },
    hint: "UPDATE colonist_scores SET score = 4500 WHERE id = 1;"
  }
];

const S5_EXERCISES = [
  {
    num: 1,
    title: "Exercise 5.1: Reading the Key Pressed",
    problem: "Every keypress in the browser fires a 'keydown' event, and the event object handed to your code carries the exact key name on its .key property. This sandbox already tracks the car's horizontal position in a variable called carX, and its on-screen element has id player-car — but right now, nothing listens for keyboard input at all. The real game only ever steers with the LEFT and RIGHT arrow keys (test your code by pressing those two in the preview below) — for THIS exercise, those two are enough (later exercises will have you practice extending detection to more keys). This sandbox has no extra text display of its own — the only way to actually 'see' something is the console log panel underneath the preview.",
    instruction: "Goal: make your code detect exactly which key the player pressed, and prove it works (show the key name somewhere you can actually see it, e.g. the console log panel below) when you press the left or right arrow key. 1) Plan: in your own words, what does your code need to listen for, and where would the key's name actually show up once you catch it? 2) Prompt: write your own prompt describing that goal to the AI — you decide the wording. 3) Explain: once you have working code, point to the exact piece that tells you which key was pressed, and how.",
    planPlaceholder: "What does your code need to listen for, and where will the key's name end up once you catch it? Work it through in your own words.",
    promptPlaceholder: "Write your own prompt for the goal above — describe what you want to happen, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 2,
    title: "Exercise 5.2: Detecting All Four Directions",
    problem: "Your code from Exercise 5.1 detects ArrowLeft and ArrowRight. This drill extends that same detection to ArrowUp and ArrowDown too — even though the real game only steers left/right, this is practice recognizing more keys correctly.",
    instruction: "Goal: extend your key detection so it also recognizes ArrowUp and ArrowDown, proving each of the four arrow keys is correctly identified. 1) Plan: in your own words, what needs to change or be added to your existing code to recognize two more keys? 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: press all four arrow keys in the preview and describe what gets logged for each one.",
    planPlaceholder: "What needs to change or be added to your existing code to recognize two more keys?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 3,
    title: "Exercise 5.3: Different Distances Per Direction",
    problem: "Each direction should move by its own distance: left and right by 20, up and down by 10. This sandbox doesn't visually show up/down movement on the car, so track the two running numbers yourself and log them so you can see them changing.",
    instruction: "Goal: track a horizontal position and a vertical position separately, each changing by its own amount per direction (left/right by 20, up/down by 10), and log both after every keypress. 1) Plan: in your own words, what two numbers do you need to track, and by how much does each change per key? 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: press a few keys in sequence and predict what the two logged numbers should be.",
    planPlaceholder: "What two numbers do you need to track, and by how much does each change per key?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true
  },
  {
    num: 4,
    title: "Exercise 5.4: Pause with Spacebar",
    problem: "This sandbox already has a hidden overlay element (id restart-panel) built for showing a message over the track — right now it's hidden and its text says 'GAME OVER, Press Space to Restart.' It's hidden by being given a CSS class called 'hidden' (not by an inline style) — setting the element's own display style directly won't override that class, so the reveal has to defeat the class itself.",
    instruction: "Goal: make pressing the Spacebar reveal that overlay showing a 'Paused' message instead. 1) Plan: in your own words, what needs to change about that element when Space is pressed — its visibility, its text, or both? 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: press Space in the preview and describe what appears.",
    planPlaceholder: "What needs to change about the overlay element when Space is pressed — visibility, text, or both?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true
  }
  // Note (2026-07-30): a 5th "combine everything into one complete handler" capstone
  // exercise used to live here, but it was functionally a duplicate of this session's
  // Project Task (Lab 5), which now IS the single "combine it for real" moment — done
  // on the student's actual accumulated game.js, AI-graded with reuse checking, instead
  // of rehearsed twice on two different files. See improve_concept.md Part II.
];

const S6_EXERCISES = [
  {
    num: 1,
    title: "Exercise 6.1: Track Boundary Coordinates & the Left Guard",
    problem: "The three lane positions are 35px, 165px, and 295px (car starts centered at 165). Right now nothing stops the car from steering past the left edge of the track.",
    instruction: "Goal: stop the car from steering past the left edge. 1) Plan: in your own words, what needs to be true about carX before you allow it to move further left? 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: once it works, explain what happens if the car is already at the edge and ArrowLeft is pressed again — and why a looser comparison like carX >= -130 would fail to protect that same edge.",
    planPlaceholder: "In your own words, what needs to be true about carX before allowing it to move further left?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "The left boundary is 35 (leftmost lane). A guard should only allow carX -= 130 while carX > 35, blocking further movement once the car reaches the edge. Explanation should say the movement is blocked / nothing happens once carX is already at 35, AND should recognize that a looser comparison like carX >= -130 would let the car travel deep into negative/off-screen territory before ever blocking it. Don't require the literal numbers 35/130/-130 or the word 'guard' in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 2,
    title: "Exercise 6.2: The Right Guard",
    problem: "The right edge of the track is at carX = 295. Right now ArrowRight can push the car past it with nothing to stop it.",
    instruction: "Goal: stop the car from steering past the right edge, mirroring how the left edge is already protected. 1) Plan: in your own words, how should the right guard compare to the left guard you already built in 6.1? 2) Prompt: describe that goal to the AI, in your own words. 3) Explain: why does this guard mirror the left one instead of needing entirely different logic?",
    planPlaceholder: "How should the right guard compare to the left guard you already built — same idea, opposite direction?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "The right guard should only allow carX += 130 while carX < 295 (mirroring the left guard's carX > 35 structure, opposite direction/boundary). Explanation should identify the structural symmetry with the left guard from 6.1. Don't require the literal numbers 295/130 or the word 'mirror' in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 3,
    title: "Exercise 6.3: Accelerate & Decelerate (the Speed Range Guard)",
    problem: `Holding ArrowUp should speed the car up — increasing speed, showing the live number in the HUD (#speed-val), and advancing roadOffset so the track's striped background scrolls, making it look like the car is driving forward. Holding ArrowDown should slow it back down the same way. But speed must stay inside its range: it can't climb past 120 (reset to 100 if it does — watch out, resetting to the String "100" would re-introduce the Session 4 string-concatenation bug), and it can't drop below 0 either. And since roadOffset itself changes value every time speed updates, watch out for the same kind of trap in a different shape: declaring it as a value that can never change would crash the very first time it tries to advance.`,
    instruction: "Goal: make ArrowUp increase speed and ArrowDown decrease it, with speed always staying between 0 and 120. 1) Plan: in your own words, what needs to be true about speed before you allow it to increase further? What needs to be true before you allow it to decrease further? 2) Prompt: describe both rules to the AI, in your own words — including the type concern, and the fact that roadOffset needs to be declared as a value that's allowed to change over time. This snippet is tested on its own, so have it declare roadOffset itself and call both the accelerate and decelerate handlers a few times so you can see #speed-val and both guards actually work. 3) Explain: why is guarding the bottom of speed's range (0) just as necessary as guarding the top (120)?",
    planPlaceholder: "What needs to be true about speed before allowing it to increase further? Before allowing it to decrease further?",
    promptPlaceholder: "Describe both the acceleration and deceleration rules to the AI, in your own words — including the type concern.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "ArrowUp should increase speed (e.g. speed += 10) capped so it never exceeds 120 (resetting to the Number 100, not a string, if it would). ArrowDown should decrease speed (e.g. speed -= 10) floored so it never goes below 0. #speed-val's textContent should update, and roadOffset (declared by the snippet itself, since this box is tested standalone) should advance when accelerating, driving #game-track's style.backgroundPositionY. Explanation should recognize the 0 floor is exactly the same kind of guard as the 120 ceiling, just at the opposite end of the range. A strong prompt should also flag that roadOffset changes over time and so can't be declared as a fixed/constant value — judged by that reasoning, not by requiring the literal words 'let' or 'const'. Don't require the literal numbers 120/100/10/0 in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 4,
    title: "Exercise 6.4: Hold to Accelerate, Release to Decelerate (Momentum)",
    problem: "Right now ArrowUp adds a fixed burst of speed each press. This exercise upgrades that to a momentum system: holding ArrowUp continuously builds speed up to 300 and makes the road scroll forward, but as soon as you release the key the car coasts — speed gradually drops back to 0 on its own, like lifting your foot off the accelerator. Watch out for a common trap here: whatever tracks 'is the key currently held' has to actually be declared, AND both the keydown and keyup handlers have to actually update it — it's easy for an AI to reference a tracker like that without ever declaring it, or declare it but never wire the handlers to update it, so it silently never reflects what's really happening.",
    instruction: "Goal: make holding ArrowUp accelerate the car (up to 300) and releasing it let the car coast to a stop. 1) Plan: in your own words, what is the difference between 'the key was just pressed once' vs. 'the key is currently being held down'? What needs to keep running even after the key event fires so the car can slow down on its own? 2) Prompt: describe both behaviors to the AI in your own words — accelerating while ArrowUp is held, auto-decelerating when it isn't, roadOffset scrolling with speed, #speed-val always showing the current value, and be explicit that the 'currently held' tracker must be both declared and kept up to date by the keydown and keyup handlers. 3) Explain: why does this feel more natural than the fixed step-by-step speed changes from Exercise 6.3, and what real-world mechanic does it mimic?",
    planPlaceholder: "What is the difference between 'key just pressed' vs. 'key currently held'? What needs to keep running to let speed decay on its own?",
    promptPlaceholder: "Describe both behaviors to the AI: build speed while ArrowUp is held (cap at 300), and auto-decelerate to 0 when released.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "The code should track whether ArrowUp is currently held (e.g. a boolean flag or key-state object, declared once and actually set on keydown, cleared on keyup — not just referenced without ever being declared or updated). While held, speed should increase each tick up to a cap of 300. When released, speed should decay gradually toward 0 on its own (e.g. via setInterval or requestAnimationFrame — something that keeps running without a key press). roadOffset should advance by the current speed each tick, driving #game-track's backgroundPositionY forward. #speed-val should always reflect the live speed value. A strong prompt should explicitly ask that the 'currently held' tracker be both declared and kept up to date by both handlers — judged by that reasoning, not by requiring a literal variable name. The explanation should correctly identify that 'held vs. pressed once' is the key distinction, and that the decay requires a persistent timer or loop — not just a keyup handler that snaps speed to 0."
  }
  // Note (2026-08-13): Ex 6.4 updated from the original 'Reverse Handoff' mechanic
  // (ArrowDown reverses roadOffset once speed = 0) to a 'Hold-to-Accelerate / Release-
  // to-Decelerate' momentum system — hold ArrowUp to build speed up to 300, release to
  // coast back to 0. More practical and introduces the 'is the key currently held'
  // concept (keydown/keyup boolean flag + setInterval/rAF decay loop) rather than a
  // conditional handoff. 6.3 retains the fixed-step ceiling/floor guard concept.
  // See buildJsSandboxPreview reactive globals for how speed auto-updates #speed-val.
];


const S7_EXERCISES = [
  {
    num: 1,
    title: "Exercise 7.1: Marker Spacing Plan & the Loop",
    problem: "A loop that repeats a task needs two numbers: how many times to run (5 markers) and the step between each (120px down). Those two values drive the whole loop.",
    instruction: "1) Plan: plan how many markers and how far apart. 2) Prompt: ask the AI for a 'for' loop that runs 5 times, computing markerY as i * 120 on each pass — paste its real code into Output Code and run it. 3) Explain: name the loop header's three parts (start, test, update).",
    planPlaceholder: "Plan: how many markers, and how far apart? (hint: 5 markers, 120 apart)",
    promptPlaceholder: "Write the prompt asking for a for loop running 5 times, computing markerY = i * 120 each pass.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    validate: ({ prompt, outputCode, explain }) => {
      const p = prompt.toLowerCase().replace(/\s+/g, '');
      const promptOk = p.includes('forloop') && p.includes('i*120') && p.includes('5');
      const clean = outputCode.replace(/\s+/g, '');
      const codeOk = clean.includes('for(') && clean.includes('i<5') && clean.includes('i++') && clean.includes('i*120');
      const e = explain.toLowerCase().replace(/\s+/g, '');
      const explainOk = e.includes('i++') && (e.includes('i<5') || e.includes('i=0'));
      return { promptOk, codeOk, explainOk };
    },
    hint: {
      prompt: "Mention 'for loop', 'i * 120', and '5'.",
      code: "Needs for(...i<5...i++) with markerY = i * 120.",
      explain: "Name all 3 parts: start (i=0), test (i<5), update (i++)."
    }
  },
  {
    num: 2,
    title: "Exercise 7.2: A Second Spec — 8 Distance Markers, 90px Apart",
    problem: "Highway distance markers work the same way as the lane dashes in 7.1, but this set needs a different count and spacing: 8 markers, 90px apart instead of 5 markers, 120px apart. The loop header — how many times it runs, and what changes on each pass — is what makes that possible without writing 8 separate lines by hand.",
    instruction: "Goal: build a second, independent for loop for a different marker count and spacing. 1) Plan: in your own words, how many times should this loop run, and what's the step between markers this time? 2) Prompt: ask the AI for a for loop that runs 8 times, computing markerY as i * 90 on each pass — paste its real code into Output Code and run it. 3) Explain: name the loop header's three parts (start, test, update), and explain what would happen to the browser if the update part were ever left out.",
    planPlaceholder: "How many times should this loop run, and what's the step between markers this time? (hint: 8 markers, 90 apart)",
    promptPlaceholder: "Write the prompt asking for a for loop running 8 times, computing markerY = i * 90 each pass.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    validate: ({ prompt, outputCode, explain }) => {
      const p = prompt.toLowerCase().replace(/\s+/g, '');
      const promptOk = p.includes('forloop') && p.includes('i*90') && p.includes('8');
      const clean = outputCode.replace(/\s+/g, '');
      const codeOk = clean.includes('for(') && clean.includes('i<8') && clean.includes('i++') && clean.includes('i*90');
      const e = explain.toLowerCase().replace(/\s+/g, '');
      const explainOk = e.includes('i++') && (e.includes('i<8') || e.includes('i=0')) && (e.includes('forever') || e.includes('never') || e.includes('freeze') || e.includes('infinite') || e.includes('hang'));
      return { promptOk, codeOk, explainOk };
    },
    hint: {
      prompt: "Mention 'for loop', 'i * 90', and '8'.",
      code: "Needs for(...i<8...i++) with markerY = i * 90.",
      explain: "Name all 3 parts (start i=0, test i<8, update i++), AND say what happens without the update part (the browser never stops / freezes)."
    }
  },
  {
    num: 3,
    title: "Exercise 7.3: Logging Each Marker",
    problem: "Logging inside the loop prints one line per pass — the fastest way to confirm the loop really runs 5 times and computes 0, 120, 240, 360, 480 as expected.",
    instruction: `1) Plan: plan what to log for each pass. 2) Prompt: ask the AI to add a console.log inside the loop printing "Highway Marker position: " plus markerY — paste its real code into Output Code and run it. 3) Explain: predict the 5 values that should print.`,
    planPlaceholder: "What should get logged on each pass of the loop?",
    promptPlaceholder: 'Write the prompt asking for a console.log inside the loop: "Highway Marker position: " + markerY.',
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    validate: ({ prompt, outputCode, explain }) => {
      const p = prompt.toLowerCase();
      const promptOk = p.includes('console.log') && p.includes('markery');
      const clean = outputCode.toLowerCase().replace(/\s+/g, '');
      const codeOk = clean.includes('console.log') && clean.includes('markery');
      const e = explain.replace(/[^0-9,\s]/g, '');
      const explainOk = ['0', '120', '240', '360', '480'].every(n => e.includes(n));
      return { promptOk, codeOk, explainOk };
    },
    hint: {
      prompt: "Mention 'console.log' and 'markerY'.",
      code: "Needs a console.log of markerY inside the loop body.",
      explain: "Predict all 5 values: 0, 120, 240, 360, 480."
    }
  },
  {
    num: 4,
    title: "Exercise 7.4: Rendering the Markers",
    problem: "Computing markerY is only half the job — each pass must also create a real div, place it at that Y, and attach it to the track so it actually appears on screen.",
    instruction: "1) Plan: plan how each computed position becomes a visible element (a box, given a class, placed at a position). 2) Prompt: ask the AI to create a div with class 'marker-dash', set its top style to markerY, and append it to '#game-track' inside the loop — paste its real code into Output Code and run it. 3) Explain: why is appendChild needed even after createElement already built the div?",
    planPlaceholder: "Plan: for each marker, what element gets created, what class does it get, and where is it placed?",
    promptPlaceholder: "Write the prompt asking to create a 'marker-dash' div, set its top to markerY, and appendChild it to #game-track.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    validate: ({ prompt, outputCode, explain }) => {
      const p = prompt.toLowerCase().replace(/\s+/g, '');
      const promptOk = p.includes('marker-dash') && p.includes('appendchild') && p.includes('game-track');
      const clean = outputCode.toLowerCase().replace(/\s+/g, '');
      const codeOk = clean.includes('marker-dash') && clean.includes('appendchild') && clean.includes('game-track');
      const e = explain.toLowerCase();
      const explainOk = e.includes('append') || e.includes('attach') || e.includes('show') || e.includes('visible') || e.includes('display');
      return { promptOk, codeOk, explainOk };
    },
    hint: {
      prompt: "Mention 'marker-dash', 'appendChild', and '#game-track'.",
      code: "Needs a marker-dash div appended to #game-track inside the loop.",
      explain: "Say createElement only builds it in memory — appendChild is what makes it show up."
    }
  },
  {
    num: 5,
    title: "Exercise 7.5: The Complete Marker System",
    problem: "Time to put every piece from this session together into one finished system: a loop that computes each marker's position, builds a real element for it, and places it on the track — all 5 markers, in one prompt.",
    instruction: "Goal: build the COMPLETE marker system in a single prompt. 1) Plan: list, in order, everything this loop needs to do on each pass. 2) Prompt: ask the AI for the complete loop — 5 iterations, markerY = i * 120, a 'marker-dash' div created and appended to #game-track each pass — paste its real code into Output Code and run it. 3) Explain: confirm the 5 final Y values your loop produces.",
    planPlaceholder: "List, in order, everything this loop needs to do on each pass: compute the position, create the element, place it, attach it.",
    promptPlaceholder: "Write the prompt asking for the COMPLETE loop: 5 passes, markerY = i * 120, marker-dash div appended to #game-track each time.",
    outputCodePlaceholder: "Paste the AI's complete loop code here.",
    runnable: true,
    validate: ({ prompt, outputCode, explain }) => {
      const p = prompt.toLowerCase().replace(/\s+/g, '');
      const promptOk = p.includes('i*120') && p.includes('marker-dash');
      const clean = outputCode.replace(/\s+/g, '').toLowerCase();
      const codeOk = clean.includes('for(') && clean.includes('i<5') && clean.includes('i++') && clean.includes('i*120') && clean.includes('marker-dash') && clean.includes('appendchild');
      const e = explain.replace(/[^0-9,\s]/g, '');
      const explainOk = ['0', '120', '240', '360', '480'].every(n => e.includes(n));
      return { promptOk, codeOk, explainOk };
    },
    hint: {
      prompt: "Mention 'i * 120' (not 'i * 12') and 'marker-dash'.",
      code: "Needs the full loop: for(...i<5...i++), markerY = i * 120, marker-dash div, appendChild.",
      explain: "State the correct final values: 0, 120, 240, 360, 480."
    }
  }
];

const S8_EXERCISES = [
  {
    num: 1,
    title: "Exercise 8.1: Decomposing & Requesting the Render Function",
    problem: "One giant block that does everything is hard to fix; splitting it into named functions — one to render, one to move left, one to move right — gives each piece a single, testable job. This sandbox is DOM-based, not canvas-based — there's no canvas element here. Since this Output Code box runs standalone, also have the AI call the new function once right after defining it, so you can confirm it actually moves the car in the Preview.",
    instruction: "Goal: split out a single-purpose render function. 1) Plan: name the single-purpose pieces to split the steering script into. 2) Prompt: ask the AI for a function named updatePlayerPosition() that sets '#player-car' style.left to carX + 'px' — paste its real code into Output Code. 3) Explain: how many parameters does updatePlayerPosition() take, and why does it need none?",
    planPlaceholder: "Name the pieces to split into: one to update position, one to move left, one to move right.",
    promptPlaceholder: "Write your own prompt for the goal above — describe what you want in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "updatePlayerPosition() should be a function taking 0 parameters, since it just reads the already-shared carX variable and writes it to #player-car's style.left. The explanation should correctly say it needs 0 parameters because carX is accessible without being passed in. Don't require the literal function name or exact code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 2,
    title: "Exercise 8.2: The Scope Access Violation Bug",
    problem: `Bug: carX was accidentally declared inside moveLeft(), so updatePlayerPosition() can no longer read it and logs 'undefined'. A variable declared inside a function is local — for two functions to share carX, it must be declared once outside both.`,
    instruction: "Goal: fix the scope bug so both functions can read carX. 1) Plan: explain why declaring carX inside moveLeft() breaks updatePlayerPosition()'s access to it. 2) Prompt: ask the AI to move the carX declaration outside both functions so they can share it — paste the fixed code into Output Code. 3) Explain: what's the difference between a local variable and a shared/outer-scope variable?",
    planPlaceholder: "Why can't updatePlayerPosition() read a carX that was declared inside moveLeft()?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed code here.",
    runnable: true,
    expectedConcepts: "carX must be declared once, outside both moveLeft() and updatePlayerPosition(), so both functions read/write the same shared variable — a variable declared inside one function is local to that function only. The explanation should correctly contrast local scope (visible only inside its own function) with shared/outer scope. Don't require the literal 'let carX = 165;' or exact code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 3,
    title: "Exercise 8.3: Wiring moveLeft() to the Handler",
    problem: "Once moveLeft() owns the boundary-check logic, the handler just calls it by name — same behavior, but the logic lives in one place instead of being copied into the listener. Since this Output Code box is tested on its own (not chained to Exercise 8.2's code), ask for the COMPLETE keydown listener — not just the ArrowLeft line — plus a working moveLeft() definition, so the snippet runs standalone without errors.",
    instruction: "Goal: wire the ArrowLeft branch to call moveLeft() instead of repeating its logic. 1) Plan: plan replacing the inline ArrowLeft logic with a function call. 2) Prompt: ask the AI to rewrite the ArrowLeft branch of the keydown handler so it simply calls moveLeft() — paste its real code into Output Code. 3) Explain: what's the benefit of calling a named function here instead of repeating the logic inline?",
    planPlaceholder: "Plan: instead of repeating the boundary-check logic inline, what should the ArrowLeft branch do?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "The ArrowLeft branch of the keydown handler should call moveLeft() by name instead of repeating the boundary-check logic inline — same behavior, but the logic now lives in one reusable place. The explanation should identify that a future fix only needs to happen once, not everywhere the logic was duplicated. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 4,
    title: "Exercise 8.4: Requesting moveLeft() and moveRight()",
    problem: "Each function clamps carX to its own boundary, then calls updatePlayerPosition() — reusing the shared renderer instead of each writing its own style.left line. Since updatePlayerPosition() isn't defined in this standalone snippet, also include a working definition of it (matching Exercise 8.1: it sets #player-car style.left to carX + 'px'), and call moveLeft() once so you can see the effect in the Preview.",
    instruction: "Goal: build the moveRight() mirror function alongside moveLeft(). 1) Plan: plan the moveRight() mirror function for the right lane. 2) Prompt: ask the AI for both moveLeft() and moveRight(), each clamping carX and calling updatePlayerPosition() — paste its real code into Output Code and run it. 3) Explain: if a bug is found in the boundary-clamp logic, how many function bodies need fixing if both call a shared clamp helper?",
    planPlaceholder: "Plan moveRight(): which boundary (295), and what does it call afterward (updatePlayerPosition)?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "moveLeft() and moveRight() should mirror each other structurally — each clamping carX to its own boundary (35 left / 295 right), then calling the shared updatePlayerPosition() renderer instead of writing its own style.left line. The explanation should correctly say only 1 function body needs fixing if both share a clamp helper. Don't require the literal numbers or exact code in the plan/prompt prose — judge the reasoning."
  }
  // Note (2026-08-05): a 5th "combine everything into the final controller" capstone
  // exercise used to live here, but it duplicated this session's Project Task (Lab 8),
  // which already asks for more than the exercises (grouping the three functions under
  // one namespaced Controller object) — see PROJECT_TASKS['l1-s8'] in projectTasksData.js.
];

const S9_EXERCISES = [
  {
    num: 1,
    title: "Exercise 9.1: The Game Loop Lifecycle & Recursive Loop",
    problem: "A game is an animation: each frame updates the state, redraws, then schedules the next frame — a loop that calls itself ~60 times a second via requestAnimationFrame. obstacleY isn't a pre-existing global in this sandbox — have the AI declare and initialize it too (starting at -100, matching the #obstacle element's own default position), and call gameLoop() once at the end so you can watch it animate in the Preview.",
    instruction: "Goal: understand and build the repeating frame cycle. 1) Plan: describe the repeating frame cycle in plain language. 2) Prompt: ask the AI for a function gameLoop() that moves the obstacle, then calls requestAnimationFrame(gameLoop) to schedule the next frame — paste its real code into Output Code and run it. 3) Explain: what does calling requestAnimationFrame(gameLoop) at the end actually do?",
    planPlaceholder: "Describe the frame cycle: each frame, update the state, redraw, then...?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "gameLoop() should move the obstacle (updating its own obstacleY and the #obstacle element's position), then call requestAnimationFrame(gameLoop) to schedule itself again next frame. Explanation should correctly say requestAnimationFrame schedules gameLoop to run again on the next frame, creating the animation loop. Don't require literal code or the exact variable name in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 2,
    title: "Exercise 9.2: The Unstoppable Speed Bug",
    problem: "Bug: the tutor removed the gameActive check, so gameLoop() keeps recursing forever even after the game ends. Without a guard that returns early when gameActive is false, Game Over becomes impossible. Since this Output Code box is tested on its own, ask for the complete gameLoop() function — not just the guard line — plus a gameActive variable and obstacleY (there's a single #obstacle element, not an array), and a call to start the loop, so the snippet runs standalone.",
    instruction: "Goal: add the missing gameActive guard. 1) Plan: explain why a missing gameActive check makes the loop unstoppable. 2) Prompt: ask the AI to add a guard at the top of gameLoop() that returns immediately if gameActive is false, plus a console.log(\"Loop halted\") right before the return — paste its real code into Output Code and run it. 3) Explain: confirm what happens to the loop once gameActive becomes false.",
    planPlaceholder: "Why does gameLoop() never stop without a gameActive check?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed code here.",
    runnable: true,
    expectedConcepts: "gameLoop() needs a guard at its top — if gameActive is false, log something like 'Loop halted' and return immediately, before doing anything else or scheduling the next frame. Explanation should correctly say the loop exits/halts and requestAnimationFrame never gets called again once gameActive is false. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 3,
    title: "Exercise 9.3: Obstacle Movement & Reset",
    problem: "Each frame adds speed to obstacleY to scroll it down; once it passes the bottom (500), it wraps back to the top (-100) and the score goes up — the illusion of endless oncoming traffic. obstacleY and score aren't pre-existing globals in this sandbox — have the AI declare and initialize both in this same snippet, and log obstacleY after calling moveObstacles() once so you can confirm it changed.",
    instruction: "Goal: build the scroll-and-wrap behavior. 1) Plan: plan the scroll-and-wrap behavior (down, wrap at 500 to -100, score += 10). 2) Prompt: ask the AI for a function moveObstacles() implementing this — paste its real code into Output Code and run it. 3) Explain: if obstacleY is 490 and speed is 5, what is obstacleY right after this line runs (before any reset check)?",
    planPlaceholder: "Plan: obstacleY += speed each frame; what happens once it passes 500?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "moveObstacles() should add speed to obstacleY each call, and once obstacleY passes 500, reset it to -100 and add 10 to score. Explanation should correctly compute 490 + 5 = 495 for the given scenario. Don't require the literal numbers or exact code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 4,
    title: "Exercise 9.4: The Frozen Scoreboard Bug",
    problem: `Bug: the reset check was written as if (obstacleY > 500) { obstacleY = -100; } — the score never increments, so the scoreboard stays frozen. The score bump must live inside the same reset block. Since this Output Code box is tested on its own, ask for the complete moveObstacles() function (with the reset block AND the fix) — not just the missing line — plus obstacleY/score declared and initialized, so the snippet runs standalone and you can watch score actually increment.`,
    instruction: "Goal: fix the missing score increment. 1) Plan: explain why resetting obstacleY alone doesn't increase the score. 2) Prompt: ask the AI to add the missing score increment inside the reset block — paste its real code into Output Code and run it. 3) Explain: confirm both obstacleY and score are handled together now.",
    planPlaceholder: "Why doesn't resetting obstacleY alone make the score go up?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed code here.",
    runnable: true,
    expectedConcepts: "The score increment must live inside the same reset block as the obstacleY > 500 check — both the position reset AND the score bump happen together, not one without the other. Explanation should correctly confirm both are now handled in the same block. Don't require the literal numbers or exact code in the plan/prompt prose — judge the reasoning."
  }
  // Note (2026-08-05): a 5th "combine everything into the complete animation engine"
  // capstone exercise used to live here, but it duplicated this session's Project Task
  // (Lab 9), which already asks for more than the exercises (animating the student's own
  // real #obstacle element from Session 2-3, using their own track height instead of a
  // fixed 500) — see PROJECT_TASKS['l1-s9'] in projectTasksData.js.
];

const S10_EXERCISES = [
  {
    num: 1,
    title: "Exercise 10.1: The Overlap Condition & Requesting checkCollision()",
    problem: "Two rectangles overlap only when they overlap on BOTH axes at once — so the check is four comparisons joined by AND: right/left on the X axis, top/bottom on the Y axis. Call the function once with two example rectangles and log the result, so you can confirm it works in the Preview.",
    instruction: "Goal: build the AABB overlap check. 1) Plan: describe when two boxes overlap (both axes at once). 2) Prompt: ask the AI for a function checkCollision(rect1, rect2) that returns true if the x/y/width/height bounds overlap — paste its real code into Output Code and run it. 3) Explain: why does the check need width/height, not just x/y center coordinates?",
    planPlaceholder: "Describe when two boxes overlap: right vs left AND top vs bottom.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "checkCollision(rect1, rect2) should return true only when both the X-axis and Y-axis ranges overlap, using each rect's width/height (not just x/y center points) — four comparisons joined by AND. Explanation should correctly say exact-x-equality almost never happens, so comparing box edges (accounting for size) is what catches real overlaps. Don't require literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 2,
    title: "Exercise 10.2: The Ghost Car Bug",
    problem: `Bug: the tutor flipped one comparison operator, so the obstacle drives right through the player car with no crash registered. Flip even one of the 4 AABB comparisons and the combined AND can never be true.`,
    instruction: "Goal: fix the flipped comparison. 1) Plan: explain why a single flipped comparison makes collisions never fire. 2) Prompt: ask the AI to fix the flipped comparison in checkCollision() so it correctly checks rect1.x + rect1.width > rect2.x — paste the fixed code into Output Code. 3) Explain: confirm which direction that comparison should point and why.",
    planPlaceholder: "Why does flipping one of the four AABB comparisons make the AND condition never true?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed checkCollision() code here.",
    runnable: true,
    expectedConcepts: "The comparison rect1.x + rect1.width > rect2.x must use '>' (greater than), not the flipped '<' — a flipped comparison makes the combined AND condition never true, so collisions never register. Explanation should correctly confirm the comparison needs to point toward '>' and why. Don't require the exact code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 3,
    title: "Exercise 10.3: The Axis Swap Bug",
    problem: `Bug: the first condition accidentally compares rect1.y (not rect1.x) against rect2's horizontal bound, swapping the X and Y axes — nonsense geometry that makes crashes register in the wrong place or not at all.`,
    instruction: "Goal: fix the axis-swap bug. 1) Plan: explain why comparing an x value against a y bound is nonsense geometry. 2) Prompt: ask the AI to fix the axis-swap bug so the first condition correctly compares rect1.x — paste the fixed code into Output Code. 3) Explain: confirm x is compared with x, and y with y throughout the function.",
    planPlaceholder: "Why does comparing rect1.y against a horizontal (x) bound break the collision check?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed checkCollision() code here.",
    runnable: true,
    expectedConcepts: "The first condition must compare rect1.x (not rect1.y) against rect2's horizontal bound — mixing an x value into a y comparison is nonsense geometry that breaks detection. Explanation should correctly confirm every x-comparison uses x values and every y-comparison uses y values throughout the function. Don't require the exact code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 4,
    title: "Exercise 10.4: Wiring Collision into the Loop",
    problem: "Detecting a crash is useless unless something happens: calling checkCollision() inside the loop and setting gameActive = false on a hit is what turns 'they touched' into 'game over'. Since this Output Code box is tested on its own, ask for a working checkCollision() definition, example player/obstacle rect objects that actually overlap, a gameActive variable, and a call to gameLoop() once, so you can see it detect the collision in the Preview.",
    instruction: "Goal: wire collision detection into the game loop. 1) Plan: plan what should happen when a collision is detected. 2) Prompt: ask the AI to add a call to checkCollision(player, obstacle) inside gameLoop() that sets gameActive to false and logs 'Collision detected!' — paste its real code into Output Code and run it. 3) Explain: if two box edges touch exactly (no real overlap), does a strict '>' comparison register a hit?",
    planPlaceholder: "What should happen when checkCollision() returns true? (hint: stop the game, log it)",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "gameLoop() should call checkCollision(player, obstacle), and on a hit set gameActive to false and log something like 'Collision detected!'. Explanation should correctly answer NO — touching exactly isn't 'greater than', so a strict '>' comparison does not register a hit at the exact boundary. Don't require the exact code in the plan/prompt prose — judge the reasoning."
  }
  // Note (2026-08-05): a 5th "combine everything into the complete collision system"
  // capstone exercise used to live here, but it duplicated this session's Project Task
  // (Lab 10), which already asks for more than the exercises (spending a life per
  // collision instead of ending the game immediately) — see PROJECT_TASKS['l1-s10'] in
  // projectTasksData.js.
];

const S11_EXERCISES = [
  {
    num: 1,
    title: "Exercise 11.1: The DOM Update Pipeline & Scoreboard Updater",
    problem: "A variable changing in memory is invisible until you push it into the page: score changes should show on the scoreboard, and a crash should reveal the restart panel. score isn't a pre-existing global in this sandbox — have the AI declare it too (e.g. starting at 0), and call updateScoreboard() once so you can see #score-val actually update in the Preview.",
    instruction: "Goal: push score changes onto the visible scoreboard. 1) Plan: map each state change to what appears on screen. 2) Prompt: ask the AI for a function updateScoreboard() that sets '#score-val' textContent to match the score variable — paste its real code into Output Code and run it. 3) Explain: why is textContent safer than innerHTML for this?",
    planPlaceholder: "Map state changes to screen updates: score changes -> ?; a crash -> ?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "updateScoreboard() should set #score-val's textContent to the score variable. Explanation should correctly say innerHTML could run injected HTML/scripts, while textContent treats the value as plain text, which is safer here. Don't require literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 2,
    title: "Exercise 11.2: The Negative Score Leak",
    problem: `Bug: a scoring penalty can push score below zero, and the scoreboard shows "score: -5". A defensive clamp — if score < 0, snap it to 0 — keeps the display sensible no matter what the math does. Since this Output Code box is tested on its own, ask for score declared (starting negative, e.g. -5, to prove the clamp works) and the clamped result written to #score-val, so the snippet runs standalone and you can see the fix work.`,
    instruction: "Goal: clamp score so it never displays negative. 1) Plan: explain why a negative score looks broken to players. 2) Prompt: ask the AI to add a clamp so score never goes below 0 before it's written to the DOM — paste its real code into Output Code and run it. 3) Explain: confirm the clamp runs BEFORE the textContent write, not after.",
    planPlaceholder: "Why does showing 'score: -5' look broken, even if the math technically produced it?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed code here.",
    runnable: true,
    expectedConcepts: "If score < 0, it should be reset to 0 BEFORE that value is written to the DOM — a defensive clamp that keeps the display sensible no matter what the math produced. Explanation should correctly confirm the clamp happens before the DOM write, not after. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 3,
    title: "Exercise 11.3: Revealing the Restart Panel",
    problem: "The restart panel already exists in the HTML but is hidden by a 'hidden' class; removing that class with classList.remove is what makes it appear.",
    instruction: "Goal: reveal the restart panel correctly. 1) Plan: plan the full restart sequence (Space -> reset score, reset car, hide panel, gameActive = true). 2) Prompt: ask the AI for a function triggerGameOverScreen() that removes the 'hidden' class from '#restart-panel' — paste its real code into Output Code and run it. 3) Explain: what happens if you forget to remove that class after a restart?",
    planPlaceholder: "Plan the restart sequence: press Space -> reset score -> reset car -> hide panel -> gameActive = true.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "triggerGameOverScreen() should remove the 'hidden' class from #restart-panel (classList.remove), not just set an inline style — the panel is hidden via that CSS class, so the class itself has to be defeated. Explanation should correctly say the panel stays hidden (display: none keeps applying) if the class isn't removed. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 4,
    title: "Exercise 11.4: The Frozen Restart Bug",
    problem: `Bug: the restart handler resets score and hides the panel, but never sets gameActive back to true — the game stays frozen. Without gameActive = true, requestAnimationFrame is never re-armed. Since this Output Code box is tested on its own, ask for the complete Space-key restart handler — not just the missing line — including gameActive and score declared, and using classList on the real #restart-panel element (there is no separate 'game-over-panel' element — it's called restart-panel), so the snippet runs standalone without errors.`,
    instruction: "Goal: fix the frozen restart. 1) Plan: explain why the screen can look reset while the game loop stays frozen. 2) Prompt: ask the AI to add the missing gameActive = true inside the restart handler — paste the fixed code into Output Code and run it. 3) Explain: why must gameActive specifically be set back to true for the game to actually resume?",
    planPlaceholder: "Why can the screen LOOK reset (score=0, panel hidden) while the game is still frozen?",
    promptPlaceholder: "Describe the bug and what you want fixed, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed code here.",
    runnable: true,
    expectedConcepts: "The Space-key restart handler must set gameActive = true after resetting score and re-hiding #restart-panel — without it, gameLoop()'s gate never re-arms requestAnimationFrame. Explanation should correctly say gameActive specifically gates whether the loop keeps scheduling itself. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  }
  // Note (2026-08-05): a 5th "combine everything into the complete HUD & restart system"
  // capstone exercise used to live here, but it duplicated this session's Project Task
  // (Lab 11), which already asks for more than the exercises (a lives readout alongside
  // score, not score alone) — see PROJECT_TASKS['l1-s11'] in projectTasksData.js.
];

// Note (2026-08-05): unlike S6-S11's dropped 5th "combine everything" capstone
// (superseded by that session's Project Task), S12 keeps all 5 exercises — 12.5 is a
// personal reflection + self-diagnostic across the WHOLE level, not a duplicate of
// Project Task Lab 12's CONFIG-refactor + Complete Game assembly.
const S12_EXERCISES = [
  {
    num: 1,
    title: "Exercise 12.1: The Configuration Object & Difficulty Scaling",
    problem: "Scattering magic numbers across the code makes them hard to find and change. A CONFIG object gathers every tunable value — starting speed, difficulty ramp, top speed — in one place.",
    instruction: "Goal: gather tunable values into a CONFIG object. 1) Plan: plan the CONFIG object's fields. 2) Prompt: ask the AI for a difficulty-scaling function using CONFIG.difficultyMultiplier, clamped to CONFIG.maxSpeed — paste its real code into Output Code. 3) Explain: given CONFIG = { startSpeed: 5, difficultyMultiplier: 0.1, maxSpeed: 15 } and score = 50, what does startSpeed + score * difficultyMultiplier equal?",
    planPlaceholder: "Plan CONFIG's fields: startSpeed, difficultyMultiplier, maxSpeed (and anything else tunable).",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "A difficulty-scaling function should read from a CONFIG object (e.g. CONFIG.difficultyMultiplier, CONFIG.maxSpeed) rather than hardcoded numbers, clamping its result to CONFIG.maxSpeed. Explanation should correctly compute 5 + (50 * 0.1) = 10 for the given scenario. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 2,
    title: "Exercise 12.2: The Unbounded Speed Bug",
    problem: "Bug: at very high scores, the computed speed exceeds CONFIG.maxSpeed, making the game unplayably fast. A ramp with no ceiling eventually breaks the game. Since this Output Code box is tested on its own, ask for CONFIG (with a maxSpeed field) and speed declared and initialized in this same snippet (starting above maxSpeed, to prove the clamp works), plus a log of the clamped result.",
    instruction: "Goal: cap speed at CONFIG.maxSpeed. 1) Plan: explain why the difficulty ramp needs a ceiling. 2) Prompt: ask the AI to add a Math.min clamp so speed never exceeds CONFIG.maxSpeed — paste its real code into Output Code and run it. 3) Explain: confirm what value speed becomes once the raw formula exceeds CONFIG.maxSpeed.",
    planPlaceholder: "Why does an unlimited difficulty ramp eventually make the game unplayable?",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed code here.",
    runnable: true,
    expectedConcepts: "speed should be clamped with Math.min(speed, CONFIG.maxSpeed) so it never exceeds the configured ceiling. Explanation should correctly say speed gets capped at CONFIG.maxSpeed, never higher, once the raw formula exceeds it. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 3,
    title: "Exercise 12.3: Refactoring Magic Numbers",
    problem: "The literal 35 and 295 boundary values from Session 6 become CONFIG.leftBound and CONFIG.rightBound — same behavior, but now every tunable number lives in one central object. Since this Output Code box is tested on its own, ask for CONFIG (with leftBound/rightBound fields) declared in this same snippet, carX set outside a boundary to prove the clamp works, and a log of the result.",
    instruction: "Goal: replace hardcoded boundary numbers with CONFIG fields. 1) Plan: plan replacing the hardcoded 35/295 boundary numbers with CONFIG fields. 2) Prompt: ask the AI to rewrite the boundary guards using CONFIG.leftBound/CONFIG.rightBound instead of hardcoded numbers — paste its real code into Output Code and run it. 3) Explain: why does pulling these into CONFIG make the game easier to maintain?",
    planPlaceholder: "Plan: what should '35' and '295' become? (CONFIG.leftBound, CONFIG.rightBound)",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the actual code the AI generated from your prompt here.",
    runnable: true,
    expectedConcepts: "The boundary guards should read from CONFIG.leftBound and CONFIG.rightBound instead of the hardcoded 35/295. Explanation should correctly say every tunable number now lives in one place, easy to find and change. Don't require the literal numbers or exact code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 4,
    title: "Exercise 12.4: The Final Diagnostic",
    problem: "One last collision logic error is seeded into this assessment lab: a single flipped operator in the AABB check — the same class of bug from Session 10, now to be caught fast under exam conditions.",
    instruction: "Goal: catch and fix the seeded flipped comparison. 1) Plan: explain the malicious-QA-officer scenario — if a boundary guard used '> 35' in one place but '>= 35' in another, could that inconsistency let the car overlap the edge? 2) Prompt: ask the AI to diagnose and fix the seeded flipped comparison in checkCollision() — paste the fixed code into Output Code. 3) Explain: which comparison was flipped, and what's the corrected version?",
    planPlaceholder: "Could inconsistent boundary operators (> vs >=) create a rare edge-case gap? Explain why.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the AI's fixed checkCollision() code here.",
    runnable: true,
    expectedConcepts: "The first AABB comparison must use rect1.x < rect2.x + rect2.width (correct direction), not a flipped operator. Explanation should correctly identify which comparison was flipped and confirm the corrected version. Don't require the literal code in the plan/prompt prose — judge the reasoning."
  },
  {
    num: 5,
    title: "Exercise 12.5: Capstone Reflection & the Final QA Sweep",
    problem: "Reflect across every Racing Car Game lab you've built this level — variables, boundaries, collision, restart — and confirm the whole game still works together, not just the last thing you touched.",
    instruction: "Goal: write a self-diagnostic and reflect on the level. 1) Plan: list the 4 core systems this final QA sweep must verify. 2) Prompt: ask the AI for a diagnostic script that logs PASS or FAIL for each core system — paste its real code into Output Code and run it. 3) Explain: write a one-sentence reflection on the trickiest bug you fixed across this level's labs, and how tracing variable values helped you find it.",
    planPlaceholder: "List the 4 core systems to verify: variables, boundaries, collision, restart.",
    promptPlaceholder: "Describe the goal to the AI, in your own words.",
    outputCodePlaceholder: "Paste the AI's diagnostic script here.",
    runnable: true,
    expectedConcepts: "The diagnostic script should check the 4 core systems (variables, boundaries, collision, restart) and log a PASS or FAIL for each via console.log. The explanation is a personal reflection with no single correct answer — judge only whether it's a genuine, specific reflection naming an actual bug and how tracing values helped find it, not a placeholder answer. Don't require literal code in the plan/prompt prose."
  }
];

// How many sandbox exercises each Level 1 session has. A session's XP is only
// claimable once every one of its exercises has been passed (no jumping straight
// to the final exercise), preserving the curriculum's "cognitive resistance" design.
const EXERCISE_COUNTS = {
  // l1-s2 through l1-s6 dropped to 4: their old 5th "combine everything" capstone
  // exercise was a duplicate of the session's Project Task, which now owns that final
  // integration step (see improve_concept.md Part II). l1-s1 stays 5 — its exercises were
  // never a capstone-duplication pattern, just independent concept checks. l1-s7-s12
  // unchanged pending the same review.
  'l1-s1': 5, 'l1-s2': 4, 'l1-s3': 4, 'l1-s4': 4, 'l1-s5': 4, 'l1-s6': 4,
  'l1-s7': 5, 'l1-s8': 5, 'l1-s9': 5, 'l1-s10': 5, 'l1-s11': 5, 'l1-s12': 5,
  'l2-s1': 10, 'l2-s2': 10, 'l2-s3': 10, 'l2-s4': 10, 'l2-s5': 10, 'l2-s6': 10, 'l2-s7': 10, 'l2-s8': 10,
  'l2-s9': 10, 'l2-s10': 10, 'l2-s11': 10, 'l2-s12': 10, 'l2-s13': 10
};

// Full ordered Level 1 session sequence for quest gating. Level 1 is the only level
// where every session has an in-app claimable sandbox, so it gates against the full
// curriculum order; L2-L4 sessions are only claimable from the Quest Board's campaign
// list, so their gating stays within that list (gating them against the full list
// would demand sessions that have no in-app completion path).
const L1_SESSION_SEQUENCE = CURRICULUM_DATA.filter(s => s.level === 1);

// Level 1 Quest Board cards are derived from the canonical CURRICULUM_DATA (all 12
// sessions, one fixed racing-car theme) rather than the per-campaign CAMPAIGN_THEMES
// copies. Every L1 session now has a claimable sandbox lab, so all 12 appear as quests
// with consistent racing-car content and a flat 100 XP each (matching the auto-claim
// award). L2-L4 still use each campaign's curated session list.
const L1_QUEST_SESSIONS = L1_SESSION_SEQUENCE.map(s => ({
  id: s.id,
  title: s.title,
  objective: s.objectives[0],
  activity: s.coreActivity,
  homework: s.homework,
  xp: 100
}));

// Level 2 Quest Board cards are likewise derived from the canonical CURRICULUM_DATA
// (all 13 sessions, one fixed Mars Colony Defense theme) rather than a per-campaign
// CAMPAIGN_THEMES copy. Every L2 session has a claimable generic AI Prompt Sandbox
// (loadTemplate) plus a Project Journal milestone, so all 13 appear as quests with a
// flat 100 XP each, manually claimed via the "Deliver Quest Evidence" button (L2 has
// no per-exercise EXERCISE_COUNTS gate — the manual claim is the deliberate friction).
const L2_SESSION_SEQUENCE = CURRICULUM_DATA.filter(s => s.level === 2);
const L2_QUEST_SESSIONS = L2_SESSION_SEQUENCE.map(s => ({
  id: s.id,
  title: s.title,
  objective: s.objectives[0],
  activity: s.coreActivity,
  homework: s.homework,
  xp: 100
}));

// Bangkok (UTC+7, no DST) wall-clock timestamp as "YYYY-MM-DD HH:MM", used instead of
// toISOString() so journal entries show the time the student actually experienced it.
function formatBangkokTimestamp(date = new Date()) {
  const bangkokMs = date.getTime() + 7 * 60 * 60 * 1000;
  return new Date(bangkokMs).toISOString().replace('T', ' ').substring(0, 16);
}

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('detective_token') || null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Admin student states
  const [students, setStudents] = useState([]);
  const [parents, setParents] = useState([]);
  const [newStudentUsername, setNewStudentUsername] = useState('');
  const [newStudentPassword, setNewStudentPassword] = useState('');
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentLevel, setNewStudentLevel] = useState('L1');
  const [adminStatusMsg, setAdminStatusMsg] = useState('');

  // Admin: read-only student journal viewer
  const [viewingStudent, setViewingStudent] = useState(null);
  const [viewingJournalData, setViewingJournalData] = useState([]);
  const [viewingJournalLoading, setViewingJournalLoading] = useState(false);
  const [viewingJournalEntryId, setViewingJournalEntryId] = useState(null);
  const [viewingJournalVersion, setViewingJournalVersion] = useState(null);
  const [journalSessionPickerOpen, setJournalSessionPickerOpen] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Student Report states (Attendance + Feedback, for teacher and parent roles)
  const [reportStudent, setReportStudent] = useState(null);
  const [reportLinkedStudents, setReportLinkedStudents] = useState([]);
  const [reportSubTab, setReportSubTab] = useState('attendance');
  const [reportSessionFocus, setReportSessionFocus] = useState(null);
  const [reportCameFromAdmin, setReportCameFromAdmin] = useState(false);
  const [reportData, setReportData] = useState({});
  const [reportLoading, setReportLoading] = useState(false);
  const [reportStatusMsg, setReportStatusMsg] = useState('');

  // Unified create-person form: optional link to existing student(s) makes the new account a Parent
  const [newPersonLinkedStudentIds, setNewPersonLinkedStudentIds] = useState([]);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [points, setPoints] = useState(0);
  const [solvedCases, setSolvedCases] = useState({});
  const [journalEntries, setJournalEntries] = useState([]);
  
  // Dynamic Campaign Selection (Admin-Configurable)
  const [campaignId, setCampaignId] = useState('cyberpunk');
  
  // Case Explorer states
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedSessionId, setSelectedSessionId] = useState('l1-s1');
  
  // Curriculum Guide states
  const [curriculumLevel, setCurriculumLevel] = useState(1);
  const [curriculumSessionId, setCurriculumSessionId] = useState('l1-s1');
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [curriculumSearchQuery, setCurriculumSearchQuery] = useState('');

  // Student auto-routing to active level
  useEffect(() => {
    if (currentUser && currentUser.role === 'student' && currentUser.student_level) {
      const levelNum = parseInt(currentUser.student_level.replace('L', '')) || 1;
      setSelectedLevel(levelNum);
      setCurriculumLevel(levelNum);
      
      const defaultSessionMap = {
        1: 'l1-s1',
        2: 'l2-s5',
        3: 'l3-s1',
        4: 'l4-s1'
      };
      const defaultCurriculumMap = {
        1: 'l1-s1',
        2: 'l2-s1',
        3: 'l3-s1',
        4: 'l4-s1'
      };
      
      setSelectedSessionId(defaultSessionMap[levelNum] || 'l1-s1');
      setCurriculumSessionId(defaultCurriculumMap[levelNum] || 'l1-s1');
    }
  }, [currentUser]);

  // Parent auto-routing: Student Report is the only menu a parent account can reach
  useEffect(() => {
    if (currentUser && currentUser.role === 'parent') {
      setActiveTab('studentReport');
    }
  }, [currentUser]);

  const isLevelDisabled = (levelNum) => {
    if (!currentUser) return false;
    if (currentUser.role === 'teacher') return false; // Teachers can access everything
    
    // Students can only access their assigned level
    const userLevelNum = parseInt(currentUser.student_level?.replace('L', '')) || 1;
    return userLevelNum !== levelNum;
  };
  
  // Sandbox states
  const [sandboxRole, setSandboxRole] = useState('Junior Systems Analyst');
  const [sandboxTask, setSandboxTask] = useState('Explain the hardware, network, and web-technology layers behind the Racing Car Game platform');
  const [sandboxConstraints, setSandboxConstraints] = useState('Keep answers plain-English and precise: name the specific hardware resource, network step, or web technology responsible.');
  const [sandboxInput, setSandboxInput] = useState('Plain-English answers and short AI prompts');
  const [sandboxEdgeCases, setSandboxEdgeCases] = useState('Confusing hardware limits with software bugs, vague prompts that could apply to anything');
  const [sandboxCodeOutput, setSandboxCodeOutput] = useState(null);
  
  // Chaos Monkey console states
  const [chaosLogs, setChaosLogs] = useState([]);
  const [isRunningChaos, setIsRunningChaos] = useState(false);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);

  // Active Sandbox Session Tracker
  const [sandboxSessionId, setSandboxSessionId] = useState('l1-s1');

  // Per-exercise saved work, keyed by `${sessionId}-${exerciseNum}`. Populated when a
  // student switches away from an exercise tab, so switching back restores what they'd
  // typed instead of the preloaded/preset starting state.
  const [savedExerciseCode, setSavedExerciseCode] = useState({});

  // Level 1 Session 1 (Systems Briefing) States — 3-box format:
  // Plan & Design / Prompt+Output / Explain the Output
  const [s1ActiveExercise, setS1ActiveExercise] = useState(1);
  const [s1PlanInput, setS1PlanInput] = useState('');
  const [s1PromptInput, setS1PromptInput] = useState('');
  const [s1OutputCodeInput, setS1OutputCodeInput] = useState('');
  const [s1ExplainInput, setS1ExplainInput] = useState('');
  const [s1Logs, setS1Logs] = useState([]);
  const [s1Success, setS1Success] = useState(false);
  const [s1Verifying, setS1Verifying] = useState(false);
  const [s1Generating, setS1Generating] = useState(false);

  // Level 1 Session 2 (HTML Sandbox) States — 3-box format:
  // Plan & Design / Prompt+Output Code / Explain the Output Code
  const [s2ActiveExercise, setS2ActiveExercise] = useState(1);
  const [s2PlanInput, setS2PlanInput] = useState('');
  const [s2PromptInput, setS2PromptInput] = useState('');
  const [s2OutputCodeInput, setS2OutputCodeInput] = useState('');
  const [s2ExplainInput, setS2ExplainInput] = useState('');
  const [s2Logs, setS2Logs] = useState([]);
  const [s2Success, setS2Success] = useState(false);
  const [s2Verifying, setS2Verifying] = useState(false);
  const [s2Generating, setS2Generating] = useState(false);

  // Level 1 Session 3 (CSS Sandbox) States — 3-box format:
  // Plan & Design / Prompt+Output Code / Explain the Output Code
  const [s3ActiveExercise, setS3ActiveExercise] = useState(1);
  const [s3PlanInput, setS3PlanInput] = useState('');
  const [s3PromptInput, setS3PromptInput] = useState('');
  const [s3OutputCodeInput, setS3OutputCodeInput] = useState('');
  const [s3ExplainInput, setS3ExplainInput] = useState('');
  const [s3Logs, setS3Logs] = useState([]);
  const [s3Success, setS3Success] = useState(false);
  const [s3Verifying, setS3Verifying] = useState(false);
  const [s3Generating, setS3Generating] = useState(false);

  // Level 1 Session 4 (Variable Registry) Simulator States — 3-box format:
  // Plan & Design / Prompt+Output Code / Explain the Output Code
  const [s4ActiveExercise, setS4ActiveExercise] = useState(1);
  const [s4PlanInput, setS4PlanInput] = useState('');
  const [s4PromptInput, setS4PromptInput] = useState('');
  const [s4OutputCodeInput, setS4OutputCodeInput] = useState('');
  const [s4ExplainInput, setS4ExplainInput] = useState('');
  const [s4Logs, setS4Logs] = useState([]);
  const [s4Success, setS4Success] = useState(false);
  const [s4Verifying, setS4Verifying] = useState(false);
  const [s4Generating, setS4Generating] = useState(false);
  const [promptCopiedKey, setPromptCopiedKey] = useState('');

  // Journal selection states
  const [selectedJournalId, setSelectedJournalId] = useState('j1');
  const [activeJournalVersion, setActiveJournalVersion] = useState(2);
  const [activeJournalTab, setActiveJournalTab] = useState('plan');
  const [showProjectTasks, setShowProjectTasks] = useState(true);
  const [showCurriculumSidebar, setShowCurriculumSidebar] = useState(true);
  const [showExercisesSidebar, setShowExercisesSidebar] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(() => (typeof window === 'undefined' ? true : window.innerWidth > 900));
  const [curriculumDetailTab, setCurriculumDetailTab] = useState('plan');
  
  // Tab fields state
  const [editingPlanVision, setEditingPlanVision] = useState('');
  const [editingPlanSpecs, setEditingPlanSpecs] = useState('');
  const [editingPlanFlow, setEditingPlanFlow] = useState('');
  const [editingCodePrompt, setEditingCodePrompt] = useState('');
  const [editingCodeOutput, setEditingCodeOutput] = useState('');
  const [editingCodeReview, setEditingCodeReview] = useState('');
  const [editingTestCases, setEditingTestCases] = useState('');
  const [editingTestResults, setEditingTestResults] = useState('');
  const [editingIterationChanges, setEditingIterationChanges] = useState('');
  const [editingIterationLessons, setEditingIterationLessons] = useState('');
  // Project Task AI Auditor feedback — pilot scope: L1 Session 5 only (2026-07-30, see
  // improve_concept.md Phase 5). Advisory only: shows AI feedback but never blocks Save,
  // since Project Task XP remains a manual teacher grant per the Hybrid Model.
  const [projectTaskAuditResult, setProjectTaskAuditResult] = useState(null);
  const [projectTaskAuditing, setProjectTaskAuditing] = useState(false);
  const [projectTaskGenerating, setProjectTaskGenerating] = useState(false);

  // Level 1 Sessions 5-8: JS Sandbox exercise states (Keyboard Control, Boundary Guards, Loops, Modular Functions)
  // 3-box format: Plan & Design / Prompt+Output Code / Explain the Output Code
  const [s5ActiveExercise, setS5ActiveExercise] = useState(1);
  const [s5PlanInput, setS5PlanInput] = useState('');
  const [s5PromptInput, setS5PromptInput] = useState('');
  const [s5OutputCodeInput, setS5OutputCodeInput] = useState('');
  const [s5ExplainInput, setS5ExplainInput] = useState('');
  const [s5Logs, setS5Logs] = useState([]);
  const [s5Success, setS5Success] = useState(false);
  const [s5Verifying, setS5Verifying] = useState(false);
  const [s5Generating, setS5Generating] = useState(false);

  const [s6ActiveExercise, setS6ActiveExercise] = useState(1);
  const [s6PlanInput, setS6PlanInput] = useState('');
  const [s6PromptInput, setS6PromptInput] = useState('');
  const [s6OutputCodeInput, setS6OutputCodeInput] = useState('');
  const [s6ExplainInput, setS6ExplainInput] = useState('');
  const [s6Logs, setS6Logs] = useState([]);
  const [s6Success, setS6Success] = useState(false);
  const [s6Verifying, setS6Verifying] = useState(false);
  const [s6Generating, setS6Generating] = useState(false);

  const [s7ActiveExercise, setS7ActiveExercise] = useState(1);
  const [s7PlanInput, setS7PlanInput] = useState('');
  const [s7PromptInput, setS7PromptInput] = useState('');
  const [s7OutputCodeInput, setS7OutputCodeInput] = useState('');
  const [s7ExplainInput, setS7ExplainInput] = useState('');
  const [s7Logs, setS7Logs] = useState([]);
  const [s7Success, setS7Success] = useState(false);
  const [s7Generating, setS7Generating] = useState(false);

  const [s8ActiveExercise, setS8ActiveExercise] = useState(1);
  const [s8PlanInput, setS8PlanInput] = useState('');
  const [s8PromptInput, setS8PromptInput] = useState('');
  const [s8OutputCodeInput, setS8OutputCodeInput] = useState('');
  const [s8ExplainInput, setS8ExplainInput] = useState('');
  const [s8Logs, setS8Logs] = useState([]);
  const [s8Success, setS8Success] = useState(false);
  const [s8Verifying, setS8Verifying] = useState(false);
  const [s8Generating, setS8Generating] = useState(false);

  // Level 1 Sessions 9-12: JS Sandbox exercise states (Animations, Collision, DOM HUD, Capstone Assessment)
  // 3-box format: Plan & Design / Prompt+Output Code / Explain the Output Code
  const [s9ActiveExercise, setS9ActiveExercise] = useState(1);
  const [s9PlanInput, setS9PlanInput] = useState('');
  const [s9PromptInput, setS9PromptInput] = useState('');
  const [s9OutputCodeInput, setS9OutputCodeInput] = useState('');
  const [s9ExplainInput, setS9ExplainInput] = useState('');
  const [s9Logs, setS9Logs] = useState([]);
  const [s9Success, setS9Success] = useState(false);
  const [s9Verifying, setS9Verifying] = useState(false);
  const [s9Generating, setS9Generating] = useState(false);

  const [s10ActiveExercise, setS10ActiveExercise] = useState(1);
  const [s10PlanInput, setS10PlanInput] = useState('');
  const [s10PromptInput, setS10PromptInput] = useState('');
  const [s10OutputCodeInput, setS10OutputCodeInput] = useState('');
  const [s10ExplainInput, setS10ExplainInput] = useState('');
  const [s10Logs, setS10Logs] = useState([]);
  const [s10Success, setS10Success] = useState(false);
  const [s10Verifying, setS10Verifying] = useState(false);
  const [s10Generating, setS10Generating] = useState(false);

  const [s11ActiveExercise, setS11ActiveExercise] = useState(1);
  const [s11PlanInput, setS11PlanInput] = useState('');
  const [s11PromptInput, setS11PromptInput] = useState('');
  const [s11OutputCodeInput, setS11OutputCodeInput] = useState('');
  const [s11ExplainInput, setS11ExplainInput] = useState('');
  const [s11Logs, setS11Logs] = useState([]);
  const [s11Success, setS11Success] = useState(false);
  const [s11Verifying, setS11Verifying] = useState(false);
  const [s11Generating, setS11Generating] = useState(false);

  const [s12ActiveExercise, setS12ActiveExercise] = useState(1);
  const [s12PlanInput, setS12PlanInput] = useState('');
  const [s12PromptInput, setS12PromptInput] = useState('');
  const [s12OutputCodeInput, setS12OutputCodeInput] = useState('');
  const [s12ExplainInput, setS12ExplainInput] = useState('');
  const [s12Logs, setS12Logs] = useState([]);
  const [s12Success, setS12Success] = useState(false);
  const [s12Verifying, setS12Verifying] = useState(false);
  const [s12Generating, setS12Generating] = useState(false);

  // Live console.log()/error output forwarded from the JS Sandbox preview iframes (Sessions 4-12)
  const [simConsoleLogs, setSimConsoleLogs] = useState([]);

  // Level 2 Sessions 1-4: bespoke Canvas Sandbox exercise states (Arena Init, Sprite
  // Movement, Laser Battery, Motion & Garbage Collection). Sessions 5-13 keep using the
  // generic AI Prompt Sandbox (see loadTemplate's else-if chain and CLAUDE.md's sandbox
  // scope note) — these 4 sessions share the same JS console forwarding as L1's S4-S12
  // via the shared simConsoleLogs state above, just rendered against a canvas preview.
  const [l2s1ActiveExercise, setL2s1ActiveExercise] = useState(1);
  const [l2s1CodeInput, setL2s1CodeInput] = useState('');
  const [l2s1Logs, setL2s1Logs] = useState([]);
  const [l2s1Success, setL2s1Success] = useState(false);

  const [l2s2ActiveExercise, setL2s2ActiveExercise] = useState(1);
  const [l2s2CodeInput, setL2s2CodeInput] = useState('');
  const [l2s2Logs, setL2s2Logs] = useState([]);
  const [l2s2Success, setL2s2Success] = useState(false);

  const [l2s3ActiveExercise, setL2s3ActiveExercise] = useState(1);
  const [l2s3CodeInput, setL2s3CodeInput] = useState('');
  const [l2s3Logs, setL2s3Logs] = useState([]);
  const [l2s3Success, setL2s3Success] = useState(false);

  const [l2s4ActiveExercise, setL2s4ActiveExercise] = useState(1);
  const [l2s4CodeInput, setL2s4CodeInput] = useState('');
  const [l2s4Logs, setL2s4Logs] = useState([]);
  const [l2s4Success, setL2s4Success] = useState(false);

  // Level 2 Sessions 5-8: bespoke Canvas Sandbox exercise states (Alien Swarms & Shield
  // Grids, Firing Control & Collision Sweeps, HUD Gauges & Performance Audits, How the
  // Web Works). Sessions 9-13 keep using the generic AI Prompt Sandbox.
  const [l2s5ActiveExercise, setL2s5ActiveExercise] = useState(1);
  const [l2s5CodeInput, setL2s5CodeInput] = useState('');
  const [l2s5Logs, setL2s5Logs] = useState([]);
  const [l2s5Success, setL2s5Success] = useState(false);

  const [l2s6ActiveExercise, setL2s6ActiveExercise] = useState(1);
  const [l2s6CodeInput, setL2s6CodeInput] = useState('');
  const [l2s6Logs, setL2s6Logs] = useState([]);
  const [l2s6Success, setL2s6Success] = useState(false);

  const [l2s7ActiveExercise, setL2s7ActiveExercise] = useState(1);
  const [l2s7CodeInput, setL2s7CodeInput] = useState('');
  const [l2s7Logs, setL2s7Logs] = useState([]);
  const [l2s7Success, setL2s7Success] = useState(false);

  const [l2s8ActiveExercise, setL2s8ActiveExercise] = useState(1);
  const [l2s8CodeInput, setL2s8CodeInput] = useState('');
  const [l2s8Logs, setL2s8Logs] = useState([]);
  const [l2s8Success, setL2s8Success] = useState(false);

  // Level 2 Sessions 9-13: bespoke Canvas Sandbox exercise states (Async Leaderboard
  // Fetch, POST/Payloads/Error Handling, SQL Tables & Queries, SQL Injection Awareness,
  // Graduation Sprint synthesis review). Sessions 9-10 and 13 write real JS (canvas
  // preview reused for its iframe/console harness); Sessions 11-12 are SQL/text answers
  // validated the same way, just never marked runnable.
  const [l2s9ActiveExercise, setL2s9ActiveExercise] = useState(1);
  const [l2s9CodeInput, setL2s9CodeInput] = useState('');
  const [l2s9Logs, setL2s9Logs] = useState([]);
  const [l2s9Success, setL2s9Success] = useState(false);

  const [l2s10ActiveExercise, setL2s10ActiveExercise] = useState(1);
  const [l2s10CodeInput, setL2s10CodeInput] = useState('');
  const [l2s10Logs, setL2s10Logs] = useState([]);
  const [l2s10Success, setL2s10Success] = useState(false);

  const [l2s11ActiveExercise, setL2s11ActiveExercise] = useState(1);
  const [l2s11CodeInput, setL2s11CodeInput] = useState('');
  const [l2s11Logs, setL2s11Logs] = useState([]);
  const [l2s11Success, setL2s11Success] = useState(false);

  const [l2s12ActiveExercise, setL2s12ActiveExercise] = useState(1);
  const [l2s12CodeInput, setL2s12CodeInput] = useState('');
  const [l2s12Logs, setL2s12Logs] = useState([]);
  const [l2s12Success, setL2s12Success] = useState(false);

  const [l2s13ActiveExercise, setL2s13ActiveExercise] = useState(1);
  const [l2s13CodeInput, setL2s13CodeInput] = useState('');
  const [l2s13Logs, setL2s13Logs] = useState([]);
  const [l2s13Success, setL2s13Success] = useState(false);

  // Per-exercise completion map: sessionId -> array of passed exercise numbers.
  // Server-backed (exercise_progress table), so progress follows the student
  // across devices. Individual passes are POSTed as they happen.
  const [exerciseProgress, setExerciseProgress] = useState({});

  // Load per-user exercise progress from the server once the user is known.
  // Any progress left in localStorage by the earlier device-local implementation
  // is migrated to the server on first load, then the legacy key is removed.
  useEffect(() => {
    if (!currentUser?.id) {
      setExerciseProgress({});
      return;
    }

    const legacyKey = `detective_exercise_progress_${currentUser.id}`;
    let legacyMap = {};
    try {
      const stored = localStorage.getItem(legacyKey);
      if (stored) legacyMap = JSON.parse(stored) || {};
    } catch { legacyMap = {}; }

    fetch('/api/user/exercise-progress', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to load exercise progress');
        return res.json();
      })
      .then(serverMap => {
        // Collect legacy entries the server doesn't know about yet
        const missing = [];
        Object.entries(legacyMap).forEach(([sessionId, nums]) => {
          (Array.isArray(nums) ? nums : []).forEach(exerciseNum => {
            if (!(serverMap[sessionId] || []).includes(exerciseNum)) {
              missing.push({ sessionId, exerciseNum });
            }
          });
        });

        if (missing.length === 0) {
          setExerciseProgress(serverMap);
          localStorage.removeItem(legacyKey);
          return;
        }

        // One-time migration: push legacy progress up, then adopt the merged map
        fetch('/api/user/exercise-progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ entries: missing })
        })
          .then(res => res.json())
          .then(data => {
            setExerciseProgress(data.progress || serverMap);
            localStorage.removeItem(legacyKey);
          })
          .catch(err => {
            console.warn('Legacy progress migration failed, keeping local copy:', err.message);
            // Merge locally so the student still sees their checkmarks; retry next login
            const merged = { ...serverMap };
            missing.forEach(({ sessionId, exerciseNum }) => {
              merged[sessionId] = [...(merged[sessionId] || []), exerciseNum];
            });
            setExerciseProgress(merged);
          });
      })
      .catch(err => {
        console.warn('Failed to load exercise progress from server, using local fallback:', err.message);
        setExerciseProgress(legacyMap);
      });
  }, [currentUser?.id, token]);

  // Load per-user exercise submissions (Plan/Prompt/Output Code/Explain text saved on
  // every Verify click — see saveExerciseSubmission below) once the user is known. Replaces
  // savedExerciseCode with the current user's data ONLY (preventing cross-user leakage),
  // and pre-fills whichever exercise is currently active per session.
  useEffect(() => {
    if (!currentUser?.id) {
      setSavedExerciseCode({});
      return;
    }
    fetch('/api/user/exercise-submissions', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to load exercise submissions');
        return res.json();
      })
      .then(submissionsMap => {
        const safeSubmissions = submissionsMap || {};
        setSavedExerciseCode(safeSubmissions);
        const hydrateActive = (sessionId, activeExercise, setPlan, setPrompt, setOutputCode, setExplain) => {
          const saved = safeSubmissions[`${sessionId}-${activeExercise}`];
          setPlan(saved?.plan || '');
          setPrompt(saved?.prompt || '');
          setOutputCode(saved?.outputCode || '');
          setExplain(saved?.explain || '');
        };
        hydrateActive('l1-s1', s1ActiveExercise, setS1PlanInput, setS1PromptInput, setS1OutputCodeInput, setS1ExplainInput);
        hydrateActive('l1-s2', s2ActiveExercise, setS2PlanInput, setS2PromptInput, setS2OutputCodeInput, setS2ExplainInput);
        hydrateActive('l1-s3', s3ActiveExercise, setS3PlanInput, setS3PromptInput, setS3OutputCodeInput, setS3ExplainInput);
        hydrateActive('l1-s4', s4ActiveExercise, setS4PlanInput, setS4PromptInput, setS4OutputCodeInput, setS4ExplainInput);
        hydrateActive('l1-s5', s5ActiveExercise, setS5PlanInput, setS5PromptInput, setS5OutputCodeInput, setS5ExplainInput);
        hydrateActive('l1-s6', s6ActiveExercise, setS6PlanInput, setS6PromptInput, setS6OutputCodeInput, setS6ExplainInput);
        hydrateActive('l1-s7', s7ActiveExercise, setS7PlanInput, setS7PromptInput, setS7OutputCodeInput, setS7ExplainInput);
        hydrateActive('l1-s8', s8ActiveExercise, setS8PlanInput, setS8PromptInput, setS8OutputCodeInput, setS8ExplainInput);
        hydrateActive('l1-s9', s9ActiveExercise, setS9PlanInput, setS9PromptInput, setS9OutputCodeInput, setS9ExplainInput);
        hydrateActive('l1-s10', s10ActiveExercise, setS10PlanInput, setS10PromptInput, setS10OutputCodeInput, setS10ExplainInput);
        hydrateActive('l1-s11', s11ActiveExercise, setS11PlanInput, setS11PromptInput, setS11OutputCodeInput, setS11ExplainInput);
        hydrateActive('l1-s12', s12ActiveExercise, setS12PlanInput, setS12PromptInput, setS12OutputCodeInput, setS12ExplainInput);

        setL2s1CodeInput(safeSubmissions['l2-s1-1']?.outputCode || L2S1_EXERCISES[0]?.preloaded || '');
        setL2s2CodeInput(safeSubmissions['l2-s2-1']?.outputCode || L2S2_EXERCISES[0]?.preloaded || '');
        setL2s3CodeInput(safeSubmissions['l2-s3-1']?.outputCode || L2S3_EXERCISES[0]?.preloaded || '');
        setL2s4CodeInput(safeSubmissions['l2-s4-1']?.outputCode || L2S4_EXERCISES[0]?.preloaded || '');
        setL2s5CodeInput(safeSubmissions['l2-s5-1']?.outputCode || L2S5_EXERCISES[0]?.preloaded || '');
        setL2s6CodeInput(safeSubmissions['l2-s6-1']?.outputCode || L2S6_EXERCISES[0]?.preloaded || '');
        setL2s7CodeInput(safeSubmissions['l2-s7-1']?.outputCode || L2S7_EXERCISES[0]?.preloaded || '');
        setL2s8CodeInput(safeSubmissions['l2-s8-1']?.outputCode || L2S8_EXERCISES[0]?.preloaded || '');
        setL2s9CodeInput(safeSubmissions['l2-s9-1']?.outputCode || L2S9_EXERCISES[0]?.preloaded || '');
        setL2s10CodeInput(safeSubmissions['l2-s10-1']?.outputCode || L2S10_EXERCISES[0]?.preloaded || '');
        setL2s11CodeInput(safeSubmissions['l2-s11-1']?.outputCode || L2S11_EXERCISES[0]?.preloaded || '');
        setL2s12CodeInput(safeSubmissions['l2-s12-1']?.outputCode || L2S12_EXERCISES[0]?.preloaded || '');
        setL2s13CodeInput(safeSubmissions['l2-s13-1']?.outputCode || L2S13_EXERCISES[0]?.preloaded || '');
      })
      .catch(err => {
        console.warn('Failed to load exercise submissions from server:', err.message);
        setSavedExerciseCode({});
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.id, token]);

  useEffect(() => {
    const handleSimMessage = (event) => {
      if (!event.data || !event.data.__sim) return;
      setSimConsoleLogs(prev => [...prev.slice(-19), { type: event.data.type === 'error' ? 'error' : 'info', text: event.data.text }]);
    };
    window.addEventListener('message', handleSimMessage);
    return () => window.removeEventListener('message', handleSimMessage);
  }, []);

  // JSON Serialization logic
  const serializeJournalData = (planVision, planSpecs, planFlow, codeOutput, codeReview, testCases, testResults, iterationChanges, iterationLessons) => {
    return JSON.stringify({
      planVision,
      planSpecs,
      planFlow,
      codeOutput,
      codeReview,
      testCases,
      testResults,
      iterationChanges,
      iterationLessons
    });
  };

  // planSpecs now holds the merged "System Parts & Information" answer. Older entries saved
  // hierarchy/variables as two separate fields (planSpecs + planData) — fold any legacy
  // planData content into planSpecs on load so nothing a student already wrote is lost.
  const deserializeJournalData = (rawText) => {
    try {
      const data = JSON.parse(rawText);
      const legacySpecs = [data.planSpecs, data.planData].filter(Boolean).join('\n\n');
      return {
        planVision: data.planVision || '',
        planSpecs: legacySpecs,
        planFlow: data.planFlow || '',
        codeOutput: data.codeOutput || '',
        codeReview: data.codeReview || '',
        testCases: data.testCases || '',
        testResults: data.testResults || '',
        iterationChanges: data.iterationChanges || '',
        iterationLessons: data.iterationLessons || ''
      };
    } catch {
      return {
        planVision: '',
        planSpecs: '',
        planFlow: '',
        codeOutput: rawText || '',
        codeReview: '',
        testCases: '',
        testResults: '',
        iterationChanges: '',
        iterationLessons: ''
      };
    }
  };

  // L1 Project Journal chaining: pull another session's own saved codeOutput straight out
  // of the already-fetched `journalEntries` state (GET /api/journal returns every entry's
  // full version history up front, so this never needs an extra fetch). Used to seed a new
  // session's starting code from the previous session (chainFrom) and to render read-only
  // reference blocks (referenceSessions). Returns '' if the student hasn't started that
  // session's journal yet — callers treat that as "not found", not an error.
  const getSessionCodeOutput = (sessionId) => {
    if (!currentUser || !sessionId) return '';
    const entry = journalEntries.find(e => e.id === `${currentUser.id}_${sessionId}`);
    if (!entry || !entry.history || entry.history.length === 0) return '';
    const activeHist = entry.history.find(h => h.version === entry.activeVersion) || entry.history[entry.history.length - 1];
    if (!activeHist) return '';
    return deserializeJournalData(activeHist.code).codeOutput;
  };

  // Handle user authentication load
  useEffect(() => {
    if (!token) {
      setCurrentUser(null);
      resetAllUserSessionState();
      return;
    }

    fetch('/api/user', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Session expired or invalid");
        return res.json();
      })
      .then(data => {
        setCurrentUser(data);
        if (data.points !== undefined) setPoints(data.points);
        if (data.solvedCases) setSolvedCases(data.solvedCases);
      })
      .catch(err => {
        console.warn("Auth token verification failed:", err.message);
        setToken(null);
        localStorage.removeItem('detective_token');
        resetAllUserSessionState();
      });

    fetch('/api/journal', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setJournalEntries(data);
          if (data[0]) {
            setSelectedJournalId(data[0].id);
            setActiveJournalVersion(data[0].version);
          }
        } else {
          setJournalEntries([]);
        }
      })
      .catch(err => {
        console.warn("Failed to fetch journals:", err.message);
        setJournalEntries([]);
      });
  }, [token]);

  // Load student list for teacher admin panel
  const fetchStudentsList = useCallback(() => {
    if (!token) return;
    fetch('/api/admin/students', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setStudents(data);
        }
      })
      .catch(err => console.warn("Failed to load students list:", err.message));
  }, [token]);

  const fetchParentsList = useCallback(() => {
    if (!token) return;
    fetch('/api/admin/parents', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setParents(data);
        }
      })
      .catch(err => console.warn("Failed to load parents list:", err.message));
  }, [token]);

  const fetchLeaderboard = useCallback(() => {
    if (!token) return;
    fetch('/api/leaderboard', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setLeaderboardData(data);
        }
      })
      .catch(err => console.warn("Failed to load leaderboard:", err.message));
  }, [token]);

  useEffect(() => {
    if (token && currentUser && currentUser.role === 'teacher') {
      fetchStudentsList();
      fetchParentsList();
    }
  }, [token, currentUser, fetchStudentsList, fetchParentsList]);

  useEffect(() => {
    if (activeTab === 'leaderboard') {
      fetchLeaderboard();
    }
  }, [activeTab, token, fetchLeaderboard]);

  // Student Report: load a parent's linked student(s)
  const fetchReportLinkedStudents = useCallback(() => {
    if (!token) return;
    fetch('/api/report/my-students', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setReportLinkedStudents(data);
          if (data.length === 1) {
            setReportStudent(data[0]);
          }
        }
      })
      .catch(err => console.warn("Failed to load linked students:", err.message));
  }, [token]);

  useEffect(() => {
    if (activeTab === 'studentReport' && currentUser && currentUser.role === 'parent') {
      fetchReportLinkedStudents();
    }
  }, [activeTab, currentUser, fetchReportLinkedStudents]);

  // Student Report: load the attendance/feedback rows for whichever student is currently selected
  const fetchReportData = useCallback((studentId) => {
    if (!token || !studentId) return;
    setReportLoading(true);
    fetch(`/api/report/${studentId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const map = {};
          data.forEach(row => {
            map[row.session_id] = {
              session_date: row.session_date ? row.session_date.substring(0, 10) : '',
              teacher_feedback: row.teacher_feedback || '',
              parent_feedback: row.parent_feedback || ''
            };
          });
          setReportData(map);
        }
      })
      .catch(err => console.warn("Failed to load student report:", err.message))
      .finally(() => setReportLoading(false));
  }, [token]);

  useEffect(() => {
    if (reportStudent) {
      fetchReportData(reportStudent.id);
    }
  }, [reportStudent, fetchReportData]);

  // Scroll the focused session into view when jumping from Attendance to Feedback
  useEffect(() => {
    if (reportSubTab === 'feedback' && reportSessionFocus) {
      const el = document.getElementById(`report-feedback-${reportSessionFocus}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [reportSubTab, reportSessionFocus]);

  const handleSelectReportStudent = (student) => {
    setReportStudent(student);
    setReportSubTab('attendance');
    setReportSessionFocus(null);
    setReportStatusMsg('');
  };

  const handleJumpToSessionFeedback = (sessionId) => {
    setReportSubTab('feedback');
    setReportSessionFocus(sessionId);
  };

  const handleSetAttendanceDate = (sessionId, date) => {
    if (!token || !reportStudent) return;
    setReportData(prev => ({
      ...prev,
      [sessionId]: { teacher_feedback: '', parent_feedback: '', ...(prev[sessionId] || {}), session_date: date }
    }));
    fetch(`/api/report/${reportStudent.id}/${sessionId}/date`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ date })
    }).catch(err => console.warn("Failed to save attendance date:", err.message));
  };

  const handleFeedbackTextChange = (sessionId, field, text) => {
    const column = field === 'teacher' ? 'teacher_feedback' : 'parent_feedback';
    setReportData(prev => ({
      ...prev,
      [sessionId]: { session_date: '', teacher_feedback: '', parent_feedback: '', ...(prev[sessionId] || {}), [column]: text }
    }));
  };

  const handleSaveFeedback = (sessionId, field) => {
    if (!token || !reportStudent) return;
    const row = reportData[sessionId] || {};
    const text = field === 'teacher' ? (row.teacher_feedback || '') : (row.parent_feedback || '');
    setReportStatusMsg('');
    fetch(`/api/report/${reportStudent.id}/${sessionId}/feedback`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ field, text })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to save feedback"); });
        return res.json();
      })
      .then(() => setReportStatusMsg('Feedback saved.'))
      .catch(err => setReportStatusMsg(`Error: ${err.message}`));
  };

  const handleOpenAdminFeedback = (student) => {
    setReportStudent(student);
    setReportCameFromAdmin(true);
    setReportSubTab('feedback');
    setReportSessionFocus(null);
    setActiveTab('studentReport');
  };

  const handleBackToAdmin = () => {
    setReportCameFromAdmin(false);
    setReportStudent(null);
    setReportData({});
    setActiveTab('admin');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    if (!loginUsername || !loginPassword) {
      setLoginError('Both username and password are required.');
      return;
    }

    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: loginUsername, password: loginPassword })
    })
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Invalid username or password");
        }
        return data;
      })
      .then(data => {
        if (data.success && data.token) {
          localStorage.setItem('detective_token', data.token);
          setToken(data.token);
          setLoginUsername('');
          setLoginPassword('');
        }
      })
      .catch(err => {
        setLoginError(err.message);
      });
  };

  const resetAllUserSessionState = () => {
    setSavedExerciseCode({});
    setExerciseProgress({});
    setPoints(0);
    setSolvedCases({});
    setJournalEntries([]);

    // Level 1 Sessions 1-12 states
    setS1ActiveExercise(1);
    setS1PlanInput('');
    setS1PromptInput('');
    setS1OutputCodeInput('');
    setS1ExplainInput('');
    setS1Logs([]);
    setS1Success(false);

    setS2ActiveExercise(1);
    setS2PlanInput('');
    setS2PromptInput('');
    setS2OutputCodeInput('');
    setS2ExplainInput('');
    setS2Logs([]);
    setS2Success(false);

    setS3ActiveExercise(1);
    setS3PlanInput('');
    setS3PromptInput('');
    setS3OutputCodeInput('');
    setS3ExplainInput('');
    setS3Logs([]);
    setS3Success(false);

    setS4ActiveExercise(1);
    setS4PlanInput('');
    setS4PromptInput('');
    setS4OutputCodeInput('');
    setS4ExplainInput('');
    setS4Logs([]);
    setS4Success(false);

    setS5ActiveExercise(1);
    setS5PlanInput('');
    setS5PromptInput('');
    setS5OutputCodeInput('');
    setS5ExplainInput('');
    setS5Logs([]);
    setS5Success(false);

    setS6ActiveExercise(1);
    setS6PlanInput('');
    setS6PromptInput('');
    setS6OutputCodeInput('');
    setS6ExplainInput('');
    setS6Logs([]);
    setS6Success(false);

    setS7ActiveExercise(1);
    setS7PlanInput('');
    setS7PromptInput('');
    setS7OutputCodeInput('');
    setS7ExplainInput('');
    setS7Logs([]);
    setS7Success(false);

    setS8ActiveExercise(1);
    setS8PlanInput('');
    setS8PromptInput('');
    setS8OutputCodeInput('');
    setS8ExplainInput('');
    setS8Logs([]);
    setS8Success(false);

    setS9ActiveExercise(1);
    setS9PlanInput('');
    setS9PromptInput('');
    setS9OutputCodeInput('');
    setS9ExplainInput('');
    setS9Logs([]);
    setS9Success(false);

    setS10ActiveExercise(1);
    setS10PlanInput('');
    setS10PromptInput('');
    setS10OutputCodeInput('');
    setS10ExplainInput('');
    setS10Logs([]);
    setS10Success(false);

    setS11ActiveExercise(1);
    setS11PlanInput('');
    setS11PromptInput('');
    setS11OutputCodeInput('');
    setS11ExplainInput('');
    setS11Logs([]);
    setS11Success(false);

    setS12ActiveExercise(1);
    setS12PlanInput('');
    setS12PromptInput('');
    setS12OutputCodeInput('');
    setS12ExplainInput('');
    setS12Logs([]);
    setS12Success(false);

    // Level 2 Sessions 1-13 states
    setL2s1ActiveExercise(1);
    setL2s1CodeInput(L2S1_EXERCISES[0]?.preloaded || '');
    setL2s1Logs([]);
    setL2s1Success(false);

    setL2s2ActiveExercise(1);
    setL2s2CodeInput(L2S2_EXERCISES[0]?.preloaded || '');
    setL2s2Logs([]);
    setL2s2Success(false);

    setL2s3ActiveExercise(1);
    setL2s3CodeInput(L2S3_EXERCISES[0]?.preloaded || '');
    setL2s3Logs([]);
    setL2s3Success(false);

    setL2s4ActiveExercise(1);
    setL2s4CodeInput(L2S4_EXERCISES[0]?.preloaded || '');
    setL2s4Logs([]);
    setL2s4Success(false);

    setL2s5ActiveExercise(1);
    setL2s5CodeInput(L2S5_EXERCISES[0]?.preloaded || '');
    setL2s5Logs([]);
    setL2s5Success(false);

    setL2s6ActiveExercise(1);
    setL2s6CodeInput(L2S6_EXERCISES[0]?.preloaded || '');
    setL2s6Logs([]);
    setL2s6Success(false);

    setL2s7ActiveExercise(1);
    setL2s7CodeInput(L2S7_EXERCISES[0]?.preloaded || '');
    setL2s7Logs([]);
    setL2s7Success(false);

    setL2s8ActiveExercise(1);
    setL2s8CodeInput(L2S8_EXERCISES[0]?.preloaded || '');
    setL2s8Logs([]);
    setL2s8Success(false);

    setL2s9ActiveExercise(1);
    setL2s9CodeInput(L2S9_EXERCISES[0]?.preloaded || '');
    setL2s9Logs([]);
    setL2s9Success(false);

    setL2s10ActiveExercise(1);
    setL2s10CodeInput(L2S10_EXERCISES[0]?.preloaded || '');
    setL2s10Logs([]);
    setL2s10Success(false);

    setL2s11ActiveExercise(1);
    setL2s11CodeInput(L2S11_EXERCISES[0]?.preloaded || '');
    setL2s11Logs([]);
    setL2s11Success(false);

    setL2s12ActiveExercise(1);
    setL2s12CodeInput(L2S12_EXERCISES[0]?.preloaded || '');
    setL2s12Logs([]);
    setL2s12Success(false);

    setL2s13ActiveExercise(1);
    setL2s13CodeInput(L2S13_EXERCISES[0]?.preloaded || '');
    setL2s13Logs([]);
    setL2s13Success(false);

    // Sandbox & sim states
    setSandboxCodeOutput(null);
    setChaosLogs([]);
    setSandboxSuccess(false);
    setSimConsoleLogs([]);

    // Project task & journal edit fields
    setEditingPlanVision('');
    setEditingPlanSpecs('');
    setEditingPlanFlow('');
    setEditingCodePrompt('');
    setEditingCodeOutput('');
    setEditingCodeReview('');
    setEditingTestCases('');
    setEditingTestResults('');
    setEditingIterationChanges('');
    setEditingIterationLessons('');
    setProjectTaskAuditResult(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('detective_token');
    setToken(null);
    setCurrentUser(null);
    resetAllUserSessionState();
    setActiveTab('dashboard');
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    setAdminStatusMsg('');
    if (!newStudentUsername || !newStudentPassword || !newStudentName) {
      setAdminStatusMsg('All student fields are required.');
      return;
    }

    fetch('/api/admin/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        username: newStudentUsername,
        password: newStudentPassword,
        name: newStudentName,
        level: newStudentLevel,
        linkedStudentIds: newPersonLinkedStudentIds
      })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to create profile"); });
        return res.json();
      })
      .then(data => {
        const created = data.student || data.parent;
        setAdminStatusMsg(`Success: ${created.role === 'parent' ? 'Parent' : 'Student'} "${created.name}" registered successfully.`);
        setNewStudentUsername('');
        setNewStudentPassword('');
        setNewStudentName('');
        setNewStudentLevel('L1');
        setNewPersonLinkedStudentIds([]);
        fetchStudentsList();
        fetchParentsList();
      })
      .catch(err => {
        setAdminStatusMsg(`Error: ${err.message}`);
      });
  };

  const handleUpdateStudentLevel = (studentId, level) => {
    if (!token) return;
    fetch('/api/admin/students/level', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ studentId, level })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to update level"); });
        return res.json();
      })
      .then(() => {
        fetchStudentsList();
      })
      .catch(err => {
        console.error("Failed to update student level:", err.message);
        alert("Failed to update student level: " + err.message);
      });
  };

  const handleUpdateStudentPoints = (studentId, newPoints) => {
    if (!token) return;
    fetch('/api/admin/students/points', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ studentId, points: newPoints })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to update points"); });
        return res.json();
      })
      .then(() => {
        fetchStudentsList();
      })
      .catch(err => {
        console.error("Failed to update student points:", err.message);
        alert("Failed to update student points: " + err.message);
      });
  };

  const handleToggleStudentActive = (studentId, nextActive) => {
    if (!token) return;
    fetch('/api/admin/students/active', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ studentId, active: nextActive })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to update active status"); });
        return res.json();
      })
      .then(() => {
        fetchStudentsList();
        fetchParentsList();
      })
      .catch(err => {
        console.error("Failed to update student active status:", err.message);
        alert("Failed to update student active status: " + err.message);
      });
  };

  const handleAddParentLink = (parentId, studentId) => {
    if (!token || !studentId) return;
    fetch('/api/admin/parents/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ parentId, studentId })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to link student"); });
        return res.json();
      })
      .then(() => {
        fetchParentsList();
      })
      .catch(err => {
        console.error("Failed to link student:", err.message);
        alert("Failed to link student: " + err.message);
      });
  };

  const handleRemoveParentLink = (parentId, studentId) => {
    if (!token) return;
    fetch('/api/admin/parents/unlink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ parentId, studentId })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to unlink student"); });
        return res.json();
      })
      .then(() => {
        fetchParentsList();
      })
      .catch(err => {
        console.error("Failed to unlink student:", err.message);
        alert("Failed to unlink student: " + err.message);
      });
  };

  const handleViewStudentJournal = (student) => {
    if (!token) return;
    setViewingStudent(student);
    setViewingJournalData([]);
    setViewingJournalEntryId(null);
    setViewingJournalVersion(null);
    setJournalSessionPickerOpen(false);
    setViewingJournalLoading(true);
    Promise.all([
      fetch(`/api/admin/students/${student.id}/journal`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to load student journal"); });
        return res.json();
      }),
      fetch(`/api/report/${student.id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to load student attendance"); });
        return res.json();
      })
    ])
      .then(([journalEntries, attendanceRows]) => {
        // A journal entry created via "Initialize Project Journal" always titles itself
        // "L{level} S{num}: ..." (see the button handler above) — match on that prefix
        // rather than the entry id, since older seed data doesn't follow the id convention.
        const studentLevelNum = parseInt((student.student_level || 'L1').replace('L', '')) || 1;
        const attendedSessionDates = {};
        attendanceRows.forEach(row => {
          if (row.session_date) attendedSessionDates[row.session_id] = row.session_date;
        });
        const attendedSessions = CURRICULUM_DATA.filter(s => s.level === studentLevelNum && attendedSessionDates[s.id]);
        const combined = attendedSessions.map(session => {
          const titlePrefix = `L${session.level} S${session.id.split('-s')[1]}:`;
          const matchedEntry = journalEntries.find(e => e.title && e.title.startsWith(titlePrefix)) || null;
          return {
            id: session.id,
            title: session.title,
            date: attendedSessionDates[session.id],
            journalEntry: matchedEntry
          };
        });
        setViewingJournalData(combined);
        if (combined[0]) {
          setViewingJournalEntryId(combined[0].id);
          setViewingJournalVersion(combined[0].journalEntry ? combined[0].journalEntry.activeVersion : null);
        }
      })
      .catch(err => {
        console.error("Failed to load student journal:", err.message);
        alert("Failed to load student journal: " + err.message);
      })
      .finally(() => setViewingJournalLoading(false));
  };

  const handleCloseStudentJournal = () => {
    setViewingStudent(null);
    setViewingJournalData([]);
    setViewingJournalEntryId(null);
    setViewingJournalVersion(null);
    setJournalSessionPickerOpen(false);
  };

  const updatePointsDB = (newVal) => {
    setPoints(newVal);
    if (!token) return;
    fetch('/api/user/points', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ points: newVal })
    })
    .catch(err => console.warn("Failed to sync points to DB:", err.message));
  };

  // Students eligible to appear in a "pick a student" list (parent-link checklist, teacher's
  // Student Report picker). Deactivated students are still visible in the Admin roster itself.
  const activeStudents = students.filter(s => s.is_active !== false);

  // Active campaign variables
  const currentCampaign = CAMPAIGN_THEMES[campaignId];
  const activeMainQuest = currentCampaign.levels[selectedLevel].mainQuest;
  // Levels 1 and 2 use their canonical all-session lists (L1_QUEST_SESSIONS /
  // L2_QUEST_SESSIONS); L3-L4 still use the active campaign's curated session list.
  // The L1/L2 mainQuest text is identical across themes.
  const activeLevelSessions = selectedLevel === 1 ? L1_QUEST_SESSIONS : selectedLevel === 2 ? L2_QUEST_SESSIONS : currentCampaign.levels[selectedLevel].sessions;
  const selectedSession = activeLevelSessions.find(s => s.id === selectedSessionId) || activeLevelSessions[0];

  // Calculate Detective Rank based on points
  const getRank = (score) => {
    if (score >= 1200) return { title: 'Master Architect', xpMin: 1200, xpMax: 2000 };
    if (score >= 800) return { title: 'Senior Auditor', xpMin: 800, xpMax: 1200 };
    if (score >= 400) return { title: 'Junior Investigator', xpMin: 400, xpMax: 800 };
    return { title: 'Novice Decoder', xpMin: 0, xpMax: 400 };
  };

  const rank = getRank(points);
  const xpPercent = Math.min(100, Math.max(0, ((points - rank.xpMin) / (rank.xpMax - rank.xpMin)) * 100));

  // Sequential quest gating: a quest can only be claimed once every earlier quest
  // in its level's sequence has already been solved. Teachers bypass this check.
  // Level 1 gates against the full 12-session curriculum order (every L1 session has
  // a claimable sandbox); other levels gate within the Quest Board's campaign list,
  // since their remaining sessions have no in-app completion path yet.
  const isQuestLocked = (sessionId) => {
    if (currentUser?.role === 'teacher') return false;
    const sequence = sessionId?.startsWith('l1-') ? L1_SESSION_SEQUENCE : activeLevelSessions;
    const idx = sequence.findIndex(s => s.id === sessionId);
    if (idx <= 0) return false;
    return sequence.slice(0, idx).some(s => !solvedCases[s.id]);
  };

  // Copies a written prompt to the clipboard so the student can paste it into
  // their own external AI tool (ChatGPT/Cursor/Copilot), then paste that tool's
  // real response back into the Output Code box themselves — the platform never
  // calls an AI API itself.
  const copyPromptToClipboard = (text, key) => {
    if (!text?.trim()) return;
    navigator.clipboard.writeText(text).then(() => {
      setPromptCopiedKey(key);
      setTimeout(() => setPromptCopiedKey(prev => (prev === key ? '' : prev)), 1500);
    });
  };

  // Per-exercise completion tracking for the Level 1 sandbox sessions. A session's
  // XP is claimed only when ALL of its exercises have been passed. Each pass is
  // persisted server-side (exercise_progress table) so progress follows the student
  // across devices; the local state update is optimistic for instant UI feedback.
  const markExerciseComplete = (sessionId, exNum) => {
    const total = EXERCISE_COUNTS[sessionId] || 10;
    const done = exerciseProgress[sessionId] || [];
    const nextDone = done.includes(exNum) ? done : [...done, exNum];
    if (!done.includes(exNum)) {
      setExerciseProgress(prev => {
        const prevDone = prev[sessionId] || [];
        return prevDone.includes(exNum) ? prev : { ...prev, [sessionId]: [...prevDone, exNum] };
      });
      fetch('/api/user/exercise-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ entries: [{ sessionId, exerciseNum: exNum }] })
      }).catch(err => console.warn('Failed to save exercise progress to server:', err.message));
    }
    const allDone = nextDone.length >= total;
    return { allDone, doneCount: nextDone.length, total, locked: allDone && !solvedCases[sessionId] && isQuestLocked(sessionId) };
  };

  // Persists one exercise's Plan/Prompt/Output Code/Explain text on every Verify click
  // (pass or fail), so students can refer back to what they wrote later — separate from
  // markExerciseComplete above, which only records pass/fail. Fire-and-forget: a failed
  // save just means this exercise's text isn't restored next login, not a broken Verify.
  const saveExerciseSubmission = (sessionId, exerciseNum, fields) => {
    setSavedExerciseCode(prev => ({ ...prev, [`${sessionId}-${exerciseNum}`]: fields }));
    fetch('/api/user/exercise-submission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ sessionId, exerciseNum, ...fields })
    }).catch(err => console.warn('Failed to save exercise submission:', err.message));
  };

  // Trigger simulated AI generation
  const handleGenerate = () => {
    if (!sandboxTask.trim()) return;

    let mockCode = `// Generated Code block based on prompt spec\n`;
    mockCode += `// Campaign Theme: ${currentCampaign.name}\n`;
    mockCode += `// Role: ${sandboxRole}\n`;
    mockCode += `// Task: ${sandboxTask}\n\n`;

    if (sandboxTask.toLowerCase().includes('database') || sandboxTask.toLowerCase().includes('connect') || sandboxTask.toLowerCase().includes('crud')) {
      const handlesConnection = sandboxConstraints.toLowerCase().includes('connect') || sandboxConstraints.toLowerCase().includes('connection') || sandboxConstraints.toLowerCase().includes('credentials') || sandboxConstraints.toLowerCase().includes('delay');
      if (handlesConnection) {
        mockCode += `// Secure Cloud Database Connection\nimport { createClient } from '@supabase/supabase-js';\n\nconst dbUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mock-db.supabase.co';\nconst dbKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';\n\nexport const db = createClient(dbUrl, dbKey);\n\nexport async function syncData(tableName, payload) {\n  if (!payload || Object.keys(payload).length === 0) {\n    throw new Error("Validation Error: Cannot insert empty records.");\n  }\n  \n  const { data, error } = await db\n    .from(tableName)\n    .insert([payload]);\n    \n  if (error) {\n    console.error("Database connection failure:", error.message);\n    throw error;\n  }\n  return data;\n}`;
      } else {
        mockCode += `// Buggy Connection (No error handling, assumes direct socket open)\nimport { createClient } from '@supabase/supabase-js';\n\n// Bad practice: hardcoded defaults!\nexport const db = createClient('http://localhost:54321', 'direct_development_key_123');\n\nexport async function syncData(tableName, payload) {\n  // Missing empty check and try-catch!\n  const { data } = await db.from(tableName).insert([payload]);\n  return data;\n}`;
      }
    } else if (sandboxTask.toLowerCase().includes('env') || sandboxTask.toLowerCase().includes('environment') || sandboxTask.toLowerCase().includes('gitignore') || sandboxTask.toLowerCase().includes('variables')) {
      const preventsHardcoding = sandboxConstraints.toLowerCase().includes('hardcoded') || sandboxConstraints.toLowerCase().includes('prevent') || sandboxConstraints.toLowerCase().includes('gitignore') || sandboxConstraints.toLowerCase().includes('existence');
      if (preventsHardcoding) {
        mockCode += `// Secure Environment Variables Validation\nconst DB_PASSWORD = import.meta.env.VITE_DATABASE_PASSWORD;\nconst API_KEY = import.meta.env.VITE_API_KEY;\n\n// Scan check against hardcoding\nif (DB_PASSWORD === 'production_secret_key_12345') {\n  throw new Error("SECURITY BREACH: Raw password detected in source control!");\n}\n\nexport function initializeSecrets() {\n  if (!DB_PASSWORD || !API_KEY) {\n    console.warn("Falling back to local offline sandbox. Missing env configuration keys.");\n    return { status: "fallback", loaded: false };\n  }\n  console.log("✓ Environment configurations validated successfully.");\n  return { status: "active", loaded: true };\n}`;
      } else {
        mockCode += `// Hardcoded Configuration (API Secret Exposed!)\nexport const config = {\n  DB_URL: 'https://production-db.company.com',\n  API_KEY: 'production_secret_key_12345', // Hardcoded plaintext vulnerability!\n  status: 'active'\n};`;
      }
    } else if (sandboxTask.toLowerCase().includes('security') || sandboxTask.toLowerCase().includes('rls') || sandboxTask.toLowerCase().includes('row-level') || sandboxTask.toLowerCase().includes('isolation')) {
      const securesRls = sandboxConstraints.toLowerCase().includes('uid') || sandboxConstraints.toLowerCase().includes('auth.uid()') || sandboxConstraints.toLowerCase().includes('user_id') || sandboxConstraints.toLowerCase().includes('isolation');
      if (securesRls) {
        mockCode += `/* SQL Row-Level Security Configuration Wards */\nALTER TABLE public.user_records ENABLE ROW LEVEL SECURITY;\n\n-- RLS Policies\nCREATE POLICY "Allow read only by record owner" ON public.user_records\n  FOR SELECT\n  USING (auth.uid() = user_id);\n\nCREATE POLICY "Allow insert only by creator" ON public.user_records\n  FOR INSERT\n  WITH CHECK (auth.uid() = user_id);\n\nCREATE POLICY "Allow update only by creator" ON public.user_records\n  FOR UPDATE\n  USING (auth.uid() = user_id);`;
      } else {
        mockCode += `/* Vulnerable Database Schema (RLS Disabled) */\nALTER TABLE public.user_records DISABLE ROW LEVEL SECURITY;\n\n-- Direct select allows anyone to query all rows\nCREATE POLICY "Public full access" ON public.user_records\n  FOR ALL\n  USING (true);`;
      }
    } else {
      mockCode += `function executeCustomLogic(input) {\n  // General template output\n  const data = input || {};\n  console.log("Executing task: ${sandboxTask}");\n  return { status: "success", data };\n}`;
    }

    setSandboxCodeOutput(mockCode);
    setChaosLogs([]);
    setSandboxSuccess(false);
  };

  // Run the simulated Chaos Monkey testing suite
  const runChaosMonkey = () => {
    if (!sandboxCodeOutput) return;

    setIsRunningChaos(true);
    setChaosLogs([
      { type: 'info', text: 'Initializing Chaos Monkey simulation engine...' },
      { type: 'info', text: 'Spawning target sandbox container...' }
    ]);

    let step = 0;
    const isDatabase = sandboxTask.toLowerCase().includes('database') || sandboxTask.toLowerCase().includes('connect') || sandboxTask.toLowerCase().includes('crud');
    const isEnvKeys = sandboxTask.toLowerCase().includes('env') || sandboxTask.toLowerCase().includes('environment') || sandboxTask.toLowerCase().includes('gitignore') || sandboxTask.toLowerCase().includes('variables');
    const isRls = sandboxTask.toLowerCase().includes('security') || sandboxTask.toLowerCase().includes('rls') || sandboxTask.toLowerCase().includes('row-level') || sandboxTask.toLowerCase().includes('isolation');

    const interval = setInterval(() => {
      step++;
      if (step === 1) {
        setChaosLogs(prev => [...prev, { type: 'info', text: 'Running Test Scenario 1: Standard happy path...' }]);
      } else if (step === 2) {
        setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 1: PASSED. Standard inputs execute successfully.' }]);
      } else if (step === 3) {
        setChaosLogs(prev => [...prev, { type: 'info', text: 'Running Test Scenario 2: Boundary / empty conditions...' }]);
      } else if (step === 4) {
        if (isDatabase) {
          const handlesEmpty = sandboxEdgeCases.toLowerCase().includes('empty') || sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('credentials');
          if (handlesEmpty) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Empty inserts are validated and blocked from database.' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! Empty insert allowed! Database query failed due to NULL constraint violation.' }]);
          }
        } else if (isEnvKeys) {
          const handlesUndefined = sandboxEdgeCases.toLowerCase().includes('undefined') || sandboxEdgeCases.toLowerCase().includes('missing') || sandboxEdgeCases.toLowerCase().includes('secrets');
          if (handlesUndefined) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Fallback to offline mock mode activated when environment keys are absent.' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! System crash! ReferenceError: process is not defined during fallback resolution.' }]);
          }
        } else if (isRls) {
          const handlesAnonymous = sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('anonymous') || sandboxEdgeCases.toLowerCase().includes('cross');
          if (handlesAnonymous) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Anonymous token verified: DB policy successfully returned 0 rows (Access Denied).' }]);
          } else {
            setChaosLogs(prev => [...prev, { type: 'error', text: 'Test 2: FAILED! Security leak! Anonymous database queries returned sensitive rows.' }]);
          }
        } else {
          setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 2: PASSED. Basic validation works.' }]);
        }
      } else if (step === 5) {
        setChaosLogs(prev => [...prev, { type: 'info', text: 'Running Test Scenario 3: Malicious exploits / constraints...' }]);
      } else if (step === 6) {
        if (isDatabase) {
          const handlesConnection = sandboxConstraints.toLowerCase().includes('connect') || sandboxConstraints.toLowerCase().includes('connection') || sandboxConstraints.toLowerCase().includes('credentials') || sandboxConstraints.toLowerCase().includes('delay');
          const handlesEmpty = sandboxEdgeCases.toLowerCase().includes('empty') || sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('credentials');
          if (handlesConnection && handlesEmpty) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Client dynamically retries on latency spike and establishes secure socket connection.' }]);
            setSandboxSuccess(true);
          } else {
            const reason = !handlesConnection ? 'No connection timeout logic! Client hung on server latency spike.' : 'Failed empty insert validation check!';
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: `Test 3: FAILED! ${reason}`
            }]);
            setSandboxSuccess(false);
          }
        } else if (isEnvKeys) {
          const preventsHardcoding = sandboxConstraints.toLowerCase().includes('hardcoded') || sandboxConstraints.toLowerCase().includes('prevent') || sandboxConstraints.toLowerCase().includes('gitignore') || sandboxConstraints.toLowerCase().includes('existence');
          const handlesUndefined = sandboxEdgeCases.toLowerCase().includes('undefined') || sandboxEdgeCases.toLowerCase().includes('missing') || sandboxEdgeCases.toLowerCase().includes('secrets');
          if (preventsHardcoding && handlesUndefined) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Fuzzer scanned build logs: verified zero production secrets are exposed in plaintext.' }]);
            setSandboxSuccess(true);
          } else {
            const reason = !preventsHardcoding ? 'Vulnerability flag! Verified plaintext database credentials committed to code.' : 'Env file parsing crashed on missing key boundary.';
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: `Test 3: FAILED! ${reason}`
            }]);
            setSandboxSuccess(false);
          }
        } else if (isRls) {
          const securesRls = sandboxConstraints.toLowerCase().includes('uid') || sandboxConstraints.toLowerCase().includes('auth.uid()') || sandboxConstraints.toLowerCase().includes('user_id') || sandboxConstraints.toLowerCase().includes('isolation');
          const handlesAnonymous = sandboxEdgeCases.toLowerCase().includes('null') || sandboxEdgeCases.toLowerCase().includes('anonymous') || sandboxEdgeCases.toLowerCase().includes('cross');
          if (securesRls && handlesAnonymous) {
            setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. Cross-tenant test: User B blocked from writing to User A\'s records. Row-Level Security fully active.' }]);
            setSandboxSuccess(true);
          } else {
            const reason = !securesRls ? 'Breach detected! User B successfully updated User A\'s records.' : 'No RLS policies active! Anonymous read bypassed authentication controls.';
            setChaosLogs(prev => [...prev, {
              type: 'error',
              text: `Test 3: FAILED! ${reason}`
            }]);
            setSandboxSuccess(false);
          }
        } else {
          setChaosLogs(prev => [...prev, { type: 'success', text: 'Test 3: PASSED. All custom constraints satisfied.' }]);
          setSandboxSuccess(true);
        }
        
        setIsRunningChaos(false);
        clearInterval(interval);
      }
    }, 1200);
  };

  // Claim points for cases/sessions
  const claimCaseEvidence = (sessionId, xpValue) => {
    if (solvedCases[sessionId]) return;
    if (isQuestLocked(sessionId)) return;

    // Persist completed quest and reward to local MySQL DB
    fetch('/api/user/quests', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ questId: sessionId, xpReward: xpValue })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setSolvedCases(prev => ({ ...prev, [sessionId]: true }));
        setPoints(data.activePoints);
      }
    })
    .catch(err => {
      console.warn("DB save failed, falling back to local memory updates:", err.message);
      setSolvedCases(prev => ({ ...prev, [sessionId]: true }));
      setPoints(prev => prev + xpValue);
    });

    const sessionDetails = activeLevelSessions.find(s => s.id === sessionId) || CURRICULUM_DATA.find(s => s.id === sessionId);

    // Only auto-log a journal entry the first time this session is claimed. Without this
    // guard, re-completing a session's exercises (or a student who already has a proper
    // "Initialize Project Journal" entry for it) creates ANOTHER entry with a random id and
    // the raw curriculum title — that stray entry doesn't follow the `${userId}_${sessionId}`
    // convention the Project Journal picker and detail panel rely on, so it can shadow the
    // real entry in the session list and make the session look like it has no journal at all.
    const alreadyLogged = journalEntries.some(j =>
      j.id.endsWith('_' + sessionId) || j.id === sessionId ||
      (sessionDetails && j.title.toLowerCase().includes(sessionDetails.title.toLowerCase()))
    );
    if (alreadyLogged) return;

    const journalId = 'journal_' + Date.now();
    const journalTitle = sessionDetails ? sessionDetails.title : 'New Quest Log';
    const journalPrompt = `ROLE: ${sandboxRole}\nTASK: ${sandboxTask}\nCONSTRAINTS: ${sandboxConstraints}\nINPUTS: ${sandboxInput}\nEDGE CASES: ${sandboxEdgeCases}`;
    const journalCode = sandboxCodeOutput || '// No code output saved.';

    // Save prompt spec to journal in MySQL DB
    fetch('/api/journal', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        id: journalId,
        title: journalTitle,
        prompt: journalPrompt,
        code: journalCode
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Fetch fresh list from server
        fetch('/api/journal', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(list => setJournalEntries(list));
      }
    })
    .catch(err => {
      console.warn("Journal DB save failed, writing to local client state:", err.message);
      const newJournal = {
        id: journalId,
        date: formatBangkokTimestamp(),
        title: journalTitle,
        version: 1,
        activeVersion: 1,
        history: [
          {
            version: 1,
            prompt: journalPrompt,
            code: journalCode
          }
        ]
      };
      setJournalEntries(prev => [newJournal, ...prev]);
    });
  };

  // Single claim authority for exercise-driven XP: whenever exercise progress or the
  // solved map changes, award any session whose exercises are ALL complete, isn't
  // already solved, and isn't blocked by sequential gating. This also retro-claims a
  // session a student finished while it was still locked, once its predecessors are done.
  useEffect(() => {
    if (!currentUser) return;
    for (const [sessionId, done] of Object.entries(exerciseProgress)) {
      const total = EXERCISE_COUNTS[sessionId];
      if (total && done.length >= total && !solvedCases[sessionId] && !isQuestLocked(sessionId)) {
        claimCaseEvidence(sessionId, 100);
        break; // claim one at a time; solvedCases update re-runs this effect for the next
      }
    }
    // isQuestLocked/claimCaseEvidence intentionally omitted: they close over sandbox
    // state that changes every keystroke and are recreated each render, so including
    // them would rerun this effect far more often than the state it actually cares about.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseProgress, solvedCases, currentUser]);

  // Helper to load templates into the sandbox
  const loadTemplate = (session) => {
    setSandboxSessionId(session.id);
    if (session.id === 'l1-s1') {
      setSandboxRole('Junior Systems Analyst');
      setSandboxTask('Explain the hardware, network, and web-technology layers behind the Racing Car Game platform');
      setSandboxConstraints('Keep answers plain-English and precise: name the specific hardware resource, network step, or web technology responsible.');
      setSandboxInput('Plain-English answers and short AI prompts');
      setSandboxEdgeCases('Confusing hardware limits with software bugs, vague prompts that could apply to anything');
      setS1ActiveExercise(1);
      const s1Saved = savedExerciseCode['l1-s1-1'];
      setS1PlanInput(s1Saved?.plan ?? '');
      setS1PromptInput(s1Saved?.prompt ?? '');
      setS1OutputCodeInput(s1Saved?.outputCode ?? '');
      setS1ExplainInput(s1Saved?.explain ?? '');
      setS1Logs([]);
      setS1Success(false);
    } else if (session.id === 'l1-s2') {
      setSandboxRole('Junior HTML Developer');
      setSandboxTask('Assemble HTML elements for the Racing Car Game track and dashboard');
      setSandboxConstraints('Use correct tag elements (div, h2, span) with matching open/close tags and specific id/class attributes.');
      setSandboxInput('HTML source code');
      setSandboxEdgeCases('Unclosed elements, incorrect tag nesting, spelling mistakes in ids');
      setS2ActiveExercise(1);
      const s2Saved = savedExerciseCode['l1-s2-1'];
      setS2PlanInput(s2Saved?.plan ?? '');
      setS2PromptInput(s2Saved?.prompt ?? '');
      setS2OutputCodeInput(s2Saved?.outputCode ?? '');
      setS2ExplainInput(s2Saved?.explain ?? '');
      setS2Logs([]);
      setS2Success(false);
    } else if (session.id === 'l1-s3') {
      setSandboxRole('Junior UI/UX Designer');
      setSandboxTask('Style the Racing Car track lanes and coordinate systems');
      setSandboxConstraints('Apply absolute positioning and layout rules (width, height, background-color, borders) in styles.css.');
      setSandboxInput('CSS styling definitions');
      setSandboxEdgeCases('Missing relative anchor positioning, coordinate boundaries overflow, missing display rules');
      setS3ActiveExercise(1);
      const s3Saved = savedExerciseCode['l1-s3-1'];
      setS3PlanInput(s3Saved?.plan ?? '');
      setS3PromptInput(s3Saved?.prompt ?? '');
      setS3OutputCodeInput(s3Saved?.outputCode ?? '');
      setS3ExplainInput(s3Saved?.explain ?? '');
      setS3Logs([]);
      setS3Success(false);
    } else if (session.id === 'l1-s4') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Declare and update the Racing Car Game state variables');
      setSandboxConstraints('Use let for mutable state, const for fixed limits, and never quote numeric values.');
      setSandboxInput('carX, speed, score, gameActive');
      setSandboxEdgeCases('Quoted numbers causing string concatenation instead of math, wrong initial values');
      setS4ActiveExercise(1);
      const s4Saved = savedExerciseCode['l1-s4-1'];
      setS4PlanInput(s4Saved?.plan ?? '');
      setS4PromptInput(s4Saved?.prompt ?? '');
      setS4OutputCodeInput(s4Saved?.outputCode ?? '');
      setS4ExplainInput(s4Saved?.explain ?? '');
      setS4Logs([]);
      setS4Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s5') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Bind keyboard steering controls to the Racing Car Game');
      setSandboxConstraints('Use window.addEventListener("keydown") and check event.key against exact ArrowLeft/ArrowRight strings.');
      setSandboxInput('event.key, carX');
      setSandboxEdgeCases('Wrong key-string comparisons, missing style unit suffixes');
      setS5ActiveExercise(1);
      const s5Saved = savedExerciseCode['l1-s5-1'];
      setS5PlanInput(s5Saved?.plan ?? '');
      setS5PromptInput(s5Saved?.prompt ?? '');
      setS5OutputCodeInput(s5Saved?.outputCode ?? '');
      setS5ExplainInput(s5Saved?.explain ?? '');
      setS5Logs([]);
      setS5Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s6') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Implement track boundary safety guards for the Racing Car Game');
      setSandboxConstraints('Clamp carX between 35 and 295 (the outer lane positions). For ex 6.3: clamp speed between 0 and 120. For ex 6.4: cap speed at 300 and decay it to 0 on key release using a persistent timer or loop.');
      setSandboxInput('carX, speed');
      setSandboxEdgeCases('Off-by-one boundary errors, string vs. number type mismatches');
      setS6ActiveExercise(1);
      const s6Saved = savedExerciseCode['l1-s6-1'];
      setS6PlanInput(s6Saved?.plan ?? '');
      setS6PromptInput(s6Saved?.prompt ?? '');
      setS6OutputCodeInput(s6Saved?.outputCode ?? '');
      setS6ExplainInput(s6Saved?.explain ?? '');
      setS6Logs([]);
      setS6Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s7') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Generate highway lane markers using a for loop');
      setSandboxConstraints('Loop exactly 5 times, computing markerY = i * 120, and append a marker-dash div per iteration.');
      setSandboxInput('i, markerY');
      setSandboxEdgeCases('Missing loop increment (infinite loop), incorrect spacing formula');
      setS7ActiveExercise(1);
      const s7Saved = savedExerciseCode['l1-s7-1'];
      setS7PlanInput(s7Saved?.plan ?? '');
      setS7PromptInput(s7Saved?.prompt ?? '');
      setS7OutputCodeInput(s7Saved?.outputCode ?? '');
      setS7ExplainInput(s7Saved?.explain ?? '');
      setS7Logs([]);
      setS7Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s8') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Refactor steering logic into modular functions');
      setSandboxConstraints('Declare updatePlayerPosition(), moveLeft(), and moveRight() as single-purpose functions sharing global carX.');
      setSandboxInput('carX');
      setSandboxEdgeCases('Variable scope leaks, duplicate render calls');
      setS8ActiveExercise(1);
      const s8Saved = savedExerciseCode['l1-s8-1'];
      setS8PlanInput(s8Saved?.plan ?? '');
      setS8PromptInput(s8Saved?.prompt ?? '');
      setS8OutputCodeInput(s8Saved?.outputCode ?? '');
      setS8ExplainInput(s8Saved?.explain ?? '');
      setS8Logs([]);
      setS8Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s9') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Build the recursive animation loop for obstacles');
      setSandboxConstraints('Use requestAnimationFrame recursion, gated by a gameActive check, to move and reset the obstacle.');
      setSandboxInput('obstacleY, speed, gameActive');
      setSandboxEdgeCases('Missing gameActive gate causing runaway recursion, missing reset check');
      setS9ActiveExercise(1);
      const s9Saved = savedExerciseCode['l1-s9-1'];
      setS9PlanInput(s9Saved?.plan ?? '');
      setS9PromptInput(s9Saved?.prompt ?? '');
      setS9OutputCodeInput(s9Saved?.outputCode ?? '');
      setS9ExplainInput(s9Saved?.explain ?? '');
      setS9Logs([]);
      setS9Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s10') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Implement AABB collision detection between the car and obstacles');
      setSandboxConstraints('Compare left/right/top/bottom bounds using all 4 AABB conditions.');
      setSandboxInput('rect1, rect2 (x, y, width, height)');
      setSandboxEdgeCases('Flipped comparison operators, swapped X/Y axes, exact-edge touches');
      setS10ActiveExercise(1);
      const s10Saved = savedExerciseCode['l1-s10-1'];
      setS10PlanInput(s10Saved?.plan ?? '');
      setS10PromptInput(s10Saved?.prompt ?? '');
      setS10OutputCodeInput(s10Saved?.outputCode ?? '');
      setS10ExplainInput(s10Saved?.explain ?? '');
      setS10Logs([]);
      setS10Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s11') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Wire game state to the visible HUD and restart flow');
      setSandboxConstraints('Use textContent (not innerHTML) for score updates, and toggle the "hidden" class for the restart panel.');
      setSandboxInput('score, gameActive');
      setSandboxEdgeCases('Negative score values, restart handler forgetting to reset gameActive');
      setS11ActiveExercise(1);
      const s11Saved = savedExerciseCode['l1-s11-1'];
      setS11PlanInput(s11Saved?.plan ?? '');
      setS11PromptInput(s11Saved?.prompt ?? '');
      setS11OutputCodeInput(s11Saved?.outputCode ?? '');
      setS11ExplainInput(s11Saved?.explain ?? '');
      setS11Logs([]);
      setS11Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l1-s12') {
      setSandboxRole('Junior JavaScript Engineer');
      setSandboxTask('Certify the complete Racing Car Game for the Level 1 capstone');
      setSandboxConstraints('Refactor magic numbers into a CONFIG object and pass the final diagnostic sweep.');
      setSandboxInput('CONFIG, carX, speed, score, gameActive');
      setSandboxEdgeCases('Unbounded speed scaling, inconsistent boundary operators, seeded collision bug');
      setS12ActiveExercise(1);
      const s12Saved = savedExerciseCode['l1-s12-1'];
      setS12PlanInput(s12Saved?.plan ?? '');
      setS12PromptInput(s12Saved?.prompt ?? '');
      setS12OutputCodeInput(s12Saved?.outputCode ?? '');
      setS12ExplainInput(s12Saved?.explain ?? '');
      setS12Logs([]);
      setS12Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l4-s1') {
      setSandboxRole('Capstone Game Producer');
      setSandboxTask('Draft the capstone PRD and negotiate a 5-sprint scope contract for your own game concept');
      setSandboxConstraints('Every user story needs testable acceptance criteria, plus explicit MoSCoW priorities and an out-of-scope list.');
      setSandboxInput('coreLoop, userStories, acceptanceCriteria, scopeContract');
      setSandboxEdgeCases('Untestable criteria ("feels fun"), hidden scope monsters (multiplayer, level editor), Must-line overflow beyond 5 sprints');
    } else if (session.id === 'l4-s2') {
      setSandboxRole('Capstone Game Architect');
      setSandboxTask('Design the component architecture, data model, and 5-sprint milestone plan for your own game');
      setSandboxConstraints('Record each stack decision as an ADR (Status, Context, Decision, Consequences); order sprints so no feature depends on data from a later sprint.');
      setSandboxInput('componentDiagram, schema, apiContract, sprintMap');
      setSandboxEdgeCases('Dependency-order errors (e.g. leaderboard sprint before accounts sprint), missing ADR consequences, undemoable sprint boundaries');
    } else if (session.id === 'l4-s5') {
      setSandboxRole('Capstone Game Developer');
      setSandboxTask('Centralize game state into a single source of truth and implement safe menu/playing/paused/game-over transitions');
      setSandboxConstraints('No component may mutate state directly; any operation that can fail (e.g. a save while offline) must optimistically update, then roll back on rejection.');
      setSandboxInput('gameState, oldState, transition(), rollback()');
      setSandboxEdgeCases('Concurrent state updates overwriting a newer value with an older one, failed save requests, rapid pause/resume spamming');
    } else if (session.id === 'l2-s1') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Create a <canvas id="game-canvas"> element sized 480x600, retrieve its 2D context in canvas.js, and draw a red 40x40 player ship rectangle at coordinates (200, 500) using fillStyle and fillRect.');
      setSandboxConstraints('Must call canvas.getContext(\'2d\') before any draw commands; fillStyle must be set before fillRect is called.');
      setSandboxInput('canvas, ctx');
      setSandboxEdgeCases('The draw loop must call ctx.clearRect() before each redraw once a game loop exists, so shapes don\'t leave a solid trail.');
      setL2s1ActiveExercise(1);
      setL2s1CodeInput(savedExerciseCode['l2-s1-1'] ?? L2S1_EXERCISES[0].preloaded);
      setL2s1Logs([]);
      setL2s1Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s2') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Declare a ship object literal with x, y, width, height, and speed properties, then write a moveLeft() function that subtracts ship.speed from ship.x, clears the canvas, and redraws the ship.');
      setSandboxConstraints('ship must be a single object literal, not five separate loose variables; moveLeft() must reference ship.speed instead of a hardcoded number.');
      setSandboxInput('ship { x, y, width, height, speed }');
      setSandboxEdgeCases('A local variable inside the move handler must never be named ship again — that would shadow the global object and silently stop the canvas ship from moving.');
      setL2s2ActiveExercise(1);
      setL2s2CodeInput(savedExerciseCode['l2-s2-1'] ?? L2S2_EXERCISES[0].preloaded);
      setL2s2Logs([]);
      setL2s2Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s3') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Declare an empty lasers array, write a fireLaser() function that pushes a new laser object (positioned at the ship\'s x + 18, moving at speed 8) onto the array when spacebar is pressed, and a loop that draws every laser in the array.');
      setSandboxConstraints('lasers must be initialized as an empty array before any pushes occur; fireLaser() must push a full object literal (not just a coordinate number).');
      setSandboxInput('lasers[], ship.x');
      setSandboxEdgeCases('A single spacebar press must not push duplicate lasers — key-repeat behavior can make the cannon feel like it\'s stuttering or double-firing if not handled.');
      setL2s3ActiveExercise(1);
      setL2s3CodeInput(savedExerciseCode['l2-s3-1'] ?? L2S3_EXERCISES[0].preloaded);
      setL2s3Logs([]);
      setL2s3Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s4') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Update every laser\'s y coordinate by subtracting its speed, then remove any laser whose y drops below 0 using splice(), iterating the array in reverse order.');
      setSandboxConstraints('The loop must iterate from lasers.length - 1 down to 0 (reverse), not forward; splice(i, 1) must be called only after the off-screen check, not unconditionally.');
      setSandboxInput('lasers[]');
      setSandboxEdgeCases('Multiple lasers exiting off-screen on the same frame must all be removed, not just every other one, which is what a forward-splicing loop would incorrectly do.');
      setL2s4ActiveExercise(1);
      setL2s4CodeInput(savedExerciseCode['l2-s4-1'] ?? L2S4_EXERCISES[0].preloaded);
      setL2s4Logs([]);
      setL2s4Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s5') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Build a 3-row by 5-column grid of alien objects (each with x, y, and alive), write a moveSwarm() function that shifts every alien by a shared direction value and bounces the whole grid off the screen edges, and represent a shield as an array of cells where a checkShieldCollision(laser) function computes which cell a laser hit and destroys it.');
      setSandboxConstraints('Store aliens as a nested array (rows of columns), not a flat list; every alien must move using the SAME shared direction value each tick; the shield\'s column-index formula must subtract the shield\'s starting x offset before dividing by cellWidth; a destroyed shield cell is set to 0, never spliced out.');
      setSandboxInput('aliens[][], direction, shield[]');
      setSandboxEdgeCases('An alien exactly at the boundary coordinate must trigger the bounce reliably, not clip past it; a laser hitting an already-destroyed shield cell must have no further effect, and a computed index outside the shield\'s range must not crash or silently pass the check.');
      setL2s5ActiveExercise(1);
      setL2s5CodeInput(savedExerciseCode['l2-s5-1'] ?? L2S5_EXERCISES[0].preloaded);
      setL2s5Logs([]);
      setL2s5Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s6') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Declare a keysPressed object, bind keydown/keyup listeners that toggle each key\'s Boolean state, and write a handleInputs() function called every game-loop tick that moves the ship and fires lasers based on which keys are currently true. Then sweep every laser against every alien in the grid; on overlap, mark the alien\'s alive to false, splice the laser out, add 50 to score, and break out of the inner loop.');
      setSandboxConstraints('Both keydown AND keyup listeners must be bound, not just keydown; handleInputs() must run every game-loop frame. The outer laser loop must iterate backward (safe for mid-loop splicing); break must run immediately after a hit is resolved; only living aliens (alive === true) should ever be checked against a laser.');
      setSandboxInput('keysPressed{}, lasers[], aliens[][]');
      setSandboxEdgeCases('Holding two keys at once must move and fire in the same frame, with firing respecting a cooling interval; a laser passing through a dense cluster of aliens must destroy at most one alien.');
      setL2s6ActiveExercise(1);
      setL2s6CodeInput(savedExerciseCode['l2-s6-1'] ?? L2S6_EXERCISES[0].preloaded);
      setL2s6Logs([]);
      setL2s6Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s7') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Write a checkWaveCompletion() function that counts alive aliens across the grid and, only when that count hits exactly zero, increments wave and calls spawnSwarm(wave) once. Write a drawHUD() function rendering score, wave number, and a health bar. Then refactor the sweep loop so array lengths are cached into local variables before looping instead of re-reading .length every iteration.');
      setSandboxConstraints('checkWaveCompletion() must guard against calling spawnSwarm() more than once per wave clear; the health bar must be drawn as two overlapping rectangles (red background, green foreground sized to current health); aliens.length and each row\'s .length must be cached before the loop starts.');
      setSandboxInput('wave, health, aliens[][]');
      setSandboxEdgeCases('Destroying every alien in a wave must increment wave exactly once, even across several frames that all read zero alive aliens in a row; a 500-laser stress test must hold a stable frame rate rather than degrading.');
      setL2s7ActiveExercise(1);
      setL2s7CodeInput(savedExerciseCode['l2-s7-1'] ?? L2S7_EXERCISES[0].preloaded);
      setL2s7Logs([]);
      setL2s7Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s8') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Ask the AI for a plain-English, numbered walkthrough of what happens between typing a URL and seeing a page (client request, routing, server response, render), in exactly 8 steps — this session produces no game code, it is a comprehension exercise audited against the DevTools Network tab.');
      setSandboxConstraints('Every step must map to something visible in the DevTools Network tab; no step may skip directly from "client" to "page loads" without naming the request/response round trip.');
      setSandboxInput('captured request/response pair (URL, method, status, payload)');
      setSandboxEdgeCases('A 404 response must be explained as a successful conversation with a "no" answer, not confused with a dropped/offline connection.');
      setL2s8ActiveExercise(1);
      setL2s8CodeInput(savedExerciseCode['l2-s8-1'] ?? L2S8_EXERCISES[0].preloaded);
      setL2s8Logs([]);
      setL2s8Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s9') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Write an async function fetchLeaderboard() that awaits a fetch() call to a leaderboard endpoint, awaits parsing the JSON response, logs the result, and wraps both awaits in a try/catch that logs a friendly error on failure.');
      setSandboxConstraints('The function must be declared with the async keyword before it uses any await; both the fetch() call and the .json() parse must be individually awaited.');
      setSandboxInput('leaderboard endpoint URL');
      setSandboxEdgeCases('A broken or unreachable endpoint must be caught by the try/catch block and logged, not left to throw an uncaught exception.');
      setL2s9ActiveExercise(1);
      setL2s9CodeInput(savedExerciseCode['l2-s9-1'] ?? L2S9_EXERCISES[0].preloaded);
      setL2s9Logs([]);
      setL2s9Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s10') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Write an async function submitScore(player, val) that POSTs a JSON body { player, score: val } to a scores endpoint with a Content-Type: application/json header, checks res.ok and throws if the submission failed, and catches/logs any network error.');
      setSandboxConstraints('The fetch options object must set method: "POST" and a Content-Type: application/json header; the request body must be passed through JSON.stringify() rather than a raw object.');
      setSandboxInput('player, score');
      setSandboxEdgeCases('An unreachable endpoint must be caught and logged as a warning instead of crashing the game; a malformed or oversized payload\'s error status must be surfaced, not swallowed.');
      setL2s10ActiveExercise(1);
      setL2s10CodeInput(savedExerciseCode['l2-s10-1'] ?? L2S10_EXERCISES[0].preloaded);
      setL2s10Logs([]);
      setL2s10Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s11') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Create a colonist_scores table (id, player, score, wave_reached) with a primary key, insert two sample rows, then write a SELECT query filtering score > 4000 and ordering by score descending in the browser-based SQL playground.');
      setSandboxConstraints('Must declare id INT PRIMARY KEY; every UPDATE/DELETE must include a WHERE clause targeting a specific id, never applied to the whole table.');
      setSandboxInput('colonist_scores(id, player, score, wave_reached)');
      setSandboxEdgeCases('Running the query on an empty table must return zero rows without erroring; an UPDATE with no WHERE clause must be flagged before running.');
      setL2s11ActiveExercise(1);
      setL2s11CodeInput(savedExerciseCode['l2-s11-1'] ?? L2S11_EXERCISES[0].preloaded);
      setL2s11Logs([]);
      setL2s11Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s12') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Given a concatenated SQL login query, identify why it is vulnerable to injection and rewrite it as a parameterized query, plus write a validation rule rejecting a score outside 0-1,000,000 before it reaches the database.');
      setSandboxConstraints('The rewritten query must use a placeholder (?), never string concatenation; the validation rule must reject out-of-range or non-numeric scores before they reach the query.');
      setSandboxInput('userInput, score');
      setSandboxEdgeCases('The hostile input \' OR \'1\'=\'1 must fail harmlessly against the parameterized version; a negative or non-numeric score must be rejected by the validation rule before it reaches the database.');
      setL2s12ActiveExercise(1);
      setL2s12CodeInput(savedExerciseCode['l2-s12-1'] ?? L2S12_EXERCISES[0].preloaded);
      setL2s12Logs([]);
      setL2s12Success(false);
      setSimConsoleLogs([]);
    } else if (session.id === 'l2-s13') {
      setSandboxRole('Colony Defense Systems Engineer');
      setSandboxTask('Compile your full Mars Colony Defense codebase (canvas init, sprites, input matrix, collision sweeps, async leaderboard, SQL queries) into one working build, and prepare to explain each module\'s role to the tutor without notes.');
      setSandboxConstraints('Every module (rendering, input, collision, API, database) must be independently explainable; no leftover console.log debug statements or dead variables from earlier sessions should remain in the final build.');
      setSandboxInput('full Level 2 codebase');
      setSandboxEdgeCases('The seeded diagnostic bug (an async handler, splice statement, or SQL issue) must be patched within the time limit, and at least 2 code design choices must be defended under tutor questioning.');
      setL2s13ActiveExercise(1);
      setL2s13CodeInput(savedExerciseCode['l2-s13-1'] ?? L2S13_EXERCISES[0].preloaded);
      setL2s13Logs([]);
      setL2s13Success(false);
      setSimConsoleLogs([]);
    } else {
      // Dynamic loading from CURRICULUM_DATA for all other sessions (L3/L4)
      setSandboxRole(session.level === 1 ? 'Logic Blueprint Architect' : session.level === 3 ? 'System Architect' : 'Software Engineer');
      setSandboxTask(session.handsOn || session.title);
      setSandboxConstraints(session.objectives ? session.objectives.join(' ') : 'Zero code edits. Verify boundaries.');
      setSandboxInput('inputVars');
      setSandboxEdgeCases('Null parameters, empty lists, unexpected data formats');
    }
    setSandboxCodeOutput(null);
    setChaosLogs([]);
    setSandboxSuccess(false);
  };

  const selectedJournal = journalEntries.find(j => j.id === selectedJournalId) || journalEntries[0];
  const activeJournalHistory = selectedJournal ? selectedJournal.history.find(h => h.version === activeJournalVersion) : null;

  // Sync editing journal text with database value
  useEffect(() => {
    if (activeJournalHistory) {
      const data = deserializeJournalData(activeJournalHistory.code);
      setEditingPlanVision(data.planVision);
      setEditingPlanSpecs(data.planSpecs);
      setEditingPlanFlow(data.planFlow);
      setEditingCodePrompt(activeJournalHistory.prompt || '');
      setEditingCodeOutput(data.codeOutput);
      setEditingCodeReview(data.codeReview);
      setEditingTestCases(data.testCases);
      setEditingTestResults(data.testResults);
      setEditingIterationChanges(data.iterationChanges || '');
      setEditingIterationLessons(data.iterationLessons || '');
    } else {
      setEditingPlanVision('');
      setEditingPlanSpecs('');
      setEditingPlanFlow('');
      setEditingCodePrompt('');
      setEditingCodeOutput('');
      setEditingCodeReview('');
      setEditingTestCases('');
      setEditingTestResults('');
      setEditingIterationChanges('');
      setEditingIterationLessons('');
    }
  }, [selectedJournalId, activeJournalVersion, activeJournalHistory]);

  const handleSaveJournalCode = () => {
    if (!selectedJournalId || !activeJournalVersion || !activeJournalHistory) return;
    const serializedCode = serializeJournalData(
      editingPlanVision,
      editingPlanSpecs,
      editingPlanFlow,
      editingCodeOutput,
      editingCodeReview,
      editingTestCases,
      editingTestResults,
      editingIterationChanges,
      editingIterationLessons
    );
    fetch('/api/journal/version', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        entryId: selectedJournalId,
        version: activeJournalVersion,
        prompt: editingCodePrompt,
        code: serializedCode
      })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to save journal"); });
        return res.json();
      })
      .then(() => {
        fetch('/api/journal', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(data => {
            setJournalEntries(data);
            alert("Journal version saved successfully!");
          });
      })
      .catch(err => {
        console.error("Save journal failed:", err.message);
        alert("Save journal failed: " + err.message);
      });
  };

  const handleAddNewJournalVersion = () => {
    if (!selectedJournalId || !activeJournalHistory) return;
    const serializedCode = serializeJournalData(
      editingPlanVision,
      editingPlanSpecs,
      editingPlanFlow,
      editingCodeOutput,
      editingCodeReview,
      editingTestCases,
      editingTestResults,
      editingIterationChanges,
      editingIterationLessons
    );
    fetch('/api/journal/version', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        entryId: selectedJournalId,
        prompt: editingCodePrompt,
        code: serializedCode
      })
    })
      .then(res => {
        if (!res.ok) return res.json().then(d => { throw new Error(d.error || "Failed to create version"); });
        return res.json();
      })
      .then(data => {
        fetch('/api/journal', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(list => {
            setJournalEntries(list);
            setActiveJournalVersion(data.nextVersion);
            alert("New version created successfully!");
          });
      })
      .catch(err => {
        console.error("Failed to create version:", err.message);
        alert("Failed to create version: " + err.message);
      });
  };

  if (!token) {
    return (
      <div className="login-outer-container">
        <div className="login-card glass-panel animate-in">
          <div className="login-logo">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <h1 className="login-title">DETECTIVE HUB</h1>
            <p className="login-subtitle">AI-Era Computer Curriculum Portal</p>
          </div>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username / Control Number</label>
              <input
                id="username"
                type="text"
                className="login-input"
                placeholder="e.g. somboon"
                value={loginUsername}
                onChange={e => setLoginUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Security Access Key</label>
              <input
                id="password"
                type="password"
                className="login-input"
                placeholder="••••••••"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                required
              />
            </div>
            
            {loginError && <div className="login-error">{loginError}</div>}
            
            <button type="submit" className="btn-cyber login-btn">
              Authenticate Profile
            </button>
          </form>
        </div>
      </div>
    );
  }

  const accountName = currentUser ? (currentUser.name || currentUser.username) : 'Detective Me';
  const displayRole = currentUser ? (currentUser.role === 'teacher' ? 'Teacher' : currentUser.role === 'parent' ? 'Parent' : 'Student') : 'Novice';

  return (
    <div className="cyber-container">
      {/* Sidebar navigation */}
      <aside className={`sidebar ${sidebarOpen ? '' : 'sidebar-hidden'}`}>
        <div className="logo-section">
          <svg className="logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span className="logo-text">DETECTIVE HUB</span>
        </div>

        <nav className="sidebar-nav" onClick={() => { if (window.innerWidth <= 900) setSidebarOpen(false); }}>
          {currentUser && currentUser.role !== 'parent' && (
            <>
              <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
                <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"></path>
                </svg>
                Dashboard
              </button>

              <button className={`nav-item ${activeTab === 'cases' ? 'active' : ''}`} onClick={() => setActiveTab('cases')}>
                <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Quest Board
              </button>

              <button className={`nav-item ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => setActiveTab('curriculum')}>
                <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Curriculum Syllabus Catalog
              </button>

              <button className={`nav-item ${activeTab === 'sandbox' ? 'active' : ''}`} onClick={() => setActiveTab('sandbox')}>
                <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                Exercises Journal
              </button>

              <button className={`nav-item ${activeTab === 'journal' ? 'active' : ''}`} onClick={() => setActiveTab('journal')}>
                <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Project Journal
              </button>

              <button className={`nav-item ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>
                <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Leaderboard
              </button>
            </>
          )}

          {currentUser && (currentUser.role === 'teacher' || currentUser.role === 'parent') && (
            <button className={`nav-item ${activeTab === 'studentReport' ? 'active' : ''}`} onClick={() => setActiveTab('studentReport')} style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', borderRadius: 0, paddingTop: 16 }}>
              <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h3m-7 4h11a2 2 0 002-2V7.414a1 1 0 00-.293-.707l-3.414-3.414A1 1 0 0013.586 3H6a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              Student Report
            </button>
          )}

          {currentUser && currentUser.role === 'teacher' && (
            <button className={`nav-item ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')} style={{ borderRadius: 0 }}>
              <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Admin Panel
            </button>
          )}

          <button className="nav-item btn-cyber-red" onClick={handleLogout} style={{ borderTop: '1px solid var(--border-color)', borderRadius: 0, padding: 12, display: 'flex', gap: 10, width: '100%', cursor: 'pointer', background: 'transparent', textAlign: 'left', font: 'inherit', color: 'var(--accent-red)' }}>
            <svg className="nav-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Log Out
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="avatar"></div>
          <div className="user-info">
            <div className="username">{accountName}</div>
            <div className="rank">{displayRole} &bull; {rank.title}</div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile overlay sidebar */}
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <div className="header-title">
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(prev => !prev)}
              aria-label={sidebarOpen ? 'Hide navigation menu' : 'Show navigation menu'}
              title={sidebarOpen ? 'Hide menu' : 'Show menu'}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <h1>
              {activeTab === 'dashboard' && 'Operations Dashboard'}
              {activeTab === 'cases' && 'Quest Board'}
              {activeTab === 'curriculum' && 'Curriculum Syllabus Catalog'}
              {activeTab === 'sandbox' && 'Exercises Journal'}
              {activeTab === 'journal' && 'Project Journal'}
              {activeTab === 'leaderboard' && 'Active Decoders'}
              {activeTab === 'studentReport' && 'Student Report'}
              {activeTab === 'admin' && 'Admin Settings Console'}
            </h1>
          </div>
          <div className="header-stats">
            <div className="stat-pill">
              <span>Theme:</span>
              <span className="stat-pill-value" style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{currentCampaign.name}</span>
            </div>
            <div className="stat-pill">
              <span>XP Score:</span>
              <span className="stat-pill-value">{points} XP</span>
            </div>
            <div className="stat-pill">
              <span>Rank Up:</span>
              <div className="xp-progress">
                <div className="xp-bar" style={{ width: `${xpPercent}%` }}></div>
              </div>
            </div>
          </div>
        </header>

        <div className="content-body" style={{ padding: ['sandbox', 'journal'].includes(activeTab) ? '12px' : '32px' }}>
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <div className="tab-dashboard animate-in">
              <div className="dashboard-grid">
                <div className="glass-panel stat-card">
                  <div className="stat-card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div className="stat-card-info">
                    <span className="stat-card-title">Completed Quests</span>
                    <span className="stat-card-value">
                      {Object.keys(solvedCases).length} Solved
                    </span>
                  </div>
                </div>

                <div className="glass-panel stat-card green">
                  <div className="stat-card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="stat-card-info">
                    <span className="stat-card-title">Total XP Earned</span>
                    <span className="stat-card-value">{points} XP</span>
                  </div>
                </div>

                <div className="glass-panel stat-card purple">
                  <div className="stat-card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <div className="stat-card-info">
                    <span className="stat-card-title">Rank Stage</span>
                    <span className="stat-card-value">{rank.title}</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-row">
                <div className="glass-panel">
                  <div className="panel-header">
                    <h3>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 20, height: 20}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                      Active Campaign Main Quest
                    </h3>
                    <button className="btn-cyber btn-cyber-primary" onClick={() => setActiveTab('cases')}>Open Quest Board</button>
                  </div>
                  <div className="panel-body">
                    <div className="active-case-detail">
                      <div className="active-case-name" style={{ color: 'var(--accent-purple)' }}>Level {selectedLevel} Overarching Target:</div>
                      <div className="active-case-name">{activeMainQuest}</div>
                      <div className="active-case-desc" style={{ marginTop: 12 }}>
                        Current active operation: <strong>{selectedSession.title}</strong>. Launch the exercise code compiler to start building logic structures for this quest!
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel">
                  <div className="panel-header">
                    <h3>Recent Operations Feed</h3>
                  </div>
                  <div className="panel-body">
                    <div className="intel-feed">
                      <div className="feed-item">
                        <span className="feed-time">20:15</span>
                        <div className="feed-message">
                          Evidence submitted: <strong>Grid Variable Classification</strong> (+100 XP)
                        </div>
                      </div>
                      <div className="feed-item">
                        <span className="feed-time">19:42</span>
                        <div className="feed-message">
                          Prompt spec revised: <strong>Project Kickoff & Roadmap</strong> (v2 created)
                        </div>
                      </div>
                      <div className="feed-item">
                        <span className="feed-time">Yesterday</span>
                        <div className="feed-message">
                          Rank Promoted to <strong>Junior Investigator</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quest Board / Cases View */}
          {activeTab === 'cases' && (
            <div className="tab-cases animate-in">
              <div className="level-selector">
                <button 
                  className={`level-tab ${selectedLevel === 1 ? 'active' : ''} ${isLevelDisabled(1) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(1); setSelectedSessionId('l1-s1'); }}
                  disabled={isLevelDisabled(1)}
                >
                  {isLevelDisabled(1) && '🔒 '}Level 1: Logic
                </button>
                <button 
                  className={`level-tab ${selectedLevel === 2 ? 'active' : ''} ${isLevelDisabled(2) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(2); setSelectedSessionId('l2-s5'); }}
                  disabled={isLevelDisabled(2)}
                >
                  {isLevelDisabled(2) && '🔒 '}Level 2: AI Copilot
                </button>
                <button 
                  className={`level-tab ${selectedLevel === 3 ? 'active' : ''} ${isLevelDisabled(3) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(3); setSelectedSessionId('l3-s1'); }}
                  disabled={isLevelDisabled(3)}
                >
                  {isLevelDisabled(3) && '🔒 '}Level 3: Architect
                </button>
                <button 
                  className={`level-tab ${selectedLevel === 4 ? 'active' : ''} ${isLevelDisabled(4) ? 'disabled-tab' : ''}`} 
                  onClick={() => { setSelectedLevel(4); setSelectedSessionId('l4-s1'); }}
                  disabled={isLevelDisabled(4)}
                >
                  {isLevelDisabled(4) && '🔒 '}Level 4: Engineer
                </button>
              </div>

              {/* Display level main quest overarching target */}
              <div className="glass-panel" style={{ padding: 16, marginBottom: 24, borderLeft: '4px solid var(--accent-cyan)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Level Main Quest Target:</span>
                <p style={{ margin: '4px 0 0 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{activeMainQuest}</p>
              </div>

              <div className="session-list-layout">
                {/* Session list side panel */}
                <div className="sessions-sidebar-list">
                  <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Active Coding Missions</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Playable Exercise Quests Only</div>
                  </div>
                  {activeLevelSessions.map(session => (
                    <div
                      key={session.id}
                      className={`glass-panel session-card ${selectedSessionId === session.id ? 'selected' : ''}`}
                      onClick={() => setSelectedSessionId(session.id)}
                    >
                      <div className="session-card-header">
                        <span className="session-num">QUEST</span>
                        {solvedCases[session.id] ? (
                          <span className="badge-cyber badge-green">COMPLETED</span>
                        ) : isQuestLocked(session.id) ? (
                          <span className="badge-cyber badge-red">🔒 LOCKED</span>
                        ) : (
                          <span className="badge-cyber badge-cyan">ACTIVE</span>
                        )}
                      </div>
                      <div className="session-card-title">{session.title}</div>
                    </div>
                  ))}
                </div>

                {/* Session details main display */}
                <div className="glass-panel session-detail-view">
                  <div className="detail-header">
                    <div className="detail-header-left">
                      <h2>{selectedSession.title}</h2>
                      <span className="badge-cyber badge-cyan">{selectedSession.xp} XP Sub-Quest</span>
                    </div>
                    <div className="detail-header-right">
                      <button className="btn-cyber btn-cyber-primary" onClick={() => { loadTemplate(selectedSession); setActiveTab('sandbox'); }}>
                        Open Exercise
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4>Quest Objective</h4>
                    <div className="detail-section-body">{selectedSession.objective}</div>
                  </div>

                  {(() => {
                    const academicSession = CURRICULUM_DATA.find(s => s.id === selectedSession.id);
                    if (academicSession) {
                      return (
                        <div className="detail-section academic-match-box" style={{ borderLeft: '3px solid var(--accent-purple)', paddingLeft: 12, marginTop: 16 }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Academic Concept Link:</span>
                          <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                            <strong>Core Concept:</strong> {academicSession.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}
                          </p>
                          <ul style={{ margin: '8px 0 0 0', paddingLeft: 16, fontSize: '0.85rem', color: 'var(--text-secondary)', listStyleType: 'disc' }}>
                            {academicSession.objectives.slice(0, 2).map((obj, idx) => (
                              <li key={idx} style={{ marginBottom: 4 }}>{obj}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  <div className="detail-section">
                    <h4>⚔️ Class Mission (In-Session Quest)</h4>
                    <div className="detail-section-body">{selectedSession.activity}</div>
                  </div>                  <div className="detail-section">
                    <h4>📝 Intel Delivery (Practice at Home Task)</h4>
                    <div className="detail-section-body homework-box">
                      <h5>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        Practice at Home Task
                      </h5>
                      <p>{selectedSession.homework}</p>
                    </div>
                  </div>
                  {!solvedCases[selectedSession.id] && (
                    <div style={{ marginTop: 32, borderTop: '1px solid var(--border-color)', paddingTop: 20, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 12 }}>
                      {isQuestLocked(selectedSession.id) ? (
                        <span style={{ color: 'var(--accent-red)', fontSize: '0.85rem' }}>🔒 Complete the earlier quests in this level first to unlock this one.</span>
                      ) : EXERCISE_COUNTS[selectedSession.id] ? (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textAlign: 'right' }}>
                          Pass all {EXERCISE_COUNTS[selectedSession.id]} sandbox exercises to earn +{selectedSession.xp} XP automatically
                          {' '}({(exerciseProgress[selectedSession.id] || []).length}/{EXERCISE_COUNTS[selectedSession.id]} done). Use “Open Exercise” above to continue.
                        </span>
                      ) : (
                        <button className="btn-cyber btn-cyber-green" onClick={() => claimCaseEvidence(selectedSession.id, selectedSession.xp)}>
                          Deliver Quest Evidence (+{selectedSession.xp} XP)
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Guide View */}
          {activeTab === 'curriculum' && (
            <div className="tab-curriculum animate-in">
              <div className="curriculum-top-bar">
                <div className="level-selector">
                  <button 
                    className={`level-tab ${curriculumLevel === 1 ? 'active' : ''} ${isLevelDisabled(1) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(1); setCurriculumSessionId('l1-s1'); }}
                    disabled={isLevelDisabled(1)}
                  >
                    {isLevelDisabled(1) && '🔒 '}Level 1: Foundations
                  </button>
                  <button 
                    className={`level-tab ${curriculumLevel === 2 ? 'active' : ''} ${isLevelDisabled(2) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(2); setCurriculumSessionId('l2-s1'); }}
                    disabled={isLevelDisabled(2)}
                  >
                    {isLevelDisabled(2) && '🔒 '}Level 2: AI & Language
                  </button>
                  <button 
                    className={`level-tab ${curriculumLevel === 3 ? 'active' : ''} ${isLevelDisabled(3) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(3); setCurriculumSessionId('l3-s1'); }}
                    disabled={isLevelDisabled(3)}
                  >
                    {isLevelDisabled(3) && '🔒 '}Level 3: Architecture
                  </button>
                  <button 
                    className={`level-tab ${curriculumLevel === 4 ? 'active' : ''} ${isLevelDisabled(4) ? 'disabled-tab' : ''}`} 
                    onClick={() => { setCurriculumLevel(4); setCurriculumSessionId('l4-s1'); }}
                    disabled={isLevelDisabled(4)}
                  >
                    {isLevelDisabled(4) && '🔒 '}Level 4: Engineering
                  </button>
                </div>
                
                <div className="curriculum-search-mode-container">
                  <div className="search-box-container">
                    <input 
                      type="text" 
                      placeholder="Search topics, activities, concepts..." 
                      value={curriculumSearchQuery}
                      onChange={(e) => setCurriculumSearchQuery(e.target.value)}
                      className="curriculum-search-input"
                    />
                    {curriculumSearchQuery && (
                      <button className="clear-search-btn" onClick={() => setCurriculumSearchQuery('')}>×</button>
                    )}
                  </div>

                  <div className="perspective-toggle-container">
                    <span className={`toggle-label ${!isTeacherMode ? 'active' : ''}`}>Student Mode</span>
                    <button 
                      className={`toggle-switch-btn ${isTeacherMode ? 'teacher' : 'student'}`}
                      onClick={() => setIsTeacherMode(prev => !prev)}
                    >
                      <div className="toggle-slider"></div>
                    </button>
                    <span className={`toggle-label ${isTeacherMode ? 'active' : ''}`}>Teacher Mode</span>
                  </div>
                </div>
              </div>

              <div className="curriculum-layout" style={{ display: 'grid', gridTemplateColumns: showCurriculumSidebar ? '0.8fr 2fr' : '1fr', gap: '20px', height: 'calc(100vh - 200px)' }}>
                {/* Left panel: List of sessions */}
                {showCurriculumSidebar && (
                  <div className="curriculum-sidebar-list" style={{ width: '100%', overflowY: 'auto' }}>
                    <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Curriculum Syllabus</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Full 12-Lesson Course Catalog</div>
                    </div>
                    {(() => {
                      const filteredData = CURRICULUM_DATA.filter(s => {
                        const levelMatches = s.level === curriculumLevel || curriculumSearchQuery.trim() !== '';
                        if (!levelMatches) return false;
                        
                        if (curriculumSearchQuery.trim() !== '') {
                          const q = curriculumSearchQuery.toLowerCase();
                          return (
                            s.title.toLowerCase().includes(q) ||
                            s.module.toLowerCase().includes(q) ||
                            s.warmUp.toLowerCase().includes(q) ||
                            s.miniLesson.toLowerCase().includes(q) ||
                            s.coreActivity.toLowerCase().includes(q) ||
                            s.handsOn.toLowerCase().includes(q) ||
                            s.homework.toLowerCase().includes(q) ||
                            s.objectives.some(o => o.toLowerCase().includes(q))
                          );
                        }
                        return true;
                      });

                      // Group by module
                      const modulesMap = {};
                      filteredData.forEach(s => {
                        if (!modulesMap[s.module]) {
                          modulesMap[s.module] = [];
                        }
                        modulesMap[s.module].push(s);
                      });

                      if (Object.keys(modulesMap).length === 0) {
                        return (
                          <div style={{ padding: 16, color: 'var(--text-muted)', textAlign: 'center' }}>
                            No sessions found matching "{curriculumSearchQuery}"
                          </div>
                        );
                      }

                      return Object.entries(modulesMap).map(([moduleName, sessions]) => (
                        <div key={moduleName} className="curriculum-module-group">
                          <div className="curriculum-module-header">{moduleName}</div>
                          {sessions.map(s => {
                            const isSelected = curriculumSessionId === s.id;
                            return (
                              <div 
                                key={s.id}
                                className={`glass-panel curriculum-session-card ${isSelected ? 'selected' : ''}`}
                                onClick={() => setCurriculumSessionId(s.id)}
                              >
                                <div className="session-card-header">
                                  <span className="session-id-badge">L{s.level} S{s.id.split('-s')[1]}</span>
                                </div>
                                <div className="session-card-title">{s.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}</div>
                              </div>
                            );
                          })}
                        </div>
                      ));
                    })()}
                  </div>
                )}

                {/* Right panel: Details view */}
                {(() => {
                  const currentSession = CURRICULUM_DATA.find(s => s.id === curriculumSessionId);
                  if (!currentSession) {
                    return (
                      <div className="glass-panel curriculum-detail-view empty" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ alignSelf: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '15px', width: '100%' }}>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small"
                            onClick={() => setShowCurriculumSidebar(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showCurriculumSidebar ? 'Hide Syllabus Sidebar' : 'Show Syllabus Sidebar'}
                          </button>
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          Select a session from the list to view teaching topics and content.
                        </div>
                      </div>
                    );
                  }
                  
                  const activeCampaignSessions = CAMPAIGN_THEMES[campaignId].levels[curriculumLevel]?.sessions || [];
                  const campaignSessionMatch = activeCampaignSessions.find(s => s.id === currentSession.id);
                  const displayHomework = campaignSessionMatch ? campaignSessionMatch.homework : currentSession.homework;
                  const displayActivity = campaignSessionMatch ? campaignSessionMatch.activity : currentSession.coreActivity;
                  const displayTitle = campaignSessionMatch ? campaignSessionMatch.title : currentSession.title;
                  return (
                    <div className="glass-panel curriculum-detail-view animate-in">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                        <button 
                          className="btn-cyber btn-cyber-secondary btn-small"
                          onClick={() => setShowCurriculumSidebar(prev => !prev)}
                          style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                        >
                          {showCurriculumSidebar ? 'Hide Syllabus Sidebar' : 'Show Syllabus Sidebar'}
                        </button>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button 
                            className={`btn-cyber btn-small ${curriculumDetailTab === 'plan' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                            onClick={() => setCurriculumDetailTab('plan')}
                            style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                          >
                            Session Plan
                          </button>
                          <button 
                            className={`btn-cyber btn-small ${curriculumDetailTab === 'reference' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                            onClick={() => setCurriculumDetailTab('reference')}
                            style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                          >
                            Concept Reference
                          </button>
                        </div>
                      </div>
                      <div className="detail-header">
                        <div className="detail-header-left">
                          <span className="detail-module-path">{currentSession.module}</span>
                          <h2>{displayTitle}</h2>
                          <div className="detail-meta-row">
                            <span className="badge-cyber badge-cyan">{currentSession.duration} Duration</span>
                            <span className="badge-cyber badge-green">Level {currentSession.level}</span>
                          </div>
                        </div>
                        <div className="detail-header-right">
                          <button 
                            className="btn-cyber btn-cyber-primary" 
                            onClick={() => {
                              loadTemplate(currentSession);
                              setActiveTab('sandbox');
                            }}
                          >
                            Exercise
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14, marginLeft: 6}}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Tab 1: Session Plan */}
                      {curriculumDetailTab === 'plan' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '15px' }}>
                          {/* Learning Objectives */}
                          <div className="detail-section">
                            <h4>Target Learning Objectives</h4>
                            <ul className="objectives-list">
                              {currentSession.objectives.map((obj, i) => (
                                <li key={i}>
                                  <svg className="obj-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  {obj}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Dual Mode View */}
                          {!isTeacherMode ? (
                            /* STUDENT VIEW CONTENT */
                            <>
                              <div className="detail-section student-box">
                                <h4>👨‍💻 Hands-On Exercise Challenge</h4>
                                <div className="detail-section-body content-emphasis">
                                  {currentSession.handsOn}
                                </div>
                              </div>
                              <div className="detail-section">
                                <h4>⚔️ Active Classroom Mission</h4>
                                <div className="detail-section-body">
                                  {displayActivity}
                                </div>
                              </div>
                            </>
                          ) : (
                            /* TEACHER VIEW CONTENT */
                            <>
                              <div className="detail-section teacher-box">
                                <h4>⏱️ Warm-Up Classroom Game (15 min)</h4>
                                <div className="detail-section-body">
                                  {currentSession.warmUp}
                                </div>
                              </div>

                              <div className="detail-section teacher-box">
                                <h4>🏫 Board Concepts & Mini-Lesson (20 min)</h4>
                                <div className="detail-section-body">
                                  {currentSession.miniLesson}
                                </div>
                              </div>

                              <div className="detail-section teacher-box">
                                <h4>♟️ Activity Orchestration Guide (60 min)</h4>
                                <div className="detail-section-body">
                                  {displayActivity}
                                </div>
                              </div>

                              {currentSession.exerciseGuide && currentSession.exerciseGuide.length > 0 && (
                                <div className="detail-section teacher-box">
                                  <h4>📘 Teacher Exercise Guide & Reference Solutions</h4>
                                  <div className="detail-section-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {currentSession.exerciseGuide.map((ex, idx) => (
                                      <div key={idx} style={{ background: 'rgba(6, 8, 20, 0.65)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '12px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                                          <strong style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>{ex.title}</strong>
                                          <span className="badge-cyber badge-cyan" style={{ fontSize: '0.7rem' }}>{ex.concept}</span>
                                        </div>
                                        <div style={{ marginBottom: '10px' }}>
                                          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-green)', marginBottom: '4px' }}>🎯 Reference Prompt:</div>
                                          <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', background: 'rgba(0, 0, 0, 0.35)', padding: '8px 12px', borderRadius: '4px', borderLeft: '3px solid var(--accent-green)', lineHeight: 1.4 }}>
                                            {ex.prompt}
                                          </div>
                                        </div>
                                        <div>
                                          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '4px' }}>💻 Reference Output Code:</div>
                                          <pre style={{ fontSize: '0.75rem', color: 'var(--text-primary)', background: '#070913', padding: '10px 12px', borderRadius: '4px', margin: 0, overflowX: 'auto', border: '1px solid rgba(0, 242, 254, 0.15)', lineHeight: 1.45, fontFamily: 'var(--font-mono)' }}>
                                            <code>{ex.outputCode}</code>
                                          </pre>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </>
                          )}

                          {/* Homework Box */}
                          <div className="detail-section">
                            <h4>📝 Intel Delivery (Practice at Home Task)</h4>
                            <div className="detail-section-body homework-box">
                              <h5>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                                Practice at Home Task
                              </h5>
                              <p>{displayHomework}</p>
                            </div>
                          </div>

                          {/* Ethics Moment Card */}
                          {currentSession.ethics && (
                            <div className="glass-panel ethics-callout" style={{ margin: 0 }}>
                              <div className="callout-header">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 18, height: 18}}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                                </svg>
                                ETHICAL LENS DEBATE
                              </div>
                              <p>{currentSession.ethics}</p>
                            </div>
                          )}

                          {/* Age Adaptation Card */}
                          {currentSession.adaptations && (
                            <div className="glass-panel adaptation-callout" style={{ margin: 0 }}>
                              <div className="callout-header">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 18, height: 18}}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                AGE GROUP ADAPTATION
                              </div>
                              <p>{currentSession.adaptations}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tab 2: Concept Reference */}
                      {curriculumDetailTab === 'reference' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
                          <h4 style={{ color: 'var(--accent-cyan)' }}>📚 Session Concepts Reference Details</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            Review key concepts taught in this session. You can copy these terms to search on Google or review for your project code design.
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {(() => {
                              const concepts = CONCEPT_REFERENCES[currentSession.id] || [
                                { name: "Interactive Hands-on Application", desc: "Building core computing models and algorithms described in target learning objectives." },
                                { name: "System Architecture & Logic", desc: "Understanding execution cycles, data input channels, and target system outputs." }
                              ];
                              return concepts.map((c, i) => (
                                <div key={i} className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  <h5 style={{ margin: 0, color: 'var(--accent-purple)', fontSize: '0.95rem' }}>{c.name}</h5>
                                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.25)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>{c.desc}</p>
                                  {c.keywords && (
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                                      🔍 GOOGLE SEARCH TERMS: <span style={{ color: 'var(--accent-cyan)' }}>{c.keywords}</span>
                                    </div>
                                  )}
                                </div>
                              ));
                            })()}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Sandbox Tab View */}
          {activeTab === 'sandbox' && (
            <div className="tab-sandbox animate-in" style={{ display: 'grid', gridTemplateColumns: showExercisesSidebar ? '0.8fr 2fr' : '1fr', gap: '24px', height: 'calc(100vh - 140px)', width: '100%' }}>
              
              {/* Left sidebar: Syllabus List */}
              {showExercisesSidebar && (
                <div className="glass-panel journal-sidebar-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', overflowY: 'auto', padding: '16px' }}>
                  <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Curriculum Syllabus</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Select a Session to Load Exercise</div>
                  </div>
                  {CURRICULUM_DATA.filter(s => s.level === curriculumLevel).map(session => {
                    const isSelected = sandboxSessionId === session.id;
                    return (
                      <div 
                        key={session.id} 
                        className={`glass-panel journal-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => { loadTemplate(session); setS1ActiveExercise(1); }}
                        style={{ padding: '12px', cursor: 'pointer', border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)', background: isSelected ? 'rgba(0, 242, 254, 0.05)' : 'none', borderRadius: '6px' }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                          <span>SESSION {session.id.split('-s')[1]}</span>
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                          {session.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Right main panel: Workspace Details */}
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px', width: '100%', minWidth: 0 }}>
                {/* Top toolbar */}
                <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px' }}>
                  <button 
                    className="btn-cyber btn-cyber-secondary btn-small" 
                    onClick={() => setShowExercisesSidebar(prev => !prev)}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    {showExercisesSidebar ? 'Hide Syllabus Sidebar' : 'Show Syllabus Sidebar'}
                  </button>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      ACTIVE SESSION: {sandboxSessionId.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div style={{ flexGrow: 1, height: 'calc(100% - 60px)', minHeight: 0, overflowY: 'auto' }}>
              
              {/* LEVEL 1 SESSION 1: SYSTEMS BRIEFING — 3-box trial format
                  (Plan & Design / Prompt + Output / Explain the Output) */}
              {sandboxSessionId === 'l1-s1' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S1_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s1ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s1-${s1ActiveExercise}`]: { plan: s1PlanInput, prompt: s1PromptInput, outputCode: s1OutputCodeInput, explain: s1ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s1-${ex.num}`];
                          setS1ActiveExercise(ex.num);
                          setS1PlanInput(saved?.plan ?? '');
                          setS1PromptInput(saved?.prompt ?? '');
                          setS1OutputCodeInput(saved?.outputCode ?? '');
                          setS1ExplainInput(saved?.explain ?? '');
                          setS1Logs([]);
                          setS1Success(false);
                        }}
                      >
                        Ex 1.{ex.num}{(exerciseProgress['l1-s1'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S1_EXERCISES[s1ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S1_EXERCISES[s1ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S1_EXERCISES[s1ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s1PlanInput}
                        onChange={(e) => setS1PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S1_EXERCISES[s1ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s1PromptInput, `s1-ex-${s1ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s1-ex-${s1ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s1PromptInput}
                          onChange={(e) => setS1PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S1_EXERCISES[s1ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Best practice: copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s1Generating || !s1PromptInput.trim()}
                            onClick={async () => {
                              setS1Generating(true);
                              try {
                                const ex = S1_EXERCISES[s1ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s1PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS1OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS1Logs([{ type: 'error', text: `✗ Couldn't generate an answer (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS1Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s1Generating ? 'Generating…' : '🤖 Generate Answer'}
                          </button>
                        </div>
                        <textarea
                          value={s1OutputCodeInput}
                          onChange={(e) => setS1OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S1_EXERCISES[s1ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Answer" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s1ExplainInput}
                        onChange={(e) => setS1ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what the AI's answer means, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s1Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s1Verifying}
                      onClick={async () => {
                        const ex = S1_EXERCISES[s1ActiveExercise - 1];
                        saveExerciseSubmission('l1-s1', s1ActiveExercise, { plan: s1PlanInput, prompt: s1PromptInput, outputCode: s1OutputCodeInput, explain: s1ExplainInput });
                        const filled = s1PromptInput.trim();
                        if (!filled) {
                          setS1Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS1Success(false);
                          return;
                        }
                        setS1Verifying(true);
                        setS1Logs([{ type: 'info', text: `Checking prompt quality for Exercise 1.${s1ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s1PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS1Success(true);
                            const prog = markExerciseComplete('l1-s1', s1ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 1 BRIEFING COMPLETE! You now have the systems knowledge to start building.' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS1Success(false);
                          }
                          setS1Logs(logs);
                        } catch (err) {
                          setS1Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS1Success(false);
                        } finally {
                          setS1Verifying(false);
                        }
                      }}
                    >
                      {s1Verifying ? 'Checking prompt quality…' : s1Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS1PlanInput('');
                        setS1PromptInput('');
                        setS1OutputCodeInput('');
                        setS1ExplainInput('');
                        setS1Logs([]);
                        setS1Success(false);
                      }}
                    >
                      Reset Answer
                    </button>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Terminal Log</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                        {s1Logs.length === 0 ? (
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write a prompt and click Verify.</div>
                        ) : s1Logs.map((log, idx) => (
                          <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                            {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                            {log.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 2: DETECTIVE HTML SANDBOX — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s2' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S2_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s2ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s2-${s2ActiveExercise}`]: { plan: s2PlanInput, prompt: s2PromptInput, outputCode: s2OutputCodeInput, explain: s2ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s2-${ex.num}`];
                          setS2ActiveExercise(ex.num);
                          setS2PlanInput(saved?.plan ?? '');
                          setS2PromptInput(saved?.prompt ?? '');
                          setS2OutputCodeInput(saved?.outputCode ?? '');
                          setS2ExplainInput(saved?.explain ?? '');
                          setS2Logs([]);
                          setS2Success(false);
                        }}
                      >
                        Ex 2.{ex.num}{(exerciseProgress['l1-s2'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S2_EXERCISES[s2ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S2_EXERCISES[s2ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S2_EXERCISES[s2ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s2PlanInput}
                        onChange={(e) => setS2PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S2_EXERCISES[s2ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s2PromptInput, `s2-ex-${s2ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s2-ex-${s2ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s2PromptInput}
                          onChange={(e) => setS2PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S2_EXERCISES[s2ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Best practice: copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (index.html)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s2Generating || !s2PromptInput.trim()}
                            onClick={async () => {
                              setS2Generating(true);
                              try {
                                const ex = S2_EXERCISES[s2ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s2PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS2OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS2Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS2Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s2Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s2OutputCodeInput}
                          onChange={(e) => setS2OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S2_EXERCISES[s2ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Interactive Live Preview</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={`
                          <html>
                            <head>
                              <style>${S2_PREVIEW_STYLE_CSS}</style>
                            </head>
                            <body>
                              ${s2OutputCodeInput}
                            </body>
                          </html>
                        `}
                        style={{ width: '100%', height: '260px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="HTML Sandbox Live Preview"
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s2ExplainInput}
                        onChange={(e) => setS2ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s2Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s2Verifying}
                      onClick={async () => {
                        const ex = S2_EXERCISES[s2ActiveExercise - 1];
                        saveExerciseSubmission('l1-s2', s2ActiveExercise, { plan: s2PlanInput, prompt: s2PromptInput, outputCode: s2OutputCodeInput, explain: s2ExplainInput });
                        const filled = s2PromptInput.trim();
                        if (!filled) {
                          setS2Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS2Success(false);
                          return;
                        }
                        setS2Verifying(true);
                        setS2Logs([{ type: 'info', text: `Checking prompt quality for Exercise 2.${s2ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s2PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS2Success(true);
                            const prog = markExerciseComplete('l1-s2', s2ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 2 CHALLENGES COMPLETE! You have built the HTML skeleton for the Racing Car Game!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS2Success(false);
                          }
                          setS2Logs(logs);
                        } catch (err) {
                          setS2Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS2Success(false);
                        } finally {
                          setS2Verifying(false);
                        }
                      }}
                    >
                      {s2Verifying ? 'Checking prompt quality…' : s2Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS2PlanInput('');
                        setS2PromptInput('');
                        setS2OutputCodeInput('');
                        setS2ExplainInput('');
                        setS2Logs([]);
                        setS2Success(false);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Terminal Log</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                        {s2Logs.length === 0 ? (
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write a prompt and click Verify.</div>
                        ) : s2Logs.map((log, idx) => (
                          <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                            {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                            {log.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 3: DETECTIVE CSS SANDBOX — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s3' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S3_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s3ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s3-${s3ActiveExercise}`]: { plan: s3PlanInput, prompt: s3PromptInput, outputCode: s3OutputCodeInput, explain: s3ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s3-${ex.num}`];
                          setS3ActiveExercise(ex.num);
                          setS3PlanInput(saved?.plan ?? '');
                          setS3PromptInput(saved?.prompt ?? '');
                          setS3OutputCodeInput(saved?.outputCode ?? '');
                          setS3ExplainInput(saved?.explain ?? '');
                          setS3Logs([]);
                          setS3Success(false);
                        }}
                      >
                        Ex 3.{ex.num}{(exerciseProgress['l1-s3'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S3_EXERCISES[s3ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S3_EXERCISES[s3ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S3_EXERCISES[s3ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s3PlanInput}
                        onChange={(e) => setS3PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S3_EXERCISES[s3ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s3PromptInput, `s3-ex-${s3ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s3-ex-${s3ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s3PromptInput}
                          onChange={(e) => setS3PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S3_EXERCISES[s3ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Best practice: copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (styles.css)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s3Generating || !s3PromptInput.trim()}
                            onClick={async () => {
                              setS3Generating(true);
                              try {
                                const ex = S3_EXERCISES[s3ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s3PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS3OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS3Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS3Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s3Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s3OutputCodeInput}
                          onChange={(e) => setS3OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S3_EXERCISES[s3ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Interactive Live Preview</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      {S3_EXERCISES[s3ActiveExercise - 1].runnable ? (
                        <iframe
                          srcDoc={`
                            <html>
                              <head>
                                <style>
                                  ${buildS3PreviewCss(s3ActiveExercise)}
                                  ${s3OutputCodeInput}
                                </style>
                              </head>
                              <body>
                                ${S3_PREVIEW_SKELETON}
                              </body>
                            </html>
                          `}
                          style={{ width: '100%', height: '260px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="CSS Sandbox Live Preview"
                        />
                      ) : (
                        <div style={{ color: '#8899aa', fontFamily: 'var(--font-mono)', padding: '20px', textAlign: 'center', lineHeight: 1.6, border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}>
                          This step is a plan/prompt/explanation exercise — nothing to render yet.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s3ExplainInput}
                        onChange={(e) => setS3ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s3Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s3Verifying}
                      onClick={async () => {
                        const ex = S3_EXERCISES[s3ActiveExercise - 1];
                        saveExerciseSubmission('l1-s3', s3ActiveExercise, { plan: s3PlanInput, prompt: s3PromptInput, outputCode: s3OutputCodeInput, explain: s3ExplainInput });
                        const filled = s3PromptInput.trim();
                        if (!filled) {
                          setS3Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS3Success(false);
                          return;
                        }
                        setS3Verifying(true);
                        setS3Logs([{ type: 'info', text: `Checking prompt quality for Exercise 3.${s3ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s3PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS3Success(true);
                            const prog = markExerciseComplete('l1-s3', s3ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 3 CHALLENGES COMPLETE! You have styled the Racing Car highway track!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS3Success(false);
                          }
                          setS3Logs(logs);
                        } catch (err) {
                          setS3Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS3Success(false);
                        } finally {
                          setS3Verifying(false);
                        }
                      }}
                    >
                      {s3Verifying ? 'Checking prompt quality…' : s3Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS3PlanInput('');
                        setS3PromptInput('');
                        setS3OutputCodeInput('');
                        setS3ExplainInput('');
                        setS3Logs([]);
                        setS3Success(false);
                      }}
                    >
                      Reset Styles
                    </button>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Terminal Log</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                        {s3Logs.length === 0 ? (
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write a prompt and click Verify.</div>
                        ) : s3Logs.map((log, idx) => (
                          <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                            {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                            {log.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 4: JS VARIABLE REGISTRY — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s4' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S4_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s4ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s4-${s4ActiveExercise}`]: { plan: s4PlanInput, prompt: s4PromptInput, outputCode: s4OutputCodeInput, explain: s4ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s4-${ex.num}`];
                          setS4ActiveExercise(ex.num);
                          setS4PlanInput(saved?.plan ?? '');
                          setS4PromptInput(saved?.prompt ?? '');
                          setS4OutputCodeInput(saved?.outputCode ?? '');
                          setS4ExplainInput(saved?.explain ?? '');
                          setS4Logs([]);
                          setS4Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 4.{ex.num}{(exerciseProgress['l1-s4'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S4_EXERCISES[s4ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S4_EXERCISES[s4ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S4_EXERCISES[s4ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s4PlanInput}
                        onChange={(e) => setS4PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S4_EXERCISES[s4ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s4PromptInput, `ex-${s4ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `ex-${s4ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s4PromptInput}
                          onChange={(e) => setS4PromptInput(e.target.value)}
                          style={{ width: '100%', height: '260px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S4_EXERCISES[s4ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Best practice: copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s4Generating || !s4PromptInput.trim()}
                            onClick={async () => {
                              setS4Generating(true);
                              try {
                                const ex = S4_EXERCISES[s4ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s4PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS4OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS4Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS4Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s4Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s4OutputCodeInput}
                          onChange={(e) => setS4OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '260px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S4_EXERCISES[s4ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Console Output</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      {/* Execution sandbox is not shown visually — this session's code is
                          variables & math, not DOM/graphics, so there is nothing honest to
                          render as a "preview." The real result is whatever the code prints. */}
                      <iframe
                        srcDoc={buildJsConsoleOnlyPreview(S4_EXERCISES[s4ActiveExercise - 1].runnable ? s4OutputCodeInput : '')}
                        style={{ display: 'none' }}
                        title="JS Execution Sandbox"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '180px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                No console output yet. Add console.log(...) to your Output Code if you want to see real values here.
                              </div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '180px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s4Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s4Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s4ExplainInput}
                        onChange={(e) => setS4ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s4Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s4Verifying}
                      onClick={async () => {
                        const ex = S4_EXERCISES[s4ActiveExercise - 1];
                        saveExerciseSubmission('l1-s4', s4ActiveExercise, { plan: s4PlanInput, prompt: s4PromptInput, outputCode: s4OutputCodeInput, explain: s4ExplainInput });
                        const filled = s4PromptInput.trim();
                        if (!filled) {
                          setS4Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS4Success(false);
                          return;
                        }
                        setS4Verifying(true);
                        setS4Logs([{ type: 'info', text: `Checking prompt quality for Exercise 4.${s4ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s4PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS4Success(true);
                            const prog = markExerciseComplete('l1-s4', s4ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 4 CHALLENGES COMPLETE! Your game state variables are ready to drive!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS4Success(false);
                          }
                          setS4Logs(logs);
                        } catch (err) {
                          setS4Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS4Success(false);
                        } finally {
                          setS4Verifying(false);
                        }
                      }}
                    >
                      {s4Verifying ? 'Checking prompt quality…' : s4Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS4PlanInput('');
                        setS4PromptInput('');
                        setS4OutputCodeInput('');
                        setS4ExplainInput('');
                        setS4Logs([]);
                        setS4Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 5: KEYBOARD CONTROL INTERFACES (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s5' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S5_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s5ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s5-${s5ActiveExercise}`]: { plan: s5PlanInput, prompt: s5PromptInput, outputCode: s5OutputCodeInput, explain: s5ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s5-${ex.num}`];
                          setS5ActiveExercise(ex.num);
                          setS5PlanInput(saved?.plan ?? '');
                          setS5PromptInput(saved?.prompt ?? '');
                          setS5OutputCodeInput(saved?.outputCode ?? '');
                          setS5ExplainInput(saved?.explain ?? '');
                          setS5Logs([]);
                          setS5Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 5.{ex.num}{(exerciseProgress['l1-s5'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S5_EXERCISES[s5ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S5_EXERCISES[s5ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S5_EXERCISES[s5ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s5PlanInput}
                        onChange={(e) => setS5PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S5_EXERCISES[s5ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s5PromptInput, `s5-ex-${s5ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s5-ex-${s5ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s5PromptInput}
                          onChange={(e) => setS5PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S5_EXERCISES[s5ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Best practice: copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s5Generating || !s5PromptInput.trim()}
                            onClick={async () => {
                              setS5Generating(true);
                              try {
                                const ex = S5_EXERCISES[s5ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s5PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS5OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS5Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS5Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s5Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s5OutputCodeInput}
                          onChange={(e) => setS5OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S5_EXERCISES[s5ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(S5_EXERCISES[s5ActiveExercise - 1].runnable ? s5OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.')}
                        style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click inside the preview, then press arrow keys to test your code.</div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s5Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s5Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s5ExplainInput}
                        onChange={(e) => setS5ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s5Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s5Verifying}
                      onClick={async () => {
                        const ex = S5_EXERCISES[s5ActiveExercise - 1];
                        saveExerciseSubmission('l1-s5', s5ActiveExercise, { plan: s5PlanInput, prompt: s5PromptInput, outputCode: s5OutputCodeInput, explain: s5ExplainInput });
                        const filled = s5PromptInput.trim();
                        if (!filled) {
                          setS5Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS5Success(false);
                          return;
                        }
                        setS5Verifying(true);
                        setS5Logs([{ type: 'info', text: `Checking prompt quality for Exercise 5.${s5ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s5PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS5Success(true);
                            const prog = markExerciseComplete('l1-s5', s5ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 5 CHALLENGES COMPLETE! Your car now steers with the keyboard!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS5Success(false);
                          }
                          setS5Logs(logs);
                        } catch (err) {
                          setS5Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS5Success(false);
                        } finally {
                          setS5Verifying(false);
                        }
                      }}
                    >
                      {s5Verifying ? 'Checking prompt quality…' : s5Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS5PlanInput('');
                        setS5PromptInput('');
                        setS5OutputCodeInput('');
                        setS5ExplainInput('');
                        setS5Logs([]);
                        setS5Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 6: TRACK BOUNDARIES & SAFETY GUARDS (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s6' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S6_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s6ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s6-${s6ActiveExercise}`]: { plan: s6PlanInput, prompt: s6PromptInput, outputCode: s6OutputCodeInput, explain: s6ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s6-${ex.num}`];
                          setS6ActiveExercise(ex.num);
                          setS6PlanInput(saved?.plan ?? '');
                          setS6PromptInput(saved?.prompt ?? '');
                          setS6OutputCodeInput(saved?.outputCode ?? '');
                          setS6ExplainInput(saved?.explain ?? '');
                          setS6Logs([]);
                          setS6Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 6.{ex.num}{(exerciseProgress['l1-s6'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S6_EXERCISES[s6ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S6_EXERCISES[s6ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S6_EXERCISES[s6ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s6PlanInput}
                        onChange={(e) => setS6PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S6_EXERCISES[s6ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s6PromptInput, `s6-ex-${s6ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s6-ex-${s6ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s6PromptInput}
                          onChange={(e) => setS6PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S6_EXERCISES[s6ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Best practice: copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s6Generating || !s6PromptInput.trim()}
                            onClick={async () => {
                              setS6Generating(true);
                              try {
                                const ex = S6_EXERCISES[s6ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s6PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS6OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS6Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS6Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s6Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s6OutputCodeInput}
                          onChange={(e) => setS6OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S6_EXERCISES[s6ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(S6_EXERCISES[s6ActiveExercise - 1].runnable ? s6OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.')}
                        style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click inside the preview, then press arrow keys to test your code.</div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s6Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s6Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s6ExplainInput}
                        onChange={(e) => setS6ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s6Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s6Verifying}
                      onClick={async () => {
                        const ex = S6_EXERCISES[s6ActiveExercise - 1];
                        saveExerciseSubmission('l1-s6', s6ActiveExercise, { plan: s6PlanInput, prompt: s6PromptInput, outputCode: s6OutputCodeInput, explain: s6ExplainInput });
                        const filled = s6PromptInput.trim();
                        if (!filled) {
                          setS6Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS6Success(false);
                          return;
                        }
                        setS6Verifying(true);
                        setS6Logs([{ type: 'info', text: `Checking prompt quality for Exercise 6.${s6ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s6PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS6Success(true);
                            const prog = markExerciseComplete('l1-s6', s6ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 6 CHALLENGES COMPLETE! Your car now stays safely on the track!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS6Success(false);
                          }
                          setS6Logs(logs);
                        } catch (err) {
                          setS6Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS6Success(false);
                        } finally {
                          setS6Verifying(false);
                        }
                      }}
                    >
                      {s6Verifying ? 'Checking prompt quality…' : s6Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS6PlanInput('');
                        setS6PromptInput('');
                        setS6OutputCodeInput('');
                        setS6ExplainInput('');
                        setS6Logs([]);
                        setS6Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 7: OBSTACLE LOOP GENERATION (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s7' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S7_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s7ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s7-${s7ActiveExercise}`]: { plan: s7PlanInput, prompt: s7PromptInput, outputCode: s7OutputCodeInput, explain: s7ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s7-${ex.num}`];
                          setS7ActiveExercise(ex.num);
                          setS7PlanInput(saved?.plan ?? '');
                          setS7PromptInput(saved?.prompt ?? '');
                          setS7OutputCodeInput(saved?.outputCode ?? '');
                          setS7ExplainInput(saved?.explain ?? '');
                          setS7Logs([]);
                          setS7Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 7.{ex.num}{(exerciseProgress['l1-s7'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S7_EXERCISES[s7ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S7_EXERCISES[s7ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S7_EXERCISES[s7ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s7PlanInput}
                        onChange={(e) => setS7PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S7_EXERCISES[s7ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s7PromptInput, `s7-ex-${s7ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s7-ex-${s7ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s7PromptInput}
                          onChange={(e) => setS7PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S7_EXERCISES[s7ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s7Generating || !s7PromptInput.trim()}
                            onClick={async () => {
                              setS7Generating(true);
                              try {
                                const ex = S7_EXERCISES[s7ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s7PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS7OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS7Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS7Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s7Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s7OutputCodeInput}
                          onChange={(e) => setS7OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S7_EXERCISES[s7ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(
                          S7_EXERCISES[s7ActiveExercise - 1].runnable ? s7OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.',
                          { showCar: s7ActiveExercise >= 4, trackHeight: 660 }
                        )}
                        style={{ width: '100%', height: '780px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                        {[...s7Logs, ...simConsoleLogs].length === 0 ? (
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Paste code and click Verify. This session's code runs once when the preview loads.</div>
                        ) : [...s7Logs, ...simConsoleLogs].map((log, idx) => (
                          <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                            {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                            {log.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s7ExplainInput}
                        onChange={(e) => setS7ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s7Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      onClick={() => {
                        const ex = S7_EXERCISES[s7ActiveExercise - 1];
                        saveExerciseSubmission('l1-s7', s7ActiveExercise, { plan: s7PlanInput, prompt: s7PromptInput, outputCode: s7OutputCodeInput, explain: s7ExplainInput });
                        const logs = [{ type: 'info', text: `Checking Exercise 7.${s7ActiveExercise}...` }];
                        const filled = s7PlanInput.trim() && s7PromptInput.trim() && s7OutputCodeInput.trim() && s7ExplainInput.trim();
                        const result = filled ? ex.validate({ plan: s7PlanInput, prompt: s7PromptInput, outputCode: s7OutputCodeInput, explain: s7ExplainInput }) : null;
                        const pass = filled && result.promptOk && result.codeOk && result.explainOk;
                        if (pass) {
                          logs.push({ type: 'success', text: `✓ Correct! ${ex.title} complete.` });
                          setS7Success(true);
                          const prog = markExerciseComplete('l1-s7', s7ActiveExercise);
                          if (prog.allDone) {
                            logs.push({ type: 'success', text: '✓ SESSION 7 CHALLENGES COMPLETE! Highway markers now spawn automatically!' });
                            if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                          } else {
                            logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                          }
                        } else if (!filled) {
                          logs.push({ type: 'error', text: '✗ Fill in all three boxes — Plan, Prompt + Output Code, and Explanation — before verifying.' });
                          setS7Success(false);
                        } else {
                          logs.push({ type: 'error', text: '✗ Check failed — here is exactly what still needs fixing:' });
                          if (!result.promptOk) logs.push({ type: 'error', text: `  Prompt: ${ex.hint.prompt}` });
                          if (!result.codeOk) logs.push({ type: 'error', text: `  Output Code: ${ex.hint.code}` });
                          if (!result.explainOk) logs.push({ type: 'error', text: `  Explanation: ${ex.hint.explain}` });
                          setS7Success(false);
                        }
                        setS7Logs(logs);
                      }}
                    >
                      {s7Success ? '✓ Exercise Complete' : 'Verify JS Logic'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS7PlanInput('');
                        setS7PromptInput('');
                        setS7OutputCodeInput('');
                        setS7ExplainInput('');
                        setS7Logs([]);
                        setS7Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 8: MODULAR CONTROL FUNCTIONS (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s8' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S8_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s8ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s8-${s8ActiveExercise}`]: { plan: s8PlanInput, prompt: s8PromptInput, outputCode: s8OutputCodeInput, explain: s8ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s8-${ex.num}`];
                          setS8ActiveExercise(ex.num);
                          setS8PlanInput(saved?.plan ?? '');
                          setS8PromptInput(saved?.prompt ?? '');
                          setS8OutputCodeInput(saved?.outputCode ?? '');
                          setS8ExplainInput(saved?.explain ?? '');
                          setS8Logs([]);
                          setS8Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 8.{ex.num}{(exerciseProgress['l1-s8'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S8_EXERCISES[s8ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S8_EXERCISES[s8ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S8_EXERCISES[s8ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s8PlanInput}
                        onChange={(e) => setS8PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S8_EXERCISES[s8ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s8PromptInput, `s8-ex-${s8ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s8-ex-${s8ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s8PromptInput}
                          onChange={(e) => setS8PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S8_EXERCISES[s8ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s8Generating || !s8PromptInput.trim()}
                            onClick={async () => {
                              setS8Generating(true);
                              try {
                                const ex = S8_EXERCISES[s8ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s8PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS8OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS8Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS8Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s8Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s8OutputCodeInput}
                          onChange={(e) => setS8OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S8_EXERCISES[s8ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(S8_EXERCISES[s8ActiveExercise - 1].runnable ? s8OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.')}
                        style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click inside the preview, then press arrow keys to test your code.</div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s8Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s8Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s8ExplainInput}
                        onChange={(e) => setS8ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s8Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s8Verifying}
                      onClick={async () => {
                        const ex = S8_EXERCISES[s8ActiveExercise - 1];
                        saveExerciseSubmission('l1-s8', s8ActiveExercise, { plan: s8PlanInput, prompt: s8PromptInput, outputCode: s8OutputCodeInput, explain: s8ExplainInput });
                        const filled = s8PromptInput.trim();
                        if (!filled) {
                          setS8Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS8Success(false);
                          return;
                        }
                        setS8Verifying(true);
                        setS8Logs([{ type: 'info', text: `Checking prompt quality for Exercise 8.${s8ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s8PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS8Success(true);
                            const prog = markExerciseComplete('l1-s8', s8ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 8 CHALLENGES COMPLETE! Your steering logic is now fully modular!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS8Success(false);
                          }
                          setS8Logs(logs);
                        } catch (err) {
                          setS8Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS8Success(false);
                        } finally {
                          setS8Verifying(false);
                        }
                      }}
                    >
                      {s8Verifying ? 'Checking prompt quality…' : s8Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS8PlanInput('');
                        setS8PromptInput('');
                        setS8OutputCodeInput('');
                        setS8ExplainInput('');
                        setS8Logs([]);
                        setS8Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 9: THE RACING GAME LOOP - TIMERS & ANIMATIONS (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s9' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S9_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s9ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s9-${s9ActiveExercise}`]: { plan: s9PlanInput, prompt: s9PromptInput, outputCode: s9OutputCodeInput, explain: s9ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s9-${ex.num}`];
                          setS9ActiveExercise(ex.num);
                          setS9PlanInput(saved?.plan ?? '');
                          setS9PromptInput(saved?.prompt ?? '');
                          setS9OutputCodeInput(saved?.outputCode ?? '');
                          setS9ExplainInput(saved?.explain ?? '');
                          setS9Logs([]);
                          setS9Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 9.{ex.num}{(exerciseProgress['l1-s9'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S9_EXERCISES[s9ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S9_EXERCISES[s9ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S9_EXERCISES[s9ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s9PlanInput}
                        onChange={(e) => setS9PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S9_EXERCISES[s9ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s9PromptInput, `s9-ex-${s9ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s9-ex-${s9ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s9PromptInput}
                          onChange={(e) => setS9PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S9_EXERCISES[s9ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s9Generating || !s9PromptInput.trim()}
                            onClick={async () => {
                              setS9Generating(true);
                              try {
                                const ex = S9_EXERCISES[s9ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s9PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS9OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS9Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS9Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s9Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s9OutputCodeInput}
                          onChange={(e) => setS9OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S9_EXERCISES[s9ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(S9_EXERCISES[s9ActiveExercise - 1].runnable ? s9OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.')}
                        style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click inside the preview, then press arrow keys to test your code.</div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s9Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s9Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s9ExplainInput}
                        onChange={(e) => setS9ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s9Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s9Verifying}
                      onClick={async () => {
                        const ex = S9_EXERCISES[s9ActiveExercise - 1];
                        saveExerciseSubmission('l1-s9', s9ActiveExercise, { plan: s9PlanInput, prompt: s9PromptInput, outputCode: s9OutputCodeInput, explain: s9ExplainInput });
                        const filled = s9PromptInput.trim();
                        if (!filled) {
                          setS9Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS9Success(false);
                          return;
                        }
                        setS9Verifying(true);
                        setS9Logs([{ type: 'info', text: `Checking prompt quality for Exercise 9.${s9ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s9PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS9Success(true);
                            const prog = markExerciseComplete('l1-s9', s9ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 9 CHALLENGES COMPLETE! Your obstacles now animate down the track!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS9Success(false);
                          }
                          setS9Logs(logs);
                        } catch (err) {
                          setS9Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS9Success(false);
                        } finally {
                          setS9Verifying(false);
                        }
                      }}
                    >
                      {s9Verifying ? 'Checking prompt quality…' : s9Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS9PlanInput('');
                        setS9PromptInput('');
                        setS9OutputCodeInput('');
                        setS9ExplainInput('');
                        setS9Logs([]);
                        setS9Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 10: COLLISION DETECTION - AUDITING AI OVERLAP MATH (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s10' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S10_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s10ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s10-${s10ActiveExercise}`]: { plan: s10PlanInput, prompt: s10PromptInput, outputCode: s10OutputCodeInput, explain: s10ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s10-${ex.num}`];
                          setS10ActiveExercise(ex.num);
                          setS10PlanInput(saved?.plan ?? '');
                          setS10PromptInput(saved?.prompt ?? '');
                          setS10OutputCodeInput(saved?.outputCode ?? '');
                          setS10ExplainInput(saved?.explain ?? '');
                          setS10Logs([]);
                          setS10Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 10.{ex.num}{(exerciseProgress['l1-s10'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S10_EXERCISES[s10ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S10_EXERCISES[s10ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S10_EXERCISES[s10ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s10PlanInput}
                        onChange={(e) => setS10PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S10_EXERCISES[s10ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s10PromptInput, `s10-ex-${s10ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s10-ex-${s10ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s10PromptInput}
                          onChange={(e) => setS10PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S10_EXERCISES[s10ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s10Generating || !s10PromptInput.trim()}
                            onClick={async () => {
                              setS10Generating(true);
                              try {
                                const ex = S10_EXERCISES[s10ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s10PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS10OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS10Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS10Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s10Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s10OutputCodeInput}
                          onChange={(e) => setS10OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S10_EXERCISES[s10ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(S10_EXERCISES[s10ActiveExercise - 1].runnable ? s10OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.')}
                        style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click inside the preview, then press arrow keys to test your code.</div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s10Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s10Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s10ExplainInput}
                        onChange={(e) => setS10ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s10Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s10Verifying}
                      onClick={async () => {
                        const ex = S10_EXERCISES[s10ActiveExercise - 1];
                        saveExerciseSubmission('l1-s10', s10ActiveExercise, { plan: s10PlanInput, prompt: s10PromptInput, outputCode: s10OutputCodeInput, explain: s10ExplainInput });
                        const filled = s10PromptInput.trim();
                        if (!filled) {
                          setS10Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS10Success(false);
                          return;
                        }
                        setS10Verifying(true);
                        setS10Logs([{ type: 'info', text: `Checking prompt quality for Exercise 10.${s10ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s10PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS10Success(true);
                            const prog = markExerciseComplete('l1-s10', s10ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 10 CHALLENGES COMPLETE! Collisions are now detected correctly!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS10Success(false);
                          }
                          setS10Logs(logs);
                        } catch (err) {
                          setS10Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS10Success(false);
                        } finally {
                          setS10Verifying(false);
                        }
                      }}
                    >
                      {s10Verifying ? 'Checking prompt quality…' : s10Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS10PlanInput('');
                        setS10PromptInput('');
                        setS10OutputCodeInput('');
                        setS10ExplainInput('');
                        setS10Logs([]);
                        setS10Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 11: THE DASHBOARD & HIGH-SCORE COUNTER - DOM OPERATIONS (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s11' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S11_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s11ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s11-${s11ActiveExercise}`]: { plan: s11PlanInput, prompt: s11PromptInput, outputCode: s11OutputCodeInput, explain: s11ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s11-${ex.num}`];
                          setS11ActiveExercise(ex.num);
                          setS11PlanInput(saved?.plan ?? '');
                          setS11PromptInput(saved?.prompt ?? '');
                          setS11OutputCodeInput(saved?.outputCode ?? '');
                          setS11ExplainInput(saved?.explain ?? '');
                          setS11Logs([]);
                          setS11Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 11.{ex.num}{(exerciseProgress['l1-s11'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S11_EXERCISES[s11ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S11_EXERCISES[s11ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S11_EXERCISES[s11ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s11PlanInput}
                        onChange={(e) => setS11PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S11_EXERCISES[s11ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s11PromptInput, `s11-ex-${s11ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s11-ex-${s11ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s11PromptInput}
                          onChange={(e) => setS11PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S11_EXERCISES[s11ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s11Generating || !s11PromptInput.trim()}
                            onClick={async () => {
                              setS11Generating(true);
                              try {
                                const ex = S11_EXERCISES[s11ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s11PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS11OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS11Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS11Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s11Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s11OutputCodeInput}
                          onChange={(e) => setS11OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S11_EXERCISES[s11ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(S11_EXERCISES[s11ActiveExercise - 1].runnable ? s11OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.')}
                        style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click inside the preview, then press arrow keys to test your code.</div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s11Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s11Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s11ExplainInput}
                        onChange={(e) => setS11ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s11Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s11Verifying}
                      onClick={async () => {
                        const ex = S11_EXERCISES[s11ActiveExercise - 1];
                        saveExerciseSubmission('l1-s11', s11ActiveExercise, { plan: s11PlanInput, prompt: s11PromptInput, outputCode: s11OutputCodeInput, explain: s11ExplainInput });
                        const filled = s11PromptInput.trim();
                        if (!filled) {
                          setS11Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS11Success(false);
                          return;
                        }
                        setS11Verifying(true);
                        setS11Logs([{ type: 'info', text: `Checking prompt quality for Exercise 11.${s11ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s11PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS11Success(true);
                            const prog = markExerciseComplete('l1-s11', s11ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ SESSION 11 CHALLENGES COMPLETE! The HUD and restart flow are fully wired up!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS11Success(false);
                          }
                          setS11Logs(logs);
                        } catch (err) {
                          setS11Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS11Success(false);
                        } finally {
                          setS11Verifying(false);
                        }
                      }}
                    >
                      {s11Verifying ? 'Checking prompt quality…' : s11Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS11PlanInput('');
                        setS11PromptInput('');
                        setS11OutputCodeInput('');
                        setS11ExplainInput('');
                        setS11Logs([]);
                        setS11Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 1 SESSION 12: RACING CAR GAME ASSESSMENT (JS Sandbox) — 3-box trial format
                  (Plan & Design / Prompt + Output Code / Explain the Output Code) */}
              {sandboxSessionId === 'l1-s12' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {S12_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${s12ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l1-s12-${s12ActiveExercise}`]: { plan: s12PlanInput, prompt: s12PromptInput, outputCode: s12OutputCodeInput, explain: s12ExplainInput } }));
                          const saved = savedExerciseCode[`l1-s12-${ex.num}`];
                          setS12ActiveExercise(ex.num);
                          setS12PlanInput(saved?.plan ?? '');
                          setS12PromptInput(saved?.prompt ?? '');
                          setS12OutputCodeInput(saved?.outputCode ?? '');
                          setS12ExplainInput(saved?.explain ?? '');
                          setS12Logs([]);
                          setS12Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 12.{ex.num}{(exerciseProgress['l1-s12'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header">
                      <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{S12_EXERCISES[s12ActiveExercise - 1].title}</h4>
                    </div>
                    <div className="sim-panel-body" style={{ marginTop: '10px', padding: 0 }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                        <strong>Problem:</strong> {S12_EXERCISES[s12ActiveExercise - 1].problem}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <strong>Instruction:</strong> {S12_EXERCISES[s12ActiveExercise - 1].instruction}
                      </p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>1. Plan &amp; Design</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s12PlanInput}
                        onChange={(e) => setS12PlanInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder={S12_EXERCISES[s12ActiveExercise - 1].planPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>2. Write the AI Prompt &amp; Paste the Output Code</h3></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            onClick={() => copyPromptToClipboard(s12PromptInput, `s12-ex-${s12ActiveExercise}`)}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {promptCopiedKey === `s12-ex-${s12ActiveExercise}` ? '✓ Copied' : 'Copy Prompt'}
                          </button>
                        </div>
                        <textarea
                          value={s12PromptInput}
                          onChange={(e) => setS12PromptInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S12_EXERCISES[s12ActiveExercise - 1].promptPlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                        </span>
                      </div>
                      <div className="form-field">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Output Code (game.js)</label>
                          <button
                            type="button"
                            className="btn-cyber btn-small btn-cyber-secondary"
                            disabled={s12Generating || !s12PromptInput.trim()}
                            onClick={async () => {
                              setS12Generating(true);
                              try {
                                const ex = S12_EXERCISES[s12ActiveExercise - 1];
                                const res = await fetch('/api/generate-code', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({ prompt: s12PromptInput, context: ex.problem })
                                });
                                const data = await res.json();
                                if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                setS12OutputCodeInput(data.code);
                                setSimConsoleLogs([]);
                              } catch (err) {
                                setS12Logs([{ type: 'error', text: `✗ Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` }]);
                              } finally {
                                setS12Generating(false);
                              }
                            }}
                            style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                          >
                            {s12Generating ? 'Generating…' : '🤖 Generate Code'}
                          </button>
                        </div>
                        <textarea
                          value={s12OutputCodeInput}
                          onChange={(e) => setS12OutputCodeInput(e.target.value)}
                          style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                          placeholder={S12_EXERCISES[s12ActiveExercise - 1].outputCodePlaceholder}
                        />
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>Live Racing Game Preview</h3></div>
                    <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <iframe
                        srcDoc={buildJsSandboxPreview(S12_EXERCISES[s12ActiveExercise - 1].runnable ? s12OutputCodeInput : '// This step is a plan/prompt/explanation exercise — nothing to run yet.')}
                        style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                        title="JS Sandbox Live Preview"
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Console Output</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {simConsoleLogs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click inside the preview, then press arrow keys to test your code.</div>
                            ) : simConsoleLogs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>Verification Feedback</div>
                          <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                            {s12Logs.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Write a prompt, then click Verify.</div>
                            ) : s12Logs.map((log, idx) => (
                              <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                {log.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '16px' }}>
                    <div className="panel-header"><h3>3. Explain the Output Code</h3></div>
                    <div className="sim-panel-body" style={{ padding: '10px 0 0' }}>
                      <textarea
                        value={s12ExplainInput}
                        onChange={(e) => setS12ExplainInput(e.target.value)}
                        style={{ width: '100%', height: '110px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', lineHeight: 1.5, resize: 'vertical' }}
                        placeholder="Explain what this code does, in your own words."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      className={`btn-cyber ${s12Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                      disabled={s12Verifying}
                      onClick={async () => {
                        const ex = S12_EXERCISES[s12ActiveExercise - 1];
                        saveExerciseSubmission('l1-s12', s12ActiveExercise, { plan: s12PlanInput, prompt: s12PromptInput, outputCode: s12OutputCodeInput, explain: s12ExplainInput });
                        const filled = s12PromptInput.trim();
                        if (!filled) {
                          setS12Logs([{ type: 'error', text: '✗ Write a prompt before verifying — that\'s the only box graded.' }]);
                          setS12Success(false);
                          return;
                        }
                        setS12Verifying(true);
                        setS12Logs([{ type: 'info', text: `Checking prompt quality for Exercise 12.${s12ActiveExercise}...` }]);
                        try {
                          const res = await fetch('/api/audit-submission', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                              prompt: s12PromptInput,
                              context: `${ex.problem} ${ex.instruction}`
                            })
                          });
                          const verdict = await res.json();
                          if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);

                          const logs = [];
                          if (verdict.pass) {
                            logs.push({ type: 'success', text: `✓ Good prompt! ${ex.title} complete.` });
                            logs.push({ type: 'info', text: verdict.feedback });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'info', text: `  💡 ${tip}` }));
                            setS12Success(true);
                            const prog = markExerciseComplete('l1-s12', s12ActiveExercise);
                            if (prog.allDone) {
                              logs.push({ type: 'success', text: '✓ LEVEL 1 CAPSTONE COMPLETE! The Racing Car Game is fully certified. Onward to Level 2!' });
                              if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                            } else {
                              logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                            }
                          } else {
                            logs.push({ type: 'error', text: `✗ Your prompt needs work: ${verdict.feedback}` });
                            (verdict.tips || []).forEach(tip => logs.push({ type: 'error', text: `  💡 ${tip}` }));
                            setS12Success(false);
                          }
                          setS12Logs(logs);
                        } catch (err) {
                          setS12Logs([{ type: 'error', text: `✗ Couldn't reach the AI Auditor (${err.message}). Please try again.` }]);
                          setS12Success(false);
                        } finally {
                          setS12Verifying(false);
                        }
                      }}
                    >
                      {s12Verifying ? 'Checking prompt quality…' : s12Success ? '✓ Exercise Complete' : 'Verify Prompt Quality'}
                    </button>
                    <button
                      className="btn-cyber btn-cyber-red btn-small"
                      onClick={() => {
                        setS12PlanInput('');
                        setS12PromptInput('');
                        setS12OutputCodeInput('');
                        setS12ExplainInput('');
                        setS12Logs([]);
                        setS12Success(false);
                        setSimConsoleLogs([]);
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 1: DEFENSE ARENA CANVAS INIT (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s1' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S1_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s1ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s1-${l2s1ActiveExercise}`]: l2s1CodeInput }));
                          setL2s1ActiveExercise(ex.num);
                          setL2s1CodeInput(savedExerciseCode[`l2-s1-${ex.num}`] ?? ex.preloaded);
                          setL2s1Logs([]);
                          setL2s1Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 1.{ex.num}{(exerciseProgress['l2-s1'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S1_EXERCISES[l2s1ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S1_EXERCISES[l2s1ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S1_EXERCISES[l2s1ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s1Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S1_EXERCISES[l2s1ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing canvas initialization logic for Exercise 1.${l2s1ActiveExercise}...` }];
                            const pass = ex.validate(l2s1CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s1Success(true);
                              const prog = markExerciseComplete('l2-s1', l2s1ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 1 CHALLENGES COMPLETE! The Defense Arena canvas is ready.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Canvas setup or draw parameters missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s1Success(false);
                            }
                            setL2s1Logs(logs);
                          }}
                        >
                          {l2s1Success ? '✓ Exercise Complete' : 'Verify Canvas Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s1CodeInput(L2S1_EXERCISES[l2s1ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s1CodeInput}
                          onChange={(e) => setL2s1CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S1_EXERCISES[l2s1ActiveExercise - 1].runnable ? l2s1CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s1Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s1Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 2: SPRITE OBJECT MODELING (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s2' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S2_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s2ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s2-${l2s2ActiveExercise}`]: l2s2CodeInput }));
                          setL2s2ActiveExercise(ex.num);
                          setL2s2CodeInput(savedExerciseCode[`l2-s2-${ex.num}`] ?? ex.preloaded);
                          setL2s2Logs([]);
                          setL2s2Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 2.{ex.num}{(exerciseProgress['l2-s2'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S2_EXERCISES[l2s2ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S2_EXERCISES[l2s2ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S2_EXERCISES[l2s2ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s2Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S2_EXERCISES[l2s2ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing sprite object logic for Exercise 2.${l2s2ActiveExercise}...` }];
                            const pass = ex.validate(l2s2CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s2Success(true);
                              const prog = markExerciseComplete('l2-s2', l2s2ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 2 CHALLENGES COMPLETE! The ship sprite is fully animated.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Sprite object or movement logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s2Success(false);
                            }
                            setL2s2Logs(logs);
                          }}
                        >
                          {l2s2Success ? '✓ Exercise Complete' : 'Verify Sprite Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s2CodeInput(L2S2_EXERCISES[l2s2ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s2CodeInput}
                          onChange={(e) => setL2s2CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S2_EXERCISES[l2s2ActiveExercise - 1].runnable ? l2s2CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s2Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s2Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 3: LASER BATTERY ARRAYS (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s3' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S3_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s3ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s3-${l2s3ActiveExercise}`]: l2s3CodeInput }));
                          setL2s3ActiveExercise(ex.num);
                          setL2s3CodeInput(savedExerciseCode[`l2-s3-${ex.num}`] ?? ex.preloaded);
                          setL2s3Logs([]);
                          setL2s3Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 3.{ex.num}{(exerciseProgress['l2-s3'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S3_EXERCISES[l2s3ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S3_EXERCISES[l2s3ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S3_EXERCISES[l2s3ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s3Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S3_EXERCISES[l2s3ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing laser array logic for Exercise 3.${l2s3ActiveExercise}...` }];
                            const pass = ex.validate(l2s3CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s3Success(true);
                              const prog = markExerciseComplete('l2-s3', l2s3ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 3 CHALLENGES COMPLETE! The laser battery is online.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Array declaration or loop logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s3Success(false);
                            }
                            setL2s3Logs(logs);
                          }}
                        >
                          {l2s3Success ? '✓ Exercise Complete' : 'Verify Array Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s3CodeInput(L2S3_EXERCISES[l2s3ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s3CodeInput}
                          onChange={(e) => setL2s3CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S3_EXERCISES[l2s3ActiveExercise - 1].runnable ? l2s3CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s3Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s3Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 4: LASER MOTION & GARBAGE COLLECTION (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s4' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S4_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s4ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s4-${l2s4ActiveExercise}`]: l2s4CodeInput }));
                          setL2s4ActiveExercise(ex.num);
                          setL2s4CodeInput(savedExerciseCode[`l2-s4-${ex.num}`] ?? ex.preloaded);
                          setL2s4Logs([]);
                          setL2s4Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 4.{ex.num}{(exerciseProgress['l2-s4'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S4_EXERCISES[l2s4ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S4_EXERCISES[l2s4ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S4_EXERCISES[l2s4ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s4Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S4_EXERCISES[l2s4ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing garbage collection logic for Exercise 4.${l2s4ActiveExercise}...` }];
                            const pass = ex.validate(l2s4CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s4Success(true);
                              const prog = markExerciseComplete('l2-s4', l2s4ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 4 CHALLENGES COMPLETE! Memory leaks eliminated.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Reverse loop or splice logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s4Success(false);
                            }
                            setL2s4Logs(logs);
                          }}
                        >
                          {l2s4Success ? '✓ Exercise Complete' : 'Verify Cleanup Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s4CodeInput(L2S4_EXERCISES[l2s4ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s4CodeInput}
                          onChange={(e) => setL2s4CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S4_EXERCISES[l2s4ActiveExercise - 1].runnable ? l2s4CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s4Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s4Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 5: ALIEN SWARMS & SHIELD GRIDS (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s5' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S5_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s5ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s5-${l2s5ActiveExercise}`]: l2s5CodeInput }));
                          setL2s5ActiveExercise(ex.num);
                          setL2s5CodeInput(savedExerciseCode[`l2-s5-${ex.num}`] ?? ex.preloaded);
                          setL2s5Logs([]);
                          setL2s5Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 5.{ex.num}{(exerciseProgress['l2-s5'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S5_EXERCISES[l2s5ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S5_EXERCISES[l2s5ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S5_EXERCISES[l2s5ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s5Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S5_EXERCISES[l2s5ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing swarm grid logic for Exercise 5.${l2s5ActiveExercise}...` }];
                            const pass = ex.validate(l2s5CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s5Success(true);
                              const prog = markExerciseComplete('l2-s5', l2s5ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 5 CHALLENGES COMPLETE! Swarm grid and shield systems online.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Grid or shield lookup logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s5Success(false);
                            }
                            setL2s5Logs(logs);
                          }}
                        >
                          {l2s5Success ? '✓ Exercise Complete' : 'Verify Swarm Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s5CodeInput(L2S5_EXERCISES[l2s5ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s5CodeInput}
                          onChange={(e) => setL2s5CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S5_EXERCISES[l2s5ActiveExercise - 1].runnable ? l2s5CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s5Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s5Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 6: FIRING CONTROL & COLLISION SWEEPS (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s6' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S6_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s6ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s6-${l2s6ActiveExercise}`]: l2s6CodeInput }));
                          setL2s6ActiveExercise(ex.num);
                          setL2s6CodeInput(savedExerciseCode[`l2-s6-${ex.num}`] ?? ex.preloaded);
                          setL2s6Logs([]);
                          setL2s6Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 6.{ex.num}{(exerciseProgress['l2-s6'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S6_EXERCISES[l2s6ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S6_EXERCISES[l2s6ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S6_EXERCISES[l2s6ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s6Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S6_EXERCISES[l2s6ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing input matrix / collision sweep logic for Exercise 6.${l2s6ActiveExercise}...` }];
                            const pass = ex.validate(l2s6CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s6Success(true);
                              const prog = markExerciseComplete('l2-s6', l2s6ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 6 CHALLENGES COMPLETE! Firing control and collision sweeps online.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Key-state or sweep logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s6Success(false);
                            }
                            setL2s6Logs(logs);
                          }}
                        >
                          {l2s6Success ? '✓ Exercise Complete' : 'Verify Input/Sweep Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s6CodeInput(L2S6_EXERCISES[l2s6ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s6CodeInput}
                          onChange={(e) => setL2s6CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S6_EXERCISES[l2s6ActiveExercise - 1].runnable ? l2s6CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s6Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s6Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 7: HUD GAUGES & PERFORMANCE AUDITS (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s7' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S7_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s7ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s7-${l2s7ActiveExercise}`]: l2s7CodeInput }));
                          setL2s7ActiveExercise(ex.num);
                          setL2s7CodeInput(savedExerciseCode[`l2-s7-${ex.num}`] ?? ex.preloaded);
                          setL2s7Logs([]);
                          setL2s7Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 7.{ex.num}{(exerciseProgress['l2-s7'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S7_EXERCISES[l2s7ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S7_EXERCISES[l2s7ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S7_EXERCISES[l2s7ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s7Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S7_EXERCISES[l2s7ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing HUD / performance audit logic for Exercise 7.${l2s7ActiveExercise}...` }];
                            const pass = ex.validate(l2s7CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s7Success(true);
                              const prog = markExerciseComplete('l2-s7', l2s7ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 7 CHALLENGES COMPLETE! HUD and wave systems online.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. HUD or wave-check logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s7Success(false);
                            }
                            setL2s7Logs(logs);
                          }}
                        >
                          {l2s7Success ? '✓ Exercise Complete' : 'Verify HUD/Wave Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s7CodeInput(L2S7_EXERCISES[l2s7ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s7CodeInput}
                          onChange={(e) => setL2s7CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S7_EXERCISES[l2s7ActiveExercise - 1].runnable ? l2s7CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s7Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s7Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 8: MISSION CONTROL UPLINK — HOW THE WEB WORKS (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s8' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S8_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s8ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s8-${l2s8ActiveExercise}`]: l2s8CodeInput }));
                          setL2s8ActiveExercise(ex.num);
                          setL2s8CodeInput(savedExerciseCode[`l2-s8-${ex.num}`] ?? ex.preloaded);
                          setL2s8Logs([]);
                          setL2s8Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 8.{ex.num}{(exerciseProgress['l2-s8'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S8_EXERCISES[l2s8ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S8_EXERCISES[l2s8ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S8_EXERCISES[l2s8ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s8Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S8_EXERCISES[l2s8ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Auditing request/response comprehension for Exercise 8.${l2s8ActiveExercise}...` }];
                            const pass = ex.validate(l2s8CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s8Success(true);
                              const prog = markExerciseComplete('l2-s8', l2s8ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 8 CHALLENGES COMPLETE! Mission Control uplink verified.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Answer is missing required detail.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s8Success(false);
                            }
                            setL2s8Logs(logs);
                          }}
                        >
                          {l2s8Success ? '✓ Exercise Complete' : 'Verify Answer'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s8CodeInput(L2S8_EXERCISES[l2s8ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Answer Editor (notes.txt)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s8CodeInput}
                          onChange={(e) => setL2s8CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write your answer here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S8_EXERCISES[l2s8ActiveExercise - 1].runnable ? l2s8CodeInput : '// Session 8 is a comprehension exercise — no game code to run.\n// Answer in the editor and click Verify.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s8Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write your answer and click Verify.</div>
                          ) : [...l2s8Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 9: ASYNCHRONOUS TELEMETRY — FETCHING THE LEADERBOARD (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s9' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S9_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s9ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s9-${l2s9ActiveExercise}`]: l2s9CodeInput }));
                          setL2s9ActiveExercise(ex.num);
                          setL2s9CodeInput(savedExerciseCode[`l2-s9-${ex.num}`] ?? ex.preloaded);
                          setL2s9Logs([]);
                          setL2s9Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 9.{ex.num}{(exerciseProgress['l2-s9'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S9_EXERCISES[l2s9ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S9_EXERCISES[l2s9ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S9_EXERCISES[l2s9ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s9Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S9_EXERCISES[l2s9ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing async fetch logic for Exercise 9.${l2s9ActiveExercise}...` }];
                            const pass = ex.validate(l2s9CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s9Success(true);
                              const prog = markExerciseComplete('l2-s9', l2s9ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 9 CHALLENGES COMPLETE! Leaderboard telemetry link established.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Async/await or try/catch logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s9Success(false);
                            }
                            setL2s9Logs(logs);
                          }}
                        >
                          {l2s9Success ? '✓ Exercise Complete' : 'Verify Fetch Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s9CodeInput(L2S9_EXERCISES[l2s9ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s9CodeInput}
                          onChange={(e) => setL2s9CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S9_EXERCISES[l2s9ActiveExercise - 1].runnable ? l2s9CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s9Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s9Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 10: POST PAYLOADS & ERROR HANDLING (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s10' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S10_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s10ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s10-${l2s10ActiveExercise}`]: l2s10CodeInput }));
                          setL2s10ActiveExercise(ex.num);
                          setL2s10CodeInput(savedExerciseCode[`l2-s10-${ex.num}`] ?? ex.preloaded);
                          setL2s10Logs([]);
                          setL2s10Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 10.{ex.num}{(exerciseProgress['l2-s10'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S10_EXERCISES[l2s10ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S10_EXERCISES[l2s10ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S10_EXERCISES[l2s10ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s10Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S10_EXERCISES[l2s10ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Analyzing POST submission logic for Exercise 10.${l2s10ActiveExercise}...` }];
                            const pass = ex.validate(l2s10CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s10Success(true);
                              const prog = markExerciseComplete('l2-s10', l2s10ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 10 CHALLENGES COMPLETE! Score submission uplink verified.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. POST options or status-check logic missing.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s10Success(false);
                            }
                            setL2s10Logs(logs);
                          }}
                        >
                          {l2s10Success ? '✓ Exercise Complete' : 'Verify Submission Logic'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s10CodeInput(L2S10_EXERCISES[l2s10ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s10CodeInput}
                          onChange={(e) => setL2s10CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write JavaScript here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S10_EXERCISES[l2s10ActiveExercise - 1].runnable ? l2s10CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s10Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s10Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 11: THE COLONY DATA VAULT — TABLES, SCHEMAS & SQL QUERIES (SQL Sandbox) */}
              {sandboxSessionId === 'l2-s11' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S11_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s11ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s11-${l2s11ActiveExercise}`]: l2s11CodeInput }));
                          setL2s11ActiveExercise(ex.num);
                          setL2s11CodeInput(savedExerciseCode[`l2-s11-${ex.num}`] ?? ex.preloaded);
                          setL2s11Logs([]);
                          setL2s11Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 11.{ex.num}{(exerciseProgress['l2-s11'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S11_EXERCISES[l2s11ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S11_EXERCISES[l2s11ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S11_EXERCISES[l2s11ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s11Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S11_EXERCISES[l2s11ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Auditing SQL schema/query for Exercise 11.${l2s11ActiveExercise}...` }];
                            const pass = ex.validate(l2s11CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s11Success(true);
                              const prog = markExerciseComplete('l2-s11', l2s11ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 11 CHALLENGES COMPLETE! Colony data vault schema online.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. SQL statement is missing required detail.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s11Success(false);
                            }
                            setL2s11Logs(logs);
                          }}
                        >
                          {l2s11Success ? '✓ Exercise Complete' : 'Verify SQL'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s11CodeInput(L2S11_EXERCISES[l2s11ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>SQL Editor (query.sql)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s11CodeInput}
                          onChange={(e) => setL2s11CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write your SQL here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>SQL Playground Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview('// Session 11 is a SQL exercise — no canvas code to run.\n// Write your SQL in the editor and click Verify.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="SQL Playground Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s11Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write your SQL and click Verify.</div>
                          ) : [...l2s11Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 12: DEFENDING THE DATA VAULT — VALIDATION, PASSWORDS & INJECTION AWARENESS (SQL Sandbox) */}
              {sandboxSessionId === 'l2-s12' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S12_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s12ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s12-${l2s12ActiveExercise}`]: l2s12CodeInput }));
                          setL2s12ActiveExercise(ex.num);
                          setL2s12CodeInput(savedExerciseCode[`l2-s12-${ex.num}`] ?? ex.preloaded);
                          setL2s12Logs([]);
                          setL2s12Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 12.{ex.num}{(exerciseProgress['l2-s12'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S12_EXERCISES[l2s12ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S12_EXERCISES[l2s12ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S12_EXERCISES[l2s12ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s12Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S12_EXERCISES[l2s12ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Auditing validation/injection logic for Exercise 12.${l2s12ActiveExercise}...` }];
                            const pass = ex.validate(l2s12CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s12Success(true);
                              const prog = markExerciseComplete('l2-s12', l2s12ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 12 CHALLENGES COMPLETE! Trust boundary secured.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Answer or fix is missing required detail.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s12Success(false);
                            }
                            setL2s12Logs(logs);
                          }}
                        >
                          {l2s12Success ? '✓ Exercise Complete' : 'Verify Answer'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s12CodeInput(L2S12_EXERCISES[l2s12ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>SQL / Code Editor</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s12CodeInput}
                          onChange={(e) => setL2s12CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write your answer, SQL, or JS here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S12_EXERCISES[l2s12ActiveExercise - 1].runnable ? l2s12CodeInput : '// This step is a plan/prompt/review/SQL exercise — nothing to run yet.\n// Jump to the "Test & Break" JS exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s12Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write your answer and click Verify.</div>
                          ) : [...l2s12Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEVEL 2 SESSION 13: GRADUATION SPRINT & LEVEL 2 DEFENSE (Canvas Sandbox) */}
              {sandboxSessionId === 'l2-s13' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  <div className="exercise-selector-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', flexWrap: 'wrap' }}>
                    {L2S13_EXERCISES.map((ex) => (
                      <button
                        key={ex.num}
                        className={`btn-cyber btn-small ${l2s13ActiveExercise === ex.num ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => {
                          setSavedExerciseCode(prev => ({ ...prev, [`l2-s13-${l2s13ActiveExercise}`]: l2s13CodeInput }));
                          setL2s13ActiveExercise(ex.num);
                          setL2s13CodeInput(savedExerciseCode[`l2-s13-${ex.num}`] ?? ex.preloaded);
                          setL2s13Logs([]);
                          setL2s13Success(false);
                          setSimConsoleLogs([]);
                        }}
                      >
                        Ex 13.{ex.num}{(exerciseProgress['l2-s13'] || []).includes(ex.num) ? ' ✓' : ''}
                      </button>
                    ))}
                  </div>

                  <div className="simulator-grid">
                    <div className="glass-panel sim-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div className="panel-header">
                          <h4 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{L2S13_EXERCISES[l2s13ActiveExercise - 1].title}</h4>
                        </div>
                        <div className="sim-panel-body" style={{ marginTop: '10px' }}>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                            <strong>Problem:</strong> {L2S13_EXERCISES[l2s13ActiveExercise - 1].problem}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                            <strong>Instruction:</strong> {L2S13_EXERCISES[l2s13ActiveExercise - 1].instruction}
                          </p>
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button
                          className={`btn-cyber ${l2s13Success ? 'btn-cyber-green' : 'btn-cyber-primary'}`}
                          onClick={() => {
                            const ex = L2S13_EXERCISES[l2s13ActiveExercise - 1];
                            const logs = [{ type: 'info', text: `Running graduation diagnostic for Exercise 13.${l2s13ActiveExercise}...` }];
                            const pass = ex.validate(l2s13CodeInput);
                            if (pass) {
                              logs.push({ type: 'success', text: `✓ Correct! ${ex.title} validation passed.` });
                              setL2s13Success(true);
                              const prog = markExerciseComplete('l2-s13', l2s13ActiveExercise);
                              if (prog.allDone) {
                                logs.push({ type: 'success', text: '✓ SESSION 13 CHALLENGES COMPLETE! Level 2 Defense passed — cleared for Level 3.' });
                                if (prog.locked) logs.push({ type: 'info', text: 'XP will be awarded automatically once the earlier sessions are completed.' });
                              } else {
                                logs.push({ type: 'info', text: `Progress: ${prog.doneCount}/${prog.total} exercises complete.` });
                              }
                            } else {
                              logs.push({ type: 'error', text: `✗ Validation failed. Review the relevant earlier session and try again.` });
                              logs.push({ type: 'info', text: `Hint: ${ex.hint}` });
                              setL2s13Success(false);
                            }
                            setL2s13Logs(logs);
                          }}
                        >
                          {l2s13Success ? '✓ Exercise Complete' : 'Verify Answer'}
                        </button>
                        <button className="btn-cyber btn-cyber-red btn-small" onClick={() => { setL2s13CodeInput(L2S13_EXERCISES[l2s13ActiveExercise - 1].preloaded); setSimConsoleLogs([]); }}>
                          Reset Code
                        </button>
                      </div>
                    </div>

                    <div className="glass-panel sim-middle">
                      <div className="panel-header">
                        <h3>Code Editor (canvas.js)</h3>
                      </div>
                      <div className="sim-panel-body" style={{ height: '100%', padding: '10px' }}>
                        <textarea
                          value={l2s13CodeInput}
                          onChange={(e) => setL2s13CodeInput(e.target.value)}
                          style={{ width: '100%', height: '500px', background: 'rgba(6, 8, 20, 0.7)', color: '#00ffcc', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.5, resize: 'none' }}
                          placeholder="Write your answer here..."
                        />
                      </div>
                    </div>

                    <div className="glass-panel sim-right">
                      <div className="panel-header">
                        <h3>Live Canvas Preview</h3>
                      </div>
                      <div className="sim-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <iframe
                          srcDoc={buildCanvasSandboxPreview(L2S13_EXERCISES[l2s13ActiveExercise - 1].runnable ? l2s13CodeInput : '// This step is a plan/prompt/review exercise — nothing to run yet.\n// Jump to a "Test & Break" or "Iterate & Improve" exercise to see live code execution.')}
                          style={{ width: '100%', height: '350px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                          title="Canvas Sandbox Live Preview"
                        />
                        <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                          {[...l2s13Logs, ...simConsoleLogs].length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Logs ready. Write code and click Verify.</div>
                          ) : [...l2s13Logs, ...simConsoleLogs].map((log, idx) => (
                            <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                              {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                              {log.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STANDARD PROMPT SANDBOX FOR LEVEL 2-4 */}
              {!['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12', 'l2-s1', 'l2-s2', 'l2-s3', 'l2-s4', 'l2-s5', 'l2-s6', 'l2-s7', 'l2-s8', 'l2-s9', 'l2-s10', 'l2-s11', 'l2-s12', 'l2-s13'].includes(sandboxSessionId) && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '20px', height: '100%', width: '100%' }}>
                  <div className="glass-panel sandbox-left">
                    <div className="panel-header">
                      <h3>Prompt Specification Panel</h3>
                      <div className="sandbox-rules-indicator">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 14, height: 14 }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        STRICT PROMPT RULES ACTIVE
                      </div>
                    </div>

                    <div className="sandbox-panel-body">
                      <div className="sandbox-field">
                        <label>Role</label>
                        <input type="text" value={sandboxRole} onChange={(e) => setSandboxRole(e.target.value)} placeholder="e.g. Senior System Architect" />
                      </div>
                      <div className="sandbox-field">
                        <label>Task description</label>
                        <textarea value={sandboxTask} onChange={(e) => setSandboxTask(e.target.value)} placeholder="What should the AI code generator build?" />
                      </div>
                      <div className="sandbox-field">
                        <label>Logical Constraints (Rules)</label>
                        <textarea value={sandboxConstraints} onChange={(e) => setSandboxConstraints(e.target.value)} placeholder="e.g. Prevent double trigger check, zero manual edits allowed" />
                      </div>
                      <div className="sandbox-field">
                        <label>Explicit Input Structure</label>
                        <input type="text" value={sandboxInput} onChange={(e) => setSandboxInput(e.target.value)} placeholder="e.g. weightSensor, elapsedSeconds" />
                      </div>
                      <div className="sandbox-field">
                        <label>Edge cases to handle</label>
                        <input type="text" value={sandboxEdgeCases} onChange={(e) => setSandboxEdgeCases(e.target.value)} placeholder="e.g. Null variables, overflows" />
                      </div>
                    </div>

                    <div className="sandbox-footer">
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Code editor is read-only. Fix bugs via prompt.</span>
                      <button className="btn-cyber btn-cyber-primary" onClick={handleGenerate}>Run AI Generator</button>
                    </div>
                  </div>

                  <div className="sandbox-right">
                    <div className="glass-panel code-screen-panel">
                      <div className="code-screen-header">
                        <div className="code-screen-title">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                          </svg>
                          main_sandbox_output.js
                        </div>
                        {sandboxCodeOutput && (
                          <button className="btn-cyber btn-cyber-red" onClick={runChaosMonkey} disabled={isRunningChaos}>
                            {isRunningChaos ? 'Running Fuzzer...' : 'Launch Chaos Monkey'}
                          </button>
                        )}
                      </div>
                      
                      <div className="code-screen-body">
                        {sandboxCodeOutput ? (
                          <pre style={{ margin: 0 }}>{sandboxCodeOutput}</pre>
                        ) : (
                          <div className="code-screen-empty">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 48, height: 48, stroke: 'var(--text-muted)'}}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>Exercise Workspace Empty.<br/>Fill out the prompt details on the left and click "Run AI Generator" to begin.</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="glass-panel chaos-console-panel">
                      <div className="chaos-console-header">
                        <div className="chaos-console-title">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                          </svg>
                          Chaos Monkey Fuzzing Console
                        </div>
                        {sandboxSuccess && (
                          <span className="badge-cyber badge-green">ALL TESTS PASSED (+100 XP)</span>
                        )}
                      </div>

                      <div className="chaos-console-body">
                        {chaosLogs.length > 0 ? (
                          chaosLogs.map((log, index) => (
                            <div key={index} className={`chaos-log-item ${log.type}`}>
                              <span>{log.type === 'success' && '✓ '}</span>
                              <span>{log.type === 'error' && '✗ '}</span>
                              {log.text}
                            </div>
                          ))
                        ) : (
                          <div className="chaos-console-empty">
                            No active tests. Run the AI Generator and trigger the Chaos Monkey.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Auto fix-prompt: whenever the Live Preview iframe threw a runtime
                  error, surface it as a ready-to-paste follow-up prompt instead of
                  a raw stack trace. Shared across every session since it reads the
                  same simConsoleLogs array every session's preview writes into —
                  see buildFixPrompt for the rationale. */}
              {(() => {
                const latestSimError = [...simConsoleLogs].reverse().find(l => l.type === 'error');
                if (!latestSimError) return null;
                const fixPromptText = buildFixPrompt(latestSimError.text);
                return (
                  <div className="glass-panel" style={{ padding: '16px', marginTop: '20px', border: '1px solid #ff4d4d', background: 'rgba(255, 77, 77, 0.05)' }}>
                    <div className="panel-header"><h3>⚠ Your AI's Code Has a Bug</h3></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0 0' }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                        The code crashed when it ran. Don't edit the code yourself — copy this prompt and paste it back into your AI tool (ChatGPT/Cursor/Copilot) to get a fixed version.
                      </p>
                      <pre style={{ margin: 0, background: 'rgba(0,0,0,0.5)', padding: '12px', borderRadius: '4px', fontSize: '0.8rem', color: '#00ffcc', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)' }}>
                        {fixPromptText}
                      </pre>
                      <button
                        className="btn-cyber btn-cyber-primary btn-small"
                        style={{ alignSelf: 'flex-start' }}
                        onClick={() => copyPromptToClipboard(fixPromptText, 'fix-prompt')}
                      >
                        {promptCopiedKey === 'fix-prompt' ? '✓ Copied' : 'Copy Fix Prompt'}
                      </button>
                    </div>
                  </div>
                );
              })()}

                </div>
              </div>
            </div>
          )}

          {/* Project Journal View */}
          {activeTab === 'journal' && (
            <div className="tab-journal journal-layout animate-in" style={{ display: 'grid', gridTemplateColumns: showProjectTasks ? '0.8fr 2fr' : '1fr', gap: '24px', height: 'calc(100vh - 140px)' }}>
              
              {/* Left sidebar: Sessions List */}
              {showProjectTasks && (
                <div className="glass-panel journal-sidebar-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', overflowY: 'auto', padding: '16px' }}>
                  <div style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-color)', marginBottom: 12 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Project Tasks</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>Select a Session to Work On</div>
                  </div>
                  
                  {CURRICULUM_DATA.filter(s => s.level === curriculumLevel).map(session => {
                    // Prefer an entry whose id actually follows the `${userId}_${sessionId}`
                    // convention (what "Initialize Project Journal" creates, and what the detail
                    // panel below strictly requires to resolve `currentSession`). Only fall back
                    // to a fuzzy title match for legacy entries that predate that convention —
                    // otherwise a stray auto-logged entry (see claimCaseEvidence) with a random
                    // id and the raw curriculum title can shadow the real entry here even though
                    // the detail panel can't open it, making the session look journal-less.
                    const matchingJournal =
                      journalEntries.find(j => j.id.endsWith('_' + session.id) || j.id === session.id) ||
                      journalEntries.find(j => j.title.toLowerCase().includes(session.title.toLowerCase()));
                    const isSelected = selectedJournal && (selectedJournal.id === matchingJournal?.id || (matchingJournal === undefined && selectedJournalId === `${currentUser?.id}_${session.id}`));
                    
                    return (
                      <div 
                        key={session.id} 
                        className={`glass-panel journal-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          if (matchingJournal) {
                            setSelectedJournalId(matchingJournal.id);
                            setActiveJournalVersion(matchingJournal.activeVersion || matchingJournal.active_version || 1);
                          } else {
                            setSelectedJournalId(`${currentUser?.id}_${session.id}`);
                            setActiveJournalVersion(1);
                          }
                        }}
                        style={{ padding: '12px', cursor: 'pointer', border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)', background: isSelected ? 'rgba(0, 242, 254, 0.05)' : 'none', borderRadius: '6px' }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                          <span>SESSION {session.id.split('-s')[1]}</span>
                          {matchingJournal ? (
                            <span className="badge-cyber badge-green">LOGGED</span>
                          ) : (
                            <span className="badge-cyber badge-red" style={{ background: 'rgba(255, 77, 77, 0.1)', color: '#ff4d4d' }}>UNSTARTED</span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                          {session.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              
              {/* Right main panel: Tabbed Journal Details */}
<div className="glass-panel journal-detail-view" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', padding: '20px' }}>
                {(() => {
                  const currentSession = CURRICULUM_DATA.find(s => 
                    selectedJournalId.endsWith('_' + s.id) || selectedJournalId === s.id
                  );
                  
                  if (!currentSession) {
                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '16px' }}>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small" 
                            onClick={() => setShowProjectTasks(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showProjectTasks ? 'Hide Tasks Sidebar' : 'Show Tasks Sidebar'}
                          </button>
                        </div>
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 48, flexGrow: 1 }}>
                          Select a Session on the left to review your Project Journal.
                        </div>
                      </div>
                    );
                  }
                  
                  const isInitialized = selectedJournal && selectedJournal.id.endsWith('_' + currentSession.id);

                  // L1 Sessions 1-8 use a reduced 3-box Project Task format (Plan & Design /
                  // Prompt & Output Code / Explain the Code) — Test & Iterate are dropped from
                  // the UI for these sessions only; every other session keeps the original
                  // 5-tab layout untouched.
                  const isL1S4 = ['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(currentSession.id);
                  // l1-s1 is conceptual (no runnable code), so its Box 2 output is a written
                  // AI answer, not code — label it accordingly and skip the live-preview panel.
                  const journalOutputLabel = currentSession.id === 'l1-s1' ? 'Output' : 'Output Code';
                  // Guard against arriving on this session while a stale 'test'/'iterate' tab
                  // selection carried over from a previously viewed session.
                  const effectiveJournalTab = isL1S4 && !['plan', 'prompt', 'review'].includes(activeJournalTab) ? 'plan' : activeJournalTab;

                  if (!isInitialized) {
                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '16px' }}>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small" 
                            onClick={() => setShowProjectTasks(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showProjectTasks ? 'Hide Tasks Sidebar' : 'Show Tasks Sidebar'}
                          </button>
                        </div>
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', justifyContent: 'center', flexGrow: 1 }}>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, stroke: 'var(--text-muted)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                          <div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Project Journal Offline</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '360px', margin: '0 auto' }}>
                              You have not started your Project Journal homework for this session yet. Initialize the journal log template to begin.
                            </p>
                          </div>
                          <button 
                            className="btn-cyber btn-cyber-primary" 
                            onClick={() => {
                              const newId = `${currentUser.id}_${currentSession.id}`;
                              const newTitle = `L${currentSession.level} S${currentSession.id.split('-s')[1]}: ${currentSession.title.replace(/Session \d+:\s*"/, '').replace(/"/, '')}`;
                              // Chained sessions (see PROJECT_TASKS[id].chainFrom) start from the
                              // previous session's own saved code instead of blank, so the game
                              // genuinely accumulates session-by-session. If that session hasn't
                              // been started yet, this quietly falls back to blank — non-blocking.
                              const chainFromId = PROJECT_TASKS[currentSession.id]?.chainFrom;
                              const seededCodeOutput = chainFromId ? getSessionCodeOutput(chainFromId) : '';
                              const initialSerialized = serializeJournalData('', '', '', seededCodeOutput, '', '', '', '', '');
                              const initialPrompt = '';
                              fetch('/api/journal', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Authorization': `Bearer ${token}`
                                },
                                body: JSON.stringify({
                                  id: newId,
                                  title: newTitle,
                                  prompt: initialPrompt,
                                  code: initialSerialized
                                })
                              })
                              .then(res => res.json())
                              .then(() => {
                                fetch('/api/journal', {
                                  headers: { 'Authorization': `Bearer ${token}` }
                                })
                                .then(res => res.json())
                                .then(data => {
                                  setJournalEntries(data);
                                  setSelectedJournalId(newId);
                                  setActiveJournalVersion(1);
                                });
                              });
                            }}
                          >
                            Initialize Project Journal
                          </button>
                        </div>
                      </div>
                    );
                  }
                  

                  
                  return (
                    <>
                      <div className="journal-detail-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                        <div>
                          <button 
                            className="btn-cyber btn-cyber-secondary btn-small" 
                            onClick={() => setShowProjectTasks(prev => !prev)}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            {showProjectTasks ? 'Hide Tasks Sidebar' : 'Show Tasks Sidebar'}
                          </button>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <h2 className="journal-detail-title" style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>{selectedJournal.title}</h2>
                          <span className="journal-detail-date" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LOGGED AT {selectedJournal.date}</span>
                        </div>
                      </div>

                      {/* Project Task Guide Header Card */}
                      {PROJECT_TASKS[currentSession.id] && (
                        <div className="glass-panel" style={{ padding: '16px', marginBottom: '16px', borderLeft: '4px solid var(--accent-purple)', background: 'rgba(138, 43, 226, 0.03)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                              {({ 1: '🏎️ Racing Car Project', 2: '🚀 Mars Colony Defense Project', 3: '🕵️ Cyberpunk Hacker Arena Project', 4: '🛰️ Mission Control Dashboard Project' })[currentSession.level] || 'Project'} — {PROJECT_TASKS[currentSession.id].partNum}
                            </span>
                            <span className="badge-cyber badge-purple" style={{ fontSize: '0.65rem', background: 'rgba(138, 43, 226, 0.2)', color: 'rgb(180, 100, 255)' }}>Active Milestone</span>
                          </div>
                          <h3 style={{ margin: '4px 0 8px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                            {PROJECT_TASKS[currentSession.id].partTitle}
                          </h3>
                          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                            <div style={{ flex: '1 1 260px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                              <strong>Milestone Objectives:</strong>
                              <ul style={{ margin: '4px 0 0 0', paddingLeft: '16px', listStyleType: 'disc' }}>
                                {PROJECT_TASKS[currentSession.id].objectives.map((obj, i) => (
                                  <li key={i} style={{ marginBottom: '2px' }}>{obj}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Target Outcome Preview: a small rendered picture of what this milestone
                                should visually produce once complete, so objectives aren't just text.
                                Sits beside the objectives so students see the "screen so far" at a glance. */}
                            {PROJECT_TASKS[currentSession.id].targetOutcomeHtml && (
                              <div style={{ flex: '0 0 220px', width: '220px' }}>
                                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-purple)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '4px' }}>
                                  🎯 Target Outcome
                                </span>
                                <iframe
                                  srcDoc={`
                                    <html>
                                      <head><style>${S2_PREVIEW_STYLE_CSS_MINI}</style></head>
                                      <body>${PROJECT_TASKS[currentSession.id].targetOutcomeHtml}</body>
                                    </html>
                                  `}
                                  style={{ width: '100%', height: '105px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                                  title="Milestone Target Outcome Preview"
                                />
                                {PROJECT_TASKS[currentSession.id].targetOutcomeCaption && (
                                  <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: 0, fontStyle: 'italic', lineHeight: 1.3 }}>
                                    {PROJECT_TASKS[currentSession.id].targetOutcomeCaption}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Final-session assembly, read-only text (not a live-executing iframe — the
                          platform tracks the student's real game, it doesn't run it for them).
                          Driven entirely by PROJECT_TASKS[id].finalAssembly so any level's last
                          session can opt in, not just L1's. Walks the declared chain by name so a
                          gap is named, not silent. */}
                      {PROJECT_TASKS[currentSession.id]?.finalAssembly && (() => {
                        const assembly = PROJECT_TASKS[currentSession.id].finalAssembly;
                        const missing = (assembly.chainCheckIds || []).filter(id => !getSessionCodeOutput(id));
                        const missingTitles = missing.map(id => {
                          const s = CURRICULUM_DATA.find(cs => cs.id === id);
                          return s ? s.title : id;
                        });
                        const codeBlock = (label, code) => (
                          <div key={label} style={{ marginBottom: '12px' }}>
                            <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-purple)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</span>
                            <pre style={{ margin: 0, maxHeight: '260px', overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: '#0d1526', border: '1px solid #22314f', borderRadius: '4px', padding: '10px', color: '#00ffcc', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                              {code || '(nothing saved yet)'}
                            </pre>
                          </div>
                        );
                        return (
                          <div className="glass-panel" style={{ padding: '16px', marginBottom: '16px', borderLeft: '4px solid var(--accent-green)', background: 'rgba(57, 255, 20, 0.03)' }}>
                            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: 'var(--accent-green)' }}>{assembly.title}</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 12px 0' }}>
                              {assembly.description}
                            </p>
                            {missing.length > 0 && (
                              <div style={{ padding: '8px 10px', marginBottom: '12px', background: 'rgba(255, 51, 102, 0.08)', border: '1px solid var(--accent-red)', borderRadius: '4px', fontSize: '0.78rem', color: 'var(--accent-red)' }}>
                                ⚠ Incomplete build — no saved code found for: {missingTitles.join(', ')}. Finish those sessions' Project Journals (and click 🔄 Pull Latest on any session after them) to complete the assembly.
                              </div>
                            )}
                            {assembly.blocks.map(block => {
                              // The block matching the CURRENT session should reflect live unsaved
                              // edits (editingCodeOutput), same as before; other blocks read the
                              // saved value from that session's own journal entry.
                              const code = block.sessionId === currentSession.id
                                ? (editingCodeOutput || getSessionCodeOutput(block.sessionId))
                                : getSessionCodeOutput(block.sessionId);
                              return codeBlock(block.label, code);
                            })}
                          </div>
                        );
                      })()}

                      {/* Sub-tabs selection. L1S4 is a trial of a reduced 3-box format
                          (Plan & Design / Prompt & Output Code / Explain the Code) — Test &
                          Iterate are dropped from the UI for this session only; every other
                          session keeps the original 5-tab layout untouched. */}
                      <div className="journal-tabs" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', marginBottom: '16px' }}>
                        <button
                          className={`btn-cyber btn-small ${effectiveJournalTab === 'plan' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('plan')}
                        >
                          1. Plan & Design
                        </button>
                        <button
                          className={`btn-cyber btn-small ${effectiveJournalTab === 'prompt' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('prompt')}
                        >
                          {isL1S4 ? `2. Prompt & ${journalOutputLabel}` : '2. Write AI Prompt'}
                        </button>
                        <button
                          className={`btn-cyber btn-small ${effectiveJournalTab === 'review' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                          onClick={() => setActiveJournalTab('review')}
                        >
                          {isL1S4 ? `3. Explain the ${journalOutputLabel}` : '3. Review & Explain'}
                        </button>
                        {!isL1S4 && (
                          <>
                            <button
                              className={`btn-cyber btn-small ${activeJournalTab === 'test' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                              onClick={() => setActiveJournalTab('test')}
                            >
                              4. Test & Break
                            </button>
                            <button
                              className={`btn-cyber btn-small ${activeJournalTab === 'iterate' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                              onClick={() => setActiveJournalTab('iterate')}
                            >
                              5. Iterate & Improve
                            </button>
                          </>
                        )}
                      </div>


                      {/* Tab Content Panels */}
                      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        
                        {/* Tab 1: Plan & Design */}
                        {effectiveJournalTab === 'plan' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {/* Reference blocks: read-only carry-over from earlier sessions this one
                                builds on (see PROJECT_TASKS[id].referenceSessions), shown before the
                                student writes anything since it's prep material for Steps 1-2. */}
                            {(PROJECT_TASKS[currentSession.id]?.referenceSessions || []).map(ref => {
                              const refSession = CURRICULUM_DATA.find(s => s.id === ref.id);
                              const refCode = getSessionCodeOutput(ref.id);
                              return (
                                <details key={ref.id} className="glass-panel" style={{ padding: '10px 14px', border: '1px solid var(--border-color)' }}>
                                  <summary style={{ cursor: 'pointer', fontSize: '0.8rem', color: 'var(--accent-purple)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                                    📎 Reference: {ref.label || (refSession ? refSession.title : ref.id)}
                                  </summary>
                                  {refCode ? (
                                    <pre style={{ marginTop: '8px', maxHeight: '220px', overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: '#0d1526', border: '1px solid #22314f', borderRadius: '4px', padding: '10px', color: '#00ffcc', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                                      {refCode}
                                    </pre>
                                  ) : (
                                    <p style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                      Not available yet — the Project Journal for {refSession ? refSession.title : ref.id} hasn't been saved with any code.
                                    </p>
                                  )}
                                </details>
                              );
                            })}
                            {isL1S4 ? (
                              <div className="form-field">
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Plan &amp; Design</label>
                                <textarea
                                  value={editingPlanSpecs}
                                  onChange={e => setEditingPlanSpecs(e.target.value)}
                                  style={{ width: '100%', height: '220px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                  placeholder={PROJECT_TASKS[currentSession.id]?.planSpecs?.parts ? "Planning guidance:\n" + PROJECT_TASKS[currentSession.id].planSpecs.parts : "In plain language: what does this feature need to track, and how should it behave? No code yet."}
                                />
                              </div>
                            ) : (
                              <>
                                <div className="form-field">
                                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>System Parts & Information</label>
                                  <textarea
                                    value={editingPlanSpecs}
                                    onChange={e => setEditingPlanSpecs(e.target.value)}
                                    style={{ width: '100%', height: '130px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                    placeholder={PROJECT_TASKS[currentSession.id]?.planSpecs?.parts ? "Planned system design:\n" + PROJECT_TASKS[currentSession.id].planSpecs.parts : "In plain language, list: what PARTS/pieces does this need? (e.g. a road area, a car, a scoreboard) What INFORMATION does the game need to remember? (e.g. the score, whether the game is running) — no tag names or code yet."}
                                  />
                                </div>
                                <div className="form-field">
                                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Visual Concept &amp; UX Flow</label>
                                  <textarea
                                    value={editingPlanVision}
                                    onChange={e => setEditingPlanVision(e.target.value)}
                                    style={{ width: '100%', height: '90px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                    placeholder={PROJECT_TASKS[currentSession.id]?.planSpecs?.vision ? "Planned look & feel:\n" + PROJECT_TASKS[currentSession.id].planSpecs.vision : "Describe what the player should SEE and experience in plain language — layout, colors, motion, and controls (e.g. a 2-lane road scrolling bottom to top, a red car that moves left/right with the arrow keys)"}
                                  />
                                </div>
                                <div className="form-field">
                                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Logic Flow Diagram / Pseudocode</label>
                                  <textarea
                                    value={editingPlanFlow}
                                    onChange={e => setEditingPlanFlow(e.target.value)}
                                    style={{ width: '100%', height: '150px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                    placeholder={PROJECT_TASKS[currentSession.id]?.planSpecs?.flow ? "Planned control algorithm:\n" + PROJECT_TASKS[currentSession.id].planSpecs.flow : "Outline step-by-step logic in plain English or flowchart syntax (e.g. IF ArrowLeft pressed AND carX > leftBoundary THEN decrease carX)"}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        )}

                        {/* Tab 2: Write AI Prompt (L1S4: Prompt & Output Code, side by side) */}
                        {effectiveJournalTab === 'prompt' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Iterate your prompt versions to improve the generated code output.</span>
                              <div className="journal-history-nav" style={{ display: 'flex', gap: '6px' }}>
                                {selectedJournal.history.map(hist => (
                                  <button
                                    key={hist.version}
                                    className={`version-nav-btn ${activeJournalVersion === hist.version ? 'active' : ''}`}
                                    onClick={() => setActiveJournalVersion(hist.version)}
                                    style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                                  >
                                    v{hist.version}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {isL1S4 ? (
                              <>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                  <div className="form-field">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                      <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Writing Prompt</label>
                                      <button
                                        type="button"
                                        className="btn-cyber btn-small btn-cyber-secondary"
                                        onClick={() => copyPromptToClipboard(editingCodePrompt, 'project-task')}
                                        style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                                      >
                                        {promptCopiedKey === 'project-task' ? '✓ Copied' : 'Copy Prompt'}
                                      </button>
                                    </div>
                                    <textarea
                                      value={editingCodePrompt}
                                      onChange={e => setEditingCodePrompt(e.target.value)}
                                      style={{ width: '100%', height: '280px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}
                                      placeholder={PROJECT_TASKS[currentSession.id]?.promptGuide ? "Draft the detailed prompt to guide your AI assistant. For example:\n" + PROJECT_TASKS[currentSession.id].promptGuide : "Draft the detailed prompt to guide your AI assistant. Specify constraints and outputs."}
                                    />
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                      Best practice: copy your prompt, run it in your own AI tool (ChatGPT, Cursor, Copilot...), then paste the result into Output Code on the right.
                                    </span>
                                  </div>
                                  <div className="form-field">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                      <label style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{journalOutputLabel}</label>
                                      {['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(currentSession.id) && (
                                        <button
                                          type="button"
                                          className="btn-cyber btn-small btn-cyber-secondary"
                                          disabled={projectTaskGenerating || !editingCodePrompt.trim()}
                                          onClick={async () => {
                                            setProjectTaskGenerating(true);
                                            try {
                                              const task = PROJECT_TASKS[currentSession.id];
                                              const res = await fetch('/api/generate-code', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                                body: JSON.stringify({ prompt: editingCodePrompt, context: task?.planSpecs?.vision })
                                              });
                                              const data = await res.json();
                                              if (!res.ok) throw new Error(data.error || `Generation failed (${res.status})`);
                                              // Chained sessions (see PROJECT_TASKS[id].chainFrom) seed this box
                                              // with the full prior session's code on Initialize — appending here
                                              // (instead of replacing) keeps that base code intact, since the new
                                              // snippet is written assuming it already exists (e.g. LANE_WIDTH).
                                              setEditingCodeOutput(prev => (prev && prev.trim() ? `${prev}\n\n${data.code}` : data.code));
                                              setSimConsoleLogs([]);
                                            } catch (err) {
                                              setProjectTaskAuditResult({ pass: false, error: `Couldn't generate code (${err.message}). Please try again, or use your own AI tool instead.` });
                                            } finally {
                                              setProjectTaskGenerating(false);
                                            }
                                          }}
                                          style={{ padding: '2px 10px', fontSize: '0.7rem' }}
                                        >
                                          {projectTaskGenerating ? 'Generating…' : '🤖 Generate Code'}
                                        </button>
                                      )}
                                    </div>
                                    <textarea
                                      value={editingCodeOutput}
                                      onChange={e => setEditingCodeOutput(e.target.value)}
                                      style={{ width: '100%', height: '280px', background: '#030409', color: '#c5cdd8', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
                                      placeholder={PROJECT_TASKS[currentSession.id]?.sampleGeneratedHtml ? "Paste the actual code the AI generated from your prompt here. Example of what this milestone's AI output might look like:\n\n" + PROJECT_TASKS[currentSession.id].sampleGeneratedHtml : "Paste the actual code the AI generated from your prompt here."}
                                    />
                                    {['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(currentSession.id) && (
                                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                        "Generate Code" is a quick in-platform check — for real practice, use your own AI tool via Copy Prompt above.
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {/* Live preview / console kind depends on what this session's Output
                                    actually is: l1-s1 is a written AI answer (nothing to render),
                                    l1-s2/l1-s3 are real HTML/CSS (rendered live), l1-s4 is variables
                                    & math (no visual DOM preview — the real result is console.log),
                                    l1-s5..l1-s12 are real game.js logic that visibly moves the car/
                                    markers/obstacles or updates the HUD, so they get the same live
                                    racing-game DOM preview the exercises use. */}
                                {currentSession.id === 'l1-s2' && (
                                  <div className="glass-panel" style={{ padding: '12px' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '6px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Interactive Live Preview</span>
                                    <iframe
                                      srcDoc={`<html><head><style>${S2_PREVIEW_STYLE_CSS}</style></head><body>${editingCodeOutput || ''}</body></html>`}
                                      style={{ width: '100%', height: '220px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                                      title="Project Task HTML Live Preview"
                                    />
                                  </div>
                                )}
                                {currentSession.id === 'l1-s3' && (
                                  <div className="glass-panel" style={{ padding: '12px' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '6px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Interactive Live Preview</span>
                                    <iframe
                                      srcDoc={`<html><head><style>${buildS3PreviewCss(0)}\n${editingCodeOutput || ''}</style></head><body>${S3_PREVIEW_SKELETON}</body></html>`}
                                      style={{ width: '100%', height: '220px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                                      title="Project Task CSS Live Preview"
                                    />
                                  </div>
                                )}
                                {currentSession.id === 'l1-s4' && (
                                  <div className="glass-panel" style={{ padding: '12px' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '6px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Console Output</span>
                                    {/* No visual DOM preview here — this task's code is variables &
                                        math, not graphics, so a game-screen graphic would be decorative,
                                        not a real "actual output." The sandbox runs invisibly; the real
                                        result is whatever the code prints via console.log. */}
                                    <iframe
                                      srcDoc={buildJsConsoleOnlyPreview(editingCodeOutput || '')}
                                      style={{ display: 'none' }}
                                      title="Project Task Execution Sandbox"
                                    />
                                    <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px' }}>
                                      {simConsoleLogs.length === 0 ? (
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                          No console output yet. This doesn't necessarily mean something's wrong — add console.log(...) to your Output Code if you want to see real values here.
                                        </div>
                                      ) : simConsoleLogs.map((log, idx) => (
                                        <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                          {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                          {log.text}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {['l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(currentSession.id) && (
                                  <div className="glass-panel" style={{ padding: '12px' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '6px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Live Racing Game Preview</span>
                                    <iframe
                                      srcDoc={buildJsSandboxPreview(editingCodeOutput || '// Nothing to run yet.')}
                                      style={{ width: '100%', height: '360px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#060814' }}
                                      title="Project Task JS Live Preview"
                                    />
                                    <div className="state-terminal-logs" style={{ height: '150px', overflowY: 'auto', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px', marginTop: '8px' }}>
                                      {simConsoleLogs.length === 0 ? (
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                          Logs ready. Paste code, click inside the preview, press arrow keys.
                                        </div>
                                      ) : simConsoleLogs.map((log, idx) => (
                                        <div key={idx} className={`terminal-log-item ${log.type}`} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                                          {log.type === 'error' ? '✗ ' : log.type === 'success' ? '✓ ' : '⚡ '}
                                          {log.text}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="form-field">
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>AI Prompt Specification (Active Version)</label>
                                <textarea
                                  value={editingCodePrompt}
                                  onChange={e => setEditingCodePrompt(e.target.value)}
                                  style={{ width: '100%', height: '280px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '12px', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}
                                  placeholder={PROJECT_TASKS[currentSession.id]?.promptGuide ? "Draft the detailed prompt to guide your AI assistant. For example:\n" + PROJECT_TASKS[currentSession.id].promptGuide : "Draft the detailed prompt to guide your AI assistant. Specify constraints and outputs."}
                                />
                              </div>
                            )}
                          </div>
                        )}

                        {/* Tab 3: Review & Explain (L1S4: Explain the Code only — Output Code moved to Tab 2) */}
                        {effectiveJournalTab === 'review' && (
                          isL1S4 ? (
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Explain the {journalOutputLabel}</label>
                              <textarea
                                value={editingCodeReview}
                                onChange={e => setEditingCodeReview(e.target.value)}
                                style={{ width: '100%', height: '260px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder={PROJECT_TASKS[currentSession.id] ? "Review guidelines:\n" + PROJECT_TASKS[currentSession.id].codeReviewGuide.map((g, i) => (i + 1) + '. ' + g).join('\n') : "Explain what this code does, in your own words."}
                              />
                            </div>
                          ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                              <div className="form-field">
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>AI-Generated Code</label>
                                {PROJECT_TASKS[currentSession.id]?.chainFrom && (() => {
                                  const chainFromId = PROJECT_TASKS[currentSession.id].chainFrom;
                                  const chainFromSession = CURRICULUM_DATA.find(s => s.id === chainFromId);
                                  const chainFromLabel = chainFromSession ? chainFromSession.title : chainFromId;
                                  const hasSynced = editingCodeOutput.trim().length > 0;
                                  return (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '6px', padding: '6px 10px', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '4px', fontSize: '0.75rem' }}>
                                      <span style={{ color: 'var(--accent-cyan)' }}>
                                        🔗 {hasSynced
                                          ? `Starting point carried over from ${chainFromLabel} — extend it below.`
                                          : `This session builds on ${chainFromLabel} — click Pull Latest to load its code.`}
                                      </span>
                                      <button
                                        type="button"
                                        className="btn-cyber btn-cyber-secondary btn-small"
                                        style={{ padding: '2px 8px', fontSize: '0.7rem', whiteSpace: 'nowrap' }}
                                        onClick={() => {
                                          const pulled = getSessionCodeOutput(chainFromId);
                                          if (!pulled) {
                                            alert(`${chainFromLabel}'s Project Journal has no saved code yet — nothing to pull.`);
                                            return;
                                          }
                                          if (window.confirm(`Replace your current "AI-Generated Code" with ${chainFromLabel}'s latest saved code? This overwrites what's in the box now (unsaved changes will be lost).`)) {
                                            setEditingCodeOutput(pulled);
                                          }
                                        }}
                                      >
                                        🔄 Pull Latest
                                      </button>
                                    </div>
                                  );
                                })()}
                                <textarea
                                  value={editingCodeOutput}
                                  onChange={e => setEditingCodeOutput(e.target.value)}
                                  style={{ width: '100%', height: '350px', background: '#030409', color: '#c5cdd8', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
                                  placeholder={PROJECT_TASKS[currentSession.id] && PROJECT_TASKS[currentSession.id].sampleGeneratedHtml ? "Paste the code generated by the AI here. Example of what this milestone's AI output might look like:\n\n" + PROJECT_TASKS[currentSession.id].sampleGeneratedHtml : "Paste the code generated by the AI here..."}
                                />
                              </div>
                              <div className="form-field">
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Code Defense & Explanations</label>
                                <textarea
                                  value={editingCodeReview}
                                  onChange={e => setEditingCodeReview(e.target.value)}
                                  style={{ width: '100%', height: '350px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                  placeholder={PROJECT_TASKS[currentSession.id] ? "Review guidelines:\n" + PROJECT_TASKS[currentSession.id].codeReviewGuide.map((g, i) => (i + 1) + '. ' + g).join('\n') : "Review the code. Explain key blocks or audit for issues (e.g. 'The AI used var. I changed it to let. It missed checking boundary clamping...')"}
                                />
                              </div>
                            </div>
                          )
                        )}

                        {/* Tab 4: Test & Break (not shown for L1S4) */}
                        {!isL1S4 && activeJournalTab === 'test' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Test Cases Checklist</label>
                              <textarea
                                value={editingTestCases}
                                onChange={e => setEditingTestCases(e.target.value)}
                                style={{ width: '100%', height: '120px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder={PROJECT_TASKS[currentSession.id] ? "Test checklist guidelines:\n" + PROJECT_TASKS[currentSession.id].testCasesGuide : "Define your tests: e.g.\n- Happy Path: Steering moves X left/right.\n- Left boundary limit checks.\n- Right boundary limit checks."}
                              />
                            </div>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Test Failure Results & Logs</label>
                              <textarea
                                value={editingTestResults}
                                onChange={e => setEditingTestResults(e.target.value)}
                                style={{ width: '100%', height: '180px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder="Write down what happened when you tested and deliberately broke the code. What edge cases did you find?"
                              />
                            </div>
                          </div>
                        )}

                        {/* Tab 5: Iterate & Improve (not shown for L1S4) */}
                        {!isL1S4 && activeJournalTab === 'iterate' && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {PROJECT_TASKS[currentSession.id] && (
                              <div style={{ padding: '10px 12px', background: 'rgba(0, 242, 254, 0.04)', borderLeft: '3px solid var(--accent-cyan)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                                💡 <strong>Iteration Guideline:</strong> {PROJECT_TASKS[currentSession.id].iterationGuide}
                              </div>
                            )}
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Prompt Iteration Changes</label>
                              <textarea
                                value={editingIterationChanges}
                                onChange={e => setEditingIterationChanges(e.target.value)}
                                style={{ width: '100%', height: '120px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder="Describe what adjustments you made to your prompt (e.g. 'Added boundary validation logic checking if carX > 0...')"
                              />
                            </div>
                            <div className="form-field">
                              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Reflective Lessons Learned</label>
                              <textarea
                                value={editingIterationLessons}
                                onChange={e => setEditingIterationLessons(e.target.value)}
                                style={{ width: '100%', height: '180px', background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.85rem' }}
                                placeholder="What did you learn from this prompting cycle? What surprised you about how the AI interpreted your instructions?"
                              />
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Project Task AI Auditor feedback panel — all of L1 S1-S12
                          (2026-07-30 pilot on S1/5/6, extended to S2-S4/S7-S12 2026-08-05).
                          Advisory: shows AI feedback but never blocks Save Changes below. */}
                      {['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(currentSession.id) && projectTaskAuditResult && (
                        <div className="glass-panel" style={{ padding: '14px', marginTop: 16 }}>
                          <div className="panel-header"><h4 style={{ margin: 0, color: projectTaskAuditResult.pass ? 'var(--accent-green, #4ade80)' : 'var(--accent-cyan)' }}>
                            {projectTaskAuditResult.error ? '✗ AI Auditor unavailable' : projectTaskAuditResult.pass ? '✓ Prompt quality: good' : 'Prompt quality feedback'}
                          </h4></div>
                          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.82rem' }}>
                            {projectTaskAuditResult.error ? (
                              <div style={{ color: '#ff9f43' }}>{projectTaskAuditResult.error}</div>
                            ) : (
                              <>
                                <div style={{ color: 'var(--text-secondary)' }}>{projectTaskAuditResult.feedback}</div>
                                {(projectTaskAuditResult.tips || []).map((tip, i) => (
                                  <div key={i} style={{ color: 'var(--text-muted)' }}>💡 {tip}</div>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Action buttons footer */}
                      <div style={{ display: 'flex', gap: 12, marginTop: 24, borderTop: '1px solid var(--border-color)', paddingTop: 16, flexWrap: 'wrap' }}>
                        <button
                          className="btn-cyber btn-cyber-primary"
                          onClick={handleSaveJournalCode}
                          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                        >
                          Save Changes
                        </button>
                        {activeJournalTab === 'prompt' && (
                          <button
                            className="btn-cyber btn-cyber-green"
                            onClick={handleAddNewJournalVersion}
                            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                          >
                            Save as New Version
                          </button>
                        )}
                        {['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(currentSession.id) && (
                          <button
                            className="btn-cyber btn-cyber-secondary"
                            disabled={projectTaskAuditing}
                            onClick={async () => {
                              if (!editingCodePrompt.trim()) {
                                setProjectTaskAuditResult({ pass: false, error: 'Write a prompt first, then check its quality.' });
                                return;
                              }
                              setProjectTaskAuditing(true);
                              setProjectTaskAuditResult(null);
                              try {
                                const task = PROJECT_TASKS[currentSession.id];
                                const priorSessionCode = task.chainFrom ? getSessionCodeOutput(task.chainFrom) : undefined;
                                const res = await fetch('/api/audit-submission', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                  body: JSON.stringify({
                                    prompt: editingCodePrompt,
                                    context: `${task.objectives.join('; ')} ${task.planSpecs.vision}`,
                                    priorSessionCode
                                  })
                                });
                                const verdict = await res.json();
                                if (!res.ok) throw new Error(verdict.error || `Auditor request failed (${res.status})`);
                                setProjectTaskAuditResult(verdict);
                              } catch (err) {
                                setProjectTaskAuditResult({ pass: false, error: `Couldn't reach the AI Auditor (${err.message}). Please try again.` });
                              } finally {
                                setProjectTaskAuditing(false);
                              }
                            }}
                            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                          >
                            {projectTaskAuditing ? 'Checking prompt quality…' : '🤖 Check Prompt Quality'}
                          </button>
                        )}
                        <button
                          className="btn-cyber btn-cyber-red"
                          onClick={() => {
                            if (window.confirm("Reset this version to defaults?")) {
                              setEditingPlanVision('');
                              setEditingPlanSpecs('');
                              setEditingPlanFlow('');
                              setEditingCodePrompt(selectedJournal.history[0]?.prompt || '');
                              setEditingCodeOutput('');
                              setEditingCodeReview('');
                              setEditingTestCases('');
                              setEditingTestResults('');
                              setEditingIterationChanges('');
                              setEditingIterationLessons('');
                              setProjectTaskAuditResult(null);
                            }
                          }}
                          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                        >
                          Reset Fields
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>

            </div>
          )}

          {/* Leaderboard View */}
          {activeTab === 'leaderboard' && (
            <div className="tab-leaderboard glass-panel animate-in">
              <div className="panel-header">
                <h3>Active Classroom Security Agents</h3>
                <span className="badge-cyber badge-cyan">Active Tournament</span>
              </div>
              <div className="panel-body">
                <div className="leaderboard-table-container">
                  <table className="leaderboard-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Agent Handler</th>
                        <th>Status</th>
                        <th>Last Case Operation</th>
                        <th>Bounty Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.length === 0 ? (
                        <tr>
                          <td colSpan="5" style={{ textAlign: 'center', padding: 24, color: 'var(--text-muted)' }}>
                            No student profiles registered in classroom tournament.
                          </td>
                        </tr>
                      ) : (
                        leaderboardData.map(agent => {
                          const isUser = agent.username === currentUser?.username;
                          const scorePoints = agent.points;
                          const agentRank = getRank(scorePoints);
                          const rankBadgeColor = agentRank.title === 'Master Architect' ? 'badge-purple'
                            : agentRank.title === 'Senior Auditor' ? 'badge-cyan'
                            : agentRank.title === 'Junior Investigator' ? 'badge-green'
                            : 'badge-yellow';
                          return (
                            <tr key={agent.username} className={`leaderboard-row ${isUser ? 'current-user' : ''}`}>
                              <td className={`leaderboard-rank top-${agent.rank}`}>{agent.rank}</td>
                              <td className="leaderboard-username">
                                {agent.name}
                                {isUser && <span className="badge-cyber badge-cyan leaderboard-badge-me">YOU</span>}
                              </td>
                              <td>
                                <span className={`badge-cyber ${rankBadgeColor}`}>
                                  {agentRank.title}
                                </span>
                              </td>
                              <td>{agent.level}</td>
                              <td style={{ fontWeight: 600, color: 'var(--accent-cyan)' }}>{scorePoints} XP</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Student Report Tab View */}
          {activeTab === 'studentReport' && (
            <div className="tab-student-report glass-panel animate-in" style={{ textAlign: 'left' }}>
              <div className="panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3>Student Report{reportStudent ? `: ${reportStudent.name}` : ''}</h3>
                  {reportStudent && <span className="badge-cyber badge-cyan">{reportStudent.username}</span>}
                </div>
                {reportCameFromAdmin && (
                  <button className="btn-cyber btn-cyber-secondary btn-small" onClick={handleBackToAdmin}>
                    Back to Admin
                  </button>
                )}
              </div>

              <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {!reportCameFromAdmin && currentUser.role === 'parent' && reportLinkedStudents.length > 1 && (
                  <div className="form-group">
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Select your child</label>
                    <select
                      className="login-input"
                      value={reportStudent ? reportStudent.id : ''}
                      onChange={e => {
                        const found = reportLinkedStudents.find(s => s.id === e.target.value);
                        if (found) handleSelectReportStudent(found);
                      }}
                      style={{ padding: '8px 12px', background: 'rgba(6, 8, 20, 0.8)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px' }}
                    >
                      <option value="">-- choose a student --</option>
                      {reportLinkedStudents.map(s => (
                        <option key={s.id} value={s.id}>{s.name} ({s.username})</option>
                      ))}
                    </select>
                  </div>
                )}

                {!reportCameFromAdmin && currentUser.role === 'teacher' && (
                  <div className="form-group">
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Select a student</label>
                    <select
                      className="login-input"
                      value={reportStudent ? reportStudent.id : ''}
                      onChange={e => {
                        const found = activeStudents.find(s => s.id === e.target.value);
                        if (found) handleSelectReportStudent(found);
                      }}
                      style={{ padding: '8px 12px', background: 'rgba(6, 8, 20, 0.8)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px' }}
                    >
                      <option value="">-- choose a student --</option>
                      {activeStudents.map(s => (
                        <option key={s.id} value={s.id}>{s.name} ({s.username})</option>
                      ))}
                    </select>
                  </div>
                )}

                {!reportStudent && (
                  <p style={{ color: 'var(--text-muted)' }}>
                    {currentUser.role === 'parent' && reportLinkedStudents.length === 0
                      ? 'No student is linked to your account yet. Please contact the teacher.'
                      : 'Choose a student above to view their report.'}
                  </p>
                )}

                {reportStudent && (
                  <>
                    <div style={{ display: 'flex', gap: 8, borderBottom: '1px solid var(--border-color)', paddingBottom: 12 }}>
                      <button
                        className={`btn-cyber btn-small ${reportSubTab === 'attendance' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => setReportSubTab('attendance')}
                      >
                        Attendance
                      </button>
                      <button
                        className="btn-cyber btn-small btn-cyber-secondary"
                        onClick={() => handleViewStudentJournal(reportStudent)}
                      >
                        View Journal
                      </button>
                      <button
                        className={`btn-cyber btn-small ${reportSubTab === 'feedback' ? 'btn-cyber-primary' : 'btn-cyber-secondary'}`}
                        onClick={() => setReportSubTab('feedback')}
                      >
                        Feedback
                      </button>
                    </div>

                    {reportLoading && <p style={{ color: 'var(--text-secondary)' }}>Loading report...</p>}

                    {!reportLoading && reportSubTab === 'attendance' && (
                      <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflowX: 'auto', minWidth: 0 }}>
                        <table style={{ width: '100%', minWidth: 420, borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                          <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(0, 242, 254, 0.04)' }}>
                              <th style={{ padding: 10, textAlign: 'left', color: 'var(--accent-cyan)' }}>Session</th>
                              <th style={{ padding: 10, textAlign: 'center', color: 'var(--accent-cyan)' }}>Date</th>
                              <th style={{ padding: 10, textAlign: 'right', color: 'var(--accent-cyan)' }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            {CURRICULUM_DATA.filter(s => s.level === (parseInt((reportStudent.student_level || 'L1').replace('L', '')) || 1)).map(session => {
                              const row = reportData[session.id] || { session_date: '' };
                              return (
                                <tr key={session.id} style={{ borderBottom: '1px solid rgba(0, 242, 254, 0.05)' }}>
                                  <td style={{ padding: 10, color: 'var(--text-primary)' }}>{session.title}</td>
                                  <td style={{ padding: 10, textAlign: 'center' }}>
                                    <input
                                      type="date"
                                      value={row.session_date || ''}
                                      disabled={currentUser.role !== 'teacher'}
                                      onChange={e => handleSetAttendanceDate(session.id, e.target.value)}
                                      style={{ padding: '4px 8px', background: 'rgba(6, 8, 20, 0.8)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px' }}
                                    />
                                  </td>
                                  <td style={{ padding: 10, textAlign: 'right' }}>
                                    <button
                                      className="btn-cyber btn-cyber-primary btn-small"
                                      onClick={() => handleJumpToSessionFeedback(session.id)}
                                      style={{ padding: '2px 8px', fontSize: '0.7rem' }}
                                    >
                                      Feedback
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {!reportLoading && reportSubTab === 'feedback' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {reportStatusMsg && (
                          <div className="badge-cyber" style={{
                            padding: 8, textAlign: 'center',
                            color: reportStatusMsg.startsWith('Error') ? 'var(--accent-red)' : 'var(--accent-green)',
                            background: reportStatusMsg.startsWith('Error') ? 'rgba(255,51,102,0.1)' : 'rgba(57,255,20,0.1)',
                            borderColor: reportStatusMsg.startsWith('Error') ? 'var(--accent-red)' : 'var(--accent-green)'
                          }}>
                            {reportStatusMsg}
                          </div>
                        )}
                        {CURRICULUM_DATA.filter(s => s.level === (parseInt((reportStudent.student_level || 'L1').replace('L', '')) || 1)).map(session => {
                          const row = reportData[session.id] || { session_date: '', teacher_feedback: '', parent_feedback: '' };
                          const canEditTeacher = currentUser.role === 'teacher';
                          const canEditParent = currentUser.role === 'teacher' || currentUser.role === 'parent';
                          return (
                            <div
                              key={session.id}
                              id={`report-feedback-${session.id}`}
                              className="glass-panel"
                              style={{ padding: 16, minWidth: 0, border: reportSessionFocus === session.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)' }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                                <h5 style={{ margin: 0, color: 'var(--accent-cyan)' }}>{session.title}</h5>
                                {row.session_date && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.session_date}</span>}
                              </div>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16 }}>
                                <div>
                                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Teacher Feedback</label>
                                  <textarea
                                    value={row.teacher_feedback || ''}
                                    disabled={!canEditTeacher}
                                    onChange={e => handleFeedbackTextChange(session.id, 'teacher', e.target.value)}
                                    style={{ width: '100%', minHeight: 90, background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: 10, fontSize: '0.85rem', resize: 'vertical' }}
                                  />
                                  {canEditTeacher && (
                                    <button
                                      className="btn-cyber btn-cyber-green btn-small"
                                      onClick={() => handleSaveFeedback(session.id, 'teacher')}
                                      style={{ marginTop: 8, padding: '4px 10px' }}
                                    >
                                      Save Feedback
                                    </button>
                                  )}
                                </div>
                                <div>
                                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Parent Feedback</label>
                                  <textarea
                                    value={row.parent_feedback || ''}
                                    disabled={!canEditParent}
                                    onChange={e => handleFeedbackTextChange(session.id, 'parent', e.target.value)}
                                    style={{ width: '100%', minHeight: 90, background: 'rgba(6, 8, 20, 0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: 10, fontSize: '0.85rem', resize: 'vertical' }}
                                  />
                                  {canEditParent && (
                                    <button
                                      className="btn-cyber btn-cyber-green btn-small"
                                      onClick={() => handleSaveFeedback(session.id, 'parent')}
                                      style={{ marginTop: 8, padding: '4px 10px' }}
                                    >
                                      Save Feedback
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Admin Panel Tab View */}
          {activeTab === 'admin' && (
            <div className="tab-admin glass-panel animate-in" style={{ textAlign: 'left' }}>
              <div className="panel-header">
                <h3>Admin Settings & Campaign Manager</h3>
                <span className="badge-cyber badge-red">AUTHORIZED ACCESS ONLY</span>
              </div>
              <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem' }}>Active Campaign Theme Selection</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                    Swap the global campaign theme. Swapping themes dynamically re-skins the overarching Level Main Quests and Session Sub-Quests to align with the curriculum.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 12 }}>
                    {Object.values(CAMPAIGN_THEMES).map(theme => (
                      <div 
                        key={theme.id}
                        className={`glass-panel`}
                        style={{ 
                          padding: 16, 
                          cursor: 'pointer', 
                          borderColor: campaignId === theme.id ? 'var(--accent-cyan)' : 'var(--border-color)',
                          background: campaignId === theme.id ? 'rgba(0, 242, 254, 0.04)' : 'transparent',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => setCampaignId(theme.id)}
                      >
                        <h5 style={{ margin: '0 0 6px 0', fontSize: '1rem', color: campaignId === theme.id ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>{theme.name}</h5>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{theme.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem', marginBottom: 12 }}>Register New Student or Parent Profile</h4>
                    <form onSubmit={handleAddStudent} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Student Name / Alias</label>
                        <input
                          type="text"
                          className="login-input"
                          placeholder="e.g. Somchai S."
                          value={newStudentName}
                          onChange={e => setNewStudentName(e.target.value)}
                          required
                          style={{ padding: '8px 12px' }}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Username / Student ID</label>
                        <input
                          type="text"
                          className="login-input"
                          placeholder="e.g. std001"
                          value={newStudentUsername}
                          onChange={e => setNewStudentUsername(e.target.value)}
                          required
                          style={{ padding: '8px 12px' }}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Security Access Key</label>
                        <input
                          type="password"
                          className="login-input"
                          placeholder="••••••••"
                          value={newStudentPassword}
                          onChange={e => setNewStudentPassword(e.target.value)}
                          required
                          style={{ padding: '8px 12px' }}
                        />
                      </div>

                      {newPersonLinkedStudentIds.length === 0 && (
                        <div className="form-group">
                          <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Student Assigned Level</label>
                          <select
                            className="login-input"
                            value={newStudentLevel}
                            onChange={e => setNewStudentLevel(e.target.value)}
                            style={{
                              padding: '8px 12px',
                              background: 'rgba(6, 8, 20, 0.8)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            <option value="L1">Level 1: Logic</option>
                            <option value="L2">Level 2: AI Copilot</option>
                            <option value="L3">Level 3: Architect</option>
                            <option value="L4">Level 4: Engineer</option>
                          </select>
                        </div>
                      )}

                      <div className="form-group">
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          Link to existing student(s) — makes this a Parent account instead of a Student
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 140, overflowY: 'auto', border: '1px solid var(--border-color)', borderRadius: '4px', padding: 8 }}>
                          {activeStudents.length === 0 ? (
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>No active students registered yet.</span>
                          ) : (
                            activeStudents.map(s => (
                              <label key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: 'var(--text-primary)', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={newPersonLinkedStudentIds.includes(s.id)}
                                  onChange={e => {
                                    setNewPersonLinkedStudentIds(prev =>
                                      e.target.checked ? [...prev, s.id] : prev.filter(id => id !== s.id)
                                    );
                                  }}
                                />
                                {s.name} ({s.username})
                              </label>
                            ))
                          )}
                        </div>
                      </div>

                      {adminStatusMsg && (
                        <div className="badge-cyber" style={{ 
                          padding: 8, 
                          textAlign: 'center', 
                          color: adminStatusMsg.startsWith('Error') ? 'var(--accent-red)' : 'var(--accent-green)',
                          background: adminStatusMsg.startsWith('Error') ? 'rgba(255,51,102,0.1)' : 'rgba(57,255,20,0.1)',
                          borderColor: adminStatusMsg.startsWith('Error') ? 'var(--accent-red)' : 'var(--accent-green)'
                        }}>
                          {adminStatusMsg}
                        </div>
                      )}
                      
                      <button type="submit" className="btn-cyber btn-cyber-green" style={{ justifyContent: 'center', padding: '10px 14px' }}>
                        {newPersonLinkedStudentIds.length > 0 ? 'Create Parent Profile' : 'Create Student Profile'}
                      </button>
                    </form>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem', marginBottom: 12 }}>Student & Parent Roster</h4>
                    <div style={{ maxHeight: '420px', overflowY: 'auto', overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'rgba(6, 8, 20, 0.4)' }}>
                      {students.length === 0 && parents.length === 0 ? (
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', padding: 16, margin: 0, textAlign: 'center' }}>No students or parents registered yet.</p>
                      ) : (
                        <table style={{ width: '100%', minWidth: 760, borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                          <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(0, 242, 254, 0.04)' }}>
                              <th style={{ padding: 10, textAlign: 'left', color: 'var(--accent-cyan)' }}>Name</th>
                              <th style={{ padding: 10, textAlign: 'left', color: 'var(--accent-cyan)' }}>Username</th>
                              <th style={{ padding: 10, textAlign: 'left', color: 'var(--accent-cyan)' }}>Role</th>
                              <th style={{ padding: 10, textAlign: 'left', color: 'var(--accent-cyan)' }}>Level / Linked To</th>
                              <th style={{ padding: 10, textAlign: 'center', color: 'var(--accent-cyan)' }}>Active</th>
                              <th style={{ padding: 10, textAlign: 'right', color: 'var(--accent-cyan)' }}>Points / Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              ...students.map(s => ({ ...s, _rowRole: 'student' })),
                              ...parents.map(p => ({ ...p, _rowRole: 'parent' }))
                            ]
                              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                              .map(person => person._rowRole === 'student' ? (
                                <tr key={person.id} style={{ borderBottom: '1px solid rgba(0, 242, 254, 0.05)', opacity: person.is_active === false ? 0.5 : 1 }}>
                                  <td style={{ padding: 10, color: 'var(--text-primary)', fontWeight: 500 }}>{person.name}</td>
                                  <td style={{ padding: 10, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{person.username}</td>
                                  <td style={{ padding: 10 }}>
                                    <span className="badge-cyber badge-cyan" style={{ fontSize: '0.7rem' }}>Student</span>
                                  </td>
                                  <td style={{ padding: 10 }}>
                                    <select
                                      value={person.student_level || 'L1'}
                                      onChange={e => handleUpdateStudentLevel(person.id, e.target.value)}
                                      style={{
                                        padding: '4px 8px',
                                        background: 'rgba(6, 8, 20, 0.8)',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer'
                                      }}
                                    >
                                      <option value="L1">L1: Logic</option>
                                      <option value="L2">L2: AI Copilot</option>
                                      <option value="L3">L3: Architect</option>
                                      <option value="L4">L4: Engineer</option>
                                    </select>
                                  </td>
                                  <td style={{ padding: 10, textAlign: 'center' }}>
                                    <input
                                      type="checkbox"
                                      checked={person.is_active !== false}
                                      onChange={e => handleToggleStudentActive(person.id, e.target.checked)}
                                      title={person.is_active === false ? 'Deactivated — hidden from student pickers' : 'Active'}
                                      style={{ cursor: 'pointer', width: 16, height: 16 }}
                                    />
                                  </td>
                                  <td style={{ padding: 10, textAlign: 'right' }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                                      <button
                                        className="btn-cyber btn-cyber-primary btn-small"
                                        onClick={() => handleViewStudentJournal(person)}
                                        style={{ padding: '2px 8px', fontSize: '0.7rem' }}
                                      >
                                        View Journal
                                      </button>
                                      <button
                                        className="btn-cyber btn-cyber-primary btn-small"
                                        onClick={() => handleOpenAdminFeedback(person)}
                                        style={{ padding: '2px 8px', fontSize: '0.7rem' }}
                                      >
                                        Feedback
                                      </button>
                                      <button
                                        className="btn-cyber btn-cyber-secondary btn-small"
                                        onClick={() => handleUpdateStudentPoints(person.id, Math.max(0, person.points - 50))}
                                        style={{ padding: '2px 8px !important', minWidth: '22px', height: '22px', fontSize: '0.7rem' }}
                                      >
                                        -
                                      </button>
                                      <span style={{ fontWeight: 600, color: 'var(--accent-cyan)', minWidth: '55px', display: 'inline-block', textAlign: 'center' }}>
                                        {person.points} XP
                                      </span>
                                      <button
                                        className="btn-cyber btn-cyber-green btn-small"
                                        onClick={() => handleUpdateStudentPoints(person.id, person.points + 50)}
                                        style={{ padding: '2px 8px !important', minWidth: '22px', height: '22px', fontSize: '0.7rem' }}
                                      >
                                        +
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ) : (
                                <tr key={person.id} style={{ borderBottom: '1px solid rgba(0, 242, 254, 0.05)' }}>
                                  <td style={{ padding: 10, color: 'var(--text-primary)', fontWeight: 500 }}>{person.name}</td>
                                  <td style={{ padding: 10, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{person.username}</td>
                                  <td style={{ padding: 10 }}>
                                    <span className="badge-cyber badge-green" style={{ fontSize: '0.7rem' }}>Parent</span>
                                  </td>
                                  <td style={{ padding: 10 }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6 }}>
                                      {person.linkedStudents.length === 0 ? (
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>No students linked</span>
                                      ) : (
                                        person.linkedStudents.map(linked => (
                                          <span
                                            key={linked.id}
                                            className="badge-cyber"
                                            style={{ fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: 6, opacity: linked.is_active === false ? 0.5 : 1 }}
                                          >
                                            {linked.name}{linked.is_active === false ? ' (inactive)' : ''}
                                            <button
                                              onClick={() => handleRemoveParentLink(person.id, linked.id)}
                                              title="Remove link"
                                              style={{ background: 'none', border: 'none', color: 'var(--accent-red)', cursor: 'pointer', padding: 0, fontSize: '0.8rem', lineHeight: 1 }}
                                            >
                                              ×
                                            </button>
                                          </span>
                                        ))
                                      )}
                                    </div>
                                    <select
                                      value=""
                                      onChange={e => {
                                        const studentId = e.target.value;
                                        e.target.value = '';
                                        if (studentId) handleAddParentLink(person.id, studentId);
                                      }}
                                      style={{
                                        padding: '4px 8px',
                                        background: 'rgba(6, 8, 20, 0.8)',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        cursor: 'pointer'
                                      }}
                                    >
                                      <option value="">+ Link another student...</option>
                                      {activeStudents
                                        .filter(s => !person.linkedStudents.some(l => l.id === s.id))
                                        .map(s => (
                                          <option key={s.id} value={s.id}>{s.name} ({s.username})</option>
                                        ))}
                                    </select>
                                  </td>
                                  <td style={{ padding: 10, textAlign: 'center', color: 'var(--text-muted)' }}>—</td>
                                  <td style={{ padding: 10, textAlign: 'right', color: 'var(--text-muted)' }}>—</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h4 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.1rem' }}>Local Detective Statistics Overrides</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                    Adjust your XP score directly for debugging rank progressions and unlocked panels.
                  </p>
                  <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                    <button className="btn-cyber" onClick={() => updatePointsDB(Math.max(0, points - 100))}>Deduct 100 XP</button>
                    <button className="btn-cyber btn-cyber-green" onClick={() => updatePointsDB(points + 100)}>Add 100 XP</button>
                    <button className="btn-cyber btn-cyber-primary" onClick={() => updatePointsDB(1200)}>Promote to Master Rank (1200 XP)</button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </main>

      {/* Teacher: Read-Only Student Journal Viewer */}
      {viewingStudent && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(3, 4, 9, 0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          onClick={handleCloseStudentJournal}
        >
          <div
            className="glass-panel"
            style={{ width: 'min(900px, 100%)', maxHeight: '85vh', overflowY: 'auto', padding: 24, textAlign: 'left' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <h3 style={{ margin: 0 }}>{viewingStudent.name}'s Project Journal</h3>
                <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Read-only view — {viewingStudent.username}</p>
              </div>
              <button className="btn-cyber btn-cyber-red btn-small" onClick={handleCloseStudentJournal} style={{ padding: '4px 10px' }}>Close</button>
            </div>

            {viewingJournalLoading && <p style={{ color: 'var(--text-secondary)' }}>Loading journal entries...</p>}
            {!viewingJournalLoading && viewingJournalData.length === 0 && (
              <p style={{ color: 'var(--text-muted)' }}>This student has no attendance recorded yet — set a session date on the Attendance tab to track their sessions here.</p>
            )}

            {!viewingJournalLoading && viewingJournalData.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="form-group" style={{ position: 'relative' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Select a session</label>
                  <button
                    type="button"
                    onClick={() => setJournalSessionPickerOpen(prev => !prev)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
                      padding: '10px 12px', background: 'rgba(6, 8, 20, 0.8)', color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)', borderRadius: '4px', cursor: 'pointer',
                      fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textAlign: 'left'
                    }}
                  >
                    <span style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                      {(() => {
                        const selected = viewingJournalData.find(d => d.id === viewingJournalEntryId);
                        if (!selected) return '-- choose a session --';
                        return selected.title + (!selected.journalEntry ? ' (journal not started)' : '');
                      })()}
                    </span>
                    <svg style={{ width: 16, height: 16, flexShrink: 0, transform: journalSessionPickerOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {journalSessionPickerOpen && (
                    <>
                      <div style={{ position: 'fixed', inset: 0, zIndex: 9 }} onClick={() => setJournalSessionPickerOpen(false)}></div>
                      <div
                        className="glass-panel"
                        style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, zIndex: 10, maxHeight: 260, overflowY: 'auto', padding: 6, display: 'flex', flexDirection: 'column', gap: 4, background: '#0d1024', backdropFilter: 'none' }}
                      >
                        {viewingJournalData.map(item => (
                          <div
                            key={item.id}
                            onClick={() => {
                              setViewingJournalEntryId(item.id);
                              setViewingJournalVersion(item.journalEntry ? item.journalEntry.activeVersion : null);
                              setJournalSessionPickerOpen(false);
                            }}
                            style={{
                              padding: '8px 10px', cursor: 'pointer', fontSize: '0.85rem', borderRadius: '4px',
                              color: item.journalEntry ? 'var(--text-primary)' : 'var(--text-muted)',
                              background: viewingJournalEntryId === item.id ? 'rgba(0, 242, 254, 0.08)' : 'transparent'
                            }}
                          >
                            {item.title}{!item.journalEntry ? ' (journal not started)' : ''}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div>
                  {(() => {
                    const item = viewingJournalData.find(e => e.id === viewingJournalEntryId);
                    if (!item) return <p style={{ color: 'var(--text-muted)' }}>Select a session to view.</p>;
                    const entry = item.journalEntry;
                    if (!entry) return <p style={{ color: 'var(--text-muted)' }}>This student attended "{item.title}" on {item.date} but has not started their Project Journal for it yet.</p>;
                    // Only the AI Prompt is versioned — Plan/Review/Test/Iterate always reflect the
                    // entry's active (latest) version, regardless of which prompt version is selected.
                    const activeHist = entry.history.find(h => h.version === entry.activeVersion) || entry.history[entry.history.length - 1];
                    if (!activeHist) return <p style={{ color: 'var(--text-muted)' }}>No versions saved for this entry.</p>;
                    const data = deserializeJournalData(activeHist.code);
                    const selectedHist = entry.history.find(h => h.version === viewingJournalVersion) || activeHist;

                    const renderField = (label, value) => (
                      <div key={label || 'prompt'}>
                        {label && (
                          <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</label>
                        )}
                        <div style={{ whiteSpace: 'pre-wrap', background: 'rgba(6, 8, 20, 0.7)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '10px', fontSize: '0.82rem', color: value ? 'var(--text-primary)' : 'var(--text-muted)', minHeight: '20px' }}>
                          {value || '(not filled in)'}
                        </div>
                      </div>
                    );

                    // L1 Sessions 1-8 use the reduced 3-box Project Task format (Plan & Design /
                    // Prompt & Output Code / Explain the Code) in the editable Project Journal —
                    // mirror that same 3-section shape here instead of always showing the fixed
                    // 5-section layout, so the read-only view matches what the student actually sees.
                    const use3Box = ['l1-s1', 'l1-s2', 'l1-s3', 'l1-s4', 'l1-s5', 'l1-s6', 'l1-s7', 'l1-s8', 'l1-s9', 'l1-s10', 'l1-s11', 'l1-s12'].includes(item.id);
                    const outputLabel = item.id === 'l1-s1' ? 'Output' : 'Output Code';

                    if (use3Box) {
                      return (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                          <div>
                            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>1. Plan & Design</h4>
                            {renderField(null, data.planSpecs)}
                          </div>

                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                              <h4 style={{ margin: 0, color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>2. Prompt & {outputLabel}</h4>
                              <div style={{ display: 'flex', gap: 6 }}>
                                {entry.history.map(h => (
                                  <button
                                    key={h.version}
                                    className={`version-nav-btn ${viewingJournalVersion === h.version ? 'active' : ''}`}
                                    onClick={() => setViewingJournalVersion(h.version)}
                                    style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                                  >
                                    v{h.version}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                              {renderField('Writing Prompt', selectedHist.prompt)}
                              {renderField(outputLabel, data.codeOutput)}
                            </div>
                          </div>

                          <div>
                            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>3. Explain the {outputLabel}</h4>
                            {renderField(null, data.codeReview)}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <div>
                          <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>1. Plan & Design</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {renderField('System Parts & Information', data.planSpecs)}
                            {renderField('Visual Concept & UX Flow', data.planVision)}
                            {renderField('Logic Flow Diagram / Pseudocode', data.planFlow)}
                          </div>
                        </div>

                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                            <h4 style={{ margin: 0, color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>2. Write AI Prompt</h4>
                            <div style={{ display: 'flex', gap: 6 }}>
                              {entry.history.map(h => (
                                <button
                                  key={h.version}
                                  className={`version-nav-btn ${viewingJournalVersion === h.version ? 'active' : ''}`}
                                  onClick={() => setViewingJournalVersion(h.version)}
                                  style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                                >
                                  v{h.version}
                                </button>
                              ))}
                            </div>
                          </div>
                          {renderField(null, selectedHist.prompt)}
                        </div>

                        <div>
                          <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>3. Review & Explain</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {renderField('AI-Generated Code', data.codeOutput)}
                            {renderField('Code Defense & Explanations', data.codeReview)}
                          </div>
                        </div>

                        <div>
                          <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>4. Test & Break</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {renderField('Test Cases Checklist', data.testCases)}
                            {renderField('Test Failure Results & Logs', data.testResults)}
                          </div>
                        </div>

                        <div>
                          <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>5. Iterate & Improve</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {renderField('Prompt Iteration Changes', data.iterationChanges)}
                            {renderField('Reflective Lessons Learned', data.iterationLessons)}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
