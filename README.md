# Zeit Theme

A modular VS Code theme built with Bun, featuring a modern dark color scheme with vibrant syntax highlighting.

## Features

- **Modular Architecture**: Theme is built from separate TypeScript modules for each language/technology
- **Built with Bun**: Fast build process using Bun runtime
- **Type-Safe**: Written in TypeScript for better maintainability and development experience
- **Dark Theme**: Carefully crafted dark color scheme
- **Multi-language Support**: Optimized syntax highlighting for Vue, CSS, SCSS, and TypeScript
- **Watch Mode**: Real-time theme rebuilding during development

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Zeit Theme"
4. Click Install
5. Select the theme from **File > Preferences > Color Theme** (or use `Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`)

### Manual Installation

1. Clone this repository
2. Copy the folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS/Linux**: `~/.vscode/extensions/`
3. Reload VS Code
4. Select "Zeit Theme Dark" from the theme picker

## Development

### Prerequisites

- [Bun](https://bun.sh/) runtime installed
- Node.js 24 or higher
- TypeScript 5+

### Setup

```bash
# Clone the repository
git clone https://github.com/viettienlv97/zeit-theme.git
cd zeit-theme

# Install dependencies
bun install
```

### Building the Theme

```bash
# Build once
bun run build

# Build and watch for changes
bun run watch
```

### Project Structure

```text
zeit-theme/
├── themes/
│   ├── src/                    # Source theme files
│   │   ├── types.ts           # TypeScript type definitions
│   │   ├── colors.json        # UI colors configuration
│   │   ├── base.json          # Base token colors (optional)
│   │   ├── vue.ts             # Vue template syntax highlighting
│   │   ├── css.ts             # CSS syntax highlighting
│   │   ├── scss.ts            # SCSS syntax highlighting
│   │   └── typescript.ts      # TypeScript/JavaScript syntax highlighting
│   ├── scripts/
│   │   └── build-theme.ts     # Build script (TypeScript)
│   └── dist/
│       └── zeit-theme-dark.json  # Generated theme file
├── templates/                  # Example files for testing
├── package.json
└── tsconfig.json
```

### Customization

The theme is built from modular TypeScript files in `themes/src/`. Each file exports token color configurations for specific languages:

- **colors.json**: UI colors (editor background, sidebar, status bar, etc.)
- **vue.ts**: Vue template syntax (tags, attributes, directives)
- **css.ts**: CSS properties and values
- **scss.ts**: SCSS-specific syntax
- **typescript.ts**: TypeScript/JavaScript syntax

To customize:

1. Edit the relevant `.ts` file in `themes/src/`
2. Run `bun run build` or use watch mode
3. Reload the theme in VS Code to see changes

### Adding New Language Support

1. Create a new TypeScript file in `themes/src/` (e.g., `python.ts`)
2. Define and export token color rules using the `TokenColor` type
3. Import and add the module to `themes/scripts/build-theme.ts`
4. Rebuild the theme

Example token color module:

```typescript
import type { TokenColor } from './types'

const colors = {
  function: '#89b4fa',
  keyword: '#cba6f7',
  string: '#a6e3a1'
}

const pythonTokenColors: TokenColor[] = [
  {
    name: 'Python functions',
    scope: ['entity.name.function.python'],
    settings: { foreground: colors.function }
  },
  {
    name: 'Python keywords',
    scope: ['keyword.control.python'],
    settings: { foreground: colors.keyword }
  }
]

export default pythonTokenColors
```

Then add to `build-theme.ts`:

```typescript
import pythonTokenColors from '../src/python'

// In the build function:
const tokenColors = [
  ...vueTokenColors,
  ...cssTokenColors,
  ...scssTokenColors,
  ...typescriptTokenColors,
  ...pythonTokenColors  // Add your new module
]
```

## Color Palette

The theme uses a vibrant color scheme with the following key colors:

- **Blue** (`#89b4fa`, `#05d9e7`): HTML tags, keywords, functions
- **Yellow** (`#f9e2af`): Attributes, parameters, strings
- **Pink/Red** (`#ff2a6d`): Operators, punctuation
- **Green** (`#a6e3a1`): Directives, comments

## Architecture

### Type Safety

The theme uses TypeScript for type safety and better developer experience:

```typescript
// types.ts
export interface TokenColor {
  name?: string
  scope: string | string[]
  settings: {
    foreground?: string
    background?: string
    fontStyle?: string
  }
}
```

### Modular Design

Each language module is self-contained and exports a `TokenColor[]` array, making it easy to:
- Add or remove language support
- Maintain consistent color schemes
- Test and debug individual modules
- Reuse color palettes across languages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Tips

- Use `bun run watch` during development for automatic rebuilds
- Test your changes with the example files in `templates/`
- Follow the existing code structure and naming conventions
- Ensure TypeScript type safety is maintained

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Author

### zeit-vu

- GitHub: [@viettienlv97](https://github.com/viettienlv97)
- Repository: [zeit-theme](https://github.com/viettienlv97/zeit-theme)

## Changelog

### [0.0.5] - Current

- Migrated from JSON to TypeScript modules for better type safety
- Improved modular architecture with dedicated language modules
- Added Vue template support
- Enhanced development experience with TypeScript

### [0.0.4]

- Modular theme architecture
- Support for HTML, CSS, SCSS, and TypeScript
- Watch mode for development

---

**Enjoy coding with Zeit Theme!** ⚡