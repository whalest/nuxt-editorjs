import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  server: {
    port: 3020,
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [
    typescript({
      lib: ['esnext', 'dom', 'ES2015.Promise', 'ES5'], // , 'es6', 'dom'
      target: 'es5',
      noEmitOnError: true,
    }),
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
