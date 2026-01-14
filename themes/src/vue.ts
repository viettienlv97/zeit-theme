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
    ' entity.name.tag.template.html.vue': palette.leon, // <template>
    ' entity.name.tag.script.html.vue': palette.leon, // <script>
    ' entity.name.tag.style.html.vue': palette.leon, // <style>
    ' punctuation.definition.tag.begin.html.vue': palette.red, // <
    ' punctuation.definition.tag.end.html.vue': palette.red, // >

    ' meta.attribute.unrecognized': {
      ' entity.other.attribute-name.html': palette.green
    },
    ' meta.attribute.lang': {
      ' entity.other.attribute-name.html': palette.green,
      ' punctuation.separator.key-value.html': palette.red,
      ' string.quoted.double.html': {
        ' ': palette.violet,
        ' punctuation.definition.string.begin.html': palette.orange,
        ' punctuation.definition.string.end.html': palette.orange
      }
    },

    ' text.html.derivative': {
      ' meta.attribute.directive': {
        ' punctuation.definition.string.begin.html.vue': palette.leon,
        ' punctuation.definition.string.end.html.vue': palette.leon,
        ' punctuation.attribute-shorthand.bind.html.vue': palette.red,
        ' punctuation.attribute-shorthand.event.html.vue': palette.red,
        ' punctuation.attribute-shorthand.slot.html.vue': palette.orange,
        ' entity.other.attribute-name.html.vue': palette.green,
        ' keyword.control.loop.vue': palette.green,
        ' punctuation.separator.key-value.html.vue': palette.red,
        ' source.ts.embedded.html.vue': {
          ' variable.other.readwrite.ts': palette.red,
          ' keyword.operator.expression.in.ts': palette.green,
          ' string.template.ts': {
            ' ': palette.orangeTrans
          }
        }
      },
      ' meta.tag.other.unrecognized.html.derivative': {
        ' entity.name.tag.html': palette.violet
      },
      ' meta.tag.custom.start.html': {
        ' entity.name.tag.html': palette.violet
      },
      ' meta.tag.custom.end.html': {
        ' entity.name.tag.html': palette.violet
      },
      ' meta.tag': {
        ' entity.name.tag.html': palette.leon,
        ' meta.attribute': {
          ' entity.other.attribute-name.html': palette.greenTrans,
          ' punctuation.separator.key-value.html': palette.redTrans,
          ' string.quoted.double.html': {
            ' ': palette.orangeTrans,
            ' punctuation.definition.string.begin.html': palette.leonTrans,
            ' punctuation.definition.string.end.html': palette.leonTrans
          },
          '.directive': {
            ' keyword.control.conditional.vue': palette.green,
            ' keyword.control.loop.vue': palette.green,
            ' punctuation.separator.key-value.html.vue': palette.red,
            ' punctuation.definition.string.begin.html.vue': palette.leon,
            ' punctuation.definition.string.end.html.vue': palette.leon,
            ' source.ts.embedded.html.vue': {
              ' keyword.operator.expression.in.ts': palette.green,
              ' variable.other.readwrite.ts': palette.red,
              ' variable.other.object.ts': palette.red,
              ' variable.other.property.ts': palette.violet,
              ' keyword.operator.comparison.ts': palette.green,
              ' keyword.operator.logical.ts': palette.green,
              ' variable.other.constant.object.ts': palette.violetTrans,
              ' variable.other.constant.property.ts': palette.orange,
              ' punctuation.separator.key-value.ts': palette.green,
              ' punctuation.separator.comma.ts': palette.orange,
              ' constant.language.boolean.false.ts': palette.violet,
              ' constant.language.boolean.true.ts': palette.violet,
              ' keyword.operator.assignment.ts': palette.green,

              ' string.quoted.single.ts': {
                ' ': palette.orangeTrans,
                ' punctuation.definition.string.begin.ts': palette.redTrans,
                ' punctuation.definition.string.end.ts': palette.redTrans
              },

              ' meta.function-call.ts': {
                ' entity.name.function.ts': palette.orange,
                ' variable.other.object.property.ts': palette.green
              },
              ' punctuation.accessor.ts': palette.orange,
              ' punctuation.accessor.optional.ts': palette.orange,
              ' meta.arrow.ts': {
                ' storage.type.function.arrow.ts': palette.green,
                ' meta.block.ts': {
                  ' keyword.control.conditional.ts': palette.violet
                }
              }
            },
            ' punctuation.attribute-shorthand.bind.html.vue': palette.red,
            ' punctuation.attribute-shorthand.event.html.vue': palette.red,
            ' entity.other.attribute-name.html.vue': palette.green
          }
        },
        ' punctuation.definition.tag.begin.html': palette.red,
        ' punctuation.definition.tag.end.html': palette.red
      },
      ' comment.block.html': {
        ' ': palette.leonTrans,
        ' punctuation.definition.comment.html': palette.violetTrans
      },
      ' expression.embedded.vue': {
        ' meta.function-call.ts': {
          ' entity.name.function.ts': palette.orange
        },
        ' source.ts.embedded.html.vue': {
          ' variable.other.readwrite.ts': palette.red,
          ' variable.other.object.ts': palette.red,
          ' variable.other.property.ts': palette.violet,
          ' variable.other.object.property.ts': palette.green,
          ' punctuation.accessor.optional.ts': palette.orange,
          ' punctuation.accessor.ts': palette.orange,
          ' keyword.operator.arithmetic.ts': palette.green,
          ' keyword.operator.ternary.ts': palette.green,

          ' string.quoted.single.ts': {
            ' ': palette.orangeTrans,
            ' punctuation.definition.string.begin.ts': palette.redTrans,
            ' punctuation.definition.string.end.ts': palette.redTrans
          }
        }
      },
      ' meta.tag.inline': {
        ' invalid.illegal.character-not-allowed-here.html': palette.orange
      }
    }
  },
  ...typescriptScopes['source.ts']
}

/**
 * Map the scope hierarchy to TokenColor array
 * Handles '.' for concatenation and ' ' for separation
 */

const vueTokenColors: TokenColor[] = [...mapScopesToTokenColors(vueScopes)]

export default vueTokenColors
