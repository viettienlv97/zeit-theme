import type { TokenColor } from '../types'
export enum A {
  RED = 'red'
}

export function mapScopesToTokenColors(
  scopeObj: Record<string, any>,
  prefix: string = ''
): TokenColor[] {
  const result: TokenColor[] = []
  const groupedByColor: Record<string, [string, string, string[]]> = {}

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

    const pushGroup = (col: string, style: string) => {
      const key = `${col}|${style ?? ''}`
      groupedByColor[key] ??= [col, style ?? '', []]
      groupedByColor[key][2].push(fullScope)
    }

    if (Array.isArray(value)) {
      // It's an array like ['#fff', 'italic']
      const [col, style] = value as [string, string?]
      pushGroup(col, style ?? '')
    } else if (typeof value === 'string') {
      // It's a color string like '#fff'
      pushGroup(value, '')
    } else if (typeof value === 'object' && value !== null) {
      // Check if there's a _default value at this level (string or array)
      if ('_default' in value) {
        const def = value._default
        if (Array.isArray(def)) {
          const [col, style] = def as [string, string?]
          pushGroup(col, style ?? '')
        } else if (typeof def === 'string') {
          pushGroup(def, '')
        }
      }
      // Recurse into nested object
      result.push(...mapScopesToTokenColors(value, fullScope))
    }
  }

  // Convert groups to TokenColor objects
  for (const entry of Object.values(groupedByColor)) {
    const [color, fontStyle, scopes] = entry
    result.push({
      scope: scopes,
      settings: { foreground: color, fontStyle: fontStyle || '' }
    })
  }

  return result
}
