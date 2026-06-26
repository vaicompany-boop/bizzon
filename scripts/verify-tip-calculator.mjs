import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'tip-calculator', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ tipCalculator: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Tip Calculator',
  'Calculate tips and split bills',
  'id="billAmount"',
  'id="tipPercent"',
  'id="peopleCount"',
  'id="currencySymbol"',
  'id="roundMode"',
  'id="tipResult"',
  'id="copyTipResult"',
  'id="sampleTip"',
  'id="clearTip"',
  'Quick tip math',
  'Split the total',
  'Your bill amount stays in your browser',
  '/percentage-calculator',
  '/unit-converter',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Tip Calculator page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('16 live')) throw new Error(`Expected ${name} page to show 16 live tools`);
  if (!page.includes('/tip-calculator')) throw new Error(`Expected ${name} page to link to /tip-calculator`);
  if (!page.includes('Tip Calculator')) throw new Error(`Expected ${name} page to include Tip Calculator`);
}

for (const planned of ['Invoice Helper']) {
  if (!tools.includes(planned)) throw new Error(`Expected tools page roadmap to include ${planned}`);
}

console.log('Tip Calculator static page verification passed.');
