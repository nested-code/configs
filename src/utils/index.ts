import * as pkg from './package'
import * as dts from './typegen'
import * as clr from './clear'

export const utils = {
  ...pkg,
  ...dts,
  ...clr
}

export default utils
