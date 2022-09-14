import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'
import { createRequire } from 'module'
import { dirname, resolve } from 'path'

export const resolvePath = (path: string) =>
  resolve(dirname(fileURLToPath(import.meta.url)), path)

export const readPackage = (path: string) =>
  JSON.parse(readFileSync(resolve(path, 'package.json'), { encoding: 'utf-8' }))

export const requirePackage = (path: string) =>
  createRequire(import.meta.url)(resolve(path, 'package.json'))

export const readDependencies = (path: string) =>
  Object.keys(readPackage(path).dependencies)

