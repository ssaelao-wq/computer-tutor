# Computer Tutor in the AI Era — Complete Curriculum (Improved)
 
## 1. Executive Summary

The landscape of software engineering has fundamentally changed. AI now handles the historical bottleneck of writing syntax and debugging compiler errors. However, skipping coding entirely creates a dangerous disconnect — to effectively direct AI, a creator must understand the constraints, mechanics, and underlying logic of systems.

**Our mission:** Shift technical education from training **"Syntax Writers"** to cultivating **"System Architects"** — people who think precisely, design defensively, and direct AI tools with purpose.

> [!IMPORTANT]
> **Design Principles of This Curriculum**
> - **Tool-Agnostic** — All exercises describe capabilities, not brand names. AI tools evolve rapidly; the skills must outlast any specific tool.
> - **Age-Flexible** — Core content targets ages 11–14, with adaptation notes for younger (9–10) and older (15–17) students.
> - **Practice-First** — This is a tutor-led practice/learning program, not an academic lecture course. Every session has hands-on activities.
> - **Ethics-Integrated** — AI responsibility is woven into every level, not bolted on as a separate unit.

---

## 2. Core Philosophy: "The Chef Analogy"

| Era | Analogy | Lesson |
|-----|---------|--------|
| **The Past** | A chef spent years mastering knife skills — chopping vegetables to precise millimeter requirements. | Syntax memorization was the gatekeeping skill. |
| **The Present** | Automated processors chop ingredients perfectly in milliseconds. | AI generates code faster and more accurately than manual typing. |
| **The Future** | The chef's value lies in recipe creation, flavor profiling, ingredient composition, and kitchen management. | The student's value lies in **system design, logical specification, quality assurance, and ethical judgment.** |

**Code generation is the "automated food processor." The student must become the master chef who designs the recipe, manages the kitchen, and ensures food safety.**

---

## 3. Pedagogical Methods (Cognitive Resistance Framework)

In the AI era, if we simply let a student ask AI to "make a game," zero critical thinking occurs. We introduce **cognitive resistance** through five methods:

```
[Traditional Coding Resistance]  ──►  Wrestling with syntax errors
[AI-Era Cognitive Resistance]    ──►  Systemic debugging, constraint specification,
                                       edge-case modeling, ethical judgment
```

### A. The "Fallible Intern" Mindset
Students treat AI as a brilliant but careless intern. They must **audit** every output, never copy-paste blindly. Tutor asks: *"Why did the AI choose this approach? Where could it fail?"*

### B. The "Lego Instruction Game"
Ambiguity is the enemy of logic. Students practice writing specifications in absolute, unambiguous terms — like assembly instructions where every step must be explicit.

### C. The "Break It" Mentality
True critical thinking means identifying failure states *before* they happen. Students actively try to break systems: *"What if the user enters text in a number field? What if the internet disconnects mid-save?"*

### D. System Deconstruction
Building is easy; understanding *why* a system works is hard. Students reverse-engineer existing applications by mapping their logic flows before building anything new.

### E. The Ethical Lens *(New)*
Every design decision has consequences. Students learn to ask: *"Who could this hurt? What data am I collecting and why? What happens when the AI is wrong?"*

### F. The Prompt Journal Protocol *(New)*
Every session, students maintain a **Prompt Journal** — a structured log of their AI interactions. This is not a free-form notebook; it follows a strict template that builds auditing discipline:

| Section | Purpose | Example Entry |
|---------|---------|---------------|
| **My Specification** | What I asked the AI to build | *"Generate a JS function that moves the car left by one lane when ArrowLeft is pressed"* |
| **AI's Output** | Paste the AI's generated code | *(code block)* |
| **My Audit Notes** | What I found wrong, surprising, or worth questioning | *"The AI used `var` instead of `let`. It also didn't add boundary checks."* |
| **My Corrections** | What I changed and why | *"Changed `var` to `let` for block scoping. Added `if (carX > 0)` guard."* |
| **Concepts Learned** | Key terms or patterns I understood from this cycle | *"Block scoping, boundary clamping, event.key matching"* |

The Prompt Journal becomes each student's primary portfolio artifact — evidence of growth from passive consumer to active auditor of AI-generated code.

### G. AI-Era Pedagogical Best Practices
To maximize logical thinking and technology knowledge while using AI code assistants, tutors must enforce these four practices:

1. **The "No Code Words" Prompting Rule**: Challenge students to write prompt specifications describing the system behavior using mathematical and physical constraints rather than direct programming terms. (e.g. *Prompting: "If the car position is larger than 260, snap it to 260" instead of "Write a JS conditional clamp for carX"*).
2. **"Seeded Bug" Diagnostics**: Never let students ask AI to blindly generate complete features. Instead, present them with pre-generated code containing hidden logical bugs and require them to identify, explain, and write prompts to correct the specific line of code that failed.
3. **The "Code Defense" Review**: During code audits, require students to explain the generated script by answering boundary-condition questions (e.g. *"What happens if this input parameter is negative? If we delete line 15, how does the UI shift?"*).
4. **The Prompt Journal as the Primary Grade Metric**: Shift grading criteria from code execution (which AI handles) to the quality of the Prompt Journal. Grade the precision of the initial specification and the depth of the student's own audit notes.

### H. The 3-Part Session Flow
Every session decodes into three structural phases that balance concept mastery, diagnostic practice, and applied practice. **What Part 3 means depends on the level** (per the 2026-07-13 restructure): at Levels 1–2 it is a *standalone themed mini-lab* (no cumulative project); at Levels 3–4 it is *real project work* on the guided project (L3) or capstone game (L4).

| Phase | Purpose | Activities |
|---|---|---|
| **1. Content & Concept Learning** | Understand the core programming construct or architecture model. | Socratic board lectures, reverse-engineering real-world systems, and reading real-world case studies of system failures. |
| **2. Short Seeded-Bug Exercises** | Develop diagnostics, code reading, and debugging precision. | Students work with a small, isolated sandbox script that is intentionally broken. They must inspect the code, identify the logic gap, and correct it. |
| **3. Applied Integration** | Apply the concept in the level's themed setting. | **L1–2:** students spec a small themed artifact (e.g., a racing-track HUD snippet), prompt AI to generate it, audit the output in their Prompt Journal — each lab stands alone. **L3–4:** students spec a feature, prompt AI, audit, and integrate it into their actual project repository. |

### I. Enhancing the 3-Part Flow (Tutor Guidelines)
To maximize the efficacy of this 3-part session structure, tutors should implement these four operational guidelines:

1. **Weave Ethics into Part 3 as "Product Constraints"**: Instead of teaching ethics as an abstract discussion, translate ethical dilemmas into direct design requirements for the game target. (e.g., in Level 1 Session 3, the student must build a toggle button for an accessibility high-contrast color mode rather than just discussing colorblindness).
2. **Decouple the Environments (Sandbox vs. Local Workspace)**: Maintain separate workspaces to keep the student's mind and project clean.
   - **Part 2 (Seeded Bugs)**: Should be run in a temporary, isolated sandbox file (e.g., `bug_hunt_s5.js`). The student's sole focus is reading and locating the logic gap.
   - **Part 3 (Applied Integration)**: At L1–2, runs in a fresh standalone lab file per session (e.g., `lab_s5_steering.html`) — labs are not carried forward. At L3–4, takes place directly inside the student's local project repository.
3. **Implement "Bronze, Silver, Gold" Specs for Part 3**: Account for varying learning speeds by tiering the integration specs:
   - **Bronze (Pass)**: The baseline logical requirement for the session (e.g., boundary clamping at the borders).
   - **Silver (Optional)**: Adds minor complexity or visual feedback (e.g., boundary collision triggers screen shake).
   - **Gold (Advanced)**: Adds advanced math or performance elements (e.g., adding drift/slide friction dynamics).
4. **End Part 3 with a 5-Minute "Peer Handoff"**: Before ending, have students swap screens or share live URLs. The peer acts as a hostile tester trying to find edge-case failures, while the presenter must explain how their logic defends the application. This builds verbal articulation of tech systems.

---

## 4. Program Structure

| | Level 1: Beginner | Level 2: Intermediate | Level 3: Advanced | Level 4: Capstone |
|---|---|---|---|---|
| **Title** | "Technical Foundations I" *(Racing Car theme)* | "Technical Foundations II" *(Mars Colony theme)* | "The Development Process" *(guided project: Cyberpunk Hacker Arena)* | "The Capstone Build" *(student's own game)* |
| **Role of Level** | Technical knowledge — web & programming basics | Technical knowledge — data, graphics, client-server & database fundamentals | Learn the process of developing software on one guided project | Develop an actual, complete, deployed game |
| **Focus** | HTML/CSS/JS, logic, events, loops, functions, DOM | Arrays & objects, Canvas, state, async/fetch, HTTP, SQL & data-security basics | PRD, system design, Git/GitHub, AI build loop, code review, testing, deployment | Concept-to-launch sprints, automated testing, CI/CD, monitoring, live defense |
| **Syntax Approach** | Syntax in context — themed exercises and standalone mini-labs | Syntax in context — themed exercises, canvas labs, fetch labs, SQL playground | Applied — new syntax only as the guided project needs it | Applied — student selects from the taught stack |
| **Sessions** | 12 sessions × 2 hours | 13 sessions × 2 hours | 14 sessions × 2 hours | 12 sessions × 2 hours |
| **Total Hours** | 24 hours | 26 hours | 28 hours | 24 hours |
| **Assessment** | 1 week (concept mastery: build-and-explain labs + debug challenge) | 1 week (data/API/SQL diagnostics + defense) | 1 week (guided-project capstone defense: process artifacts + working build) | 1 week (live launch + system pitch) |

> **Track note:** Levels 3–4 are *project tracks*. The default track is a game (Cyberpunk Hacker Arena guided project; student's own game capstone). Alternative tracks with the same process/milestone structure — e.g., building a web application — are planned for later.

### Age Adaptation Guide

| Age Group | Level 1 Adjustments | Level 2 Adjustments | Level 3 Adjustments | Level 4 Adjustments |
|-----------|--------------------|--------------------|---------------------|---------------------|
| **9–10** | Use physical manipulatives (cards, blocks). Extend to 15 sessions. Simplify vocabulary. Use game-based contexts only. | Defer to age 11+. If attempted: extend to 15 sessions and teach the database sessions as visual table-drawing exercises only. | Not recommended. | Not recommended. |
| **11–14** | Core curriculum as designed. | Core curriculum as designed. | Core curriculum as designed. | Core curriculum as designed (highly recommended with teacher scaffolding). |
| **15–17** | Can compress to 10 sessions. Add algorithmic complexity discussions. Use real-world business scenarios. | Can compress to 10 sessions. Introduce basic algorithm analysis. Add collaborative team projects. | Add cloud architecture concepts. Introduce CI/CD pipelines conceptually. Add career pathway discussions. | Complete deployment independently. Integrate real third-party APIs (payment/maps) and deploy to a personal domain. |

## 9. Teacher Training Companion Guide

### Teacher Role: "The Code Judge" (Not the Syntax Tutor)

> [!CAUTION]
> **Critical Mindset Shift:** Teachers in this curriculum must NOT answer "how do I fix this line?" Instead, they ask "what did you instruct the AI to do, and why did it output this specific behavior?"

### Core Teaching Skills

| Skill | Description | Practice Method |
|-------|-------------|-----------------|
| **Socratic Questioning** | Guide through questions, not answers | Role-play sessions with mock student scenarios |
| **AI Tool Fluency** | Comfortable with current AI code generation tools | Monthly AI tool exploration sessions |
| **Bug Classification** | Can identify and categorize all 4 bug types | Weekly debugging exercises using AI-generated code |
| **Architecture Thinking** | Can evaluate system designs for completeness | Practice creating and reviewing architecture documents |
| **Ethics Facilitation** | Can lead nuanced ethics discussions without lecturing | Ethics scenario practice with peer teachers |

### Preparation Checklist (Per Level)

**Before Teaching Level 1:**
- [ ] Complete all Session exercises yourself
- [ ] Create 5 backup flowchart scenarios (in case students finish early)
- [ ] Prepare "Evil User" questions for each session's edge case discussions
- [ ] Test all block-based programming tools on classroom computers
- [ ] Prepare printed materials for off-screen exercises

**Before Teaching Level 2:**
- [ ] Generate 10 buggy code snippets at varying difficulty levels (arrays, canvas, fetch, SQL)
- [ ] Test the chosen browser-based SQL playground with the database-fundamentals exercises
- [ ] Create a sample Prompt Journal as a model for students
- [ ] Prepare alternative exercises for students who progress faster
- [ ] Review current AI tool landscape (tools change — update exercises as needed)

**Before Teaching Level 3:**
- [ ] Build the guided project (Cyberpunk Hacker Arena) yourself end-to-end, following the same process students will run
- [ ] Prepare a model PRD and system-design blueprint as reference artifacts
- [ ] Set up a demo GitHub repository showing the expected commit/PR history
- [ ] Verify the local MySQL (Servbay/XAMPP) setup and deployment steps on a classroom machine
- [ ] Create a rubric scoring practice set (score sample process artifacts to calibrate)

**Before Teaching Level 4:**
- [ ] Set up a sample staging deployment linked to a dummy GitHub repository
- [ ] Verify that environment variables (.env files) are excluded from Git commits
- [ ] Prepare a capstone scoping checklist (help students size a game they can actually finish)
- [ ] Test the CI/CD template pipeline (build/test/deploy on push) students will copy
- [ ] Set up a shared Vercel/Netlify classroom team dashboard (optional, if using team deploys)

### Handling Common Challenges

| Challenge | Response |
|-----------|----------|
| Student says "The AI already built it, why do I need to understand it?" | Ask them to modify one feature. When they struggle, point out that understanding enables control. |
| Student is frustrated that AI "doesn't listen" | This is a learning moment — help them find the ambiguity in their prompt. |
| Student copies AI code without understanding | Activate "Fallible Intern" protocol — ask Socratic questions about every line. |
| Advanced student is bored | Challenge them with harder edge cases, or have them mentor struggling students. |
| AI tool is unavailable / down | Every session should have an offline backup activity. Never rely 100% on tool availability. |
| Ethics discussion becomes heated | Acknowledge that these are genuinely hard questions. Frame as exploration, not debate with winners/losers. |

### Continuous Improvement

- **Monthly:** Review and update AI tool references (tools evolve rapidly)
- **Per Cohort:** Collect student feedback; adjust session pacing based on actual completion rates
- **Quarterly:** Review industry trends; update case studies and examples
- **Annually:** Full curriculum review; revise based on how AI tool landscape has changed

---

## 10. Program Summary

```
┌─────────────────────────────────────────────────────────┐
│                 COMPUTER TUTOR IN THE AI ERA             │
│          From Syntax Writer to System Architect          │
│          To Live Real-World Software Deployer           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Level 1: TECHNICAL FOUNDATIONS I (24 hours)            │
│  (Racing Car theme — knowledge, not a game build)       │
│  ├─ Module 1: Inputs, Processing & Outputs (Sessions 1-3)│
│  ├─ Module 2: Game State, Input & Boundaries (Sessions 4-6)│
│  ├─ Module 3: Problem Decomposition & The Logic Map (Sessions 7-9)│
│  ├─ Module 4: Collision Detection & Dashboard Systems (Sessions 10-11)│
│  └─ Assessment & Graduation               (Session 12)  │
│                                                         │
│  Level 2: TECHNICAL FOUNDATIONS II (26 hours)           │
│  (Mars Colony theme — knowledge, not a game build)      │
│  ├─ Module 1: Graphics & Data Structures   (Sessions 1-4)│
│  ├─ Module 2: Interaction, State & Performance (Sessions 5-7)│
│  ├─ Module 3: Client-Server & Async APIs   (Sessions 8-10)│
│  ├─ Module 4: Database Fundamentals & Data Security (Sessions 11-12)│
│  └─ Assessment & Defense                  (Session 13)  │
│                                                         │
│  Level 3: THE DEVELOPMENT PROCESS (28 hours)            │
│  (guided project track: Cyberpunk Hacker Arena)         │
│  ├─ Module 1: From Idea to Plan            (Sessions 1-4)│
│  ├─ Module 2: The Build Loop               (Sessions 5-9)│
│  ├─ Module 3: Integrate, Deploy & Polish   (Sessions 10-12)│
│  └─ Capstone Defense & Reflection         (Sessions 13-14)│
│                                                         │
│  Level 4: THE CAPSTONE BUILD (24 hours)                 │
│  (the student's own complete game — track swappable)    │
│  ├─ Module 1: Product Definition & Setup   (Sessions 1-3)│
│  ├─ Module 2: Build Sprints                (Sessions 4-8)│
│  ├─ Module 3: Ship & Operate               (Sessions 9-11)│
│  └─ Grand Launch & System Defense         (Session 12)  │
│                                                         │
│  Total Program: 51 sessions × 2 hours = 102 hours       │
│  Estimated Duration: ~12 months at 1 session/week       │
│                                                         │
│  Cross-Cutting Themes:                                  │
│  ✦ AI Ethics integrated into every level                │
│  ✦ Tool-agnostic — survives AI tool evolution           │
│  ✦ Portfolio culture — visible learning journey         │
│  ✦ Off-screen assessments — verify independent thinking │
│  ✦ Teacher as "Code Judge" — Socratic method throughout │
│                                                         │
└─────────────────────────────────────────────────────────┘
```
