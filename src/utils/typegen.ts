import type { BuildOptions } from 'esbuild'
import dts from 'npm-dts'
import { resolve } from 'path'

/** Generate package type definitions as a single file for each entry point. */
export const typegen = (entryPoints: Required<BuildOptions>['entryPoints']) => {
  for (const entryPoint of Object.values(entryPoints)) {
    console.log('💙 Bundle type definitions for entry:', resolve(entryPoint))
    new dts.Generator({
      entry: resolve(entryPoint),
      output: entryPoint.replace('src', 'dist').replace('.ts', '.d.ts')
    })
      .generate()
  }
}
