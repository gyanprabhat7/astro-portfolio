import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gyanprabhat7.github.io/astro-portfolio',
  base: 'astro-portfolio',
  integrations: [mdx(), sitemap(), tailwind()]
});