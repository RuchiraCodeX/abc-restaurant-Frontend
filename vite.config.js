import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:8080', // Backend server
            changeOrigin: true,
            secure: false,
            // Optionally, you can configure rewrite rules
            // rewrite: (path) => path.replace(/^\/api/, ''),
        },
    },
},
})


// vite.config.js




  
