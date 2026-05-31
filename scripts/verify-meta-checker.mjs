import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'meta-title-description-checker', 'index.html');

if (!existsSync(routePath)) {
  throw new Error('Expected /meta-title-description-checker route to be generated at dist/meta-title-description-checker/index.html');
}

const html = readFileSync(routePath, 'utf8');
const required = [
  'Meta Title &amp; Description Checker',
  'id="metaTitleInput"',
  'id="metaDescriptionInput"',
  'id="titleLength"',
  'id="descriptionLength"',
  'id="titleSeoNote"',
  'id="descriptionSeoNote"',
  'id="serpTitlePreview"',
  'id="serpDescriptionPreview"',
  'id="sampleMetaText"',
  'id="clearMetaText"',
  'Browser-only utility',
  'text stays in your browser',
  '/slug-generator',
  '/character-counter',
  '/word-counter',
];

for (const needle of required) {
  if (!html.includes(needle)) {
    throw new Error(`Expected Meta Title & Description Checker page HTML to include: ${needle}`);
  }
}

console.log('Meta Title & Description Checker static page verification passed.');
