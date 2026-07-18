import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.propsrealty.ca',
  base: '/',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
