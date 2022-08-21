# unplugin-vue-remove-attribute

Powered by <a href="https://github.com/unjs/unplugin">unplugin</a>.

## Installation

```bash
npm i -D unplugin-vue-remove-attribute
```

<details>
<summary>Vite</summary>

```ts
// vite.config.ts
import RemoveAttributes from 'unplugin-vue-remove-attribute/vite'

export default defineConfig({
  plugins: [
    RemoveAttributes({ /* options */ })
  ]
})
```
</details>

## Usage

This plugin removes matching attributes in vue components, so testing attributes like `data-test-...` are removed in production build.

## Thanks

Thanks to [@antfu](https://github.com/antfu), this project is heavily inspired by [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

## License

MIT License © 2022-PRESENT [Marek Vospěl](https://github.com/marekvospel)
