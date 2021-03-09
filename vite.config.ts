import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import typescript2 from 'rollup-plugin-typescript2'

export default defineConfig({
  server: {
    port: 3020,
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [
    {
      ...typescript2(),
      apply: 'build',
    },
    vue(),
    WindiCSS({
      //safelist: 'prose prose-sm m-auto',
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index'),
      name: 'vue-editorjs-output',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
