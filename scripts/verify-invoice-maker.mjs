import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'invoice-maker', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');
const sitemapPath = join(root, 'dist', 'sitemap-0.xml');

for (const [name, path] of Object.entries({ invoiceMaker: routePath, home: homePath, tools: toolsPath, sitemap: sitemapPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} file to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');
const sitemap = readFileSync(sitemapPath, 'utf8');

const required = [
  'Invoice Maker',
  'Create and download invoices as PDF',
  'Browser-only pro utility',
  'id="invoiceNumber"',
  'id="invoiceDate"',
  'id="invoiceDueDate"',
  'id="sellerName"',
  'id="sellerDetails"',
  'id="clientName"',
  'id="clientDetails"',
  'id="invoiceCurrency"',
  'id="invoiceTaxRate"',
  'id="invoiceDiscountType"',
  'id="invoiceDiscountValue"',
  'id="paymentTerms"',
  'id="invoiceLanguage"',
  'id="taxMode"',
  'id="signatureName"',
  'id="recurringPreset"',
  'id="emailInvoiceDraft"',
  'id="invoiceStyle"',
  'id="invoiceLogo"',
  'id="logoPreview"',
  'id="saveInvoiceTemplate"',
  'id="loadInvoiceTemplate"',
  'id="invoiceItems"',
  'id="addInvoiceItem"',
  'id="downloadInvoicePdf"',
  'id="invoicePreview"',
  'jsPDF',
  'Download PDF',
  'Save template',
  'Load template',
  'Logo upload',
  'PDF style',
  'Payment terms',
  'Language',
  'English',
  'Deutsch',
  'Bosanski',
  'VAT / tax mode',
  'Reverse charge',
  'Tax exempt',
  'Signature',
  'Recurring invoice',
  'Email draft',
  'Discount',
  'localStorage',
  'Subtotal',
  'Tax',
  'Total',
  'FAQPage',
  '/vat-sales-tax-calculator',
  '/percentage-calculator',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected Invoice Maker page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('16 live')) throw new Error(`Expected ${name} page to show 16 live tools`);
  if (!page.includes('/invoice-maker')) throw new Error(`Expected ${name} page to link to /invoice-maker`);
  if (!page.includes('Invoice Maker')) throw new Error(`Expected ${name} page to include Invoice Maker`);
}

if (!sitemap.includes('https://bizzon.app/invoice-maker')) {
  throw new Error('Expected sitemap to include https://bizzon.app/invoice-maker');
}

console.log('Invoice Maker static page verification passed.');
