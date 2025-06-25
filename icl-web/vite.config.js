import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  base: '/icl-web-demo/',  // 关键：添加 base 路径（前后都带斜杠）
  plugins: [react()],
})