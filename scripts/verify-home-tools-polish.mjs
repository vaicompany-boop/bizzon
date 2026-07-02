import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

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
  '16 live browser tools',
  'All tools run locally in your browser',
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
  '16 tools live now',
  'No login. No upload. No clutter.',
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
  '16 live tools',
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
  if (!tools.includes(`href="${href}"`)) throw new Error(`Expected tools page to link live tool: ${href}`);
}

for (const href of supportPageLinks) {
  if (!tools.includes(`href="${href}"`)) throw new Error(`Expected tools page to link support guide: ${href}`);
}

console.log('Homepage and tools page polish verification passed.');
