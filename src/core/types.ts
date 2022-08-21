import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  include?: FilterPattern
  exclude?: FilterPattern

  enabled?: boolean

  remove?: FilterPattern
}
