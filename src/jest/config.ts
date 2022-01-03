import type { Config } from '@jest/types'

export const defaults: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*', '!**/index.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: ['/node_modules/.*\\.js$'],
  transform: {
    '\\.(ts|tsx)?$': 'esbuild-runner/jest',
  }
}

/**
 * Merge cogs default initial options with any given.
 * @todo Import from jest.config.mjs at root to keep in sync.
 */
export const configure = (options: Config.InitialOptions = {}): Config.InitialOptions => ({
  ...defaults,
  ...options
})
