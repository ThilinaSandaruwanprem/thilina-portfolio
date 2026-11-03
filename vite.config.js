import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from the domain root (Netlify). The GitHub Pages workflow sets
// BASE_PATH=/thilina-portfolio/ because Pages serves the site from that sub-folder.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
