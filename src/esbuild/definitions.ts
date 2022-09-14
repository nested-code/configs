import { BuildOptions } from 'esbuild'
import { exec } from 'child_process'

type EntryMap = { entry: string, outFile: string }

/** Map entry points to js out files. */
export const mapEntries = (options: BuildOptions, baseUrl: string = 'src') => {
  if (typeof options.entryPoints === 'undefined') return [] as EntryMap[]

  const { entryPoints, outExtension, outdir = 'dist' } = options
  const entries = [] as EntryMap[]
  const ext = outExtension?.ext || 'js'

  const getOutFile = (entry: string) =>
    `${outdir}/${entry.replace(new RegExp(`^${baseUrl}/`), '').replace(/\.ts$/, '')}.${ext}`

  if (Array.isArray(entryPoints)) {
    for (const entry of entryPoints) {
      entries.push({ entry, outFile: getOutFile(entry) })
    }
  } else {
    for (const [out, entry] of Object.entries(entryPoints)) {
      entries.push({ entry, outFile: getOutFile(out) })
    }
  }
  return entries
}

/** Write type definitions for entry points with js out files. */
export const writeDefinition = ({ entry, outFile }: EntryMap) =>
  new Promise<string>((resolve, reject) =>
    exec(
      `yarn tsc ${entry} --outFile ${outFile} --declaration --emitDeclarationOnly -p .`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`❎ Writing definition for ${entry} failed:`, error)
          reject(stderr)
        } else {
          console.log(`✅ Writing definition for ${entry} succeeded`)
          resolve(stdout)
        }
      })
  )
