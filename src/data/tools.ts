export type Tool = {
  title: string;
  href: string;
  description: string;
  status: 'live' | 'planned';
};

export const tools: Tool[] = [
  {
    title: 'Word Counter',
    href: '/word-counter',
    description: 'Count words, characters, paragraphs, sentences, and reading time in your browser.',
    status: 'live',
  },
  {
    title: 'Case Converter',
    href: '/case-converter',
    description: 'Convert text to uppercase, lowercase, title case, sentence case, camelCase, kebab-case, and snake_case.',
    status: 'live',
  },
  {
    title: 'Character Counter',
    href: '/character-counter',
    description: 'Count characters, words, lines, paragraphs, and optional character limits in your browser.',
    status: 'live',
  },
  {
    title: 'Text Cleaner',
    href: '/text-cleaner',
    description: 'Remove extra spaces, empty lines, smart quotes, tabs, and copy-paste clutter in your browser.',
    status: 'live',
  },
  {
    title: 'Slug Generator',
    href: '/slug-generator',
    description: 'Turn titles, headlines, filenames, and phrases into clean URL slugs in your browser.',
    status: 'live',
  },
  {
    title: 'Meta Title & Description Checker',
    href: '/meta-title-description-checker',
    description: 'Preview and measure basic SEO title and meta description lengths in your browser.',
    status: 'live',
  },
  {
    title: 'Password Generator',
    href: '/password-generator',
    description: 'Generate strong random passwords locally in your browser, with simple length and character options.',
    status: 'live',
  },
  {
    title: 'Random Picker',
    href: '/random-picker',
    description: 'Paste a list and pick a random item, winner, name, or option in your browser.',
    status: 'live',
  },
  {
    title: 'Unit Converter Mini',
    href: '/unit-converter',
    description: 'Convert common length, weight, and temperature units quickly in your browser.',
    status: 'live',
  },
  {
    title: 'Date Calculator',
    href: '/date-calculator',
    description: 'Add or subtract days from a date, or count days between two dates in your browser.',
    status: 'live',
  },
  {
    title: 'Percentage Calculator',
    href: '/percentage-calculator',
    description: 'Calculate percentages, increases, decreases, discounts, and percentage change quickly.',
    status: 'live',
  },
  {
    title: 'Filename Cleaner',
    href: '/filename-cleaner',
    description: 'Turn messy filenames into clean, readable, web-friendly names before uploading or sharing.',
    status: 'live',
  },
  {
    title: 'Tip Calculator',
    href: '/tip-calculator',
    description: 'Calculate tips, split bills, and per-person totals quickly without an account.',
    status: 'planned',
  },
  {
    title: 'VAT / Sales Tax Calculator',
    href: '/vat-sales-tax-calculator',
    description: 'Add or remove VAT and sales tax percentages for quick price estimates.',
    status: 'planned',
  },
  {
    title: 'QR Code Generator',
    href: '/qr-code-generator',
    description: 'Create QR codes for links, text, contact details, and simple sharing tasks.',
    status: 'planned',
  },
  {
    title: 'Invoice Helper',
    href: '/invoice-helper',
    description: 'Draft simple invoice line totals, tax amounts, and copyable invoice notes without an account.',
    status: 'planned',
  },
];
