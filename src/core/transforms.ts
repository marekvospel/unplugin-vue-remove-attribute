import { parse } from '@vue/compiler-sfc'
import { Context } from './context'

export const vue = (code: string, ctx: Context): string => {
  const result = parse(code)

  let deleteLocs = []

  for (const child of result.descriptor.template.ast.children) {
    if (child.type !== 1) continue

    for (const prop of child.props) {

      if (prop.type === 6) {
        if (!ctx.attrsFilter(prop.name)) continue

        deleteLocs.push({
          start: prop.loc.start.offset,
          end: prop.loc.end.offset,
        })
      } else {
        let name
        if (prop.arg.type === 4) {
          name = prop.arg.content
        } else {
          // TODO ?
        }
        if (!ctx.attrsFilter(name)) continue

        deleteLocs.push({
          start: prop.loc.start.offset,
          end: prop.loc.end.offset,
        })
      }
    }
  }

  deleteLocs = deleteLocs.sort((a, b) => b.start - a.start)

  for (const loc of deleteLocs) {
    code = code.substring(0, loc.start) + code.substring(loc.end)
  }

  return code
}
