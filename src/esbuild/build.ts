import { build as _build, analyzeMetafile, BuildOptions } from 'esbuild'

const watch = process.argv.includes('--watch') || process.argv.includes('-w')

/** Build project with Esbuild. */
export const build = async (opts: BuildOptions = {}) =>
  _build({
    watch: watch
      ? {
        onRebuild: (error, result) => error
          ? console.error('👀❎ Watch build failed:', error)
          : analyzeMetafile(result!.metafile!).then(
            (meta) => console.log('👀✅ Watch build succeeded', meta)
          )
        }
      : false,
     ...opts
    })
    .then(({ metafile }) => analyzeMetafile(metafile!))
    .then(console.log)
    .catch(_ => process.exit(1))
