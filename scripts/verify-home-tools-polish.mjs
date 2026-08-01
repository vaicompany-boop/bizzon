import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tools as registeredTools } from '../src/data/tools.ts';

const liveToolCount = registeredTools.filter((tool) => tool.status === 'live').length;

const root = process.cwd();
const pages = {
  home: join(root, 'dist', 'index.html'),
  tools: join(root, 'dist', 'tools', 'index.html'),
};

for (const [name, path] of Object.entries(pages)) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const home = readFileSync(pages.home, 'utf8');
const tools = readFileSync(pages.tools, 'utf8');

const homeRequired = [
  `${liveToolCount} browser tools live now`,
  'All tools run locally in your browser',
  'Popular text tools',
  'SEO and publishing tools',
  'Business calculators',
  'Private browser utilities',
  'Start with a focused workflow',
  'Featured guide clusters',
  'Count and clean drafts',
  'Prepare search snippets',
  'Check prices and percentages',
  'Create and share QR codes',
  'Word Counter',
  'Case Converter',
  'Character Counter',
  'Text Cleaner',
  'Slug Generator',
  'Meta Title &amp; Description Checker',
  'Password Generator',
  'Random Picker',
  'Unit Converter Mini',
  'Date Calculator',
  'Percentage Calculator',
  'Filename Cleaner',
  'Tip Calculator',
  'VAT / Sales Tax Calculator',
  'QR Code Generator',
  'Invoice Maker',
  'Loan Calculator',
  'Business Name Generator',
  'Explore all tools',
  `${liveToolCount} browser tools live now`,
  'No login. No upload. No clutter.',
  'Looking for a Bizzon login?',
  'Bizzon does not need an account or dashboard login',
];

const liveToolLinks = [
  '/word-counter',
  '/case-converter',
  '/character-counter',
  '/text-cleaner',
  '/slug-generator',
  '/meta-title-description-checker',
  '/password-generator',
  '/random-picker',
  '/unit-converter',
  '/date-calculator',
  '/percentage-calculator',
  '/filename-cleaner',
  '/tip-calculator',
  '/vat-sales-tax-calculator',
  '/qr-code-generator',
  '/invoice-maker',
  '/loan-calculator',
  '/business-name-generator',
];

const supportPageLinks = [
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

const toolsRequired = [
  `${liveToolCount} live tools`,
  'Live tools',
  'Browse by category',
  'Text tools',
  'SEO/publishing tools',
  'Privacy/security tools',
  'Business calculators',
  'Everyday utilities',
  'Related guides',
  'Coming next',
  'Use this if you need to',
  'Word Counter',
  'Case Converter',
  'Character Counter',
  'Text Cleaner',
  'Slug Generator',
  'Meta Title &amp; Description Checker',
  'Password Generator',
  'Random Picker',
  'Unit Converter Mini',
  'Date Calculator',
  'Percentage Calculator',
  'Filename Cleaner',
  'Tip Calculator',
  'VAT / Sales Tax Calculator',
  'QR Code Generator',
  'Invoice Maker',
  'Loan Calculator',
  'Business Name Generator',
];

for (const needle of homeRequired) {
  if (!home.includes(needle)) throw new Error(`Expected homepage HTML to include: ${needle}`);
}

for (const needle of toolsRequired) {
  if (!tools.includes(needle)) throw new Error(`Expected tools page HTML to include: ${needle}`);
}

for (const href of liveToolLinks) {
  if (!home.includes(`href="${href}"`)) throw new Error(`Expected homepage to link live tool: ${href}`);
  if (!tools.includes(`href="${href}"`)) throw new Error(`Expected tools page to link live tool: ${href}`);
}

for (const href of supportPageLinks) {
  if (!home.includes(`href="${href}"`)) throw new Error(`Expected homepage to link support guide: ${href}`);
  if (!tools.includes(`href="${href}"`)) throw new Error(`Expected tools page to link support guide: ${href}`);
}

console.log('Homepage and tools page polish verification passed.');
