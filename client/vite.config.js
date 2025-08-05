import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    hmr: {
      port: 3001,
      overlay: false
    },
    host: 'localhost'
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
