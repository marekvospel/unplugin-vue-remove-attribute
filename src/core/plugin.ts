import { createUnplugin } from 'unplugin'
import { Options } from './types'
import { createFilter } from '@rollup/pluginutils'
import { vue } from './transforms'
import { Context } from './context'

export const plugin = createUnplugin<Options>((options = {}) => {
  const filter = createFilter(
    options.include || [/\.vue$/, /\.vue\?vue/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
  )

  const ctx = new Context(options)

  return {
    name: 'unplugin-vue-remove-attribute',
    enforce: 'pre',
    transformInclude(id): boolean {
      return filter(id)
    },
    transform(code): string {
      if (!ctx.enable) return code

      return vue(code, ctx)
    },
    vite: {
      config(config, { command }): void {
        if (command !== 'build') ctx.enable = false
      },
    },
  }
})

export default plugin
