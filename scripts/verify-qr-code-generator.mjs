import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const routePath = join(root, 'dist', 'qr-code-generator', 'index.html');
const homePath = join(root, 'dist', 'index.html');
const toolsPath = join(root, 'dist', 'tools', 'index.html');

for (const [name, path] of Object.entries({ qrCodeGenerator: routePath, home: homePath, tools: toolsPath })) {
  if (!existsSync(path)) throw new Error(`Expected ${name} page to exist at ${path}`);
}

const html = readFileSync(routePath, 'utf8');
const home = readFileSync(homePath, 'utf8');
const tools = readFileSync(toolsPath, 'utf8');

const required = [
  'QR Code Generator',
  'Generate a QR code',
  'id="qrContent"',
  'id="qrSize"',
  'id="qrErrorLevel"',
  'id="qrForeground"',
  'id="qrBackground"',
  'id="qrCanvas"',
  'id="downloadQr"',
  'id="copyQrText"',
  'id="sampleQr"',
  'id="clearQr"',
  'Download PNG',
  'Your QR content stays in your browser',
  '/slug-generator',
  '/meta-title-description-checker',
  '/vat-sales-tax-calculator',
];

for (const needle of required) {
  if (!html.includes(needle)) throw new Error(`Expected QR Code Generator page HTML to include: ${needle}`);
}

for (const [name, page] of Object.entries({ home, tools })) {
  if (!page.includes('16 live')) throw new Error(`Expected ${name} page to show 16 live tools`);
  if (!page.includes('/qr-code-generator')) throw new Error(`Expected ${name} page to link to /qr-code-generator`);
  if (!page.includes('QR Code Generator')) throw new Error(`Expected ${name} page to include QR Code Generator`);
}

for (const planned of ['Invoice Helper']) {
  if (!tools.includes(planned)) throw new Error(`Expected tools page roadmap to include ${planned}`);
}

console.log('QR Code Generator static page verification passed.');
