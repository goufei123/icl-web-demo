import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/icl-web-demo/', // ✅ 注意这里是你的 repo 名
  plugins: [react()],
})