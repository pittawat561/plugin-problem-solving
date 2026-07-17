# problem-solving

Claude Code plugin that injects an effective problem-solving analysis mindset into the agent.

## What it does

| Layer | Mechanism | When it applies |
|-------|-----------|-----------------|
| Always-on mindset | `SessionStart` hook prints `rules/mindset.md` into session context | Every session, compact 5-point discipline |
| Full framework | `skills/problem-solving/SKILL.md` | Loaded when analyzing non-trivial problems |
| Manual trigger | `/problem-solving <problem>` command | Run a full structured analysis on demand |

The mindset: root cause via 5 Whys → fact-based analysis → diverge (2-3 options) → converge (impact vs effort + risk) → PDCA feedback loop.

## Install (local marketplace)

```
claude plugin marketplace add C:\Users\pitta\.claude\my-plugins
claude plugin install problem-solving@pitta-plugins
```

## Editing the behavior

- `rules/mindset.md` — the compact always-on rules (keep short; it costs context every session).
- `skills/problem-solving/SKILL.md` — the full framework and output template.
- `commands/problem-solving.md` — the `/problem-solving` slash command prompt.

Hook script (`hooks/inject-mindset.js`) silent-fails on any filesystem error so it can never block session start.
