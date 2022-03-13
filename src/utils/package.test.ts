import { readPackage, requirePackage } from './package'

describe('utils > package', () => {
  describe('readPackage', () => {
    it('reads current package json', () => {
      expect(readPackage('./'))
        .toHaveProperty('name', '@nested-code/cogs')
    })
  })
  /** @todo Fix tests this function https://github.com/folke/esbuild-runner/issues/44 */
  describe.skip('requirePackage', () => {
    it('reads current package json', () => {
      expect(requirePackage('./'))
      .toHaveProperty('name', '@nested-code/cogs')
    })
  })
})
