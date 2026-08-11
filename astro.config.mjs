// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const redirectedPaths = new Set([
  '/best-free-text-tools',
  '/character-limit-guide',
  '/discount-calculator',
  '/free-qr-code-generator',
  '/free-word-counter',
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://bizzon.app',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !redirectedPaths.has(new URL(page).pathname),
    }),
  ],
});