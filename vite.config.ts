import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3020,
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [
    vue(),
    ViteComponents(),
    Pages(),
    WindiCSS({
      //safelist: 'prose prose-sm m-auto',
    }),
  ],
})
