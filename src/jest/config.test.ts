import { configure } from './config'

describe('jest > configure', () => {
  describe('configure', () => {
    it('provides defaults', () => {
      expect(configure())
        .toMatchObject({
          clearMocks: true,
          collectCoverage: true,
        })
    })
    it('merges args with defaults', () => {
      expect(configure({ collectCoverage: false }))
        .toMatchObject({
          clearMocks: true,
          collectCoverage: false,
        })
    })
  })
})
