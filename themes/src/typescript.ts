import type { TokenColor } from './types'

// TypeScript Token Colors Configuration
const typescriptTokenColors: TokenColor[] = [
  {
    // Import statement strings (import './path', import "../file")
    name: 'TS import strings',
    scope: [
      'meta.import.ts string.quoted.single.ts',
      'meta.import.ts string.quoted.double.ts'
    ],
    settings: { foreground: '#d600ff' }
  },
  {
    // TypeScript types (string, number, boolean, custom types)
    name: 'TS types',
    scope: [
      'entity.name.type.ts',
      'support.type.primitive.ts',
      'support.type.builtin.ts'
    ],
    settings: { foreground: '#fab387' }
  }
]

export default typescriptTokenColors