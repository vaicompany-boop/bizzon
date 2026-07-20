# Bizzon — AGENTS.md

This file is the DOX-lite operating guide for AI agents working in this repository. Read it before editing anything in this repo.

## Purpose

Bizzon is an Astro/Tailwind utility-tools website hosted at `bizzon.app`.

Product direction:

- Build boring-but-useful tools that solve simple everyday tasks.
- Prioritize speed, clarity, SEO, and practical value over SaaS hype.
- Each tool should work in the browser, be easy to understand immediately, and feel finished.
- Monetization/SEO can come later; first build useful tools with clean pages.

Current live/planned tools are tracked in `src/data/tools.ts`.

## Ownership

Root-owned files and folders:

- `package.json` — Astro project scripts and dependencies.
- `astro.config.mjs` — Astro configuration.
- `.github/workflows/vercel-deploy.yml` — deployment workflow.
- `.vercel/` — Vercel project metadata; do not print sensitive account/project details in chat.
- `src/` — application source. See `src/AGENTS.md` for local rules.
- `dist/` — generated build output. Do not edit manually.
- `node_modules/` and `.astro/` — generated/dependency folders. Do not edit manually.

This project is a git repo. Prefer normal git workflow: inspect status before and after edits.

## Local Contracts

- Do not edit `dist/`, `node_modules/`, `.astro/`, or `.vercel/` except when explicitly required.
- Do not expose tokens, Vercel metadata, GitHub secrets, or credentials in chat.
- Keep tools practical and fast. Avoid complex accounts/backends unless explicitly requested.
- Prefer browser-only tools when possible; if a server/API is needed, explain why.
- Each new tool should be reachable from `src/data/tools.ts` and have a dedicated route/page.
- Use clear, plain English for public tool copy unless the user asks for another language.
- Avoid fake metrics, fake testimonials, and vague SaaS claims.

## Design Direction

Bizzon design posture:

- Utility-first, simple, fast, credible.
- Looks finished but not overdesigned.
- Practical landing and tool pages: task is obvious in the first screen.
- No AI-purple/glow startup style.
- No generic “elevate/unleash/next-gen” marketing copy.
- Good empty/error states are more important than decorative effects.

Design dials:

- DESIGN_VARIANCE: 5 / 10
- MOTION_INTENSITY: 3 / 10
- VISUAL_DENSITY: 5 / 10

## Work Guidance

Before editing:

1. Read this file and any child AGENTS.md on the path you will touch.
2. Run or inspect `git status --short`.
3. Identify exact source files to modify.
4. Do not edit generated build output.
5. If changing source structure, update this file or child AGENTS.md if contracts or verification change.

When adding a new tool:

1. Add/update a route under `src/pages/`.
2. Add/update the interactive component under `src/components/` if needed.
3. Register the tool in `src/data/tools.ts`.
4. Make the first screen self-explanatory: title, one-sentence value, input, output, copy/reset actions.
5. Implement useful edge states: empty input, invalid input, copied state, reset/clear behavior.
6. Keep processing local in the browser unless a backend is clearly needed.

When changing copy:

- Prefer concrete task-language: `Convert text to title case`, `Count words`, `Clean pasted text`.
- Avoid hype: `revolutionary`, `game-changing`, `unleash`, `AI-powered` unless actually true and useful.
- SEO text should help humans first and search second.

## Verification

Use the real project commands:

```bash
npm run build
```

For interactive component changes, also run a local server when possible:

```bash
npm run dev -- --host 127.0.0.1
```

Then browser-check the changed route:

- first viewport is clear,
- primary input/action works,
- output updates correctly,
- copy/reset states work if present,
- browser console has no JS errors.

For deploy-related work, inspect the GitHub Actions/Vercel workflow and do not print secrets.

## Child DOX Index

- `src/AGENTS.md` — source code structure, pages/components/data rules.
