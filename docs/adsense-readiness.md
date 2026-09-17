# AdSense readiness audit — 2026-09-17

Bounded response to the supplied “Low value content” screenshot, not an approval prediction. Implementation and independent release verification are recorded below. No AdSense account action was performed. `design-explorations/` was not opened or modified.

## Verified changes

- Shared BaseLayout emits one `google-adsense-account` meta tag using the public account in `src/data/site.ts`, consistent with `public/ads.txt`. No ad-serving script or CMP was added. Google explicitly supports the [meta-tag verification method](https://support.google.com/adsense/answer/7584263?hl=en).
- About and Privacy are real project pages, linked with the existing Contact route in every footer. No operator identity, address, professional credentials, legal entity, or compliance status was invented.
- Privacy describes browser-local processing, Vercel hosting/Analytics, external Google Fonts, YouTube thumbnail requests, and the separate Invoice Maker app. Its legacy local component uses localStorage, but the live route does not mount that component; public copy now explains the external handoff instead of claiming a local embedded editor.
- Existing aliases such as `/free-word-counter` were already permanent redirects; they were not diagnosed as duplicate live URLs. The five old redirected guide records are now excluded from static generation and discovery. `/how-to-make-a-qr-code-for-a-link` additionally redirects permanently to `/how-to-create-qr-codes`. Existing tool URLs are preserved. `vercel.json` supplies the redirect set used by discovery and the build sitemap filter.
- Five existing guides now include concrete worked examples, checklists, pitfalls, and limitations: QR creation, pasted text cleanup, word versus character counts, filename cleanup, and VAT/sales-tax arithmetic. Reciprocal tool links are checked. No mass-generated guide set was added.
- Shared near-tool notes explain UTF-16 counts, the 200-word reading-time assumption, text modes, ASCII filename cleanup and collision limits, and static QR behavior/two-module margins. No tool algorithms changed.

## Verification record

1. Added `scripts/verify-adsense-readiness.mjs` before remediation. Baseline `npm run build` passed; the new verifier exited 1 with **324 expected failures**. Baseline support, tool SEO, and homepage verifiers passed.
2. Final `npm run build`: exit 0, **58 static pages**. New readiness verifier: exit 0; checks matching metadata in every head, ads.txt consistency, trust routes, self-canonicals, permanent redirects, sitemap membership/exclusions, worked sections, reciprocal links, privacy exceptions, and every generated local anchor destination. **No broken local links found.**
3. All **20** `scripts/verify-*.mjs` scripts pass. Pre-existing stale tests expected “16 live” tools, a planned “Invoice Helper,” and an embedded Invoice Maker editor. Counts now follow the registry/Orbit Desk wording, roadmap checks follow actual planned entries, and Invoice Maker now checks the deployed external handoff, safe target attributes, privacy links, canonical and parsed structured data rather than accepting strings from an unused legacy component. Support/SEO tests now expect the intentional redirect consolidation; FAQ, structured-data, content, and tool-link coverage remains.
4. Worked count, text-cleanup, and filename examples were executed against functions extracted from the actual Astro components using Node’s TypeScript stripping API. All asserted outputs matched. VAT arithmetic was checked against the add/remove and rounding code; the 20% example does not select a legal rate.
5. `git diff --check`: exit 0. No new dependencies. Generated build files were not edited manually.
6. Codex's browser-use attempt could not launch Chrome. Independent parent QA used Playwright Chromium against the production build: homepage, About, Privacy, QR guide and Word Counter at 1440px and 390px all returned 200, contained one verification meta tag, had no horizontal overflow and produced no page JavaScript errors. Word Counter passed normal input, UTF-16 emoji and Clear checks. Desktop QR guide and mobile About screenshots were visually inspected. Physical QR scanning and a full analytics/consent network audit were not performed.

Independent taste pass found content links visually indistinguishable from prose: computed underline was `none` (RED). A two-line `src/styles/global.css` fix restores `.underline` links; browser assertions now pass on About/Privacy (GREEN).

## Remaining risks and owner review checklist

- [ ] Review the five guides and the remaining site for original practical value. The narrower guides outside this slice and regional VAT guidance have not received a complete editorial/legal review. Google reviews the whole site; see its [content readiness guidance](https://support.google.com/adsense/answer/7299563?hl=en).
- [ ] Validate mobile/desktop layout, first viewport, keyboard links, examples, QR scanning at print size, copy/reset, and console in a real browser. Filename suffixes do not guarantee collision-free names; that limitation is documented, not repaired here.
- [ ] Confirm the real operator/contact details, email deliverability, applicable privacy disclosures and retention practices. A public DNS lookup returned no MX records for bizzon.app; this is not a delivery test, and hello@bizzon.app must not be described as verified. No complete legal-compliance assessment was performed. Review the separate Invoice Maker app independently before relying on its data handling.
- [ ] Review Vercel Analytics and external font use/consent for the intended audience. Existing services remain enabled. Sources: [Vercel Analytics privacy](https://vercel.com/docs/analytics/privacy-policy), [Vercel Privacy Notice](https://vercel.com/legal/privacy-notice), [Google Fonts FAQ](https://fonts.google.com/faq).
- [ ] Parent: review diff, commit/release through the existing workflow, then check live metadata, ads.txt, trust pages, canonical links, robots and sitemap reachability, old aliases, and the QR guide redirect. Verify HTTP permanent redirects reach the final URL without a chain.
- [ ] Owner: verify site/account association in AdSense and request review only after the released site is ready. The configured publisher ID matches the supplied ID; account ownership/dashboard state was not independently checked.
- [ ] Before enabling ads, choose/configure the appropriate CMP and consent behavior, test accept/reject/change choices and network requests, update Privacy, and review ad placements. Consult [Google’s publisher CMP requirements](https://support.google.com/adsense/answer/13554116?hl=en), including certified CMP requirements for personalized ads in the EEA, UK, and Switzerland. Verification metadata alone does not serve ads or establish consent/compliance.

No AdSense approval is guaranteed by these changes or passing tests.

## Changed-file inventory

Remediation files (the concurrent CSS change is excluded):

- `astro.config.mjs`
- `docs/adsense-readiness.md`
- `package.json`
- `scripts/verify-adsense-readiness.mjs`
- `scripts/verify-date-calculator.mjs`
- `scripts/verify-filename-cleaner.mjs`
- `scripts/verify-home-tools-polish.mjs`
- `scripts/verify-invoice-maker.mjs`
- `scripts/verify-percentage-calculator.mjs`
- `scripts/verify-qr-code-generator.mjs`
- `scripts/verify-random-picker.mjs`
- `scripts/verify-support-pages.mjs`
- `scripts/verify-tip-calculator.mjs`
- `scripts/verify-tool-seo-content.mjs`
- `scripts/verify-unit-converter.mjs`
- `scripts/verify-vat-sales-tax-calculator.mjs`
- `src/AGENTS.md`
- `src/components/Footer.astro`
- `src/components/ToolSeoSections.astro`
- `src/data/redirects.ts`
- `src/data/site.ts`
- `src/data/supportPages.ts`
- `src/data/toolLimitations.ts`
- `src/data/toolSeo.ts`
- `src/layouts/BaseLayout.astro`
- `src/layouts/ToolLayout.astro`
- `src/pages/about.astro`
- `src/pages/invoice-maker.astro`
- `src/pages/privacy.astro`
- `src/pages/tools.astro`
- `src/pages/word-counter.astro`
- `vercel.json`
