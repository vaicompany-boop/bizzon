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
  {
    slug: 'how-to-clean-pasted-text',
    title: 'How to Clean Pasted Text',
    description: 'A practical guide to cleaning copied text from PDFs, websites, emails, AI drafts, and documents before publishing or editing.',
    eyebrow: 'Text cleanup guide',
    intro: 'Copied text often brings hidden clutter: doubled spaces, empty lines, tabs, smart quotes, strange dashes, and inconsistent casing. This guide shows a simple cleanup workflow using Bizzon text tools.',
    steps: ['Paste the messy copy into Text Cleaner and remove common clutter.', 'Check the cleaned text with Word Counter or Character Counter if length matters.', 'Use Case Converter when headings, labels, or lists need consistent capitalization.'],
    sections: [
      { heading: 'Start with the source of the mess', body: 'Text from PDFs, emails, chat apps, web pages, and generated drafts can carry line breaks, spacing problems, and punctuation that makes editing harder. Cleaning first saves time later.' },
      { heading: 'Use Text Cleaner for the first pass', body: 'Text Cleaner handles common copy-paste issues such as extra spaces, empty lines, tabs, smart quotes, and punctuation spacing without needing a full document editor.' },
      { heading: 'Measure the cleaned result', body: 'After cleanup, Word Counter and Character Counter help you check whether the text fits a post, form field, article target, or publishing requirement.' },
      { heading: 'Normalize capitalization last', body: 'When the words are clean, Case Converter can turn headings, labels, and lists into title case, sentence case, uppercase, lowercase, or code-friendly formats.' },
    ],
    relatedTools: [
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'remove messy copy-paste formatting' },
      { label: 'Word Counter', href: '/word-counter', reason: 'measure cleaned draft length' },
      { label: 'Character Counter', href: '/character-counter', reason: 'check strict limits after cleanup' },
      { label: 'Case Converter', href: '/case-converter', reason: 'normalize capitalization' },
    ],
  },
  {
    slug: 'word-count-vs-character-count',
    title: 'Word Count vs Character Count',
    description: 'A simple explanation of when to use word count, character count, character limits, and SEO snippet length checks.',
    eyebrow: 'Writing measurement guide',
    intro: 'Word count and character count answer different questions. Word count helps with reading length and draft size; character count helps when a field, platform, or snippet has a strict limit.',
    steps: ['Use Word Counter when you care about draft size, paragraphs, sentences, or reading time.', 'Use Character Counter when a platform or field has a strict limit.', 'Use the Meta Title & Description Checker for SEO title and description previews.'],
    sections: [
      { heading: 'Word count is best for writing scope', body: 'Word count helps estimate whether a draft is short, medium, or long. It is useful for articles, emails, assignments, newsletters, scripts, and documentation.' },
      { heading: 'Character count is best for hard limits', body: 'Character count is more important for social profiles, ads, form fields, SMS-style messages, SEO titles, and places where every letter and space counts.' },
      { heading: 'Characters with spaces and without spaces both matter', body: 'Some limits count spaces and punctuation. Others focus on visible characters. A good character counter shows both so you can edit with confidence.' },
      { heading: 'SEO snippets need a special check', body: 'Meta titles and descriptions are not only about length. The Meta Title & Description Checker helps you measure and preview snippet-style copy in context.' },
    ],
    relatedTools: [
      { label: 'Word Counter', href: '/word-counter', reason: 'count words, paragraphs, sentences, and reading time' },
      { label: 'Character Counter', href: '/character-counter', reason: 'measure characters and limits' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'preview SEO snippet copy' },
    ],
  },
  {
    slug: 'how-to-make-a-url-slug',
    title: 'How to Make a URL Slug',
    description: 'A guide to creating readable URL slugs from titles, filenames, product names, and publishing ideas.',
    eyebrow: 'URL slug guide',
    intro: 'A good URL slug is short, readable, and close to the page topic. This guide explains how to turn a messy title or filename into a clean slug with Bizzon tools.',
    steps: ['Start with a clear title or phrase that describes the page.', 'Use Slug Generator to remove clutter and choose a separator.', 'Check related filename, casing, and SEO snippet details before publishing.'],
    sections: [
      { heading: 'Keep the slug readable', body: 'A slug should be easy to scan. Prefer plain words, lowercase text, and consistent separators such as hyphens for page URLs.' },
      { heading: 'Remove clutter before publishing', body: 'Slug Generator can remove punctuation, normalize accents, replace spaces, and turn long titles into cleaner URL-friendly text.' },
      { heading: 'Use casing tools for structured names', body: 'If the same phrase is also used in code, labels, or filenames, Case Converter can help create camelCase, snake_case, title case, or sentence case versions.' },
      { heading: 'Connect the slug to the SEO snippet', body: 'A slug, page title, and meta description should all point to the same topic. The Meta Title & Description Checker helps review that snippet before launch.' },
    ],
    relatedTools: [
      { label: 'Slug Generator', href: '/slug-generator', reason: 'create readable URL slugs' },
      { label: 'Case Converter', href: '/case-converter', reason: 'format related labels and names' },
      { label: 'Filename Cleaner', href: '/filename-cleaner', reason: 'clean file names in bulk' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'check the matching SEO snippet' },
    ],
  },
  {
    slug: 'vat-vs-sales-tax-calculator-guide',
    title: 'VAT vs Sales Tax Calculator Guide',
    description: 'A simple guide to adding or removing VAT and sales tax, plus related percentage and bill calculations.',
    eyebrow: 'Tax calculator guide',
    intro: 'VAT and sales tax calculations often look similar, but the practical question is usually simple: add tax to a net price or remove included tax from a gross price.',
    steps: ['Choose add-tax mode when you know the net price before tax.', 'Choose remove-tax mode when the final price already includes tax.', 'Use percentage and bill calculators for related pricing checks.'],
    sections: [
      { heading: 'Adding tax starts from a net price', body: 'If you know the price before VAT or sales tax, add-tax mode estimates the tax amount and final gross price.' },
      { heading: 'Removing tax starts from a gross price', body: 'If the final price already includes tax, remove-tax mode estimates the original net price and included tax amount.' },
      { heading: 'Percentage math supports quick pricing checks', body: 'Percentage Calculator helps with related questions such as discounts, markups, increases, decreases, and percentage change.' },
      { heading: 'Important numbers still need official checks', body: 'Bizzon calculators are useful for quick estimates. For legal, accounting, or tax filing decisions, verify rates and rules with official sources or a qualified professional.' },
    ],
    relatedTools: [
      { label: 'VAT / Sales Tax Calculator', href: '/vat-sales-tax-calculator', reason: 'add or remove tax from prices' },
      { label: 'Percentage Calculator', href: '/percentage-calculator', reason: 'handle related percentage math' },
      { label: 'Tip Calculator', href: '/tip-calculator', reason: 'split bills and totals' },
    ],
  },
  {
    slug: 'how-to-create-qr-codes',
    title: 'How to Create QR Codes',
    description: 'A practical guide to creating QR codes for links, short text, contact details, flyers, menus, and small sharing tasks.',
    eyebrow: 'QR sharing guide',
    intro: 'QR codes are useful when people need to open a link or short piece of information from a phone. This guide shows a simple browser-based workflow for creating downloadable QR codes.',
    steps: ['Prepare the link or short text you want people to scan.', 'Generate and preview the QR code in Bizzon.', 'Download the PNG and test it before printing or sharing.'],
    sections: [
      { heading: 'Start with clean short content', body: 'QR codes work best with short links or concise text. Long content creates denser codes that can be harder to scan in real life.' },
      { heading: 'Use QR Code Generator for the image', body: 'Bizzon QR Code Generator creates a preview and downloadable PNG in the browser, with practical size and correction options.' },
      { heading: 'Clean the link and page details first', body: 'If the QR points to a page, use Slug Generator for clean URLs and the Meta Title & Description Checker for clearer page snippets.' },
      { heading: 'Always test before publishing', body: 'Scan the QR code with a phone before printing it on a flyer, menu, card, sign, or document. Make sure the destination opens correctly.' },
    ],
    relatedTools: [
      { label: 'QR Code Generator', href: '/qr-code-generator', reason: 'create downloadable QR codes' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'clean the page URL first' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'prepare the destination page snippet' },
      { label: 'All Bizzon tools', href: '/tools', reason: 'browse related utilities' },
    ],
  },
  {
    slug: 'free-word-counter',
    title: 'Free Word Counter',
    description: 'Use a free word counter to measure words, characters, paragraphs, sentences, and reading time for drafts, essays, emails, posts, and SEO copy.',
    eyebrow: 'Writing length guide',
    intro: 'A free word counter is useful whenever text needs a target length before it is published, submitted, or pasted into another tool. This guide explains a practical browser-based workflow for checking writing length quickly.',
    steps: ['Paste the draft into Word Counter and review the main word, character, sentence, paragraph, and reading-time stats.', 'Compare the result with the target for the assignment, post, email, product copy, or SEO snippet.', 'Clean or shorten the text with related Bizzon tools before publishing.'],
    sections: [
      { heading: 'Use word count to manage draft scope', body: 'Word count helps you see whether a draft is too thin, too long, or close to the target. It is useful for essays, blog posts, newsletters, landing-page copy, scripts, and documentation.' },
      { heading: 'Check characters when a field has limits', body: 'Some tasks care more about characters than words. Social bios, product titles, ads, form fields, meta titles, and descriptions often need a character count with spaces included.' },
      { heading: 'Estimate reading time before publishing', body: 'Reading time gives a quick sense of how demanding a draft feels. It helps when choosing between a short update, a medium article, or a longer guide.' },
      { heading: 'Clean messy text before the final count', body: 'Copied text from PDFs, documents, emails, or AI drafts can include extra spaces and line breaks. Clean the copy first so the final count reflects what readers will actually see.' },
    ],
    relatedTools: [
      { label: 'Word Counter', href: '/word-counter', reason: 'count words, characters, paragraphs, sentences, and reading time' },
      { label: 'Character Counter', href: '/character-counter', reason: 'check strict character limits' },
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'remove copied formatting before counting' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'measure SEO snippets separately' },
    ],
  },
  {
    slug: 'character-limit-guide',
    title: 'Character Limit Guide',
    description: 'A practical guide to checking character limits for social bios, ads, product titles, forms, SEO snippets, messages, and short publishing fields.',
    eyebrow: 'Character limit guide',
    intro: 'Character limits are strict because every letter, number, space, and punctuation mark can count. This guide shows how to measure short text before it is rejected, truncated, or hard to read.',
    steps: ['Paste the exact text into Character Counter and check characters with spaces.', 'Trim repeated words, filler, and punctuation until the message fits the target field.', 'Use Word Counter or the SEO snippet checker when the task needs broader writing context.'],
    sections: [
      { heading: 'Characters with spaces usually matter', body: 'Many platforms count spaces and punctuation as characters. Checking the complete pasted text helps avoid surprises when a bio, title, ad, or form field has a hard maximum.' },
      { heading: 'Short fields need clear prioritization', body: 'When a limit is tight, lead with the important words. Remove filler, repeated adjectives, long separators, and phrases that do not change the meaning.' },
      { heading: 'SEO snippets need preview context', body: 'Meta descriptions and titles are not just raw numbers. Use the Meta Title & Description Checker when you need to see how a snippet reads as a search result.' },
      { heading: 'Clean copied text before measuring', body: 'Hidden tabs, doubled spaces, and line breaks can push a field over its limit. Text Cleaner is useful before a final character count check.' },
    ],
    relatedTools: [
      { label: 'Character Counter', href: '/character-counter', reason: 'measure characters with and without spaces' },
      { label: 'Word Counter', href: '/word-counter', reason: 'check broader draft length and reading time' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'preview SEO titles and descriptions' },
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'remove spacing problems before measuring' },
    ],
  },
  {
    slug: 'meta-description-length-guide',
    title: 'Meta Description Length Guide',
    description: 'A simple guide to writing and checking meta description length for clear search snippets, landing pages, product pages, articles, and tool pages.',
    eyebrow: 'SEO snippet guide',
    intro: 'Meta descriptions should quickly explain what a page helps with and why a searcher should open it. Length matters, but clarity, relevance, and matching the page content matter more.',
    steps: ['Write one plain-language sentence that names the page benefit.', 'Preview it in the Meta Title & Description Checker and review the length.', 'Tighten the wording with Character Counter and connect the slug or page title to the same topic.'],
    sections: [
      { heading: 'A useful meta description starts with intent', body: 'Describe the specific task the page supports. For a tool page, name the tool and the result. For a guide, name the problem and the practical outcome.' },
      { heading: 'Length is a guardrail, not the whole job', body: 'Search engines may rewrite snippets, and display length can vary. A concise description with the important words near the beginning is usually safer than stuffing extra phrases.' },
      { heading: 'Preview title and description together', body: 'A meta title and description should not repeat the same sentence. Use the snippet checker to see whether the title introduces the topic and the description adds a reason to click.' },
      { heading: 'Match the URL slug to the page topic', body: 'A readable slug reinforces the same topic as the title and description. Slug Generator helps turn a working headline into a cleaner URL path.' },
    ],
    relatedTools: [
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'preview and measure search snippets' },
      { label: 'Character Counter', href: '/character-counter', reason: 'tighten descriptions to a target length' },
      { label: 'Word Counter', href: '/word-counter', reason: 'check supporting page copy length' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'create a matching readable URL slug' },
    ],
  },
  {
    slug: 'free-qr-code-generator',
    title: 'Free QR Code Generator',
    description: 'Create a free QR code for links, short text, menus, flyers, signs, cards, and quick sharing tasks with a browser-based workflow.',
    eyebrow: 'QR code guide',
    intro: 'A free QR code generator is helpful when people need to open a link from a phone without typing it. This guide explains how to prepare the destination, generate the code, and test it before sharing.',
    steps: ['Prepare a short link or concise text value for the QR code.', 'Open QR Code Generator, create the preview, and download the PNG.', 'Scan the final code on a phone before adding it to a flyer, menu, sign, or card.'],
    sections: [
      { heading: 'Short destinations scan more reliably', body: 'A QR code becomes denser when the link or text is long. A short final URL is easier to scan from printed material, small screens, and low-light situations.' },
      { heading: 'Use QR codes for practical handoffs', body: 'Common uses include event pages, booking links, menu pages, product instructions, Wi‑Fi notes, contact forms, support pages, and quick downloads.' },
      { heading: 'Prepare the destination page first', body: 'If the QR code points to a web page, check the slug, title, and meta description before printing. The landing page should clearly match what the QR label promises.' },
      { heading: 'Test the downloaded image at real size', body: 'Do not only test the large preview. Print or display the QR code near its final size, scan it with more than one phone if possible, and make sure the link opens correctly.' },
    ],
    relatedTools: [
      { label: 'QR Code Generator', href: '/qr-code-generator', reason: 'generate and download the QR image' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'prepare a clean destination URL' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'review the destination page snippet' },
      { label: 'All Bizzon tools', href: '/tools', reason: 'find related publishing utilities' },
    ],
  },
  {
    slug: 'how-to-make-a-qr-code-for-a-link',
    title: 'How to Make a QR Code for a Link',
    description: 'Step-by-step guidance for turning a website link into a QR code, downloading it, testing it, and using it safely on print or digital material.',
    eyebrow: 'Link to QR guide',
    intro: 'Turning a link into a QR code is simple, but the link still needs to be clear, stable, and tested. This guide covers the practical steps before you put a QR code on a flyer, menu, card, sign, or document.',
    steps: ['Copy the final destination link and remove tracking or draft URLs that should not be shared.', 'Generate the QR code with Bizzon and download the image.', 'Scan the code from the final printed or displayed size to confirm it opens the right page.'],
    sections: [
      { heading: 'Use the final public link', body: 'Avoid draft URLs, private preview links, expired campaign links, or pages that still need approval. The QR code should point to a stable page that can stay live after printing.' },
      { heading: 'Keep the visible label honest', body: 'The words near the QR code should tell people what they will open, such as a menu, booking form, product page, support page, or download. This builds trust before scanning.' },
      { heading: 'Check page details before sharing', body: 'If you control the destination page, check the slug and search snippet first. A clean URL and accurate meta description make the page easier to recognize after scanning.' },
      { heading: 'Test in realistic conditions', body: 'Scan from the distance and size people will actually use. Test on a phone, check that the page loads quickly, and make sure the contrast around the QR code is strong enough.' },
    ],
    relatedTools: [
      { label: 'QR Code Generator', href: '/qr-code-generator', reason: 'turn the link into a downloadable QR code' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'clean the destination URL before sharing' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'review the landing page title and description' },
      { label: 'All Bizzon tools', href: '/tools', reason: 'browse related utilities' },
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
