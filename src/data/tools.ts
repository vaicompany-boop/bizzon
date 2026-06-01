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
    status: 'planned',
  },
  {
    title: 'Random Picker',
    href: '/random-picker',
    description: 'Paste a list and pick a random item, winner, name, or option in your browser.',
    status: 'planned',
  },
  {
    title: 'Unit Converter Mini',
    href: '/unit-converter',
    description: 'Convert common everyday units quickly without an account or upload.',
    status: 'planned',
  },
];
