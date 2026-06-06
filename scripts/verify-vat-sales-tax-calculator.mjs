import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'vat-sales-tax-calculator', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ vatSalesTaxCalculator: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'VAT / Sales Tax Calculator',
  'Add or remove VAT and sales tax',
  'id="vatMode"',
  'id="vatPrice"',
  'id="vatRate"',
  'id="vatCurrency"',
  'id="vatResult"',
  'id="copyVatResult"',
  'id="sampleVat"',
  'id="clearVat"',
  'Add tax to a price',
  'Remove tax from a total',
  'Your prices and tax calculations stay in your browser',
  '/percentage-calculator',
  '/tip-calculator',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected VAT / Sales Tax Calculator page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('15 live')) throw new Error(`Expected ${name} page to show 15 live tools`);
  if (!page.includes('/vat-sales-tax-calculator')) throw new Error(`Expected ${name} page to link to /vat-sales-tax-calculator`);
  if (!page.includes('VAT / Sales Tax Calculator')) throw new Error(`Expected ${name} page to include VAT / Sales Tax Calculator`);
}

for (const planned of ['Invoice Helper']) {
  if (!tools.includes(planned)) throw new Error(`Expected tools page roadmap to include ${planned}`);
}

console.log('VAT / Sales Tax Calculator static page verification passed.');
