import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CV_Pro/',
  build: {
    chunkSizeWarningLimit: 10000, // Ajusta el límite según sea necesario
  },
})
