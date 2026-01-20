import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

const othersScopes = {
  'source.ignore': {
    // e.g., .gitignore, .npmignore
    ' ': palette.blue,
    ' comment': [palette.orangeDark, 'italic']
  },
  'text.xml': {
    // XML files
    ' ': [palette.orangeDark, 'italic'],
    ' punctuation.definition.tag': palette.white,
    ' entity.name.tag': palette.blue,
    ' entity.other.attribute-name': palette.green,
    ' string': [palette.redDark, 'italic'],
    ' meta.tag': palette.blue
  }
}
const othersTokenColors: TokenColor[] = [
  ...mapScopesToTokenColors(othersScopes)
]
export default othersTokenColors
