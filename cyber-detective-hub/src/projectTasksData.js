// Structured Racing Car Game project tasks database for Level 1
// Alignment: PRJ_KNOWLEDGE.md and Computer_Tutor_AIEra_Improved_Curriculum.md

export const PROJECT_TASKS = {
  "l1-s1": {
    partNum: "Lab 0",
    partTitle: "System Logic Warm-Up",
    objectives: [
      "Model basic input-process-output (IPO) systems",
      "Write sequential, unambiguous instructions for execution"
    ],
    planSpecs: {
      vision: "A microwave control panel: a keypad to enter cook time, a Start button, a door sensor, and a display showing the countdown. Pressing Start begins counting down visibly; opening the door mid-cycle should immediately pause the countdown.",
      parts: "Parts needed: a keypad for entering time, a Start button, a door sensor, a countdown display, and the heating element. Information to track: whether the power is on, how much time is left, and whether the door is open or closed.",
      flow: "IF powerState is ON AND doorClosed is True AND startPressed is True:\n  1. Activate heating component\n  2. Run countdown timer loop\n  3. Deactivate heating and play buzzer when timer hits 0"
    },
    promptGuide: "Describe a step-by-step sequential blueprint for warming up food in a microwave. Specify system preconditions (e.g. power status), input parameters (e.g. duration, sensor states), processing loops (e.g. countdown checks), and output reactions (e.g. alarms, magnetron toggles).",
    codeReviewGuide: [
      "Are all steps sequential and literal?",
      "Are inputs, processing, and outputs clearly isolated?",
      "Precondition check: Did you check if the door is open?"
    ],
    testCasesGuide: "- Happy Path: Door closed, timer > 0, system heats\n- Edge Case: Door opened mid-operation (should halt immediately)\n- Boundary Case: Timer set to 0 seconds (should not start)",
    iterationGuide: "Trace if the sequence contains any implicit assumptions that a literal computer would fail on, and update the instructions accordingly."
  },
  "l1-s2": {
    partNum: "Lab 1",
    partTitle: "HTML Document Skeleton",
    objectives: [
      "Create the base index.html file — the file every later session's project work extends",
      "Construct the '#game-track' container to host the highway",
      "Nest the '#player-car' element inside the track",
      "Create a separate '#dashboard' panel for scoring HUD",
      "Nest a span element with ID '#score-val' inside the dashboard header",
      "Add the obstacle car and a hidden game-over panel the sandbox drill never asks for, but later sessions' code depends on"
    ],
    planSpecs: {
      vision: "A highway-view racing screen: a vertical road area taking up most of the screen, with a small scoreboard panel above it showing the score. The player's car and an oncoming obstacle car will later sit on the road, and a game-over overlay waits hidden underneath — for now we're just building the empty containers, no colors or positions yet.",
      parts: "Parts needed: a road area, a player's car, an obstacle car, a lane divider line, a hidden game-over overlay, and a scoreboard panel showing the score. Information to track (for later sessions): the score, how fast the car is going, and whether the game is currently running.",
      flow: "Browser loads index.html sequentially.\nDOM elements are created in memory in a parent-child hierarchy.\nParent containers constrain child positions."
    },
    chainFrom: null,
    promptGuide: "The sandbox drill only asked for the track, the car, and the scoreboard — but your actual game needs its whole foundation in one file, since every session from here on extends this exact file. Draft an AI prompt asking for all of that PLUS two elements the drill never covered: an oncoming obstacle car (its own div, id 'obstacle') and a game-over overlay (id 'restart-panel', starting hidden via a class named 'hidden') that a later session will reveal. Also ask the AI to add an HTML comment at the top naming your player car and your obstacle — this is your game now, give them names.",
    codeReviewGuide: [
      "Check if all HTML tags open and close properly (especially divs).",
      "Verify that player-car is nested inside game-track, and that obstacle and restart-panel exist too.",
      "Check that the scoreboard uses id='score-val' (not class or wrong spelling).",
      "Socratic Question: 'restart-panel' has to exist in the HTML now, even though nothing shows it for many sessions yet. Why build it now instead of waiting until the session that actually needs it?"
    ],
    sampleGeneratedHtml: '<!-- My Racing Car Game — player: [your name here], obstacle: [your name here] -->\n<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { margin: 0; padding: 10px; background: #060814; font-family: sans-serif; }\n    #dashboard {\n      width: 390px;\n      padding: 8px;\n      background-color: #1a1a2e;\n      border-radius: 6px;\n      text-align: center;\n      border: 1px solid #333;\n      box-sizing: border-box;\n    }\n    h2 { margin: 0; font-size: 1rem; color: #00ffcc; }\n  </style>\n</head>\n<body>\n  <div id="dashboard">\n    <h2>Score: <span id="score-val">0</span></h2>\n  </div>\n  <div id="game-track">\n    <div id="player-car"></div>\n    <div id="obstacle"></div>\n    <div class="lane-divider"></div>\n    <div id="restart-panel" class="hidden">GAME OVER</div>\n  </div>\n</body>\n</html>\n<!-- Positions/colors come from Session 3 — this lab is structure only. -->',
    testCasesGuide: "- Verify element `#game-track` exists in DOM\n- Verify element `#player-car` and `#obstacle` are both children of `#game-track`\n- Verify element `#restart-panel` exists and carries a 'hidden' class (or equivalent) so it's not visible yet\n- Verify element `#dashboard` exists and `#score-val` is inside it, displaying '0'",
    iterationGuide: "If the initial AI output lacks semantic elements or is missing closing tags, write a follow-up prompt to clean it up. Plan to add a '.lane-divider' inside the track to represent lanes.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "Target look once styled: a yellow-bordered track with a red player-car sitting on the dashed center lane-divider, and a dashboard scoreboard above it. This lab only builds the HTML structure (unstyled/plain) — Session 3's lab styles this exact file, not a fresh starter."
  },
  "l1-s3": {
    partNum: "Lab 2",
    partTitle: "CSS Sizing & Coordinates Layout",
    objectives: [
      "Apply relative/absolute positioning parameters in styles.css",
      "Style '#game-track' with a width/height of your own choosing and a background color",
      "Style '#player-car' width/height and position it absolute at center-bottom",
      "Style '.lane-divider' as a dashed white marker line",
      "Style '#obstacle' and the hidden '#restart-panel' overlay — not covered by the sandbox drill",
      "Align dashboard HUD items horizontally using flexbox"
    ],
    planSpecs: {
      vision: "A dark 2-lane-divider highway with a white dashed line down the middle, sized however you like (390-430px wide, 480-520px tall). A car sits near the bottom-center of the road, with an obstacle car styled the same way, and a full-screen game-over overlay waits — invisible for now — behind everything. The scoreboard sits above the road as a small horizontal bar.",
      parts: "Parts needed: the road (sized to fit the screen), the car (positioned near the bottom, centered in a lane), the lane divider (running down the middle), the obstacle car, and the hidden overlay. Information to track: the road's size, the car's position, and how wide each lane is.",
      flow: "Parent relative positioning establishes coordinate system origin (0,0) at top-left.\nChild absolute positioning uses (left, top, bottom, right) parameters relative to parent bounds."
    },
    referenceSessions: [{ id: "l1-s2", label: "Session 2's HTML structure — the exact elements you're styling here, not a generic spec" }],
    promptGuide: "Open your own Session 2 file (shown above) — you're styling that file, not a fresh blank one. Draft an AI prompt to give '#game-track' relative positioning and dimensions of your choosing (390-430px wide, 480-520px tall). Position '#player-car' absolutely so it sits centered near the bottom of YOUR track width. Add a dashed '.lane-divider' down the center. Then style '#obstacle' (it can reuse most of the player-car's look) and '#restart-panel' as a full-screen dark overlay — remember it must stay invisible until a later session removes its 'hidden' class.",
    codeReviewGuide: [
      "Does `#game-track` have `position: relative`? If not, the absolute elements will drift out.",
      "Is `#player-car` absolute-positioned, and does its left offset actually center it inside YOUR chosen track width (not necessarily 165px)?",
      "Is `#restart-panel` styled to cover the whole track (e.g. `inset: 0`) while its 'hidden' class still keeps it invisible?",
      "Socratic Question: What happens if `#game-track` loses `position: relative`? Which coordinate box will the browser calculate offsets against?"
    ],
    sampleGeneratedHtml: '/* styles.css — dimensions below are an EXAMPLE, use your own track width from above */\nbody { margin: 0; padding: 10px; background: #060814; font-family: sans-serif; }\n\n#dashboard {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: #1a1a2e;\n  border: 1px solid #333;\n  border-radius: 6px;\n}\n#dashboard h2 { margin: 0; font-size: 1rem; color: #00ffcc; }\n\n#game-track {\n  position: relative;\n  width: 410px;   /* pick your own 390-430px */\n  height: 500px;\n  background-color: #333;\n  border: 3px solid #ffcc00;\n  margin: 10px 0;\n  overflow: hidden;\n}\n\n#player-car {\n  position: absolute;\n  bottom: 20px;\n  left: 175px;   /* centers a 60px car inside a 410px track */\n  width: 60px;\n  height: 100px;\n  background-color: #ff4d4d;\n  border-radius: 4px;\n}\n\n#obstacle {\n  position: absolute;\n  top: -100px;\n  width: 60px;\n  height: 100px;\n  background-color: #ff9f43;\n  border-radius: 4px;\n}\n\n.lane-divider {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 2px;\n  height: 100%;\n  border-left: 2px dashed #ffffff;\n}\n\n#restart-panel {\n  position: absolute;\n  inset: 0;\n  background: rgba(0,0,0,0.8);\n}\n.hidden { display: none; }',
    testCasesGuide: "- Verify `#game-track` has a fixed width/height you chose and `position: relative`\n- Verify `#player-car` is absolute-positioned and visually centered inside YOUR track (not assumed to be exactly 165px)\n- Verify `.lane-divider` uses dashed border-left rules\n- Verify `#obstacle` and `#restart-panel` both have real styles, and `#restart-panel` stays invisible while 'hidden' is applied\n- Verify `#dashboard` uses flex layout with space-between",
    iterationGuide: "Audit element visibility. If elements overlap or are hidden, check display/position definitions. Adjust contrasts and symbols for colorblind accessibility.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "This is what your Session 2 file looks like once this session's CSS is applied to it (sizing, absolute positioning, dashed divider, flex HUD, plus the obstacle and hidden overlay you can't see yet). Session 4 starts from this exact file, not a fresh starter."
  },
  "l1-s4": {
    partNum: "Lab 4",
    partTitle: "JS Variable Registry",
    objectives: [
      "Initialize state registers in game.js — the file every session from here on extends",
      "Declare mutable variables for player position, speed, score, and state",
      "Declare a lives/health variable the sandbox drill never asks for",
      "Declare immutable constants for track limits and lane dimensions",
      "Perform basic mathematical increments on state variables"
    ],
    planSpecs: {
      vision: "This lab's file already looks like Session 3's styled road and car — this lab works behind the scenes, giving the game a memory of the score, speed, lives, and whether it's running.",
      parts: "Parts needed: none new on screen — this session gives the game a memory. Information to track: the car's position, the current speed, the score, a lives count, whether the game is running, and the fixed width of a lane.",
      flow: "State initialization (start) -> Variable declarations -> Math increments on game events -> Render UI updates"
    },
    referenceSessions: [{ id: "l1-s2", label: "Session 2's HTML" }, { id: "l1-s3", label: "Session 3's CSS" }],
    chainFrom: null,
    promptGuide: "This is where game.js starts — every session from here to the final lab extends this exact file, so get the registry right. Ask the AI to declare mutable variables for your car's starting x position (read it off YOUR OWN Session 3 CSS, not a fixed number), 'speed' (initial 0), 'score' (initial 0), a 'lives' count (initial 3 — the sandbox drill never covers this one), and 'gameActive' (initial false), plus constants for your track's width and lane spacing. Write test statements that increment score by 1 and decrement lives by 1, then log the results.",
    codeReviewGuide: [
      "Are variables declared with `let` (mutable) and constants with `const` (immutable)?",
      "Is the speed variable initialized as a Number (not a String with quotes)?",
      "Does the starting car x-position actually match where your Session 3 CSS centers `#player-car`, not a copied 165?",
      "Socratic Question: What would happen if we declared `speed = '10'` (string) and then executed `speed += 5`? How does variable data type dictate arithmetic outcomes?"
    ],
    sampleGeneratedHtml: '// game.js — Racing Car Game state registry\n// NOTE: carX/TRACK_WIDTH below are an EXAMPLE — use YOUR OWN Session 3 numbers.\nlet carX = 175;         // player position — changes as you steer\nlet speed = 0;          // Number, not "0"\nlet score = 0;\nlet lives = 3;          // not in the sandbox drill — your own game needs this\nlet gameActive = false; // true/false switch: is the game running?\n\nconst LANE_WIDTH = 137;   // fixed: pixels between lanes, from YOUR track width\nconst TRACK_WIDTH = 410;  // fixed: matches YOUR Session 3 #game-track width\n\n// quick test of the math\nscore++;       // score is now 1\nlives--;       // lives is now 2\nconsole.log("Score:", score, "Lives:", lives);',
    testCasesGuide: "- Verify variables are declared with correct syntax, using YOUR OWN track/car numbers from Sessions 2-3\n- Verify score and lives values update mathematically rather than string concatenating\n- Verify console logs report correct variable transitions",
    iterationGuide: "Ensure zero global variables are exposed in global browser scope directly (wrap them inside an object namespace or immediately invoked functional block to prevent client-side console hacks).",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "Screen unchanged from the Session 3 look — but score, speed, lives, and gameActive are now real tracked variables in game.js. Session 5 opens THIS file and extends it, not a fresh copy."
  },
  "l1-s5": {
    partNum: "Lab 5",
    partTitle: "Keyboard Control Interfaces",
    objectives: [
      "Extend last session's game.js — don't restart it",
      "Bind keyboard keydown listeners to the browser window",
      "Capture ArrowLeft and ArrowRight event properties",
      "Trigger coordinate updates based on keyboard inputs",
      "Update DOM style properties dynamically when variables shift"
    ],
    planSpecs: {
      vision: "Same car on the dark road — but now pressing the LEFT and RIGHT arrow keys slides the car sideways between lanes, like steering.",
      parts: "Parts needed: a way to listen for arrow key presses. Information to track: which key was pressed, and how far the car should shift each time (your own LANE_WIDTH constant from last session).",
      flow: "User presses keyboard key -> keydown Event fires -> JavaScript captures event.key -> IF key is ArrowLeft, decrease carX -> update #player-car.style.left coordinate"
    },
    chainFrom: "l1-s4",
    promptGuide: "Your game.js above already declares carX and LANE_WIDTH from Session 4 — don't ask the AI to redeclare them. Ask it to bind a keydown listener to the window that subtracts your LANE_WIDTH from carX on 'ArrowLeft' and adds it on 'ArrowRight', updating '#player-car''s left style to match each time, and logging every key press to the console.",
    codeReviewGuide: [
      "Is `window.addEventListener('keydown')` used correctly?",
      "Does the handler inspect `event.key` for exact key strings?",
      "Does the step size actually reuse your existing `LANE_WIDTH` constant instead of a new hardcoded number?",
      "Socratic Question: How does the browser know a key was pressed? What is the event object and what properties does it pass to our handler?"
    ],
    sampleGeneratedHtml: '// game.js — adds keyboard steering on top of Session 4\'s registry\n// (carX, LANE_WIDTH, etc. already exist above this — not repeated here)\nconst carElement = document.getElementById("player-car");\n\nwindow.addEventListener("keydown", function(event) {\n  if (event.key === "ArrowLeft") {\n    carX -= LANE_WIDTH;\n  } else if (event.key === "ArrowRight") {\n    carX += LANE_WIDTH;\n  }\n  carElement.style.left = carX + "px";\n  console.log("Steering:", event.key, "-> carX =", carX);\n});',
    testCasesGuide: "- Press ArrowLeft: verify console logs the key and carX updates by your LANE_WIDTH\n- Press ArrowRight: verify console logs key and carX increases by your LANE_WIDTH\n- Verify #player-car moves visually on screen when keys are pressed",
    iterationGuide: "Confirm that pressing keys repeatedly does not trigger rendering locks. Plan on screen controls (buttons) for accessibility.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car" style="left: 8%;"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "The car can now be steered left/right with the Arrow keys — shown here parked in the left lane after pressing ArrowLeft. This is your Session 4 file, still growing."
  },
  "l1-s6": {
    partNum: "Lab 6",
    partTitle: "Safety Guards & Boundary Clamps",
    objectives: [
      "Extend last session's steering logic — don't rewrite it from zero",
      "Implement conditional boundary checkpoints using logic gates",
      "Construct left-side and right-side limit guards from your own track width",
      "Evaluate compound logic checks to lock steering inside lanes",
      "Add a speed overheat clamp the sandbox drill doesn't cover"
    ],
    planSpecs: {
      vision: "Same steering car — but now it can't be steered off the edges of the road. Holding an arrow key at the edge just keeps it pinned at the outer lane instead of sliding off-screen.",
      parts: "Parts needed: a safety check that runs every time a key is pressed, plus a cap on how fast speed is allowed to climb. Information to track: the leftmost and rightmost positions your car is allowed to reach (derived from your own TRACK_WIDTH), and a maximum playable speed.",
      flow: "IF key is ArrowLeft:\n  IF carX > LeftLimit:\n    carX -= LANE_WIDTH\nIF key is ArrowRight:\n  IF carX < RightLimit:\n    carX += LANE_WIDTH"
    },
    chainFrom: "l1-s5",
    promptGuide: "Your keydown handler above already moves the car with no limits — ask the AI to add guards to it, not replace it. The car must stay locked inside the lanes YOUR track actually has (compute the left and right limits from your own TRACK_WIDTH and car width, don't assume 35/295). If the user presses left, only move the car if it's not already at the leftmost limit — same idea for right. Separately, add a small safety clamp: if 'speed' ever climbs past a maximum you choose, cap it back down and log a warning.",
    codeReviewGuide: [
      "Do the boundary checks derive their limits from your own TRACK_WIDTH/car width, not a hardcoded 35/295?",
      "Does the car snap back or lock cleanly when boundaries are breached?",
      "Is the speed clamp separate from the steering guards, not accidentally merged into the same if/else chain?",
      "Socratic Question: If the left guard used `>= 0` instead of your real left limit, where would the player car end up visually?"
    ],
    sampleGeneratedHtml: '// game.js — adds boundary guards on top of Session 5\'s steering\n// (LEFT_LIMIT/RIGHT_LIMIT below are an EXAMPLE — derive them from YOUR track width)\nconst LEFT_LIMIT = (TRACK_WIDTH % LANE_WIDTH === 0) ? 0 : Math.floor((TRACK_WIDTH % LANE_WIDTH) / 2);\nconst RIGHT_LIMIT = TRACK_WIDTH - LANE_WIDTH - LEFT_LIMIT;\n\nwindow.addEventListener("keydown", function(event) {\n  if (event.key === "ArrowLeft") {\n    if (carX > LEFT_LIMIT) {\n      carX -= LANE_WIDTH;\n    }\n  } else if (event.key === "ArrowRight") {\n    if (carX < RIGHT_LIMIT) {\n      carX += LANE_WIDTH;\n    }\n  }\n  document.getElementById("player-car").style.left = carX + "px";\n});\n\n// overheat clamp: keep speed playable, not in the sandbox drill\nconst MAX_SPEED = 120;\nif (speed > MAX_SPEED) {\n  speed = MAX_SPEED;\n  console.warn("Overheat! Speed clamped to", MAX_SPEED);\n}',
    testCasesGuide: "- Start at your center lane, press ArrowLeft repeatedly: verify the car locks at your own left limit instead of sliding off-screen\n- Start at center, press ArrowRight repeatedly: verify it locks at your own right limit\n- Push speed above your chosen MAX_SPEED: verify it clamps and logs a warning",
    iterationGuide: "Test boundary limits. Refine prompt to reject negative values or out-of-range overrides.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car" style="left: 2%;"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "Boundary clamps now stop the car from sliding off the track — even holding ArrowLeft, it locks cleanly at the left edge instead of driving off-screen. Still Session 4's file, still growing."
  },
  "l1-s7": {
    partNum: "Lab 7",
    partTitle: "Obstacle Loop Generation",
    objectives: [
      "Extend last session's game.js with a new self-contained feature",
      "Construct looping structures (for/while) to automate repetitive creation",
      "Render multiple road lane markers down the highway container, spaced to fit YOUR track height",
      "Calculate linear position coordinates inside loop runs",
      "Check loop safety boundaries to prevent infinite execution freezes"
    ],
    planSpecs: {
      vision: "The dashed center lane markers running down the highway are now drawn by a loop instead of placed by hand, spaced to evenly fill YOUR OWN track height from Session 3 — not a fixed number that happens to fit a different-sized track.",
      parts: "Parts needed: several repeating marker dashes down the highway. Information to track: how many dashes to create (your choice, 4-6), and the vertical spacing between them (computed from your own track height, not assumed).",
      flow: "FOR i from 0 to markerCount-1:\n  Calculate markerY = i * (trackHeight / markerCount)\n  Create div element with class 'marker-dash'\n  Set styles top = markerY, left = center\n  Append marker dash to '#game-track'"
    },
    chainFrom: "l1-s6",
    promptGuide: "This feature doesn't touch your steering/boundary code above — ask the AI to add it as its own block. Generate repeating highway marker dashes using a JavaScript 'for' loop: pick how many dashes you want (4-6), and calculate each one's vertical offset by dividing YOUR OWN track height (from Session 3) by that count — don't hardcode a spacing number that assumes a specific track size. Each dash should be a div with class 'marker-dash', styled absolute, nested inside '#game-track'.",
    codeReviewGuide: [
      "Does the loop have a clear terminating condition?",
      "Is the loop index incremented properly to prevent infinite loop browser lockups?",
      "Is the vertical spacing actually computed from your own track height divided by your marker count, not a copied 120px?",
      "Socratic Question: What happens to the browser call stack if the loop increment block is deleted? Why does the screen freeze?"
    ],
    sampleGeneratedHtml: '// game.js — spawn lane markers, spaced for YOUR track height (example: 500px, 5 markers)\nconst track = document.getElementById("game-track");\nconst MARKER_COUNT = 5;                 // your choice, 4-6\nconst TRACK_HEIGHT = 500;                // from YOUR Session 3 #game-track\nconst markerSpacing = TRACK_HEIGHT / MARKER_COUNT;\n\nfor (let i = 0; i < MARKER_COUNT; i++) {\n  let markerY = i * markerSpacing;\n  const dash = document.createElement("div");\n  dash.className = "marker-dash";\n  dash.style.top = markerY + "px";\n  dash.style.left = (TRACK_WIDTH / 2) + "px";  // centered on YOUR track\n  track.appendChild(dash);\n  console.log("Highway Marker position: " + markerY);\n}',
    testCasesGuide: "- Verify the loop runs exactly MARKER_COUNT times and appends that many elements\n- Verify lane markers are spaced equally across YOUR OWN track height, not a fixed 120px\n- Inspect DOM tree to verify every marker element exists",
    iterationGuide: "Audit loop bounds and check CPU loads. If loops are sluggish, optimize calculation formulas.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "The dashed center lane markers are now generated by a for-loop, spaced to fit your own track height instead of hand-placed. Oncoming obstacle cars are a separate concept covered in Session 9's lab."
  },
  "l1-s8": {
    partNum: "Lab 8",
    partTitle: "Modular Control Functions",
    objectives: [
      "Refactor Sessions 5-6's own steering code — behavior must not change",
      "Decompose game script into dedicated single-purpose functions",
      "Group the movement functions under one namespaced object, not three loose globals",
      "Manage scope variables access: keep local variables locked",
      "Refactor keyboard listeners to invoke modular movement hooks"
    ],
    planSpecs: {
      vision: "This lab's screen looks identical to Session 7's — this lab is a behind-the-scenes cleanup, organizing the movement code into one reusable, namespaced controller without changing what the player sees.",
      parts: "Parts needed: none new on screen — this session reorganizes existing behavior into a named, reusable controller object (update position, move left, move right). Information to track: which pieces of information the controller is allowed to see and change.",
      flow: "Key pressed -> call Controller.moveLeft() -> update carX state -> call Controller.updatePosition() -> update DOM style offsets"
    },
    chainFrom: "l1-s7",
    promptGuide: "Your own keydown handler above already does this steering inline — the exercise drilled three bare global functions, but ask the AI for something a little cleaner here: one namespaced object, e.g. `const Controller = { updatePosition, moveLeft, moveRight }`, so the three pieces don't pollute the global scope as separate names. `updatePosition()` styles '#player-car''s left coordinate; `moveLeft()`/`moveRight()` apply your existing boundary clamps then call `updatePosition()`. Make the keydown listener call `Controller.moveLeft()`/`Controller.moveRight()` instead of running the logic inline.",
    codeReviewGuide: [
      "Are the three functions grouped under one object instead of three separate global names?",
      "Are UI-rendering actions decoupled from variable increment checks?",
      "Socratic Question: Why is grouping these three functions under one object helpful, beyond just 'organization'? What's one global name collision this avoids?"
    ],
    sampleGeneratedHtml: '// game.js — steering grouped into one namespaced controller\nconst Controller = {\n  updatePosition() {\n    document.getElementById("player-car").style.left = carX + "px";\n  },\n  moveLeft() {\n    if (carX > LEFT_LIMIT) {\n      carX -= LANE_WIDTH;\n    }\n    this.updatePosition();\n  },\n  moveRight() {\n    if (carX < RIGHT_LIMIT) {\n      carX += LANE_WIDTH;\n    }\n    this.updatePosition();\n  }\n};\n\nwindow.addEventListener("keydown", function(event) {\n  if (event.key === "ArrowLeft") {\n    Controller.moveLeft();\n  } else if (event.key === "ArrowRight") {\n    Controller.moveRight();\n  }\n});',
    testCasesGuide: "- Verify `Controller.updatePosition`, `Controller.moveLeft`, and `Controller.moveRight` are all declared on one object\n- Press keys: verify steering behaves identically to before the refactor\n- Inspect scopes: ensure the three functions no longer exist as separate global names",
    iterationGuide: "Confirm the refactor changed no behavior — steering still clamps cleanly at both edges exactly as before. If a function logs 'undefined', check whether `this` is being used correctly inside the object's own methods.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "Screen matches Session 7's — but the steering logic is now grouped under one Controller object instead of scattered globals or one long script."
  },
  "l1-s9": {
    partNum: "Lab 9",
    partTitle: "Timer Loops & Animations",
    objectives: [
      "Add the animation loop as a new self-contained piece — steering/guards keep working untouched",
      "Implement recursively calling game loop cycles using requestAnimationFrame",
      "Animate your own '#obstacle' element (built in Session 2-3) moving vertically down the lanes",
      "Compute boundary resets to spawn the obstacle back at off-screen top, using YOUR track height",
      "Control animation loops execution using active state gates"
    ],
    planSpecs: {
      vision: "The obstacle car now visibly scrolls DOWN the road continuously, like the player is driving forward past it, disappearing off the bottom of YOUR track and reappearing at the top — a real animated highway instead of a still picture.",
      parts: "Parts needed: a continuously repeating game loop. Information to track: the obstacle's vertical position, how fast it moves, and the score increase each time it resets.",
      flow: "gameLoop runs -> IF gameActive is True:\n  1. Update obstacleY += speed\n  2. IF obstacleY > YOUR trackHeight: reset obstacleY = -100, increase score\n  3. Style #obstacle top = obstacleY\n  4. requestAnimationFrame(gameLoop) to trigger next paint frame"
    },
    chainFrom: "l1-s8",
    promptGuide: "Add this on top of the Controller object above — it's a separate concern from steering, so don't touch that code. Build a 'gameLoop()' function that runs recursively using 'requestAnimationFrame'. Inside, update a new 'obstacleY' variable by adding 'speed' on each tick, and move your '#obstacle' element (the one from your Session 2 HTML) to match. If the obstacle passes the bottom of YOUR OWN track height, reset it to -100 and increase the score by 10. Gate the whole loop on 'gameActive'.",
    codeReviewGuide: [
      "Does the animation loop check `gameActive` before requesting the next frame?",
      "Does the obstacle reset coordinate use YOUR track height, not an assumed 500?",
      "Is `#obstacle` (the element you already built) being moved, rather than a newly-created one?",
      "Socratic Question: Why is 'requestAnimationFrame' preferred over 'setInterval' for rendering fluid screen animations?"
    ],
    sampleGeneratedHtml: '// game.js — animation engine, added on top of the steering Controller\n// TRACK_BOTTOM below is an EXAMPLE — use YOUR OWN track height from Session 3\nlet obstacleY = -100;\nconst TRACK_BOTTOM = 500;\nconst obstacleEl = document.getElementById("obstacle");\n\nfunction moveObstacle() {\n  obstacleY += speed;\n  if (obstacleY > TRACK_BOTTOM) {   // passed YOUR track\'s bottom edge\n    obstacleY = -100;               // respawn at the top\n    score += 10;                    // scored a pass\n  }\n  obstacleEl.style.top = obstacleY + "px";\n  document.getElementById("score-val").textContent = score;\n}\n\nfunction gameLoop() {\n  if (!gameActive) { return; }   // stop when the game ends\n  moveObstacle();\n  requestAnimationFrame(gameLoop);\n}\n\ngameActive = true;\ngameLoop();',
    testCasesGuide: "- Call gameLoop(): verify the obstacle moves down the screen continuously\n- Verify the obstacle resets to -100px when it exits YOUR track's bottom boundary\n- Verify score increments in dashboard HUD on each reset\n- Set gameActive to false: verify the animation loop halts instantly",
    iterationGuide: "Examine framerate stability. Refine prompt rules if resetting overlaps causes glitches.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">10</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle" style="top:4px;left:8px;"></div><div id="obstacle-2" class="obstacle" style="top:24px;left:70px;"></div><div class="obstacle" style="top:40px;left:140px;"></div></div>',
    targetOutcomeCaption: "The game loop now runs continuously via requestAnimationFrame — the obstacle scrolls smoothly down YOUR track 60 times a second, resetting and increasing the score every cycle. Steering from Sessions 5-8 still works exactly as before."
  },
  "l1-s10": {
    partNum: "Lab 10",
    partTitle: "Collision Detection Overlap Math",
    objectives: [
      "Add collision checking into last session's animation loop, not a new loop",
      "Understand 2D coordinate overlap theorems (AABB collision logic)",
      "Compose mathematical collision checks comparing bounding borders",
      "Spend a life on each collision instead of ending the game immediately — a wrinkle the sandbox drill skips",
      "Halt requestAnimationFrame recursions only once lives reach zero"
    ],
    planSpecs: {
      vision: "When the player's car touches the obstacle, the screen should visibly react — but with 'lives' already tracked since Session 4, a single crash should cost one life and let the player keep going, only truly ending once lives hit zero.",
      parts: "Parts needed: a collision check that runs every loop, plus a rule for what a collision actually costs. Information to track: the edges (left/right/top/bottom) and size of the player's car and the obstacle, and the current lives count.",
      flow: "IF player.right > obstacle.left AND player.left < obstacle.right AND\n   player.bottom > obstacle.top AND player.top < obstacle.bottom:\n     Collision detected -> lives-- -> IF lives <= 0: gameActive = false, Trigger Game Over\n     ELSE: reset obstacle position, keep playing"
    },
    chainFrom: "l1-s9",
    promptGuide: "Add this check inside the gameLoop() you already have above — don't write a second loop. Write a function checking if the bounding boxes of '#player-car' and '#obstacle' overlap, using their real sizes from your own Session 3 CSS. On a collision, decrement 'lives' instead of ending the game outright; only when lives reaches 0 should 'gameActive' be set to false and a 'gameOver()' function called. A collision that doesn't end the game should reset the obstacle back off-screen so play continues.",
    codeReviewGuide: [
      "Verify the collision function matches AABB overlap formula parameters, using YOUR car/obstacle sizes.",
      "Does a collision decrement lives rather than always ending the game immediately?",
      "Is the game-over check `lives <= 0`, not `lives < 0` (which would allow one extra hidden hit)?",
      "Socratic Question: If we only checked if the center coordinates were identical, why would cars drive right through each other without crashing? Why do box dimensions matter?"
    ],
    sampleGeneratedHtml: '// game.js — AABB collision detection, added inside gameLoop()\nfunction checkCollision(rect1, rect2) {\n  return (\n    rect1.x < rect2.x + rect2.width &&\n    rect1.x + rect1.width > rect2.x &&\n    rect1.y < rect2.y + rect2.height &&\n    rect1.y + rect1.height > rect2.y\n  );\n}\n\n// inside gameLoop(), after moving the obstacle.\n// width/height/playerY below are an EXAMPLE — use YOUR OWN Session 3 car dimensions:\nconst player = { x: carX, y: 380, width: 60, height: 100 };\nconst obstacleBox = { x: TRACK_WIDTH / 2, y: obstacleY, width: 60, height: 100 };\nif (checkCollision(player, obstacleBox)) {\n  lives--;\n  console.log("Hit! Lives remaining:", lives);\n  if (lives <= 0) {\n    gameActive = false;\n    console.log("Collision detected — game over!");\n  } else {\n    obstacleY = -100;   // reset so play continues\n  }\n}',
    testCasesGuide: "- Drive player car into the obstacle once with lives > 1: verify lives decreases by 1 and the game keeps running\n- Let lives reach 0 via repeated collisions: verify gameActive transitions to false and movement halts\n- Verify console logs report the collision and the updated lives count",
    iterationGuide: "Audit collision accuracy. If triggers occur early or late, adjust box width/height offsets. Add test case objects checking boundary values.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">40</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle" style="top:32px;left:40%;"></div><div style="position:absolute;inset:0;background:rgba(139,0,0,0.6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:0.42rem;text-align:center;">💥 CRASH DETECTED</div></div>',
    targetOutcomeCaption: "A collision has been detected — the AABB overlap check matched the player and obstacle bounding boxes, this crash cost one of the lives tracked since Session 4, and (if lives remain) play continues instead of stopping outright."
  },
  "l1-s11": {
    partNum: "Lab 11",
    partTitle: "DOM HUD Visual Updates",
    objectives: [
      "Wire the HUD into last session's collision/lives logic, not a fresh scoring system",
      "Connect state registers changes to real-time UI text elements",
      "Write score AND lives state updates to textContent of DOM nodes — the drill only covers score",
      "Render modal retry popups when lives reach zero",
      "Bind keypress event handlers to reset every tracked variable and restart the game"
    ],
    planSpecs: {
      vision: "The scoreboard number visibly climbs as the game runs, a lives readout ticks down on each crash, and once lives hit zero a 'Game Over' screen appears on top of the road showing the final score and a prompt to restart.",
      parts: "Parts needed: a lives readout next to the score, and a Game Over screen with a restart prompt (hidden until needed). Information to track: the current score AND lives to display, and whether the game is active or showing the Game Over screen.",
      flow: "Score or lives changes -> update their textContent -> lives reaches 0 -> remove '.hidden' class from restart-panel -> Press Space key -> reset ALL game variables (score, lives, position), restart loop"
    },
    chainFrom: "l1-s10",
    promptGuide: "Build on the lives-based collision logic above, not a simpler score-only version. Write code that keeps both '#score-val' text AND a lives readout (add your own small element for it, since the sandbox drill only ever displays score) in sync with the 'score' and 'lives' variables. When lives reaches 0, remove the 'hidden' class from '#restart-panel'. If the user presses 'Space' while the panel is visible, reset score to 0, lives back to 3, car position to default, hide the panel, set gameActive to true, and restart the loop.",
    codeReviewGuide: [
      "Does BOTH score and lives update in the DOM whenever either changes, not just score?",
      "Is the restart-panel reveal gated on lives reaching 0, not on the first collision?",
      "Does Space-to-restart reset every tracked variable (score, lives, position) — not just some of them?",
      "Socratic Question: What is the difference between setting 'textContent' vs 'innerHTML'? Why is 'textContent' safer for updating values?"
    ],
    sampleGeneratedHtml: '// game.js — HUD updates (score + lives) and restart flow\nfunction updateHud() {\n  if (score < 0) { score = 0; }\n  document.getElementById("score-val").textContent = score;\n  document.getElementById("lives-val").textContent = lives;   // your own element, not in the sandbox drill\n}\n\nfunction triggerGameOverScreen() {\n  document.getElementById("restart-panel").classList.remove("hidden");\n}\n\nwindow.addEventListener("keydown", function(event) {\n  if (event.key === " ") {          // Space restarts the game\n    score = 0;\n    lives = 3;\n    carX = 175;   // your own Session 4 starting x\n    document.getElementById("restart-panel").classList.add("hidden");\n    gameActive = true;\n    gameLoop();\n  }\n});',
    testCasesGuide: "- Verify score AND lives both update on the HUD as the game runs\n- Reduce lives to 0 via collisions: verify the restart screen panel becomes visible\n- Press Space: verify score, lives, and position ALL reset, track clears, and the loop starts cleanly",
    iterationGuide: "Check that resetting doesn't duplicate loop threads. Ensure all style classes toggle cleanly.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">80</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle"></div><div style="position:absolute;inset:0;background:rgba(6,8,20,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;"><strong style="color:#ff4d4d;font-size:0.5rem;">GAME OVER</strong><span style="font-size:0.4rem;margin-top:2px;">Final Score: 80</span><span style="font-size:0.34rem;margin-top:2px;color:#8899aa;">Press SPACE to Restart</span></div></div>',
    targetOutcomeCaption: "Score and lives now both update live from JavaScript into the HTML, and the Game Over screen (previously hidden with a .hidden class) appears with the final score and a restart prompt once the player runs out of lives."
  },
  "l1-s12": {
    partNum: "Lab 12",
    partTitle: "Concept-Mastery Labs & Final Assessment",
    objectives: [
      "Collect every constant your OWN game has accumulated since Session 4 into one config object",
      "Add score speed-multipliers to scale game difficulty dynamically",
      "Refactor global assets configurations into a single config record",
      "Execute automated QA scripts checks verifying safety locks",
      "Defend code design structures and variables scopes under audits",
      "See your finished game assembled from every session below, in the Complete Game section"
    ],
    planSpecs: {
      vision: "A config-driven finish to the exact game you've been building since Session 4: obstacle speed now scales with score, and everything from the scoreboard to the crash screen works smoothly together, ready to demo in the live defense. Scroll down to the Complete Game section to see your HTML, CSS, and game.js assembled into one build.",
      parts: "Parts needed: none new on screen — this lab collects all of YOUR game's tunable numbers (TRACK_WIDTH, LANE_WIDTH, your boundary limits, MAX_SPEED, etc. — not a generic list) into one place. Information to track: the starting speed, how quickly difficulty ramps up, and the maximum allowed speed.",
      flow: "Game running -> speed increases based on score * difficultyMultiplier -> clamp speed to CONFIG.maxSpeed"
    },
    chainFrom: "l1-s11",
    promptGuide: "Look back through everything above — you already have TRACK_WIDTH, LANE_WIDTH, your left/right boundary limits, and MAX_SPEED scattered across earlier sessions' code. Ask the AI to gather all of YOUR OWN constants (not a generic template list) into one read-only CONFIG object, then add logic that increases obstacle speed as score climbs, clamped to CONFIG.maxSpeed so it stays playable. Every place in your code that used one of those magic numbers directly should now read from CONFIG instead.",
    codeReviewGuide: [
      "Does CONFIG actually contain every constant YOUR game already had, not a fresh generic set?",
      "Does difficulty scaling have upper clamping parameters to prevent unplayable speeds?",
      "Do the boundary guards and obstacle logic from earlier sessions now read from CONFIG instead of their original hardcoded numbers?",
      "Socratic Question: Why is it bad practice to hardcode layout dimensions directly inside code logic? How does a config object simplify game changes?"
    ],
    sampleGeneratedHtml: '// game.js — final config, gathering YOUR OWN constants from Sessions 4-9\n// (the numbers below are an EXAMPLE — use whatever YOUR earlier sessions actually declared)\nconst CONFIG = {\n  trackWidth: TRACK_WIDTH,\n  laneWidth: LANE_WIDTH,\n  leftBound: LEFT_LIMIT,\n  rightBound: RIGHT_LIMIT,\n  startSpeed: 5,\n  difficultyMultiplier: 0.1,\n  maxSpeed: MAX_SPEED\n};\n\nfunction updateDifficulty() {\n  let currentSpeed = CONFIG.startSpeed + score * CONFIG.difficultyMultiplier;\n  return Math.min(currentSpeed, CONFIG.maxSpeed);   // clamp to a playable max\n}\n\n// Controller.moveLeft()/moveRight() from Session 8 now read from CONFIG\n// instead of the original LEFT_LIMIT/RIGHT_LIMIT constants directly.',
    testCasesGuide: "- Verify game speeds up dynamically as score climbs\n- Check that speed locks at your CONFIG.maxSpeed clamp\n- Run the full game end-to-end: verify zero regressions in steering, collision math, lives, or restart\n- Open the Complete Game section below and verify your assembled HTML/CSS/game.js reflects every session's work",
    iterationGuide: "Complete self-reflection journal entries summarizing optimization tweaks, bugs solved, and lessons learned.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">240</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle"></div><div id="obstacle-2" class="obstacle"></div><div class="obstacle" style="top:30px;left:120px;"></div></div>',
    targetOutcomeCaption: "The finished assessment build — obstacle spawning, difficulty scaling, collision detection, and a polished restart flow all work together, gathered from every session since Session 4. Ready for your live defense QA review.",
    finalAssembly: {
      title: "🏁 Your Complete Game — Assembled",
      description: "Your own HTML, CSS, and game.js, pulled straight from every session's saved Project Journal — this is the actual game you built, session by session. Run it on your own machine to play it; the platform only displays it here for review.",
      blocks: [
        { label: "index.html (from Session 2)", sessionId: "l1-s2" },
        { label: "styles.css (from Session 3)", sessionId: "l1-s3" },
        { label: "game.js (this session, carrying every session since 4)", sessionId: "l1-s12" }
      ],
      chainCheckIds: ["l1-s2", "l1-s3", "l1-s4", "l1-s5", "l1-s6", "l1-s7", "l1-s8", "l1-s9", "l1-s10", "l1-s11"]
    }
  },
  "l2-s1": {
    partNum: "Lab 1",
    partTitle: "Canvas Arena Initialization",
    objectives: [
      "Create the base `<canvas id=\"game-canvas\">` element — canvas.js starts here and every session from here extends it",
      "Retrieve its 2D drawing context in `canvas.js`",
      "Declare your own canvas size and ship starting values as constants, not the sandbox drill's fixed numbers",
      "Draw the player ship as a filled rectangle using those constants"
    ],
    planSpecs: {
      vision: "A dark space arena, sized however you like (440-520 wide, 560-640 tall), with a single ship near the bottom in a color and size of your choosing — the first pixels painted directly onto a canvas, not built from HTML boxes.",
      parts: "Parts needed: the canvas viewport, the 2D drawing context (the 'pen' you draw with), and the ship rectangle. Information to track: your own canvas size, and the ship's position, size, and color as named constants — not hardcoded numbers sprinkled through the file.",
      flow: "Load the canvas element -> get its 2D drawing context -> set the fill color -> fillRect paints the ship's pixels onto the canvas."
    },
    chainFrom: null,
    promptGuide: "This is where canvas.js starts — every session through the final lab extends this exact file, so set it up cleanly. Ask the AI to create a `<canvas id=\"game-canvas\">` element sized to your own choosing (440-520 wide, 560-640 tall), retrieve its 2D context, and declare CANVAS_WIDTH/CANVAS_HEIGHT constants plus a `ship` starting position/size/color of your choosing (not necessarily the drill's 200/500/40/red) — then draw it with `fillStyle`/`fillRect` using those constants, not raw numbers.",
    codeReviewGuide: [
      "Does the script call `canvas.getContext('2d')` before any draw commands?",
      "Is `fillStyle` set before `fillRect` is called?",
      "Does the draw call use your own named constants (CANVAS_WIDTH, ship.x, etc.) instead of hardcoded numbers?",
      "Socratic Question: Why does the ship look like a solid trail instead of a single moving square if `ctx.clearRect()` is missing from the draw loop?"
    ],
    sampleGeneratedHtml: '// canvas.js — arena + ship, using YOUR OWN constants (example values below)\nconst CANVAS_WIDTH = 480;\nconst CANVAS_HEIGHT = 600;\nconst canvas = document.getElementById("game-canvas");\ncanvas.width = CANVAS_WIDTH;\ncanvas.height = CANVAS_HEIGHT;\nconst ctx = canvas.getContext("2d");\n\nconst ship = { x: 220, y: 550, width: 36, height: 36, color: "orange" };\n\nctx.fillStyle = ship.color;\nctx.fillRect(ship.x, ship.y, ship.width, ship.height);',
    testCasesGuide: "- Verify `#game-canvas` exists and matches your own chosen width/height constants\n- Verify `ctx` is a valid 2D rendering context\n- Verify the player ship renders at your own chosen position, size, and color — not assumed to be exactly 200/500/40/red",
    iterationGuide: "Confirm `clearRect()` runs before every redraw once the game loop is introduced in Session 2's lab, so shapes don't leave trails.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><div style="position:absolute;bottom:4px;left:46%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div></div>',
    targetOutcomeCaption: "First render — your own ship, painted at your own chosen position/size/color on your own sized canvas. Unlike Level 1's DOM game, everything here is drawn as pixels with no elements to inspect or select. Session 2 opens this exact file, not a fresh one."
  },
  "l2-s2": {
    partNum: "Lab 2",
    partTitle: "Sprite Object Modeling",
    objectives: [
      "Extend last session's canvas.js — reshape the ship variable, don't restart the file",
      "Turn your ship into a single object literal (it may already be one from Session 1)",
      "Add a `speed` property the drill treats as separate but your file should own as one object",
      "Update object properties in response to keyboard movement"
    ],
    planSpecs: {
      vision: "The same ship from Session 1, but now the arrow keys slide it left and right within YOUR OWN canvas bounds — each move erases the last frame and repaints it in the new spot.",
      parts: "Parts needed: your existing `ship` object, now with a `speed` property added if it doesn't have one. Information to track: the ship's current position and how far it steps per key press.",
      flow: "Arrow key pressed -> add or subtract ship.speed from ship.x -> clear the canvas -> redraw the ship at its new position."
    },
    chainFrom: "l2-s1",
    promptGuide: "Your ship object from Session 1 already has x, y, width, height, and color — ask the AI to add a `speed` property to that same object (don't redeclare it from scratch), then write a `moveLeft()` function that subtracts `ship.speed` from `ship.x`, clears YOUR canvas using your own CANVAS_WIDTH/CANVAS_HEIGHT, and redraws the ship.",
    codeReviewGuide: [
      "Is `speed` added to your EXISTING ship object, not a brand-new separate ship declaration?",
      "Does `moveLeft()` reference `ship.speed` instead of a hardcoded number?",
      "Does the clearRect call use your own CANVAS_WIDTH/CANVAS_HEIGHT constants from Session 1?",
      "Socratic Question: If a local variable inside the move handler is also named `ship`, which one does the assignment update — and why does the canvas ship stop moving?"
    ],
    sampleGeneratedHtml: '// canvas.js — ship gains a speed property, on top of Session 1\'s draw code\nship.speed = 6;   // added to the SAME object declared in Session 1\n\nfunction moveLeft() {\n  ship.x -= ship.speed;\n  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n  ctx.fillStyle = ship.color;\n  ctx.fillRect(ship.x, ship.y, ship.width, ship.height);\n}',
    testCasesGuide: "- Verify `speed` was added to your existing ship object, not a second ship variable\n- Press ArrowLeft: verify `ship.x` decreases by exactly `ship.speed`\n- Verify canvas re-renders the ship at the new x position using your own canvas size",
    iterationGuide: "Check for variable shadowing bugs if the AI reintroduces a local `ship` inside any handler function.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><div style="position:absolute;bottom:4px;left:28%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div></div>',
    targetOutcomeCaption: "Your ship now steers with the arrow keys — shown here after pressing ArrowLeft. Still Session 1's file, still growing."
  },
  "l2-s3": {
    partNum: "Lab 3",
    partTitle: "Laser Battery Arrays",
    objectives: [
      "Add a self-contained new feature on top of last session's steering — don't touch it",
      "Declare an empty `lasers` array",
      "Push new laser objects onto the array when firing, sized/colored to your own choosing",
      "Loop through the array to render every active laser"
    ],
    planSpecs: {
      vision: "Pressing spacebar fires laser bolts (your own color choice) from the ship's nose, and several can be in flight on screen at once.",
      parts: "Parts needed: a growing list (array) of laser objects. Information to track: each laser's position and speed, and how many lasers are currently active.",
      flow: "Spacebar pressed -> fireLaser() creates a laser object and pushes it into the lasers array -> the render loop draws every laser currently in the array."
    },
    chainFrom: "l2-s2",
    promptGuide: "Add this as a new block below your steering code — it doesn't touch moveLeft/moveRight. Ask the AI to declare an empty `lasers` array, write a `fireLaser()` function that pushes a new laser object (positioned relative to YOUR ship's own width — e.g. ship.x + ship.width/2, not a hardcoded +18) at a speed of your choosing when spacebar is pressed, and a loop that draws every laser in the array in a color you pick.",
    codeReviewGuide: [
      "Is `lasers` initialized as an empty array before any pushes occur?",
      "Does `fireLaser()` push a full object literal (not just a coordinate number)?",
      "Does the laser's starting x derive from YOUR ship's own width/position, not a copied +18?",
      "Socratic Question: If the keydown listener isn't distinguishing held keys from repeated presses, why does the laser cannon stutter instead of firing smoothly?"
    ],
    sampleGeneratedHtml: '// canvas.js — laser battery, added below the steering code\nconst lasers = [];\n\nfunction fireLaser() {\n  lasers.push({\n    x: ship.x + ship.width / 2,   // centered on YOUR ship\'s own width\n    y: ship.y,\n    width: 3,\n    height: 12,\n    speed: 9\n  });\n}\n\nwindow.addEventListener("keydown", function(event) {\n  if (event.key === " ") {\n    fireLaser();\n  }\n});\n\n// inside the render loop, alongside the ship draw:\nctx.fillStyle = "cyan";\nfor (let i = 0; i < lasers.length; i++) {\n  ctx.fillRect(lasers[i].x, lasers[i].y, lasers[i].width, lasers[i].height);\n}',
    testCasesGuide: "- Press spacebar once: verify `lasers.length` increases by exactly 1\n- Verify each pushed laser object has x, y, width, height, and speed properties\n- Verify the render loop draws one rectangle per array element, without breaking existing ship steering",
    iterationGuide: "Confirm rapid-fire spacebar presses don't push duplicate lasers per single press (debounce key-repeat if needed).",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><div style="position:absolute;bottom:4px;left:28%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div><div style="position:absolute;top:14px;left:30%;width:2px;height:7px;background:#ffee55;"></div><div style="position:absolute;top:32px;left:31%;width:2px;height:7px;background:#ffee55;"></div><div style="position:absolute;top:50px;left:29%;width:2px;height:7px;background:#ffee55;"></div></div>',
    targetOutcomeCaption: "Spacebar now pushes laser objects onto the `lasers` array — three mid-flight bolts are shown here, on top of your still-working steering from Session 2."
  },
  "l2-s4": {
    partNum: "Lab 4",
    partTitle: "Laser Motion & Garbage Collection",
    objectives: [
      "Make last session's static lasers actually move — extend fireLaser's array, don't rebuild it",
      "Move every laser's `y` coordinate each frame",
      "Detect lasers that cross off-screen bounds, using YOUR canvas height",
      "Prune dead lasers from the array using a reverse loop and `splice()`"
    ],
    planSpecs: {
      vision: "Lasers now fly upward every frame and vanish cleanly once they pass the top edge of YOUR OWN canvas, instead of piling up invisibly forever.",
      parts: "Parts needed: a per-frame cleanup pass over the lasers array you already built. Information to track: each laser's y position, the off-screen boundary (y < 0), and the array's current length.",
      flow: "Every frame -> loop backward over the lasers array -> move each laser up (y -= speed) -> if a laser's y < 0, splice it out of the array."
    },
    chainFrom: "l2-s3",
    promptGuide: "Your `lasers` array from Session 3 exists but nothing moves the entries yet — ask the AI to add that motion, not rebuild the array. Update every laser's `y` coordinate by subtracting its own `speed`, then remove any laser whose `y` drops below 0 using `splice()`, iterating the array in reverse order so the removal is safe mid-loop.",
    codeReviewGuide: [
      "Does the loop iterate from `lasers.length - 1` down to `0` (reverse), not forward?",
      "Is `splice(i, 1)` called only after the off-screen check, not unconditionally?",
      "Does this reuse your existing `lasers` array from Session 3 rather than declaring a new one?",
      "Socratic Question: If this loop iterated forward instead, why would some off-screen lasers survive the cleanup after a splice shifts the array?"
    ],
    sampleGeneratedHtml: '// canvas.js — laser motion + cleanup, added to Session 3\'s battery\nfunction updateLasers() {\n  for (let i = lasers.length - 1; i >= 0; i--) {\n    lasers[i].y -= lasers[i].speed;\n    if (lasers[i].y < 0) {\n      lasers.splice(i, 1);\n    }\n  }\n}',
    testCasesGuide: "- Fire 3 lasers, let them travel off-screen: verify `lasers.length` returns to 0\n- Fire lasers simultaneously exiting on the same frame: verify all are removed, not just every other one\n- Verify on-screen lasers are unaffected by the cleanup pass",
    iterationGuide: "Stress-test with 50+ simultaneous lasers to confirm the reverse-loop cleanup has zero skipped entries.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><span style="position:absolute;top:2px;left:4px;font-size:0.5rem;color:#00ffcc;">LASERS: 1</span><div style="position:absolute;bottom:4px;left:28%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div><div style="position:absolute;top:10px;left:30%;width:2px;height:7px;background:#ffee55;"></div></div>',
    targetOutcomeCaption: "Lasers now move every frame and get spliced from the array once they scroll off YOUR canvas — the count returns to 0 instead of leaking memory."
  },
  "l2-s5": {
    partNum: "Lab 5",
    partTitle: "Alien Swarm Grids & Shield Index Mapping",
    objectives: [
      "Add the swarm and shield as new features — steering and lasers from Sessions 2-4 keep working untouched",
      "Build a 2D grid of alien objects (your own row/column count) using nested loops and march the whole swarm in sync",
      "Reverse direction and drop the grid down when any alien reaches YOUR canvas edge",
      "Map absolute pixel coordinates to a shield's row/col cell index, using your own shield size"
    ],
    planSpecs: {
      vision: "A grid of aliens (your own choice of rows/columns, 3-4 rows by 4-6 columns) marches side-to-side across YOUR canvas, dropping down and reversing at its edges; a separate shield row (your own cell count and color) shows cells that get knocked out by mapped laser hits.",
      parts: "Parts needed: a rows-and-columns grid of alien objects, plus a shield modeled as a row of cells (1 = intact, 0 = destroyed). Information to track: each alien's x/y and alive flag, the swarm's shared marching direction, each shield cell's state, and the shield's pixel offset.",
      flow: "Every tick -> moveSwarm() shifts every alien's x by the current direction -> if any alien reaches YOUR canvas edge, flip direction and drop every alien's y. Separately: a laser reaches shield height -> col = floor((laser.x - shieldOffset) / cellWidth) -> if that cell is 1, set it to 0."
    },
    chainFrom: "l2-s4",
    referenceSessions: [{ id: "l2-s1", label: "Your own CANVAS_WIDTH/CANVAS_HEIGHT from Session 1 — the swarm's edge-bounce needs these, not fixed numbers" }],
    promptGuide: "This is a new block, separate from your steering/laser code above — don't modify those. Ask the AI to (1) build a grid of alien objects (pick your own row/column count) with a `moveSwarm()` function that reverses direction and drops the grid when it hits YOUR OWN CANVAS_WIDTH edge (not a hardcoded 440), and (2) represent a shield as an array of cells (your own count) and write a `checkShieldCollision(laser)` function that computes which cell a laser hit using your own shield's pixel offset and cell width.",
    codeReviewGuide: [
      "Is the alien grid built with nested `for` loops producing `aliens[row][col]` objects, checking edges across the WHOLE grid before reversing?",
      "Does the edge check use YOUR CANVAS_WIDTH constant, not a copied 440?",
      "Does the shield's column-index formula subtract the shield's starting x offset before dividing by `cellWidth`?",
      "Socratic Question: If the boundary check is removed, why does the whole swarm slide off-screen instead of bouncing back? If the index formula skips the offset subtraction, why do lasers appear to pass straight through the shield?"
    ],
    sampleGeneratedHtml: '// canvas.js — alien swarm + shield, added below steering/lasers\n// ROWS/COLS/shield count below are an EXAMPLE — use your own\nconst ROWS = 3, COLS = 5;\nlet direction = 1;\nconst aliens = [];\nfor (let r = 0; r < ROWS; r++) {\n  aliens.push([]);\n  for (let c = 0; c < COLS; c++) {\n    aliens[r].push({ x: c * 60 + 50, y: r * 50 + 40, alive: true });\n  }\n}\n\nfunction moveSwarm() {\n  let hitEdge = false;\n  for (let r = 0; r < aliens.length; r++) {\n    for (let c = 0; c < aliens[r].length; c++) {\n      aliens[r][c].x += 2 * direction;\n      if (aliens[r][c].x > CANVAS_WIDTH - 40 || aliens[r][c].x < 10) hitEdge = true;\n    }\n  }\n  if (hitEdge) {\n    direction *= -1;\n    for (let r = 0; r < aliens.length; r++) {\n      for (let c = 0; c < aliens[r].length; c++) { aliens[r][c].y += 20; }\n    }\n  }\n}\n\nconst SHIELD_OFFSET = 100, SHIELD_CELL_WIDTH = 20;\nconst shield = [1, 1, 1, 1, 1];   // your own count\n\nfunction checkShieldCollision(laser) {\n  const col = Math.floor((laser.x - SHIELD_OFFSET) / SHIELD_CELL_WIDTH);\n  if (col >= 0 && col < shield.length && shield[col] === 1) {\n    shield[col] = 0;\n    return true;\n  }\n  return false;\n}',
    testCasesGuide: "- Verify `aliens.length` and `aliens[0].length` match your own chosen grid size, and the swarm reverses/drops exactly when an edge alien crosses YOUR canvas boundary\n- Fire a laser at a known x coordinate: verify the correct shield cell index is computed and destroyed\n- Fire at an already-destroyed cell: verify no further effect",
    iterationGuide: "Confirm the swarm's edge check accounts for alien width (not just its left-edge x), and double-check the shield's column formula against its actual pixel offset.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><div style="position:absolute;bottom:20px;left:60px;width:10px;height:6px;background:#00f2fe;"></div><div style="position:absolute;bottom:20px;left:72px;width:10px;height:6px;background:#00f2fe;"></div><div style="position:absolute;bottom:20px;left:96px;width:10px;height:6px;background:#00f2fe;"></div><div style="position:absolute;bottom:20px;left:108px;width:10px;height:6px;background:#00f2fe;"></div><div style="position:absolute;top:12px;left:22px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:12px;left:36px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:12px;left:50px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:12px;left:64px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:12px;left:78px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:22px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:36px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:50px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:64px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:78px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:22px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:36px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:50px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:64px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:78px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;bottom:4px;left:46%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div></div>',
    targetOutcomeCaption: "A marching alien swarm above a shield row with one cell already knocked out by a mapped laser hit — added on top of your still-working steering and lasers from Sessions 2-4."
  },
  "l2-s6": {
    partNum: "Lab 6",
    partTitle: "Keyboard Input Matrix & Collision Sweeper",
    objectives: [
      "Replace the single-key steering from Session 2 with a proper input matrix — don't lose the boundary logic",
      "Track simultaneous key states using a `keysPressed` map object with paired `keydown`/`keyup` listeners",
      "Sweep every laser against your own alien grid from Session 5 with correct splice/break behavior",
      "Add a score variable the drill never declares explicitly, and increment it on kills"
    ],
    planSpecs: {
      vision: "Controls feel arcade-smooth — the player can steer and fire at the same time — and lasers now destroy exactly one alien each on contact from YOUR OWN grid, with a score you now track climbing accordingly.",
      parts: "Parts needed: a key-state map remembering held keys, plus a nested collision sweep comparing every laser against every living alien in your grid. Information to track: true/false per key, a firing cooldown timer, a running `score` variable, and each alien's alive/dead status.",
      flow: "keydown sets a key's entry true -> keyup sets it false -> every frame, handleInputs() reads the map. Separately: loop backward over lasers -> for each laser, loop over your alien grid -> on overlap, mark the alien dead, splice the laser, add to score, and break."
    },
    chainFrom: "l2-s5",
    promptGuide: "Your single keydown listener from Session 2 works but can't hold two keys at once — ask the AI to replace it with a `keysPressed` map: both `keydown`/`keyup` listeners toggling each key's state, read every game-loop tick by `handleInputs()` (which should still respect your existing boundary limits). Separately, declare a `score` variable (not in the drill's exercise, your game needs it) starting at 0, and sweep every laser against YOUR OWN alien grid from Session 5, marking `alive = false`, splicing the laser, and adding to score on overlap, with a `break` after each hit.",
    codeReviewGuide: [
      "Are both `keydown` AND `keyup` listeners bound, and does `handleInputs()` run every frame rather than only inside the event handler?",
      "Does the outer laser loop iterate in reverse, with a `break` immediately after a hit is resolved?",
      "Does the sweep actually reference YOUR OWN grid dimensions from Session 5, not an assumed 3x5?",
      "Socratic Question: If the `keyup` listener is missing, why does the ship keep firing forever after the player releases spacebar? If `break` is missing, why could one laser wipe out three aliens in one frame?"
    ],
    sampleGeneratedHtml: '// canvas.js — input matrix + collision sweep, replacing Session 2\'s single-key listener\nlet score = 0;   // not in the sandbox drill\nconst keysPressed = {};\n\nwindow.addEventListener("keydown", (e) => { keysPressed[e.key] = true; });\nwindow.addEventListener("keyup", (e) => { keysPressed[e.key] = false; });\n\nfunction handleInputs() {\n  if (keysPressed["ArrowLeft"]) { ship.x -= ship.speed; }\n  if (keysPressed["ArrowRight"]) { ship.x += ship.speed; }\n  if (keysPressed[" "]) { fireLaser(); }\n}\n\nfunction checkSwarmCollisions() {\n  for (let i = lasers.length - 1; i >= 0; i--) {\n    for (let r = 0; r < aliens.length; r++) {\n      for (let c = 0; c < aliens[r].length; c++) {\n        const a = aliens[r][c];\n        if (a.alive && lasers[i].x < a.x + 30 && lasers[i].x + lasers[i].width > a.x) {\n          a.alive = false;\n          lasers.splice(i, 1);\n          score += 50;\n          break;\n        }\n      }\n    }\n  }\n}',
    testCasesGuide: "- Hold ArrowLeft and ArrowRight simultaneously: verify movement and firing can happen in the same frame\n- Fire one laser through a single alien: verify exactly one alien dies and score increases\n- Fire into a dense cluster: verify each laser destroys at most one alien",
    iterationGuide: "Add a cooldown timestamp check inside `handleInputs()` so holding spacebar doesn't fire on every frame, and profile the nested sweep's cost as the alien grid grows.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><span style="position:absolute;top:2px;right:4px;font-size:0.5rem;color:#00ffcc;">SCORE: 150</span><div style="position:absolute;bottom:4px;left:30%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div><div style="position:absolute;bottom:40px;left:33%;width:2px;height:7px;background:#ffee55;"></div><div style="position:absolute;top:12px;left:22px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:12px;left:36px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:12px;left:64px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:12px;left:78px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:36px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:50px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:64px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:23px;left:78px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:22px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:36px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:50px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:34px;left:64px;width:9px;height:7px;background:#39ff88;"></div></div>',
    targetOutcomeCaption: "Aliens destroyed cleanly by the collision sweep, score climbing, steering and firing now controlled through the keysPressed matrix — still your Session 1 file."
  },
  "l2-s7": {
    partNum: "Lab 7",
    partTitle: "Wave States, HUD Gauges & Memory Audit",
    objectives: [
      "Wire wave/HUD logic into the score and grid you already have — don't restart either",
      "Detect when your wave's alien grid is cleared and spawn a harder swarm exactly once per clear",
      "Render score, wave number, and a health bar (a new variable, not in the drill) in a canvas HUD",
      "Cache array lengths and skip dead sprites early, confirming frame-rate stability under load"
    ],
    planSpecs: {
      vision: "Clearing every alien in YOUR grid spawns a faster new wave; a HUD shows your existing score, a wave number, and a shrinking health bar; and the loops now hold a steady 60 FPS through a stress test with hundreds of lasers.",
      parts: "Parts needed: a wave counter, a health value (not yet tracked anywhere in your file), a HUD-drawing routine, and cached-length/early-exit optimizations in the update loops. Information to track: current wave, health (0-100), how many aliens are alive, cached array lengths, and a before/after FPS measurement.",
      flow: "Each tick -> count living aliens -> if none remain, increment wave and spawn one fresh swarm -> drawHUD() paints score/wave text plus a health bar. Separately: snapshot array lengths once per loop instead of re-reading `.length`, and skip dead/off-screen sprites immediately."
    },
    chainFrom: "l2-s6",
    promptGuide: "Build on your existing `score` and alien grid from Sessions 5-6, don't redeclare them. Ask the AI to (1) write a `checkWaveCompletion()` function that counts alive aliens in YOUR grid and — only at exactly zero — increments a new `wave` variable and calls `spawnSwarm(wave)` once, plus a `drawHUD()` rendering your existing score, the wave number, and a new `health` variable (starting at 100, not previously tracked) as a bar, and (2) refactor your collision sweep so array lengths are cached before looping and dead aliens are skipped before further work.",
    codeReviewGuide: [
      "Does `checkWaveCompletion()` guard against calling `spawnSwarm()` more than once per clear?",
      "Are `aliens.length` and each row's `.length` cached into variables before the loop starts?",
      "Does drawHUD() display YOUR existing score variable, not a newly-declared duplicate?",
      "Socratic Question: If the wave-clear check has no 'already spawned' guard, why does the screen flood with duplicate wave titles? If dead lasers are never pruned, why does the frame rate degrade the longer the player plays?"
    ],
    sampleGeneratedHtml: '// canvas.js — wave/HUD system, reading YOUR existing score and grid\nlet wave = 1;\nlet health = 100;\n\nfunction checkWaveCompletion() {\n  let aliveCount = 0;\n  for (let r = 0; r < aliens.length; r++) {\n    for (let c = 0; c < aliens[r].length; c++) {\n      if (aliens[r][c].alive) aliveCount++;\n    }\n  }\n  if (aliveCount === 0) {\n    wave++;\n    spawnSwarm(wave);\n  }\n}\n\nfunction drawHUD() {\n  ctx.fillStyle = "white";\n  ctx.fillText("Score: " + score, 10, 20);   // YOUR existing score variable\n  ctx.fillText("Wave: " + wave, 10, 35);\n  ctx.fillStyle = "red";\n  ctx.fillRect(10, 45, 100, 10);\n  ctx.fillStyle = "green";\n  ctx.fillRect(10, 45, health, 10);\n}',
    testCasesGuide: "- Destroy every alien in a wave: verify `wave` increments exactly once and a new swarm spawns\n- Verify the health bar visually shrinks as `health` decreases, and score shown matches your existing score variable\n- Run a stress test with many lasers/aliens: verify the frame rate stays stable rather than degrading",
    iterationGuide: "Add a boolean 'wave transition in progress' flag, and record a baseline FPS before/after the optimization pass to make the improvement concrete.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><span style="position:absolute;top:2px;left:4px;font-size:0.5rem;color:#00ffcc;">SCORE: 400</span><span style="position:absolute;top:9px;left:4px;font-size:0.5rem;color:#00ffcc;">WAVE: 2</span><div style="position:absolute;top:2px;right:4px;width:30px;height:4px;background:#ff4444;"></div><div style="position:absolute;top:2px;right:4px;width:22px;height:4px;background:#39ff88;"></div><span style="position:absolute;bottom:4px;left:4px;font-size:0.5rem;color:#ffee55;">60 FPS</span><div style="position:absolute;top:16px;left:10px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:16px;left:30px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:16px;left:50px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:16px;left:70px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:16px;left:90px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:28px;left:10px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:28px;left:30px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:28px;left:50px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;bottom:4px;left:46%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div></div>',
    targetOutcomeCaption: "Wave 2 just spawned with a live HUD (score/wave/health), and the loop holds 60 FPS under a stress test — the same canvas.js file since Session 1."
  },
  "l2-s8": {
    partNum: "Lab 8",
    partTitle: "Request/Response Dissection",
    objectives: [
      "Explain the client-server model and the request/response cycle",
      "Read the anatomy of an HTTP request and response using the DevTools Network tab",
      "Document a real request's URL, method, status code, and JSON payload shape"
    ],
    planSpecs: {
      vision: "No canvas game screen this session — the deliverable is a documented real network exchange: a request line, its status verdict, and a sketch of the JSON it returned.",
      parts: "Parts needed: the DevTools Network tab, open against any real site (or the platform itself). Information to track: the request's URL (protocol/host/path/query), its method, its status code, and the shape of its JSON response.",
      flow: "Open DevTools -> filter to XHR/Fetch -> trigger an action on the page -> click the resulting request row -> read the Headers tab for method/status and the Preview/Response tab for the JSON payload."
    },
    promptGuide: "This lab is a comprehension exercise, not code generation: draft a prompt asking the AI for a plain-English, 8-step walkthrough of what happens between typing a URL and seeing a page — using a real site or endpoint of your own choosing, not a generic example — then audit the answer against what you actually observed in the Network tab.",
    codeReviewGuide: [
      "Does the documented pair name all four fields: URL, method, status code, and payload shape?",
      "Is the captured request an actual API call (XHR/Fetch row) from a site YOU picked, not just the page's own document request?",
      "Socratic Question: The server answered 404 — did the network fail, or did it succeed and say no? What's the difference between 'no connection' and 'connected, but the server refused'?"
    ],
    testCasesGuide: "- Capture one GET request from a real site of your choosing: verify all four fields (URL, method, status, payload shape) are recorded accurately\n- Deliberately request a misspelled path: verify you can distinguish the resulting 404 from a true offline/network failure\n- Verify the payload sketch correctly identifies whether the response is a JSON array or a single object",
    iterationGuide: "Note one thing you'd want to inspect next time (e.g. what a POST body looks like on a real login form) — this sets up Session 10's POST work.",
    sampleGeneratedHtml: 'GET https://api.marsdefense.dev/scores?limit=5\nStatus: 200 OK\nResponse: [{ "player": "cdt_arya", "score": 4200 }, { "player": "cdt_ben", "score": 3900 }]'
  },
  "l2-s9": {
    partNum: "Lab 9",
    partTitle: "Async Leaderboard Fetch (GET)",
    objectives: [
      "Add a fetch function to your canvas.js from Session 7 — Session 8 was comprehension-only, no code to extend there",
      "Write an `async` function that fetches remote leaderboard data",
      "Await both the network request and its JSON parsing",
      "Handle fetch failures with try/catch instead of crashing"
    ],
    planSpecs: {
      vision: "A small TOP SCORES panel shows real player records fetched from a server, drawn into YOUR OWN HUD area from Session 7, and the game never freezes while that data loads.",
      parts: "Parts needed: an async fetch function. Information to track: the leaderboard endpoint URL, the raw network response, and the parsed list of scores.",
      flow: "fetchLeaderboard() runs -> await fetch(url) -> await response.json() to parse it -> display the resulting list (a catch block logs a friendly error if the request fails)."
    },
    chainFrom: "l2-s7",
    promptGuide: "This picks up from Session 7's file (Session 8 had no code of its own to carry forward). Ask the AI for an `async function fetchLeaderboard()` that awaits a `fetch()` call to a leaderboard endpoint, awaits parsing the JSON response, and stores the result somewhere your existing `drawHUD()` from Session 7 can read it — wrap both awaits in a try/catch that logs a friendly error on failure.",
    codeReviewGuide: [
      "Is the function declared with the `async` keyword before it uses any `await`?",
      "Are both the `fetch()` call and the `.json()` parse individually awaited?",
      "Does the fetched data actually connect to your existing HUD/score display from Session 7, not a disconnected new panel?",
      "Socratic Question: If the `await` before `res.json()` is deleted, why does the console print `Promise { <pending> }` instead of the actual score data?"
    ],
    sampleGeneratedHtml: '// canvas.js — async leaderboard fetch, feeding your Session 7 HUD\nlet leaderboard = [];\n\nasync function fetchLeaderboard() {\n  try {\n    const res = await fetch("/api/leaderboard");\n    leaderboard = await res.json();\n    console.log("Loaded leaderboard:", leaderboard);\n  } catch (err) {\n    console.error("Leaderboard fetch failed:", err.message);\n  }\n}\n\nfetchLeaderboard();',
    testCasesGuide: "- Call `fetchLeaderboard()` against a working endpoint: verify it returns a parsed array of score objects\n- Point it at a broken URL: verify the catch block logs an error instead of throwing an uncaught exception\n- Verify the function does not block or freeze the rest of your game loop while waiting",
    iterationGuide: "If real network calls are too slow for classroom pacing, mock the fetch with a short artificial delay to make the async behavior visible without a slow endpoint.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><span style="position:absolute;top:2px;left:4px;font-size:0.5rem;color:#00ffcc;">SCORE: 400</span><div style="position:absolute;top:9px;right:4px;width:60px;padding:2px;border:1px solid #00f2fe;font-size:0.42rem;color:#e0e0ff;background:rgba(0,0,0,0.4);">TOP SCORES<br/>ACE 900<br/>NOVA 750</div><div style="position:absolute;bottom:4px;left:46%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div></div>',
    targetOutcomeCaption: "The leaderboard panel now fills in from an async GET request using await/try-catch, feeding into your existing Session 7 HUD — the lab keeps running smoothly while the data loads."
  },
  "l2-s10": {
    partNum: "Lab 10",
    partTitle: "Score Submission (POST) & Error Handling",
    objectives: [
      "Add score submission alongside last session's fetch — both can coexist in the same file",
      "Compose a JSON payload representing a player's score",
      "Send it via an `async` POST request with the correct headers",
      "Check the response status and handle failures gracefully"
    ],
    planSpecs: {
      vision: "After a run ends, the player's own name and YOUR OWN score variable are sent up to a leaderboard endpoint, with a clear warning shown instead of a freeze if the network fails.",
      parts: "Parts needed: a JSON payload and a POST-sending function. Information to track: the player's name, their score (your own existing variable), the content-type header, and whether the server confirmed success.",
      flow: "Build a {name, score} object -> JSON.stringify() it -> await a POST fetch with that body -> check response.ok -> on failure, catch the error and warn the player instead of freezing."
    },
    chainFrom: "l2-s9",
    promptGuide: "Add this next to `fetchLeaderboard()` from last session — both functions can live in the same file. Ask the AI for an `async function submitScore(player, val)` that POSTs a JSON body `{ player, score: val }` (using YOUR OWN `score` variable from Sessions 6-7 as the value) to a scores endpoint with a `Content-Type: application/json` header, checks `res.ok` and throws if the submission failed, and catches/logs any network error.",
    codeReviewGuide: [
      "Does the fetch options object set `method: \"POST\"` and the correct JSON content-type header?",
      "Is the body passed through `JSON.stringify()` rather than a raw object?",
      "Does the submitted score value actually come from YOUR OWN game's score variable, not a hardcoded test number?",
      "Socratic Question: If the destination URL is unreachable and there's no try/catch, why does the lab freeze silently when the player clicks submit?"
    ],
    sampleGeneratedHtml: '// canvas.js — score submission, alongside fetchLeaderboard() from Session 9\nasync function submitScore(player, val) {\n  try {\n    const res = await fetch("/api/leaderboard", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({ player, score: val })   // val = YOUR OWN score variable\n    });\n    if (!res.ok) {\n      throw new Error("Submission failed: " + res.status);\n    }\n  } catch (err) {\n    console.warn("Could not submit score:", err.message);\n  }\n}',
    testCasesGuide: "- Submit a valid score using YOUR OWN score variable: verify the POST body matches `{ player, score }` and the request succeeds\n- Point the endpoint at an unreachable URL: verify the catch block logs a warning instead of crashing\n- Attempt to submit an oversized or malformed payload: verify the server's error status is surfaced, not swallowed silently",
    iterationGuide: "Discuss with students what a server-side check should reject (e.g. absurd score values) so client-submitted data isn't trusted blindly — Sessions 11-12 pick this up for real.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><span style="position:absolute;top:2px;left:4px;font-size:0.5rem;color:#00ffcc;">SCORE: 400</span><div style="position:absolute;top:9px;right:4px;width:60px;padding:2px;border:1px solid #00f2fe;font-size:0.42rem;color:#e0e0ff;background:rgba(0,0,0,0.4);">TOP SCORES<br/>ACE 900<br/>NOVA 750<br/>YOU 400</div><div style="position:absolute;bottom:4px;left:46%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div></div>',
    targetOutcomeCaption: "submitScore() now POSTs the run's score to the server — the player's own entry appears in the panel, right where Session 9's fetch already draws it."
  },
  "l2-s11": {
    partNum: "Lab 11",
    partTitle: "The Colony Data Vault: SQL Fundamentals",
    objectives: [
      "Design a table that actually matches what YOUR OWN Session 9-10 fetch/submit code sends and expects",
      "Explain why persistent data lives in a database on the server, not in client variables",
      "Design a simple relational table (columns, types, primary key) for colony records",
      "Read and write basic SQL: CREATE TABLE, INSERT, SELECT with WHERE and ORDER BY"
    ],
    planSpecs: {
      vision: "A small scores table exists in the browser-based SQL playground, with column names matching what YOUR OWN submitScore()/fetchLeaderboard() from Sessions 9-10 actually send and expect back, populated with sample rows, queryable and sortable.",
      parts: "Parts needed: a browser-based SQL playground (no local database install at this level). Information to track: the table's columns and types, its primary key, and the query results returned.",
      flow: "CREATE TABLE (your own name/columns) (...) -> INSERT sample rows -> SELECT * -> SELECT with WHERE score > (your own threshold) -> ORDER BY score DESC -> UPDATE one row by its primary key."
    },
    referenceSessions: [{ id: "l2-s10", label: "Your own submitScore() payload from Session 10 — this table's columns should match what it actually sends" }],
    promptGuide: "Look back at the JSON body your own submitScore() (Session 10) actually sends — ask a database engineer AI persona to create a table whose columns match those fields (player name, score, plus one more of your choosing like wave_reached) with an id primary key, insert sample rows, and write a query filtering scores above a threshold of your choosing, sorted highest first.",
    codeReviewGuide: [
      "Does the `CREATE TABLE` statement declare a primary key column?",
      "Do the table's columns actually match the field names YOUR OWN submitScore() sends, not a generic guess?",
      "Does the `WHERE` clause correctly filter (not accidentally invert) the intended condition?",
      "Socratic Question: If an `UPDATE` statement runs with no `WHERE` clause, what happens to every row in the table — and why does the database not warn you first?"
    ],
    testCasesGuide: "- Verify the table's columns match your own Session 10 submitScore() payload fields\n- Run a SELECT with WHERE on your own chosen threshold: verify only qualifying rows return, highest first with ORDER BY\n- Run an `UPDATE ... WHERE id = 1` on a throwaway table: verify only that one row changes",
    iterationGuide: "Add a `created_at TIMESTAMP` column and write a query that orders by newest first, to practice a second sortable field.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;padding:6px;box-sizing:border-box;"><table style="width:100%;font-size:0.5rem;color:#e0e0ff;border-collapse:collapse;"><tbody><tr style="color:#00ffcc;"><td>id</td><td>player</td><td>score</td></tr><tr><td>1</td><td>cdt_arya</td><td>4200</td></tr><tr><td>2</td><td>cdt_ben</td><td>3900</td></tr><tr><td>3</td><td>cdt_cora</td><td>3500</td></tr></tbody></table></div>',
    targetOutcomeCaption: "Your scores table, matching your own Session 10 payload shape, queried and sorted in the browser-based playground."
  },
  "l2-s12": {
    partNum: "Lab 12",
    partTitle: "Defending the Data Vault: Validation & Injection Awareness",
    objectives: [
      "Extend last session's table design with validation rules, not a fresh table",
      "Explain why the server must never trust client input, at the database layer",
      "Describe how passwords are stored safely (hashing, never plaintext) at an awareness level",
      "Recognize SQL injection in a concatenated query and rewrite it as a parameterized query"
    ],
    planSpecs: {
      vision: "A validation rulebook for YOUR OWN table from Session 11 (field -> rule -> rejection message) sits alongside a break-and-fix demonstration: a concatenated query is shown vulnerable to a classic injection string, then rewritten safely with a parameterized placeholder.",
      parts: "Parts needed: the browser-based SQL playground on throwaway tables only. Information to track: the validation rule for each input field in YOUR OWN table, and the before/after query text for the injection demo.",
      flow: "Write the validation rulebook for YOUR OWN table's inserts -> demonstrate a concatenated query breaking under `' OR '1'='1` -> rewrite the same query using a parameterized placeholder -> re-test the hostile input and confirm it now fails harmlessly."
    },
    chainFrom: "l2-s11",
    promptGuide: "Write validation rules for the exact table you designed in Session 11 (shown above), not a generic template. Ask a security-reviewer AI persona to identify why a given concatenated login query is unsafe and rewrite it using a parameterized placeholder — paste the vulnerable query as the input to review.",
    codeReviewGuide: [
      "Does the rulebook cover every field YOUR OWN Session 11 table actually has (type, range, length)?",
      "Does the rewritten query use a real placeholder (`?` or `$1`), not just renamed string concatenation?",
      "Socratic Question: Every line of the negative-quantity purchase ran correctly — so where is the bug? What assumption did the code make about the user?"
    ],
    testCasesGuide: "- Run the concatenated query with the hostile input `' OR '1'='1` on a throwaway version of YOUR table: verify it returns every row (the vulnerability)\n- Run the parameterized version with the same hostile input: verify it returns nothing (the fix)\n- Verify the rulebook rejects an out-of-range value for one of YOUR OWN table's fields with a clear message",
    iterationGuide: "Add one rule the session didn't require (e.g. a username character allowlist) and explain the reasoning in one sentence.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;padding:8px;box-sizing:border-box;color:#e0e0ff;font-size:0.48rem;"><div style="color:#ff4d4d;">✗ REJECTED: score out of range (0–1,000,000)</div><div style="color:#39ff88;margin-top:6px;">✓ Parameterized query — hostile input treated as data</div></div>',
    targetOutcomeCaption: "The validation rulebook rejects an out-of-range value in YOUR OWN table, and the parameterized query neutralizes the injection input."
  },
  "l2-s13": {
    partNum: "Lab 13",
    partTitle: "Graduation Sprint & Level 2 Defense",
    objectives: [
      "Demonstrate mastery across all four modules: data structures & canvas, state & performance, client-server & async, and database fundamentals",
      "Diagnose and patch seeded bugs in YOUR OWN accumulated canvas.js and SQL work",
      "Defend data-structure choices, async flows, and validation rules in a walkthrough",
      "Review the assembled Complete Build below — every session's contribution to one file"
    ],
    planSpecs: {
      vision: "Your own canvas.js — accumulated since Session 1 through steering, lasers, aliens, shields, waves, HUD, and async leaderboard calls — demo-ready alongside your own Session 11-12 SQL work. Scroll down to the Complete Build section to see it all assembled.",
      parts: "Parts needed: nothing new — every prior session's own contribution gets reviewed as part of one accumulated file, not rebuilt from scratch. Information to track: all four modules' worth of concepts at once (data structures, async/web, database/security, performance), all in code YOU already wrote.",
      flow: "Part A: verify your own accumulated canvas.js and SQL work still function end-to-end. Part B: walk the tutor through a systems-level defense of YOUR OWN code. Part C: patch two timed, seeded bugs (one async/array, one SQL) under review."
    },
    chainFrom: "l2-s10",
    promptGuide: "This isn't a rebuild — it's a review pass on the actual canvas.js you've been extending since Session 1 (shown above) and your own Session 11-12 SQL work. Ask the AI to help you trace through your own accumulated file end-to-end (canvas init through async leaderboard calls) and flag anything that looks like dead code, a leftover debug log, or a concept you can't yet explain in your own words.",
    codeReviewGuide: [
      "Can every concept (rendering, input, collision, API, database) be pointed to INSIDE YOUR OWN FILE and explained independently?",
      "Are there any leftover console.log debug statements or dead variables from earlier sessions still in your accumulated file?",
      "Socratic Question: If asked 'why does this collision check use `&&` instead of `||`,' can you explain the AABB logic from memory, not just recite what the AI generated? Can you do the same for why your Session 12 query uses a placeholder instead of concatenation?"
    ],
    testCasesGuide: "- Run your OWN accumulated canvas.js end-to-end: sprite array moves, fires, aliens march and die, HUD updates, leaderboard fetch/submit succeeds\n- Run your OWN Session 11-12 SQL queries: verify correctly filtered rows and a working parameterized fix\n- Patch the seeded diagnostic bug in an asynchronous handler or array-splice statement within the time limit\n- Patch the seeded SQL bug (wrong WHERE logic or an injection-vulnerable concatenation) within the time limit\n- Defend at least 2 code design choices under tutor questioning, using YOUR OWN code as the reference",
    iterationGuide: "Write down which concept from Level 2 felt least solid, to flag as a review topic before starting Level 3's guided project.",
    targetOutcomeHtml: '<div style="position:relative;width:100%;height:86px;background:#0a0e1a;border:2px solid #7f5af0;border-radius:3px;overflow:hidden;font-family:monospace;"><span style="position:absolute;top:2px;left:4px;font-size:0.5rem;color:#00ffcc;">SCORE: 650</span><span style="position:absolute;top:9px;left:4px;font-size:0.5rem;color:#00ffcc;">WAVE: 3</span><div style="position:absolute;top:9px;right:4px;width:60px;padding:2px;border:1px solid #00f2fe;font-size:0.42rem;color:#e0e0ff;background:rgba(0,0,0,0.4);">TOP SCORES<br/>ACE 900<br/>YOU 650</div><div style="position:absolute;top:16px;left:10px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:16px;left:30px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;top:28px;left:10px;width:9px;height:7px;background:#39ff88;"></div><div style="position:absolute;bottom:16px;left:47%;width:2px;height:7px;background:#ffee55;"></div><div style="position:absolute;bottom:4px;left:46%;width:14px;height:10px;background:#ff4d4d;border-radius:2px;"></div></div>',
    targetOutcomeCaption: "The final assessment: your own accumulated canvas.js and SQL work from every Level 2 session, verified and ready for the graduation defense.",
    finalAssembly: {
      title: "🏁 Your Complete Level 2 Build — Assembled",
      description: "Your own canvas.js, accumulated from every session since Session 1, alongside your own Session 11-12 SQL work — this is the actual code you built, session by session. Run it on your own machine to play it; the platform only displays it here for review.",
      blocks: [
        { label: "canvas.js (this session, carrying every session since 1)", sessionId: "l2-s13" },
        { label: "SQL schema & queries (from Session 11)", sessionId: "l2-s11" },
        { label: "Validation & injection fixes (from Session 12)", sessionId: "l2-s12" }
      ],
      chainCheckIds: ["l2-s1", "l2-s2", "l2-s3", "l2-s4", "l2-s5", "l2-s6", "l2-s7", "l2-s9", "l2-s10", "l2-s11", "l2-s12"]
    }
  },
  "l3-s1": {
    partNum: "Part 1",
    partTitle: "Lifecycle Mapping & the Project Charter",
    objectives: [
      "Map the software lifecycle phases in order",
      "Reverse-engineer the finished Hacker Arena demo into a component list",
      "Draft and harden a one-page Project Charter"
    ],
    planSpecs: {
      vision: "A one-page Project Charter for the Hacker Arena: what's being built, for whom, and what 'done' means — the first artifact every later session gets checked against.",
      parts: "Parts needed: a lifecycle phase list (requirements, design, build, test, deploy, iterate), a first-guess component list (pages, API endpoints, tables) from reverse-engineering the demo, and the Project Charter itself.",
      flow: "Play the finished demo as a user -> open DevTools and reverse-engineer its moving parts -> draft the Project Charter -> prompt the AI to critique it for vagueness -> tighten it."
    },
    promptGuide: "Prompt the AI IDE to critique your Project Charter draft for vagueness, hidden assumptions, and anything that isn't yet testable — then revise based on its findings.",
    codeReviewGuide: [
      "Lifecycle Ordering: Requirements -> Design -> Build -> Test -> Deploy -> Iterate (accept \"Test\" woven into \"Build\" if the 5-Step loop explanation is given).",
      "Demo Deconstruction: does your component list include a login/register page, an arena/shop page, endpoints like POST /signup and POST /purchase, and tables like players/hacking_tools/inventories?",
      "Socratic Question: The code in the war story worked perfectly — why did the project still fail? Which phase was skipped?"
    ],
    testCasesGuide: "- Confirm the lifecycle phases are listed in the correct order\n- Confirm the component list names at least 2 pages, 3 endpoints, and 2 tables\n- Confirm the Project Charter states a concrete definition of 'done'",
    iterationGuide: "Revise the Charter after the AI critique until every sentence in it is something a tester could actually verify."
  },
  "l3-s2": {
    partNum: "Part 2",
    partTitle: "The Hacker Arena PRD",
    objectives: [
      "Turn a vague product idea into testable user stories",
      "Prioritize scope with MoSCoW",
      "Produce the PRD every later session is audited against"
    ],
    planSpecs: {
      vision: "The Hacker Arena PRD: 6-10 user stories with acceptance criteria, MoSCoW priorities, and an explicit out-of-scope list — the single source of truth for the rest of Level 3.",
      parts: "Parts needed: a goal statement, a users list, 6-10 user stories, an acceptance-criteria line per Must story, and an out-of-scope list.",
      flow: "Extract requirements from the 'ambiguous client' roleplay -> draft the PRD skeleton -> mark each story Must/Should/Could -> prompt the AI to attack the PRD for untestable criteria and missing failure cases -> revise."
    },
    promptGuide: "Prompt the AI to find untestable criteria, hidden assumptions, and missing failure cases in your PRD draft, then revise based on its findings.",
    codeReviewGuide: [
      "Story Rewrite: does 'cool shopping' become something like 'As a player, I want to buy a hacking tool with credits so it appears in my inventory,' with criteria like 'purchase rejected with message if credits < cost'?",
      "MoSCoW Cut: are register/login/list-tools/purchase Must, with a defensible Should/Could split for the rest?",
      "Socratic Question: How would a tester prove 'fast and secure' is done? If it can't be proven done, what is it?"
    ],
    testCasesGuide: "- Confirm every Must story has at least one testable acceptance criterion (a number or an observable behavior, not an adjective)\n- Confirm the PRD has an explicit out-of-scope list\n- Confirm at least 6 user stories total",
    iterationGuide: "Reject any acceptance criterion that's still an adjective without a number or behavior attached, and rewrite it."
  },
  "l3-s3": {
    partNum: "Part 3",
    partTitle: "The Arena Blueprint",
    objectives: [
      "Draw the three-tier architecture and trace PRD stories through it",
      "Design the players/hacking_tools/inventories schema",
      "Draft the API contract before any code exists"
    ],
    planSpecs: {
      vision: "The Arena Blueprint: a component diagram (client -> Express -> MySQL), the players/hacking_tools/inventories schema with keys and constraints, and an API contract mapping every PRD Must-story to an endpoint.",
      parts: "Parts needed: a component diagram, table definitions for players/hacking_tools/inventories with primary and foreign keys, and an endpoint list (method + path + status codes) for every PRD Must-story.",
      flow: "Sketch the component diagram (what talks to what, and what's forbidden) -> design the schema -> map every Must-story to an endpoint -> prompt the AI to generate the SQL schema -> audit it against the blueprint's keys, constraints, and types."
    },
    promptGuide: "Prompt the AI to generate the SQL schema for players/hacking_tools/inventories from your blueprint, then audit every key, constraint, and type against what you designed.",
    codeReviewGuide: [
      "Does `inventories` declare foreign keys to both `players` and `hacking_tools` with `ON DELETE CASCADE` on the player reference?",
      "Does the API contract give every endpoint both a success AND a failure status code (not just the happy path)?",
      "Socratic Question: Why does the database still list tools for a player who no longer exists if the foreign key constraint is missing?"
    ],
    testCasesGuide: "- Insert a player, a tool, and an inventory row: verify all three insert successfully\n- Delete the player: verify their inventory row is automatically removed\n- Verify the API contract lists at least 5 endpoints, each with a failure status code",
    iterationGuide: "Confirm every foreign key column's type exactly matches its referenced primary key's type before running the schema."
  },
  "l3-s4": {
    partNum: "Part 4",
    partTitle: "Base Camp Setup",
    objectives: [
      "Initialize the repo and connect it to GitHub",
      "Structure the workspace and protect secrets with .gitignore + .env",
      "Stand up local MySQL and apply the Session 3 schema"
    ],
    planSpecs: {
      vision: "A clean, pushed GitHub repo with a working local MySQL database already carrying the Session 3 schema, and zero secrets anywhere in its history.",
      parts: "Parts needed: a folder structure (frontend/, server/, db/), a .gitignore list, a .env key template (DB_HOST, DB_USER, DB_PASS), and the local MySQL database with the schema applied.",
      flow: "Plan the folder structure and what gets committed vs. ignored -> git init -> initial commit -> create and push to GitHub -> install/start MySQL via Servbay -> create the database -> apply the Session 3 schema."
    },
    promptGuide: "No AI generation this session — draft the exact git command sequence yourself, then verify on GitHub that .env is absent and the commit history is clean.",
    codeReviewGuide: [
      "Does `.gitignore` include `.env` and `node_modules/` before the first commit?",
      "Does the GitHub repo's commit history show no trace of any secret value, even in an early commit?",
      "Socratic Question: The key is gone from the file — is it gone from the repo? What must happen once a real secret is pushed?"
    ],
    testCasesGuide: "- Run `git status` after adding secrets: verify `.env` shows as ignored, not staged\n- Verify the GitHub repo is reachable and the latest commit matches local\n- Verify the local MySQL database has all three Session 3 tables",
    iterationGuide: "If a secret was ever committed by mistake, treat it as compromised — rotate it, don't just delete the line in a new commit."
  },
  "l3-s5": {
    partNum: "Part 5",
    partTitle: "The Login Gate",
    objectives: [
      "Convert a PRD story into a feature spec",
      "Build register/login: forms -> POST routes -> bcrypt hashing -> MySQL",
      "Commit the feature with a PRD-linked message"
    ],
    planSpecs: {
      vision: "A working register/login flow: a signup form posts to a route that hashes the password with bcrypt before it ever reaches the database, and login compares hashes, never plaintext.",
      parts: "Parts needed: a feature spec (story reference, files affected, I/O, constraints, out-of-scope), a POST /signup route, a POST /login route, and a bcrypt hashing step in between.",
      flow: "Write the feature spec for register + login from the PRD's Must stories, including failure behaviors (duplicate username, short password) -> run the spec through the AI IDE -> audit output against spec/schema/contract -> commit with a PRD-linked message."
    },
    promptGuide: "Give the AI IDE your feature spec, the players schema, and the API contract, and prompt it to implement the /signup and /login routes exactly to spec, including the failure behaviors.",
    codeReviewGuide: [
      "Is the password length check performed before hashing, not after?",
      "Is `bcrypt.hash()` used instead of storing `password` directly?",
      "Socratic Question: If attackers dump the table tonight, what do they have — and whose fault is it?"
    ],
    testCasesGuide: "- Submit a 5-character password: verify a 400 response and no row is inserted\n- Submit a valid password: verify the stored value is a bcrypt hash, not the raw string\n- Verify no server log line ever prints the raw password",
    iterationGuide: "Grep your own server logs for the literal password string after a test signup to confirm it never appears anywhere."
  },
  "l3-s6": {
    partNum: "Part 6",
    partTitle: "The Tool Shop API",
    objectives: [
      "Review code by diff, not by full file",
      "Build GET /tools and GET /inventory (JOIN query)",
      "Apply the review checklist and annotate at least three findings"
    ],
    planSpecs: {
      vision: "GET /tools and GET /inventory endpoints, the second built on a 3-table JOIN, reviewed the way a real Pull Request gets reviewed: by diff, with annotated findings, not a full re-read.",
      parts: "Parts needed: a feature spec for both endpoints, the JOIN query across inventories/players/hacking_tools, a commit synced into the platform's diff view, and at least three annotated review findings.",
      flow: "Spec GET /tools and GET /inventory per the API contract -> implement via the AI IDE -> commit -> sync into the platform -> review the diff line-by-line with the checklist, annotating at least three findings."
    },
    promptGuide: "Prompt the AI IDE to implement GET /tools and GET /inventory to spec, then use the platform's 'Sync Latest Code' diff view (not the full file) to review what it actually changed.",
    codeReviewGuide: [
      "Does the query use `INNER JOIN` (not `LEFT JOIN`) so it only returns rows with a real match on both sides?",
      "Is the WHERE clause filtering by the correct player id using a parameterized query, not string concatenation?",
      "Socratic Question: The feature works — so why is a diff line the spec never asked for still dangerous to approve?"
    ],
    testCasesGuide: "- Query a player with 2 owned tools: verify exactly 2 rows return\n- Query a player with zero owned tools: verify an empty array, not an error\n- Confirm your diff review has at least three annotated findings, including at least one security check",
    iterationGuide: "If `INNER JOIN` were swapped for `LEFT JOIN`, confirm you can explain exactly which rows would incorrectly start appearing."
  },
  "l3-s7": {
    partNum: "Part 7",
    partTitle: "The Zero-Trust Server",
    objectives: [
      "Write a test plan before building",
      "Build server-side validation guards returning correct 400/401/404",
      "Execute the plan and log pass/fail results"
    ],
    planSpecs: {
      vision: "A validation-guarded POST /purchase route where every hostile or malformed input is rejected with the correct status code — proven by a test plan written and executed before the guards existed.",
      parts: "Parts needed: a 10+ row test-case table (input -> expected result -> actual result -> pass/fail), the validation guards themselves, and a completed test run with every row logged.",
      flow: "Write the validation spec and 10+ test cases for POST /purchase before any implementation, including hostile cases -> implement validation guards via the AI IDE -> audit -> execute the full test plan against the running server."
    },
    promptGuide: "Give the AI IDE your test plan and prompt it to implement validation guards that make every row pass — not the other way around.",
    codeReviewGuide: [
      "Does the validation run and `return` immediately on failure, before any query executes?",
      "Is `Number.isInteger()` used rather than a loose truthy check that would accept \"5\" or -1?",
      "Socratic Question: Every line executed correctly — where is the bug? What assumption did the code make about the client?"
    ],
    testCasesGuide: "- Submit quantity -5: verify 400 and no database write occurs\n- Submit quantity \"abc\": verify 400 rather than a server crash\n- Confirm your 10+ case test-plan table shows every row passing",
    iterationGuide: "List every numeric or string parameter this route accepts and confirm each one has its own validation check, not just the one seeded in the tutor manual."
  },
  "l3-s8": {
    partNum: "Part 8",
    partTitle: "The Atomic Purchase",
    objectives: [
      "Apply the debugging protocol: reproduce -> isolate -> hypothesize -> fix -> re-test -> log",
      "Implement the purchase as a database transaction (BEGIN/COMMIT/ROLLBACK)",
      "Maintain an iteration log tying bugs to root causes and fix commits"
    ],
    planSpecs: {
      vision: "A transaction-wrapped purchase route where credits and inventory either both update or neither does — proven by deliberately crashing it mid-transaction and watching the rollback hold.",
      parts: "Parts needed: a transaction flowchart with rollback triggers, the BEGIN/COMMIT/ROLLBACK-wrapped route, two debugged seeded bugs, and an iteration log entry per bug.",
      flow: "Draw the purchase flow with rollback triggers -> implement the transactional purchase via the AI IDE -> the tutor activates two seeded bugs -> run the full debugging protocol on both -> log root cause and fix commit for each."
    },
    promptGuide: "Prompt the AI IDE to wrap the credit check, deduction, and inventory insert inside BEGIN/COMMIT with rollback on any error, and to always release the pooled client in a finally block.",
    codeReviewGuide: [
      "Does the route check the player's balance before deducting, and throw if insufficient?",
      "Is `client.release()` inside a `finally` block so it always runs, on both success and failure paths?",
      "Socratic Question: Why did the player lose credits and get nothing? How does BEGIN/COMMIT make this impossible?"
    ],
    testCasesGuide: "- Purchase with sufficient credits: verify credits deduct and the item appears in inventory in the same commit\n- Attempt a purchase with insufficient credits: verify the transaction rolls back and no partial deduction occurs\n- Force an error mid-transaction: verify credits are unchanged afterward",
    iterationGuide: "Deliberately break the insert step mid-test to confirm the rollback actually restores the original credit balance, not just that it doesn't crash."
  },
  "l3-s9": {
    partNum: "Part 9",
    partTitle: "Branch, PR & Merge",
    objectives: [
      "Develop a feature on a branch and open a Pull Request",
      "Resolve a merge conflict deliberately",
      "Review a PR diff with the Session 6 checklist"
    ],
    planSpecs: {
      vision: "A Should-priority PRD feature built on its own branch, opened as a real GitHub Pull Request, reviewed with the Session 6 checklist, and merged after resolving a deliberately triggered conflict.",
      parts: "Parts needed: a feature branch, a feature spec for the chosen Should-story, a pushed PR with a real description, and a resolved merge conflict.",
      flow: "Pick a Should-priority PRD feature and spec it -> build it on the branch via the AI IDE -> push -> open the PR -> review your own diff with the checklist -> resolve the tutor's triggered merge conflict -> merge."
    },
    promptGuide: "Ask the AI to explain, line by line, what a specific merge conflict's <<<<<<< HEAD / ======= / >>>>>>> branch-name markers each represent, and draft the combined resolution before applying it yourself.",
    codeReviewGuide: [
      "Are all three conflict marker lines fully removed from the resolved file (not just one side picked blindly)?",
      "Does the PR description state what changed, why, and how it was tested?",
      "Socratic Question: Why did Git refuse to decide the conflict for you — and what would it mean if it had?"
    ],
    testCasesGuide: "- Create a deliberate conflict between two branches on the same route file: verify git flags it as unmergeable automatically\n- Resolve it and run the server: verify no syntax errors from leftover markers\n- Verify `git log` shows a clean merge commit afterward",
    iterationGuide: "Practice a conflict where both sides added genuinely different, needed logic, forcing a real manual merge rather than a pick-one-side resolution."
  },
  "l3-s10": {
    partNum: "Part 10",
    partTitle: "The Integration Sprint",
    objectives: [
      "Verify every PRD Must-story end-to-end",
      "Resolve integration bugs between components",
      "Enforce per-user data isolation with a cross-user attack drill"
    ],
    planSpecs: {
      vision: "Every PRD Must-story working end-to-end — frontend form through to UI update — with isolation proven by a logged attack drill where player A can never touch player B's data.",
      parts: "Parts needed: the full data-flow checklist (Form -> Route -> Validation -> Transaction -> DB Write -> Response -> UI), fixes for any integration gaps found, and a cross-user attack drill log.",
      flow: "Outline the full data-flow checklist for the purchase story -> run every Must-story end-to-end against it, fixing gaps -> log in as player A and attempt to read/write player B's inventory via DevTools -> confirm every attempt fails with 401/403."
    },
    promptGuide: "Ask the AI to help trace a specific end-to-end flow (e.g. signup -> login -> purchase) across your frontend, routes, and database, flagging any layer where the expected data isn't reaching the next one.",
    codeReviewGuide: [
      "Does every layer in the checklist actually get exercised by a single real user action, not tested in isolation only?",
      "Does the inventory route take the player id from the authenticated session, never from the request body or query string?",
      "Socratic Question: Who controls the request body? Then who controls whose inventory this endpoint reads?"
    ],
    testCasesGuide: "- Run a full signup -> login -> purchase flow live: verify each step succeeds and the final inventory reflects the purchase\n- Attempt a cross-user read/write via DevTools: verify every attempt returns 401/403\n- Verify no TODO stubs or mock data remain from earlier sessions",
    iterationGuide: "Write a short QA log documenting which integration gap took longest to find, since that's usually the most useful lesson to carry forward."
  },
  "l3-s11": {
    partNum: "Part 11",
    partTitle: "Cloud Deployment",
    objectives: [
      "Understand hosting architectures",
      "Deploy the backend and database to a cloud platform",
      "Re-run the Session 7 test plan against the live URL"
    ],
    planSpecs: {
      vision: "The Hacker Arena live on a real URL, with production credentials bound only in the host's dashboard, and the Session 7 test plan re-run and passing against it.",
      parts: "Parts needed: a deployment config (declaring the service and its env vars, no secret literals inside it), production DB credentials set on the host dashboard, and the re-executed Session 7 test plan.",
      flow: "Map production connections and draft the env-var list and a rollback plan -> prompt the AI to generate the deployment config -> deploy -> re-run the Session 7 test plan against the live URL."
    },
    promptGuide: "Prompt the AI to generate a deployment config file declaring the web service and its required environment variables, without hardcoding any secret values into the file itself.",
    codeReviewGuide: [
      "Does the deployment config reference environment variable names only, with actual secret values set in the host's dashboard, not the file?",
      "Is the production database URL distinct from any local development URL?",
      "Socratic Question: It works on your machine — why not in production? Which environment is missing what?"
    ],
    testCasesGuide: "- Deploy with a correct DATABASE_URL: verify the live site loads data successfully\n- Temporarily blank the DATABASE_URL on the host: verify the live site throws a connection error rather than silently failing\n- Verify no secret values are visible in the deployment config file itself",
    iterationGuide: "After first deploy, rotate one credential and confirm updating only the host's dashboard value is enough to keep the app working."
  },
  "l3-s12": {
    partNum: "Part 12",
    partTitle: "Hardening & the Release Sweep",
    objectives: [
      "Read production logs to locate failing lines and inputs",
      "Guard resources under load with pooling and guaranteed client release",
      "Run a release-readiness sweep against every PRD Must acceptance criterion"
    ],
    planSpecs: {
      vision: "A production system that survives 100 concurrent requests without hanging, with every connection guaranteed released, and every PRD Must acceptance criterion checked and signed off.",
      parts: "Parts needed: structured logging, connection-pool release discipline (finally blocks everywhere a client is checked out), a load test at 100 concurrent requests, and the completed release checklist.",
      flow: "Plan load thresholds and assemble the release checklist from the PRD's acceptance criteria -> prompt the AI to add pooling and structured logging -> execute the full release sweep against the deployed system, logging every criterion pass/fail."
    },
    promptGuide: "Prompt the AI for a route that checks out a pooled database client, runs a query inside a try/catch, and always releases the client in a finally block so a failed request doesn't leak a connection.",
    codeReviewGuide: [
      "Is `client.release()` placed inside a `finally` block rather than only after a successful query?",
      "Does every PRD Must acceptance criterion have a pass/fail entry in the release checklist, not just the ones that were easy to check?",
      "Socratic Question: If `client.release()` is missing, why does the server start refusing all requests after only a handful of page reloads?"
    ],
    testCasesGuide: "- Send 100 concurrent requests to a route with the release fix: verify the server stays responsive throughout\n- Temporarily remove the `finally` release call and repeat the test: verify the server eventually hangs, reproducing the bug\n- Confirm the release checklist has a pass/fail entry for every PRD Must story",
    iterationGuide: "Log the pool's active connection count before and after a burst of requests to confirm it returns to baseline once requests complete."
  },
  "l3-s13": {
    partNum: "Part 13",
    partTitle: "The Process Defense",
    objectives: [
      "Present the project through its process artifacts",
      "Defend design and security decisions in a hostile review",
      "Diagnose and patch a live fault under time pressure"
    ],
    planSpecs: {
      vision: "One PRD story traced live, end to end, through every artifact it produced — its user story, its design entries, its feature-spec prompt, its diff review, its test-plan rows, its commit/PR, and its behavior in the deployed build.",
      parts: "Parts needed: the full artifact trail (PRD, blueprints, commit history, diffs/PRs, test logs, deployed URL) and readiness to defend any design or security choice under direct questioning.",
      flow: "Part A: present one PRD story traced through every artifact -> Part B: defend design and security decisions under hostile questioning -> Part C: diagnose and patch a live seeded fault under time pressure."
    },
    promptGuide: "No AI generation this session — prepare to walk through your full codebase without notes: schema, auth, validation, transactions, and diffs, explaining why each decision was made.",
    codeReviewGuide: [
      "Can you trace one PRD story from its user story all the way to its live behavior without notes?",
      "Can you explain why the purchase route uses a transaction, using a concrete failure scenario?",
      "Socratic Question: What did you reject from the AI, and why?"
    ],
    testCasesGuide: "- Demonstrate signup, login, and a tool purchase live end-to-end\n- Patch the tutor's seeded runtime fault within the time limit\n- Defend at least 2 design or security choices under direct questioning",
    iterationGuide: "Write down which question from the defense you answered least confidently, to revisit before Level 4."
  },
  "l3-s14": {
    partNum: "Part 14",
    partTitle: "Retrospective & Level 4 Planning",
    objectives: [
      "Run a Keep/Problem/Try retrospective on the whole project",
      "Connect process skills to the engineering roles that own them",
      "Set concrete goals for Level 4"
    ],
    planSpecs: {
      vision: "A completed Keep/Problem/Try retrospective on the whole Level 3 project, plus 3 concrete goals for Level 4's independent capstone.",
      parts: "Parts needed: the full artifact trail reviewed as a portfolio piece, a Keep/Problem/Try board, and 3 written Level 4 goals.",
      flow: "Review the full artifact trail — Prompt Journal versions, commits, PRs, test logs — as a portfolio piece -> run the Keep/Problem/Try retrospective -> write 3 concrete Level 4 goals."
    },
    promptGuide: "No AI prompt this session — instead, review your own Prompt Journal entries across the whole level and write a short reflection on how your process changed over time.",
    codeReviewGuide: [
      "Looking back at your Session 1 prompts vs. your Session 9 prompts, what's the clearest difference in specificity?",
      "Which process step felt like bureaucracy — and did it catch anything?",
      "Socratic Question: What did the AI get wrong that your process caught?"
    ],
    testCasesGuide: "- Confirm you can locate and re-read at least one artifact from each module of Level 3\n- Confirm you've written down 3 specific, concrete Level 4 goals (not vague aspirations)",
    iterationGuide: "Revisit this reflection at the start of Level 4 to check whether your stated goals actually shaped what you chose to focus on."
  },

  // ================= LEVEL 4 =================
  "l4-s1": {
    partNum: "Part 1",
    partTitle: "Your Game's PRD & Scope Contract",
    objectives: [
      "Pitch your own game concept and negotiate a buildable scope contract",
      "Write your capstone PRD independently",
      "Translate your creative ideas into testable constraints"
    ],
    planSpecs: {
      vision: "Your own game's PRD: goal, core loop, 8-12 user stories with acceptance criteria, MoSCoW priorities, and an explicit out-of-scope list — negotiated into a scope contract the teacher signs off.",
      parts: "Parts needed: your one-core-loop pitch, 8-12 user stories with acceptance criteria, a MoSCoW priority pass, an out-of-scope list, and the final signed scope contract.",
      flow: "Pitch your game in two minutes -> draft the PRD solo -> prompt the AI to attack it for untestable criteria and hidden scope monsters -> negotiate the final scope contract with the tutor."
    },
    promptGuide: "Prompt the AI to attack your PRD draft for untestable criteria, hidden scope monsters (like 'multiplayer' or 'a level editor'), and missing failure cases, then revise before negotiating your scope contract.",
    codeReviewGuide: [
      "Does the Must line fit 5 sprints — one core mechanic, one progression/scoring system, one data feature, and a UI shell?",
      "Has every vague constraint been rewritten as a number + behavior (e.g. 'responsive controls' -> 'input-to-movement under 50ms')?",
      "Socratic Question: How does a computer evaluate 'feels fast'? What number is hiding inside that sentence?"
    ],
    testCasesGuide: "- Confirm your PRD has 8-12 user stories with testable acceptance criteria\n- Confirm your Must line has been signed off by the tutor as fitting 5 sprints\n- Confirm your out-of-scope list explicitly names at least 2 cut features",
    iterationGuide: "If your Must line still doesn't fit 5 sprints after tutor review, cut features from Must to Should — don't quietly plan to build them anyway."
  },
  "l4-s2": {
    partNum: "Part 2",
    partTitle: "Your Architecture & Sprint Map",
    objectives: [
      "Design your game's architecture independently",
      "Choose and justify your tech stack",
      "Break your Must-scope into a 5-sprint milestone plan"
    ],
    planSpecs: {
      vision: "Your own architecture blueprint pack: a component diagram, a schema (if a backend is in scope), an API contract, a 5-sprint map, and at least 2 ADRs justifying your stack choices.",
      parts: "Parts needed: a component diagram (game loop, renderer, input, state, persistence), a schema and API contract if a backend is in scope, a 5-sprint map with a demo target per sprint, and 2 Architectural Decision Records.",
      flow: "Map your own game's player journey screen-by-screen -> draw the component diagram and design the schema/contract -> slot every Must story into one of 5 sprints -> prompt the AI to generate a Mermaid diagram and critique the sprint plan for dependency errors."
    },
    promptGuide: "Prompt the AI to generate a Mermaid architecture diagram from your component list and critique your sprint plan for dependency errors (e.g. a leaderboard sprint scheduled before the accounts sprint).",
    codeReviewGuide: [
      "Does the sprint map order risky/dependent components before the features that need them?",
      "Does each ADR contain Status, Context, Decision, and Consequences — with a real cost named in Consequences, not just benefits?",
      "Socratic Question: Sprint 2 needs data that doesn't exist until Sprint 4 — what happens in week 2?"
    ],
    testCasesGuide: "- Confirm the component diagram names every major system (loop, renderer, input, state, persistence)\n- Confirm every Must story from your PRD is slotted into one of the 5 sprints\n- Confirm at least 2 ADRs each contain Status/Context/Decision/Consequences",
    iterationGuide: "If the AI flags a dependency error in your sprint order, reorder the sprints rather than just noting the risk and moving on."
  },
  "l4-s3": {
    partNum: "Part 3",
    partTitle: "Foundation: Repo, Vitest & TDD",
    objectives: [
      "Stand up your capstone repo and CI-ready workspace independently",
      "Set up Vitest and write your first test suites",
      "Apply the Red -> Green -> Refactor TDD cycle"
    ],
    planSpecs: {
      vision: "Your capstone repo standing on its own: workspace structure, Vitest installed, and at least one pure-logic utility built test-first (Red, then Green, then refactored).",
      parts: "Parts needed: the repo/workspace skeleton, a Vitest configuration, a list of your game's pure-logic functions with boundary-value test cases for the two most critical, and one utility built through the full TDD cycle.",
      flow: "List your game's pure-logic functions and draft boundary-value test cases for the two most critical -> initialize the repo/workspace/Vitest -> write the failing test first -> prompt the AI for the implementation -> verify Red -> Green -> refactor."
    },
    promptGuide: "Write your test first, then prompt the AI IDE for an implementation that makes it pass — never the other way around.",
    codeReviewGuide: [
      "Did the test actually fail (Red) before the implementation existed, proving it tests something real?",
      "Do the assertions use correct matchers (toBe, toThrow) rather than loose truthy checks?",
      "Socratic Question: Why did the suite pass when the function was wrong? How do we test that our tests are actually testing?"
    ],
    testCasesGuide: "- Run the test suite before the implementation exists: confirm it fails (Red)\n- Run it after: confirm it passes (Green)\n- Confirm the suite includes one boundary case and one expected throw",
    iterationGuide: "If a test passes even against an intentionally broken implementation, the test itself is broken — fix the test before trusting it again."
  },
  "l4-s4": {
    partNum: "Part 4",
    partTitle: "Sprint 1: Core Mechanic",
    objectives: [
      "Ship your game's core loop end-to-end",
      "Drive the sprint without tutor prompting",
      "Keep TDD discipline on the mechanic's pure logic"
    ],
    planSpecs: {
      vision: "Your game's core mechanic — the thing that makes it a game — playable end-to-end and surviving the tutor's hostile key-mash QA.",
      parts: "Parts needed: the sprint goal and feature spec from your milestone plan, the mechanic's pure-logic tests written first, the AI-generated implementation and rendering shell, and a story-linked commit/PR.",
      flow: "State the sprint goal and write the feature spec -> TDD the mechanic's logic -> prompt the AI IDE for implementation and rendering -> audit diffs against the spec -> commit/PR and demo to the tutor's 'hostile publisher' persona."
    },
    promptGuide: "Prompt the AI IDE to implement the rendering and glue code around your already-tested pure-logic mechanic — keep the tested logic separate from what the AI generates.",
    codeReviewGuide: [
      "Can the mechanic's core logic be unit-tested without opening a browser?",
      "Does the demo survive multiple keys held at once and rapid restarts?",
      "Socratic Question: Why can't we test the jump arc without opening a browser? What would separating logic from rendering buy us?"
    ],
    testCasesGuide: "- Demo the mechanic live: verify it survives the tutor's key-mash QA (multiple keys, spam restart, window resize)\n- Confirm the mechanic's pure logic has passing unit tests\n- Confirm the Sprint 1 log documents what shipped and what was cut",
    iterationGuide: "If the sprint goal was missed, log the cut openly in the Sprint 1 log — don't ship it broken to look finished."
  },
  "l4-s5": {
    partNum: "Part 5",
    partTitle: "Sprint 2: State & Reliability",
    objectives: [
      "Centralize your game state and implement clean transitions",
      "Apply rollback and defensive guards on every transition",
      "(Stretch) add WebSockets only if your concept needs them"
    ],
    planSpecs: {
      vision: "A single source of truth for your game's state, with clean menu -> playing -> paused -> game-over transitions and at least one operation that rolls back cleanly on failure.",
      parts: "Parts needed: the centralized state store, drawn transition diagram, defensive guards on every transition, and one optimistic-update operation with a working rollback.",
      flow: "Triage Sprint 1's issue list and spec the state machine with a transition diagram -> implement the state store, auditing that no component mutates state directly -> add rollback for any operation that can fail -> demo pause/resume/restart under hostile input."
    },
    promptGuide: "Prompt the AI IDE to implement the state store and transitions from your diagram, then have it add an optimistic update with rollback for one action that can fail (e.g. a save).",
    codeReviewGuide: [
      "Does every state mutation go through the central store, with no component reaching in and changing it directly?",
      "Does the rollback actually restore the old state and notify the player, not just silently fail?",
      "Socratic Question: Why did the newer state disappear? How do we reject updates that represent older state?"
    ],
    testCasesGuide: "- Demo pause/resume/restart live under hostile input (rapid key-mashing): verify no broken transitions\n- Trigger a failed optimistic update: verify the UI rolls back and shows a notification\n- Confirm no component mutates state outside the central store",
    iterationGuide: "If two state updates can race, confirm your fix rejects the OLDER one specifically, not just 'the second one that arrives.'"
  },
  "l4-s6": {
    partNum: "Part 6",
    partTitle: "Sprint 3: Data Features",
    objectives: [
      "Ship your PRD's data features: accounts, saves, and/or a leaderboard",
      "Re-apply Level 3 backend discipline unassisted",
      "Run the cross-user attack drill against your own endpoints"
    ],
    planSpecs: {
      vision: "Your game's data features — accounts, saves, and/or leaderboard per your PRD's Must line — built with validated, parameterized, per-user-isolated endpoints (or, for local-only capstones, a versioned localStorage save schema with corrupted-save handling).",
      parts: "Parts needed: the data-feature spec with hostile test cases written first, the implemented routes and DB (or localStorage) logic, and a logged cross-user attack drill.",
      flow: "Spec the data features against your schema and API contract, writing hostile test cases first -> implement via the AI IDE, auditing every query for placeholders and every multi-step write for a transaction -> log in as player A and attempt to read/write player B's data — every attempt must fail."
    },
    promptGuide: "Prompt the AI IDE to implement your data-feature routes using parameterized queries and the authenticated session id — explicitly forbid reading any id from the request body in your prompt.",
    codeReviewGuide: [
      "Does every query use a placeholder, never string concatenation?",
      "Does every route take the player id from the session, never from the request body or query string?",
      "Socratic Question: Who controls the request body? Then who controls whose save file this endpoint writes?"
    ],
    testCasesGuide: "- Run your test-plan table (happy/boundary/hostile) against your data endpoints: verify every row's observed status matches expected\n- Attempt to read/write another player's data by editing a payload: verify 401/403\n- If local-only: corrupt a save file and verify the game falls back gracefully instead of crashing",
    iterationGuide: "If you find even one endpoint trusting a client-supplied id, treat it as a live vulnerability and fix it before moving to Sprint 4."
  },
  "l4-s7": {
    partNum: "Part 7",
    partTitle: "Sprint 4: Integration Tests",
    objectives: [
      "Write integration tests covering component interactions and network roundtrips",
      "Mock API calls including failure responses",
      "Measure coverage and close the riskiest gaps"
    ],
    planSpecs: {
      vision: "Integration tests covering your game's highest-risk seams (input->state, state->render, client->API), including at least one test that mocks a failure response and asserts the UI shows it.",
      parts: "Parts needed: a map of your game's integration seams ranked by risk, mocked API tests for the highest-risk flows including error paths, a coverage report, and one new test targeting the biggest uncovered branch.",
      flow: "Map your integration seams and pick the highest-risk flows -> prompt the AI to write integration tests for those seams including error-path renders -> run coverage -> write one more test for the biggest uncovered branch."
    },
    promptGuide: "Prompt the AI to write an integration test that mocks a failed API response (500 or rejected promise) for one of your game's features and asserts the UI shows the correct failure state.",
    codeReviewGuide: [
      "Does at least one integration test mock a FAILURE response, not just the happy path?",
      "Does the coverage report get read for risk, not chased to 100%?",
      "Socratic Question: Why did the suite report green while the build is broken? How do we keep mocks synchronized with reality?"
    ],
    testCasesGuide: "- Run the coverage report: verify it's read and at least one real gap is named and defended\n- Run the mocked-failure test: verify it asserts the UI's failure state, not just that the function was called\n- Confirm the biggest uncovered branch from the report now has a test",
    iterationGuide: "If a mock's payload shape doesn't match your real API's current response shape, fix the mock — a passing test against a stale mock is worse than no test."
  },
  "l4-s8": {
    partNum: "Part 8",
    partTitle: "Sprint 5: Performance & Feature Freeze",
    objectives: [
      "Profile your game and fix the top bottlenecks",
      "Apply memory discipline at product scale",
      "Close the Must line — feature freeze"
    ],
    planSpecs: {
      vision: "Your game holding a stable 60 FPS and passing performance budget, with every PRD Must story demonstrably done — the feature freeze point.",
      parts: "Parts needed: measurable performance targets (FPS, LCP, array caps), a baseline profile, fixes for the top bottlenecks, a re-profile, and a story-by-story PRD Must-line walkthrough with the tutor.",
      flow: "Set measurable performance targets and run the baseline profile -> fix the top profiled bottlenecks (sprite pruning, pagination, asset sizes) -> re-profile -> walk the PRD Must line story-by-story with the tutor, cutting or fixing anything failing now."
    },
    promptGuide: "Share your profiler output with the AI IDE and prompt it to fix the specific bottleneck functions it identifies — not a generic 'optimize this' request.",
    codeReviewGuide: [
      "Do the before/after profiler numbers show measurable improvement, not just a claim that it 'feels smoother'?",
      "Is every PRD Must story either demonstrably done or explicitly cut in this session's log — nothing left ambiguous?",
      "Socratic Question: Why does rendering 10,000 elements crash the tab? What does pagination change about what the DOM has to hold?"
    ],
    testCasesGuide: "- Record before/after FPS, LCP, and array-cap numbers: verify measurable improvement\n- Confirm every PRD Must story is marked done or explicitly cut in the freeze review\n- Confirm no new feature work is planned after this session",
    iterationGuide: "If you're tempted to add 'just one more feature' after the freeze, that impulse IS the lesson this session teaches — log it as a Level-4-retrospective note instead."
  },
  "l4-s9": {
    partNum: "Part 9",
    partTitle: "CI/CD Pipeline",
    objectives: [
      "Write a GitHub Actions workflow that installs, lints, tests, and builds on every push",
      "Gate merges on green pipelines",
      "Connect the pipeline to auto-deploy"
    ],
    planSpecs: {
      vision: "A working `.github/workflows/deploy.yml` that blocks a bad push and auto-deploys a good one — proven with one deliberately failing run and one green run.",
      parts: "Parts needed: the pipeline flow diagram (push -> lint -> test -> build -> deploy staging -> gate -> production), the YAML workflow file, and evidence of both a blocked run and a green run.",
      flow: "Sketch the pipeline flow -> prompt the AI to generate the workflow YAML -> push a commit and watch it run -> deliberately push a failing test and watch the gate hold."
    },
    promptGuide: "Prompt the AI to generate a GitHub Actions workflow that installs dependencies, lints, runs your Vitest suite, and builds on every push, failing the job if any step fails.",
    codeReviewGuide: [
      "Does the YAML run steps in a meaningful order (lint/test before deploy, never after)?",
      "Does a genuinely failing test actually block the pipeline, not just log a warning?",
      "Socratic Question: Why did the deploy stop? Read the logs upward from the failure — where exactly did the pipeline halt?"
    ],
    testCasesGuide: "- Push a commit with passing tests: verify the pipeline goes green end-to-end\n- Push a commit with a deliberately failing test: verify the pipeline blocks and the deploy does not run\n- Confirm both runs are saved as evidence for Session 12's engineering tour",
    iterationGuide: "If the pipeline goes green on a build that's actually broken, find out which step should have caught it and add that check."
  },
  "l4-s10": {
    partNum: "Part 10",
    partTitle: "Monitoring & Beta Test",
    objectives: [
      "Implement structured JSON logging with an error-handler middleware",
      "Plan and run a live beta test with real testers",
      "Harden inputs against the hostile beta user"
    ],
    planSpecs: {
      vision: "Structured JSON error logs from a real, live mini-beta with 2-3 testers, plus a triage matrix (Severity × Priority) with at least one honestly-labeled Blocker.",
      parts: "Parts needed: the log entry schema (timestamp, level, endpoint, userId), the structured logger middleware and input sanitizers, a beta test script and findings form, and the completed triage matrix.",
      flow: "Design the log schema and write the beta test script -> prompt the AI for the logger middleware and input sanitizers -> run a live mini-beta while watching the logs -> file every finding into the triage matrix."
    },
    promptGuide: "Prompt the AI for an error-handler middleware that logs stack trace, timestamp, endpoint, and client IP as structured JSON, plus an input sanitizer that clamps length and strips dangerous characters.",
    codeReviewGuide: [
      "Does every server error produce a structured JSON log line, not a raw console print?",
      "Is at least one beta finding honestly labeled a Blocker, not softened?",
      "Socratic Question: The player saw an error page and our logs are empty — where did the exception go?"
    ],
    testCasesGuide: "- Trigger a server error during the live beta: verify a structured JSON log line is produced\n- Confirm the triage matrix has real findings from real testers, with severity and priority both labeled\n- Confirm at least one input sanitizer is proven against a genuinely hostile input during the beta",
    iterationGuide: "If a tester's crash produced no log entry, fix the logging gap immediately — an unlogged failure is worse than the failure itself."
  },
  "l4-s11": {
    partNum: "Part 11",
    partTitle: "Docs & Launch Prep",
    objectives: [
      "Write a README a stranger can follow",
      "Produce the API spec and finalize the ADR set",
      "Fix Blocker/Major beta findings and complete the launch checklist"
    ],
    planSpecs: {
      vision: "A README that passes a clean-machine test — the tutor follows it from zero and the app runs — plus a finalized API spec and ADR set, and every Blocker/Major beta finding closed.",
      parts: "Parts needed: the README (prerequisites, install, env vars, run, deploy), the OpenAPI-style spec for any backend routes, the finalized ADR set, and the launch checklist with a rollback plan.",
      flow: "Outline the README and list every env var -> prompt the AI to draft the README and API spec from the codebase -> verify by clean-machine test (the tutor follows it from zero) -> burn down remaining Blocker/Major findings."
    },
    promptGuide: "Prompt the AI to draft your README and API spec directly from your actual codebase and env var usage, then have the tutor follow it on a machine that's never seen your project.",
    codeReviewGuide: [
      "Does the clean-machine test actually pass — does the tutor's from-zero run succeed?",
      "Does every ADR contain Status, Context, Decision, and Consequences with a real named cost?",
      "Socratic Question: It works on your machine and died on mine. What did your documentation assume that it never stated?"
    ],
    testCasesGuide: "- Have the tutor follow your README from a clean machine: verify it succeeds without asking you anything\n- Confirm every Blocker/Major beta finding from Session 10 is now closed\n- Confirm the launch checklist includes an explicit rollback plan",
    iterationGuide: "Every step the tutor had to ask you about during the clean-machine test is a gap — add it to the README before calling this session done."
  },
  "l4-s12": {
    partNum: "Part 12",
    partTitle: "The Grand Launch",
    objectives: [
      "Launch your game publicly and present it end-to-end",
      "Demonstrate the full engineering apparatus",
      "Defend the live system against chaos testing in real time"
    ],
    planSpecs: {
      vision: "Your game live in production on a shareable URL, defended in real time against the tutor's chaos testing — hostile inputs, forced network failures, cross-user attacks, and key-mash storms — with every failure caught, logged, and explained.",
      parts: "Parts needed: the live production URL, the full engineering apparatus on display (tests/coverage, CI/CD logs, structured logs, README/API spec/ADRs, commit/PR history), and a live defense against chaos testing.",
      flow: "Present the live game and map the PRD's promises to what shipped, including honest cuts -> walk the codebase and apparatus for the tutor -> defend live against Chaos Monkey testing -> run the final retrospective against the Session 1 scope contract."
    },
    promptGuide: "No AI generation this session — this is the live defense. Prepare to explain every artifact (tests, pipeline logs, beta findings, docs) without notes.",
    codeReviewGuide: [
      "Does every PRD Must story work in the live deployed game, with cuts logged and explained rather than silently missing?",
      "Do sanitizers hold, does state roll back, and does isolation reject cross-user writes under live chaos testing?",
      "Socratic Question: What was promised vs. what shipped — can you account for every difference?"
    ],
    testCasesGuide: "- Survive at minimum: garbage/extreme input into every form field, a forced network failure mid-save, a replayed cross-user payload attack, and a key-mash/restart storm — no crash, no frozen state, no unhandled failure\n- Confirm the live URL works from outside the classroom network\n- Confirm the final retrospective explicitly references the Session 1 scope contract",
    iterationGuide: "Whatever breaks during the live chaos test, run the debugging protocol out loud rather than going silent — that's the actual skill being assessed."
  }
};
