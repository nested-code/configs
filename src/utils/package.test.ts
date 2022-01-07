import { readPackage, requirePackage } from './package'

describe('utils > package', () => {
  describe('readPackage', () => {
    it('reads current package json', () => {
      expect(readPackage('./'))
        .toHaveProperty('name', '@nested-code/cogs')
    })
  })
  describe('requirePackage', () => {
    it('reads current package json', () => {
      expect(requirePackage('./'))
      .toHaveProperty('name', '@nested-code/cogs')
    })
  })
})
