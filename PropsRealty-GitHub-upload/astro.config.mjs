import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://web4propsrealty.github.io',
  base: '/PropsRealty',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
