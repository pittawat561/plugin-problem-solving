# problem-solving

A Claude Code plugin that makes the agent analyze problems at the root before writing a fix: 5 Whys, fact-based analysis, multiple candidate solutions, risk-weighed decisions, and a PDCA feedback loop.

Without it, an agent under pressure tends to patch the first plausible cause and move on. With it, every non-trivial problem gets a precise problem statement, a root-cause chain backed by evidence, a compared set of options, and a fix that's verified by observation — not by "should work."

## Quick start

1. Add the marketplace:

   ```bash
   claude plugin marketplace add pittawat561/plugin-problem-solving
   ```

2. Install the plugin:

   ```bash
   claude plugin install problem-solving@pittawat561-plugins
   ```

3. Start a new Claude Code session. The mindset loads automatically — or run a full analysis on demand:

   ```
   /problem-solving the deposit page shows the wrong balance after saving
   ```

## What you get

| Layer | Mechanism | When it applies |
|-------|-----------|-----------------|
| Always-on mindset | `SessionStart` hook injects [rules/mindset.md](rules/mindset.md) into session context | Every session — a compact 5-point discipline |
| Full framework | [problem-solving skill](skills/problem-solving/SKILL.md) | Loaded by the agent when it analyzes a non-trivial problem |
| Manual trigger | [`/problem-solving <problem>`](commands/problem-solving.md) | Full structured analysis of a problem you describe |

## The framework

Five phases, applied in order:

1. **Define the root cause** — state the problem in one precise sentence, then ask "why?" repeatedly (5 Whys) until you reach something you can change. A symptom patch is only acceptable when labeled as one.
2. **Fact-based analysis** — collect evidence before forming a theory: logs, exact error messages, reproduction steps, recent changes. Label every claim as fact or hypothesis, and test hypotheses by observation.
3. **Diverge** — generate 2-3 genuinely different approaches instead of stopping at the first workable answer. Check how the codebase or industry already solves it first.
4. **Converge** — score each option on impact vs effort, assess what new problems it could create later, pick one with a stated reason, and keep a plan B.
5. **Act with a feedback loop (PDCA)** — define what "fixed" looks like up front, implement the smallest change that gets there, verify against the original problem statement, and step back to re-analyze after ~3 failed fix-verify cycles instead of pushing harder.

The [skill](skills/problem-solving/SKILL.md) carries the full playbook: per-phase checklists, a report template (problem, 5 Whys chain, facts and constraints, options table, decision, verification plan), and a list of anti-patterns the agent must refuse.

## Customize

| To change | Edit |
|-----------|------|
| The always-on rules (keep them short — they cost context every session) | [rules/mindset.md](rules/mindset.md) |
| The full framework and report template | [skills/problem-solving/SKILL.md](skills/problem-solving/SKILL.md) |
| The slash command prompt | [commands/problem-solving.md](commands/problem-solving.md) |
| Always-on injection (to disable it, delete the `hooks` block) | [.claude-plugin/plugin.json](.claude-plugin/plugin.json) |

After editing, apply the changes and restart your session:

```bash
claude plugin update problem-solving@pittawat561-plugins
```

The hook script ([hooks/inject-mindset.js](hooks/inject-mindset.js)) swallows all filesystem errors, so a broken or missing rules file can never block a session from starting.

## Develop locally

```bash
git clone https://github.com/pittawat561/plugin-problem-solving.git
claude plugin marketplace add ./plugin-problem-solving
claude plugin install problem-solving@pittawat561-plugins
```

Validate after changing the manifests:

```bash
claude plugin validate ./plugin-problem-solving
```

## Uninstall

```bash
claude plugin uninstall problem-solving@pittawat561-plugins
claude plugin marketplace remove pittawat561-plugins
```
