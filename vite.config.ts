import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import ts from 'rollup-plugin-typescript2'

export default defineConfig({
  server: {
    port: 3020,
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [
    vue(),
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),
    {
      apply: 'build',
      ...ts({
        tsconfig: './tsconfig.json',
        check: false,
        useTsconfigDeclarationDir: true,
        //exclude: ['main.ts'],
      }),
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index'),
      name: 'vue-editorjs-blocks',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'main'],
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
