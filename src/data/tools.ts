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
    href: '#',
    description: 'Remove extra spaces, empty lines, weird formatting, and copy-paste clutter.',
    status: 'planned',
  },
  {
    title: 'Slug Generator',
    href: '#',
    description: 'Turn titles into clean URL slugs for blogs, pages, and projects.',
    status: 'planned',
  },
  {
    title: 'Meta Title & Description Checker',
    href: '#',
    description: 'Preview and measure basic SEO title and meta description lengths.',
    status: 'planned',
  },
];
