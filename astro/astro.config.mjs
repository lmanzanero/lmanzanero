import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import AstroPWA from '@vite-pwa/astro'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://luismanzanero.dev',
	integrations: [mdx(), sitemap(), AstroPWA()], 
});
