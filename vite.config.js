import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.heic', '**/*.heif', '**/*.HEIC', '**/*.HEIF'],
  server: {
    proxy: {
      '/api-aladhan': {
        target: 'https://api.aladhan.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-aladhan/, ''),
      },
    },
  },
  base:process.env.VITE_BASE_PATH ||"/masjidalqolam"
})