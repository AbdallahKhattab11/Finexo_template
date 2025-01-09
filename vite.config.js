import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' }),
  ],
})


