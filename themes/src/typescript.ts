import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

/**
 * Typescript Scope Hierarchy
 * - Keys starting with '.' are concatenated (no space): text.html.vue
 * - Keys starting with ' ' are separated (with space): text.html.vue entity.name.tag
 */

const DEFAULT_DATA = {
  ' punctuation.terminator': palette.blueDark,
  ' punctuation.accessor': palette.green,
  ' keyword.operator': palette.green,
  ' keyword.control': {
    ' ': palette.green,
    '.import': palette.green,
    '.type': [palette.violet, 'italic'],
    '.from': palette.green,
    '.export': palette.green,
    '.default': palette.violet
  },
  ' string': [palette.red, 'italic'],
  ' variable': {
    ' ': palette.blue,
    '.other.object': [palette.redDark, 'italic']
  },
  ' support.type': [palette.violet, 'italic'],
  ' storage.type': palette.violet,
  ' entity.name.function': palette.orange,
  ' entity.name.type': [palette.violet, 'italic'],
  ' meta.object-literal.key': palette.orange,
  ' constant': {
    ' ': palette.green,
    '.language': [palette.leon, 'italic']
  },
  ' comment': [palette.blueDark, 'italic']
}

export const typescriptScopes = {
  'source.ts': DEFAULT_DATA,
  'source.tsx': DEFAULT_DATA,
  'source.jsx': DEFAULT_DATA,
  'source.js': DEFAULT_DATA
}

// TypeScript Token Colors Configuration
const typescriptTokenColors: TokenColor[] = [
  ...mapScopesToTokenColors(typescriptScopes)
]

export default typescriptTokenColors
