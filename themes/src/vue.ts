import type { TokenColor } from './types'

/**
 * Vue Template Token Colors Configuration
 *
 * Organized by Vue template scope hierarchy
 * Structure: Keys starting with '.' are concatenated, keys starting with ' ' are separated
 */

// Color palette for Vue templates
const colors = {
  tag: '#89b4fa',
  attribute: '#f9e2af',
  punctuation: '#ff2a6d',
  special: '#05d9e7',
  directive: '#a6e3a1',
  string: '#f9e2af',
  number: '#fab387'
}

/**
 * Vue Template Scope Hierarchy
 * - Keys starting with '.' are concatenated (no space): text.html.vue
 * - Keys starting with ' ' are separated (with space): text.html.vue entity.name.tag
 */
const vueScopes = {
  text: {
    '.html': {
      '.vue': {
        ' entity': {
          '.name': {
            '.tag': {
              '.template': {
                '.html': {
                  '.vue': colors.tag
                }
              },
              _default: colors.tag
            }
          },
          '.other': {
            '.attribute-name': colors.attribute
          }
        },
        ' meta': {
          '.tag': {
            ' entity': {
              '.name': {
                '.tag': colors.tag
              }
            },
            ' punctuation': {
              '.definition': {
                '.tag': colors.punctuation
              }
            }
          }
        },
        ' punctuation': {
          '.definition': {
            '.tag': colors.punctuation,
            '.string': colors.punctuation
          },
          '.separator': {
            '.key-value': colors.punctuation
          }
        },
        ' string': {
          '.quoted': colors.string
        }
      }
    }
  }
}

/**
 * Map the scope hierarchy to TokenColor array
 * Handles '.' for concatenation and ' ' for separation
 */
function mapScopesToTokenColors(
  scopeObj: Record<string, any>,
  prefix: string = ''
): TokenColor[] {
  const result: TokenColor[] = []
  const groupedByColor: Record<string, string[]> = {}

  for (const [key, value] of Object.entries(scopeObj)) {
    // Skip special _default key for now, handle it separately
    if (key === '_default') continue

    let fullScope: string

    if (key.startsWith('.')) {
      // Concatenate with dot (no space)
      fullScope = prefix + key
    } else if (key.startsWith(' ')) {
      // Add as new segment (with space)
      fullScope = prefix + key
    } else {
      // First key (no prefix)
      fullScope = key
    }

    if (typeof value === 'string') {
      // It's a color - add to group
      ;(groupedByColor[value] ??= []).push(fullScope)
    } else if (typeof value === 'object' && value !== null) {
      // Check if there's a _default value at this level
      if ('_default' in value && typeof value._default === 'string') {
        const defaultColor = value._default
        ;(groupedByColor[defaultColor] ??= []).push(fullScope)
      }
      // Recurse into nested object
      result.push(...mapScopesToTokenColors(value, fullScope))
    }
  }

  // Convert groups to TokenColor objects
  for (const [color, scopes] of Object.entries(groupedByColor)) {
    result.push({
      scope: scopes,
      settings: { foreground: color }
    })
  }

  return result
}

const vueTokenColors: TokenColor[] = [
  ...mapScopesToTokenColors(vueScopes),
  {
    name: 'HTML: Tags (fallback)',
    scope: ['entity.name.tag.html', 'punctuation.definition.tag.html'],
    settings: { foreground: colors.tag }
  },
  {
    name: 'HTML: Attributes (fallback)',
    scope: ['entity.other.attribute-name.html'],
    settings: { foreground: colors.attribute }
  },
  {
    name: 'HTML: Special tags (template, script, style)',
    scope: [
      'entity.name.tag.template',
      'entity.name.tag.script',
      'entity.name.tag.style'
    ],
    settings: { foreground: colors.special }
  }
]

export default vueTokenColors