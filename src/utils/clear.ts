import { rmdirSync, mkdirSync } from 'fs'

export const clearPath = (path?: string) => {
  if (!path) return
  rmdirSync(path, { recursive: true })
  mkdirSync(path)
}
