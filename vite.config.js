import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',  // Explicitly define the output directory
    rollupOptions: {
      input: './index.html',  // Make sure Vite knows where the root of the app is
    }
  }
})
