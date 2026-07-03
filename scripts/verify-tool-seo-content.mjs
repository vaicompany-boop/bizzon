import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const routes = [
  'word-counter',
  'case-converter',
  'character-counter',
  'text-cleaner',
  'slug-generator',
  'meta-title-description-checker',
  'password-generator',
  'random-picker',
  'unit-converter',
  'date-calculator',
  'percentage-calculator',
  'filename-cleaner',
  'tip-calculator',
  'vat-sales-tax-calculator',
  'qr-code-generator',
  'invoice-maker',
];

const requiredSnippets = [
  'Tool guide',
  'How to use the',
  'Common use cases',
  'FAQ',
  'Related tools to try next',
  'Related guides',
  'Browse every Bizzon tool',
  'href="/tools"',
  'application/ld+json',
  'FAQPage',
];

const supportGuideHrefs = [
  '/best-free-text-tools',
  '/how-to-write-meta-descriptions',
  '/how-to-create-clean-filenames',
  '/quick-business-calculators',
  '/private-browser-tools',
  '/how-to-clean-pasted-text',
  '/word-count-vs-character-count',
  '/how-to-make-a-url-slug',
  '/vat-vs-sales-tax-calculator-guide',
  '/how-to-create-qr-codes',
  '/free-word-counter',
  '/character-limit-guide',
  '/meta-description-length-guide',
  '/free-qr-code-generator',
  '/how-to-make-a-qr-code-for-a-link',
  '/vat-calculator-germany',
  '/vat-calculator-eu',
  '/percentage-increase-calculator',
  '/discount-calculator',
  '/tip-calculator-guide',
];

const expectedGuideCounts = {
  'word-counter': 4,
  'case-converter': 2,
  'character-counter': 3,
  'text-cleaner': 3,
  'slug-generator': 3,
  'meta-title-description-checker': 3,
  'password-generator': 2,
  'random-picker': 2,
  'unit-converter': 2,
  'date-calculator': 2,
  'percentage-calculator': 3,
  'filename-cleaner': 2,
  'tip-calculator': 2,
  'vat-sales-tax-calculator': 3,
  'qr-code-generator': 3,
  'invoice-maker': 3,
};

const missing = [];
const routeSpecificSnippets = {
  'word-counter': [
    'When word count matters',
    'Essays and assignments',
    'Blog drafts and newsletters',
    'Social copy and product text',
    'SEO snippets and page copy',
    'Word count vs character count',
    'href="/word-count-vs-character-count"',
    'href="/how-to-clean-pasted-text"',
    'href="/best-free-text-tools"',
    'href="/meta-title-description-checker"',
  ],
  'random-picker': [
    'Random picker ideas for real lists',
    'Giveaway winner picker',
    'Classroom random name picker',
    'Team decision and task rotation',
    'Raffle list and lunch picker',
    'Fair draws need clean input',
    'href="/private-browser-tools"',
    'href="/tools"',
    'href="/text-cleaner"',
  ],
};

for (const route of routes) {
  const file = join('dist', route, 'index.html');
  if (!existsSync(file)) {
    missing.push(`${route}: missing dist page`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  for (const snippet of requiredSnippets) {
    if (!html.includes(snippet)) {
      missing.push(`${route}: missing ${snippet}`);
    }
  }
  const faqCount = (html.match(/@type":"Question/g) || []).length;
  if (faqCount < 3) {
    missing.push(`${route}: expected at least 3 FAQ JSON-LD questions, found ${faqCount}`);
  }

  const relatedToolLinks = [...html.matchAll(/Related tools to try next[\s\S]*?<\/section>/g)][0]?.[0] || '';
  const relatedToolHrefCount = (relatedToolLinks.match(/href="\/[^"#]+"/g) || []).length;
  if (relatedToolHrefCount < 2 || relatedToolHrefCount > 4) {
    missing.push(`${route}: expected 2-4 related tool links, found ${relatedToolHrefCount}`);
  }

  const guideLinks = supportGuideHrefs.filter((href) => html.includes(`href="${href}"`));
  if (guideLinks.length !== expectedGuideCounts[route]) {
    missing.push(`${route}: expected ${expectedGuideCounts[route]} support guide links, found ${guideLinks.length} (${guideLinks.join(', ')})`);
  }

  for (const snippet of routeSpecificSnippets[route] || []) {
    if (!html.includes(snippet)) {
      missing.push(`${route}: missing route-specific snippet ${snippet}`);
    }
  }
}

if (missing.length) {
  console.error('SEO content verification failed:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`SEO content verification OK: ${routes.length} tool pages include guide, FAQ JSON-LD, use cases, and related links.`);
