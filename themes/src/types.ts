// VS Code Theme Token Color Type Definitions

export interface TokenColor {
  name?: string
  scope?: string | string[]
  settings: {
    foreground?: string
    background?: string
    fontStyle?: string
  }
}

export interface Theme {
  name: string
  type: 'dark' | 'light'
  tokenColors: TokenColor[]
  colors: Record<string, string>
}
