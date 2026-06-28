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
  'application/ld+json',
  'FAQPage',
];

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
