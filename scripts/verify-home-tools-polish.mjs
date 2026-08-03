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
  `${liveToolCount} browser tools`,
  'A small task deserves a direct route.',
  'No login. No upload. No extra tab.',
  'Fast launch',
  'Three frequent stops.',
  'Words in.',
  'Numbers out.',
  'Make a thing.',
  'Private by default. Useful on purpose.',
  'Word Counter',
  'Text Cleaner',
  'VAT / Sales Tax Calculator',
  'QR Code Generator',
  'CSV to JSON Converter',
  'Image to WebP Converter',
];

const homeToolLinks = [
  '/word-counter', '/text-cleaner', '/case-converter', '/slug-generator', '/filename-cleaner', '/character-counter',
  '/percentage-calculator', '/vat-sales-tax-calculator', '/tip-calculator', '/date-calculator', '/unit-converter', '/invoice-maker',
  '/qr-code-generator', '/password-generator', '/json-formatter', '/csv-to-json', '/image-to-webp', '/random-picker',
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

for (const href of homeToolLinks) {
  if (!home.includes(`href="${href}"`)) throw new Error(`Expected homepage to link featured station tool: ${href}`);
}

for (const href of liveToolLinks) {
  if (!tools.includes(`href="${href}"`)) throw new Error(`Expected tools page to link live tool: ${href}`);
}

for (const href of supportPageLinks) {
  if (!tools.includes(`href="${href}"`)) throw new Error(`Expected tools page to link support guide: ${href}`);
}

console.log('Homepage and tools page polish verification passed.');
