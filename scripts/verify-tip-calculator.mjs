import { tools as registeredTools } from '../src/data/tools.ts';
const liveToolCount = registeredTools.filter(tool => tool.status === 'live').length;
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'tip-calculator', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ tipCalculator: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'Tip Calculator',
  'Calculate tips and split bills',
  'id="billAmount"',
  'id="tipPercent"',
  'id="peopleCount"',
  'id="currencySymbol"',
  'id="roundMode"',
  'id="tipResult"',
  'id="copyTipResult"',
  'id="sampleTip"',
  'id="clearTip"',
  'Quick tip math',
  'Split the total',
  'Your bill amount stays in your browser',
  '/percentage-calculator',
  '/unit-converter',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Tip Calculator page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes(`${liveToolCount} ${name === 'home' ? 'browser tools' : 'live tools'}`)) throw new Error(`Expected ${name} page to show current live tool count ${liveToolCount}`);
  if (!page.includes('/tip-calculator')) throw new Error(`Expected ${name} page to link to /tip-calculator`);
  if (!page.includes('Tip Calculator')) throw new Error(`Expected ${name} page to include Tip Calculator`);
}

for (const tool of registeredTools.filter(tool => tool.status === 'planned')) {
  if (!tools.includes(tool.name)) throw new Error(`Expected tools page roadmap to include ${tool.name}`);
}
if (!tools.includes('href="/invoice-maker"')) throw new Error('Expected live Invoice Maker to replace the former Invoice Helper roadmap item');

console.log('Tip Calculator static page verification passed.');
