# Project Business Context

## 🧠 Global Knowledge & Philosophy
- For the global project philosophy, curriculum themes, and overarching logic, always refer to `../PRJ_KNOWLEDGE.md` in the project root.

## 👥 Who is this for?
- Targeted at students and learners using the Computer Tutor system, specifically for engaging with "Cyber Detective Hub" quests and interactive programming challenges.

## 💰 Core Business Logic & Rules
- Users earn XP points (tracked in `user_profile`) by completing quests and writing code in the Sandbox.
- Tracks history of prompt specifications and generated code blocks as `journal_versions` under `journal_entries`.
- Quest completion state is carefully maintained in `completed_quests` to prevent replay exploits.
- Integration with Thai 4.0 grading logic (where applicable, as noted in rules).

## 🗺️ Key User Flows
1. User logs in -> Fetches `user_profile` and cumulative XP.
2. User enters a Quest -> Interacts with Sandbox -> Saves `journal_entries`.
3. User completes Quest -> Marks in `completed_quests` -> Awards XP.
