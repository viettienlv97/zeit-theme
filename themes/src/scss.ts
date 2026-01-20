import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

const scssScopes = {
  'source.css.scss': {
    ' keyword.control.at-rule': palette.orange,
    ' string': [palette.redDark, 'italic'],
    ' comment': [palette.blueDark, 'italic'],
    ' punctuation.definition': [palette.redDark, 'italic'],
    ' punctuation.terminator': palette.blueDark,
    ' entity.other.attribute-name': {
      ' ': palette.blue,
      '.class': [palette.blue, 'italic'],
      '.id': [palette.violet, 'italic']
    },
    ' entity.name.tag': {
      ' ': palette.red,
      '.reference': [palette.green, 'italic']
    },
    ' support.constant': [palette.red, 'italic'],
    ' keyword.other.important': [palette.blueDark, 'italic'],
    ' constant.numeric': [palette.green, 'italic'],
    ' keyword.other.unit': [palette.green, 'italic'],
    ' support.function': palette.orange,
    ' support.type.property-name': palette.orange,
    ' variable': palette.green,
  }
}
const scssTokenColors: TokenColor[] = [...mapScopesToTokenColors(scssScopes)]
export default scssTokenColors
