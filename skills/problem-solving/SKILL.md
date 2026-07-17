---
name: problem-solving
description: Effective problem-solving analysis framework — define the root cause (5 Whys), fact-based analysis, divergent option generation, convergent decision (impact vs effort + risk), PDCA feedback loop. Use when analyzing a bug, incident, recurring issue, or any problem where the fix is not obvious, or when the user asks to "analyze this problem", "หา root cause", "วิเคราะห์ปัญหา", or invokes /problem-solving.
---

# Effective Problem-Solving Analysis

A five-phase discipline for solving problems at the root instead of patching symptoms. Work through the phases in order; do not jump to a fix before phase 4 produces a decision.

## Phase 1 — Define the root cause

1. Write the problem as one precise sentence: *what* is wrong, *where*, *since when*, *how observed*. A vague problem statement guarantees a wrong fix.
2. Run **5 Whys**: start from the visible symptom and ask "why?" until the answer is something you can actually change (process, code, config, assumption). Usually 3-5 levels. Record the chain.
3. Distinguish explicitly:
   - **Symptom** — what the user/system shows (error message, wrong number, slow page).
   - **Root cause** — the deepest changeable origin.
   - If you must patch the symptom (urgent hotfix), say so and schedule the root-cause fix separately. Never present a symptom patch as a root-cause fix.

## Phase 2 — Fact-based analysis

1. Collect evidence before forming a theory: exact error messages, logs, reproduction steps, data samples, recent changes (git log/diff).
2. Label every claim as **fact** (observed, reproducible) or **hypothesis** (needs testing). Test hypotheses by observation — run the code, query the data — never confirm by inference.
3. Map the blast radius and constraints:
   - Who/what is affected? How badly?
   - What constraints limit the fix (deadline, backward compatibility, no-downtime, team conventions)?

## Phase 3 — Diverge: generate options

1. Never stop at the first workable answer. Produce **2-3 genuinely different approaches** (not variations of one idea).
2. Look for prior art first: how does this codebase, team, or industry already solve this? Reusing a proven pattern beats inventing.
3. Include at least one "minimal/cheap" option and one "proper/structural" option so the trade-off space is visible.

## Phase 4 — Converge: decide systematically

1. Score each option on **Impact** (how well it solves the root cause) vs **Effort** (time, complexity, coordination). Prefer quick wins — high impact, low effort — unless they block the proper fix.
2. Run a **risk assessment** per option: what new problem could this create later (regression, tech debt, coupling, performance)? How would we detect it?
3. Pick one option, state *why* it beats the others in 1-2 sentences, and name a **Plan B** if it fails.

## Phase 5 — Act with a feedback loop (PDCA)

1. **Plan** — define what "fixed" looks like and how it will be verified (test, reproduction no longer occurs, metric back to normal).
2. **Do** — implement the smallest change that realizes the decision.
3. **Check** — verify by observation against the phase-1 problem statement, not by inference.
4. **Act** — if verified, capture the lesson (test, doc, guard). If not, do NOT push harder: return to phase 1/2 with the new evidence. After ~3 failed fix-verify cycles, stop and report findings to the user.

## Output template

For non-trivial analysis, report in this shape:

```markdown
## Problem
<one-sentence problem statement>

## Root cause (5 Whys)
1. Why …? — …
2. Why …? — …
…
→ Root cause: …

## Facts & constraints
- Facts: …
- Hypotheses tested: …
- Affected: … / Constraints: …

## Options
| # | Approach | Impact | Effort | Risk |
|---|----------|--------|--------|------|
| 1 | …        | high   | low    | …    |

## Decision
Option N because … Plan B: …

## Plan & verification
- Steps: …
- Verified by: …
```

Scale the depth to the problem: a typo fix needs none of this; a recurring production bug needs all of it.

## Anti-patterns to refuse

- Fixing the first plausible cause without evidence it is the actual cause.
- "Should work" as verification.
- Presenting one option as if no alternatives exist.
- Retrying the same failing fix with minor variations.
- Solving a problem the user didn't state because it looked adjacent (scope creep).
