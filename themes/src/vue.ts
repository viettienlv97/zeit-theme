import { A, mapScopesToTokenColors } from './utils'
import { palette } from './colors'
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
  text: {
    '.html': {
      '.vue': {
        ' text.html.derivative': {
          ' meta.tag.other.unrecognized.html.derivative': {
            ' entity.name.tag.html': palette.violet
          }
        },
        ' punctuation': {
          '.definition': {
            '.tag': {
              '.end.html': palette.red,
              '.begin.html': palette.red
            },
            '.string': {
              '.begin.html': palette.leon,
              '.end.html': palette.leon,
              '.begin.ts': palette.leon,
              '.end.ts': palette.leon,
              '.template.begin': palette.orange,
              '.template.end': palette.orange
            }
          },
          '.separator': {
            '.key-value.html': palette.red
          },
          '.attribute-shorthand.bind.html.vue': palette.leon,
          '.attribute-shorthand.event.html.vue': palette.red,
          '.attribute-shorthand.slot.html.vue': palette.orange
        },
        '.attribute-shorthand': {
          '.bind.html.vue': palette.red,
          '.event.html.vue': palette.red
        },
        ' entity': {
          '.name': {
            '.tag': {
              '.template.html.vue': palette.leon,
              '.script.html.vue': palette.leon,
              '.style.html.vue': palette.leon,
              '.html': palette.leon
            }
          }
        },
        ' meta.object-literal.key.ts': palette.redTrans,
        ' string': {
          '.quoted.double.html': palette.redTrans,
          '.quoted.single.ts': palette.redTrans
        },
        ' meta.attribute': {
          ' entity.other.attribute-name.html': palette.greenTrans,
          '.directive': {
            ' entity.other.attribute-name.html.vue': palette.green,
            ' keyword': {
              '.control': {
                '.conditional.vue': palette.green
              }
            },
            ' variable.other': {
              '.object': palette.violet,
              '.property': palette.orange,
              '.readwrite': palette.red
            },
            ' entity.name.function': palette.violetTrans,
            ' string.template.ts': palette.orangeTrans,
            ' keyword.operator.ternary.ts': palette.green,
            ' keyword.operator.logical.ts': palette.green,
            ' keyword.operator.comparison.ts': palette.green,
            ' variable.other.object.ts': palette.orange,
            ' variable.other.property.ts': palette.red,
            ' punctuation.accessor.optional.ts': palette.leon,
            ' punctuation.accessor.ts': palette.leon
          }
        },
        ' meta.function-call.ts': {
          ' entity.name.function.ts': palette.violet
        },
        ' expression.embedded.vue': {
          ' variable.other.object.ts': palette.orange,
          ' variable.other.property.ts': palette.red,
          ' punctuation.accessor.optional.ts': palette.leon,
          ' punctuation.accessor.ts': palette.leon
        },
        ' comment': {
          '.block.html': {
            '': palette.leonTrans,
            ' punctuation.definition.comment': palette.redTrans
          }
        }
      }
    }
  }
}

/**
 * Map the scope hierarchy to TokenColor array
 * Handles '.' for concatenation and ' ' for separation
 */

const vueTokenColors: TokenColor[] = [...mapScopesToTokenColors(vueScopes)]

export default vueTokenColors
