import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'percentage-calculator', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ percentageCalculator: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Percentage Calculator',
  'Calculate percentages, discounts, and changes',
  'id="percentageMode"',
  'id="percentageA"',
  'id="percentageB"',
  'id="percentageResult"',
  'id="copyPercentageResult"',
  'id="clearPercentage"',
  'id="samplePercentage"',
  'What is X% of Y?',
  'X is what percent of Y?',
  'Percentage change',
  'Increase by X%',
  'Decrease / discount by X%',
  'Browser-only utility',
  'Your numbers stay in your browser',
  '/date-calculator',
  '/unit-converter',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Percentage Calculator page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('16 live')) throw new Error(`Expected ${name} page to show 16 live tools`);
  if (!page.includes('/percentage-calculator')) throw new Error(`Expected ${name} page to link to /percentage-calculator`);
  if (!page.includes('Percentage Calculator')) throw new Error(`Expected ${name} page to include Percentage Calculator`);
}

for (const planned of ['Invoice Helper']) {
  if (!tools.includes(planned)) throw new Error(`Expected tools page roadmap to include ${planned}`);
}

console.log('Percentage Calculator static page verification passed.');
