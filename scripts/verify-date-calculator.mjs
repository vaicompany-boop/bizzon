import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'date-calculator', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ dateCalculator: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Date Calculator',
  'Add days or count days between dates',
  'id="dateMode"',
  'id="startDate"',
  'id="endDate"',
  'id="dayAmount"',
  'id="dateDirection"',
  'id="dateResult"',
  'id="copyDateResult"',
  'id="clearDateCalculator"',
  'id="sampleDateCalculator"',
  'Days between two dates',
  'Add or subtract days',
  'Browser-only utility',
  'calculation happens locally in your browser',
  '/unit-converter',
  '/random-picker',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Date Calculator page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('16 live')) throw new Error(`Expected ${name} page to show 16 live tools`);
  if (!page.includes('/date-calculator')) throw new Error(`Expected ${name} page to link to /date-calculator`);
  if (!page.includes('Date Calculator')) throw new Error(`Expected ${name} page to include Date Calculator`);
}

console.log('Date Calculator static page verification passed.');
