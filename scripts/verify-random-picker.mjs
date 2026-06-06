import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'random-picker', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ randomPicker: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Random Picker',
  'Pick a random item from a list',
  'id="pickerInput"',
  'id="winnerOutput"',
  'id="pickOne"',
  'id="pickMultiple"',
  'id="pickCount"',
  'id="allowDuplicates"',
  'id="shuffleList"',
  'id="clearPicker"',
  'id="samplePicker"',
  'Browser-only utility',
  'list stays in your browser',
  'window.crypto',
  '/password-generator',
  '/text-cleaner',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Random Picker page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('10 live')) throw new Error(`Expected ${name} page to show 10 live tools`);
  if (!page.includes('/random-picker')) throw new Error(`Expected ${name} page to link to /random-picker`);
  if (!page.includes('Random Picker')) throw new Error(`Expected ${name} page to include Random Picker`);
}

console.log('Random Picker static page verification passed.');
