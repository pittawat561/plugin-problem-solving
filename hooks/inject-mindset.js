#!/usr/bin/env node
// SessionStart hook: prints rules/mindset.md to stdout so Claude Code
// injects it as session context. Must never block session start,
// so every filesystem error is swallowed silently.
const fs = require('fs');
const path = require('path');

try {
  const rulesPath = path.join(__dirname, '..', 'rules', 'mindset.md');
  process.stdout.write(fs.readFileSync(rulesPath, 'utf8'));
} catch {
  // silent-fail: a missing/unreadable rules file must not break the session
}
