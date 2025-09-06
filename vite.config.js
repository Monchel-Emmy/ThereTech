import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use base path for GitHub Pages deployment, empty for Vercel
  base: process.env.VITE_BASE_PATH || '',
})
