import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  export default defineConfig({
  output: 'server',
  adapter: netlify(),
});
