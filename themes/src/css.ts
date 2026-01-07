import type { TokenColor } from './types'

// CSS Token Colors Configuration
const cssTokenColors: TokenColor[] = [
  {
    // CSS property names (color, display, margin, etc.)
    name: 'CSS property names',
    scope: ['support.type.property-name.css'],
    settings: { foreground: '#94e2d5' }
  },
  {
    // CSS numeric values (px, rem, %, numbers)
    name: 'CSS numbers',
    scope: ['constant.numeric.css'],
    settings: { foreground: '#fab387' }
  }
]

export default cssTokenColors