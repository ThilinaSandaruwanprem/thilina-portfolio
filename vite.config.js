import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /thilina-portfolio/, so production builds use that base path.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/thilina-portfolio/' : '/',
  plugins: [react()],
}));
