import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

const cssScopes = {
  'source.css': {}
}
const cssTokenColors: TokenColor[] = [...mapScopesToTokenColors(cssScopes)]
export default cssTokenColors
