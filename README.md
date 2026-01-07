# Zeit Theme

A modular VS Code theme built with Bun, featuring a modern dark color scheme with vibrant syntax highlighting.

## Features

- **Modular Architecture**: Theme is built from separate JSON files for each language/technology
- **Built with Bun**: Fast build process using Bun runtime
- **Dark Theme**: Carefully crafted dark color scheme
- **Multi-language Support**: Optimized syntax highlighting for HTML, CSS, SCSS, and TypeScript
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
│   │   ├── colors.json        # UI colors configuration
│   │   ├── html.json          # HTML syntax highlighting
│   │   ├── css.json           # CSS syntax highlighting
│   │   ├── scss.json          # SCSS syntax highlighting
│   │   ├── ts.json            # TypeScript syntax highlighting
│   │   └── base.json          # Base token colors (optional)
│   ├── scripts/
│   │   └── build-theme.mjs    # Build script
│   └── dist/
│       └── zeit-theme-dark.json  # Generated theme file
├── templates/                  # Example files for testing
├── package.json
└── tsconfig.json
```

### Customization

The theme is built from modular JSON files in `themes/src/`. Each file defines syntax highlighting rules for specific languages:

- **colors.json**: UI colors (editor background, sidebar, status bar, etc.)
- **html.json**: HTML tags and attributes
- **css.json**: CSS properties and values
- **scss.json**: SCSS-specific syntax
- **ts.json**: TypeScript/JavaScript syntax

To customize:

1. Edit the relevant JSON file in `themes/src/`
2. Run `bun run build` or use watch mode
3. Reload the theme in VS Code to see changes

### Adding New Language Support

1. Create a new JSON file in `themes/src/` (e.g., `python.json`)
2. Define token color rules using VS Code's TextMate scopes
3. Add the file to the `files` array in `themes/scripts/build-theme.mjs`
4. Rebuild the theme

Example token color rule:

```json
[
  {
    "name": "Python functions",
    "scope": ["entity.name.function.python"],
    "settings": { "foreground": "#89b4fa" }
  }
]
```

## Color Palette

The theme uses a vibrant color scheme with the following key colors:

- **Blue** (`#89b4fa`, `#05d9e7`): HTML tags, keywords
- **Yellow** (`#f9e2af`): Attributes, parameters
- **Pink/Red** (`#ff2a6d`): Operators, punctuation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Author

### zeit-vu

- GitHub: [@viettienlv97](https://github.com/viettienlv97)
- Repository: [zeit-theme](https://github.com/viettienlv97/zeit-theme)

## Changelog

### [0.0.4] - Current

- Modular theme architecture
- Support for HTML, CSS, SCSS, and TypeScript
- Watch mode for development

---

**Enjoy coding with Zeit Theme!** ⚡
