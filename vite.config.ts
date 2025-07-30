import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // Используем относительные пути после сборки
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@use "/src/styles/global/mixins.scss" as *;'
        ].join('\n')
      }
    }
  }
})
