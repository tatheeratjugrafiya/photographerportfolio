import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  envPrefix: ['VITE_', 'apiKey', 'authDomain', 'projectId', 'storageBucket', 'appId', 'measurementId', 'supabaseUrl', 'supabaseAnonKey']
})

