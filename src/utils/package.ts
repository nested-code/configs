import { readFileSync } from 'fs'
import { createRequire } from 'module'
import { resolve } from 'path'

export const readPackage = (path: string) =>
  JSON.parse(readFileSync(resolve(path, 'package.json'), { encoding: 'utf-8' }))

export const requirePackage = (path: string) =>
  createRequire(import.meta.url)(resolve(path, 'package.json'))

export const readDependencies = (path: string) =>
  Object.keys(readPackage(path).dependencies)
