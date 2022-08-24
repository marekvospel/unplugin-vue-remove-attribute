import { Context } from '../src/core/context'

/*
 This test isn't necessary, it's here to increase test coverage & simulate possible passed plugin options
 */

describe('context', function () {

  it('should not throw error', function () {

    new Context()

    new Context({
      buildOnly: false,
      enabled: false,
    })

  })
})
