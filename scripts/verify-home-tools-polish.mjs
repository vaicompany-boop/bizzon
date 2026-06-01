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
  '6 live browser tools',
  'All tools run locally in your browser',
  'Word Counter',
  'Case Converter',
  'Character Counter',
  'Text Cleaner',
  'Slug Generator',
  'Meta Title &amp; Description Checker',
  'Password Generator',
  'Random Picker',
  'Explore all tools',
  'Text tools live now',
  'No login. No upload. No clutter.',
];

const toolsRequired = [
  '6 live tools',
  'Live text tools',
  'Coming next',
  'Use this if you need to',
  '/word-counter',
  '/case-converter',
  '/character-counter',
  '/text-cleaner',
  '/slug-generator',
  '/meta-title-description-checker',
  'Password Generator',
  'Random Picker',
  'Unit Converter Mini',
];

for (const needle of homeRequired) {
  if (!home.includes(needle)) throw new Error(`Expected homepage HTML to include: ${needle}`);
}

for (const needle of toolsRequired) {
  if (!tools.includes(needle)) throw new Error(`Expected tools page HTML to include: ${needle}`);
}

console.log('Homepage and tools page polish verification passed.');
