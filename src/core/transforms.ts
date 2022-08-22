import { parse } from '@vue/compiler-sfc'
import { Context } from './context'
import { getElements, NodeTypes } from './utils/ast'

export const vue = (code: string, ctx: Context): string => {
  const result = parse(code)

  if (!result.descriptor.template) return code

  let deleteLocs = []

  for (const child of getElements(result.descriptor.template.ast)) {
    if (child.type !== 1) continue

    for (const prop of child.props) {

      if (prop.type === NodeTypes.ATTRIBUTE) {
        if (!ctx.attrsFilter(prop.name)) continue

        deleteLocs.push({
          start: prop.loc.start.offset,
          end: prop.loc.end.offset,
        })
      } else {
        if (!prop.arg) continue
        let name
        if (prop.arg.type === NodeTypes.SIMPLE_EXPRESSION) {
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
