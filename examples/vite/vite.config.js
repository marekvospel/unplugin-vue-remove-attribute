import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inspect from 'vite-plugin-inspect'
import removeAttribute from 'unplugin-vue-remove-attribute/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    removeAttribute({ remove: [/^data-test/] }),
    vue(),
    inspect(),
  ],
})
