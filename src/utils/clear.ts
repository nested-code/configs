import { rmdirSync, mkdirSync } from 'fs'

export const clearPath = (path: string) => {
  rmdirSync(path, { recursive: true })
  mkdirSync(path)
}
