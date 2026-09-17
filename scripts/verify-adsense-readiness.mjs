import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const read = p => existsSync(p) ? readFileSync(p, 'utf8') : '';
const failures = [];
const check = (ok, message) => { if (!ok) failures.push(message); };
const config = JSON.parse(read('vercel.json'));
const rootRedirect = config.redirects.find(r => r.source === '/' && r.has?.some(h => h.type === 'host' && h.value === 'www.bizzon.app'));
check(rootRedirect?.permanent === true && rootRedirect.destination === 'https://bizzon.app/', 'www root has an explicit permanent host redirect');
const redirects = config.redirects.filter(r => !r.has && r.source.startsWith('/') && !r.source.includes(':'));
const aliases = new Map(redirects.map(r => [r.source, r.destination]));
const files = dir => readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]);
const htmlFiles = files('dist').filter(p => p.endsWith('.html'));
const routeFile = p => p === '/' ? 'dist/index.html' : `dist${p}/index.html`;
const sitemap = read('dist/sitemap-0.xml');
const publisher = read('public/ads.txt').match(/google\.com, (pub-\d{16}), DIRECT, f08c47fec0942fa0/)?.[1];
check(!!publisher, 'valid ads.txt publisher');
check(read('dist/ads.txt') === read('public/ads.txt'), 'published ads.txt matches source');
check(read('src/data/site.ts').includes(publisher), 'central publisher configuration');
for (const file of htmlFiles) {
  const html = read(file);
  const route = '/' + file.replace(/^dist\//, '').replace(/index\.html$/, '').replace(/\/$/, '');
  check(!aliases.has(route), `${route}: redirected source must not be built`);
  const head = html.match(/<head>[\s\S]*?<\/head>/)?.[0] || '';
  const metas = head.match(/<meta\b[^>]*name="google-adsense-account"[^>]*>/g) || [];
  check(metas.length === 1 && metas[0].includes(`content="ca-${publisher}"`), `${route}: exactly one matching verification meta`);
  check(!/adsbygoogle|pagead2\.googlesyndication/.test(html), `${route}: no ad serving before consent setup`);
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  check(canonicals.length === 1 && canonicals[0][1] === `https://bizzon.app${route}`, `${route}: self canonical`);
  check(sitemap.includes(`<loc>https://bizzon.app${route === "/" ? "" : route}</loc>`), `${route}: sitemap entry`);
  const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] || '';
  for (const trust of ['/about', '/privacy', '/contact']) check(footer.includes(`href="${trust}"`), `${route}: footer ${trust}`);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(href.replaceAll('&amp;', '&'), `https://bizzon.app${route}`);
    if (url.origin !== 'https://bizzon.app') continue;
    check(!aliases.has(url.pathname), `${route}: indirect link ${url.pathname}`);
    check(existsSync(routeFile(url.pathname)) || existsSync(`dist${url.pathname}`), `${route}: broken link ${url.pathname}`);
    if (url.hash && existsSync(routeFile(url.pathname))) check(read(routeFile(url.pathname)).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route}: missing anchor ${href}`);
  }
}
for (const r of redirects) {
  check(r.permanent === true && !aliases.has(r.destination) && existsSync(routeFile(r.destination)), `${r.source}: permanent direct redirect to built route`);
  check(!sitemap.includes(`<loc>https://bizzon.app${r.source}</loc>`), `${r.source}: excluded from sitemap`);
}
for (const [, location] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = new URL(location).pathname;
  check(existsSync(routeFile(path)) && !aliases.has(path), `sitemap has only final built routes: ${path}`);
}
check(read('dist/sitemap.xml').includes('https://bizzon.app/sitemap-0.xml'), 'legacy sitemap endpoint points to build sitemap');
const qrRedirect = redirects.find(r => r.source === '/how-to-make-a-qr-code-for-a-link');
check(qrRedirect?.destination === '/how-to-create-qr-codes', 'QR guide consolidated');
const guideChecks = {
  'how-to-create-qr-codes': ['Worked example', 'https://bizzon.app/tools', 'margin', 'Checklist', 'Limitations'],
  'how-to-clean-pasted-text': ['Worked example', 'Hello, world!', 'Checklist', 'Limitations'],
  'word-count-vs-character-count': ['Worked example', 'UTF-16', '200', 'Checklist', 'Limitations'],
  'how-to-create-clean-filenames': ['Worked example', 'cafe-menu.pdf', 'Checklist', 'Limitations'],
  'vat-vs-sales-tax-calculator-guide': ['Worked example', '120', '1.20', 'Checklist', 'Limitations'],
};
for (const [slug, snippets] of Object.entries(guideChecks)) for (const s of snippets) check(read(routeFile('/' + slug)).includes(s), `${slug}: ${s}`);
const reciprocal = { 'how-to-create-qr-codes': ['qr-code-generator'], 'how-to-clean-pasted-text': ['text-cleaner'], 'word-count-vs-character-count': ['word-counter', 'character-counter'], 'how-to-create-clean-filenames': ['filename-cleaner'], 'vat-vs-sales-tax-calculator-guide': ['vat-sales-tax-calculator'] };
for (const [guide, tools] of Object.entries(reciprocal)) for (const tool of tools) {
  check(read(routeFile('/' + guide)).includes(`href="/${tool}"`), `${guide}: link to ${tool}`);
  check(read(routeFile('/' + tool)).includes(`href="/${guide}"`), `${tool}: link to ${guide}`);
}
const privacy = read(routeFile('/privacy'));
for (const s of ['Vercel', 'Analytics', 'Google Fonts', 'img.youtube.com', 'localStorage', 'invoice-maker-chi-lyart.vercel.app', '/contact', 'AdSense', 'IP address']) check(privacy.includes(s), `privacy: ${s}`);
check(read(routeFile('/youtube-thumbnail-downloader')).includes('requests thumbnail images from YouTube'), 'near-tool network exception');
check(read(routeFile('/word-counter')).includes('UTF-16'), 'near-tool count limitations');
check(read(routeFile('/character-counter')).includes('UTF-16'), 'near-tool character limitations');
if (failures.length) { console.error(`AdSense readiness: ${failures.length} failures\n` + failures.slice(0, 25).join('\n')); process.exit(1); }
console.log(`AdSense readiness OK: ${htmlFiles.length} static pages; meta, trust, content, redirects, sitemap and all local links verified.`);
