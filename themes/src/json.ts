import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

const jsonScopes = {
  'source.json': {
    ' support.type': [palette.violet, 'italic'],
    ' punctuation.separator': palette.green,
    ' string': [palette.green, 'italic'],
    ' constant.numeric': palette.orange,
    ' constant.language': palette.red
  }
}
const jsonTokenColors: TokenColor[] = [...mapScopesToTokenColors(jsonScopes)]
export default jsonTokenColors
