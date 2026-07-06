# Bizzon SEO 10-Day Wrap-Up and Next-Month Roadmap

Generated: 2026-07-06T10:06:27Z

## Executive summary

The 10-day SEO execution sprint made Bizzon more crawlable, more internally linked, and easier to monitor with repeatable verification. The site now builds 38 static pages: the homepage, 16 live tool pages, the `/tools` hub, and 20 support/guide pages. Search Console visibility improved during the sprint from a baseline of 8 indexed URLs and 19 unknown URLs to 27 indexed URLs, 8 discovered-but-not-indexed URLs, and 2 unknown URLs among inspected sitemap URLs.

## What changed during the 10-day sprint

### Technical monitoring and verification

- Added `scripts/gsc-bizzon-status.mjs` and `npm run gsc:status` for repeatable GSC property, sitemap, and URL Inspection checks.
- Extended deterministic SEO verifiers for support pages, tool SEO content, homepage links, and tools hub links.
- Kept the required build/test gate green before pushes:
  - `npm run build`
  - `npm run test:support-pages`
  - `npm run test:home-tools`
  - `npm run test:tool-seo`

### Content and crawlability improvements

- Strengthened `/word-counter` with practical workflows for essays, blogs, newsletters, social copy, product text, SEO snippets, and word-count vs character-count decisions.
- Strengthened `/random-picker` with unique use cases for giveaways, classroom names, team rotation, raffle lists, and lunch decisions.
- Rebuilt `/tools` into a categorized hub for Text tools, SEO/publishing tools, Privacy/security tools, Business calculators, and Everyday utilities.
- Polished the homepage into a stronger gateway with crawlable clusters for priority tools and guides.
- Added GSC-driven targeted improvements to homepage brand/login clarification, `/case-converter`, `/text-cleaner`, and `/meta-description-length-guide`.

### New support pages added in this sprint

First guide cluster:

- `/free-word-counter`
- `/character-limit-guide`
- `/meta-description-length-guide`
- `/free-qr-code-generator`
- `/how-to-make-a-qr-code-for-a-link`

Business calculator cluster:

- `/vat-calculator-germany`
- `/vat-calculator-eu`
- `/percentage-increase-calculator`
- `/discount-calculator`
- `/tip-calculator-guide`

## Current GSC status snapshot

Run: `npm run gsc:status` on 2026-07-06.

- GSC property: `sc-domain:bizzon.app`
- Sitemap: `https://bizzon.app/sitemap-index.xml`
- Sitemap API status: healthy
  - Last submitted: 2026-07-05T10:10:48.439Z before today's resubmission
  - Last downloaded: 2026-07-05T10:10:49.669Z
  - Errors: 0
  - Warnings: 0
  - Submitted in GSC sitemap report: 38
- URL Inspection on 37 sitemap URLs:
  - Submitted and indexed: 27
  - Discovered - currently not indexed: 8
  - URL is unknown to Google: 2

### URLs currently indexed

- `/best-free-text-tools`
- `/case-converter`
- `/character-limit-guide`
- `/discount-calculator`
- `/free-qr-code-generator`
- `/free-word-counter`
- `/how-to-clean-pasted-text`
- `/how-to-create-qr-codes`
- `/how-to-make-a-qr-code-for-a-link`
- `/how-to-make-a-url-slug`
- `/invoice-maker`
- `/meta-description-length-guide`
- `/meta-title-description-checker`
- `/password-generator`
- `/percentage-increase-calculator`
- `/private-browser-tools`
- `/qr-code-generator`
- `/quick-business-calculators`
- `/text-cleaner`
- `/tip-calculator-guide`
- `/tools`
- `/unit-converter`
- `/vat-calculator-eu`
- `/vat-calculator-germany`
- `/vat-vs-sales-tax-calculator-guide`
- `/word-count-vs-character-count`
- `/word-counter`

### Remaining not-indexed or unknown URLs

Discovered - currently not indexed:

- `/date-calculator`
- `/how-to-create-clean-filenames`
- `/how-to-write-meta-descriptions`
- `/percentage-calculator`
- `/random-picker`
- `/slug-generator`
- `/tip-calculator`
- `/vat-sales-tax-calculator`

URL is unknown to Google:

- `/character-counter`
- `/filename-cleaner`

## Current Search Analytics snapshot

Search Analytics query range: 2026-06-06 to 2026-07-06.

Top pages by impressions:

| Page | Clicks | Impressions | CTR | Avg position |
| --- | ---: | ---: | ---: | ---: |
| `/` | 7 | 488 | 1.43% | 6.7 |
| `/meta-description-length-guide` | 0 | 21 | 0.00% | 89.5 |
| `/case-converter` | 0 | 18 | 0.00% | 78.5 |
| `/text-cleaner` | 0 | 11 | 0.00% | 69.9 |
| `/vat-calculator-germany` | 0 | 11 | 0.00% | 70.5 |
| `/tools` | 0 | 3 | 0.00% | 6.0 |
| `/password-generator` | 0 | 2 | 0.00% | 6.0 |
| `/qr-code-generator` | 0 | 2 | 0.00% | 44.5 |
| `/percentage-increase-calculator` | 0 | 2 | 0.00% | 79.5 |

Top query themes:

- Brand/navigation: `bizzon`, `bizzon login`, `bizzon connexion`, `bizzon pos`, `your bizzon` variants.
- Utility discovery: `title case converter`, `font cleaner`, `character limit`, QR generator variants, VAT calculator variants.

## Next-month roadmap

### Week 1: indexing cleanup and manual nudges

1. Keep the automated `npm run gsc:status` check running weekly.
2. For the 10 remaining not-indexed or unknown URLs, prioritize manual GSC "Request indexing" for:
   - `/character-counter`
   - `/filename-cleaner`
   - `/random-picker`
   - `/percentage-calculator`
   - `/vat-sales-tax-calculator`
3. Recheck after 7-10 days before rewriting already improved pages.

### Week 2: strengthen pages with impressions but weak positions

1. Expand `/case-converter` around title case, sentence case, camelCase, snake_case, and examples for content/code workflows.
2. Expand `/text-cleaner` around `font cleaner`, PDF cleanup, email cleanup, and AI-draft cleanup language.
3. Expand `/vat-calculator-germany` with examples for 19%, 7%, net-to-gross, and gross-to-net calculations while preserving the non-legal disclaimer.
4. Add deterministic verifier phrases for any new sections.

### Week 3: add one focused support cluster for remaining utility pages

Recommended support pages:

- `/free-character-counter`
- `/online-title-case-converter`
- `/free-text-cleaner`
- `/filename-cleaner-guide`
- `/random-name-picker`

Each should be data-driven through `src/data/supportPages.ts`, linked from `/tools`, linked from the relevant tool page, and verified by `scripts/verify-support-pages.mjs`.

### Week 4: product analytics and conversion clarity

1. Decide whether Bizzon remains purely free utilities or should add a light product/newsletter/lead capture path.
2. If monetization or signup is planned, add privacy-safe analytics goals for tool usage and outbound/support clicks.
3. If no monetization is planned yet, keep the homepage copy focused on "free, no-login browser tools" to avoid confusion with unrelated Bizzon login queries.

## Recommended recurring monthly checks

- Run `npm run build` and all SEO verifier scripts after content changes.
- Run `npm run gsc:status` weekly and store snapshots in an internal note.
- Query GSC Search Analytics monthly by page and query before choosing new pages.
- Keep new pages tied to an existing live tool and avoid generic filler pages.
- Maintain clear internal links from homepage, `/tools`, tool pages, and support pages.

## Needs Tedi

- In GSC UI, manually request indexing for the unknown or discovered URLs if faster indexing is important. The highest-priority manual requests are `/character-counter`, `/filename-cleaner`, `/random-picker`, `/percentage-calculator`, and `/vat-sales-tax-calculator`.
- Decide whether next month should continue SEO-only growth, move to weekly SEO maintenance, or add monetization/product analytics work.
