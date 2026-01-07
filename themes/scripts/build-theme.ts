import path from 'path'
import fs from 'fs'
import type { Theme } from '../src/types'

// Import token color modules
import vueTokenColors from '../src/vue'
import cssTokenColors from '../src/css'
import scssTokenColors from '../src/scss'
import typescriptTokenColors from '../src/typescript'

const root = process.cwd()
const srcDir = path.join(root, 'themes', 'src')
const outFile = path.join(root, 'themes', 'dist', 'zeit-theme-dark.json')

function readJson<T>(p: string): T {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function build(): void {
  const colors = readJson<Record<string, string>>(path.join(srcDir, 'colors.json'))

  // Combine all token colors from TypeScript modules
  const tokenColors = [
    ...vueTokenColors,
    ...cssTokenColors,
    ...scssTokenColors,
    ...typescriptTokenColors
  ]

  const theme: Theme = {
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
    if (filename && filename.endsWith('.json')) {
      console.log(`${filename} changed, rebuilding...`)
      try {
        build()
      } catch (err) {
        console.error('Error building theme:', err)
      }
    }
  })
}

