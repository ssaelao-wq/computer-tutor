# Computer Tutor: Teacher & Tutor Guidelines (Level 1)

This guideline is designed for the tutor to lead one-on-one sessions for students aged 13–16. It maps out the exact timeline, board explanations, Socratic prompts, digital sandbox solutions, and homework check criteria for each 2-hour session.

---

## Pedagogical Philosophy (AI-Era Shift)
1. **Never Type For the Student**: Let them run into literal logic errors. The learning occurs when they diagnose *why* a machine did exactly what they wrote instead of what they intended.
2. **Socratic Questioning**: When a student gets stuck, do not give the answer. Ask: *"What did the drone terminal log just say?"* or *"Which line is executed immediately after this loop?"*
3. **No Paper, All Digital**: All notes, blueprints, and homework are logged in the student's in-app **Journal** tab.

---

## 🛠️ Portal Management: Admin Panel, Student Levels & Journals

Before running classes, tutors must familiarize themselves with the administrative controls and workspaces inside the application:

### 1. Student Levels & Navigation Restrictions
* **Configuring Student Levels**: 
  - Access the **Admin Panel** tab (only visible for accounts with the `teacher` role).
  - Use the registration form to create a student profile and select their initial curriculum level (`L1`, `L2`, `L3`, or `L4`).
  - In the student roster table, teachers can click the **Level select dropdown** on any student to dynamically change their level.
* **Navigation Locks**:
  - Setting a student's level to **L1** automatically deactivates tabs for Levels 2, 3, and 4 in the **Quest Files** and **Curriculum Guide** views. 
  - Locked tabs display a padlock (`🔒`) and are disabled to keep students focused on their active level milestones.
  - Tutors bypass these locks so they can click and audit any level tab at any time.

### 2. Interactive Prompt Journals
* **Homework and Notebook Logging**:
  - The **Prompt Journal** tab is a fully interactive text/code editor workspace.
  - All text containers have **automatic text-wrapping** enabled, preventing horizontal overflow logs.
  - Students write their notes, logic schemas, or homework answers inside the **Code Output History** editor.
  - Click **Save Changes** (Blue button) to overwrite the current selected version in the database.
  - Click **Save as New Version** (Green button) to save the current edits as a new draft while keeping previous versions intact.

---

## 🏎️ Level 1 Racing Car Theme: Lab Track (Sessions 1–12)

> **Format note (2026-07-27):** All 12 Level 1 sessions share one consistent **Sandbox + Project Task format**: sandbox exercises per session (5, or 4 where noted below), each with 3 boxes — **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. The **Project Task** milestone (in the Project Journal tab) uses the same 3-box shape, but is always a **related, more open-ended task** than that session's exercises, not a copy of them — see each session's own "Project Task Milestone" section below for exactly how. This replaced the older 10-exercise, single-answer-box format (first trialed on Session 4 on 2026-07-22, then rolled out to the rest of Level 1 on 2026-07-27).
>
> **Grading note (2026-07-30, Sessions 1, 5, 6; extended 2026-08-05 to Sessions 8, 9, 10, 11, 12):** these eight sessions' exercises and Project Tasks are graded by a real AI Auditor (DeepSeek). Their instructions were also rewritten to state the **goal**, not the answer: a student is asked "what should this achieve" and expected to plan and prompt in their own words, rather than being told the exact code/logic to ask for. Sessions 2-4 already went through the same redesign (see their own Content notes below). **Session 7 remains unchanged** (still the original keyword-checked format) — it's the only session left pending this pilot. Alongside this, an **optional "🤖 Generate Code" / "🤖 Generate Answer"** button sits next to "Copy Prompt" in every session except 7 — it calls the same AI server-side as a quick in-platform check, but "Copy Prompt" and the requirement to actually practice with a real AI IDE (ChatGPT/Cursor/Copilot) are unchanged and still the primary path.
>
> **Grading redesign (2026-07-30, later same day):** real student testing found that grading all four boxes for correctness still failed genuinely well-written prompts whenever they targeted a different specific detail than the exercise's intended answer (e.g. a clear, precise prompt correctly detecting a key still failed outright for naming the "wrong" key) — this still felt like a wording/correctness check, not a measure of prompt-writing skill. **Verify now grades ONLY the Prompt box**, on prompt-engineering quality — clarity, specificity, completeness — and gives 2-3 concrete tips for writing better prompts. A prompt is not penalized for happening to solve a different, equally well-specified version of the problem than the one intended.
>
> **Verify gate simplified (2026-08-06):** until now, Verify additionally required Plan, Output Code, and Explain to all be non-empty before it would even check the Prompt — a leftover completion gate from before the grading redesign above, meant to keep students practicing the whole loop even though only the Prompt was scored. Real use surfaced this as confusing (a working prompt + working code still got blocked with "fill in all four boxes"), so the gate now only requires the Prompt box. Plan/Output Code/Explain are still present as practice fields, just no longer required to click Verify. Applies to every Auditor-graded session (S1-S6, S8-S12) — **Session 7 is unaffected**, since it's still keyword-graded across all four boxes, not just the Prompt.
>
> **Milestone note (2026-07-30):** Sessions 5 and 6 are now explicitly framed as one two-week capability arc — *"the car remembers itself, responds to you, and stays safe"* — rather than two disconnected topic weeks (keydown events, then conditionals). Each session's sandbox exercises also dropped their old 5th "combine everything into one capstone" exercise (both are now **4 exercises**, not 5) — that final integration now happens exactly once, for real, in the session's own Project Task, rather than being rehearsed on a throwaway sandbox file first and then repeated on the real one.
>
> **Full-parity pass (2026-08-05):** Sessions 8, 9, 10, and 11 received the same treatment as Sessions 2-6 above — AI Auditor grading, goal-stated instructions, the "🤖 Generate Code" button, and their old 5th "combine everything" capstone exercise dropped (each now **4 exercises**, not 5; that final integration lives once, for real, in the session's own Project Task). **Session 12 is the one exception that keeps all 5 exercises**: its 5th, "Capstone Reflection & the Final QA Sweep," is a personal reflection and whole-level self-diagnostic, not a duplicate of Project Task Lab 12's CONFIG-refactor/Complete-Game-assembly work, so it wasn't dropped. This pass also fixed real bugs found by testing "🤖 Generate Code" against the live AI: Exercise 8.3 and 8.5's own solutions previously broke the Live Preview (a bare, un-wrapped code fragment and a canvas-API hallucination respectively); Exercise 11.4's previously described "gameActive = true" fix, when generated standalone, was found hallucinating a nonexistent `#game-over-panel` element instead of the real `#restart-panel` — all three are corrected below.
>
> **Project continuity:** Sessions 2-3 build the HTML/CSS skeleton (`index.html`, `styles.css`). Starting at Session 4, the Project Task's `game.js` is **one accumulating file** — each session from 4 through 12 opens the *previous* session's own saved code (via the in-app "🔄 Pull Latest" mechanism) and extends it, rather than starting from a fresh template. This is intentional: it's closer to how real software gets built, and it's what lets Session 12's "Complete Game — Assembled" section pull a genuinely working, student-authored build out of their own journal history. The Sandbox *exercises* (separate from the Project Task) remain self-contained per session — each exercise's own Plan/Prompt/Output/Explain boxes don't depend on a previous exercise's answer.

The lab track, aligned to each session's core concept:
- **Lab 0 (Session 1)**: *Project Kickoff & Roadmap* — Hardware/network/web-tech systems briefing, then a planning-only preview of the whole Racing Car Game project ahead.
- **Lab 1 (Session 2)**: *HTML Document Skeleton* — Base containers (Track Arena, Player Car, Dashboard Panel).
- **Lab 2 (Session 3)**: *CSS Sizing & Coordinates Layout* — Sizing '#game-track', absolute position '#player-car' and styled road dividers with white dashes.
- **Lab 4 (Session 4)**: *Difficulty-Scaling State System* — Variables for position state, speed metrics, score registers, and a lives count, plus a student-designed score-driven difficulty rule.
- **Lab 5 (Session 5)**: *Keyboard & Click Control Interfaces* — Keydown listeners registering steering moves (Arrows), plus on-screen ◀/▶ buttons that trigger the same shared movement action, extending Session 4's game.js. First half of the "car remembers itself and responds to you" milestone (see note above); 4 sandbox exercises, not 5.
- **Lab 6 (Session 6)**: *Safety Guards & the Full Control System* — Boundary checks clamping coordinates to keep the player on the road, plus a full accelerate/decelerate/reverse speed system with on-screen ▲/▼ buttons, both derived from the student's own track width. Second half of the milestone begun in Session 5; 4 sandbox exercises, not 5.
- **Lab 7 (Session 7)**: *Obstacle Loop Generation* — Spawning highway lane markers dynamically using loops, spaced to the student's own track height.
- **Lab 8 (Session 8)**: *Modular Control Functions* — Refactoring movement logic into a namespaced Controller object.
- **Lab 9 (Session 9)**: *Timer Loops & Animations* — requestAnimationFrame recursive loops for redraw rendering.
- **Lab 10 (Session 10)**: *Collision Detection Overlap Math* — Mathematical overlap bounding checks, wired into the lives system.
- **Lab 11 (Session 11)**: *DOM HUD Visual Updates* — Score AND lives states wired to DOM text updates and restart prompts.
- **Lab 12 (Session 12)**: *Concept-Mastery Labs & Final Assessment* — Config-driven tunables gathered from the student's own accumulated constants, plus the "Complete Game — Assembled" review of the student's own saved HTML/CSS/game.js.

---

## Session 1: "Systems Briefing: Hardware, Networks & the AI-Era Dev Loop"

> **Content note (2026-07-27, updated 2026-07-30):** This session's topic and sandbox format were both rewritten from the original "Literal Logic & Digital Infiltration" autopilot-car content. The topic changed on 2026-07-20 (a systems/hardware/network briefing that sets up the whole Racing Car Game project); the sandbox format changed on 2026-07-27 along with the rest of Level 1 (see the **Lab Track** note above) — 5 exercises in the reduced Plan/Prompt+Output/Explain shape instead of 10 single-answer exercises. On 2026-07-30, this session was one of the first three (with Sessions 5 and 6) moved to real AI-Auditor grading and goal-stated instructions — see the **Grading note** above.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Case File Briefing — tracing a keypress from hardware to screen
* **00:15 - 00:35 | Board Lesson**: From Silicon to Screen — hardware, the client-server model, and the web trio
* **00:35 - 01:00 | Design Phase**: System & Network Field Map + Racing Car Game roadmap preview
* **01:00 - 01:30 | Sandbox Lab**: 5 Plan/Prompt/Explain exercises on hardware, networks, and the 5-Step Loop
* **01:30 - 01:50 | Assessment**: Reviewing AI answers against the case-file scenarios
* **01:50 - 02:00 | Ethics Discussion**: Who's responsible for AI-generated bugs?

### 1. Board Lesson Talking Points
* **Hardware vs. Software**: Draw the physical stack — CPU, RAM, storage, GPU — then contrast with software (the OS, the browser, game code) that *runs on* that hardware. Relate to devices students already own: a phone's storage filling up, a laptop slowing down with too many tabs open.
* **Resource Bottlenecks**: A system feels slow when ONE resource is maxed out. High CPU % = the processor is the bottleneck. High RAM use (e.g. loading hundreds of images at once) = a memory bottleneck. Naming which resource is struggling is the first diagnostic skill.
* **The Client-Server Model**: Trace a single request — Browser (Client) sends a request → Server looks up data → Server sends back a response → Browser displays the page. This request/response cycle repeats for every page load.
* **The Web Trio**: HTML = structure/content, CSS = style/appearance, JavaScript = behavior/interactivity. A bug report of "content is there but unstyled" almost always means the CSS file failed to load — a diagnostic pattern students will use for the rest of the course.
* **The 5-Step AI-Era Development Loop**: Plan & Design → Write the AI Prompt → Review & Explain → Test & Break It → Iterate & Improve. Every remaining session in this course repeats this loop — introduce it now since Session 2 uses it immediately.

### 2. Socratic Prompting
* *"The racing game loads 500 full-resolution car images into memory before the race even starts, and it crashes on low-end laptops. Which hardware resource is being overloaded?"* (RAM/memory — loading many large files at once is a classic memory bottleneck, the same failure mode as opening too many browser tabs).
* *"A teammate says the game 'feels laggy' and pastes a resource report: CPU 91%, RAM 38%, Disk 12%. Which resource is the bottleneck?"* (CPU — it's the one sitting near 100%, meaning the processor itself can't keep up).
* *"The game loads, you can read 'Score: 0' and see the buttons, but everything is plain black text on a white background with no layout. Which of HTML/CSS/JS most likely failed to load?"* (CSS — the content clearly rendered, so HTML and JS ran; nothing is *styled*, which is exactly CSS's job).

### 3. Digital Sandbox Exercises & Solutions

Students complete **5 exercises**, each with 3 boxes: **1) Plan & Design** (a plain-language answer, in the student's own words), **2) Write the AI Prompt & Paste the Output** (the student's own prompt, then the AI's actual written answer pasted into Output — an optional "🤖 Generate Answer" button can also fill Output directly as a quick check, alongside "Copy Prompt" for running it in a real AI tool), **3) Explain the Output** (the student's own summary of what the AI said). This session is purely conceptual — there is no code to run, so there is no live-preview panel. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness) — not whether it names any specific word/number, and not the Plan/Output/Explain boxes (those remain practice, ungraded).

* **Exercise 1.1: Hardware vs. Software, and the Resource Bottleneck**
  * *Goal given to the student:* figure out which physical resource is actually struggling, given a real snapshot (CPU 91%, RAM 38%, Disk 12%), and justify the answer.
  * *A strong answer shows:* the Plan box correctly sorts the CPU, game.js, RAM, the OS, the monitor, and the browser into HARDWARE vs. SOFTWARE; the Prompt/Output/Explain boxes correctly identify CPU as the constrained resource and explain why (relative to its own capacity, not the others) — in the student's own words, not a fixed phrase.
  * *Why:* Diagnosing a bottleneck from a resource snapshot is the first real "read the system, not just the code" skill of the course.
* **Exercise 1.2: The Out-of-Memory Crash**
  * *Goal given to the student:* figure out why loading 500 large images at once could overload a low-end laptop, and propose a real software-side fix.
  * *A strong answer shows:* a plan/explanation that correctly reasons all 500 images sit in RAM at once even though only a few are visible, and a fix that's genuinely compress-the-images or lazy-load-them (not "buy more RAM").
  * *Why:* The fix isn't "buy more RAM" — it's changing *how the software behaves*, the software-side half of hardware/software thinking.
* **Exercise 1.3: The Client-Server Request Cycle**
  * *Goal given to the student:* understand what actually happens between the browser asking for a page and it appearing on screen.
  * *A strong answer shows:* the plan correctly sequences client sends request → server looks up data → server responds → browser displays the page, and the explanation says why the response step specifically matters — described in the student's own words, not a memorized four-word list.
  * *Why:* Every webpage load — including the Racing Car Game — is this exact conversation between two computers.
* **Exercise 1.4: The Web Trio & the Missing-CSS Bug**
  * *Goal given to the student:* diagnose which of HTML/CSS/JS most likely failed, given a bug report ("content and buttons visible, but plain black-on-white with no layout").
  * *A strong answer shows:* correctly describing each technology's job, and an explanation that correctly names CSS as the culprit *because* the symptom is purely visual, not structural or behavioral.
  * *Why:* Connects the web-trio concept directly to a real, recognizable bug symptom.
* **Exercise 1.5: The 5-Step AI-Era Loop, Applied**
  * *Goal given to the student:* know the 5-step process well enough to describe it before relying on it next session.
  * *A strong answer shows:* the Plan box correctly names all 5 steps in order (this one genuinely is a recall task); the Explain box gives a specific, personal reflection on which step the student expects to find hardest, and why — there's no single correct answer to that part, only a genuine one.
  * *Why:* This loop repeats every session for the rest of the course — memorizing it now pays off immediately in Session 2.

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 0: Project Kickoff & Roadmap") is a **planning document, not an AI-generation step** — there is no code yet. It uses the same 3-box shape as the sandbox above, but Box 2's "Output" is the student's own written project brief (an AI prompt is optional scaffolding here, not a requirement), not AI-generated code. An optional "🤖 Get AI Feedback" button (advisory only — it never blocks Save) gives the student the same AI-Auditor read on their roadmap before the tutor reviews it.

1. **Plan & Design** (single box)
   - *Expected:* "A top-down 2D highway racing game: a scrolling road with lane dividers, a player car controlled with the arrow keys, oncoming obstacle cars to dodge, a live score counter, and a game-over screen when you crash. Parts needed: the road/track, the player's car, obstacle cars, a scoreboard, a game-over overlay, and the game state (score, speed, whether the game is running). Sessions 2-3 build the visual pieces (HTML/CSS); Sessions 4-12 build the behavior (JavaScript)."
   - *Why:* Seeing the whole finished game before writing a single line of code is the point — later sessions each build one named piece of this same plan.

2. **Prompt & Output**
   - *Expected:* the student skims the Session 2-12 titles in the Curriculum tab and writes, in their own words, what each session seems to contribute to the finished game — e.g. "Session 2: HTML skeleton. Session 3: CSS styling. Sessions 4-12: JavaScript — variables, controls, boundaries, loops, functions, animation, collisions, DOM updates."
   - *Why:* This is a planning exercise, not a code-generation one — the "output" is the student's own roadmap reasoning, not something pasted from an AI tool.

3. **Explain the Code** (Explain the Plan, for this session)
   - *Expected Socratic answer* — *"Each session's homework extends the previous session's own file instead of starting over. Why might building it this way — one accumulating file — be closer to how real software gets built than 12 separate, unconnected exercises?"* → Real projects are built incrementally on top of existing code, not rewritten from scratch each time; carrying one file forward teaches students to build on — and not break — their own prior work, the same discipline professional codebases require.

* **Homework Evaluation Checklist**: the student lists all the major visual parts of the finished game (track, player car, obstacles, scoreboard, game-over screen); can name which technology builds which part (HTML = structure, CSS = look, JavaScript = behavior); and can point to which session number will first make something appear on screen (+50 XP).

---

## Session 2: "Starting the Game: HTML Structure & Basic Elements"

> **Content note (2026-07-30):** This session was moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above) — **Verify now grades the Prompt box only**, on clarity/specificity/completeness, not whether it names any specific word. Its old 5th "combine everything" capstone exercise (2.5, "The Complete Skeleton") was dropped as a duplicate of this session's own Project Task, which already asked for the same combined structure plus more (the obstacle car and hidden overlay). The sandbox now has **4 exercises**, not 5.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: DOM Tree Construction Game
* **00:15 - 00:35 | Board Lesson**: HTML Tags, Elements, and DOM Nesting Architecture
* **00:35 - 01:00 | Design Phase**: Visualizing the Game Layout on Paper
* **01:00 - 01:30 | Sandbox Lab**: Assembling the Track and Car Elements
* **01:30 - 01:50 | Assessment**: Nesting Audit Exercise
* **01:50 - 02:00 | Ethics Discussion**: Semantic HTML and Screen Readers Accessibility

### 1. Board Lesson Talking Points
* **The DOM Tree Structure**: Explain the Document Object Model as a family tree. The `body` is the grandparent, the `div` track container is the parent, and the player and obstacle cars are sibling children nested inside it.
* **HTML Elements Anatomy**: Explain opening tags, closing tags, attributes (classes/IDs), and content.
* **Nesting and Scope**: Explain that a nested element is visually bound by its parent. If the track container moves, all nested cars move with it.

### 2. Socratic Prompting
* *"If we close the track container tag BEFORE declaring the player car tag, are they still parent and child? Where is the car in the DOM tree?"* (No, they become siblings. The car is no longer inside the track container).
* *"Why do we use classes for cars but an ID for the track?"* (Classes are for reusable categories of things, IDs are for unique elements).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th "combine everything" capstone was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. The student pastes the *real* HTML their AI tool generated into Output Code (not a typed "model answer"), and the Interactive Live Preview always renders that pasted HTML live. **Verify grades the Prompt box only** — clarity, specificity, completeness — not the Plan/Output Code/Explain boxes, and not whether it names any specific word.

* **Exercise 2.1: The Track & Car Skeleton**
  * *Goal given to the student:* create the nested structure a browser needs — a game-track container with a player-car nested inside it.
  * *What a good prompt looks like:* clearly describes the parent/child relationship (game-track containing player-car), in the student's own words.
  * *Why:* Same blueprint-first thinking as before — decide the nesting before a tag is written.
* **Exercise 2.2: Selectors & the Scoreboard**
  * *Goal given to the student:* build a scoreboard structure where the score number is uniquely identifiable (id score-val).
  * *What a good prompt looks like:* describes the dashboard/heading/score nesting and that the score element needs a unique id.
  * *Why:* Cements "id = the one unique thing" — `score-val` needs to be unique because later JavaScript searches for that exact id to update the score.
* **Exercise 2.3: The Unclosed Tag Bug Hunt**
  * *Goal given to the student:* given the exact buggy code (`<div id="game-track"><div id="player-car"></div>` — one closing tag missing), diagnose and fix it.
  * *What a good prompt looks like:* names the specific bug (a missing closing tag) and asks for a fix, not just "fix the HTML."
  * *Why:* The most common real HTML bug — an unclosed tag with no console error, only a broken layout.
* **Exercise 2.4: Lane Dividers via Class**
  * *Goal given to the student:* add a lane divider using the right kind of attribute for something that can repeat (a class, not an id).
  * *What a good prompt looks like:* specifically asks for a class-based (not id-based) element and explains why.
  * *Why:* Rule of thumb: id = the one unique thing; class = a repeated category of things.

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 1: HTML Document Skeleton") tracks the student's own project file, separate from the Sandbox exercises above, and is now the **one place** the complete skeleton comes together (the sandbox no longer rehearses this same combination first). It uses the same 3-box shape: **1) Plan & Design** (single box), **2) Prompt & Output Code** (side by side, with a live HTML preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Expected:* "A highway-view racing screen: a vertical road area taking up most of the screen, with a small scoreboard panel above it showing the score. Parts needed: a road area, a player's car, an obstacle car, a lane divider line, a hidden game-over overlay, and a scoreboard panel. Information to track: the score, how fast the car is going, and whether the game is currently running."
   - *Why:* Same plain-language, no-tag-names constraint as before — describe what's needed and what to remember before any markup.

2. **Prompt & Output Code**
   - *Goal given to the student:* write your own prompt for the complete foundation this file needs, going beyond the sandbox drill by including two things it never covered — an obstacle car (id `obstacle`) and a hidden game-over overlay (id `restart-panel`, hidden via a class named `hidden`) that a later session will reveal. These exact names matter, since every later session's code looks for them.
   - *Expected Output Code:* the AI's real generated HTML, pasted in and rendered live in the preview — including `#game-track`, `#player-car`, `#obstacle`, `.lane-divider`, `#restart-panel.hidden`, and `#dashboard`/`#score-val`. (An optional "🤖 Generate Code" button can fill this in as a quick in-platform check; "Copy Prompt" + a real AI tool is still the primary path.)
   - *Why:* The Project Task deliberately asks for **more than the exercises covered** — the obstacle and hidden restart panel aren't in any sandbox exercise, so a straight copy-paste from the exercises is visibly incomplete here.

3. **Explain the Code**
   - *Expected checklist:* all tags open/close correctly (especially divs); `player-car` and `obstacle` are both nested inside `game-track`; the scoreboard uses `id="score-val"`.
   - *Expected Socratic answer* — *"'restart-panel' has to exist in the HTML now, even though nothing shows it for many sessions yet. Why build it now instead of waiting until the session that actually needs it?"* → Real projects build their full data/structure skeleton early so later features have something to hook into — adding `restart-panel` now means Session 11's reveal-on-crash logic has a real element to target, instead of needing an HTML change deep into the project.

* **Homework Evaluation Checklist**: `#game-track` exists with `#player-car` and `#obstacle` both nested inside it; `#restart-panel` exists and carries a `hidden` class; `#dashboard` exists with `#score-val` inside it displaying `0`.

---

## Session 3: "Styling the Track & Player Car: CSS Lanes & Visuals"

> **Content note (2026-07-30):** This session was moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above) — **Verify now grades the Prompt box only**. Its old 5th exercise (3.5, "Dashed Divider & Flex Dashboard") was dropped: both techniques it taught (a dashed lane divider, a flex-laid-out dashboard) were already independently required by this session's own Project Task, so — consistent with how the Project Task already teaches the obstacle/restart-panel styling the sandbox never covers — these two now live exclusively in the Project Task's own guidance. The sandbox has **4 exercises**, not 5.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Match CSS Selectors to Visual Elements
* **00:15 - 00:35 | Board Lesson**: CSS Box Model, Coordinates, Relative vs. Absolute Positioning
* **00:35 - 01:00 | Design Phase**: Layout Coordinate Mapping
* **01:00 - 01:30 | Sandbox Lab**: Styling the Road, Lanes, and Car Sprites
* **01:30 - 01:50 | Assessment**: Position Offset Debugging
* **01:50 - 02:00 | Ethics Discussion**: Standardized Layouts & User Interfaces Inclusivity

### 1. Board Lesson Talking Points
* **Coordinate Systems**: Top-left of the screen is `(0, 0)`. X increases to the right, Y increases downwards.
* **Relative vs. Absolute Positioning**:
  - `position: relative` on a parent (the track) anchors the viewport coordinate space.
  - `position: absolute` on children (the cars) lets us position them precisely using `top`, `bottom`, `left`, and `right` relative to that parent container boundary.

### 2. Socratic Prompting
* *"Why does the car fly off to the top-left of the browser window if we forget relative positioning on the track container?"* (Because absolute elements look for the nearest positioned ancestor; if none is found, they align to the body window).
* *"If the track is 390px wide with 3 lanes of 130px each, and the car snaps to lane positions 0, 130, and 260, what is the maximum left coordinate value before the car drives off the right edge?"* (260px, the rightmost lane position).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th exercise was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. The Interactive Live Preview renders the pasted CSS live against the track/car skeleton for every exercise except Exercise 3.2, which is a conceptual selectors question with no code to run. **Verify grades the Prompt box only** — clarity, specificity, completeness.

* **Exercise 3.1: Arena Sizing Specs**
  * *Goal given to the student:* decide on and apply your own track dimensions (width, height, background color).
  * *What a good prompt looks like:* states specific chosen dimensions and colors, not a vague "style the track."
  * *Why:* Decide the target numbers before writing CSS syntax — the same design-first thinking as every other session.
* **Exercise 3.2: Selectors — # vs. .**
  * *Goal given to the student:* understand when to use an id selector (#) vs a class selector (.).
  * *What a good prompt looks like:* asks for an explanation of both selector types with an example, not just "explain CSS selectors."
  * *Why:* A `#` targets the ONE element with that id; a `.` targets EVERY element with that class — mixing them up is why styles "don't apply."
* **Exercise 3.3: The Drifting Car Bug**
  * *Goal given to the student:* given the exact buggy CSS (`#game-track { width: 390px; height: 500px; background-color: #333; }`, car drifts to the browser window), diagnose and fix it.
  * *What a good prompt looks like:* names the specific missing property, not just "fix the CSS."
  * *Why:* An absolute-positioned element measures from the nearest *positioned* ancestor — without one, it measures from the whole browser window and flies to the corner.
* **Exercise 3.4: Positioning the Car**
  * *Goal given to the student:* position the car centered near the bottom of your own chosen track width from Exercise 3.1.
  * *What a good prompt looks like:* shows the student's own centering math and states the exact position values that follow from it.
  * *Why:* `bottom: 20px` sits the car near the bottom edge; centering math changes with whatever track width the student chose.

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 2: CSS Sizing & Coordinates Layout") tracks the student's own stylesheet, styling their **own Session 2 file** (not a fresh starter), and is now the **one place** the dashed divider and flex dashboard are taught at all (the sandbox drill never covers them — consistent with how it already never covered the obstacle/restart-panel styling either). It uses the same 3-box shape: **1) Plan & Design** (single box, shown alongside a read-only reference to the student's Session 2 HTML), **2) Prompt & Output Code** (side by side, with a live CSS preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Expected:* "A dark 2-lane-divider highway, sized however I like (390-430px wide, 480-520px tall), with a white dashed line down the middle. A car sits near the bottom-center, an obstacle car styled the same way, and a full-screen game-over overlay waits invisible behind everything. The scoreboard sits above the road as a small horizontal bar."
   - *Why:* Unlike the sandbox (which hands the student 390/500 as the example), the Project Task explicitly invites the student to choose their **own** track dimensions within a range — testing whether they understand the *centering formula*, not just the specific numbers 390/165.

2. **Prompt & Output Code**
   - *Goal given to the student:* write your own prompt to style your own Session 2 file (not a fresh blank one). Choose the track's exact dimensions, center #player-car near the bottom of that width, add a dashed .lane-divider down the center, and style #obstacle and #restart-panel — the two elements the sandbox drill never covered.
   - *Expected Output Code:* the AI's real generated CSS, pasted and rendered live — including the student's own track width/height, a correctly-centered `#player-car`, `#obstacle`, `.lane-divider`, `#restart-panel`, and the dashboard laid out with flex. (An optional "🤖 Generate Code" button can fill this in as a quick in-platform check; "Copy Prompt" + a real AI tool is still the primary path.)
   - *Why:* Because the student chose their own track width in Step 1, their `#player-car` centering offset will differ from the sandbox's 165px — the Review step below specifically checks that the math was actually redone, not copied.

3. **Explain the Code**
   - *Expected checklist:* `#game-track` has `position: relative`; `#player-car`'s left offset actually centers it inside the **student's own** track width (not assumed to be 165px); `#restart-panel` covers the whole track while its `hidden` class still keeps it invisible.
   - *Expected Socratic answer* — *"What happens if `#game-track` loses `position: relative`? Which coordinate box will the browser calculate offsets against?"* → Without a positioned ancestor, `#player-car`'s absolute offsets are calculated against the browser window/body instead of the track, so it visually "flies" to the corner — the same failure sandbox E3.3 has the student fix directly.

* **Homework Evaluation Checklist**: `#game-track` has a fixed width/height the student chose and `position: relative`; `#player-car` is absolute-positioned and visually centered inside *their* track (not assumed to be exactly 165px); `.lane-divider` uses dashed `border-left`; `#obstacle` and `#restart-panel` both have real styles, with `#restart-panel` staying invisible while `hidden` is applied; `#dashboard` uses flex layout with `space-between`.

---

## Session 4: "Tracking Game State: JS Variables & Math"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Data Types Classification Game
* **00:15 - 00:35 | Board Lesson**: Primitive Types, Declarations (`let`, `const`), and State Tracking
* **00:35 - 01:00 | Design Phase**: State Chart Mapping
* **01:00 - 01:30 | Sandbox Lab**: Declaring Positions, Speeds, and Score Metrics
* **01:30 - 01:50 | Assessment**: Value Shadowing Diagnostics
* **01:50 - 02:00 | Ethics Discussion**: Immutable Data Security in Transactions

### 1. Board Lesson Talking Points
* **Let vs. Const**: Use `let` for values that change (car coordinates, score). Use `const` for values that remain static (track width, car dimensions, API keys).
* **JS Primitive Types**: Numbers (coordinates, speed), Strings (player names, active states), Booleans (game active toggle).

### 2. Socratic Prompting
* *"Should the player car's Y coordinate be declared with let or const? Why?"* (It should be const if the car only moves horizontally left/right, but let if it can move up and down).
* *"What happens if we declare gameActive = "yes" as a string instead of true as a Boolean? What security logic leaks does this present?"* (Booleans are strict binary flags. Strings are mutable, prone to spelling errors, and consume more memory).

### 3. Digital Sandbox Exercises & Solutions

**Format note (updated 2026-07-30):** Session 4 has **4 exercises** (the old 5th, "The Complete Variable Registry," was dropped as a duplicate of work the Project Task already assumes — see below), each with **3 input boxes**: (1) **Plan & Design**, (2) **Writing Prompt** and **Output Code** side by side, (3) **Explain the Output Code**. The student pastes the *real* code their AI tool generated into Output Code. **Verify grades the Prompt box only** — clarity, specificity, completeness, not exact wording (see the Lab Track's **Grading note** above). **Note on the live preview:** the preview shows a **Console Output** panel (left) and a **Verification Feedback** panel (right), split so the two never interleave — this session's code is variables & math only and never touches the DOM, so there's no racing-game graphic here; the real result is whatever the code prints via `console.log` (a blank Console Output is not a failure — not every exercise needs to print something).

* **Exercise 4.1: The Core State Variables** — Declare `carX`, `speed`, `score`, `gameActive`.
  * *Goal given to the student:* declare the game's core mutable state — the values that change during play.
  * *What a good prompt looks like:* names each value it wants declared and states they're all mutable (`let`), not just "make some variables."
  * *Why:* Name what changes before asking the AI for it — design-first thinking, now inside one exercise.
* **Exercise 4.2: Constants and the Lives Count** — Fixed track/lane width plus a new `lives` value.
  * *Goal given to the student:* declare the fixed values plus a new mutable lives count.
  * *What a good prompt looks like:* distinguishes which values are fixed (`const`) from the new mutable `lives` value, and states its starting count.
  * *Why:* Tests that "starts at a fixed-looking number" isn't the same as "never changes" — `lives` will decrement on a crash in a later session.
* **Exercise 4.3: Math Increments on Game State** — Score and speed changing during play, in a way the student decides.
  * *Goal given to the student:* make score and speed change during play, in a way you decide.
  * *What a good prompt looks like:* states specific amounts/operations for score and speed, not just "make them go up."
  * *Why:* Predicting a result by *reading* code before running it is the core Review skill; the pasted Output Code's console.log then lets the student confirm their own prediction against a real run.
* **Exercise 4.4: The Quoted-Number Bug Hunt** — `let speed = "10"; speed += 5;` produces `"105"` instead of `15`. Fix it.
  * *Goal given to the student:* given the exact buggy code, figure out why it produces the wrong result, then fix it.
  * *What a good prompt looks like:* names the specific bug (a quoted number) and the desired fix, not just "fix the math."
  * *Why:* This is the session's signature bug made concrete: with a String, `+=` glues text instead of adding.

* **Homework Evaluation Checklist**: All four boxes filled in per exercise; Output Code pastes read like real AI output (not the sandbox's own placeholder text); Explain boxes name the *reason*, not just the result (e.g. E4.4's explanation should say *why* the quotes broke the math, not just restate "105 became 15").

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card is "Lab 4: Difficulty-Scaling State System" — **Plan & Design**, **Prompt & Output Code** (with a live Console Output panel, the same execution sandbox as the exercises above, plus an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), and **Explain the Code**.

Unlike the sandbox exercises (which each declare one piece of the registry), this task is deliberately open-ended: extend the session's registry with **one new value the student designs themselves** — e.g. a `difficultyLevel` — that changes once `score` crosses a threshold the student picks, and that visibly affects another value (commonly `speed`). No exercise spells out the exact rule, so simply combining the exercises' own declarations does **not** satisfy this task on its own — it's missing the entire conditional-logic layer being graded here.

1. **Plan & Design** (single box)
   - *Expected:* the student names their own new value (e.g. `difficultyLevel`), states what score threshold triggers it, and what it should affect and by how much — e.g. "every 50 points, difficultyLevel goes up by 1, and speed increases by 5 per level."
   - *Why:* there's no single correct threshold — grading is on whether the student made and can defend a real decision, not on matching a specific number.

2. **Prompt & Output Code** (side by side, with live Console Output below)
   - *Expected prompt:* describes the student's own rule in plain language and asks the AI to implement it as an extension of the existing registry (`carX`, `speed`, `score`, `gameActive`, `lives`).
   - *Expected Output Code:* a new `let` value plus a conditional (`if`) that checks `score` against the student's chosen threshold and updates another value — pasted from what the AI actually generated, then run live in the Console Output panel to confirm it actually executes/prints as expected. (An optional "🤖 Generate Code" button can fill this in as a quick in-platform check; "Copy Prompt" + a real AI tool is still the primary path.)
   - *Why:* the AI can write the code, but only the student can supply the design decision (which threshold, which effect) — that's the part a generic prompt can't produce on its own.

3. **Explain the Code**
   - *Expected:* the student walks through their own conditional in plain words and defends their threshold choice.
   - *Expected Socratic answer* — *"What happens to your rule if score can jump by more than 1 at a time (e.g. a bonus of +5)?"* → A plain `===` threshold check can be skipped over entirely; the fix is a `>=` comparison (or an explicit "already triggered" flag) so the rule still fires even if score jumps past the exact threshold value.

* **Homework Evaluation Checklist**: the new value is genuinely the student's own design (a threshold/effect not lifted from any exercise), it's declared with `let` (since it changes), it visibly affects a second value when run in the Console Output panel, and the explanation defends the student's specific numbers rather than restating the assignment.

---

## Session 5: "Steering the Car: JS Keydown Event Listeners"

> **Content note (2026-07-30):** This session (with Session 6) now forms one explicit two-session capability milestone — *"the car remembers itself, responds to you, and stays safe"* — rather than two separate, disconnected topic weeks. It was also moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above), and its old 5th "combine everything" capstone exercise was dropped: the sandbox now has **4 exercises**, and that final integration happens exactly once, for real, in the Project Task below.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Intercepting Inputs Keyboard Mapping
* **00:15 - 00:35 | Board Lesson**: Event Listeners, Key Codes, and State Updates
* **00:35 - 01:00 | Design Phase**: Inputs Routing Diagrams
* **01:00 - 01:30 | Sandbox Lab**: Key Press Triggers Steering Motion
* **01:30 - 01:50 | Assessment**: Event Target Verification
* **01:50 - 02:00 | Ethics Discussion**: Software Layout Controls Standards for Left-Handed Players

### 1. Board Lesson Talking Points
* **Event Listeners**: Explaining browser loops. The browser listens for actions and passes an event object payload containing the key name.
* ** Stepping the State**: When "ArrowLeft" is detected, we decrement `carX` by a speed offset variable.

### 2. Socratic Prompting
* *"Why does the car only move when we press keys? How does the browser know WHICH key was pressed?"* (The browser registers key events and sends key payload variables `event.key`).
* *"If the car snaps between lanes that are 130px apart, how do we write the variable updates for steering right and left?"* (`carX += 130` and `carX -= 130`).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th "combine everything" capstone was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. The Interactive Live Preview is the **Live Racing Game Preview** (click inside it, then press arrow keys to steer) — the student's pasted Output Code runs live against the real racing-game DOM, split into a left "Console Output" panel and a right "Verification Feedback" panel so the two never interleave. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness) — not the Plan/Output Code/Explain boxes, and not whether it names any specific word/number.

> **Content note (2026-07-30, later same day):** Real student testing showed Exercise 5.1's AI-generated solution already produces a near-complete steering handler (detects the key, handles both directions, moves the DOM element) — because the exercise now correctly requires reacting to both ArrowLeft/ArrowRight. That made the original Exercises 5.2-5.4 (the "left" vs "ArrowLeft" string bug, adding the ArrowRight branch, the missing `px` unit) redundant — the student had usually already solved all three inside their own Exercise 5.1 answer. The teacher pointed out that a first attempt at replacing them ("Ignoring the Other Keys") was itself hollow — "do nothing for other keys" requires no code at all, since an unhandled key is already a no-op. Exercises 5.2-5.4 were rewritten a second time, per the teacher's own direction, around genuinely new key-handling and DOM ground.

* **Exercise 5.1: Reading the Key Pressed**
  * *Goal given to the student:* make your code detect exactly which key was pressed, and prove it works.
  * *What a good prompt looks like:* clear and specific about the outcome — e.g. asking for a keydown listener that reports the key, in the student's own words. (Verify grades the Prompt box only — see the Grading redesign note above.)
  * *Why:* Every keypress fires a `keydown` event and the browser hands the code an object with the key name — the one fact this whole session depends on.
* **Exercise 5.2: Detecting All Four Directions**
  * *Goal given to the student:* extend your Exercise 5.1 detection to also recognize ArrowUp and ArrowDown, proving all four arrow keys are correctly identified — a practice drill; the real game still only steers left/right.
  * *What a good prompt looks like:* specific about extending the existing handler to two more named keys, not just "handle more keys."
  * *Why:* Practicing recognition of more than two keys, and extending existing code rather than rewriting it from scratch.
* **Exercise 5.3: Different Distances Per Direction**
  * *Goal given to the student:* track a horizontal and a vertical running number separately — left/right change it by 20, up/down by 10 — and log both after every keypress (no visual up/down movement exists in this sandbox, so this is tracked and logged, not rendered).
  * *What a good prompt looks like:* names both tracked values, their starting points, and the exact amount each direction changes them by.
  * *Why:* Each direction carrying its own distinct numeric behavior, and managing two independent pieces of state from one handler.
* **Exercise 5.4: Pause with Spacebar**
  * *Goal given to the student:* given the sandbox's existing hidden overlay element (`#restart-panel`, currently "GAME OVER, Press Space to Restart"), make pressing Space reveal it with a "Paused" message instead. The exercise text tells the student the overlay is hidden via a CSS class, not an inline style, so the reveal has to defeat the class itself — plainly setting `style.display` won't override it.
  * *What a good prompt looks like:* specifies both the visibility change and the text change, and — because the exercise flags the CSS-class detail above — asks the AI to remove the `hidden` class (`classList.remove`) rather than just setting `style.display` directly, which silently does nothing against this sandbox's `.hidden { display: none !important; }` rule.
  * *Why:* Reusing an existing DOM element for a new purpose (toggle visibility + change text) — a preview of the Space-key restart mechanic Session 11 builds for real. (Found and fixed 2026-08-05: the exercise originally didn't warn about the CSS class, so a natural AI-generated `style.display` fix looked plausible but never actually revealed the overlay in the Preview.)
  * *Why:* Introduces the DRY/named-constant habit in a self-contained way — a lead-in to reusing a real named constant (`LANE_WIDTH`) in the Project Task below, and in Session 7+'s constants.

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 5: Keyboard & Click Control Interfaces") tracks the student's own project script — this session **extends the student's own game.js from Session 4**, not a fresh starter. **Deliberately not a repeat of the sandbox exercises**: the exercises are keyboard-only (detect keys, log values), so the Project Task adds a second input path — on-screen ◀/▶ buttons — that must produce the exact same movement as the keyboard, which pushes the student to factor the steering move into one shared action rather than duplicate it. It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Goal given to the student:* add two on-screen buttons, '◀' and '▶', that steer the car exactly like the arrow keys already do. Work out what changes now that there are TWO ways to trigger the same movement — should the steering logic live inside the keydown handler where clicks can't reach it, or somewhere both can call it?
   - *A strong answer shows:* recognizing the movement itself (change `carX` by `LANE_WIDTH`, write it to `style.left`) needs to be pulled out into one shared piece both the keydown handler and the two button clicks can call, rather than writing it three times.
   - *Why:* Ties directly back to this session's own Ethics discussion (accessible alternate inputs, Xbox Adaptive Controller) — a discussion prompt becomes a real, working feature, and gives students their first real reason to factor repeated logic into one reusable action.

2. **Prompt & Output Code**
   - *Goal given to the student:* write your own prompt for adding the on-screen buttons, making sure it tells the AI to reuse a single shared movement action instead of writing the steering logic three separate times, and to reuse existing `carX`/`LANE_WIDTH` from Session 4.
   - *A strong answer shows:* Output Code with one function (e.g. `steerCar(direction)`) containing the `carX`/`style.left` update, called from both the `keydown` handler's ArrowLeft/ArrowRight branches AND a `click` listener on each button — plus the two `<button>` elements actually created via `document.createElement` and appended to the page (this session has no separate HTML file to edit, so the buttons must be built in game.js itself). (An optional "🤖 Generate Code" button can fill this in as a quick in-platform check; "Copy Prompt" + a real AI tool is still the primary path.)
   - *Why:* Reusing — not redeclaring — the student's existing Session 4 state is still required, but the new skill being graded is recognizing that "two triggers, one action" calls for a shared function — something no S5 exercise asked for.

3. **Explain the Code**
   - *A strong answer shows:* the explanation names both the keyboard path and the button path, and correctly identifies that both call the same underlying movement code rather than each having their own copy.
   - *Expected Socratic answer* — *"If you later fixed a bug in how the car moves, would clicking a button and pressing a key both get the fix automatically? What does your answer depend on?"* → Only if both paths call the same shared function; if the logic was copy-pasted for each button, a fix to one copy wouldn't reach the others.

* **Homework Evaluation Checklist**: the student's Project Journal shows one shared steering action reused by both the keydown handler and two button click handlers, two real `<button>` elements on the page, and movement that reuses their own `LANE_WIDTH` constant (not a hardcoded number — the AI Auditor's "🤖 Get AI Feedback" button flags reinvention directly). Verify by clicking a button and pressing its matching arrow key in the Live Preview — both should move the car by exactly the same amount.

---

## Session 6: "Track Boundaries: JS Conditionals & Safety Guards"

> **Content note (2026-07-30):** This session completes the two-session capability milestone begun in Session 5 — *"the car remembers itself, responds to you, and stays safe"* (see Session 5's Content note and the Lab Track's **Grading/Milestone notes** above). It was moved to real AI-Auditor grading and goal-stated instructions, and its old 5th "combine everything" capstone exercise was dropped: the sandbox now has **4 exercises**, not 5.
>
> **Content note (2026-08-06):** Two internal changes, same day, in response to real teacher review. First: Exercise 6.2 used to be "The Infinite Teleporting Bug," a bug-hunt that tested the exact same left-boundary comparison as 6.1 a second time — dropped as redundant; its insight (a looser comparison fails to protect the edge) now lives inside 6.1's own Explain question instead. Second: the old Exercise 6.4 ("The Overheat Guard") was rebuilt into a real, coherent accelerate/brake/reverse system spanning two exercises — ArrowUp speeds the car up, ArrowDown brakes it back down to 0, and once already stopped, ArrowDown reverses instead — rather than a single isolated `if (speed > 120)` snippet. The Live Preview gained a live **Speed HUD** (`#speed-val`) and a striped, scrollable road background (`#game-track`'s `backgroundPositionY`) so this is now visibly interactive, not just a silent variable check. The Project Task below was expanded to match.
>
> **Content note (2026-08-13):** Exercise 6.4 changed again: the "Reverse Handoff" mechanic above was replaced with a **Hold-to-Accelerate / Release-to-Decelerate momentum system** — holding ArrowUp continuously builds `speed` up to 300 and scrolls the road, releasing it lets `speed` decay back to 0 on its own via a persistent timer/loop (not a one-off keyup snap-to-zero). It's a more practical mechanic and introduces the "key currently held vs. just pressed" distinction that Sessions 9-10 build on.
>
> **Content note (2026-08-20):** Live testing surfaced two real AI-generated-code bugs on this session — a `const roadOffset` later reassigned (crashes immediately), and a "currently held" key-state tracker referenced but never declared/updated by the keydown-keyup handlers. Rather than treat these as one-off bugs to patch, 6.3 and 6.4's problem text and grading rubric (`expectedConcepts` in `src/App.jsx`) now explicitly name both traps up front — the same convention 6.3 already used for the Session 4 string-concatenation bug — so the student's prompt is more likely to head them off before the AI writes the code, instead of the student having to debug the crash afterward (debugging-as-a-taught-skill is deliberately deferred past L1/L2 for now).

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Clamping Coordinates Paper Exercises
* **00:15 - 00:35 | Board Lesson**: Conditionals (`if`, `else if`, `else`) and Logical Operators
* **00:35 - 01:00 | Design Phase**: Boundary Flowcharts
* **01:00 - 01:30 | Sandbox Lab**: Restricting Player Car to Track Lanes
* **01:30 - 01:50 | Assessment**: Clamping Boundary Verification
* **01:50 - 02:00 | Ethics Discussion**: Safety Clamps in Aircraft Autopilots

### 1. Board Lesson Talking Points
* **Clamping**: Ensuring coordinates do not exceed limits. If player coordinates slip below lower bound, force them back to the edge limit.
* **If/Else Statements**: Executing specific code paths when logic expressions resolve to true.

### 2. Socratic Prompting
* *"What happens if the player holds the ArrowLeft key indefinitely? How do we write a conditional guard that keeps carX from slipping past the leftmost lane (35)?"* (Wrap the move in a guard: `if (carX > 35) { carX -= 130; }` — the move is refused once carX reaches 35).
* *"Why is the rightmost lane 295 and the leftmost 35, rather than 0 and 390?"* (The car has width and sits centered in each of the 3 lanes, so its `left` coordinate never reaches the raw track edges. The lanes sit at 35, 165, and 295 — each 130px apart — which keeps the whole car body on the road).
* *"If ArrowDown always meant 'reverse,' what would happen the instant the car started moving? Why should it brake first instead?"* (A car already doing 120 can't safely start rolling backward the instant you tap the brake — decelerating to a stop first, then reversing, is both the realistic and the simpler rule to guard).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th "combine everything" capstone was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. The Interactive Live Preview is the Live Racing Game Preview — the pasted Output Code runs live and the guards can be tested by steering to both edges and by accelerating/braking (the preview seeds `carX`/`speed` variables and now also shows a live `#speed-val` HUD and a scrollable striped road background so 6.3/6.4's effects are visible, not just logged), split into a left "Console Output" panel and a right "Verification Feedback" panel so the two never interleave. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness) — not the Plan/Output Code/Explain boxes, and not whether it names any specific word/number.

* **Exercise 6.1: Track Boundary Coordinates & the Left Guard**
  * *Goal given to the student:* stop the car from steering past the left edge (lanes sit at 35/165/295 — given as a track fact).
  * *A strong answer shows:* reasoning that `carX` must stay above 35 before allowing further leftward movement; working code implementing that guard; an explanation that correctly describes the movement being blocked once the car is already at the edge, AND recognizes that a looser comparison like `carX >= -130` would fail to protect that same edge.
  * *Why:* A guard needs exactly two numbers — the smallest and largest legal `carX`. The three lanes sit at 35/165/295, so 35 and 295 are the outer walls. (This exercise now also carries the "why a loose comparison fails" insight that used to be its own separate bug-hunt exercise — see the Content note above.)
* **Exercise 6.2: The Right Guard**
  * *Goal given to the student:* stop the car from steering past the right edge (295), mirroring how the left edge is already protected in 6.1.
  * *A strong answer shows:* reasoning that the right guard should mirror the left guard's structure in the opposite direction; working code adding that guard; an explanation of why this guard mirrors the left one rather than needing new logic.
  * *Why:* Every movable direction needs its own boundary — the right guard is the mirror image of the left.
* **Exercise 6.3: Accelerate & Decelerate (the Speed Range Guard)**
  * *Goal given to the student:* make ArrowUp increase `speed` and ArrowDown decrease it, with `speed` always staying between 0 and 120 — capped at the top (reset to the Number 100, not a string, reintroducing the Session 4 type bug) and floored at the bottom. Both should update the live `#speed-val` HUD; accelerating should also advance a self-declared `roadOffset` so the track's background visibly scrolls. The problem text also now warns that `roadOffset` changes every tick, so declaring it as a value that can never change would crash the moment it tries to advance.
  * *A strong answer shows:* `speed += 10` capped so it never exceeds 120; `speed -= 10` floored so it never drops below 0; `#speed-val`'s text updating; `roadOffset` declared as a value allowed to change (not a constant); an explanation that correctly identifies the 0 floor as exactly the same kind of guard as the 120 ceiling, just at the opposite end of the range.
  * *Why:* A value with only a ceiling and no floor isn't actually "in a range" — both ends need their own check, and this is the pair Exercise 6.4's momentum system builds on next.
* **Exercise 6.4: Hold to Accelerate, Release to Decelerate (Momentum)**
  * *Goal given to the student:* holding ArrowUp continuously builds `speed` up to 300 and scrolls the road forward; releasing it lets `speed` coast back down to 0 on its own, like lifting your foot off the accelerator. The problem text warns that whatever tracks "is the key currently held" must actually be declared AND actually kept up to date by both the keydown and keyup handlers — a common AI mistake is referencing a tracker like that without ever declaring it, or declaring it but never wiring the handlers to update it.
  * *A strong answer shows:* a key-state tracker (boolean flag or object) declared once, set true on keydown and false on keyup; `speed` increasing each tick while held (capped at 300) and decaying toward 0 on its own once released, via a persistent timer or animation loop — not a one-off snap-to-zero inside the keyup handler; `roadOffset` advancing with `speed`; `#speed-val` always reflecting the live value; an explanation that correctly names "held vs. pressed once" as the key distinction and identifies that the decay needs something that keeps running after the key event fires.
  * *Why:* This is where "is a key currently down" first becomes something the code has to track explicitly, rather than reacting to a single press — a direct preview of the state-tracking Sessions 9-10 lean on harder. It replaced an earlier "Reverse Handoff" version of this exercise (see Content notes above) for being a more practical, testable mechanic.

### 3a. 📘 Teacher Exercise Guide & Reference Solutions

Mirrors the in-app "📘 Teacher Exercise Guide & Reference Solutions" panel (teacher view only, `exerciseGuide` in `src/curriculumData.js`) — one worked reference prompt and its real generated output per exercise, so a teacher can sanity-check a student's own prompt/code against a known-good answer without re-deriving one live.

* **Exercise 6.1: Track Boundary Coordinates & the Left Guard** — *Left Boundary Guard (carX > 35)*
  * 🎯 **Reference Prompt:** "Write a JavaScript event listener for keydown that checks if event.key === 'ArrowLeft'. Only allow the car to move left if carX is greater than 35. Inside the condition, subtract 130 from carX and update the element style: document.getElementById('player-car').style.left = carX + 'px';"
  * 💻 **Reference Output Code:**
    ```javascript
    window.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft' && carX > 35) {
        carX -= 130;
        document.getElementById('player-car').style.left = carX + 'px';
      }
    });
    ```
* **Exercise 6.2: The Right Guard** — *Right Boundary Guard (carX < 295)*
  * 🎯 **Reference Prompt:** "Write a JavaScript event listener for keydown that checks if event.key === 'ArrowRight'. Only allow the car to move right if carX is less than 295. If true, add 130 to carX and update document.getElementById('player-car').style.left = carX + 'px';"
  * 💻 **Reference Output Code:**
    ```javascript
    window.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight' && carX < 295) {
        carX += 130;
        document.getElementById('player-car').style.left = carX + 'px';
      }
    });
    ```
* **Exercise 6.3: Accelerate & Decelerate (Speed Range Guard)** — *Speed Clamping (0 <= speed <= 120)*
  * 🎯 **Reference Prompt:** "Write a JavaScript keydown listener that increases speed by 10 on ArrowUp (resetting to 100 if speed exceeds 120) and decreases speed by 10 on ArrowDown (not allowing it to drop below 0). Update #speed-val with speed, advance roadOffset by speed, and update #game-track's backgroundPositionY."
  * 💻 **Reference Output Code:**
    ```javascript
    let roadOffset = 0;

    window.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp') {
        speed += 10;
        if (speed > 120) speed = 100;
        roadOffset += speed;
      } else if (event.key === 'ArrowDown') {
        speed = Math.max(0, speed - 10);
      }
      document.getElementById('speed-val').textContent = speed;
      document.getElementById('game-track').style.backgroundPositionY = roadOffset + 'px';
    });
    ```
* **Exercise 6.4: Hold to Accelerate, Release to Decelerate (Momentum)** — *Hold Detection & Decay Loop (Speed Cap 300)*
  * 🎯 **Reference Prompt:** "Create JavaScript code for a racing game momentum system: track whether ArrowUp is held using keydown/keyup. While held, build speed up to 300 and advance roadOffset. When released, gradually decay speed back to 0 using a setInterval loop. Update #speed-val and scroll #game-track."
  * 💻 **Reference Output Code:**
    ```javascript
    let isAccelerating = false;
    let roadOffset = 0;

    window.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp') {
        isAccelerating = true;
        if (speed < 300) speed += 10;
        roadOffset += speed;
        document.getElementById('game-track').style.backgroundPositionY = roadOffset + 'px';
      }
    });

    window.addEventListener('keyup', function(event) {
      if (event.key === 'ArrowUp') {
        isAccelerating = false;
      }
    });

    setInterval(function() {
      if (!isAccelerating && speed > 0) {
        speed = Math.max(0, speed - 5);
        roadOffset += speed;
        document.getElementById('game-track').style.backgroundPositionY = roadOffset + 'px';
      }
    }, 100);
    ```

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 6: Safety Guards & the Full Control System") tracks the student's own project script, extending the student's own Session 5 code — including its `steerCar()` function and ◀/▶ buttons. **Deliberately not a repeat of the sandbox exercises**: 6.1-6.4 guard a plain keydown handler with fixed numbers and no buttons, so the Project Task's real differentiator is twofold — WHERE the left/right guard lives (inside `steerCar()` itself, so it protects the keyboard AND the on-screen buttons at once), and building the **full speed system from 6.3-6.4 as one shared function** reused by keyboard AND two brand-new on-screen buttons the student adds themselves. Neither of those is something any S6 exercise tests (none of them know buttons exist). It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Goal given to the student:* work out, in your own words, WHERE each guard has to live so it protects both input paths at once — `steerCar()` for left/right, and a new shared function (e.g. `changeSpeed()`) for speed — not copied separately into the keydown handler and each button's click handler. Also work out how that speed function should behave differently depending on whether `speed` is already 0 (brake vs. reverse, from Exercise 6.4), and how to derive real left/right limits from the student's own `TRACK_WIDTH`/car width.
   - *A strong answer shows:* recognizing that guarding only `keydown` would leave the buttons unprotected for BOTH axes, so both guards belong inside the one function each input path already calls; limits computed from the student's own `TRACK_WIDTH`; a correct sketch of the brake-then-reverse handoff.
   - *Why:* This is the first session where the design question is "where does shared logic live" for TWO separate systems at once, not just one — a direct continuation of Session 5's single-shared-action lesson, now applied twice.

2. **Prompt & Output Code**
   - *Goal given to the student:* write your own prompt for the full control system planned above, making sure it tells the AI to: (1) add the left/right check INSIDE the existing `steerCar()` function, deriving limits from the student's own `TRACK_WIDTH`/car width; (2) create two new buttons, ▲ Accelerate and ▼ Brake, styled like the existing ◀/▶; and (3) build ONE shared speed function containing the full accelerate/decelerate/overheat/reverse system from Exercises 6.3-6.4, called by both the keyboard's ArrowUp/ArrowDown cases and the two new buttons — including updating the live speed number and scrolling the track's background.
   - *A strong answer shows:* Output Code with the left/right check living inside `steerCar()`, limits genuinely computed from the student's own `TRACK_WIDTH` (not a hardcoded 35/295); a single speed function containing the accelerate cap, decelerate floor, and reverse handoff, reset to a Number not a string; two real clickable ▲/▼ button elements calling that same function. (An optional "🤖 Generate Code" button can fill this in as a quick in-platform check; "Copy Prompt" + a real AI tool is still the primary path.)
   - *Why:* Since Session 3 let students choose their own track width, a correct guard computes its limits from that width — and because both guards live inside their own shared function, the AI Auditor and a quick button-click test can both verify every input path is protected, not just keyboard.

3. **Explain the Code**
   - *A strong answer shows:* the explanation names all three pieces — the left/right limits are derived from the student's own `TRACK_WIDTH`/car width; the left/right check lives inside `steerCar()` so clicking a button at the edge behaves identically to pressing the matching key; and the speed function's brake-then-reverse behavior depends on the current `speed`, reused identically by the new ▲/▼ buttons.
   - *Expected Socratic answer* — *"If a guard were only added inside the keydown handler and not the shared function, what would happen the moment a player switched from holding a key to clicking its matching button mid-action?"* → The button's click handler calls the shared function directly, bypassing the keydown handler entirely — so a guard placed only in `keydown` would never run for a button click, and the car would slip straight past a boundary (or skip a speed cap) the instant input switched from keyboard to mouse.

* **Homework Evaluation Checklist**: the student's Project Journal shows the left/right guard living inside `steerCar()` and the full speed system living inside one shared function (neither duplicated across input paths), left/right limits derived from their own `TRACK_WIDTH` (the AI Auditor's "🤖 Get AI Feedback" button flags a hardcoded/reinvented boundary directly), the speed overheat reset using a Number, and two real ▲/▼ buttons on the page. Verify by clicking each of the four buttons in the Live Preview — each should behave exactly like its matching arrow key, including the live Speed HUD and scrolling road.

---

## Session 7: "Dashing Lanes & Highway Markers: JS Loops & Iteration"

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Repeat Calculations Loop Traces
* **00:15 - 00:35 | Board Lesson**: Loops (`for` and `while`), Iterators, and Grid Generation
* **00:35 - 01:00 | Design Phase**: Obstacles Spawn Sequence Diagrams
* **01:00 - 01:30 | Sandbox Lab**: Scrolling Obstacles Arrays and Lanes Spawning
* **01:30 - 01:50 | Assessment**: Infinite Loop Debugging
* **01:50 - 02:00 | Ethics Discussion**: Spam Control Loops in Network Routers

### 1. Board Lesson Talking Points
* **Loops**: Automating repetitive tasks. A loop executes a block of instructions a fixed number of times using an index tracker.
* **Dynamic Coordinate Updates**: Shifting obstacle coordinates downwards inside a loop simulating road motion.

### 2. Socratic Prompting
* *"Why do we use loop indexes to update coordinate increments? What happens if our loop has no exit condition?"* (It triggers an infinite loop and crashes the browser tab).
* *"How do we make the obstacle warp back to the top of the track when it reaches the bottom?"* (Check `if (obstacleY > 600) { obstacleY = -100; }`).

### 3. Digital Sandbox Exercises & Solutions

> **Content note (2026-08-20):** Exercises 7.2 and 7.5 used to be seeded-bug debugging exercises (a missing `i++` causing a freeze; a `i * 12` typo bunching markers) — replaced with pure construction tasks, matching a platform-wide decision this session to keep AI-code-doesn't-work recovery inside "write a better prompt," not "debug broken code," at this level. 7.2 is now a second, independently-parameterized loop (8 markers, 90px apart) that still requires naming the loop header's 3 parts and reasoning about why the update part matters — so the "why do loops need all 3 parts" learning goal survives, just reached through explaining correct code the student built, not fixing broken code handed to them. 7.5 drops the bug narrative and is now a pure "combine everything" integration task. All 5 exercises are runnable now — none are deliberately broken.

Students complete **5 exercises**, each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. All 5 run live in the Live Racing Game Preview (streaming to the terminal).

* **Exercise 7.1: Marker Spacing Plan & the Loop**
  * *Plan box expects:* how many markers and how far apart (5 markers, 120 apart).
  * *Prompt box must mention:* `for loop`, `i * 120`, and `5`.
  * *Output Code box must include:* `for(...i<5...i++)` with `markerY = i * 120`.
  * *Explain box must cover:* all 3 loop-header parts — start (`i=0`), test (`i<5`), update (`i++`).
  * *Why:* A loop is defined by two numbers — how many times it runs (5) and the step per pass (120px).
* **Exercise 7.2: A Second Spec — 8 Distance Markers, 90px Apart**
  * *Plan box expects:* how many times this loop should run and the step between markers this time (8 markers, 90 apart) — different numbers than 7.1, so the answer can't just be copied.
  * *Prompt box must mention:* `for loop`, `i * 90`, and `8`.
  * *Output Code box must include:* `for(...i<8...i++)` with `markerY = i * 90`.
  * *Explain box must cover:* all 3 loop-header parts (start `i=0`, test `i<8`, update `i++`) AND what happens to the browser if the update part were ever left out (never stops / freezes).
  * *Why:* Reusing the mechanic with different parameters forces genuine understanding rather than copy-pasting 7.1's numbers, and folds the "why the update part matters" question into explaining code the student built correctly — rather than handing them broken code to fix.
* **Exercise 7.3: Logging Each Marker**
  * *Plan box expects:* what should get logged on each pass.
  * *Prompt box must mention:* `console.log` and `markerY`.
  * *Output Code box must include:* a `console.log` of `markerY` inside the loop body.
  * *Explain box must cover:* predicting all 5 values: 0, 120, 240, 360, 480.
  * *Why:* One log line per pass is the fastest proof the loop really runs 5 times.
* **Exercise 7.4: Rendering the Markers**
  * *Plan box expects:* for each marker, what element gets created, what class it gets, and where it's placed.
  * *Prompt box must mention:* `marker-dash`, `appendChild`, and `#game-track`.
  * *Output Code box must include:* a `marker-dash` div appended to `#game-track` inside the loop.
  * *Explain box must cover:* why `appendChild` is needed even after `createElement` already built the div.
  * *Why:* `createElement` only builds an element in memory — `appendChild` is what makes it actually show up.
* **Exercise 7.5: The Complete Marker System**
  * *Plan box expects:* listing, in order, everything the loop needs to do each pass — compute the position, create the element, place it, attach it.
  * *Prompt box must mention:* `i * 120` and `marker-dash`.
  * *Output Code box must include:* the full loop — `for(...i<5...i++)`, `markerY = i * 120`, `marker-dash`, `appendChild`.
  * *Explain box must cover:* the correct final values: 0, 120, 240, 360, 480.
  * *Why:* This is where the session's separate pieces (compute, log, create, attach) get combined into one working system in a single prompt.

### 3a. 📘 Teacher Exercise Guide & Reference Solutions

Mirrors the in-app "📘 Teacher Exercise Guide & Reference Solutions" panel (teacher view only, `exerciseGuide` in `src/curriculumData.js`) — one worked reference prompt and its real generated output per exercise, so a teacher can sanity-check a student's own prompt/code against a known-good answer without re-deriving one live.

* **Exercise 7.1: Marker Spacing Plan & the Loop** — *Loop Header & Coordinate Math*
  * 🎯 **Reference Prompt:** "Write a JavaScript for loop that runs 5 times (i from 0 to 4) and computes markerY as i * 120 on each iteration."
  * 💻 **Reference Output Code:**
    ```javascript
    for (let i = 0; i < 5; i++) {
      let markerY = i * 120;
    }
    ```
* **Exercise 7.2: A Second Spec — 8 Distance Markers, 90px Apart** — *Loop Header & Coordinate Math (Different Parameters)*
  * 🎯 **Reference Prompt:** "Write a JavaScript for loop that runs 8 times (i from 0 to 7) and computes markerY as i * 90 on each iteration."
  * 💻 **Reference Output Code:**
    ```javascript
    for (let i = 0; i < 8; i++) {
      let markerY = i * 90;
    }
    ```
* **Exercise 7.3: Logging Each Marker** — *Loop State Verification via Logging*
  * 🎯 **Reference Prompt:** "Write a JavaScript for loop running 5 times, computing markerY = i * 120, and logging 'Highway Marker position: ' + markerY to the console on each pass."
  * 💻 **Reference Output Code:**
    ```javascript
    for (let i = 0; i < 5; i++) {
      let markerY = i * 120;
      console.log("Highway Marker position: " + markerY);
    }
    ```
* **Exercise 7.4: Rendering the Markers** — *Dynamic DOM Creation in Loops*
  * 🎯 **Reference Prompt:** "Write a JavaScript for loop running 5 times that creates a div element with class 'marker-dash', sets its style.top to (i * 120) + 'px', and appends it to document.getElementById('game-track')."
  * 💻 **Reference Output Code:**
    ```javascript
    for (let i = 0; i < 5; i++) {
      let markerY = i * 120;
      const marker = document.createElement("div");
      marker.className = "marker-dash";
      marker.style.top = markerY + "px";
      document.getElementById("game-track").appendChild(marker);
    }
    ```
* **Exercise 7.5: The Complete Marker System** — *Complete Marker Generation Loop*
  * 🎯 **Reference Prompt:** "Write the complete JavaScript loop for creating highway markers: loop 5 times, compute markerY = i * 120, create a 'marker-dash' div, set style.top to markerY + 'px', and append it to #game-track."
  * 💻 **Reference Output Code:**
    ```javascript
    for (let i = 0; i < 5; i++) {
      let markerY = i * 120;
      const marker = document.createElement("div");
      marker.className = "marker-dash";
      marker.style.top = markerY + "px";
      document.getElementById("game-track").appendChild(marker);
    }
    ```

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 7: Obstacle Loop Generation") tracks the student's own project script, adding lane markers as a new self-contained feature on top of the student's own Session 6 code. It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview), **3) Explain the Code**.

1. **Plan & Design**
   - *Expected:* "The dashed center lane markers running down the highway are now drawn by a loop instead of placed by hand, spaced to evenly fill MY OWN track height from Session 3 — not a fixed number that happens to fit a different-sized track. Parts needed: several repeating marker dashes down the highway. Information to track: how many dashes to create (4-6), and the vertical spacing computed from my own track height."
   - *Why:* Unlike the sandbox (which fixes the count at 5 and the track height at an example value), the Project Task deliberately requires the student to compute spacing from their *own* Session 3 track height.

2. **Prompt & Output Code**
   - *Expected prompt:* "This feature doesn't touch my steering/boundary code above — add it as its own block. Generate repeating highway marker dashes using a JavaScript 'for' loop: I'll pick how many dashes (4-6), and calculate each one's vertical offset by dividing MY OWN track height (from Session 3) by that count — don't hardcode a spacing number that assumes a specific track size."
   - *Expected Output Code:* the AI's real code, pasted and run live — computing spacing from the student's own track height, not a hardcoded 120px.
   - *Why:* This is the same "audit whether the AI used YOUR numbers, not generic ones" discipline the sandbox exercises build, now applied to a value (track height) the sandbox never varies.

3. **Explain the Code**
   - *Expected checklist:* the loop has a clear terminating condition and increments its index; the vertical spacing is actually computed from the student's own track height divided by their marker count, not a copied 120px.
   - *Expected Socratic answer* — *"What happens to the browser call stack if the loop increment block is deleted? Why does the screen freeze?"* → Without the increment, the test condition never becomes false, so the loop body repeats forever on the single JavaScript thread — the browser can never reach the render step, so the tab freezes.

* **Homework Evaluation Checklist**: the student's Project Journal shows a bounded `for` loop whose spacing is computed from their own track height (not a fixed 120px), appending the generated elements to `#game-track` with no infinite-loop risk.

---

## Session 8: "Defining Movement & Game Functions: JS Modular Code"

> **Content note (2026-08-05):** This session was moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above) — **Verify now grades the Prompt box only**. Its old 5th "combine everything" capstone exercise (8.5, "The Duplicate Render Call & Complete Controller") was dropped as a duplicate of this session's own Project Task, which already asks for more (grouping the three functions under one namespaced `Controller` object, not three loose globals). The sandbox now has **4 exercises**, not 5. Testing "🤖 Generate Code" against the live AI also found two of the original five exercises' own solutions broke the Live Preview: Exercise 8.3's fix, generated standalone, came back as a bare `if (event.key === 'ArrowLeft') { moveLeft(); }` fragment with no enclosing listener and no `moveLeft()` defined — `event` doesn't exist outside a handler, so it crashed on load; Exercise 8.5 (now dropped) had generated canvas-API code (`canvas.width`, `render()`) that doesn't exist in this DOM-based sandbox. Both 8.1's and 8.3's exercise text now say plainly that the Output Code box runs standalone (nothing from another exercise carries over), so the AI needs to write a complete, self-contained snippet — including calling the new piece once so its effect is visible in the Preview.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Variable Scoping Match
* **00:15 - 00:35 | Board Lesson**: Function Declarations, Scopes, Parameters, and Code Cleanups
* **00:35 - 01:00 | Design Phase**: Function Interfaces Diagrams
* **01:00 - 01:30 | Sandbox Lab**: Refactoring Movement Rules into Functions
* **01:30 - 01:50 | Assessment**: Scope Variable Leak Audit
* **01:50 - 02:00 | Ethics Discussion**: Code Readability and Open Source Contributions

### 1. Board Lesson Talking Points
* **Modular Functions**: Explaining code reuse. Packaging logic blocks into callable modules.
* **Variable Scopes**: Global variables are accessible everywhere. Local variables declared inside functions are isolated and deleted after execution.

### 2. Socratic Prompting
* *"Why do we pass parameters to functions instead of using global variables everywhere?"* (Because global variables can be modified by any script block, leading to hard-to-trace bugs. Parameters keep functions isolated and safe).
* *"If a variable is declared inside a function, can we read its value on the global script?"* (No, it is locally scoped and inaccessible outside).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th "combine everything" capstone was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. All 4 run live in the Live Racing Game Preview — click inside it and press arrow keys to steer. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness) — not the Plan/Output Code/Explain boxes, and not whether it names any specific word.

* **Exercise 8.1: Decomposing & Requesting the Render Function**
  * *Goal given to the student:* split the steering script into single-purpose pieces (render, move-left, move-right), starting with a function named `updatePlayerPosition()` that sets `#player-car`'s `style.left` to `carX`. The exercise text notes this sandbox is DOM-based (no canvas), and that the Output Code box runs standalone — the AI should also call the new function once so its effect is visible in the Preview.
  * *A strong answer shows:* a self-contained `updatePlayerPosition()` definition plus a call to it; an explanation correctly stating it takes 0 parameters because it just reads the shared `carX`.
  * *Why:* One block that does everything is hard to test or fix — naming the three jobs first is the decomposition skill.
* **Exercise 8.2: The Scope Access Violation Bug**
  * *Goal given to the student:* explain why `updatePlayerPosition()` can't read a `carX` declared inside `moveLeft()`, then fix it by moving the declaration outside both functions.
  * *A strong answer shows:* `carX` declared once, outside both functions; an explanation correctly contrasting local (visible only inside its own function) vs. shared/outer scope.
  * *Why:* A variable declared inside a function is local — for two functions to share `carX`, it must be declared once outside both.
* **Exercise 8.3: Wiring moveLeft() to the Handler**
  * *Goal given to the student:* replace the inline ArrowLeft logic with a call to `moveLeft()`. The exercise text notes this box is tested standalone (not chained to Exercise 8.2), so the AI needs to write the **complete** keydown listener plus a working `moveLeft()` — not just the one changed line.
  * *A strong answer shows:* a real `addEventListener('keydown', ...)` wrapper whose ArrowLeft branch calls a self-contained `moveLeft()`; an explanation covering the benefit of a named function call over repeating logic inline. (Found and fixed 2026-08-05: without this note, the AI's literal answer to "just the ArrowLeft branch" was a bare fragment with no listener and no `moveLeft()` — `event` undefined, crashing the Preview on load.)
  * *Why:* Once `moveLeft()` owns the boundary logic, the handler shrinks to a single call.
* **Exercise 8.4: Requesting moveLeft() and moveRight()**
  * *Goal given to the student:* build the `moveRight()` mirror function alongside `moveLeft()`, each clamping `carX` and calling `updatePlayerPosition()`. The exercise text notes `updatePlayerPosition()` isn't defined in this standalone snippet either, so the AI should include a working definition of it too, plus a demo call so the effect is visible in the Preview.
  * *A strong answer shows:* `moveLeft()`/`moveRight()`/`updatePlayerPosition()` all defined together and demonstrably called; an explanation correctly stating only 1 function body needs the fix if both share a clamp helper.
  * *Why:* Each function clamps `carX` to its own boundary, then calls the shared renderer instead of each writing its own `style.left` line.

### 3a. 📘 Teacher Exercise Guide & Reference Solutions

Mirrors the in-app "📘 Teacher Exercise Guide & Reference Solutions" panel (teacher view only, `exerciseGuide` in `src/curriculumData.js`) — one worked reference prompt and its real generated output per exercise, so a teacher can sanity-check a student's own prompt/code against a known-good answer without re-deriving one live.

* **Exercise 8.1: Decomposing & Requesting the Render Function** — *Single-Purpose Render Function*
  * 🎯 **Reference Prompt:** "Write a JavaScript function named updatePlayerPosition() that sets document.getElementById('player-car').style.left to carX + 'px'. Call updatePlayerPosition() once after defining it."
  * 💻 **Reference Output Code:**
    ```javascript
    function updatePlayerPosition() {
      document.getElementById('player-car').style.left = carX + 'px';
    }

    updatePlayerPosition();
    ```
* **Exercise 8.2: The Scope Access Violation Bug** — *Global vs. Local Variable Scope*
  * 🎯 **Reference Prompt:** "Fix the variable scope issue where carX was declared locally inside moveLeft(). Declare carX once in global outer scope so both moveLeft() and updatePlayerPosition() can access and share it."
  * 💻 **Reference Output Code:**
    ```javascript
    function updatePlayerPosition() {
      document.getElementById('player-car').style.left = carX + 'px';
    }

    function moveLeft() {
      if (carX > 35) {
        carX -= 130;
      }
      updatePlayerPosition();
    }
    ```
* **Exercise 8.3: Wiring moveLeft() to the Handler** — *Event Handler Function Delegation*
  * 🎯 **Reference Prompt:** "Write a JavaScript moveLeft() function that checks if carX > 35, subtracts 130, and updates the car position. Then write a keydown event listener where the 'ArrowLeft' key branch calls moveLeft()."
  * 💻 **Reference Output Code:**
    ```javascript
    function moveLeft() {
      if (carX > 35) {
        carX -= 130;
      }
      document.getElementById('player-car').style.left = carX + 'px';
    }

    window.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        moveLeft();
      }
    });
    ```
* **Exercise 8.4: Requesting moveLeft() and moveRight()** — *Modular Movement Functions with Shared Renderer*
  * 🎯 **Reference Prompt:** "Write modular JavaScript functions for car steering: updatePlayerPosition() to set style.left, moveLeft() to clamp carX > 35 and call updatePlayerPosition(), and moveRight() to clamp carX < 295 and call updatePlayerPosition(). Call moveLeft() once to test."
  * 💻 **Reference Output Code:**
    ```javascript
    function updatePlayerPosition() {
      document.getElementById('player-car').style.left = carX + 'px';
    }

    function moveLeft() {
      if (carX > 35) {
        carX -= 130;
      }
      updatePlayerPosition();
    }

    function moveRight() {
      if (carX < 295) {
        carX += 130;
      }
      updatePlayerPosition();
    }

    moveLeft();
    ```

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 8: Modular Control Functions") tracks the student's own project script — a refactor of the student's own Sessions 5-6 steering code. It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Expected:* "Screen looks identical to Session 6 — this is a behind-the-scenes cleanup, organizing the movement code into one reusable, namespaced controller without changing what the player sees. Parts needed: none new on screen — this reorganizes existing behavior into a named, reusable controller object."
   - *Why:* This is a *refactoring* milestone — the honest plan says the screen is unchanged; the design work is about structure, not new features.

2. **Prompt & Output Code**
   - *Expected prompt:* "My own keydown handler above already does the steering inline — ask for something cleaner: one namespaced object, e.g. `const Controller = { updatePosition, moveLeft, moveRight }`, so the three pieces don't pollute the global scope as separate names. Make the keydown listener call `Controller.moveLeft()`/`Controller.moveRight()` instead of running the logic inline."
   - *Expected Output Code:* the AI's real code, pasted and tested live — steering behaves identically to before the refactor, but the three functions live under one `Controller` object.
   - *Why:* Unlike the sandbox (which drills three bare global functions), the Project Task asks for a slightly cleaner namespaced pattern — testing whether the student can direct a *design* improvement, not just a mechanical split.

3. **Explain the Code**
   - *Expected checklist:* the three functions are grouped under one object instead of three separate global names; UI-rendering is decoupled from the movement/clamp logic; steering behaves identically to before the refactor.
   - *Expected Socratic answer* — *"Why is grouping these three functions under one object helpful, beyond just 'organization'? What's one global name collision this avoids?"* → Three loose global functions (`updatePosition`, `moveLeft`, `moveRight`) could clash with same-named functions from other scripts or later sessions; namespacing them under `Controller.updatePosition` etc. means only one global name (`Controller`) needs to stay unique.

* **Homework Evaluation Checklist**: the student's Project Journal shows the steering logic grouped under one namespaced object (not three separate globals), with `carX` in a shared scope and steering behavior unchanged from before the refactor.

---

## Session 9: "The Racing Game Loop: Timers & Animations"

> **Content note (2026-08-05):** This session was moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above) — **Verify now grades the Prompt box only**. Its old 5th "combine everything" capstone exercise (9.5, "The Complete Animation Engine") was dropped as a duplicate of this session's own Project Task, which already asks for more (animating the student's own real `#obstacle` element from Sessions 2-3, using their own track height instead of a fixed 500). The sandbox now has **4 exercises**, not 5. This pass also found that the shared JS sandbox only pre-declares `carX`/`speed` as globals — `obstacleY`, `score`, and `gameActive` aren't pre-existing here, and each exercise's Output Code box is tested standalone. Exercises 9.2 and 9.4's text now says so explicitly and asks the AI to declare/initialize those values (and, for 9.1/9.2, call the loop once) so the Preview actually runs instead of throwing a "not defined" error.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Frames vs Timers Match
* **00:15 - 00:35 | Board Lesson**: The Browser Game Loop, requestAnimationFrame, and Updates Timing
* **00:35 - 01:00 | Design Phase**: Game Loop Sequence Flowcharting
* **01:00 - 01:30 | Sandbox Lab**: Coding the continuous draw loop
* **01:30 - 01:50 | Assessment**: Thread Locking Diagnostic
* **01:50 - 02:00 | Ethics Discussion**: Refresh Rate limits in Assistive UIs

### 1. Board Lesson Talking Points
* **The Animation Loop**: Explain that games are animations drawn 60 times a second. We clear coordinates, run updates, and redraw elements.
* **requestAnimationFrame**: Directs the browser engine to run updates before rendering the next display frame.

### 2. Socratic Prompting
* *"Why does using a while loop for game updates lock the browser tab, but requestAnimationFrame runs smoothly?"* (A while loop blocks the execution thread. requestAnimationFrame yields control back to the browser between frames).
* *"If gameActive becomes false, how do we halt our animation loop?"* (By wrapping requestAnimationFrame calls in a conditional `if (gameActive)` check).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th "combine everything" capstone was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. All 4 run live in the Live Racing Game Preview. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness).

* **Exercise 9.1: The Game Loop Lifecycle & Recursive Loop**
  * *Goal given to the student:* describe the repeating frame cycle, then build a `gameLoop()` that moves the obstacle and calls `requestAnimationFrame(gameLoop)`. The exercise text notes `obstacleY` isn't pre-existing here — the AI should declare/initialize it (starting at -100, matching `#obstacle`'s own default position) and call `gameLoop()` once so you can watch it animate in the Preview.
  * *A strong answer shows:* a self-contained `gameLoop()` that actually moves `#obstacle` and re-schedules itself; an explanation correctly covering what `requestAnimationFrame(gameLoop)` does (schedules the function again next frame).
  * *Why:* Every game is this one cycle: update → render → schedule the next frame.
* **Exercise 9.2: The Unstoppable Speed Bug**
  * *Goal given to the student:* add the missing `gameActive` guard at the top of `gameLoop()`. The exercise text notes this box runs standalone, so the AI should write the **complete** `gameLoop()` (not just the guard line) plus `gameActive`/`obstacleY` declared, and a call to start it.
  * *A strong answer shows:* a self-contained, runnable `gameLoop()` with the guard at its top; an explanation correctly covering that the loop exits/halts and `requestAnimationFrame` never gets called again once `gameActive` is false. (Found and fixed 2026-08-05: without the self-containment note, a standalone-generated answer hallucinated a nonexistent `obstacles` array instead of the real single `#obstacle` element.)
  * *Why:* Without a guard that returns early when `gameActive` is false, nothing can ever halt the loop — Game Over becomes impossible.
* **Exercise 9.3: Obstacle Movement & Reset**
  * *Goal given to the student:* build the scroll-and-wrap behavior (down, wrap at 500 to -100, score += 10) as a `moveObstacles()` function. The exercise text notes `obstacleY`/`score` aren't pre-existing here — declare/initialize both, and log `obstacleY` after one call so you can confirm it changed.
  * *A strong answer shows:* `moveObstacles()` correctly updating/wrapping `obstacleY` and bumping `score`; an explanation correctly predicting `obstacleY` after `obstacleY += speed` starting at 490 with speed 5 (495).
  * *Why:* Scrolling down plus wrapping to the top plus scoring the pass — the three parts of endless traffic.
* **Exercise 9.4: The Frozen Scoreboard Bug**
  * *Goal given to the student:* add the missing score increment inside the reset block. The exercise text notes this box runs standalone, so the AI should write the **complete** `moveObstacles()` (with the reset block AND the fix) plus `obstacleY`/`score` declared, so you can watch score actually increment.
  * *A strong answer shows:* a self-contained, runnable fix where the score bump lives inside the same `obstacleY > 500` block; an explanation confirming both the reset AND the score bump happen together. (Found and fixed 2026-08-05: without the self-containment note, a standalone-generated answer was a bare top-level fragment referencing undeclared `obstacleY`/`score` — a ReferenceError on load, not a fix.)
  * *Why:* Wrapping the obstacle is only half the event — passing it is what earns points.

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 9: Timer Loops & Animations") tracks the student's own project script, adding the animation loop as a new self-contained piece on top of the student's own Session 7-8 code. It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Expected:* "The obstacle car now visibly scrolls DOWN the road continuously, like the player is driving forward past it, disappearing off the bottom of MY OWN track and reappearing at the top — a real animated highway instead of a still picture. Information to track: the obstacle's vertical position, how fast it moves, and the score increase each time it resets."
   - *Why:* This is the milestone where the game finally *moves on its own* — the first design that describes time, not just layout.

2. **Prompt & Output Code**
   - *Expected prompt:* "Add this on top of the Controller object above — it's a separate concern from steering, so don't touch that code. Build a 'gameLoop()' function that runs recursively using 'requestAnimationFrame'. Update a new 'obstacleY' variable by adding 'speed' each tick, and move my '#obstacle' element (from my Session 2 HTML) to match. If the obstacle passes the bottom of MY OWN track height, reset it to -100 and increase the score by 10. Gate the whole loop on 'gameActive'."
   - *Expected Output Code:* the AI's real code, pasted and run live — using the student's own track height for the reset boundary, not an assumed 500.
   - *Why:* Because students may have chosen their own Session 3 track height, a correct reset boundary here is derived from that value, not copied from the sandbox's fixed 500.

3. **Explain the Code**
   - *Expected checklist:* the animation loop checks `gameActive` before requesting the next frame; the obstacle reset coordinate uses the student's own track height, not an assumed 500; `#obstacle` (the element already built) is being moved, not a newly-created one.
   - *Expected Socratic answer* — *"Why is `requestAnimationFrame` preferred over `setInterval` for rendering fluid screen animations?"* → `requestAnimationFrame` syncs to the browser's actual repaint cycle (~60fps) and pauses on inactive tabs, so motion is smooth and efficient; `setInterval` fires on a fixed timer regardless of when the screen can actually redraw, causing stutter and wasted work.

* **Homework Evaluation Checklist**: the student's Project Journal shows a `requestAnimationFrame`-driven `gameLoop()` gated on `gameActive`, with the obstacle scrolling and wrapping using the student's own track height, and the score incrementing on each pass.

---

## Session 10: "Collision Detection: Auditing AI Overlap Math"

> **Content note (2026-08-05):** This session was moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above) — **Verify now grades the Prompt box only**. Its old 5th "combine everything" capstone exercise (10.5, "The Complete Collision System") was dropped as a duplicate of this session's own Project Task, which already asks for more (spending a life per collision instead of ending the game immediately). The sandbox now has **4 exercises**, not 5. Exercises 10.1 and 10.4's text now asks for a quick demo call/log (e.g. testing `checkCollision()` against two example rectangles) so the AI's answer visibly proves itself in the Preview instead of just defining an unused function.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Coordinate Overlaps Math Checks
* **00:15 - 00:35 | Board Lesson**: Axis-Aligned Bounding Box (AABB) Overlap Logic Equations
* **00:35 - 01:00 | Design Phase**: Collision Conditional Flowcharting
* **01:00 - 01:30 | Sandbox Lab**: Coding Bounding Boxes Collision Sensors
* **01:30 - 01:50 | Assessment**: Overlap Checks Bug Hunt (Seeded Errors)
* **01:50 - 02:00 | Ethics Discussion**: Validation Tests in Autonomous Emergency Braking Systems

### 1. Board Lesson Talking Points
* **AABB Collision Math**: Explain that two boxes overlap if and only if their boundaries intersect in both X and Y axes.
* **Intersection Check**: Show how 4 boundary conditions combine (`rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x...`).

### 2. Socratic Prompting
* *"If the player car is at X=130 and the obstacle is at X=130, and both are 60px wide, do they overlap horizontally?"* (Yes, 130 < 130 + 60 AND 130 + 60 > 130).
* *"Why must all 4 coordinate checks be true to register a collision?"* (If even one check is false, the boxes do not overlap in that axis, meaning they are separated).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th "combine everything" capstone was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. All 4 run live in the Live Racing Game Preview. This session's core skill is **auditing AI-generated math** — several exercises hand the student a subtly-wrong AABB check to find and fix. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness).

* **Exercise 10.1: The Overlap Condition & Requesting checkCollision()**
  * *Goal given to the student:* build a `checkCollision(rect1, rect2)` function using width/height, then call it once with two example rectangles and log the result so it's visibly proven in the Preview.
  * *A strong answer shows:* a self-contained, demonstrably-called `checkCollision()`; an explanation correctly covering why the check needs width/height, not just x/y center coordinates.
  * *Why:* Two rectangles overlap only when they overlap on BOTH axes at once — four comparisons joined by AND.
* **Exercise 10.2: The Ghost Car Bug**
  * *Goal given to the student:* given the exact bug (a flipped comparison operator), fix `checkCollision()` so it correctly checks `rect1.x + rect1.width > rect2.x`.
  * *A strong answer shows:* the corrected `>` comparison; an explanation correctly covering why the comparison must point that direction to detect real overlap.
  * *Why:* Flip even one of the 4 AABB comparisons and the combined AND can never be true — collisions silently never fire.
* **Exercise 10.3: The Axis Swap Bug**
  * *Goal given to the student:* given the exact bug (an axis swap), fix `checkCollision()` so the first condition correctly compares `rect1.x`, not `rect1.y`.
  * *A strong answer shows:* the corrected `rect1.x < rect2.x + rect2.width`; an explanation confirming every x-comparison uses x values, every y-comparison uses y values.
  * *Why:* Comparing x against y measures horizontal against vertical — meaningless geometry that makes crashes register wrong or not at all.
* **Exercise 10.4: Wiring Collision into the Loop**
  * *Goal given to the student:* wire `checkCollision(player, obstacle)` into `gameLoop()`, setting `gameActive = false` and logging on a hit. The exercise text notes this box runs standalone, so the AI should include a working `checkCollision()`, example player/obstacle rects that actually overlap, `gameActive`, and a call to `gameLoop()` once so it's visibly proven in the Preview.
  * *A strong answer shows:* a self-contained, demonstrably-triggered collision; an explanation correctly answering NO — touching exactly isn't "greater than," so a strict `>` doesn't register a hit at the exact boundary.
  * *Why:* Detecting a crash is useless unless something happens — calling the check inside the loop is what connects "they touched" to "game over."

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 10: Collision Detection Overlap Math") tracks the student's own project script, adding collision checking into the student's own Session 8 animation loop, not a new loop. It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Expected:* "When the player's car touches the obstacle, the screen should visibly react — but with 'lives' already tracked since Session 4, a single crash should cost one life and let the player keep going, only truly ending once lives hit zero. Information to track: the edges and size of the player's car and the obstacle, and the current lives count."
   - *Why:* Unlike the sandbox (which ends the game on any hit), the Project Task deliberately requires wiring collision into the *lives* system from Session 4 — a genuinely different behavior, not a copy of the exercises.

2. **Prompt & Output Code**
   - *Expected prompt:* "Add this check inside the gameLoop() I already have above — don't write a second loop. Write a function checking if the bounding boxes of '#player-car' and '#obstacle' overlap, using their real sizes from my own Session 3 CSS. On a collision, decrement 'lives' instead of ending the game outright; only when lives reaches 0 should 'gameActive' be set to false and a 'gameOver()' function called. A collision that doesn't end the game should reset the obstacle back off-screen so play continues."
   - *Expected Output Code:* the AI's real code, pasted and tested live — decrementing lives on a hit and only ending the game at 0.
   - *Why:* This wrinkle (spend a life, don't end the game immediately) is exactly the kind of behavior a straight copy of the sandbox exercises would miss.

3. **Explain the Code**
   - *Expected checklist:* the collision function matches the AABB overlap formula using the student's own car/obstacle sizes; a collision decrements lives rather than always ending the game immediately; the game-over check is `lives <= 0`, not `lives < 0` (which would allow one extra hidden hit).
   - *Expected Socratic answer* — *"If we only checked if the center coordinates were identical, why would cars drive right through each other without crashing? Why do box dimensions matter?"* → Two independently-moving boxes almost never land on the exact same center pixel, so equality is essentially always false — box dimensions are what let overlap be detected across a whole area instead of a single point.

* **Homework Evaluation Checklist**: the student's Project Journal shows a four-condition AABB `checkCollision()` using the student's own car/obstacle sizes, wired into the existing game loop to decrement `lives` on a hit and end the game only once `lives <= 0`.

---

## Session 11: "The Dashboard & High-Score Counter: DOM Operations"

> **Content note (2026-08-05):** This session was moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above) — **Verify now grades the Prompt box only**. Its old 5th "combine everything" capstone exercise (11.5, "The Complete HUD & Restart System") was dropped as a duplicate of this session's own Project Task, which already asks for more (a lives readout alongside score, not score alone). The sandbox now has **4 exercises**, not 5. Exercises 11.1 and 11.2's text now notes `score` isn't pre-existing in this sandbox, so the AI should declare/initialize it (and, for 11.1, call `updateScoreboard()` once) so the fix is visibly proven in the Preview. **Exercise 11.4 was found and fixed 2026-08-05**: a standalone-generated answer to "add the missing `gameActive = true`" hallucinated a nonexistent `#game-over-panel` element and reversed hide/show logic instead of touching the real `#restart-panel` — the exercise text now explicitly names the real element and asks for the complete handler.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: DOM Selection Match
* **00:15 - 00:35 | Board Lesson**: Document Selectors, textContent Manipulation, and Visibility Styling
* **00:35 - 01:00 | Design Phase**: DOM Data Pipelines diagrams
* **01:00 - 01:30 | Sandbox Lab**: Wiring Code States variables to Visual HTML Dashboard
* **01:30 - 01:50 | Assessment**: UI Selector Bugs Diagnostics
* **01:50 - 02:00 | Ethics Discussion**: User Privacy Limits on Public Leaderboard Names

### 1. Board Lesson Talking Points
* **The Document API**: Explain that JavaScript acts as a manipulator using selectors like `document.getElementById("score-val")`.
* **Dynamic Styles**: Changing visual attributes like CSS display overrides (`style.display = "block"`) to unhide layout sections.

### 2. Socratic Prompting
* *"Why does the scoreboard show score: -5? What guard check should we add to prevent values from slipping below 0?"* (Check `if (score < 0) { score = 0; }` before updating scoreboard).
* *"How does the DOM represent a bridge between code variables and visual HTML elements?"* (JavaScript queries elements by ID and mutates properties like `.textContent` — the safe property this session teaches for writing the score).

### 3. Digital Sandbox Exercises & Solutions

Students complete **4 exercises** (the old 5th "combine everything" capstone was dropped — see the Content note above), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. All 4 run live in the Live Racing Game Preview. **Key detail:** the spacebar's real `event.key` value is a single space `" "`, *not* the word `"Space"` — the restart handler must check `event.key === " "`. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness).

* **Exercise 11.1: The DOM Update Pipeline & Scoreboard Updater**
  * *Goal given to the student:* map state changes to screen updates, then build `updateScoreboard()` setting `#score-val`'s `textContent` to `score`. The exercise text notes `score` isn't pre-existing here, so the AI should declare it too and call `updateScoreboard()` once so the update is visible in the Preview.
  * *A strong answer shows:* a self-contained, demonstrably-called `updateScoreboard()`; an explanation correctly covering why `textContent` is safer than `innerHTML` (no script injection).
  * *Why:* A variable is invisible until pushed into the page — the score change must map to an on-screen update.
* **Exercise 11.2: The Negative Score Leak**
  * *Goal given to the student:* clamp `score` so it never displays negative. The exercise text notes this box runs standalone, so the AI should declare `score` starting negative (to prove the clamp works) and write the clamped result to `#score-val`.
  * *A strong answer shows:* `score` clamped to 0 BEFORE the DOM write, demonstrated with a real negative starting value; an explanation confirming the clamp happens before the write, not after.
  * *Why:* A defensive clamp before the DOM write keeps the display sensible no matter what the scoring math does.
* **Exercise 11.3: Revealing the Restart Panel**
  * *Goal given to the student:* build `triggerGameOverScreen()` removing the `hidden` class from `#restart-panel`.
  * *A strong answer shows:* `classList.remove("hidden")` on `#restart-panel` (not an inline style, which the `.hidden { display: none !important; }` rule would still override); an explanation correctly covering that the panel stays hidden if the class isn't removed.
  * *Why:* The panel already exists in the HTML — removing its `hidden` class is what makes it appear.
* **Exercise 11.4: The Frozen Restart Bug**
  * *Goal given to the student:* add the missing `gameActive = true` inside the Space-key restart handler. The exercise text now explicitly names the real `#restart-panel` element (there is no separate "game-over-panel") and asks for the **complete** handler — not just the missing line — since this box runs standalone.
  * *A strong answer shows:* a self-contained, runnable Space-key handler correctly targeting `#restart-panel`; an explanation correctly covering that `gameLoop()`'s gate reads `gameActive` — it must be true for the loop to run again. (Found and fixed 2026-08-05: a standalone-generated answer previously hallucinated a nonexistent `#game-over-panel` and reversed hide/show logic instead.)
  * *Why:* Without `gameActive = true`, `requestAnimationFrame` is never re-armed after a visual reset.

### 4. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 11: DOM HUD Visual Updates") tracks the student's own project script, building on the student's own lives-based collision logic from Session 10, not a simpler score-only version. It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview and an optional "🤖 Generate Code" quick-check button alongside "Copy Prompt"), **3) Explain the Code**.

1. **Plan & Design**
   - *Expected:* "The scoreboard number visibly climbs as the game runs, a lives readout ticks down on each crash, and once lives hit zero a 'Game Over' screen appears showing the final score and a prompt to restart. Information to track: the current score AND lives to display, and whether the game is active or showing the Game Over screen."
   - *Why:* Unlike the sandbox (score only), the Project Task requires keeping BOTH score and lives in sync with the DOM — the sandbox never covers a lives readout.

2. **Prompt & Output Code**
   - *Expected prompt:* "Build on the lives-based collision logic above, not a simpler score-only version. Keep both '#score-val' text AND a lives readout (add my own small element for it) in sync with 'score' and 'lives'. When lives reaches 0, remove 'hidden' from '#restart-panel'. If Space is pressed while the panel is visible, reset score to 0, lives back to 3, car position to default, hide the panel, set gameActive to true, and restart the loop."
   - *Expected Output Code:* the AI's real code, pasted and tested live — showing both a score AND a lives readout updating.
   - *Why:* Because Session 9 already gave lives a real mechanical role (a crash costs a life, not the game), the HUD here must reflect both values, not just score.

3. **Explain the Code**
   - *Expected checklist:* BOTH score and lives update in the DOM whenever either changes, not just score; the restart-panel reveal is gated on lives reaching 0, not on the first collision; Space-to-restart resets every tracked variable (score, lives, position), not just some of them.
   - *Expected Socratic answer* — *"What is the difference between setting 'textContent' vs 'innerHTML'? Why is 'textContent' safer for updating values?"* → `textContent` writes plain text; `innerHTML` parses its value as markup and would execute any injected `<script>` — for numeric or short text values, `textContent` is both safer and faster.

* **Homework Evaluation Checklist**: the student's Project Journal shows BOTH score and lives updating via `textContent`, the restart screen appearing only once lives reach 0, and a Space-key handler that fully resets score, lives, AND position.

---

## Session 12: Level 1 Assessment & Graduation

> **Content note (2026-08-05):** This session was moved to real AI-Auditor grading and goal-stated instructions (see the Lab Track's **Grading note** above) — **Verify now grades the Prompt box only**, and an optional "🤖 Generate Code" button sits next to "Copy Prompt". Unlike Sessions 8-11, **Session 12 keeps all 5 exercises** — 12.5, "Capstone Reflection & the Final QA Sweep," is a personal reflection and whole-level self-diagnostic, not a duplicate of Project Task Lab 12's CONFIG-refactor/Complete-Game-assembly work, so there was nothing to drop. Exercises 12.2 and 12.3's text now notes `CONFIG` isn't pre-existing in this sandbox, so the AI should declare it (with a demo value) in the same snippet, so the fix is visibly proven in the Preview rather than throwing a "not defined" error.

### Minute-by-Minute Timeline
* **00:00 - 00:15 | Warm-Up**: Review criteria checklists
* **00:15 - 01:00 | Digital Assessment Part A**: Layout Builder (HTML, CSS positioning, variables, constraints)
* **01:00 - 01:45 | Assessment Part B**: Game Walkthrough & Defense (Malicious QA audit)
* **01:45 - 02:00 | Assessment Part C**: Logic Tracing & Debugging Challenge

### 1. Tutor Guidance: Evaluation Solutions
* **Part A (Blueprint Check)**: Verify the student mapped HTML tag structures (`game-track`, `player-car`), CSS layouts, JS variables, and lane boundaries.
* **Part B (Defense Check)**: Verify collision checks and clamping values at the lane boundaries `carX = 35` (leftmost) and `carX = 295` (rightmost).
* **Part C (Diagnostic Check)**: Student must debug overlap math and correct boundary signs.
* **Take-Home Evaluation**: Verify self-reflection logs on variables, coordinate updates, and DOM interactions.

### 2. Digital Sandbox Exercises & Solutions (Capstone Lab)

Students complete **5 exercises** (see the Content note above — Session 12 is the one session that keeps all 5), each with 3 boxes: **1) Plan & Design**, **2) Write the AI Prompt & Paste the Output Code**, **3) Explain the Output Code**. All 5 run live in the Live Racing Game Preview. This final lab pulls together *config-driven design* (removing magic numbers) and a full *QA sweep* over everything built since Session 4. **Verify grades the Prompt box only**, on prompt-writing quality (clarity, specificity, completeness).

* **Exercise 12.1: The Configuration Object & Difficulty Scaling**
  * *Goal given to the student:* plan the CONFIG object's fields (startSpeed, difficultyMultiplier, maxSpeed), then build a difficulty-scaling function reading from CONFIG, clamped to `CONFIG.maxSpeed`.
  * *A strong answer shows:* the function referencing CONFIG rather than hardcoded numbers; an explanation correctly evaluating `startSpeed + score * difficultyMultiplier` at score 50 (10).
  * *Why:* Magic numbers scattered through the code are hard to find and change — a CONFIG object gathers every tunable value in one place.
* **Exercise 12.2: The Unbounded Speed Bug**
  * *Goal given to the student:* add a `Math.min` clamp so `speed` never exceeds `CONFIG.maxSpeed`. The exercise text notes this box runs standalone, so the AI should declare `CONFIG`/`speed` (starting above the cap, to prove the clamp works) and log the result.
  * *A strong answer shows:* a self-contained, demonstrated `Math.min(speed, CONFIG.maxSpeed)`; an explanation confirming speed gets capped at `CONFIG.maxSpeed`, never higher.
  * *Why:* A ramp with no ceiling eventually makes the game unplayable.
* **Exercise 12.3: Refactoring Magic Numbers**
  * *Goal given to the student:* replace the hardcoded 35/295 boundary numbers with `CONFIG.leftBound`/`CONFIG.rightBound`. The exercise text notes this box runs standalone, so the AI should declare `CONFIG` with those fields, set `carX` outside a boundary to prove the clamp works, and log the result.
  * *A strong answer shows:* a self-contained, demonstrated fix reading from CONFIG; an explanation covering that every tunable number now lives in one place, easy to find and change.
  * *Why:* The literal 35 and 295 from Session 6 become named config properties — the definition of maintainable code.
* **Exercise 12.4: The Final Diagnostic**
  * *Goal given to the student:* diagnose and fix a seeded flipped comparison operator in `checkCollision()`.
  * *A strong answer shows:* the corrected `rect1.x < rect2.x + rect2.width`; an explanation correctly identifying which comparison was flipped and confirming the corrected version.
  * *Why:* The same class of bug as Session 10, now caught fast under exam conditions.
* **Exercise 12.5: Capstone Reflection & the Final QA Sweep**
  * *Goal given to the student:* list the 4 core systems this final QA sweep must verify (variables, boundaries, collision, restart), then build a diagnostic script logging PASS/FAIL for each via `console.log`.
  * *A strong answer shows:* a script checking all 4 systems and logging results; an explanation with a genuine, specific personal reflection naming an actual bug and how tracing values helped find it — there's no single correct answer here, only a genuine one.
  * *Why:* A final QA pass checks each pillar in turn, and metacognition on the trickiest bug turns a semester of fixes into a transferable debugging habit for Level 2.

### 3. Project Task Milestone — Expected Student Answers (3-box format)

The **Project Journal** milestone card ("Lab 12: Concept-Mastery Labs & Final Assessment") tracks the student's final config-driven build — this session **collects every constant the student's OWN game has accumulated since Session 4**, not a generic template list. It uses the same 3-box shape: **1) Plan & Design**, **2) Prompt & Output Code** (with the live Racing Game Preview), **3) Explain the Code**. This session's Project Journal detail panel also includes a **"🏁 Your Complete Game — Assembled"** section below the tabs, pulling the student's own saved HTML (Session 2), CSS (Session 3), and game.js (this session, carrying every session since 4) directly from their own journal history — the actual finished game, assembled from real saved work, not a canned demo.

1. **Plan & Design**
   - *Expected:* "A config-driven finish to the exact game I've been building since Session 4: obstacle speed now scales with score, and everything from the scoreboard to the crash screen works smoothly together. Parts needed: none new on screen — this lab collects all of MY game's tunable numbers (TRACK_WIDTH, LANE_WIDTH, my boundary limits, MAX_SPEED, etc.) into one place."
   - *Why:* Unlike the sandbox (which uses example CONFIG values), the Project Task requires the student to gather their OWN accumulated constants — a generic answer would be visibly wrong here.

2. **Prompt & Output Code**
   - *Expected prompt:* "Look back through everything above — I already have TRACK_WIDTH, LANE_WIDTH, my left/right boundary limits, and MAX_SPEED scattered across earlier sessions' code. Gather all of MY OWN constants (not a generic template list) into one read-only CONFIG object, then add logic that increases obstacle speed as score climbs, clamped to CONFIG.maxSpeed. Every place in my code that used one of those magic numbers directly should now read from CONFIG instead."
   - *Expected Output Code:* the AI's real refactored code, pasted and tested live, actually referencing the student's own prior constants — then verified against the assembled Complete Game section below.
   - *Why:* This is the level's capstone integration check — a correct answer must reflect the student's real accumulated project, not a fresh example.

3. **Explain the Code**
   - *Expected checklist:* CONFIG actually contains every constant the student's game already had, not a fresh generic set; difficulty scaling has upper clamping to prevent unplayable speeds; the boundary guards and obstacle logic from earlier sessions now read from CONFIG instead of their original hardcoded numbers.
   - *Expected Socratic answer* — *"Why is it bad practice to hardcode layout dimensions directly inside code logic? How does a config object simplify game changes?"* → Hardcoded values are duplicated and easy to miss when a change is needed, so edits are error-prone; a config object gives every tunable a single named home, so one edit updates the whole game consistently.

* **Homework / Certification Checklist**: the student's finished Project Journal build uses a single `CONFIG` object gathering their OWN game's constants, applies score-based difficulty scaling clamped to `maxSpeed`, and the "Complete Game — Assembled" section shows a coherent, working build pulled from their own Sessions 2, 3, and 4-12 saved work.
