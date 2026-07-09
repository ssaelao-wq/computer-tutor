// Structured Racing Car Game project tasks database for Level 1
// Alignment: PRJ_KNOWLEDGE.md and Computer_Tutor_AIEra_Improved_Curriculum.md

export const PROJECT_TASKS = {
  "l1-s1": {
    partNum: "Part 0",
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
    partNum: "Part 1",
    partTitle: "HTML Document Skeleton",
    objectives: [
      "Create the base index.html file",
      "Construct the '#game-track' container to host the highway",
      "Nest the '#player-car' element inside the track",
      "Create a separate '#dashboard' panel for scoring HUD",
      "Nest a span element with ID '#score-val' inside the dashboard header"
    ],
    planSpecs: {
      vision: "A highway-view racing screen: a vertical road area taking up most of the screen, with a small scoreboard panel above it showing the score. The player's car will later sit on the road — for now we're just building the empty containers, no colors or positions yet.",
      parts: "Parts needed: a road area, a player's car, a lane divider line, and a scoreboard panel showing the score. Information to track (for later sessions): the score, how fast the car is going, and whether the game is currently running.",
      flow: "Browser loads index.html sequentially.\nDOM elements are created in memory in a parent-child hierarchy.\nParent containers constrain child positions."
    },
    promptGuide: "Draft an AI prompt asking to create an HTML document containing: a div container with an ID of 'game-track'; a child div nested inside 'game-track' with an ID of 'player-car'; and a separate scoreboard panel with an ID of 'dashboard' containing an h2 heading and a nested span with an ID of 'score-val' initialized to '0'. Avoid inline styles or Javascript logic at this stage.",
    codeReviewGuide: [
      "Check if all HTML tags open and close properly (especially divs).",
      "Verify that player-car is nested inside game-track.",
      "Check that the scoreboard uses id='score-val' (not class or wrong spelling).",
      "Socratic Question: Why must the score value be placed inside a span tag? How does nesting it allow JavaScript to change it later?"
    ],
    testCasesGuide: "- Verify element `#game-track` exists in DOM\n- Verify element `#player-car` is child of `#game-track`\n- Verify element `#dashboard` exists\n- Verify element `#score-val` is inside `#dashboard` and displays '0'",
    iterationGuide: "If the initial AI output lacks semantic elements or is missing closing tags, write a follow-up prompt to clean it up. Plan to add a '.lane-divider' inside the track to represent lanes.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "Target look once styled: a yellow-bordered track with a red player-car sitting on the dashed center lane-divider, and a dashboard scoreboard above it. Session 2 only builds the HTML structure (unstyled/plain) — Session 3 adds this CSS."
  },
  "l1-s3": {
    partNum: "Part 2",
    partTitle: "CSS Sizing & Coordinates Layout",
    objectives: [
      "Apply relative/absolute positioning parameters in styles.css",
      "Style '#game-track' width (390px), height (500px), and background color",
      "Style '#player-car' width/height and position it absolute at center-bottom",
      "Style '.lane-divider' as a dashed white marker line",
      "Align dashboard HUD items horizontally using flexbox"
    ],
    planSpecs: {
      vision: "A dark 2-lane-divider highway (390px wide, 500px tall) with a white dashed line down the middle. A red car sits near the bottom-center of the road. The scoreboard sits above the road as a small horizontal bar.",
      parts: "Parts needed: the road (sized to fit the screen), the car (positioned near the bottom, centered in a lane), and the lane divider (running down the middle). Information to track: the road's size, the car's position, and how wide each lane is.",
      flow: "Parent relative positioning establishes coordinate system origin (0,0) at top-left.\nChild absolute positioning uses (left, top, bottom, right) parameters relative to parent bounds."
    },
    promptGuide: "Draft an AI prompt to style the game HTML elements: target '#game-track' with width 390px, height 500px, background-color '#333', and relative positioning. Style '#player-car' with absolute positioning, bottom 20px, left 165px (to center it inside a 390px track), and red background. Style '.lane-divider' to run down the center with dashed borders.",
    codeReviewGuide: [
      "Does `#game-track` have `position: relative`? If not, the absolute elements will drift out.",
      "Is `#player-car` absolute-positioned?",
      "Socratic Question: What happens if `#game-track` loses `position: relative`? Which coordinate box will the browser calculate offsets against?"
    ],
    testCasesGuide: "- Verify `#game-track` has dimensions 390px width and 500px height\n- Verify `#player-car` is positioned at bottom: 20px and left: 165px\n- Verify `.lane-divider` uses dashed border-left rules\n- Verify `#dashboard` uses flex layout with space-between",
    iterationGuide: "Audit element visibility. If elements overlap or are hidden, check display/position definitions. Adjust contrasts and symbols for colorblind accessibility.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "This is now what your real file actually looks like — the CSS from this session (sizing, absolute positioning, dashed divider, flex HUD) is fully applied. Every session from here builds on this exact look."
  },
  "l1-s4": {
    partNum: "Part 3",
    partTitle: "JS Variable Registry",
    objectives: [
      "Initialize state registers in game.js",
      "Declare mutable variables for player position, speed, score, and state",
      "Declare immutable constants for track limits and lane dimensions",
      "Perform basic mathematical increments on state variables"
    ],
    planSpecs: {
      vision: "Screen still looks like Session 3's styled road and car — this session works behind the scenes, giving the game a memory of the score, speed, and whether it's running.",
      parts: "Parts needed: none new on screen — this session gives the game a memory. Information to track: the car's position, the current speed, the score, whether the game is running, and the fixed width of a lane.",
      flow: "State initialization (start) -> Variable declarations -> Math increments on game events -> Render UI updates"
    },
    promptGuide: "Write a prompt asking to declare JavaScript variables for a 2D highway avoidance game: mutable variables for 'carX' (initial 165), 'speed' (initial 0), 'score' (initial 0), 'gameActive' (initial false), and constants for track limits. Write test statements that increment score by 1 and speed by 10, then log the results.",
    codeReviewGuide: [
      "Are variables declared with `let` (mutable) and constants with `const` (immutable)?",
      "Is the speed variable initialized as a Number (not a String with quotes)?",
      "Socratic Question: What would happen if we declared `speed = '10'` (string) and then executed `speed += 5`? How does variable data type dictate arithmetic outcomes?"
    ],
    testCasesGuide: "- Verify variables are declared with correct syntax\n- Verify speed and score values update mathematically rather than string concatenating\n- Verify console logs report correct variable transitions",
    iterationGuide: "Ensure zero global variables are exposed in global browser scope directly (wrap them inside an object namespace or immediately invoked functional block to prevent client-side console hacks).",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "Screen unchanged from Session 3 — but score, speed, and gameActive are now real tracked variables in game.js, ready to power steering, animation, and scoring in the sessions ahead."
  },
  "l1-s5": {
    partNum: "Part 4",
    partTitle: "Keyboard Control Interfaces",
    objectives: [
      "Bind keyboard keydown listeners to the browser window",
      "Capture ArrowLeft and ArrowRight event properties",
      "Trigger coordinate updates based on keyboard inputs",
      "Update DOM style properties dynamically when variables shift"
    ],
    planSpecs: {
      vision: "Same red car on the dark road — but now pressing the LEFT and RIGHT arrow keys slides the car sideways between lanes, like steering.",
      parts: "Parts needed: a way to listen for arrow key presses. Information to track: which key was pressed, and how far the car should shift each time.",
      flow: "User presses keyboard key -> keydown Event fires -> JavaScript captures event.key -> IF key is ArrowLeft, decrease carX -> update #player-car.style.left coordinate"
    },
    promptGuide: "Write a prompt asking to bind a keydown event listener to the window. When 'ArrowLeft' is pressed, it should subtract 130 from 'carX' and update the left position style of '#player-car' to match. When 'ArrowRight' is pressed, it should add 130 to 'carX' and update the style. Log key presses to the console.",
    codeReviewGuide: [
      "Is `window.addEventListener('keydown')` used correctly?",
      "Does the handler inspect `event.key` for exact key strings?",
      "Is the style update formatted correctly (e.g. `carX + 'px'`)?",
      "Socratic Question: How does the browser know a key was pressed? What is the event object and what properties does it pass to our handler?"
    ],
    testCasesGuide: "- Press ArrowLeft: verify console logs the key and carX updates\n- Press ArrowRight: verify console logs key and carX increases\n- Verify #player-car moves visually on screen when keys are pressed",
    iterationGuide: "Confirm that pressing keys repeatedly does not trigger rendering locks. Plan on screen controls (buttons) for accessibility.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car" style="left: 8%;"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "The car can now be steered left/right with the Arrow keys — shown here parked in the left lane after pressing ArrowLeft. Try it yourself in this session's sandbox lab."
  },
  "l1-s6": {
    partNum: "Part 5",
    partTitle: "Safety Guards & Boundary Clamps",
    objectives: [
      "Implement conditional boundary checkpoints using logic gates",
      "Construct left-side limit guards (x >= 35)",
      "Construct right-side limit guards (x <= 295)",
      "Evaluate compound logic checks to lock steering inside lanes"
    ],
    planSpecs: {
      vision: "Same steering car — but now it can't be steered off the edges of the road. Holding an arrow key at the edge just keeps it pinned at the outer lane instead of sliding off-screen.",
      parts: "Parts needed: a safety check that runs every time a key is pressed. Information to track: the leftmost and rightmost positions the car is allowed to reach.",
      flow: "IF key is ArrowLeft:\n  IF carX > LeftLimit:\n    carX -= 130\nIF key is ArrowRight:\n  IF carX < RightLimit:\n    carX += 130"
    },
    promptGuide: "Draft a prompt asking to modify the keyboard steering logic. Add conditional guards to prevent the player car from running off the road. The car must be locked inside 3 lanes (x coordinates 35px, 165px, 295px). If the user presses left, only move the car if it is not already in the leftmost lane (x = 35px).",
    codeReviewGuide: [
      "Verify the boundary checks use correct comparison operators (e.g. `carX > 35` or similar).",
      "Does the car snap back or lock cleanly when boundaries are breached?",
      "Socratic Question: What would happen if we used `>= 0` as the left boundary check instead of `> 35`? Where would the player car end up visually?"
    ],
    testCasesGuide: "- Start at center lane (165px), press ArrowLeft: verify car moves to left lane (35px)\n- Press ArrowLeft again: verify car remains locked at 35px and does not move off-screen\n- Start at center lane, press ArrowRight: verify moves to 295px\n- Press ArrowRight again: verify locks at 295px",
    iterationGuide: "Test boundary limits. Refine prompt to reject negative values or out-of-range overrides.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car" style="left: 2%;"></div><div class="lane-divider"></div></div>',
    targetOutcomeCaption: "Boundary clamps now stop the car from sliding off the track — even holding ArrowLeft, it locks cleanly at the left edge instead of driving off-screen."
  },
  "l1-s7": {
    partNum: "Part 6",
    partTitle: "Obstacle Loop Generation",
    objectives: [
      "Construct looping structures (for/while) to automate repetitive creation",
      "Render multiple road lane markers down the highway container",
      "Calculate linear position coordinates inside loop runs",
      "Check loop safety boundaries to prevent infinite execution freezes"
    ],
    planSpecs: {
      vision: "Other cars (obstacles) now appear on the road at the top and are visible on screen alongside the player's car, scattered across the lanes.",
      parts: "Parts needed: several repeating lane-divider dashes down the highway. Information to track: how many dashes to create, and the vertical spacing between them.",
      flow: "FOR i from 0 to 4:\n  Calculate markerY = i * 120\n  Create div element with class 'lane-divider-dash'\n  Set styles top = markerY, left = center\n  Append divider dash to '#game-track'"
    },
    promptGuide: "Write a prompt to generate repeating highway divider lines using a JavaScript 'for' loop. The loop should run 5 times, calculating a vertical offset coordinates 'i * 120' on each iteration, creating a div element with class 'lane-divider-dash' styled absolute, and nesting it inside '#game-track'.",
    codeReviewGuide: [
      "Does the loop have a clear terminating condition?",
      "Is the loop index incremented properly to prevent infinite loop browser lockups?",
      "Are coordinates offsets calculated mathematically using the loop index?",
      "Socratic Question: What happens to the browser call stack if the loop increment block is deleted? Why does the screen freeze?"
    ],
    testCasesGuide: "- Verify loop runs exactly 5 times and appends 5 elements\n- Verify lane markers are spaced equally vertically (0px, 120px, 240px, 360px, 480px)\n- Inspect DOM tree to verify all 5 divider elements exist",
    iterationGuide: "Audit loop bounds and check CPU loads. If loops are sluggish, optimize calculation formulas.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle"></div><div id="obstacle-2" class="obstacle"></div><div class="obstacle" style="top:28px;left:110px;"></div></div>',
    targetOutcomeCaption: "Obstacle cars now spawn automatically via a for-loop and scroll down the track — shown here mid-loop with several obstacles active at once."
  },
  "l1-s8": {
    partNum: "Part 7",
    partTitle: "Modular Control Functions",
    objectives: [
      "Decompose game script into dedicated single-purpose functions",
      "Write parameter-driven functions for element styling updating",
      "Manage scope variables access: keep local variables locked",
      "Refactor keyboard listeners to invoke modular movement hooks"
    ],
    planSpecs: {
      vision: "Screen looks identical to Session 7 — this session is a behind-the-scenes cleanup, organizing the movement code into reusable pieces without changing what the player sees.",
      parts: "Parts needed: none new on screen — this session reorganizes existing behavior into named, reusable pieces (move left, move right, update position). Information to track: which pieces of information each reusable piece is allowed to see and change.",
      flow: "Key pressed -> call moveLeft() -> update carX state -> call updatePlayerPosition() -> update DOM style offsets"
    },
    promptGuide: "Write a prompt instructing to refactor the steering script. Modularize into functions: 'updatePlayerPosition()' to style '#player-car' left coordinate; 'moveLeft()' to clamp 'carX' and call update; and 'moveRight()' to increment, clamp, and call update. Ensure keys event triggers invoke these modular functions.",
    codeReviewGuide: [
      "Are functions declared with clean signatures and clear names?",
      "Are UI-rendering actions decoupled from variables increment checks?",
      "Socratic Question: Why is modularizing code into functions helpful for collaborative development? What happens if you try to access a variable declared inside 'moveLeft()' from the main update function?"
    ],
    testCasesGuide: "- Verify functions 'updatePlayerPosition', 'moveLeft', and 'moveRight' are declared\n- Press keys: verify correct functions execute and player steering behaves identically\n- Inspect scopes: ensure local variables do not leak into global window",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">0</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle"></div><div id="obstacle-2" class="obstacle"></div><div class="obstacle" style="top:28px;left:110px;"></div></div>',
    targetOutcomeCaption: "Screen still looks like Session 7's obstacle field — but the movement and obstacle logic has been refactored into clean, reusable functions (steerPlayer(), moveLeft(), moveRight()) instead of one long script."
  },
  "l1-s9": {
    partNum: "Part 8",
    partTitle: "Timer Loops & Animations",
    objectives: [
      "Implement recursively calling game loop cycles using requestAnimationFrame",
      "Animate oncoming obstacle cars moving vertically down the lanes",
      "Compute boundary resets to spawn obstacles back at off-screen top",
      "Control animation loops execution using active state gates"
    ],
    planSpecs: {
      vision: "The obstacle cars now visibly scroll DOWN the road continuously, like the player is driving forward past them, disappearing off the bottom and reappearing at the top — a real animated highway instead of a still picture.",
      parts: "Parts needed: a continuously repeating game loop. Information to track: each obstacle's vertical position, how fast it moves, and the score increase each time one resets.",
      flow: "gameLoop runs -> IF gameActive is True:\n  1. Update obstacleY += speed\n  2. IF obstacleY > trackHeight: reset obstacleY = -100, increase score\n  3. Style obstacle top = obstacleY\n  4. requestAnimationFrame(gameLoop) to trigger next paint frame"
    },
    promptGuide: "Draft a prompt to build the animation engine. Write a 'gameLoop()' function that runs recursively using 'requestAnimationFrame'. Inside, update the vertical position 'obstacleY' of '#obstacle-car' by adding 'speed' on each tick. If the obstacle moves past the bottom (500px), reset it to the top (-100px) and increase the score by 10.",
    codeReviewGuide: [
      "Does the animation loop check `gameActive` before requesting the next frame?",
      "Does the obstacle reset coordinates correctly to spawn again at the top?",
      "Socratic Question: Why is 'requestAnimationFrame' preferred over 'setInterval' for rendering fluid screen animations?"
    ],
    testCasesGuide: "- Call gameLoop(): verify obstacle car moves down the screen continuously\n- Verify obstacle resets to -100px when it exits bottom boundaries\n- Verify score increments in dashboard HUD on each reset\n- Set gameActive to false: verify animation loop halts instantly",
    iterationGuide: "Examine framerate stability. Refine prompt rules if resetting overlaps causes glitches.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">10</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle" style="top:4px;left:8px;"></div><div id="obstacle-2" class="obstacle" style="top:24px;left:70px;"></div><div class="obstacle" style="top:40px;left:140px;"></div></div>',
    targetOutcomeCaption: "The game loop now runs continuously via requestAnimationFrame — obstacles scroll smoothly down the screen 60 times a second, resetting to the top and increasing the score every cycle."
  },
  "l1-s10": {
    partNum: "Part 9",
    partTitle: "Collision Detection Overlap Math",
    objectives: [
      "Understand 2D coordinate overlap theorems (AABB collision logic)",
      "Compose mathematical collision checks comparing bounding borders",
      "Trigger game-over states when coordinate registers intersect",
      "Halt requestAnimationFrame recursions on collision flags"
    ],
    planSpecs: {
      vision: "When the player's car touches an obstacle car, the screen should visibly react — the game freezes and shows that a crash happened.",
      parts: "Parts needed: a collision check that runs every loop. Information to track: the edges (left/right/top/bottom) and size of the player's car and each obstacle.",
      flow: "IF player.right > obstacle.left AND player.left < obstacle.right AND\n   player.bottom > obstacle.top AND player.top < obstacle.bottom:\n     Collision detected -> set gameActive = false -> Trigger Game Over"
    },
    promptGuide: "Write a prompt asking to code a collision detection sensor. Write a function checking if the bounding boxes of '#player-car' and '#obstacle-car' overlap. If they intersect, set 'gameActive' to false to stop the animation loop, and call a 'gameOver()' function to alert the player.",
    codeReviewGuide: [
      "Verify the collision function matches AABB overlap formula parameters.",
      "Does collision detection trigger exactly when boxes touch?",
      "Socratic Question: If we only checked if the center coordinates were identical, why would cars drive right through each other without crashing? Why do box dimensions matter?"
    ],
    testCasesGuide: "- Drive player car into path of obstacle: verify collision registers immediately on overlap\n- Verify gameActive transitions to false and movement halts\n- Verify console logs report exact overlap coordinates",
    iterationGuide: "Audit collision accuracy. If triggers occur early or late, adjust box width/height offsets. Add test case objects checking boundary values.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">40</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle" style="top:32px;left:40%;"></div><div style="position:absolute;inset:0;background:rgba(139,0,0,0.6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:0.42rem;text-align:center;">💥 CRASH DETECTED</div></div>',
    targetOutcomeCaption: "A collision has been detected — the AABB overlap check compared the player and obstacle bounding boxes and matched, halting the animation loop and setting gameActive to false."
  },
  "l1-s11": {
    partNum: "Part 10",
    partTitle: "DOM HUD Visual Updates",
    objectives: [
      "Connect state registers changes to real-time UI text elements",
      "Write score states updates to textContent of DOM nodes",
      "Render modal retry popups when collision sensors trigger",
      "Bind keypress event handlers to reset variables and restart games"
    ],
    planSpecs: {
      vision: "The scoreboard number visibly climbs as the game runs, and after a crash a 'Game Over' screen appears on top of the road showing the final score and a prompt to restart.",
      parts: "Parts needed: a Game Over screen with a restart prompt (hidden until needed). Information to track: the current score to display, and whether the game is active or showing the Game Over screen.",
      flow: "Score changes -> document.getElementById('score-val').textContent = score -> Collision triggers -> remove '.hidden' class from modal -> Press Space key -> reset game variables, restart loop"
    },
    promptGuide: "Draft a prompt to build the HUD score updater and restart module. Write code that sets the textContent of '#score-val' to match the current 'score' variable. When a collision occurs, remove class 'hidden' from '#restart-panel'. If the user presses the 'Space' key while the restart panel is visible, reset score to 0, positions to default, hide panel, set gameActive to true, and restart loop.",
    codeReviewGuide: [
      "Does score update in DOM text content whenever it changes?",
      "Are HUD widgets classes updated to hide/show screen panels?",
      "Does keypress restart clean up all previous game timers and intervals?",
      "Socratic Question: What is the difference between setting 'textContent' vs 'innerHTML'? Why is 'textContent' safer for updating values?"
    ],
    testCasesGuide: "- Verify score counts up on HUD display as game runs\n- Trigger crash: verify restart screen panel becomes visible\n- Press Space: verify dashboard resets to 0, track clears, and loop starts cleanly",
    iterationGuide: "Check that resetting doesn't duplicate loop threads. Ensure all styles classes toggle cleanly.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">80</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle"></div><div style="position:absolute;inset:0;background:rgba(6,8,20,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;"><strong style="color:#ff4d4d;font-size:0.5rem;">GAME OVER</strong><span style="font-size:0.4rem;margin-top:2px;">Final Score: 80</span><span style="font-size:0.34rem;margin-top:2px;color:#8899aa;">Press SPACE to Restart</span></div></div>',
    targetOutcomeCaption: "Score now updates live from JavaScript into the HTML, and the Game Over screen (previously hidden with a .hidden class) appears with the final score and a restart prompt when the player crashes."
  },
  "l1-s12": {
    partNum: "Part 11",
    partTitle: "Game Polish & Final Assessment",
    objectives: [
      "Add score speed-multipliers to scale game difficulty dynamically",
      "Refactor global assets configurations into a single config record",
      "Execute automated QA scripts checks verifying safety locks",
      "Defend code design structures and variables scopes under audits"
    ],
    planSpecs: {
      vision: "The complete game: obstacle cars appear faster and more often as the score climbs (harder over time), and everything from the scoreboard to the crash screen works smoothly together, ready to demo.",
      parts: "Parts needed: none new on screen — this session collects all the game's tunable numbers in one place. Information to track: the starting speed, how quickly difficulty ramps up, and the maximum allowed speed.",
      flow: "Game running -> speed increases based on score * difficultyMultiplier -> clamp speed to CONFIG.maxSpeed"
    },
    promptGuide: "Write a prompt to complete the game. Store configuration details (starting speed, lanes width, collision offsets) inside a single read-only constant config object. Add logic that increases obstacle speed dynamically as score increases, clamping it to a maximum speed to maintain playable limits.",
    codeReviewGuide: [
      "Are magic values refactored into a configuration constant object?",
      "Does difficulty scaling have upper clamping parameters to prevent unplayable speeds?",
      "Socratic Question: Why is it bad practice to hardcode layout dimensions directly inside code logic? How does a config object simplify game changes?"
    ],
    testCasesGuide: "- Verify game speeds up dynamically as score climbs\n- Check that speed locks at max speed clamp limits\n- Run full test suite: verify zero regressions exist in inputs, collision math, or resets",
    iterationGuide: "Complete self-reflection journal entries summarizing optimization tweaks, bugs solved, and lessons learned.",
    targetOutcomeHtml: '<div id="dashboard"><h2>Score: <span id="score-val">240</span></h2></div><div id="game-track"><div id="player-car"></div><div class="lane-divider"></div><div class="obstacle"></div><div id="obstacle-2" class="obstacle"></div><div class="obstacle" style="top:30px;left:120px;"></div></div>',
    targetOutcomeCaption: "The finished Racing Car Game — obstacle spawning, difficulty scaling, collision detection, and a polished restart flow all work together. Ready for your live defense QA review in this session's final assessment."
  },
  "l2-s1": {
    partNum: "Part 1",
    partTitle: "Canvas Arena Initialization",
    objectives: [
      "Create the base `<canvas id=\"game-canvas\">` element",
      "Retrieve its 2D drawing context in `canvas.js`",
      "Draw the player ship as a filled rectangle at fixed coordinates"
    ],
    planSpecs: {
      hierarchy: "index.html > canvas#game-canvas\ncanvas.js: const canvas -> const ctx = canvas.getContext('2d')",
      variables: "canvas: DOM element (480 x 600)\nctx: CanvasRenderingContext2D\nship: object literal (drawn via ctx.fillRect)",
      flow: "Browser loads canvas element -> JS retrieves 2D context -> ctx draw calls paint pixels directly onto the canvas bitmap (no DOM nodes created per shape)"
    },
    promptGuide: "Draft an AI prompt asking to create a `<canvas id=\"game-canvas\">` element sized 480x600, retrieve its 2D context in `canvas.js`, and draw a red 40x40 player ship rectangle at coordinates (200, 500) using `fillStyle` and `fillRect`.",
    codeReviewGuide: [
      "Does the script call `canvas.getContext('2d')` before any draw commands?",
      "Is `fillStyle` set before `fillRect` is called?",
      "Socratic Question: Why does the ship look like a solid trail instead of a single moving square if `ctx.clearRect()` is missing from the draw loop?"
    ],
    testCasesGuide: "- Verify `#game-canvas` exists with width 480 and height 600\n- Verify `ctx` is a valid 2D rendering context\n- Verify the player ship renders as a 40x40 red square at (200, 500)",
    iterationGuide: "Confirm `clearRect()` runs before every redraw once the game loop is introduced in Part 2, so shapes don't leave trails."
  },
  "l2-s2": {
    partNum: "Part 2",
    partTitle: "Sprite Object Modeling",
    objectives: [
      "Declare the `ship` sprite as a single object literal",
      "Store position, dimensions, and speed as object properties",
      "Update object properties in response to keyboard movement"
    ],
    planSpecs: {
      hierarchy: "let ship = { x, y, width, height, speed } -> renderShip(ship) -> ctx.fillRect(ship.x, ship.y, ship.width, ship.height)",
      variables: "ship.x: Number (initial 220)\nship.y: Number (initial 500)\nship.speed: Number (initial 5)",
      flow: "Keydown event -> update ship.x by ship.speed -> clearRect -> re-render ship at new coordinates"
    },
    promptGuide: "Write a prompt asking to declare a `ship` object literal with `x`, `y`, `width`, `height`, and `speed` properties, then write a `moveLeft()` function that subtracts `ship.speed` from `ship.x`, clears the canvas, and redraws the ship.",
    codeReviewGuide: [
      "Is `ship` declared as a single object literal rather than five separate loose variables?",
      "Does `moveLeft()` reference `ship.speed` instead of a hardcoded number?",
      "Socratic Question: If a local variable inside the move handler is also named `ship`, which one does the assignment update — and why does the canvas ship stop moving?"
    ],
    testCasesGuide: "- Verify `ship` object has exactly 5 properties (x, y, width, height, speed)\n- Press ArrowLeft: verify `ship.x` decreases by exactly `ship.speed`\n- Verify canvas re-renders the ship at the new x position",
    iterationGuide: "Check for variable shadowing bugs if the AI reintroduces a local `ship` inside any handler function."
  },
  "l2-s3": {
    partNum: "Part 3",
    partTitle: "Laser Battery Arrays",
    objectives: [
      "Declare an empty `lasers` array",
      "Push new laser objects onto the array when firing",
      "Loop through the array to render every active laser"
    ],
    planSpecs: {
      hierarchy: "let lasers = [] -> fireLaser() pushes {x,y,width,height,speed} -> for loop renders each laser",
      variables: "lasers: Array of laser objects\nnewLaser.speed: Number (8)",
      flow: "Spacebar keydown -> fireLaser() -> lasers.push(newLaser) -> render loop iterates lasers.length and draws each"
    },
    promptGuide: "Draft a prompt asking to declare an empty `lasers` array, write a `fireLaser()` function that pushes a new laser object (positioned at the ship's x + 18, moving at speed 8) onto the array when spacebar is pressed, and a loop that draws every laser in the array.",
    codeReviewGuide: [
      "Is `lasers` initialized as an empty array before any pushes occur?",
      "Does `fireLaser()` push a full object literal (not just a coordinate number)?",
      "Socratic Question: If the keydown listener isn't distinguishing held keys from repeated presses, why does the laser cannon stutter instead of firing smoothly?"
    ],
    testCasesGuide: "- Press spacebar once: verify `lasers.length` increases by exactly 1\n- Verify each pushed laser object has x, y, width, height, and speed properties\n- Verify the render loop draws one rectangle per array element",
    iterationGuide: "Confirm rapid-fire spacebar presses don't push duplicate lasers per single press (debounce key-repeat if needed)."
  },
  "l2-s4": {
    partNum: "Part 4",
    partTitle: "Laser Motion & Garbage Collection",
    objectives: [
      "Move every laser's `y` coordinate each frame",
      "Detect lasers that cross off-screen bounds",
      "Prune dead lasers from the array using a reverse loop and `splice()`"
    ],
    planSpecs: {
      hierarchy: "for (let i = lasers.length - 1; i >= 0; i--) { update; if (offscreen) splice }",
      variables: "lasers[i].y: Number (decrements by lasers[i].speed)\noff-screen bound: y < 0",
      flow: "Each frame -> loop lasers array in reverse -> subtract speed from y -> if y < 0, splice(i, 1) to remove from array"
    },
    promptGuide: "Write a prompt asking to update every laser's `y` coordinate by subtracting its `speed`, then remove any laser whose `y` drops below 0 using `splice()`, iterating the array in reverse order.",
    codeReviewGuide: [
      "Does the loop iterate from `lasers.length - 1` down to `0` (reverse), not forward?",
      "Is `splice(i, 1)` called only after the off-screen check, not unconditionally?",
      "Socratic Question: If this loop iterated forward instead, why would some off-screen lasers survive the cleanup after a splice shifts the array?"
    ],
    testCasesGuide: "- Fire 3 lasers, let them travel off-screen: verify `lasers.length` returns to 0\n- Fire lasers simultaneously exiting on the same frame: verify all are removed, not just every other one\n- Verify on-screen lasers are unaffected by the cleanup pass",
    iterationGuide: "Stress-test with 50+ simultaneous lasers to confirm the reverse-loop cleanup has zero skipped entries."
  },
  "l2-s5": {
    partNum: "Part 5",
    partTitle: "Alien Swarm Grids",
    objectives: [
      "Build a 2D grid of alien objects using nested loops",
      "March the entire swarm horizontally in sync",
      "Reverse direction and drop the grid down when any alien reaches an edge"
    ],
    planSpecs: {
      hierarchy: "let aliens = [][] -> nested for loops build rows/cols -> moveSwarm() shifts every aliens[r][c].x",
      variables: "direction: Number (1 or -1)\naliens[r][c]: {x, y, alive}",
      flow: "moveSwarm() -> nested loop updates every alien.x by 2*direction -> if any alien.x exceeds bounds, flip direction and drop all aliens.y by 20"
    },
    promptGuide: "Draft a prompt asking to build a 3-row by 5-column grid of alien objects (each with x, y, alive), then write a `moveSwarm()` function that shifts every alien horizontally, and reverses direction plus drops the whole grid down 20px when any alien reaches the left or right edge.",
    codeReviewGuide: [
      "Is the alien grid built with nested `for` loops producing `aliens[row][col]` objects?",
      "Does `moveSwarm()` check edges across the entire grid before deciding to reverse, not just one alien?",
      "Socratic Question: If the boundary check is removed, why does the whole swarm slide off-screen instead of bouncing back?"
    ],
    testCasesGuide: "- Verify `aliens.length` is 3 and `aliens[0].length` is 5\n- Run `moveSwarm()` repeatedly: verify the swarm reverses direction and drops down exactly when an edge alien crosses the boundary\n- Verify all aliens in the grid move in sync each tick",
    iterationGuide: "Confirm the swarm's edge check accounts for the alien's width, not just its left-edge x coordinate, so it doesn't clip through the boundary."
  },
  "l2-s6": {
    partNum: "Part 6",
    partTitle: "Keyboard Input Matrices",
    objectives: [
      "Track simultaneous key states using a `keysPressed` map object",
      "Bind both `keydown` and `keyup` listeners to keep the map accurate",
      "Read the map every game-loop tick to drive movement and firing"
    ],
    planSpecs: {
      hierarchy: "let keysPressed = {} -> keydown sets true -> keyup sets false -> handleInputs() reads map every frame",
      variables: "keysPressed: Object map of key string -> Boolean",
      flow: "keydown('ArrowLeft') -> keysPressed['ArrowLeft'] = true -> game loop calls handleInputs() -> if keysPressed['ArrowLeft'], move ship -> keyup resets to false"
    },
    promptGuide: "Write a prompt asking to declare a `keysPressed` object, bind `keydown`/`keyup` listeners that toggle each key's Boolean state, and write a `handleInputs()` function called every game-loop tick that moves the ship and fires lasers based on which keys are currently `true`.",
    codeReviewGuide: [
      "Are both `keydown` AND `keyup` listeners bound (not just keydown)?",
      "Does `handleInputs()` run every game-loop frame rather than only inside the event handler?",
      "Socratic Question: If the `keyup` listener is missing, why does the ship keep firing lasers forever after the player releases spacebar?"
    ],
    testCasesGuide: "- Hold ArrowLeft and ArrowRight simultaneously: verify both movement and firing can happen in the same frame\n- Release a key: verify its `keysPressed` entry flips back to false\n- Verify firing respects a cooling interval instead of firing every single frame while held",
    iterationGuide: "Add a cooldown timestamp check inside `handleInputs()` so holding spacebar doesn't fire a laser on every single frame."
  },
  "l2-s7": {
    partNum: "Part 7",
    partTitle: "Destructible Colony Shields",
    objectives: [
      "Represent a shield as an array of pixel-cell states",
      "Compute which shield cell a laser's coordinates map to",
      "Degrade the shield by zeroing out hit cells"
    ],
    planSpecs: {
      hierarchy: "let shield = [1,1,1,1,1] -> drawShield() renders cells where value is 1 -> checkShieldCollision(laser) zeroes out hit cells",
      variables: "shield: Array of 0/1 cell states\ncellWidth: Number (20)",
      flow: "Laser reaches shield's y-range -> compute col = Math.floor((laser.x - offset) / cellWidth) -> if shield[col] === 1, set to 0 and destroy laser"
    },
    promptGuide: "Draft a prompt asking to represent a shield as an array of 5 cells (`1` = intact, `0` = destroyed), draw only the intact cells, and write a `checkShieldCollision(laser)` function that computes which cell index a laser hit and destroys that cell.",
    codeReviewGuide: [
      "Does the column-index formula subtract the shield's starting x offset before dividing by `cellWidth`?",
      "Is the destroyed cell set to `0` rather than removed from the array (which would shift every other cell's index)?",
      "Socratic Question: If the index formula is off by one offset value, why would lasers appear to pass straight through the shield without registering a hit?"
    ],
    testCasesGuide: "- Fire a laser at a known x coordinate: verify the correct shield cell index is computed and destroyed\n- Fire at an already-destroyed cell: verify no further effect (no negative shield state)\n- Verify `drawShield()` stops rendering a cell once its value is `0`",
    iterationGuide: "Double-check the column formula against the shield's actual pixel offset once its position changes from the tutorial default."
  },
  "l2-s8": {
    partNum: "Part 8",
    partTitle: "Laser-vs-Swarm Collision Matrix",
    objectives: [
      "Sweep every laser against every alien in the grid",
      "Resolve overlaps by destroying both the laser and the alien",
      "Break out of the inner loop once a laser resolves a hit"
    ],
    planSpecs: {
      hierarchy: "for laser (reverse) { for row { for col { if alive && overlap: destroy both, score += 50, break } } }",
      variables: "score: Number (increments by 50 per kill)\na.alive: Boolean per alien",
      flow: "Outer loop over lasers (reverse, for safe splice) -> inner nested loop over alien grid -> on overlap: mark alien dead, splice laser, add score, break inner loop"
    },
    promptGuide: "Write a prompt asking to sweep every laser against every alien in the grid, and on overlap: mark the alien's `alive` to `false`, splice the laser out of the array, add 50 to `score`, and `break` out of the inner loop so one laser can't destroy more than one alien.",
    codeReviewGuide: [
      "Does the outer laser loop iterate in reverse (for safe mid-loop splicing)?",
      "Is there a `break` immediately after a hit is resolved, before checking further aliens for that same laser?",
      "Socratic Question: If the `break` statement is missing, why could a single laser wipe out three aliens in the same column in one frame?"
    ],
    testCasesGuide: "- Fire one laser through a single alien: verify exactly one alien dies and score increases by exactly 50\n- Fire simultaneously into a dense cluster: verify each laser destroys at most one alien\n- Verify dead aliens are skipped on subsequent collision sweeps (via the `alive` flag)",
    iterationGuide: "Profile this nested sweep's cost as the alien grid grows; consider skipping rows/cols with zero live aliens if performance dips."
  },
  "l2-s9": {
    partNum: "Part 9",
    partTitle: "Wave Progression & HUD",
    objectives: [
      "Detect when a wave's alien grid is fully cleared",
      "Increment the wave counter and spawn a harder swarm exactly once per clear",
      "Render score, wave number, and a health bar in the HUD"
    ],
    planSpecs: {
      hierarchy: "checkWaveCompletion() counts aliveCount -> if 0, wave++ and spawnSwarm(wave)\ndrawHUD() renders score, wave, and health bar",
      variables: "wave: Number (starts at 1)\nhealth: Number (0-100, rendered as a bar)",
      flow: "Every tick -> checkWaveCompletion() -> if all aliens dead, increment wave and respawn a harder swarm -> drawHUD() paints score/wave text and a red-then-green health bar"
    },
    promptGuide: "Draft a prompt asking to write a `checkWaveCompletion()` function that counts alive aliens across the grid, and — only when that count hits exactly zero — increments `wave` and calls `spawnSwarm(wave)` once. Also write a `drawHUD()` function rendering score, wave number, and a health bar.",
    codeReviewGuide: [
      "Does `checkWaveCompletion()` guard against calling `spawnSwarm()` more than once per wave clear?",
      "Is the health bar drawn as two overlapping rectangles (a red background, then a green foreground sized to current health)?",
      "Socratic Question: If the wave-clear check runs every frame with no 'already spawned' guard, why does the screen flood with duplicate wave titles?"
    ],
    testCasesGuide: "- Destroy every alien in a wave: verify `wave` increments exactly once and a new swarm spawns\n- Verify the health bar visually shrinks as `health` decreases\n- Verify score and wave numbers update live in the HUD text",
    iterationGuide: "Add a boolean 'wave transition in progress' flag so `checkWaveCompletion()` can't re-trigger mid-spawn."
  },
  "l2-s10": {
    partNum: "Part 10",
    partTitle: "Async Leaderboard Fetch (GET)",
    objectives: [
      "Write an `async` function that fetches remote leaderboard data",
      "Await both the network request and its JSON parsing",
      "Handle fetch failures with try/catch instead of crashing"
    ],
    planSpecs: {
      hierarchy: "async function fetchLeaderboard() { try { await fetch(...); await res.json(); } catch {...} }",
      variables: "res: Response object\ndata: parsed JSON array of score records",
      flow: "Call fetchLeaderboard() -> await fetch(url) suspends until server responds -> await res.json() parses body -> return data (or log error via catch)"
    },
    promptGuide: "Write a prompt asking for an `async function fetchLeaderboard()` that awaits a `fetch()` call to a leaderboard endpoint, awaits parsing the JSON response, logs the result, and wraps both awaits in a try/catch that logs a friendly error on failure.",
    codeReviewGuide: [
      "Is the function declared with the `async` keyword before it uses any `await`?",
      "Are both the `fetch()` call and the `.json()` parse individually awaited?",
      "Socratic Question: If the `await` before `res.json()` is deleted, why does the console print `Promise { <pending> }` instead of the actual score data?"
    ],
    testCasesGuide: "- Call `fetchLeaderboard()` against a working endpoint: verify it returns a parsed array of score objects\n- Point it at a broken URL: verify the catch block logs an error instead of throwing an uncaught exception\n- Verify the function does not block or freeze the rest of the game loop while waiting",
    iterationGuide: "If real network calls are too slow for classroom pacing, mock the fetch with a short artificial delay to make the async behavior visible without a slow endpoint."
  },
  "l2-s11": {
    partNum: "Part 11",
    partTitle: "Leaderboard Score Submission (POST)",
    objectives: [
      "Compose a JSON payload representing a player's score",
      "Send it via an `async` POST request with the correct headers",
      "Check the response status and handle failures gracefully"
    ],
    planSpecs: {
      hierarchy: "async function submitScore(player, val) { try { await fetch(url, {method:'POST', headers, body}); if(!res.ok) throw ...; } catch {...} }",
      variables: "options.method: String ('POST')\noptions.headers: Object ({'Content-Type':'application/json'})\noptions.body: String (JSON.stringify({player, score}))",
      flow: "Player submits name -> build JSON payload -> await fetch POST -> check res.ok -> on failure, throw/catch and warn; on success, log confirmation"
    },
    promptGuide: "Draft a prompt asking for an `async function submitScore(player, val)` that POSTs a JSON body `{ player, score: val }` to a scores endpoint with a `Content-Type: application/json` header, checks `res.ok` and throws if the submission failed, and catches/logs any network error.",
    codeReviewGuide: [
      "Does the fetch options object set `method: \"POST\"` and the correct JSON content-type header?",
      "Is the body passed through `JSON.stringify()` rather than a raw object?",
      "Socratic Question: If the destination URL is unreachable and there's no try/catch, why does the whole game freeze silently when the player clicks submit?"
    ],
    testCasesGuide: "- Submit a valid score: verify the POST body matches `{ player, score }` and the request succeeds\n- Point the endpoint at an unreachable URL: verify the catch block logs a warning instead of crashing\n- Attempt to submit an oversized or malformed payload: verify the server's error status is surfaced, not swallowed silently",
    iterationGuide: "Discuss with students what a server-side check should reject (e.g. absurd score values) so client-submitted data isn't trusted blindly."
  },
  "l2-s12": {
    partNum: "Part 12",
    partTitle: "Performance & Memory Optimization",
    objectives: [
      "Cache array lengths before looping instead of re-reading `.length` each iteration",
      "Skip dead sprites early with guard clauses",
      "Profile and confirm frame-rate stability under heavy load"
    ],
    planSpecs: {
      hierarchy: "cache array.length in a local variable before looping -> skip dead sprites early -> avoid re-allocating objects every frame",
      variables: "rowLength / colLength: cached Number snapshots of array sizes",
      flow: "Before nested loop, snapshot lengths once -> loop using cached bounds -> skip non-alive entries immediately with a guard clause"
    },
    promptGuide: "Write a prompt asking to refactor the alien-sweep rendering loop so array lengths are cached into local variables before looping (instead of re-reading `.length` on every iteration), and to skip any alien whose `alive` flag is false before doing further work on it.",
    codeReviewGuide: [
      "Are `aliens.length` and each row's `.length` cached into variables before the loop starts?",
      "Does the loop body check `alive` first and skip before any drawing work?",
      "Socratic Question: If dead lasers are never pruned from the array, why does the frame rate degrade the longer the player plays, even though nothing looks different on screen?"
    ],
    testCasesGuide: "- Run a 500-laser stress test: verify the frame rate stays stable rather than degrading\n- Profile the game in DevTools' Performance tab: verify no continuously growing array shows up in a memory snapshot\n- Verify the optimized loop produces identical visual output to the unoptimized version",
    iterationGuide: "Record a baseline FPS before and after the optimization pass to make the improvement concrete rather than assumed."
  },
  "l2-s13": {
    partNum: "Part 13",
    partTitle: "Graduation Sprint & Defense",
    objectives: [
      "Integrate every Level 2 module into one working build",
      "Defend design choices in a live tutor code walkthrough",
      "Diagnose and patch a seeded bug under time pressure"
    ],
    planSpecs: {
      hierarchy: "Full stack: canvas.js (render) + input.js (keys) + sprites.js (ship/lasers/aliens) + collision.js + api.js (leaderboard)",
      variables: "All Level 2 state variables integrated: ship, lasers[], aliens[][], shield[], score, wave, health",
      flow: "Assessment Part A: assemble and verify the full stack -> Part B: live code walkthrough defense -> Part C: timed diagnostic patch challenge"
    },
    promptGuide: "Compile your full Mars Colony Defense codebase (canvas init, sprites, input matrix, collision sweeps, async leaderboard) into one working build, and prepare to explain each module's role to the tutor without notes.",
    codeReviewGuide: [
      "Can every module (rendering, input, collision, API) be pointed to and explained independently?",
      "Are there any leftover console.log debug statements or dead variables from earlier sessions?",
      "Socratic Question: If asked 'why does this collision check use `&&` instead of `||`,' can you explain the AABB logic from memory, not just recite what the AI generated?"
    ],
    testCasesGuide: "- Run the full game end-to-end: ship moves, fires, aliens march and die, shields degrade, waves progress, scores submit\n- Patch the seeded diagnostic bug (async handler or splice statement) within the time limit\n- Defend at least 2 code design choices under tutor questioning",
    iterationGuide: "Write down which concept from Level 2 felt least solid, to flag as a review topic before starting Level 3."
  },
  "l3-s1": {
    partNum: "Part 1",
    partTitle: "Relational Schema Design",
    objectives: [
      "Design the `players`, `hacking_tools`, and `inventories` tables",
      "Declare primary keys and foreign key relationships between tables",
      "Add cascade-delete constraints so orphaned records can't be left behind"
    ],
    planSpecs: {
      hierarchy: "players (1) --< inventories >-- (1) hacking_tools\ninventories.player_id REFERENCES players(id)\ninventories.tool_id REFERENCES hacking_tools(id)",
      variables: "players: {id, username, created_at}\nhacking_tools: {id, name, cost}\ninventories: {player_id, tool_id}",
      flow: "Create players and hacking_tools first (no dependencies) -> create inventories referencing both by foreign key -> deleting a player cascades to delete their inventory rows"
    },
    promptGuide: "Draft an AI prompt asking to generate SQL `CREATE TABLE` statements for `players` (id, username unique, created_at), `hacking_tools` (id, name, cost), and `inventories` (player_id, tool_id) with foreign keys referencing both parent tables and `ON DELETE CASCADE` on the player reference.",
    codeReviewGuide: [
      "Does `inventories` declare foreign keys to both `players` and `hacking_tools`?",
      "Is `ON DELETE CASCADE` present on the player reference?",
      "Socratic Question: If a player row is deleted without cascade, why do their old inventory rows keep pointing at an ID that no longer exists?"
    ],
    testCasesGuide: "- Insert a player, a tool, and an inventory row: verify all three insert successfully\n- Delete the player: verify their inventory row is automatically removed\n- Attempt to insert an inventory row referencing a non-existent tool_id: verify it's rejected",
    iterationGuide: "Confirm every foreign key column's type exactly matches its referenced primary key's type before running the schema."
  },
  "l3-s2": {
    partNum: "Part 2",
    partTitle: "Authentication & Hacking Sign-Ups",
    objectives: [
      "Build a `/signup` route that validates and hashes incoming passwords",
      "Never store or log plaintext passwords",
      "Reject signups with passwords under 8 characters"
    ],
    planSpecs: {
      hierarchy: "POST /signup -> validate password length -> bcrypt.hash(password) -> INSERT INTO players -> 201 response",
      variables: "password: String (raw input, min length 8)\nhashedPassword: String (bcrypt output, never logged)",
      flow: "Client submits {username, password} -> server checks password.length -> hashes password -> inserts hashed value into players table -> responds 201 or 400"
    },
    promptGuide: "Write a prompt asking for an Express `POST /signup` route that rejects passwords under 8 characters with a 400 status, hashes valid passwords with `bcrypt.hash()`, and inserts the username and hashed password into the `players` table.",
    codeReviewGuide: [
      "Is the password length check performed before hashing, not after?",
      "Is `bcrypt.hash()` (or equivalent) used instead of storing `password` directly?",
      "Socratic Question: If an attacker gains direct read access to the `players` table, what do they see in the password column — and why does that matter?"
    ],
    testCasesGuide: "- Submit a 5-character password: verify a 400 response and no row is inserted\n- Submit a valid password: verify the stored value is a bcrypt hash, not the raw string\n- Verify no server log line ever prints the raw password",
    iterationGuide: "Grep your own server logs for the literal password string after a test signup to confirm it never appears anywhere."
  },
  "l3-s3": {
    partNum: "Part 3",
    partTitle: "Environment Variable Security",
    objectives: [
      "Move database and secret credentials into a `.env` file",
      "Load them in code via `process.env`",
      "Confirm `.gitignore` blocks `.env` from being committed"
    ],
    planSpecs: {
      hierarchy: "require('dotenv').config() -> process.env.DB_HOST / DB_USER / DB_PASS / JWT_SECRET",
      variables: ".env: DB_HOST, DB_USER, DB_PASS, JWT_SECRET (all string values, no quotes, no spaces around =)",
      flow: "Server boots -> dotenv loads .env into process.env -> Pool/connection config reads process.env.* -> secrets never appear as literals in tracked code"
    },
    promptGuide: "Draft a prompt asking to extract hardcoded database credentials and a JWT secret out of the codebase into a `.env` file, load them with `dotenv` at server startup, and confirm `.gitignore` already excludes `.env`.",
    codeReviewGuide: [
      "Are all four secrets (`DB_HOST`, `DB_USER`, `DB_PASS`, `JWT_SECRET`) read via `process.env`, not hardcoded?",
      "Does `.gitignore` list `.env` before any commit happens?",
      "Socratic Question: If `.env` were accidentally committed to a public GitHub repo, what could an attacker do within minutes of finding it?"
    ],
    testCasesGuide: "- Run `git status` after adding secrets: verify `.env` shows as ignored, not staged\n- Delete `.env` temporarily: verify the server fails to connect (proving it truly reads from the file, not a hardcoded fallback)\n- Search the committed source for any secret literal: verify zero matches",
    iterationGuide: "If any secret is still hardcoded as a fallback default in code, remove the fallback so a missing `.env` fails loudly instead of silently using a weak default."
  },
  "l3-s4": {
    partNum: "Part 4",
    partTitle: "Inventory JOIN Queries",
    objectives: [
      "Write a JOIN query across `players`, `inventories`, and `hacking_tools`",
      "Return a clean JSON array of a player's owned tools",
      "Wire the frontend to fetch and render that inventory list"
    ],
    planSpecs: {
      hierarchy: "GET /inventory/:playerId -> SQL: inventories JOIN players JOIN hacking_tools -> res.json(rows)",
      variables: "req.params.playerId: String\nrows: Array of {username, name, cost}",
      flow: "Frontend requests GET /inventory/:playerId -> server runs 3-table JOIN filtered by players.id -> maps rows to JSON -> frontend renders the returned array"
    },
    promptGuide: "Write a prompt asking for a route that JOINs `inventories`, `players`, and `hacking_tools` to return every tool a specific player owns as a JSON array, filtered by the player's id parameter.",
    codeReviewGuide: [
      "Does the query use `INNER JOIN` (not `LEFT JOIN`) so it only returns rows with a real match on both sides?",
      "Is the `WHERE` clause filtering by the correct player id parameter, using a parameterized query (`$1`)?",
      "Socratic Question: If `INNER JOIN` were swapped for `LEFT JOIN`, why might the response start including tool rows for players who don't actually own them?"
    ],
    testCasesGuide: "- Query a player with 2 owned tools: verify exactly 2 rows return\n- Query a player with zero owned tools: verify an empty array, not an error\n- Verify the query is parameterized (`$1`), not string-concatenated with the player id",
    iterationGuide: "Confirm the endpoint is scoped to only the requesting player's own inventory, not any player id passed in — cross-reference this against the RLS work coming in Part 7."
  },
  "l3-s5": {
    partNum: "Part 5",
    partTitle: "REST API Routing",
    objectives: [
      "Define REST routes for reading tools and modifying a player's deck",
      "Use the correct HTTP verb for each route's purpose",
      "Return appropriate status codes on success"
    ],
    planSpecs: {
      hierarchy: "router.get('/tools') / router.post('/deck/add') / router.delete('/deck/remove')",
      variables: "req.body.player_id / req.body.tool_id (for writes)\nres status: 200 (read success), 201 (created)",
      flow: "Client calls the matching verb+path -> Express router matches route -> handler runs the DB query -> responds with JSON or a status code"
    },
    promptGuide: "Draft a prompt asking for an Express router file (`api.js`) with GET `/tools` (list all tools), POST `/deck/add` (insert a player_id/tool_id pair), and DELETE `/deck/remove` (remove a specific pair), each using the correct HTTP verb for its purpose.",
    codeReviewGuide: [
      "Is the read-only `/tools` endpoint a GET route, not POST?",
      "Does `/deck/add` return 201 Created on success rather than a generic 200?",
      "Socratic Question: If `/tools` were implemented as a POST route instead of GET, why would the browser refuse to cache it on page reload?"
    ],
    testCasesGuide: "- Call GET `/tools`: verify it returns the full tool list with a 200 status\n- Call POST `/deck/add` with a valid pair: verify a 201 status and the row appears in `inventories`\n- Call DELETE `/deck/remove`: verify the matching row is removed",
    iterationGuide: "Check that none of the three routes silently accept the wrong HTTP verb (e.g. GET also triggering a write) due to a router misconfiguration."
  },
  "l3-s6": {
    partNum: "Part 6",
    partTitle: "Server-Side Parameter Validation",
    objectives: [
      "Validate request parameters on the server before touching the database",
      "Reject invalid quantity/cost values with a 400 status",
      "Never trust a value just because the frontend already checked it"
    ],
    planSpecs: {
      hierarchy: "router.post('/buy-tool') -> if (!Number.isInteger(quantity) || quantity <= 0) return 400 -> else proceed to DB operations",
      variables: "quantity: Number (must be a positive integer)\ncost: Number (must be non-negative)",
      flow: "Request arrives -> server re-validates every numeric parameter regardless of frontend checks -> reject with 400 on any violation -> only then run the database transaction"
    },
    promptGuide: "Write a prompt asking for a `/buy-tool` route that validates `quantity` is a positive integer using `Number.isInteger()`, returning a 400 Bad Request with a clear message if it isn't, before any database operation runs.",
    codeReviewGuide: [
      "Does the validation run and `return` immediately on failure, before any query executes?",
      "Is `Number.isInteger()` used rather than a loose truthy check that would accept `\"5\"` or `-1`?",
      "Socratic Question: If this same check only existed in the frontend form, how could someone bypass it entirely using their browser's DevTools console?"
    ],
    testCasesGuide: "- Submit quantity `-5`: verify 400 and no database write occurs\n- Submit quantity `\"abc\"`: verify 400 rather than a server crash\n- Submit quantity `3`: verify the purchase proceeds normally",
    iterationGuide: "List every numeric or string parameter this route accepts and confirm each one has its own validation check, not just the one seeded in the tutor manual."
  },
  "l3-s7": {
    partNum: "Part 7",
    partTitle: "Row-Level Security Policies",
    objectives: [
      "Enable Row-Level Security on the `inventories` table",
      "Write SELECT and UPDATE policies scoped to `auth.uid()`",
      "Confirm one player cannot read or modify another player's rows"
    ],
    planSpecs: {
      hierarchy: "ALTER TABLE inventories ENABLE ROW LEVEL SECURITY;\nCREATE POLICY ... USING (player_id = auth.uid())",
      variables: "auth.uid(): the authenticated session's user id, provided by the database engine\nplayer_id: the row's owning player, compared against auth.uid()",
      flow: "Any query against inventories -> RLS engine checks the active policy -> row is only returned/writable if player_id = auth.uid() -> otherwise the row is silently excluded"
    },
    promptGuide: "Draft a prompt asking to enable Row-Level Security on the `inventories` table and write a SELECT policy and an UPDATE policy, both restricting access to rows where `player_id = auth.uid()`.",
    codeReviewGuide: [
      "Is RLS actually enabled with `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` (not just policies written but never activated)?",
      "Do both the SELECT and UPDATE policies compare against `auth.uid()`, not a client-supplied player_id parameter?",
      "Socratic Question: If RLS is written but never enabled on the table, why would a query still return every player's rows despite the policy existing?"
    ],
    testCasesGuide: "- Log in as Player A, query inventories: verify only Player A's rows return\n- Attempt to UPDATE a row belonging to Player B while authenticated as Player A: verify it's rejected\n- Temporarily disable RLS: verify the leak reappears, confirming the policy was the actual protection",
    iterationGuide: "Test with RLS both enabled and disabled side-by-side to prove to yourself the policy is what's doing the isolating, not application-layer code."
  },
  "l3-s8": {
    partNum: "Part 8",
    partTitle: "Transaction-Safe Inventory Exchange",
    objectives: [
      "Wrap a credit-deduction-plus-item-insert exchange in a database transaction",
      "Roll back cleanly if any step fails",
      "Always release the database client connection, even on error"
    ],
    planSpecs: {
      hierarchy: "BEGIN -> SELECT credits -> check balance -> UPDATE credits -> INSERT inventory row -> COMMIT (or ROLLBACK on any failure) -> finally release client",
      variables: "client: a checked-out Pool connection\ncredits: Number (player's current balance)",
      flow: "Start transaction -> read current balance -> if insufficient, throw -> deduct credits -> insert the purchased item -> commit; any thrown error triggers rollback instead, and the client is always released in a finally block"
    },
    promptGuide: "Write a prompt asking for a `/purchase-item` route that wraps a credit check, credit deduction, and inventory insert inside `BEGIN`/`COMMIT`, rolling back on any error, and always releasing the pooled client connection in a `finally` block.",
    codeReviewGuide: [
      "Does the route check the player's balance before deducting, and throw if insufficient?",
      "Is `client.release()` inside a `finally` block so it always runs, on both success and failure paths?",
      "Socratic Question: If the server crashed between the credit deduction and the inventory insert with no transaction wrapper, what state would the player's account be left in?"
    ],
    testCasesGuide: "- Purchase with sufficient credits: verify credits deduct and the item appears in inventory in the same commit\n- Attempt a purchase with insufficient credits: verify the transaction rolls back and no partial deduction occurs\n- Force an error mid-transaction (e.g. invalid tool_id): verify credits are unchanged afterward",
    iterationGuide: "Deliberately break the insert step (bad column name) mid-test to confirm the rollback actually restores the original credit balance, not just that it doesn't crash."
  },
  "l3-s9": {
    partNum: "Part 9",
    partTitle: "Git Branching & Merge Resolution",
    objectives: [
      "Develop features on isolated git branches",
      "Resolve merge conflicts by hand rather than discarding either side blindly",
      "Run a peer code-review checklist before merging"
    ],
    planSpecs: {
      hierarchy: "git checkout -b feature/x -> commit changes -> push -> open PR -> peer review -> resolve conflicts -> merge to main",
      variables: "Conflict markers: <<<<<<< HEAD / ======= / >>>>>>> branch-name",
      flow: "Two branches edit the same file region -> merge attempt inserts conflict markers -> developer manually chooses/combines the correct lines -> markers are deleted -> file is staged and committed"
    },
    promptGuide: "Ask the AI to explain, line by line, what a specific merge conflict's `<<<<<<< HEAD` / `=======` / `>>>>>>> branch-name` markers each represent, and draft the combined resolution before applying it yourself.",
    codeReviewGuide: [
      "Are all three conflict marker lines fully removed from the resolved file (not just one of the two sides picked blindly)?",
      "Does the resolution preserve the intent of both changes where they don't actually contradict each other?",
      "Socratic Question: Why does the server crash on startup if a conflict marker line like `<<<<<<< HEAD` is left inside a `.js` file?"
    ],
    testCasesGuide: "- Create a deliberate conflict between two branches on the same route file: verify git flags it as unmergeable automatically\n- Resolve it and run the server: verify no syntax errors from leftover markers\n- Verify `git log` shows a clean merge commit afterward",
    iterationGuide: "Practice a conflict where both sides added genuinely different, needed logic, forcing a real manual merge rather than a pick-one-side resolution."
  },
  "l3-s10": {
    partNum: "Part 10",
    partTitle: "Cloud Deployment Configuration",
    objectives: [
      "Deploy the Express API and PostgreSQL database to a cloud host",
      "Bind production environment variables on the hosting dashboard",
      "Verify the deployed API can reach the deployed database"
    ],
    planSpecs: {
      hierarchy: "Local repo -> git push -> CD pipeline builds -> cloud server boots with production env vars -> connects to managed Postgres instance",
      variables: "Production env vars: DATABASE_URL, JWT_SECRET (set on the host's dashboard, not in code)",
      flow: "Push to main -> hosting provider detects the push -> triggers a build -> new server instance boots reading env vars from its dashboard config -> connects to the cloud database using those vars"
    },
    promptGuide: "Draft a prompt asking to generate a deployment config file (e.g. a Render/Railway blueprint) declaring the web service and its required environment variables, without hardcoding any secret values into the file itself.",
    codeReviewGuide: [
      "Does the deployment config reference environment variable names only, with actual secret values set in the host's dashboard, not the file?",
      "Is the production database URL distinct from any local development URL?",
      "Socratic Question: If the deployed server's `DATABASE_URL` variable is missing or wrong, what specific error would appear in production logs, and how would you trace it back to that cause?"
    ],
    testCasesGuide: "- Deploy with a correct DATABASE_URL: verify the live site loads data successfully\n- Temporarily blank the DATABASE_URL on the host: verify the live site throws a connection error rather than silently failing\n- Verify no secret values are visible in the deployment config file itself",
    iterationGuide: "After first deploy, rotate one credential (e.g. the database password) and confirm updating only the host's dashboard value is enough to keep the app working."
  },
  "l3-s11": {
    partNum: "Part 11",
    partTitle: "Load Testing & Connection Pool Diagnostics",
    objectives: [
      "Simulate concurrent load against the deployed API",
      "Diagnose a connection-pool exhaustion bug from server logs",
      "Guarantee every database client is released, even on error"
    ],
    planSpecs: {
      hierarchy: "try { client = await pool.connect(); ...query...; } catch {...} finally { client.release(); }",
      variables: "pool: shared connection pool with a fixed max size\nclient: a single connection checked out from the pool",
      flow: "Route handler checks out a client -> runs its query inside try -> on error, catches and responds with a status -> finally always releases the client back to the pool, regardless of success or failure"
    },
    promptGuide: "Write a prompt asking for a route that checks out a pooled database client, runs a query inside a try/catch, and always releases the client in a `finally` block so a failed request doesn't leak a connection.",
    codeReviewGuide: [
      "Is `client.release()` placed inside a `finally` block rather than only after a successful query?",
      "Does the catch block respond with an appropriate error status instead of leaving the request hanging?",
      "Socratic Question: If `client.release()` is missing, why does the server start refusing all requests after only a handful of page reloads?"
    ],
    testCasesGuide: "- Send 100 concurrent requests to a route with the release fix: verify the server stays responsive throughout\n- Temporarily remove the `finally` release call and repeat the test: verify the server eventually hangs, reproducing the bug\n- Verify error responses still return a proper status code rather than timing out silently",
    iterationGuide: "Log the pool's active connection count before and after a burst of requests to confirm it returns to baseline once requests complete."
  },
  "l3-s12": {
    partNum: "Part 12",
    partTitle: "Full-Stack Integration Sprint",
    objectives: [
      "Trace a complete request end-to-end across frontend, API, and database",
      "Close any remaining gaps between individually-working modules",
      "Confirm all tables, environment keys, and RLS policies are active together"
    ],
    planSpecs: {
      hierarchy: "Frontend Form -> Express Route -> Server Validation -> DB Transaction -> Response JSON -> UI Redraw",
      variables: "Full integration checklist: DB tables initialized, .env keys loaded, RLS policies enabled, routes wired to the correct frontend calls",
      flow: "Trigger a real user action from the UI (e.g. sign up, then purchase a tool) -> trace it through every layer -> confirm each layer hands off correctly to the next with no silent gaps"
    },
    promptGuide: "Ask the AI to help trace a specific end-to-end flow (e.g. signup → login → purchase) across your frontend, Express routes, and database, flagging any layer where the expected data isn't reaching the next one.",
    codeReviewGuide: [
      "Does every layer in the checklist (DB, env, RLS, routes, frontend) actually get exercised by a single real user action, not tested in isolation only?",
      "Are there any TODO stubs or mock data left over from earlier sessions that need to be wired to the real backend now?",
      "Socratic Question: If registration works but the subsequent purchase silently fails, which specific layer boundary would you check first, and why?"
    ],
    testCasesGuide: "- Run a full signup -> login -> purchase flow live: verify each step succeeds and the final inventory reflects the purchase\n- Deliberately break one env var and confirm you can pinpoint which layer failed from the resulting error\n- Verify RLS is still active throughout (no test-mode bypass left enabled)",
    iterationGuide: "Write a short QA log documenting which integration gap took longest to find, since that's usually the most useful lesson to carry into Level 4."
  },
  "l3-s13": {
    partNum: "Part 13",
    partTitle: "Capstone Defense",
    objectives: [
      "Present the completed Hacking Console architecture end-to-end",
      "Defend specific security and transaction design choices under questioning",
      "Patch a live seeded bug within a time limit"
    ],
    planSpecs: {
      hierarchy: "Full stack: schema.sql (DB) + auth routes + api routes + RLS policies + deployed instance",
      variables: "All Level 3 state integrated: players, hacking_tools, inventories, RLS policies, transaction-wrapped routes",
      flow: "Part A: live presentation of the deployed system -> Part B: tutor-led code audit defense -> Part C: timed live bug patch"
    },
    promptGuide: "Prepare to walk through your full Hacking Console codebase without notes: schema, authentication, validation, RLS policies, and transactions, explaining why each security decision was made.",
    codeReviewGuide: [
      "Can you point to and explain each RLS policy's purpose without looking it up?",
      "Can you explain why the purchase route uses a transaction, using a concrete failure scenario?",
      "Socratic Question: If asked 'what happens if this RLS policy is removed,' can you describe the exact leak that would result?"
    ],
    testCasesGuide: "- Demonstrate signup, login, and a tool purchase live end-to-end\n- Patch the tutor's seeded runtime exception or policy leak within the time limit\n- Defend at least 2 security design choices under direct questioning",
    iterationGuide: "Write down which question from the defense you answered least confidently, to revisit before Level 4."
  },
  "l3-s14": {
    partNum: "Part 14",
    partTitle: "Reflection & Level 4 Planning",
    objectives: [
      "Review your Prompt Journal history across Levels 1-3",
      "Identify which software engineering role interests you most",
      "Set concrete goals for Level 4"
    ],
    planSpecs: {
      hierarchy: "Portfolio review -> role identification -> Level 4 goal list",
      variables: "N/A — reflection session, no new code artifacts",
      flow: "Review past journal versions -> discuss engineering roles -> write 3 concrete goals for Level 4"
    },
    promptGuide: "No AI prompt this session — instead, review your own Prompt Journal entries across all three levels and write a short reflection on how your specification quality changed over time.",
    codeReviewGuide: [
      "Looking back at your Level 1 prompts vs. your Level 3 prompts, what's the clearest difference in specificity?",
      "Which of your own past prompts would you rewrite today, and why?",
      "Socratic Question: What's one AI-generated bug from this level that taught you something you wouldn't have learned from writing the code yourself?"
    ],
    testCasesGuide: "- Confirm you can locate and re-read at least one journal entry from each of Levels 1, 2, and 3\n- Confirm you've written down 3 specific, concrete Level 4 goals (not vague aspirations)",
    iterationGuide: "Revisit this reflection at the start of Level 4 to check whether your stated goals actually shaped what you chose to focus on."
  }
};
