import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Export configuration
export default defineConfig({
  plugins: [
    tailwindcss(), // Include TailwindCSS plugin
    react(),
  ],
  server: {
    port: 5174, // Specify the port for the server
  },
  theme: {
    extend: {
      colors: {
        primary: "#5F6FFF", // Your custom primary color
      },
    },
  },
})

