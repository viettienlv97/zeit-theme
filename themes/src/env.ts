import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

const envScopes = {
  'source.env': {
    ' ': [palette.green, 'italic'],
    ' variable': palette.violet,
    ' keyword.operator.assignment': palette.green,
    ' comment': {
      ' ': [palette.orangeDark, 'italic'],
      ' punctuation.definition.comment': palette.red
    },
    ' string': [palette.blue, 'italic']
  }
}
const envTokenColors: TokenColor[] = [...mapScopesToTokenColors(envScopes)]
export default envTokenColors
