import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { vue } from '../src/core/transforms'
import { Context } from '../src/core/context'

describe('transform', () => {

  const root = resolve(__dirname)
  const fixtures = import.meta.glob('./fixtures/transform/*.vue')

  for (const file of Object.keys(fixtures)) {

    it(file, () => {
      const fixture = readFileSync(resolve(root, file), 'utf-8')
      const result = vue(fixture, new Context())

      expect(result).toMatchSnapshot()

      const result2 = vue(result, new Context())

      expect(result2).toMatch(result)
    })
  }

})
