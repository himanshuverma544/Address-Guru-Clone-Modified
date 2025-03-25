import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';


export default defineConfig({

  base: "/Address-Guru-Clone-Modified/",

  plugins: [
    react(),
    svgr(),
    eslint({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: []
    })
  ],
})
