import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

/**
 * Typescript Scope Hierarchy
 * - Keys starting with '.' are concatenated (no space): text.html.vue
 * - Keys starting with ' ' are separated (with space): text.html.vue entity.name.tag
 */

const typescriptScopes = {
  'source.ts': {
    ' meta.import.ts': {
      ' keyword.control.import.ts': palette.green,
      ' keyword.control.from.ts': palette.green,
      ' keyword.control.type.ts': palette.orange,
      ' variable.other.readwrite.alias.ts': palette.leon,
      ' meta.block.ts': {
        ' variable.other.readwrite.alias.ts': palette.leon
      },
      ' string.quoted.single.ts': {
        ' ': palette.violet,
        ' punctuation.definition.string.begin.ts': palette.red,
        ' punctuation.definition.string.end.ts': palette.red
      }
    },
    ' meta.var.expr.ts': {
      ' storage.type.ts': palette.red
    },
    ' meta.function.ts': {
      ' storage.type.function.ts': palette.red,
      ' meta.definition.function.ts': {
        ' entity.name.function.ts': palette.orange
      },
      ' meta.parameters.ts': {
        ' variable.parameter.ts': palette.green,
        ' meta.type.annotation.ts': {
          ' support.type.primitive.ts': palette.red,
          ' keyword.operator.type.annotation.ts': palette.leon
        },
        ' keyword.operator.assignment.ts': palette.orange,
        ' constant.numeric.decimal.ts': palette.orange,
        ' string.quoted.single.ts': {
          ' ': palette.redTrans,
          ' punctuation.definition.string.begin.ts': palette.redTrans,
          ' punctuation.definition.string.end.ts': palette.redTrans
        },
        ' constant.language.boolean': palette.orangeTrans,
        ' constant.language.null.ts': palette.violetTrans,
        ' constant.language.undefined.ts': palette.violetTrans
      }
    },

    ' punctuation.terminator.statement.ts': palette.leon
  }
}

// TypeScript Token Colors Configuration
const typescriptTokenColors: TokenColor[] = [
  ...mapScopesToTokenColors(typescriptScopes)
]

export default typescriptTokenColors
