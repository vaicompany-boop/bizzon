import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'text-cleaner', 'index.html');

if (!existsSync(routePath)) {
  throw new Error('Expected /text-cleaner route to be generated at dist/text-cleaner/index.html');
}

const html = readFileSync(routePath, 'utf8');
const required = [
  'Text Cleaner',
  'id="dirtyText"',
  'id="cleanText"',
  'data-clean="spaces"',
  'data-clean="lines"',
  'data-clean="smart"',
  'id="copyCleanText"',
  'Browser-only utility',
  'text stays in your browser',
  '/word-counter',
  '/case-converter',
  '/character-counter',
];

for (const needle of required) {
  if (!html.includes(needle)) {
    throw new Error(`Expected Text Cleaner page HTML to include: ${needle}`);
  }
}

console.log('Text Cleaner static page verification passed.');
