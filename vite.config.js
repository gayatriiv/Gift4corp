import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://gift4corpbackendnew.vercel.app',
        changeOrigin: true,
        secure: true,
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - separate large libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['react-toastify'],
          'utils-vendor': ['axios'],
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB
    sourcemap: false, // Disable sourcemaps in production for smaller build
    // Copy .htaccess to dist folder
    copyPublicDir: true
  }
})
