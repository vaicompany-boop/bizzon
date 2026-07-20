# Bizzon Source — AGENTS.md

This file owns the `src/` subtree for Bizzon.

## Purpose

`src/` contains the Astro source for Bizzon’s pages, reusable components, layouts, and tool registry.

## Ownership

Known source areas:

- `src/pages/` — Astro routes/pages. Each public tool should have a dedicated route here.
- `src/components/` — reusable Astro components and interactive tool UI.
- `src/data/tools.ts` — canonical registry for live/planned tools shown across the site.

## Local Contracts

- Do not create orphan tool pages. Every public tool route should be represented in `src/data/tools.ts`.
- Do not mark a tool `live` in `src/data/tools.ts` unless the route exists and the main interaction works.
- Keep shared layout/header behavior consistent; avoid one-off navigation patterns per tool.
- Tool components should be accessible: labels for inputs, keyboard-friendly controls, visible focus states where CSS is touched.
- Prefer client-side logic for simple text utilities.

## Work Guidance

For a new tool:

1. Create or update a route in `src/pages/`.
2. Create a component in `src/components/` when interaction exceeds simple static markup.
3. Register it in `src/data/tools.ts` with accurate `status`.
4. Keep the UI simple: input area, controls, output/result, copy/clear where useful.
5. Add concise explanatory copy below the tool only if it helps SEO or user understanding.

For existing tools:

- Preserve current URL paths unless the user explicitly approves redirects/renames.
- Maintain local browser processing for text utilities.
- Test edge cases: empty input, very long input, whitespace-only input, special characters.

## Verification

From repo root, run:

```bash
npm run build
```

If changing interactive behavior, manually browser-test the changed route in dev server and check console errors.

## Child DOX Index

No child AGENTS.md files yet.

Create child docs only if a source subfolder grows a distinct durable contract, for example:

- `src/pages/AGENTS.md` for route/SEO conventions.
- `src/components/AGENTS.md` for reusable component standards.
