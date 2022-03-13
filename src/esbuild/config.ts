import { BuildOptions } from 'esbuild'

export type EntryBuildOptions = BuildOptions & Pick<Required<BuildOptions>, 'entryPoints'>

export const defaults: Partial<BuildOptions> = {
  minify: false,
  sourcemap: true,
  format: 'esm',
  platform: 'node',
  target: 'node14',
  outdir: 'dist',
  bundle: true,
  metafile: true
}

/** Generate ESbuild config, finding dependencies from package. */
export const config = (opts: EntryBuildOptions) =>
  ({ ...defaults, ...opts })
