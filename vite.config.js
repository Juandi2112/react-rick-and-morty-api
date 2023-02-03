import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://Juandi2112.github.io/react-rick-and-morty-api/",
  plugins: [react()],
})
