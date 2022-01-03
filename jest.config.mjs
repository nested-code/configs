/** @type {import('@jest/types').Config.InitialOptions} */
export default {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*', '!**/index.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: [ 'ts', 'tsx', 'mjs', 'js', 'jsx', 'json', 'node' ],
  transformIgnorePatterns: ['/node_modules/.*\\.js$'],
  transform: {
    '\\.(ts|tsx)?$': 'esbuild-runner/jest',
  }
}
