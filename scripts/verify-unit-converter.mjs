import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'unit-converter', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ unitConverter: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Unit Converter Mini',
  'Convert length, weight, and temperature',
  'id="converterCategory"',
  'id="converterInput"',
  'id="fromUnit"',
  'id="toUnit"',
  'id="converterOutput"',
  'id="swapUnits"',
  'id="clearConverter"',
  'id="sampleConverter"',
  'Length',
  'Weight',
  'Temperature',
  'meters',
  'kilograms',
  'celsius',
  'Browser-only utility',
  'conversion happens locally in your browser',
  '/random-picker',
  '/password-generator',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Unit Converter page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('16 live')) throw new Error(`Expected ${name} page to show 16 live tools`);
  if (!page.includes('/unit-converter')) throw new Error(`Expected ${name} page to link to /unit-converter`);
  if (!page.includes('Unit Converter Mini')) throw new Error(`Expected ${name} page to include Unit Converter Mini`);
}

console.log('Unit Converter Mini static page verification passed.');
