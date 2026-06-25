import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const pages = [
  {
    slug: 'best-free-text-tools',
    title: 'Best Free Text Tools',
    mustLink: ['/word-counter', '/character-counter', '/text-cleaner', '/case-converter', '/slug-generator'],
  },
  {
    slug: 'how-to-write-meta-descriptions',
    title: 'How to Write Meta Descriptions',
    mustLink: ['/meta-title-description-checker', '/character-counter', '/word-counter', '/slug-generator'],
  },
  {
    slug: 'how-to-create-clean-filenames',
    title: 'How to Create Clean Filenames',
    mustLink: ['/filename-cleaner', '/slug-generator', '/case-converter', '/text-cleaner'],
  },
  {
    slug: 'quick-business-calculators',
    title: 'Quick Business Calculators',
    mustLink: ['/percentage-calculator', '/vat-sales-tax-calculator', '/tip-calculator', '/unit-converter', '/date-calculator'],
  },
  {
    slug: 'private-browser-tools',
    title: 'Private Browser Tools',
    mustLink: ['/tools', '/password-generator', '/qr-code-generator', '/random-picker'],
  },
];

const failures = [];
for (const page of pages) {
  const file = join('dist', page.slug, 'index.html');
  if (!existsSync(file)) {
    failures.push(`${page.slug}: missing dist page`);
    continue;
  }

  const html = readFileSync(file, 'utf8');
  const checks = [
    page.title,
    'Related Bizzon tools',
    'HowTo',
    'BreadcrumbList',
    '<script type="application/ld+json">',
  ];

  for (const check of checks) {
    if (!html.includes(check)) failures.push(`${page.slug}: missing ${check}`);
  }

  for (const href of page.mustLink) {
    if (!html.includes(`href="${href}"`)) failures.push(`${page.slug}: missing link ${href}`);
  }

  const sectionCount = (html.match(/<h2/g) || []).length;
  if (sectionCount < 4) failures.push(`${page.slug}: expected at least 4 h2 sections, found ${sectionCount}`);
}

const toolsHtml = existsSync(join('dist', 'tools', 'index.html')) ? readFileSync(join('dist', 'tools', 'index.html'), 'utf8') : '';
if (!toolsHtml.includes('Guides for choosing the right tool')) failures.push('/tools: missing support guide section');
for (const page of pages) {
  if (!toolsHtml.includes(`href="/${page.slug}"`)) failures.push(`/tools: missing support page link /${page.slug}`);
}

const homeHtml = existsSync(join('dist', 'index.html')) ? readFileSync(join('dist', 'index.html'), 'utf8') : '';
if (!homeHtml.includes('Helpful guides for small tasks')) failures.push('/: missing support guide section');
if (!homeHtml.includes('href="/best-free-text-tools"')) failures.push('/: missing best free text tools link');

if (failures.length) {
  console.error('Support page verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Support page verification OK: ${pages.length} SEO support pages, structured data, internal links, and guide hubs verified.`);
