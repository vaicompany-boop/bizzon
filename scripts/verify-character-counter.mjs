import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'character-counter', 'index.html');

if (!existsSync(routePath)) {
  throw new Error('Expected /character-counter route to be generated at dist/character-counter/index.html');
}

const html = readFileSync(routePath, 'utf8');
const required = [
  'Character Counter',
  'id="characterInput"',
  'id="totalCharacters"',
  'id="charactersNoSpaces"',
  'id="characterLimit"',
  'id="remainingCharacters"',
  'id="copyCharacterStats"',
  'Browser-only utility',
  'text stays in your browser',
  '/word-counter',
  '/case-converter',
];

for (const needle of required) {
  if (!html.includes(needle)) {
    throw new Error(`Expected Character Counter page HTML to include: ${needle}`);
  }
}

console.log('Character Counter static page verification passed.');
