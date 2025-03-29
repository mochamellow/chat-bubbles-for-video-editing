import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/chat-bubbles-for-video-editing/', // 👈 Replace with your GitHub repo name
  server: {
    port: 3000
  },
  plugins: [react()]
})
