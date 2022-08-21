import { Options } from './types'
import { createFilter } from '@rollup/pluginutils'

export class Context {
  enable = true
  options: Options

  attrsFilter: (id: unknown)=> boolean

  constructor(options?: Options) {

    if (options.enabled === false) this.enable = false
    this.options = options
    this.attrsFilter = createFilter(options.remove || [/^data-test/])

  }
}
