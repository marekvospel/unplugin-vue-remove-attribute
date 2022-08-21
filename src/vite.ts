import unplugin from './'
import type { Options } from './core/types'
import type { Plugin } from 'vite'

export default unplugin.vite as (options?: Options | undefined)=> Plugin
