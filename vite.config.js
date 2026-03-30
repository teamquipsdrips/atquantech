import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/atquantech/",
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: ["imelda-philhellenic-blamably.ngrok-free.dev"]
  }
})
