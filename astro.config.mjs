import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
});

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://creativetimofficial.github.io',
  base: '/astro-ecommerce'
});
