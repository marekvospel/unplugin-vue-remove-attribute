
module.exports = {
  env: { node: true },
  extends: ['@vospel', './.eslintrc-auto-import.json'],
  ignorePatterns: [
    'test/auto-import.d.ts',
  ],
}
