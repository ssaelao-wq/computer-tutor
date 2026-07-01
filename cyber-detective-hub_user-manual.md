# 🕵️‍♂️ Cyber Detective Hub - User Manual

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
* **Search Box**: Search for specific terms, commands (e.g., `for`, `if`), or concepts.
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
* **Mars Rover Colony**: Focuses on airlock controllers, telemetry pipelines, and solar grid grids.
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

## ❓ FAQ & Troubleshooting

### 1. I submitted a case but my score didn't update!
Make sure you click the green **Submit Case File** button inside the *Prompt Sandbox* tab after running a successful simulator compile, not just the "Run Simulator" button.

### 2. I changed a student's level, but they still see the old level.
Ask the student to perform a **browser refresh** (Ctrl + F5 or Cmd + Shift + R) or log out and log back in to clear cached tokens and download the updated profile information.

### 3. Can students access other levels?
No. Once a student is logged in, their client dashboard locks out all non-assigned level selectors on both the Quest Files and Curriculum Guide tabs. Only their assigned level remains active.
