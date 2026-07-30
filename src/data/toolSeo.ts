export type ToolSeoEntry = {
  slug: string;
  toolName: string;
  primaryKeyword: string;
  summary: string;
  steps: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string; reason: string }[];
  relatedGuides?: { label: string; href: string; reason: string }[];
};

export const toolSeoEntries: Record<string, ToolSeoEntry> = {
  'word-counter': {
    slug: 'word-counter',
    toolName: 'Word Counter',
    primaryKeyword: 'free online word counter',
    summary: 'Use this free online word counter when you need fast writing statistics before publishing, submitting, or sharing text. It counts words, characters, characters without spaces, sentences, paragraphs, and estimated reading time directly in your browser.',
    steps: ['Paste or type your essay, blog draft, email, landing-page copy, or social caption into the counter.', 'Review the word, character, sentence, paragraph, and reading-time stats.', 'Edit the text and watch the numbers update instantly before you submit or publish.'],
    useCases: ['Check blog posts, articles, school assignments, and essays before submission.', 'Measure social posts, product descriptions, email drafts, SEO snippets, and landing-page copy.', 'Estimate reading time for newsletters, scripts, tutorials, documentation, and training materials.', 'Compare word count vs character count when a platform has a hard text limit.'],
    faqs: [
      { question: 'Is the Bizzon Word Counter private?', answer: 'Yes. The text is counted in your browser, so it is not uploaded to Bizzon for processing.' },
      { question: 'Does it count characters without spaces?', answer: 'Yes. The tool shows total characters and characters without spaces, alongside words, sentences, paragraphs, and reading time.' },
      { question: 'Can I use it for SEO content?', answer: 'Yes. It is useful for checking draft length before publishing blog posts, meta copy, product text, and landing pages.' },
    ],
    related: [
      { label: 'Character Counter', href: '/character-counter', reason: 'for strict character limits' },
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'to clean pasted copy first' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'for SEO snippet checks' },
    ],
    relatedGuides: [
      { label: 'Best Free Text Tools', href: '/best-free-text-tools', reason: 'choose the right writing utility' },
      { label: 'Word Count vs Character Count', href: '/word-count-vs-character-count', reason: 'decide which metric matters' },
      { label: 'How to Clean Pasted Text', href: '/how-to-clean-pasted-text', reason: 'clean drafts before counting' },
      { label: 'How to Write Meta Descriptions', href: '/how-to-write-meta-descriptions', reason: 'measure SEO snippet drafts' },
    ],
  },
  'case-converter': {
    slug: 'case-converter',
    toolName: 'Case Converter',
    primaryKeyword: 'free online case converter',
    summary: 'Use this free online case converter to quickly switch text between uppercase, lowercase, title case, sentence case, camelCase, PascalCase, kebab-case, and snake_case.',
    steps: ['Paste the text you want to reformat.', 'Choose the case style you need.', 'Copy the converted result for writing, code, filenames, or publishing.'],
    useCases: ['Fix headlines, labels, and page titles before publishing.', 'Convert names into code-friendly formats such as camelCase, PascalCase, kebab-case, or snake_case.', 'Clean inconsistent capitalization in lists, notes, product names, and drafts.'],
    faqs: [
      { question: 'What case formats does it support?', answer: 'It supports uppercase, lowercase, title case, sentence case, camelCase, PascalCase, kebab-case, and snake_case.' },
      { question: 'Does the converter upload my text?', answer: 'No. Conversion happens locally in your browser.' },
      { question: 'Can I use it for URLs and code names?', answer: 'Yes. kebab-case is useful for slugs and URLs, while camelCase, PascalCase, and snake_case are useful for code and structured text.' },
    ],
    related: [
      { label: 'Slug Generator', href: '/slug-generator', reason: 'to create URL-friendly slugs' },
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'to remove formatting clutter' },
      { label: 'Character Counter', href: '/character-counter', reason: 'to check text length after conversion' },
    ],
    relatedGuides: [
      { label: 'Best Free Text Tools', href: '/best-free-text-tools', reason: 'use case conversion inside a broader writing workflow' },
      { label: 'How to Clean Pasted Text', href: '/how-to-clean-pasted-text', reason: 'clean messy copy before changing capitalization' },
    ],
  },
  'character-counter': {
    slug: 'character-counter',
    toolName: 'Character Counter',
    primaryKeyword: 'free online character counter',
    summary: 'Use this free online character counter for bios, posts, titles, descriptions, and form fields where every character matters.',
    steps: ['Paste your text into the counter.', 'Optional: set a character limit.', 'Use the remaining-character and text stats to edit confidently.'],
    useCases: ['Check social media bios, ad copy, page titles, and form fields.', 'Stay under character limits for SEO titles, descriptions, SMS, and profile text.', 'Count words, lines, paragraphs, and characters without opening a document editor.'],
    faqs: [
      { question: 'Can I set a custom character limit?', answer: 'Yes. You can use the optional limit field to see how many characters remain.' },
      { question: 'Does it count spaces?', answer: 'Yes. It shows total characters and characters without spaces.' },
      { question: 'Is it safe for private drafts?', answer: 'Yes. The text stays in your browser and is not uploaded for processing.' },
    ],
    related: [
      { label: 'Word Counter', href: '/word-counter', reason: 'for broader writing stats' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'for SEO snippet length' },
      { label: 'Case Converter', href: '/case-converter', reason: 'to reformat text quickly' },
    ],
    relatedGuides: [
      { label: 'Character Limit Guide', href: '/character-limit-guide', reason: 'decide how to edit text for strict limits' },
      { label: 'Word Count vs Character Count', href: '/word-count-vs-character-count', reason: 'understand which metric fits the task' },
      { label: 'Meta Description Length Guide', href: '/meta-description-length-guide', reason: 'apply character counts to SEO snippets' },
    ],
  },
  'text-cleaner': {
    slug: 'text-cleaner',
    toolName: 'Text Cleaner',
    primaryKeyword: 'free online text cleaner',
    summary: 'Use this free online text cleaner to remove copy-paste clutter such as extra spaces, empty lines, tabs, smart quotes, and messy formatting.',
    steps: ['Paste messy text from a document, website, PDF, email, or AI draft.', 'Choose the cleanup options you need.', 'Copy the cleaner version for publishing, editing, or sharing.'],
    useCases: ['Clean text copied from PDFs, emails, websites, documents, and chat tools.', 'Prepare drafts for blogs, forms, CMS fields, and social posts.', 'Normalize spacing and punctuation before using counters, slug tools, or SEO checks.'],
    faqs: [
      { question: 'What kind of text can it clean?', answer: 'It can clean extra spaces, tabs, empty lines, smart quotes, spacing issues, and common copy-paste clutter.' },
      { question: 'Is my text uploaded?', answer: 'No. The cleanup runs locally in your browser.' },
      { question: 'Can I use it before publishing?', answer: 'Yes. It is designed for cleaning drafts before pasting them into websites, emails, forms, and publishing tools.' },
    ],
    related: [
      { label: 'Word Counter', href: '/word-counter', reason: 'to measure cleaned text' },
      { label: 'Case Converter', href: '/case-converter', reason: 'to fix capitalization' },
      { label: 'Slug Generator', href: '/slug-generator', reason: 'to create clean URLs' },
    ],
    relatedGuides: [
      { label: 'How to Clean Pasted Text', href: '/how-to-clean-pasted-text', reason: 'follow a practical cleanup workflow' },
      { label: 'Best Free Text Tools', href: '/best-free-text-tools', reason: 'combine cleanup with counting and formatting tools' },
      { label: 'Free Word Counter', href: '/free-word-counter', reason: 'measure cleaned drafts after removing clutter' },
    ],
  },
  'slug-generator': {
    slug: 'slug-generator',
    toolName: 'Slug Generator',
    primaryKeyword: 'free online slug generator',
    summary: 'Use this free online slug generator to turn titles, headlines, filenames, and phrases into clean URL-friendly slugs.',
    steps: ['Paste a title, phrase, headline, or filename.', 'Choose separators and cleanup options.', 'Copy the clean slug for a URL, file, product, or page.'],
    useCases: ['Create blog post, product, documentation, and landing-page URLs.', 'Clean filenames and labels into readable hyphenated or underscored text.', 'Prepare consistent slugs for SEO, CMS entries, and static-site pages.'],
    faqs: [
      { question: 'What is a slug?', answer: 'A slug is the readable part of a URL, usually lowercase words separated by hyphens, such as free-online-tools.' },
      { question: 'Can it remove accents and punctuation?', answer: 'Yes. It normalizes common accents, removes punctuation, and converts spaces into your chosen separator.' },
      { question: 'Does it store my titles?', answer: 'No. Slug generation happens in your browser.' },
    ],
    related: [
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'for SEO snippets' },
      { label: 'Case Converter', href: '/case-converter', reason: 'for text formatting' },
      { label: 'Filename Cleaner', href: '/filename-cleaner', reason: 'for bulk filename cleanup' },
    ],
    relatedGuides: [
      { label: 'How to Make a URL Slug', href: '/how-to-make-a-url-slug', reason: 'learn what makes a readable slug' },
      { label: 'How to Create Clean Filenames', href: '/how-to-create-clean-filenames', reason: 'reuse slug-style cleanup for files' },
      { label: 'Meta Description Length Guide', href: '/meta-description-length-guide', reason: 'align slugs with page snippets' },
    ],
  },
  'meta-title-description-checker': {
    slug: 'meta-title-description-checker',
    toolName: 'Meta Title & Description Checker',
    primaryKeyword: 'free meta title and description checker',
    summary: 'Use this free meta title and description checker to measure SEO snippet length and preview basic search-result copy before publishing.',
    steps: ['Enter your page title and meta description.', 'Review character counts and snippet preview guidance.', 'Adjust the copy until it is clear, useful, and within practical length ranges.'],
    useCases: ['Draft SEO titles and descriptions for blog posts, tools, products, and landing pages.', 'Check whether a title or description is too short, too vague, or likely too long.', 'Improve page snippets before publishing or updating a website.'],
    faqs: [
      { question: 'Does this guarantee how Google will show my snippet?', answer: 'No. Search engines can rewrite snippets, but length checks and previews help you write clearer metadata.' },
      { question: 'Is the title and description uploaded?', answer: 'No. The checker runs locally in your browser.' },
      { question: 'What should a good meta description do?', answer: 'It should clearly explain the page, include the main topic naturally, and give the searcher a reason to click.' },
    ],
    related: [
      { label: 'Slug Generator', href: '/slug-generator', reason: 'to prepare the URL slug' },
      { label: 'Character Counter', href: '/character-counter', reason: 'for strict text limits' },
      { label: 'Word Counter', href: '/word-counter', reason: 'for draft length checks' },
    ],
    relatedGuides: [
      { label: 'Meta Description Length Guide', href: '/meta-description-length-guide', reason: 'write clearer search descriptions' },
      { label: 'How to Write Meta Descriptions', href: '/how-to-write-meta-descriptions', reason: 'draft titles and descriptions from intent' },
      { label: 'Character Limit Guide', href: '/character-limit-guide', reason: 'tighten snippets for practical limits' },
    ],
  },
  'password-generator': {
    slug: 'password-generator',
    toolName: 'Password Generator',
    primaryKeyword: 'free online password generator',
    summary: 'Use this free online password generator to create strong random passwords locally in your browser with length and character options.',
    steps: ['Choose the password length and character types.', 'Generate a random password locally.', 'Copy it into a password manager or secure account setup flow.'],
    useCases: ['Create unique passwords for new accounts, shops, admin panels, and test environments.', 'Generate temporary passwords that can be changed after first login.', 'Avoid reusing weak or predictable passwords across services.'],
    faqs: [
      { question: 'Are generated passwords sent to Bizzon?', answer: 'No. Password generation happens locally in your browser.' },
      { question: 'Should I save the password in my browser only?', answer: 'Use a trusted password manager when possible, especially for important accounts.' },
      { question: 'What makes a strong password?', answer: 'A strong password is long, random, unique, and not reused on other websites.' },
    ],
    related: [
      { label: 'Random Picker', href: '/random-picker', reason: 'for random choices and draws' },
      { label: 'Character Counter', href: '/character-counter', reason: 'to check length limits' },
      { label: 'QR Code Generator', href: '/qr-code-generator', reason: 'for simple sharing tasks' },
    ],
    relatedGuides: [
      { label: 'Private Browser Tools', href: '/private-browser-tools', reason: 'understand privacy-first browser utilities' },
      { label: 'Free QR Code Generator', href: '/free-qr-code-generator', reason: 'share short non-secret details with QR codes when appropriate' },
    ],
  },
  'random-picker': {
    slug: 'random-picker',
    toolName: 'Random Picker',
    primaryKeyword: 'free online random picker',
    summary: 'Use this free online random picker to choose names, giveaway winners, classroom turns, team tasks, raffle entries, lunch options, ideas, or any simple list item locally in your browser.',
    steps: ['Paste one item per line, such as names, entries, restaurants, chores, or ideas.', 'Choose whether to pick one, draw several, allow duplicates, or shuffle the full list.', 'Use the result for a decision, giveaway, classroom activity, team rotation, raffle, lunch choice, or random order.'],
    useCases: ['Pick giveaway winners from eligible entries after cleaning blank lines and duplicates.', 'Choose a classroom random name, presentation order, quiz team, or student job.', 'Assign a team decision, task rotation, standup order, reviewer, chore, or backlog item.', 'Pick a raffle ticket, lunch place, restaurant, movie, game, travel idea, or other group option.'],
    faqs: [
      { question: 'Can it pick more than one item?', answer: 'Yes. You can draw multiple items, optionally allow duplicates, or shuffle the entire list into a random order.' },
      { question: 'Is my list uploaded?', answer: 'No. The list stays in your browser, which makes it useful for private classroom, team, raffle, and everyday decision lists.' },
      { question: 'Can I use it for giveaways or raffles?', answer: 'It can help with simple random draws from a prepared list, but you should still follow the rules, eligibility requirements, and record-keeping needs for your promotion.' },
    ],
    related: [
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'to clean copied names and entries' },
      { label: 'Password Generator', href: '/password-generator', reason: 'for secure random passwords' },
      { label: 'Date Calculator', href: '/date-calculator', reason: 'for planning giveaway dates and deadlines' },
    ],
    relatedGuides: [
      { label: 'Private Browser Tools', href: '/private-browser-tools', reason: 'understand local browser utility workflows' },
      { label: 'Best Free Text Tools', href: '/best-free-text-tools', reason: 'clean and format list text before drawing' },
    ],
  },
  'unit-converter': {
    slug: 'unit-converter',
    toolName: 'Unit Converter Mini',
    primaryKeyword: 'free online unit converter',
    summary: 'Use this free online unit converter for quick length, weight, and temperature conversions without a heavy calculator app.',
    steps: ['Choose the conversion category.', 'Enter the value and select the source and target units.', 'Copy or read the converted result instantly.'],
    useCases: ['Convert metric and imperial measurements for travel, shopping, cooking, shipping, and notes.', 'Check Celsius, Fahrenheit, and Kelvin temperature values quickly.', 'Do simple everyday conversions without opening a spreadsheet.'],
    faqs: [
      { question: 'Which units are included?', answer: 'The mini converter covers common length, weight, and temperature units.' },
      { question: 'Does it work offline after loading?', answer: 'The calculations are browser-side, so the page can continue working while it remains loaded.' },
      { question: 'Are my values uploaded?', answer: 'No. Conversion happens locally in your browser.' },
    ],
    related: [
      { label: 'Percentage Calculator', href: '/percentage-calculator', reason: 'for quick math' },
      { label: 'Date Calculator', href: '/date-calculator', reason: 'for deadline math' },
      { label: 'VAT / Sales Tax Calculator', href: '/vat-sales-tax-calculator', reason: 'for price tax estimates' },
    ],
    relatedGuides: [
      { label: 'Quick Business Calculators', href: '/quick-business-calculators', reason: 'choose related calculators for planning tasks' },
      { label: 'VAT Calculator EU', href: '/vat-calculator-eu', reason: 'keep unit conversions separate from VAT estimates' },
    ],
  },
  'date-calculator': {
    slug: 'date-calculator',
    toolName: 'Date Calculator',
    primaryKeyword: 'free online date calculator',
    summary: 'Use this free online date calculator to add days, subtract days, or count days between two dates for planning and deadlines.',
    steps: ['Choose whether to count between dates or add/subtract days.', 'Enter the relevant date values.', 'Review the calculated date or number of days.'],
    useCases: ['Calculate deadlines, trip durations, project windows, schedules, and event countdowns.', 'Add a set number of days to a start date for planning.', 'Count the calendar days between two milestones.'],
    faqs: [
      { question: 'Can I add and subtract days?', answer: 'Yes. You can move forward or backward from a chosen date.' },
      { question: 'Can I count days between two dates?', answer: 'Yes. Enter the start and end dates to calculate the day difference.' },
      { question: 'Are my dates saved?', answer: 'No. Date calculations happen locally in the browser.' },
    ],
    related: [
      { label: 'Percentage Calculator', href: '/percentage-calculator', reason: 'for quick planning math' },
      { label: 'Random Picker', href: '/random-picker', reason: 'for choosing options' },
      { label: 'Unit Converter Mini', href: '/unit-converter', reason: 'for everyday conversions' },
    ],
    relatedGuides: [
      { label: 'Quick Business Calculators', href: '/quick-business-calculators', reason: 'combine dates with other small planning checks' },
      { label: 'Private Browser Tools', href: '/private-browser-tools', reason: 'use browser utilities without account setup' },
    ],
  },
  'percentage-calculator': {
    slug: 'percentage-calculator',
    toolName: 'Percentage Calculator',
    primaryKeyword: 'free online percentage calculator',
    summary: 'Use this free online percentage calculator for discounts, increases, decreases, percentage-of calculations, and percentage change.',
    steps: ['Choose the percentage calculation you need.', 'Enter the value and percentage numbers.', 'Use the result for pricing, planning, invoices, discounts, or comparisons.'],
    useCases: ['Calculate discounts, sale prices, markups, increases, decreases, and percentage change.', 'Work out percentages for invoices, grades, budgets, tax estimates, and planning notes.', 'Avoid spreadsheet setup for small everyday percentage questions.'],
    faqs: [
      { question: 'Can it calculate percentage change?', answer: 'Yes. It supports common percentage calculations including increase, decrease, and percentage change.' },
      { question: 'Can I use it for discounts?', answer: 'Yes. It is useful for sale prices, discount checks, and quick pricing estimates.' },
      { question: 'Are my numbers stored?', answer: 'No. Calculations happen locally in your browser.' },
    ],
    related: [
      { label: 'VAT / Sales Tax Calculator', href: '/vat-sales-tax-calculator', reason: 'for tax-specific calculations' },
      { label: 'Tip Calculator', href: '/tip-calculator', reason: 'for bill splitting' },
      { label: 'Unit Converter Mini', href: '/unit-converter', reason: 'for everyday conversions' },
    ],
    relatedGuides: [
      { label: 'Percentage Increase Calculator', href: '/percentage-increase-calculator', reason: 'measure growth from one value to another' },
      { label: 'Discount Calculator', href: '/discount-calculator', reason: 'turn percentage-off offers into final prices' },
      { label: 'Quick Business Calculators', href: '/quick-business-calculators', reason: 'pick the right calculator for pricing tasks' },
    ],
  },
  'filename-cleaner': {
    slug: 'filename-cleaner',
    toolName: 'Filename Cleaner',
    primaryKeyword: 'free online filename cleaner',
    summary: 'Use this free online filename cleaner to turn messy filenames into readable, consistent, web-friendly names in bulk.',
    steps: ['Paste one filename per line.', 'Choose cleanup and separator options.', 'Copy the cleaned filenames for upload, sharing, archiving, or publishing.'],
    useCases: ['Clean image, document, archive, and product filenames before uploading.', 'Normalize spaces, special characters, accents, casing, and duplicate-looking names.', 'Prepare readable filenames for websites, CMS media libraries, and shared folders.'],
    faqs: [
      { question: 'Can it clean multiple filenames at once?', answer: 'Yes. Paste one filename per line and clean the list in bulk.' },
      { question: 'Does it rename files on my computer?', answer: 'No. It generates cleaned names you can copy; it does not modify local files.' },
      { question: 'Are filenames uploaded?', answer: 'No. Cleanup happens in your browser.' },
    ],
    related: [
      { label: 'Slug Generator', href: '/slug-generator', reason: 'for single URL slugs' },
      { label: 'Text Cleaner', href: '/text-cleaner', reason: 'for pasted text cleanup' },
      { label: 'Case Converter', href: '/case-converter', reason: 'for consistent text casing' },
    ],
    relatedGuides: [
      { label: 'How to Create Clean Filenames', href: '/how-to-create-clean-filenames', reason: 'learn a repeatable naming workflow' },
      { label: 'How to Make a URL Slug', href: '/how-to-make-a-url-slug', reason: 'apply URL-style cleanup rules to names' },
    ],
  },
  'tip-calculator': {
    slug: 'tip-calculator',
    toolName: 'Tip Calculator',
    primaryKeyword: 'free online tip calculator',
    summary: 'Use this free online tip calculator to calculate tips, totals, and per-person bill splits quickly in your browser.',
    steps: ['Enter the bill amount.', 'Choose the tip percentage and number of people.', 'Review the tip, total, and per-person amount.'],
    useCases: ['Calculate restaurant tips and totals quickly.', 'Split bills between friends, family, or coworkers.', 'Round totals or per-person amounts for easier payment.'],
    faqs: [
      { question: 'Can it split a bill between people?', answer: 'Yes. Enter the number of people to calculate the per-person amount.' },
      { question: 'Can I choose different tip percentages?', answer: 'Yes. You can enter a custom percentage or use common quick options.' },
      { question: 'Are bill amounts uploaded?', answer: 'No. The calculation runs locally in your browser.' },
    ],
    related: [
      { label: 'Percentage Calculator', href: '/percentage-calculator', reason: 'for general percentage math' },
      { label: 'VAT / Sales Tax Calculator', href: '/vat-sales-tax-calculator', reason: 'for tax math' },
      { label: 'Unit Converter Mini', href: '/unit-converter', reason: 'for everyday conversions' },
    ],
    relatedGuides: [
      { label: 'Tip Calculator Guide', href: '/tip-calculator-guide', reason: 'handle tips, rounding, and per-person totals' },
      { label: 'Discount Calculator', href: '/discount-calculator', reason: 'check coupons before calculating a final split' },
    ],
  },
  'vat-sales-tax-calculator': {
    slug: 'vat-sales-tax-calculator',
    toolName: 'VAT / Sales Tax Calculator',
    primaryKeyword: 'free VAT and sales tax calculator',
    summary: 'Use this free VAT and sales tax calculator to add tax to a net price or remove included tax from a gross price.',
    steps: ['Choose add-tax or remove-tax mode.', 'Enter the price and tax rate.', 'Copy the net, tax, and gross price breakdown.'],
    useCases: ['Estimate VAT, sales tax, net prices, gross prices, and included tax amounts.', 'Check quick product, service, invoice, or shopping calculations.', 'Compare before-tax and after-tax totals without a spreadsheet.'],
    faqs: [
      { question: 'Can it remove included tax from a total?', answer: 'Yes. Use remove-tax mode when the final price already includes VAT or sales tax.' },
      { question: 'Can I enter any tax rate?', answer: 'Yes. Enter the percentage rate that applies to your estimate.' },
      { question: 'Is this tax advice?', answer: 'No. It is a quick calculator for estimates; always verify important tax numbers with official rules or a qualified professional.' },
    ],
    related: [
      { label: 'Percentage Calculator', href: '/percentage-calculator', reason: 'for general percentage math' },
      { label: 'Tip Calculator', href: '/tip-calculator', reason: 'for bill totals' },
      { label: 'Tools roadmap', href: '/tools', reason: 'to watch the planned invoice utility' },
    ],
    relatedGuides: [
      { label: 'VAT Calculator Germany', href: '/vat-calculator-germany', reason: 'review common German VAT estimate workflows' },
      { label: 'VAT Calculator EU', href: '/vat-calculator-eu', reason: 'handle country-specific VAT rate scenarios carefully' },
      { label: 'VAT vs Sales Tax Calculator Guide', href: '/vat-vs-sales-tax-calculator-guide', reason: 'understand add-tax and remove-tax modes' },
    ],
  },
  'qr-code-generator': {
    slug: 'qr-code-generator',
    toolName: 'QR Code Generator',
    primaryKeyword: 'free online QR code generator',
    summary: 'Use this free online QR code generator to create downloadable PNG QR codes for links, short text, contact details, and simple sharing tasks.',
    steps: ['Paste a link or short text.', 'Choose size and error-correction options.', 'Preview and download the PNG QR code.'],
    useCases: ['Create QR codes for flyers, menus, event links, contact details, product pages, and quick sharing.', 'Turn a URL or short message into a scannable code without opening a design app.', 'Download a PNG you can place into documents, images, or print layouts.'],
    faqs: [
      { question: 'Can I download the QR code?', answer: 'Yes. You can generate and download a PNG QR code.' },
      { question: 'Is my QR content uploaded?', answer: 'No. The QR code is generated in your browser.' },
      { question: 'What can I put in a QR code?', answer: 'Common choices include URLs, short text, email addresses, phone numbers, and simple sharing details.' },
    ],
    related: [
      { label: 'Slug Generator', href: '/slug-generator', reason: 'to clean links and slugs' },
      { label: 'Meta Title & Description Checker', href: '/meta-title-description-checker', reason: 'for page SEO copy' },
      { label: 'VAT / Sales Tax Calculator', href: '/vat-sales-tax-calculator', reason: 'for small business calculations' },
    ],
    relatedGuides: [
      { label: 'Free QR Code Generator', href: '/free-qr-code-generator', reason: 'prepare QR codes for flyers and menus' },
      { label: 'How to Make a QR Code for a Link', href: '/how-to-make-a-qr-code-for-a-link', reason: 'turn a final link into a scannable code' },
      { label: 'How to Create QR Codes', href: '/how-to-create-qr-codes', reason: 'test QR codes before publishing' },
    ],
  },
  'json-formatter': {
    slug: 'json-formatter',
    toolName: 'JSON Formatter & Validator',
    primaryKeyword: 'free online JSON formatter and validator',
    summary: 'Use this free online JSON formatter and validator to make pasted JSON readable, minify valid JSON, download clean output, and find syntax errors locally in your browser.',
    steps: ['Paste JSON or open a local .json or text file.', 'Choose Format for readable indentation or Minify for compact output.', 'Review validation errors, copy the clean JSON, or download a .json file.'],
    useCases: ['Format API responses, webhook payloads, config snippets, and test fixtures before reading or sharing them.', 'Minify valid JSON for compact examples, embeds, or configuration values.', 'Catch missing commas, quotes, brackets, and other syntax issues before pasting JSON into another tool.'],
    faqs: [
      { question: 'Does the JSON Formatter upload my JSON?', answer: 'No. Formatting, minifying, validation, copying, and file reading happen locally in your browser.' },
      { question: 'Can it show where JSON is invalid?', answer: 'Yes. When the browser parser reports a character position, Bizzon also shows an approximate line and column to help you find the issue faster.' },
      { question: 'Can I download the formatted JSON?', answer: 'Yes. After valid JSON is formatted or minified, you can download the output as a .json file.' },
    ],
    related: [
      { label: 'JSON to CSV Converter', href: '/json-to-csv', reason: 'to turn JSON data into spreadsheet-friendly CSV' },
      { label: 'CSV to JSON Converter', href: '/csv-to-json', reason: 'to convert table data into JSON' },
      { label: 'JSON to YAML Converter', href: '/json-to-yaml', reason: 'to convert valid JSON into readable YAML' },
    ],
  },
  'invoice-maker': {
    slug: 'invoice-maker',
    toolName: 'Invoice Maker',
    primaryKeyword: 'free online invoice maker',
    summary: 'Use this free online invoice maker to create a polished invoice with business details, client details, logo, line items, discounts, tax modes, payment terms, language options, signature, recurring invoice notes, reusable templates, and a downloadable PDF.',
    steps: ['Enter the invoice number, date, due date, payment terms, language, tax mode, your business details, and client details.', 'Add invoice line items with quantity, unit price, currency, discount, signature, and tax settings.', 'Choose a PDF style, optionally upload a logo, save a browser-only template, preview the invoice, open an email draft, and download a PDF for sending to your client.'],
    useCases: ['Create simple invoices for freelance work, small services, consulting, design, repairs, and local business tasks.', 'Calculate line totals, subtotal, tax, and final amount without opening a spreadsheet.', 'Download a clean PDF invoice that can be emailed or archived after review.'],
    faqs: [
      { question: 'Does the Invoice Maker upload my invoice details?', answer: 'No. Invoice editing and PDF creation happen in your browser. Bizzon does not upload or store your invoice data.' },
      { question: 'Can I add tax to the invoice?', answer: 'Yes. Enter a tax rate and the tool calculates subtotal, tax, and total. For official tax requirements, verify local rules before sending.' },
      { question: 'Can I download the invoice as a PDF?', answer: 'Yes. Use the Download PDF button to generate a PDF file from the invoice details in your browser.' },
    ],
    related: [
      { label: 'VAT / Sales Tax Calculator', href: '/vat-sales-tax-calculator', reason: 'to check tax amounts' },
      { label: 'Percentage Calculator', href: '/percentage-calculator', reason: 'for discounts and markups' },
      { label: 'Date Calculator', href: '/date-calculator', reason: 'for due date planning' },
    ],
    relatedGuides: [
      { label: 'Quick Business Calculators', href: '/quick-business-calculators', reason: 'choose calculators for invoice-adjacent checks' },
      { label: 'VAT Calculator Germany', href: '/vat-calculator-germany', reason: 'estimate German VAT before drafting totals' },
      { label: 'Discount Calculator', href: '/discount-calculator', reason: 'calculate discounts before adding line items' },
    ],
  },
};
