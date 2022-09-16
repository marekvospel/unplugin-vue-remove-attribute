# unplugin-vue-remove-attribute
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarekvospel%2Funplugin-vue-remove-attribute.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarekvospel%2Funplugin-vue-remove-attribute?ref=badge_shield)


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

<details>
<summary>Rollup</summary>

```ts
// rollup.config.js
import RemoveAttributes from 'unplugin-vue-remove-attribute/rollup'

export default {
  plugins: [
    RemoveAttributes({ /* options */ })
  ]
}
```
</details>

## Usage

This plugin removes matching attributes in vue components, so testing attributes like `data-test-...` are removed in production build.

## Thanks

Thanks to [@antfu](https://github.com/antfu), this project is heavily inspired by [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

## License

MIT License © 2022-PRESENT [Marek Vospěl](https://github.com/marekvospel)


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarekvospel%2Funplugin-vue-remove-attribute.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarekvospel%2Funplugin-vue-remove-attribute?ref=badge_large)