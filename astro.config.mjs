import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Rimba-maker.github.io',
  base: '/loaf-and-co',
  vite: {
    plugins: [tailwindcss()],
  },
});
