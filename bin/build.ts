#!/usr/bin/env node

import { resolve } from 'path'
import esbuild from '../src/esbuild'
import utils from '../src/utils'

console.log(`\n🔨 Building Cogs...`)

const config = esbuild.config({
  external: utils.readDependencies(resolve()),
  entryPoints: [
    'src/esbuild/index.ts',
    'src/jest/index.ts',
    'src/utils/index.ts'
  ]
})

utils.clearPath(config.outdir!)
esbuild.build(config)
