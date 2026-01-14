import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

const jsonScopes = {
  'source.json': {
    ' meta.structure.dictionary.json': {
      ' string.json': {
        ' support.type.property-name.json': {
          ' ': palette.orange,
          ' punctuation.support.type.property-name.begin.json': palette.red,
          ' punctuation.support.type.property-name.end.json': palette.red
        }
      },
      ' meta.structure.dictionary.value.json': {
        ' punctuation.separator.dictionary.key-value.json': palette.leon,
        ' string.quoted.double.json': {
          '': palette.leon,
          ' punctuation.definition.string.begin.json': palette.red,
          ' punctuation.definition.string.end.json': palette.red
        },
        ' constant.language.json': palette.violet,
        ' constant.numeric.json': palette.green,
        ' punctuation.separator.dictionary.pair.json': palette.leon
      }
    }
  }
}
const jsonTokenColors: TokenColor[] = [...mapScopesToTokenColors(jsonScopes)]
export default jsonTokenColors
