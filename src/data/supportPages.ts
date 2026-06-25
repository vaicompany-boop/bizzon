export type SupportPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  steps: string[];
  sections: { heading: string; body: string }[];
  relatedTools: { label: string; href: string; reason: string }[];
};

export const supportPages: SupportPage[] = [
  {
    slug: 'best-free-text-tools',
    title: 'Best Free Text Tools',
    description: 'A practical guide to Bizzon free text tools for counting words, checking character limits, cleaning pasted text, converting case, and creating URL slugs.',
    eyebrow: 'Text workflow guide',
    intro: 'Small writing tasks often need focused tools instead of a heavy document editor. This guide shows which Bizzon text tool to open when you need counts, cleanup, formatting, or publishing-ready text.',
    steps: ['Start with Text Cleaner if the copy came from a PDF, email, website, or AI draft.', 'Use Word Counter or Character Counter to measure length and limits.', 'Use Case Converter or Slug Generator when the text needs a specific publishing format.'],
    sections: [
      { heading: 'Use Word Counter for drafts and articles', body: 'The Word Counter is best when you need broad writing stats: word count, character count, paragraphs, sentences, and reading time. It is useful for blog posts, emails, assignments, newsletters, and landing-page copy.' },
      { heading: 'Use Character Counter for strict limits', body: 'The Character Counter is better when a field has a hard limit, such as social bios, product titles, SEO snippets, ads, short messages, or form inputs.' },
      { heading: 'Use Text Cleaner before publishing', body: 'Text copied from documents, PDFs, emails, web pages, and AI tools often includes extra spaces, empty lines, or odd punctuation. Text Cleaner makes the copy easier to edit and paste into another tool.' },
      { heading: 'Use Case Converter and Slug Generator for formatting', body: 'Case Converter handles capitalization and code-like formats. Slug Generator turns titles and filenames into clean URL-friendly text for pages, posts, and documentation.' },
    ],
    relatedTools: [
      { label: 'Word Counter', href: '/word-counter', reason: 'count words, characters, and reading time' },
      { label: 'Character Counter', href: '/character-counter', reason: 'check strict character limits' },
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'remove messy copy-paste formatting' },
      { label: 'Case Converter', href: '/case-converter', reason: 'change capitalization and formats' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'create clean URL slugs' },
    ],
  },
  {
    slug: 'how-to-write-meta-descriptions',
    title: 'How to Write Meta Descriptions',
    description: 'A simple guide for writing clearer meta titles and descriptions with Bizzon SEO and text tools.',
    eyebrow: 'SEO writing guide',
    intro: 'Meta titles and descriptions should help searchers understand a page quickly. This guide gives a simple workflow for drafting, measuring, and improving SEO snippets with Bizzon tools.',
    steps: ['Write a clear page title that names the topic or tool.', 'Draft a meta description that explains the benefit in plain language.', 'Check length, clarity, and supporting text before publishing.'],
    sections: [
      { heading: 'Start with the searcher’s problem', body: 'A good meta description should answer what the page does and why someone should open it. Avoid vague claims and focus on the concrete task the page helps with.' },
      { heading: 'Measure the title and description', body: 'Use the Meta Title & Description Checker to preview the title and description, then tighten anything that feels too long, repetitive, or unclear.' },
      { heading: 'Check character length when needed', body: 'If you are writing for a strict CMS field or ad platform, Character Counter helps you stay inside a specific limit while still keeping the copy readable.' },
      { heading: 'Match the slug to the topic', body: 'A clear URL slug supports the same page topic. Use Slug Generator to turn a title into a readable slug before publishing.' },
    ],
    relatedTools: [
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'preview and measure SEO snippets' },
      { label: 'Character Counter', href: '/character-counter', reason: 'stay inside strict limits' },
      { label: 'Word Counter', href: '/word-counter', reason: 'measure broader draft length' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'create a matching URL slug' },
    ],
  },
  {
    slug: 'how-to-create-clean-filenames',
    title: 'How to Create Clean Filenames',
    description: 'A practical guide to cleaning filenames for uploads, websites, shared folders, product images, documents, and archives.',
    eyebrow: 'File cleanup guide',
    intro: 'Clean filenames are easier to scan, share, upload, and manage. This guide explains a simple naming workflow for web-friendly files and bulk filename cleanup.',
    steps: ['Remove confusing spaces, symbols, duplicate separators, and inconsistent casing.', 'Use short readable words that describe the file.', 'Choose hyphens or underscores consistently for the whole batch.'],
    sections: [
      { heading: 'Prefer readable names over messy exports', body: 'Camera files, downloads, screenshots, and exported documents often have names that are hard to search later. Rename them with clear words before uploading or archiving.' },
      { heading: 'Use Filename Cleaner for batches', body: 'Filename Cleaner lets you paste one filename per line and clean the whole list with consistent separators, casing, and character cleanup.' },
      { heading: 'Use Slug Generator for one clean name', body: 'When you only need one web-friendly name, Slug Generator is a quick way to turn a title, product name, or phrase into a clean slug.' },
      { heading: 'Normalize text before renaming', body: 'If filenames came from messy copied text, Text Cleaner and Case Converter can help normalize the words before final filename cleanup.' },
    ],
    relatedTools: [
      { label: 'Filename Cleaner', href: '/filename-cleaner', reason: 'clean filenames in bulk' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'create one clean URL-style name' },
      { label: 'Case Converter', href: '/case-converter', reason: 'normalize casing before cleanup' },
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'remove copied text clutter' },
    ],
  },
  {
    slug: 'quick-business-calculators',
    title: 'Quick Business Calculators',
    description: 'A guide to simple Bizzon calculators for percentages, VAT or sales tax, tips, units, and date planning.',
    eyebrow: 'Business utility guide',
    intro: 'Not every business question needs a spreadsheet. For small price, tax, percentage, date, and conversion checks, a focused browser calculator is often faster.',
    steps: ['Choose the calculator that matches the question.', 'Enter only the numbers needed for that calculation.', 'Copy the result into your note, quote, invoice draft, or planning document.'],
    sections: [
      { heading: 'Use Percentage Calculator for quick price math', body: 'Percentage Calculator is useful for discounts, increases, decreases, markups, percentage-of questions, and percentage change.' },
      { heading: 'Use VAT / Sales Tax Calculator for tax estimates', body: 'VAT / Sales Tax Calculator helps add tax to a net price or remove included tax from a gross price. It is for quick estimates, not formal tax advice.' },
      { heading: 'Use Tip Calculator for shared totals', body: 'Tip Calculator is useful for splitting a restaurant bill, checking a tip amount, or rounding totals for easier payment.' },
      { heading: 'Use Unit Converter and Date Calculator for planning', body: 'Unit Converter helps with common length, weight, and temperature conversions. Date Calculator helps with deadlines, durations, and schedule windows.' },
    ],
    relatedTools: [
      { label: 'Percentage Calculator', href: '/percentage-calculator', reason: 'calculate discounts and percentage change' },
      { label: 'VAT / Sales Tax Calculator', href: '/vat-sales-tax-calculator', reason: 'add or remove tax from prices' },
      { label: 'Tip Calculator', href: '/tip-calculator', reason: 'split bills and totals' },
      { label: 'Unit Converter Mini', href: '/unit-converter', reason: 'convert common units' },
      { label: 'Date Calculator', href: '/date-calculator', reason: 'calculate deadlines and date ranges' },
    ],
  },
  {
    slug: 'private-browser-tools',
    title: 'Private Browser Tools',
    description: 'A guide to Bizzon browser-based tools that run locally for text, lists, passwords, QR codes, calculations, and everyday utilities.',
    eyebrow: 'Privacy-first guide',
    intro: 'Many small tasks do not need an account, upload, or dashboard. Bizzon focuses on browser-based utilities that help you finish the task with less friction.',
    steps: ['Open the tool that matches the small task.', 'Paste or enter only the information needed.', 'Copy the result and close the page when done.'],
    sections: [
      { heading: 'Why browser-based tools are useful', body: 'For many everyday utilities, local browser processing is faster and simpler than uploading data to a full web app. It also keeps the workflow focused.' },
      { heading: 'Use the full toolbox as a starting point', body: 'The tools hub groups Bizzon utilities by text, publishing, security, decisions, conversions, dates, percentages, filenames, tips, tax, and QR codes.' },
      { heading: 'Be careful with sensitive information', body: 'Even with local tools, avoid pasting secrets where they do not belong. For passwords, use the Password Generator and save results in a trusted password manager.' },
      { heading: 'Use QR and random tools for simple sharing and decisions', body: 'QR Code Generator helps turn a link or short text into a downloadable QR image. Random Picker helps choose from a list without spreadsheet setup.' },
    ],
    relatedTools: [
      { label: 'All Bizzon tools', href: '/tools', reason: 'browse the full toolbox' },
      { label: 'Password Generator', href: '/password-generator', reason: 'create random passwords locally' },
      { label: 'QR Code Generator', href: '/qr-code-generator', reason: 'generate downloadable QR codes' },
      { label: 'Random Picker', href: '/random-picker', reason: 'pick from a list locally' },
    ],
  },
];

export const supportPageLinks = supportPages.map((page) => ({
  title: page.title,
  href: `/${page.slug}`,
  description: page.description,
}));

export function getSupportPage(slug: string) {
  return supportPages.find((page) => page.slug === slug);
}
