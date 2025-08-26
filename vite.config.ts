import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts' // generates TypeScript declarations
import { lucideIcons } from './vite/lucideIcons'

export default defineConfig({
  plugins: [
    vue(),
    lucideIcons(),
    dts({
      insertTypesEntry: true, // generate dist/index.d.ts
    }),
  ],
  resolve: {
    alias: {
      'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: ['tailwind.config.js'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // your library entry
      name: 'frappe-ui', // global variable name for UMD builds
      fileName: (format) => `frappe-ui.${format}.js`,
    },
    rollupOptions: {
      // Exclude Vue from the bundle
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
