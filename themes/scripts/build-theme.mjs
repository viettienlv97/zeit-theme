import path from 'path'
import fs from 'fs'

const root = process.cwd()
const srcDir = path.join(root, 'themes', 'src')
const outFile = path.join(root, 'themes', 'dist', 'zeit-theme-dark.json')

const files = ['base.json', 'html.json', 'css.json', 'scss.json', 'ts.json']

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function build() {
  const colors = readJson(path.join(srcDir, 'colors.json'))

  const tokenColors = files.flatMap((f) => {
    const arr = readJson(path.join(srcDir, f))
    if (!Array.isArray(arr)) {
      throw new Error(`${f} does not export an array`)
    }
    return arr
  })

  const theme = {
    name: 'Zeit Theme Dark',
    type: 'dark',
    colors,
    tokenColors
    // semanticHighlighting: true,
    // semanticTokenColors: {}
  }

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, JSON.stringify(theme, null, 2), 'utf8')
  console.log(`Built theme to ${outFile}`)
}

const watch = process.argv.includes('--watch')

build()

if (watch) {
  console.log('Watching for changes...')
  fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
    if (filename.endsWith('.json')) {
      console.log(`${filename} changed, rebuilding...`)
      try {
        build()
      } catch (err) {
        console.error('Error building theme:', err)
      }
    }
  })
}
