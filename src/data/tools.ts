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
    title: 'Character Counter',
    href: '#',
    description: 'Quickly check total characters and character limits for everyday writing.',
    status: 'planned',
  },
  {
    title: 'Case Converter',
    href: '#',
    description: 'Convert text to uppercase, lowercase, sentence case, and title case.',
    status: 'planned',
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
