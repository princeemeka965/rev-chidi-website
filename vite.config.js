import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // Adjust the base path if needed
  plugins: [vue(), tailwindcss()],
  server: {
    port: 7000, // Change to your preferred port (e.g., 8080, 5000, etc.)
    open: true, // Optional: Automatically open browser
    historyApiFallback: true,
  },
  define: {
    global: 'window'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

})