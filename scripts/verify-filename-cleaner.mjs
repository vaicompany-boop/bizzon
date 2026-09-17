import { tools as registeredTools } from '../src/data/tools.ts';
const liveToolCount = registeredTools.filter(tool => tool.status === 'live').length;
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'filename-cleaner', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ filenameCleaner: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Filename Cleaner',
  'Clean messy filenames in bulk',
  'id="filenameInput"',
  'id="filenameOutput"',
  'id="filenameSeparator"',
  'id="filenameLowercase"',
  'id="filenameKeepExtension"',
  'id="filenameRemoveAccents"',
  'id="filenameUnique"',
  'id="sampleFilenames"',
  'id="clearFilenames"',
  'id="copyFilenames"',
  'Bulk filename cleanup',
  'Web-friendly names',
  'Your filenames stay in your browser',
  '/slug-generator',
  '/text-cleaner',
  '/percentage-calculator',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Filename Cleaner page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes(`${liveToolCount} ${name === 'home' ? 'browser tools' : 'live tools'}`)) throw new Error(`Expected ${name} page to show current live tool count ${liveToolCount}`);
  if (!page.includes('/filename-cleaner')) throw new Error(`Expected ${name} page to link to /filename-cleaner`);
  if (!page.includes('Filename Cleaner')) throw new Error(`Expected ${name} page to include Filename Cleaner`);
}

for (const tool of registeredTools.filter(tool => tool.status === 'planned')) {
  if (!tools.includes(tool.name)) throw new Error(`Expected tools page roadmap to include ${tool.name}`);
}
if (!tools.includes('href="/invoice-maker"')) throw new Error('Expected live Invoice Maker to replace the former Invoice Helper roadmap item');

console.log('Filename Cleaner static page verification passed.');
