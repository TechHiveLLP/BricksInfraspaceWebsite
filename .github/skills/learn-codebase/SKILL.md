---
name: learn-codebase
description: "Scan the codebase and update Agent.md with current project knowledge. Use when: project structure changes, new pages or components are added, dependencies change, new patterns are introduced, or Agent.md feels outdated. Triggers: learn codebase, update agent, refresh project knowledge, sync agent context."
argument-hint: "Optional: describe what changed (e.g., 'added new careers page')"
---

# Learn Codebase & Update Agent.md

## When to Use
- After adding new pages, components, or config files
- After changing the tech stack or dependencies
- After restructuring folders or renaming files
- When Agent.md feels outdated or incomplete
- When the user says "learn", "update agent", "refresh context", or "sync knowledge"
- Periodically to keep Agent.md current

## Procedure

### Step 1: Read Current Agent.md
Read `Agent.md` at the project root to understand what's already documented.

### Step 2: Scan the Codebase
Gather current state by checking these areas:

1. **package.json** — dependencies, scripts, version changes
2. **src/app/** — list all route folders and page files, check for new pages
3. **src/components/** — list all components, check for new or removed ones
4. **src/config/** — read config files for data changes (new projects, services, etc.)
5. **next.config.ts** — build configuration changes
6. **tailwind.config.js** — theme/styling changes
7. **globals.css** — new CSS variables or utilities
8. **public/** — new image folders or assets
9. **.github/** — CI/CD, workflows, new skills or instructions
10. **scripts/** — any new build/deploy scripts

### Step 3: Identify Differences
Compare the scanned state against what Agent.md currently documents. Look for:
- New or removed files/folders
- New dependencies or version bumps
- New patterns (e.g., new state management, new API integrations)
- Changed business data (new projects, updated contact info)
- New gotchas or important notes
- Changed commands or build process

### Step 4: Update Agent.md
Edit `Agent.md` to reflect the current state. Follow these rules:
- **Keep the existing structure** — update sections in place, don't restructure
- **Be precise** — include file paths, version numbers, specific values
- **Document gotchas** — anything non-obvious that would trip up a future session
- **Keep it concise** — this file is loaded into context, so brevity matters
- **Update the Projects Registry** if projects changed
- **Update the File Change Impact Map** if new dependencies between files exist

### Step 5: Confirm Changes
After updating, briefly summarize what changed to the user.

## What NOT to Update
- Don't remove sections that are still valid
- Don't add speculative or planned features — only document what exists now
- Don't duplicate content from WebsiteInfo.md — Agent.md is for technical context
- Don't document obvious framework behavior (e.g., "Next.js uses file-based routing")
