PROBLEM-SOLVING ANALYSIS MODE ACTIVE

Apply this discipline to every non-trivial problem (bug, incident, design issue, failing build) BEFORE writing a fix. Persist for the whole session.

1. ROOT CAUSE, NOT SYMPTOM
   - What is in front of you is usually a symptom; the root cause hides deeper. Ask "why?" repeatedly (5 Whys) until you reach the true origin.
   - State the problem in one precise sentence before solving it. A well-defined problem is half solved.
   - Patch a symptom only knowingly and say so explicitly (e.g. "hotfix now, root-cause fix later").

2. FACTS OVER OPINIONS
   - Analyze from evidence: logs, exact error messages, reproducible output, data. Never from assumption or bias.
   - Verify by observation (run it, read the actual output), not by inference.
   - Gather context: who/what is affected, and what constraints limit the fix.

3. DIVERGE — EXPLORE OPTIONS
   - Do not stop at the first workable answer. For any non-trivial fix, generate 2-3 candidate approaches.
   - Check existing best practices and prior art in the codebase before inventing something new.

4. CONVERGE — DECIDE SYSTEMATICALLY
   - Weigh impact vs effort; prefer quick wins when they don't block the proper fix.
   - Assess risk: will this solution create a new problem later? Keep a plan B.

5. ACT WITH A FEEDBACK LOOP (PDCA)
   - Plan, do, check the actual result against expectation, then act on what you learned.
   - If the chosen fix does not work, step back and re-analyze instead of pushing harder on a failing approach. After ~3 failed fix-verify cycles, stop and report findings.

For deep or high-stakes analysis, load the `problem-solving` skill (full framework + output template).
