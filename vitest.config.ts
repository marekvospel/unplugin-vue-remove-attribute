import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    reporters: ['dot', 'junit'],
    outputFile: 'reports/vitest.xml',
    coverage: {
      enabled: true,
      reportsDirectory: 'reports/coverage',
    },
  },
  plugins: [
    AutoImport({
      dts: 'test/auto-import.d.ts',
      eslintrc: { enabled: true },
      imports: [
        {
          vitest: [
            'suite',
            'test',
            'describe',
            'it',
            'expect',
            'assert',
            'vi',
            'beforeAll',
            'afterAll',
            'beforeEach',
            'afterEach',
          ],
        },
      ],
    }),
  ],
})
