import RemoveAttrs from 'unplugin-vue-remove-attribute/rollup'
import vue from 'rollup-plugin-vue'

export default [{
  input: 'src/App.vue',
  plugins: [
    RemoveAttrs(),
    vue(),
  ],
  output: { file: 'dist/app.js' },
}]
