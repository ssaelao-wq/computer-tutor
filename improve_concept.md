# Improvement Concept: Closing the Gap Between L1 and "Can Build a Small Web App"

**Status:** Living proposal (v6). Parts I–II record what was diagnosed and shipped through 2026-07-30. **Part III is the current recommended direction** — a research-grounded restructure that supersedes several earlier decisions. Nothing in Part III is built or approved.

**Version history:** v1 diagnosed the gap, proposed a UI box (rejected). v2 replaced it with an AI Auditor. v3 added "instructions must teach goals, not dictate answers." v4 extended the pilot to S1/S5/S6. v5 corrected v4's stale description of the grading mechanism and widened scope to S1–S6. **v6 (this version)** adds Part III: after the teacher judged the structure still inefficient, research into published CS-education work and other platforms produced a different approach — see `research_ai_era_pedagogy.md` for the full evidence base. Part III supersedes the grading mechanism and the uniform exercise shape from Parts I–II.

**Relationship to `PRJ_KNOWLEDGE.md`:** nothing here is authoritative until the teacher decides and `PRJ_KNOWLEDGE.md` §2/§3/§5/§6 are updated to match.

---

## Part I — What shipped (historical record, partly superseded)

### Principles established through feedback rounds
1. **Don't force naturally-occurring steps into a separate UI box.** (v1's "Test & Fix" box, rejected.) — *Part III revisits this: the research says the problem wasn't the step, it was the artifact. A reflection textbox is hollow; a written test case is not.*
2. **Grade the skill actually being taught, not a proxy.** Keyword `validate()` → AI-graded understanding → AI-graded prompt quality. — *Part III supersedes this again: still no objective ground truth.*
3. **Teach the big picture before the syntax.** Stated but never applied.
4. **Project Tasks must consolidate, not repeat.** Still valid; Part III strengthens it.
5. **Instructions must teach the goal, not dictate the answer.** Still valid; Part III strengthens it (visual presentation).

### What is actually built and running (L1 Sessions 1–6 only)
- **`POST /api/audit-submission`** — grades **only the Prompt field** on prompt-engineering quality (clarity, specificity, completeness), returning `{ pass, feedback, tips }`. Plan / Output Code / Explain are required practice fields but **not evaluated**.
- **`POST /api/generate-code`** — optional "🤖 Generate Code" button beside "Copy Prompt"; deliberately secondary to using a real external AI IDE per the Hybrid Model.
- **Exercise counts:** S1 = 5; **S2–S6 = 4** (each dropped its redundant "combine everything" capstone, which duplicated its own Project Task). Each drop was individually investigated, not assumed.
- **Project Tasks** for `l1-s2`, `l1-s3`, `l1-s5`, `l1-s6` rewritten from prompt templates to goal statements. `l1-s4`'s was already goal-oriented.
- **Bug fixes found by real testing:** Live Preview console/verification log split; preview height (260px→360px); Exercise 5.1 scope gap.
- **S7–S12 and all of L2 are untouched** — original keyword `validate()`, 5 exercises each.

### What is NOT built despite being described in the docs
The **capability-milestone regrouping is still only framing.** S5+S6 are *described* as one milestone in both curriculum docs, but `curriculumData.js` still holds them as two entirely separate session objects. No session merging, renumbering, or count reduction has happened anywhere.

---

## Part II — The structural diagnosis (still valid)

1. **Exercises and the Project Task were the same assignment done twice** — each session's final "combine everything" exercise duplicated its own Project Task. *(Addressed for S2–S6.)*
2. **Topics sequenced construct-by-construct, not capability-by-capability** — variables week, events week, conditionals week. *(Not addressed — proposal only.)*
3. **The game isn't functionally alive until Session 9–12** — the motivating payoff arrives too late. *(Not addressed.)*

| Proposed capability milestone | Covers | Built? |
|---|---|---|
| M2: "The car remembers itself and responds to you" | S4 + S5 | Framing note only |
| M3: "The track is safe and the world moves" | S6 + S7 | Not started |
| M4: "The game runs itself, cleanly" | S8 + S9 | Not started |
| M5: "It's actually a game now" | S10 + S11 | Not started |

---

## Part III — The research-grounded approach (current recommendation, not built)

Full evidence base, sources, and analysis: **`research_ai_era_pedagogy.md`**. Summary of what drives this:

### The finding that should shape everything

Generative AI **widens the gap** rather than lifting everyone ([The Widening Gap](https://arxiv.org/html/2405.17739v1)). Struggling students accept AI suggestions *more* often (34.1% vs 24.5%) and finish with a measured **"illusion of competence."** Failure modes: **shepherding** (never writing own code) and **drifting** (bouncing between suggestions, no progress). Students who *benefited* had **"negative expertise"** — they could spot bad AI output fast.

**That is a reading and predicting skill, not a prompting skill.** The current platform trains prompting almost exclusively.

### Three techniques with evidence, currently absent from the platform

- **PRIMM** (Predict→Run→Investigate→Modify→Make) — validated since 2017, "reading before writing," strong in mixed-ability settings. The **Predict step precedes Run**: the student commits to a prediction *before* seeing output.
- **Prompt Problems / Promptly** (Denny, Leinonen, Prather et al.) — the closest published work to this platform. The goal is shown **visually with no text to copy**, and the prompt is graded by **whether the generated code passes test cases**.
- **Lead-and-Reveal** (Kazemitabaar, IUI 2025) — predict each line via scaffolded questions, code revealed progressively. Best transfer-without-AI of everything tested. *"Here's the AI's code, now explain it" is close to the baseline condition that lost.*

### What the research supersedes vs. confirms

| Earlier decision | Verdict |
|---|---|
| LLM-graded prompt quality as the completion gate | **Superseded** — still subjective, no ground truth. Replace the *gate* with test-case execution; keep prompt-quality feedback as non-blocking coaching. |
| One uniform 3–4 box shape for every exercise | **Superseded** — different modes serve different purposes; one shape means most exercises use the wrong tool. |
| Removing Test & Break entirely | **Partly superseded** — a reflection textbox was correctly rejected, but the research calls for *"submit tests alongside code."* A written test case is checkable and unfakeable. |
| Outcome-oriented instructions ("state the goal") | **Confirmed, and strengthened** — the stronger form is showing the goal *visually with no text to paraphrase*. |
| Project Task as the consolidation point | **Confirmed** — plus: student writes the test cases first. |
| Capability-milestone regrouping | **Confirmed, complementary** — the research addresses *within-session* structure, which the milestone proposal never specified. |

### The proposed structure: four modes, not one

| Mode | PRIMM stage | Student does | Graded by | LLM? |
|---|---|---|---|---|
| **1. Predict** | Predict + Run + Investigate | Given working code they didn't write, predict output / variable states, *then* run and compare | Prediction vs. actual — exact match | **No** |
| **2. Modify** | Modify | Given working code + changed requirement, make a bounded change (Parsons variant for strugglers) | Run it; assert behaviour changed as specified | **No** |
| **3. Specify** | (AI-era addition) | Shown the goal **visually, no text description** — write a prompt that makes AI produce code achieving it | **Generate from their prompt, run against test cases** | Yes (built) |
| **4. Make** | Make | Extend their own accumulating `game.js` — **writing the test cases first** | Their tests must pass + teacher review | Optional |

**Why each earns its place:**
- **Predict** is the missing foundation — where negative expertise comes from, auto-gradeable at zero LLM cost, and it attacks illusion of competence by forcing a commitment before the reveal. Useful variant: *reverse-engineering* — show finished code, ask for the specification it satisfies.
- **Modify** is the safest bridge to authorship. Parsons research: equal learning, less time, lower cognitive load — especially for low-self-efficacy students, who are exactly the ones AI harms most.
- **Specify** is the current prompt work, fixed by two changes: visual goal (nothing to paraphrase) and test-case grading (objective, non-gameable, and the real professional loop — *did my specification produce working software?*).
- **Make** is the existing Project Task plus the verification artifact the research calls for.

### Fading across the level

| Sessions | Predict | Modify | Specify | Make |
|---|---|---|---|---|
| 1–4 | Heavy | Heavy | Light | Guided |
| 5–8 | Medium | Medium | Heavy | Guided |
| 9–12 | Light | Light | Medium | **Mostly independent** |

Scaffolding currently never fades — S1 and S12 prop the student up identically, which is a plausible direct cause of the "can't build independently at the end" problem.

### Two additions

- **Lead-and-Reveal for the hardest concepts** (game loop, collision math): don't hand over generated code — ask "what needs to happen first?" → reveal line 1 → "now what?" → reveal line 2. The existing DeepSeek integration can drive this.
- **An AI-free component in the exit assessment.** If a student can't predict, trace, and modify a small piece of racing-game code without AI, they haven't learned it — regardless of prompt quality. This is also the only honest test of "can they build a small web app now?"

### Why this is also *more efficient*

- Modes 1–2 cost **nothing** to grade — no LLM call, no rubric prose. Just code plus expected output.
- Mode 3 grades itself by running tests — **no `expectedConcepts` rubric to author**, which is the current authoring bottleneck and the source of every grading dispute so far.
- Only Mode 4 needs teacher time, which is where teacher judgment actually adds value.
- Duplication can't recur: the four modes are genuinely different tasks, so an exercise can't accidentally become its own Project Task.

---

## Revised phased plan

**Phase 0 — AI Auditor infrastructure.** ✅ Done, redesigned once (prompt-quality-only).

**Phase 1 — Outcome-oriented instructions + duplication-collapse, S1–S6.** ✅ Done.

**Phase 2 — Validate with real students.** **Not formally done.** The teacher's own hands-on testing surfaced three real defects (ArrowDown scope gap, hollow "Ignoring the Other Keys" exercise, Live Preview log-mixing) — genuine signal, but not a full classroom cohort.

**Phase 3 — 🔶 REVISED: pilot the four-mode structure on ONE capability, not a full-L1 propagation.** This replaces the old "propagate Part I treatment to S7–S12" plan, which would have spread a mechanism the research says is the wrong gate. Recommended order:
1. **Build Predict mode on Session 5 or 6** — cheapest (no LLM), highest-value missing piece, immediately reveals whether students can read code at all.
2. **Convert two Specify exercises to test-case grading** — the platform already generates and runs code; this needs test cases per exercise plus a pass/fail check. Prove the objective loop before removing the subjective one.
3. **Then** decide on Modify/Parsons and the fading schedule from what those two reveal.

**Phase 4 — Structure-before-syntax rewrite of Session 2 (HTML).** Still open, unchanged.

**Phase 5 — Decide further reach.** L2 extension; revisit a genuine student-owned small build using calendar time freed by milestone compression.

---

## Open questions for the teacher

**On the four-mode proposal (new):**
1. **Visual goal presentation** for Specify mode needs an asset per exercise (short clip or before/after of the game). Acceptable authoring cost, or should it be a live demo the student can watch but not read code from?
2. **AI-free exit assessment** — does that fit how sessions are actually run?
3. **Student-written tests** (Mode 4) is a genuinely new skill not currently anywhere in L1. Does it belong there, or is it L2/L3 material that would overload a 12-year-old?

**Still open from earlier rounds:**
4. Should the capability-milestone regrouping (Part II) actually be *built* — merging session pairs in `curriculumData.js` — or does it stay a framing device?

---

## Things to watch

- **Cost/latency at scale.** 6 of 12 L1 sessions currently call DeepSeek per Verify click. Note that the four-mode structure *reduces* this — modes 1–2 make no calls at all.
- **Wording-fixation is a recurring LLM-grading risk**, not a one-time bug — keep spot-checking. The four-mode structure sidesteps it for modes 1–3 by removing LLM judgment from the gate entirely.
- **Exercise-authoring risks found twice in one day:** (1) fixing one exercise's scope can make a later exercise in the same session redundant — check the whole session arc after any single edit; (2) a replacement exercise can look reasonable but require no real work (the "Ignoring the Other Keys" case) — sanity-check that a proposed exercise has a genuine, non-trivial task before shipping.
- **Keep this document synced.** It went stale mid-session once, describing a grading mechanism that no longer existed. Update it after every substantive change, including purely technical ones.
- **`student_demo`'s seeded password no longer matches production** — unrelated, worth a separate look.
