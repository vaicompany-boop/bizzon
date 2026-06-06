import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'password-generator', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ passwordGenerator: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Password Generator',
  'Generate strong random passwords locally in your browser',
  'id="passwordOutput"',
  'id="passwordLength"',
  'id="includeUppercase"',
  'id="includeLowercase"',
  'id="includeNumbers"',
  'id="includeSymbols"',
  'id="avoidAmbiguous"',
  'id="generatePassword"',
  'id="copyPassword"',
  'Browser-only utility',
  'password stays in your browser',
  'window.crypto',
  '/character-counter',
  '/random-picker',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Password Generator page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('14 live')) throw new Error(`Expected ${name} page to show 14 live tools`);
  if (!page.includes('/password-generator')) throw new Error(`Expected ${name} page to link to /password-generator`);
  if (!page.includes('Password Generator')) throw new Error(`Expected ${name} page to include Password Generator`);
}

console.log('Password Generator static page verification passed.');
