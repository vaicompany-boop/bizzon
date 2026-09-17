import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { tools } from '../src/data/tools.ts';

// This route deliberately hands off to the dedicated application. Testing the
// unused legacy component would not prove the deployed entry page is correct.
const html = readFileSync('dist/invoice-maker/index.html', 'utf8');
const app = 'https://invoice-maker-chi-lyart.vercel.app/';
for (const destination of [app, `${app}invoices/new`]) {
  assert.ok(html.includes(`href="${destination}" target="_blank" rel="noopener noreferrer"`), `Safe external handoff: ${destination}`);
}
for (const text of ['Open the full Invoice Maker app.', 'Review storage before use', 'Review its privacy and storage behavior', 'Tool guide', 'FAQ', 'application/ld+json']) {
  assert.ok(html.includes(text), `Missing entry-page contract: ${text}`);
}
for (const href of ['/privacy', '/vat-sales-tax-calculator', '/percentage-calculator', '/date-calculator']) {
  assert.ok(html.includes(`href="${href}"`), `Missing related/help link: ${href}`);
}
assert.ok(html.includes('<link rel="canonical" href="https://bizzon.app/invoice-maker"'));
assert.ok(!html.includes('id="invoiceNumber"'), 'Legacy embedded editor must not be advertised as the current app');
const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
assert.ok(blocks.some(b => b['@type'] === 'WebApplication' && b.url === 'https://bizzon.app/invoice-maker'));
assert.ok(blocks.some(b => b['@type'] === 'FAQPage' && b.mainEntity.length > 0));
const count = tools.filter(t => t.status === 'live').length;
for (const [route, label] of [['index.html', 'browser tools'], ['tools/index.html', 'live tools']]) {
  const page = readFileSync(`dist/${route}`, 'utf8');
  assert.ok(page.includes(`${count} ${label}`), 'Tool count must match registry');
  assert.ok(page.includes('href="/invoice-maker"'), 'Invoice entry remains discoverable');
}
console.log('Invoice Maker handoff, safety, schema, privacy and discovery verification passed.');
