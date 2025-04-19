import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // your backend server
    }
  }
})
// This Vite configuration file sets up a React project with a proxy for API requests to a backend server running on localhost:3000. The `react` plugin is used to enable React support in the Vite development server.