# 🕵️‍♂️ Cyber Detective Hub - Complete User Manual

Welcome to the **Cyber Detective Hub**! This application is your digital training ground and command center. Here, you will roleplay as a digital detective, analyzing logs, scripting code logic, and securing systems. 

This guide is designed to help both **Students** and **Teachers** navigate the platform, solve cases, track scores, and manage student profiles.

---

## 🧭 Navigation Menus (Left Sidebar)

You can navigate through different rooms in the Hub using the sidebar on the left. Here is what each menu does:

### 1. 📊 Dashboard
Your personal command station.
* **What you see**: Your current rank badge, total XP points, and overall case completion statistics.
* **Activity Feed**: Shows a chronological timeline of your recent actions (e.g. submitting a quest, unlocking a rank, or revising a journal).

### 2. 📁 Quest Files
This is your Case Board containing all sub-quests.
* **Level Selector**: Switch between Levels 1 to 4 to see sub-quests.
  > [!NOTE]
  > Students can only view and select the Level assigned to them by their teacher. Non-assigned levels will display a lock icon (`🔒`) and are deactivated.
* **Quest Selection**: Click any quest card on the left sidebar to view details, XP reward, and objectives.
* **Launch Case**: Click **Open in Sandbox** to load the case template directly into your Prompt Sandbox to start writing code.

### 3. 📖 Curriculum Guide
An interactive encyclopedia of all learning objectives and topics.
* **Level Tabs**: View Foundations, AI Language, System Architecture, and Software Engineering tracks.
* **Search Box**: Search for specific terms, concepts (e.g., `for`, `if`, loop, conditions).
* **Perspective Toggle**:
  - **Student Mode**: Displays the core goals, warm-ups, and hands-on activities.
  - **Teacher Mode** (Only for teachers): Displays Socratic prompting guidelines, Socratic check questions, and exact step-by-step code solutions.

### 4. 💻 Prompt Sandbox
The coding workspace where you write, simulate, and compile instructions.
* **State panel**: Displays the active *Role*, *Task*, *Input parameters*, and *Edge Case* constraints for the active case.
* **Code Editor**: Write your JavaScript sequence rules, loops, and conditions here.
* **Run Simulator**: Execute the code. Watch variables update in the **Telemetry Monitor** and inspect the **Execution Log** output.
* **Submit Case File**: Click this green button once your script passes simulator runs to complete the quest and earn **+100 XP**.

### 📝 Prompt Journal
Your detective notebook and homework repository.
* **Select Journal**: Click on a journal entry to view details.
* **Revision System**: Compare two versions of your code solutions (e.g. `Version 1` literal logic vs `Version 2` precise validation guards).
* **Save Notebook**: Save edits to your journal entries directly to the database.

### 🏆 Leaderboard
The global ranking system.
* Displays all active detectives in the training academy sorted by total XP.
* Compare your progress against peers and watch your rank climb!

---

## 📈 The Scoring System (XP & Ranks)

As you complete cases, you earn **Experience Points (XP)** which automatically level up your Detective Rank.

### How Students Earn XP
1. **Solve Sandbox Cases**: Click **Submit Case File** in the Prompt Sandbox after writing a correct solution to earn **+100 XP** per case.
2. **Submit Homework**: Write your answers in the Prompt Journal and save them to receive credit from the teacher.

### Detective Rank Progression Table

| Rank Title | XP Threshold | Permissions / Status |
| :--- | :--- | :--- |
| **Junior Investigator** | `0 - 799 XP` | Default starting rank. Learning literal logic and basics. |
| **Senior Investigator** | `800 - 1199 XP` | Access to advanced loops, functions, and testing parameters. |
| **Master Detective** | `1200+ XP` | Completed Level 1 and graduated to high-level engineering. |

---

## 👩‍🏫 Teacher & Admin Guide

If you are logged in as a **Teacher** (using the teacher profile credentials), an additional **Admin Panel** tab will appear at the bottom of your sidebar navigation.

### 1. Swap Campaign Themes
Change the visual theme of the entire workspace:
* **Cyberpunk Infiltration**: Focuses on drone routing, lock bypasses, and security logs.
* **Mars Rover Colony**: Focuses on airlock controllers, telemetry pipelines, and solar grids.
* **Wizarding School Castle**: Focuses on automated cauldrons, spell lock triggers, and alchemy scales.

### 2. Register New Student Profiles
To register a student for a 1-on-1 tutoring course:
1. Navigate to **Admin Panel** ➔ **Register New Student Profile**.
2. Enter the student's **Name / Alias**, **Username**, and **Access Password**.
3. Select the starting level from the **Student Assigned Level** dropdown (`Level 1` to `Level 4`).
4. Click **Create Student Profile** to register them.

### 3. Change Student Levels
If a student passes an assessment and is ready to graduate to the next level:
1. Locate the student's row in the **Active Student Roster** table on the right.
2. Click the dropdown menu in the **Assigned Level** column.
3. Select their new level (e.g., change from `L1` to `L2`). 
4. The system will save changes immediately. The next time the student logs in (or refreshes their browser), they will be automatically routed to the new Level tab, and other levels will lock.

### 4. Administer Student Scores (Add / Deduct XP)
To test rank progression, debug unlocked panels, or adjust student scores:
* Under **Local Detective Statistics Overrides**, click:
  - **Deduct 100 XP**: Subtracts 100 points.
  - **Add 100 XP**: Adds 100 points.
  - **Promote to Master Rank**: Sets points to 1200 instantly to test graduate view.

---

## 🧭 Step-by-Step Screen Guide

### 1. Dashboard Screen Layout & Flow
The Dashboard gives you an overview of your progress.
* **Rank Progression Panel (Left)**: Displays your current rank name, a visual progress bar indicating how close you are to the next rank tier, and a lock status showing unlocked access tiers.
* **Stats Overview Grid (Top)**: Four indicator boxes showing your **Current Rank**, **XP Score**, **Solved Quests count**, and **Saved Journal entries**.
* **Recent Achievements Feed (Right)**: A live timeline showing updates (e.g., "Assigned key updated", "Solved case: Level 1 Session 5").
* **Student Workflow**: Use this screen to verify that your points updated successfully after completing a case.

### 2. Quest Files (Cases) Screen Layout & Flow
This is where you choose your next coding challenge.
* **Top Level Tabs**: Buttons representing Level 1 to 4. Students will see lock padlocks (`🔒`) on non-assigned levels, and clicking them does nothing. Teachers can click any tab to inspect curriculum content.
* **Overarching Case Brief (Top Banner)**: A green/blue highlighted panel showing the main quest target for the selected Level (e.g., "Build an automated airlock pressure pipeline to shield the colony from sandstorms").
* **Sub-Quest Cards List (Left Column)**: Clickable card lists showing individual sessions. Each card displays:
  - **Sub-Quest Title** (e.g., *Session 5: Round and Round - Loops*)
  - **Status Badge**: Displays `ACTIVE` (cyan) if incomplete, or `COMPLETED` (green) if solved.
* **Detailed Brief Workspace (Right Column)**: Displays information for the selected session card:
  - **Quest Name** and **XP Reward** size.
  - **Learning Objectives Checklist** (what concepts are tested in this case).
  - **Open in Sandbox Button**: Clicking this loads the session template data into your workspace and shifts your screen tab automatically to the *Prompt Sandbox*.

### 3. Curriculum Guide Screen Layout & Flow
This is your learning catalog and directory.
* **Curriculum Level Tabs (Top)**: Select Level 1, 2, 3, or 4 tracks. Restricts students to their assigned level.
* **Search Field (Right)**: Type keywords (e.g., "conditions", "functions") to filter list views to specific matching session entries instantly.
* **Mode Toggle Slider**: Select **Student Mode** to review objectives and assignments, or **Teacher Mode** to unlock exact solutions, Socratic prompts, and check questions.
* **Session Cards (Grid)**: Displays detailed timelines, warm-ups, board lesson points, hands-on tasks, and homework scopes.

### 4. Prompt Sandbox Screen Layout & Flow
Your primary environment to compile and verify code solutions.
* **Case Specification Panel (Left)**: Displays the context:
  - **Assigned Role**: Your virtual job title (e.g. IoT Embedded System Architect).
  - **Target Task**: The problem statement.
  - **Input variables**: Parameters passed to your script.
  - **Edge Case constraints**: Boundary constraints (e.g. handling null, limits).
* **Telemetry State Monitor (Middle-Left)**: Live registers reflecting variable states (e.g., `mode = "idle"`, `waterLevel = 45`). These values change dynamically as the simulator runs your code.
* **System Log Terminal (Bottom-Left)**: Black compiler window showing code execution logs. Prints compile-time successes or runtime exception messages.
* **Code Editor Panel (Right)**:
  - Editable workspace with preloaded script templates and comments.
  - **Run Simulator Button (Green)**: Compiles and runs the code against sandbox state parameters. Watch the variables change in the Telemetry monitor and check the Log terminal.
  - **Submit Case File Button (Blue)**: Disables during edit mode; becomes clickable ONLY after a successful simulator test run. Click this to save your completion to the database, earn **+100 XP**, and post a log to the dashboard timeline.

### 5. Prompt Journal Screen Layout & Flow
Your homework logging notebook.
* **Journal List (Left Sidebar)**: Clickable list of saved case journals.
* **Editor Workspace (Right Column)**:
  - **Notebook Header**: Title and creation date of the entry.
  - **Version selector buttons (v1, v2)**: Allows comparing your progression (e.g. from raw pseudo-rules to refined logic scripts).
  - **Prompt Spec (Read-only)**: The lesson prompt.
  - **Code Editor (Editable)**: Large text area where you write your logic or prompt configuration.
  - **Save Version Button (Blue)**: Saves the text changes directly to the database.
  - **Add New Version Button (Green)**: Compiles a new version slot (e.g., creating `Version 3`) to save a new iteration.

### 6. Leaderboard Screen Layout & Flow
The student rankings list.
* Displays a table of all registered student profiles.
* Lists **Rank Position**, **Name**, **Rank badge** (Junior/Senior/Master), **Current active operation**, and **Total XP Score**.
* Your user row is highlighted with a green outline and a "YOU" badge.

### 7. Admin Panel Screen Layout & Flow
Only accessible if logged in as a **Teacher**.
* **Active Campaign Cards Grid (Top)**: Select Cyberpunk, Mars, or Fantasy themes to reskin the entire platform layout instantly.
* **Register Student Profile Form (Left)**: Form containing fields for Name, Username, Security Password, and a dropdown selector for the student's starting Level. Click **Create Student Profile** to save.
* **Active Student Roster Table (Right)**:
  - Shows registered students, usernames, and points.
  - **Assigned Level Dropdown Selector**: Displays their current level. Click this select box to change their level (e.g. upgrade from `L1` to `L2`). The database updates immediately, locking out other levels for the student.
  - **Local Statistics Overrides (Bottom)**: Deduction, Addition, and Promotion buttons to adjust your points for debugging purposes.

---

## ❓ FAQ & Troubleshooting

### 1. I submitted a case but my score didn't update!
Make sure you click the green **Submit Case File** button inside the *Prompt Sandbox* tab after running a successful simulator compile, not just the "Run Simulator" button.

### 2. I changed a student's level, but they still see the old level.
Ask the student to perform a **browser refresh** (Ctrl + F5 or Cmd + Shift + R) or log out and log back in to clear cached tokens and download the updated profile information.

### 3. Can students access other levels?
No. Once a student is logged in, their client dashboard locks out all non-assigned level selectors on both the Quest Files and Curriculum Guide tabs. Only their assigned level remains active.
