import { A, mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import { typescriptScopes } from './typescript'
import type { TokenColor } from './types'

/**
 * Vue Template Token Colors Configuration
 *
 * Organized by Vue template scope hierarchy
 * Structure: Keys starting with '.' are concatenated, keys starting with ' ' are separated
 */

/**
 * Vue Template Scope Hierarchy
 * - Keys starting with '.' are concatenated (no space): text.html.vue
 * - Keys starting with ' ' are separated (with space): text.html.vue entity.name.tag
 */
const vueScopes = {
  'text.html.vue': {
    ' entity.name.tag': palette.green,
    ' entity.name.function': [palette.orange, 'italic'],
    ' punctuation.definition.tag': palette.white,
    ' meta.tag.custom': {
      ' entity.name.tag': [palette.violet, 'italic']
    },
    ' meta.tag.other.unrecognized': {
      ' entity.name.tag': [palette.violet, 'italic']
    },
    ' meta.attribute': {
      ' punctuation.separator': palette.green,
      ' punctuation.attribute-shorthand': [palette.green, 'italic'],
      ' entity.other.attribute-name': [palette.orangeDark, 'italic'],
      '.directive': {
        ' entity.other.attribute-name': [palette.orange, 'italic'],
        ' keyword.control': [palette.orange, 'italic']
      }
    },
    ' keyword.operator': palette.green,
    ' string': {
      ' ': [palette.red, 'italic']
    },
    ' variable': {
      ' ': palette.blue
    },
    ' constant': palette.violet,
    ' comment': [palette.blueDark, 'italic']
  }

  // ...typescriptScopes['source.ts']
}

/**
 * Map the scope hierarchy to TokenColor array
 * Handles '.' for concatenation and ' ' for separation
 */

const vueTokenColors: TokenColor[] = [...mapScopesToTokenColors(vueScopes)]

export default vueTokenColors
