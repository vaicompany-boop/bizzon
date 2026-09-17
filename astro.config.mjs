// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import { readFileSync } from 'node:fs';
const redirects = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8')).redirects;
const redirectedPaths = new Set(redirects.filter((rule) => !rule.source.includes(':')).map((rule) => rule.source));

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