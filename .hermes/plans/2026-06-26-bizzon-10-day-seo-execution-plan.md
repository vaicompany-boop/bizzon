# Bizzon 10-Day SEO Execution Plan

> **For Hermes cron:** execute one day per run, daily at 12:00 Europe/Berlin (10:00 UTC in current CEST). Work only on tasks Hermes can perform autonomously. If a task needs Tedi's assistance, report it clearly and continue with safe autonomous work.

**Goal:** In 10 days, make Bizzon technically solid, more crawlable, richer in practical SEO content, and monitored through Google Search Console API.

**Architecture:** Bizzon is an Astro static utility site in `/home/hermes/work/bizzon`, deployed by pushing to GitHub/Vercel. SEO growth should be data-driven: support pages in `src/data/supportPages.ts`, dynamic routes already exist, and verification scripts must pass before deploy.

**Tech Stack:** Astro, TypeScript, Vercel, Google Search Console API service account at `/home/hermes/.hermes/secrets/bizzon-gsc-service-account.json`, GitHub remote `vaicompany-boop/bizzon`.

---

## Operating Rules for Each Daily Run

1. Workdir: `/home/hermes/work/bizzon`.
2. Start with `git status --short`; do not overwrite uncommitted user work. If user work exists, inspect and avoid conflicting changes.
3. Load/follow `static-utility-site-seo-growth` and `github-pr-workflow` behavior.
4. Use RED/GREEN verification when adding SEO pages or links.
5. Run at minimum:
   - `npm run build`
   - `npm run test:support-pages`
   - `npm run test:home-tools`
   - `npm run test:tool-seo`
6. Commit and push successful autonomous changes to `master`.
7. After push, poll live URLs until deployed and verify 200/canonical/sitemap where relevant.
8. Use GSC API to check sitemap and selected URL Inspection statuses.
9. In final daily report, include:
   - what was changed
   - commit SHA if pushed
   - test output summary
   - live verification summary
   - GSC status summary
   - any required Tedi action, clearly marked under `Needs Tedi`

---

## Day 1 — Baseline audit + monitoring script

**Objective:** Establish a repeatable GSC/site health checker so every later day is measured.

**Files likely to change:**
- Create `scripts/gsc-bizzon-status.mjs` or `.py` equivalent
- Add npm script if useful: `gsc:status`
- Optional docs: `.hermes/plans/bizzon-seo-status-notes.md`

**Tasks:**
1. Create a script that uses the service account JSON to:
   - list GSC properties
   - read sitemap status for `https://bizzon.app/sitemap-index.xml`
   - inspect all 27 sitemap URLs or at least all 15 tool URLs
   - print concise status table
2. Verify it runs locally.
3. Run build/tests.
4. Commit/push.
5. Report current indexed/unknown/not-indexed counts.

**Needs Tedi:** none expected.

---

## Day 2 — Strengthen `/word-counter`

**Objective:** Improve the page that was `Crawled - currently not indexed`.

**Files likely to change:**
- `src/pages/word-counter.astro`
- `src/components/ToolSeoSections.astro` or data file used by tool SEO sections
- `scripts/verify-tool-seo-content.mjs`
- maybe `src/data/supportPages.ts`

**Tasks:**
1. Audit current `/word-counter` copy and internal links.
2. Add more unique, practical sections: essays, blog drafts, reading time, social copy, SEO snippets, word count vs character count.
3. Add/strengthen links from related guide pages to `/word-counter`.
4. Extend verifier to require distinctive word-counter phrases/links.
5. Build/test/push/live-check.
6. Check GSC URL Inspection after deploy.

**Needs Tedi:** if Google still refuses indexing after content changes, Tedi may need to click Request indexing again in GSC UI.

---

## Day 3 — Strengthen `/random-picker`

**Objective:** Make `random-picker` more index-worthy and easier to discover.

**Files likely to change:**
- `src/pages/random-picker.astro`
- `src/data/supportPages.ts`
- `scripts/verify-random-picker.mjs`
- `scripts/verify-tool-seo-content.mjs`

**Tasks:**
1. Audit current random picker content.
2. Add unique use cases: giveaway winner, classroom random name, team decision, raffle list, lunch picker.
3. Add related internal links from `/private-browser-tools`, `/tools`, and maybe a new or existing support section.
4. Ensure FAQ/schema remains truthful and visible.
5. Build/test/push/live-check.
6. Check GSC status.

**Needs Tedi:** maybe manual Request indexing if API remains `URL is unknown to Google` after deploy.

---

## Day 4 — Rebuild `/tools` as a stronger category hub

**Objective:** Turn `/tools` into a clear crawlable hub grouped by intent.

**Files likely to change:**
- `src/pages/tools.astro`
- maybe `src/data/tools.ts`
- `scripts/verify-home-tools-polish.mjs`

**Tasks:**
1. Group tools into categories:
   - Text tools
   - SEO/publishing tools
   - Privacy/security tools
   - Business calculators
   - Everyday utilities
2. Keep all live tool links visible and crawlable.
3. Link support guides under relevant categories.
4. Extend verifier to ensure every live tool and support page is linked from `/tools`.
5. Build/test/push/live-check.
6. Check GSC `/tools` status.

**Needs Tedi:** none expected.

---

## Day 5 — Add first guide cluster batch

**Objective:** Add 3–5 useful long-tail support pages tied to existing tools.

**Candidate pages:**
- `/free-word-counter`
- `/character-limit-guide`
- `/meta-description-length-guide`
- `/free-qr-code-generator`
- `/how-to-make-a-qr-code-for-a-link`

**Files likely to change:**
- `src/data/supportPages.ts`
- `scripts/verify-support-pages.mjs`
- homepage/tools links if appropriate

**Tasks:**
1. Add pages data-driven through existing support page system.
2. Each page must include intro, steps, 4 useful sections, related tools.
3. Extend verifier for page existence, title, BreadcrumbList/HowTo/FAQ if applicable, and links.
4. Build/test/push/live-check.
5. Submit sitemap via GSC API.

**Needs Tedi:** none expected.

---

## Day 6 — Business calculator SEO cluster

**Objective:** Expand business calculator coverage without adding legal/tax risk.

**Candidate pages:**
- `/vat-calculator-germany`
- `/vat-calculator-eu`
- `/percentage-increase-calculator`
- `/discount-calculator`
- `/tip-calculator-guide`

**Files likely to change:**
- `src/data/supportPages.ts`
- support verifier
- related links in calculator pages if applicable

**Tasks:**
1. Add practical, non-legal guide pages with disclaimers where tax is mentioned.
2. Link to VAT, percentage, tip, date, unit tools.
3. Verify pages are not generic filler.
4. Build/test/push/live-check.
5. Submit sitemap and inspect new URLs.

**Needs Tedi:** none expected unless local/legal tax wording needs user preference.

---

## Day 7 — Internal linking pass across all tool pages

**Objective:** Improve crawl paths and topical clusters.

**Files likely to change:**
- `src/components/ToolSeoSections.astro`
- individual `src/pages/*.astro` tool pages
- `src/data/supportPages.ts`
- `scripts/verify-tool-seo-content.mjs`

**Tasks:**
1. Ensure every live tool page links to:
   - 2–4 related tools
   - 1–3 relevant support guides
   - `/tools`
2. Ensure guide pages link back to exact tools.
3. Avoid links to planned tools as if live.
4. Build/test/push/live-check.
5. Run GSC status script.

**Needs Tedi:** none expected.

---

## Day 8 — Homepage SEO/UX polish

**Objective:** Make homepage a stronger gateway to priority tools and clusters.

**Files likely to change:**
- `src/pages/index.astro`
- `scripts/verify-home-tools-polish.mjs`

**Tasks:**
1. Add/strengthen sections for:
   - Popular text tools
   - SEO/publishing tools
   - Business calculators
   - Private browser utilities
2. Link important guides and tools above/below fold naturally.
3. Verify mobile layout remains clean.
4. Build/test/push/live-check.
5. Check console for browser errors on live homepage.

**Needs Tedi:** none expected.

---

## Day 9 — GSC + content gap audit, then targeted fixes

**Objective:** Use real Search Console data to choose one targeted improvement batch.

**Files likely to change:**
- depends on GSC findings
- possibly `src/data/supportPages.ts`, `src/pages/*`, verification scripts

**Tasks:**
1. Query last 30 days GSC search analytics by page and query.
2. Identify pages with impressions but poor CTR/position.
3. Improve titles/descriptions/intro/internal links for the top 2–3 opportunities.
4. Build/test/push/live-check.
5. Report what changed and why.

**Needs Tedi:** if a business/monetization decision appears, ask instead of guessing.

---

## Day 10 — Final audit, docs, and next-month roadmap

**Objective:** Finish with a clean state, report, and sustainable next steps.

**Files likely to change:**
- Create/update `.hermes/plans/bizzon-next-month-seo-roadmap.md`
- Maybe README or internal docs if useful

**Tasks:**
1. Run full build/test suite relevant to tools and support pages.
2. Run GSC status script across all sitemap URLs.
3. Submit sitemap one final time if new pages were added.
4. Produce a final 10-day report:
   - URLs added
   - indexing status
   - sitemap status
   - top GSC pages/queries
   - remaining not-indexed URLs
   - next-month recommendations
5. Commit/push docs if changed.

**Needs Tedi:** decide if we continue daily automation, shift to weekly SEO growth, or start monetization/product analytics.
