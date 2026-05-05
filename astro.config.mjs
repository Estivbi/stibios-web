// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.stibios.com', // ← obligatorio para que el sitemap sepa la URL base
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap(), // ← genera /sitemap-index.xml y /sitemap-0.xml automáticamente
  ]
});