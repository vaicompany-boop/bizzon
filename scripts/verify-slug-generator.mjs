import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'slug-generator', 'index.html');

if (!existsSync(routePath)) {
  throw new Error('Expected /slug-generator route to be generated at dist/slug-generator/index.html');
}

const html = readFileSync(routePath, 'utf8');
const required = [
  'Slug Generator',
  'id="slugInput"',
  'id="slugOutput"',
  'id="separatorSelect"',
  'id="lowercaseSlug"',
  'id="copySlug"',
  'Browser-only utility',
  'text stays in your browser',
  '/text-cleaner',
  '/case-converter',
  '/character-counter',
];

for (const needle of required) {
  if (!html.includes(needle)) {
    throw new Error(`Expected Slug Generator page HTML to include: ${needle}`);
  }
}

console.log('Slug Generator static page verification passed.');
