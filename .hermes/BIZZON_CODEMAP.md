# Bizzon Code Map

Generated from Graphify + direct repo inspection. Use this as the quick onboarding map before changing Bizzon.

## Project Snapshot

- Stack: Astro + Tailwind, mostly static/client-side tools.
- Deployment: Vercel.
- Tool registry: `src/data/tools.ts`.
- Live tools currently in registry: 15.
- Planned tool currently in registry: `Invoice Helper`.
- Graphify code graph: `graphify-out/graph.json`.
- Graphify report: `graphify-out/GRAPH_REPORT.md`.
- Graphify visual map: `graphify-out/graph.html`.

## Graphify Summary

Latest code-only graph was built from `src/` with:

```bash
npm run graphify:src
```

Current graph report summary:

- 70 nodes
- 93 edges
- 8 communities
- 100% extracted edges
- 0 token cost
- no import cycles detected

Important: this is a source-code graph only. Full-project extraction can include docs/images, but it needs a Graphify-supported LLM API key. For Bizzon agent work, source-code extraction is usually enough.

## Core Architecture

Graphify confirms the central registry flow:

```text
src/data/tools.ts
  ├─ exports Tool type
  └─ exports tools[] registry
       ├─ imported by src/pages/index.astro
       └─ imported by src/pages/tools.astro

src/pages/index.astro
  ├─ imports ToolCard.astro
  ├─ imports BaseLayout.astro
  ├─ derives liveTools
  └─ derives plannedTools

src/pages/tools.astro
  ├─ imports ToolCard.astro
  ├─ imports BaseLayout.astro
  └─ renders live/planned registry entries
```

Graphify query used:

```bash
graphify query "how are tool pages connected to src/data/tools.ts and the homepage?" --graph graphify-out/graph.json --budget 1600
```

Key nodes returned:

- `src/data/tools.ts`
- `src/pages/index.astro`
- `src/pages/tools.astro`
- `src/components/ToolCard.astro`
- `src/layouts/BaseLayout.astro`
- `liveTools`
- `plannedTools`

## Standard Tool Files

For each live utility, the normal pattern is:

```text
src/pages/<tool-slug>.astro
src/components/<ToolComponent>.astro
scripts/verify-<tool-slug>.mjs
package.json script: test:<tool-slug>
src/data/tools.ts registry entry
```

Examples:

- `src/pages/qr-code-generator.astro`
- `src/components/QrCodeGenerator.astro`
- `scripts/verify-qr-code-generator.mjs`
- `test:qr-code-generator`

## Current Live Tool Pages

Registry entries in `src/data/tools.ts`:

1. `Word Counter` → `/word-counter`
2. `Case Converter` → `/case-converter`
3. `Character Counter` → `/character-counter`
4. `Text Cleaner` → `/text-cleaner`
5. `Slug Generator` → `/slug-generator`
6. `Meta Title & Description Checker` → `/meta-title-description-checker`
7. `Password Generator` → `/password-generator`
8. `Random Picker` → `/random-picker`
9. `Unit Converter Mini` → `/unit-converter`
10. `Date Calculator` → `/date-calculator`
11. `Percentage Calculator` → `/percentage-calculator`
12. `Filename Cleaner` → `/filename-cleaner`
13. `Tip Calculator` → `/tip-calculator`
14. `VAT / Sales Tax Calculator` → `/vat-sales-tax-calculator`
15. `QR Code Generator` → `/qr-code-generator`

Note: count the registry before editing copy that says the number of live tools. If tool count changes, update homepage/tools verifier expectations too.

## Verifier Scripts

Current deterministic verifier files:

```text
scripts/verify-character-counter.mjs
scripts/verify-date-calculator.mjs
scripts/verify-filename-cleaner.mjs
scripts/verify-home-tools-polish.mjs
scripts/verify-meta-checker.mjs
scripts/verify-password-generator.mjs
scripts/verify-percentage-calculator.mjs
scripts/verify-qr-code-generator.mjs
scripts/verify-random-picker.mjs
scripts/verify-slug-generator.mjs
scripts/verify-text-cleaner.mjs
scripts/verify-tip-calculator.mjs
scripts/verify-unit-converter.mjs
scripts/verify-vat-sales-tax-calculator.mjs
```

Most tool test scripts in `package.json` run:

```bash
npm run build && node scripts/verify-<tool>.mjs
```

## Adding a New Tool

Use this checklist for tool #16+ work:

1. Decide slug and component name.
2. Add or update a deterministic verifier first:
   ```bash
   scripts/verify-<tool-slug>.mjs
   ```
3. Add the component:
   ```bash
   src/components/<ToolComponent>.astro
   ```
4. Add the page:
   ```bash
   src/pages/<tool-slug>.astro
   ```
5. Add/update the registry entry:
   ```bash
   src/data/tools.ts
   ```
6. Add package script:
   ```json
   "test:<tool-slug>": "npm run build && node scripts/verify-<tool-slug>.mjs"
   ```
7. Update homepage/tools copy and verifier expectations if live/planned counts changed.
8. Run production build + verifier.
9. Run browser/live smoke test for interactive behavior.
10. Deploy/push and verify live route returns `200` and UI works.

## Graphify Commands

Refresh source-code map:

```bash
npm run graphify:src
```

Read the report:

```bash
npm run graphify:report
```

Query registry/hub relationships:

```bash
npm run graphify:tools
```

Query add-new-tool flow:

```bash
npm run graphify:adding-tool
```

Ad-hoc query:

```bash
graphify query "your question here" --graph graphify-out/graph.json --budget 1600
```

## Guardrails

- Do not commit `graphify-out/`; it is ignored.
- Do not run Graphify over parent folders or secrets.
- `.env*`, `node_modules/`, `.astro/`, `dist/`, `.vercel/`, and `graphify-out/` must stay ignored.
- Graphify is a map, not proof. Read the actual source files before editing.
- Verify every claimed change with build/verifier/live checks.

## Useful Next Questions for Agents

```bash
graphify query "where should a new utility tool be registered?" --graph graphify-out/graph.json --budget 1600
```

```bash
graphify query "how are tool pages connected to src/data/tools.ts and the homepage?" --graph graphify-out/graph.json --budget 1600
```

```bash
graphify query "which files define the QR code generator page and component?" --graph graphify-out/graph.json --budget 1600
```
