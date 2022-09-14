import { build as _build, analyzeMetafile, BuildOptions, WatchMode } from 'esbuild'
import { mapEntries, writeDefinition } from './definitions'

/** Watch mode handler for adding actions on rebuild. */
const handleRebuild: WatchMode['onRebuild'] = async (error, result) => {
  if (error) {
    console.error('👀❎ Watch build failed:', error)
  } else {
    const meta = await analyzeMetafile(result!.metafile!)
    console.log('👀✅ Watch build succeeded', meta)
  }
}

/** Build project with ES Build, adds reload handler in watch mode. */
export const build = async (options: BuildOptions = {}) => {
  const entries = mapEntries(options)
  const writeDefinitions = () => Promise.all(entries.map(writeDefinition))
  const watchEnabled =
    options.watch ||
    process.argv.includes('--watch') ||
    process.argv.includes('-w')
  const watch: BuildOptions['watch'] = {
    onRebuild: async (error, result) => {
      await writeDefinitions()
      return handleRebuild(error, result)
    }
  }
  
  return _build({...options, watch: watchEnabled ? watch : undefined })
    .then(({ metafile }) => analyzeMetafile(metafile!))
    .then(console.log)
    .then(writeDefinitions)
    .catch(_ => process.exit(1))
}
