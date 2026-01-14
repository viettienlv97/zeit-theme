import type { TokenColor } from '../types'

export function mapScopesToTokenColors(
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
