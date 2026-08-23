import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/game-client-portfolio/',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
  },
})
