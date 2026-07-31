import fs from 'node:fs';

const requiredRoutes = [
  {
    path: 'dist/loan-calculator/index.html',
    title: 'Loan Calculator',
    markers: ['id="loanAmount"', 'id="loanResult"', 'id="clearLoan"'],
  },
  {
    path: 'dist/business-name-generator/index.html',
    title: 'Business Name Generator',
    markers: ['id="businessKeywords"', 'id="businessNameResults"', 'id="clearBusinessNames"'],
  },
];

for (const route of requiredRoutes) {
  if (!fs.existsSync(route.path)) throw new Error(`Missing built route: ${route.path}`);
  const html = fs.readFileSync(route.path, 'utf8');
  if (!html.includes(route.title)) throw new Error(`Missing title marker in ${route.path}`);
  for (const marker of route.markers) {
    if (!html.includes(marker)) throw new Error(`Missing ${marker} in ${route.path}`);
  }
}

const registry = fs.readFileSync('src/data/tools.ts', 'utf8');
for (const href of ['/loan-calculator', '/business-name-generator']) {
  const entry = registry.match(new RegExp(`href: '${href}',[\\s\\S]{0,250}?status: '([^']+)'`));
  if (!entry || entry[1] !== 'live') throw new Error(`Expected ${href} to be registered as live`);
}

console.log('Loan Calculator and Business Name Generator static verification passed.');
