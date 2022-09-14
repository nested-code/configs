import { mapEntries } from './definitions'

describe('Cogs » esbuild » definitions', () => {
  describe('.mapEntries', () => {
    it('maps an array of entry points to js out files', () => {
      expect(mapEntries({
        outdir: 'dist',
        entryPoints: [
          'src/one/index.ts',
          'src/two/index.ts',
        ]
      })/* ?  */).toEqual([{
        entry: 'src/one/index.ts',
        outFile: 'dist/one/index.js'
      }, {
        entry: 'src/two/index.ts',
        outFile: 'dist/two/index.js'
      }])
    })
    it('maps an entry point object to js out files', () => {
      expect(mapEntries({
        outdir: 'dist',
        entryPoints: {
          one: 'src/one/index.ts',
          two: 'src/two/index.ts'
        }
      })).toEqual([{
        entry: 'src/one/index.ts',
        outFile: 'dist/one.js'
      }, {
        entry: 'src/two/index.ts',
        outFile: 'dist/two.js'
      }])
    })
  })
})
