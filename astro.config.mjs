import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://app.lightningpiggy.com',
  integrations: [sitemap(), tailwind()],
});
