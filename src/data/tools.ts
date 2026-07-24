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
    status: 'live',
  },
  {
    title: 'VAT / Sales Tax Calculator',
    href: '/vat-sales-tax-calculator',
    description: 'Add or remove VAT and sales tax percentages for quick price estimates.',
    status: 'live',
  },
  {
    title: 'QR Code Generator',
    href: '/qr-code-generator',
    description: 'Create QR codes for links, text, contact details, and simple sharing tasks.',
    status: 'live',
  },
  {
    title: 'Invoice Maker',
    href: '/invoice-maker',
    description: 'Create invoices with business details, client details, line items, tax, totals, notes, and a downloadable PDF.',
    status: 'live',
  },
  {
    title: 'Canonical URL Checker',
    href: '/canonical-url-checker',
    description: 'Validate and clean canonical URL candidates by checking protocol, fragments, tracking parameters, and path formatting.',
    status: 'live',
  },
  {
    title: 'CSV to JSON Converter',
    href: '/csv-to-json',
    description: 'Convert pasted CSV, TSV, semicolon, pipe-separated data, or a local file into downloadable JSON in your browser.',
    status: 'live',
  },
  {
    title: 'JSON to CSV Converter',
    href: '/json-to-csv',
    description: 'Convert JSON arrays or objects into CSV with header control, delimiters, copy, and download actions.',
    status: 'live',
  },
  {
    title: 'JSON Formatter & Validator',
    href: '/json-formatter',
    description: 'Format, minify, validate, copy, and download JSON locally in your browser with helpful syntax errors.',
    status: 'live',
  },
  {
    title: 'Base64 Encoder / Decoder',
    href: '/base64-encoder-decoder',
    description: 'Encode text to Base64 or decode Base64 back to UTF-8 text locally in your browser.',
    status: 'live',
  },
  {
    title: 'Markdown to HTML Converter',
    href: '/markdown-to-html',
    description: 'Convert Markdown into safe previewable HTML with copy-ready output in your browser.',
    status: 'live',
  },
  {
    title: 'HTML to Markdown Converter',
    href: '/html-to-markdown',
    description: 'Convert common article and document HTML into clean copy-ready Markdown locally in your browser.',
    status: 'live',
  },
  {
    title: 'Image to WebP Converter',
    href: '/image-to-webp',
    description: 'Convert PNG, JPG, GIF frame, WebP, BMP, or SVG images into downloadable WebP files locally in your browser.',
    status: 'live',
  },
  {
    title: 'PNG/JPG Converter',
    href: '/png-jpg-converter',
    description: 'Convert browser-readable images to PNG or JPG locally with preview, JPG quality, transparency background color, and download.',
    status: 'live',
  },
  {
    title: 'YAML to JSON Converter',
    href: '/yaml-to-json',
    description: 'Convert common YAML maps, lists, and config snippets into pretty JSON locally in your browser.',
    status: 'live',
  },
  {
    title: 'JSON to YAML Converter',
    href: '/json-to-yaml',
    description: 'Convert valid JSON objects, arrays, and config snippets into readable YAML locally in your browser.',
    status: 'live',
  },
  {
    title: 'YouTube Thumbnail Downloader',
    href: '/youtube-thumbnail-downloader',
    description: 'Extract public YouTube thumbnail image URLs from watch, youtu.be, Shorts, embed, live URLs, or a raw video ID.',
    status: 'live',
  },
  {
    title: 'YouTube URL Cleaner',
    href: '/youtube-url-cleaner',
    description: 'Remove YouTube tracking parameters while preserving useful video, playlist, Shorts, embed, live, and channel links.',
    status: 'live',
  },
  {
    title: 'X / Twitter Character Counter',
    href: '/x-character-counter',
    description: 'Count X/Twitter post length, remaining characters, links, words, and rough thread chunks locally in your browser.',
    status: 'live',
  },
  {
    title: 'Instagram Caption Formatter',
    href: '/instagram-caption-formatter',
    description: 'Clean Instagram caption spacing, dedupe hashtags, count length, and copy a ready-to-post caption locally in your browser.',
    status: 'live',
  },
  {
    title: 'TikTok Caption & Hashtag Cleaner',
    href: '/tiktok-caption-hashtag-cleaner',
    description: 'Clean TikTok caption spacing, dedupe hashtags, count length, and copy ready-to-post text locally in your browser.',
    status: 'live',
  },
  {
    title: 'YouTube Title & Description Checker',
    href: '/youtube-title-description-checker',
    description: 'Check YouTube title length, description length, hashtags, links, and preview text locally before publishing.',
    status: 'live',
  },
  {
    title: 'Social Bio Formatter',
    href: '/social-bio-formatter',
    description: 'Clean short social bios, dedupe hashtags, and check Instagram, TikTok, X, or LinkedIn character limits locally.',
    status: 'live',
  },
  {
    title: 'Hashtag Deduplicator',
    href: '/hashtag-deduplicator',
    description: 'Extract, normalize, dedupe, count, and copy clean hashtags from captions or tag blocks locally in your browser.',
    status: 'live',
  },
  {
    title: 'Social Link Cleaner',
    href: '/social-link-cleaner',
    description: 'Remove tracking clutter from public YouTube, X/Twitter, TikTok, Instagram, Facebook, and LinkedIn links locally.',
    status: 'live',
  },
  {
    title: 'Shorts/Reels/TikTok Size Guide',
    href: '/shorts-reels-size-guide',
    description: 'Check vertical video dimensions, 9:16 aspect ratio, safe-area reminders, and export checklist locally.',
    status: 'live',
  },
  {
    title: 'Loan Calculator',
    href: '/loan-calculator',
    description: 'Estimate monthly payments, total interest, and repayment totals for simple loan scenarios.',
    status: 'planned',
  },
  {
    title: 'Business Name Generator',
    href: '/business-name-generator',
    description: 'Brainstorm practical business, project, and domain-name ideas from a few keywords.',
    status: 'planned',
  },
];
