import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

const jsonScopes = {
  'source.json': {
    'meta.structure.dictionary.json': {
      'string.json': {
        'support.type.property-name.json': {
          '': palette.violet,
          'punctuation.support.type.property-name.begin.json': palette.red,
          'punctuation.support.type.property-name.end.json': palette.red
        }
      },
      'meta.structure.dictionary.value.json': {
        'punctuation.separator.dictionary.key-value.json': palette.leon,
        'string.quoted.double.json': {
          '': palette.green,
          'punctuation.definition.string.begin.json': palette.red,
          'punctuation.definition.string.end.json': palette.red
        }
      }
    }
  }
}
const jsonTokenColors: TokenColor[] = mapScopesToTokenColors(jsonScopes)
export default jsonTokenColors
