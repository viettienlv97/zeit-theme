import { mapScopesToTokenColors } from './utils'
import { palette } from './colors'
import type { TokenColor } from './types'

/**
 * Typescript Scope Hierarchy
 * - Keys starting with '.' are concatenated (no space): text.html.vue
 * - Keys starting with ' ' are separated (with space): text.html.vue entity.name.tag
 */

export const typescriptScopes = {
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
      ' keyword.control.export.ts': palette.green,
      ' variable.other.readwrite.ts': palette.red,
      ' meta.function-call.ts': {
        ' entity.name.function.ts': palette.orange
      },
      ' variable.other.constant.object.ts': palette.violetTrans,
      ' variable.other.constant.object.property.ts': palette.orange,
      ' keyword.operator.assignment.ts': palette.green,
      ' storage.type.ts': palette.violet,
      ' meta.var-single-variable.expr.ts': {
        ' meta.definition.variable.ts': {
          ' variable.other.constant.ts': palette.red
        },
        ' meta.type.annotation.ts': {
          ' keyword.operator.type.annotation.ts': palette.green,
          ' entity.name.type.ts': palette.violet,
          ' meta.type.parameters.ts': {
            ' support.type.primitive.ts': palette.redTrans,
            ' punctuation.separator.comma.ts': palette.green,
            ' keyword.operator.type.ts': palette.green
          }
        }
      },
      ' meta.objectliteral.ts': {
        ' variable.other.object.ts': palette.violetTrans,
        ' variable.other.property.ts': palette.red,
        ' keyword.operator.assignment.ts': palette.green,
        ' punctuation.separator.comma.ts': palette.green,
        ' meta.array.literal.ts': {
          ' variable.other.constant.object.ts': palette.violetTrans,
          ' variable.other.constant.object.property.ts': palette.orange,
          ' variable.other.constant.property.ts': palette.red,
          ' punctuation.accessor.ts': palette.green
        },
        ' meta.object.member.ts': {
          ' constant.numeric.decimal.ts': palette.orange,
          ' constant.language.boolean.true.ts': palette.violet,
          ' meta.object-literal.key.ts': {
            ' ': palette.orange,
            ' punctuation.separator.key-value.ts': palette.green
          },
          ' string.quoted.single.ts': {
            ' ': palette.orangeTrans,
            ' punctuation.definition.string.begin.ts': palette.redTrans,
            ' punctuation.definition.string.end.ts': palette.redTrans
          },
          ' string.template.ts': {
            ' ': palette.orangeTrans,
            ' punctuation.definition.template-expression.begin.ts':
              palette.redTrans,
            ' punctuation.definition.template-expression.end.ts':
              palette.redTrans,
            ' variable.other.readwrite.ts': palette.red
          }
        }
      }
    },
    ' meta.function.ts': {
      ' keyword.control.export.ts': palette.green,
      ' storage.type.function.ts': palette.red,
      ' meta.definition.function.ts': {
        ' entity.name.function.ts': palette.orange
      },
      ' meta.parameters.ts': {
        ' variable.parameter.ts': palette.red,
        ' meta.type.annotation.ts': {
          ' support.type.primitive.ts': palette.redTrans
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
      },
      ' meta.block.ts': {
        ' variable.other.object.ts': palette.violetTrans,
        ' punctuation.accessor.ts': palette.green,
        ' variable.other.property.ts': palette.red,
        ' keyword.operator.assignment.ts': palette.green,
        ' variable.other.readwrite.ts': palette.red,
        ' punctuation.separator.comma.ts': palette.green,
        ' keyword.control.flow.ts': palette.green,
        ' keyword.control.as.ts': palette.green,
        ' support.type.primitive.ts': palette.redTrans,
        ' meta.var.expr.ts': {
          ' constant.numeric.decimal.ts': palette.orange,
          ' keyword.operator.relational.ts': palette.green,
          ' support.variable.property.ts': palette.orange,
          ' variable.other.constant.ts': palette.red,
          ' variable.other.constant.property.ts': palette.red,
          ' keyword.operator.logical.ts': palette.green,
          ' keyword.operator.assignment.ts': palette.green,
          ' string.template.ts': {
            ' ': palette.orangeTrans,
            ' punctuation.definition.template-expression.begin.ts':
              palette.redTrans,
            ' punctuation.definition.template-expression.end.ts':
              palette.redTrans
          },
          ' meta.function-call.ts': {
            ' entity.name.function.ts': palette.orange
          },
          ' meta.object-binding-pattern-variable.ts': {
            ' meta.definition.variable.ts': {
              ' variable.other.constant.ts': palette.red
            }
          },
          ' meta.arrow.ts': {
            ' storage.type.function.arrow.ts': palette.green,
            ' meta.parameters.ts': {
              ' meta.type.annotation.ts': {
                ' keyword.operator.type.annotation.ts': palette.green
              }
            },
            ' meta.block.ts': {
              ' keyword.control.flow.ts': palette.green,
              ' keyword.operator.ternary.ts': palette.green,
              ' variable.other.readwrite.ts': palette.red,
              ' meta.var.expr.ts': {
                ' punctuation.accessor.ts': palette.green,
                ' variable.other.object.ts': palette.violetTrans,
                ' variable.other.object.property.ts': palette.orange,
                ' variable.other.property.ts': palette.red,
                ' meta.objectliteral.ts': {
                  ' constant.language.null.ts': palette.violet,
                  ' meta.object-literal.key.ts': palette.orange,
                  ' meta.object.member.ts': {
                    ' variable.other.readwrite.ts': palette.red
                  }
                },
                ' meta.arrow.ts': {
                  ' meta.parameters.ts': {
                    ' punctuation.separator.parameter.ts': palette.green,
                    ' string.quoted.single.ts': palette.orangeTrans
                  },
                  ' meta.return.type.arrow.ts': {
                    ' support.type.primitive.ts': palette.redTrans,
                    ' keyword.operator.type.annotation.ts': palette.green
                  }
                }
              }
            }
          },
          ' meta.type.parameters.ts': {
            ' entity.name.type.ts': palette.greenTrans
          }
        },
        ' meta.function-call.ts': {
          ' entity.name.function.ts': palette.orange,
          ' variable.other.object.property.ts': palette.orange
        },
        ' meta.arrow.ts': {
          ' storage.type.function.arrow.ts': palette.green
        },
        ' meta.objectliteral.ts': {
          ' meta.object.member.ts': {
            ' meta.object-literal.key.ts': palette.orange,
            ' constant.language.boolean.true.ts': palette.violet
          }
        }
      }
    },

    ' punctuation.terminator.statement.ts': palette.green,
    ' comment.line.double-slash.ts': {
      ' ': palette.leonTrans,
      ' punctuation.definition.comment.ts': palette.violetTrans
    },

    ' comment.block.documentation.ts': {
      ' ': palette.leonTrans,
      ' punctuation.definition.comment.ts': palette.violetTrans
    }
  }
}

// TypeScript Token Colors Configuration
const typescriptTokenColors: TokenColor[] = [
  ...mapScopesToTokenColors(typescriptScopes)
]

export default typescriptTokenColors
