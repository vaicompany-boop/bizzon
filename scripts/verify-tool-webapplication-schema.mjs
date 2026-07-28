import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tools } from '../src/data/tools.ts';

const liveTools = tools.filter((tool) => tool.status === 'live');
const missing = [];

for (const tool of liveTools) {
  const slug = tool.href.replace(/^\//, '');
  const file = join(process.cwd(), 'dist', slug, 'index.html');
  if (!existsSync(file)) {
    missing.push(`${tool.href}: missing built HTML page`);
    continue;
  }

  const html = readFileSync(file, 'utf8');
  const expectedSnippets = [
    '"@type":"WebApplication"',
    `"name":"${tool.title}"`,
    `"url":"https://bizzon.app${tool.href}"`,
    '"applicationCategory":"UtilitiesApplication"',
    '"operatingSystem":"Any"',
    '"isAccessibleForFree":true',
    '"price":"0"',
  ];

  for (const snippet of expectedSnippets) {
    if (!html.includes(snippet)) {
      missing.push(`${tool.href}: missing structured data snippet ${snippet}`);
    }
  }
}

if (missing.length) {
  console.error('Tool WebApplication schema verification failed:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Tool WebApplication schema OK: ${liveTools.length} live tool pages expose structured data.`);
