import path from 'path'
import fs from 'fs'
import type { Theme } from '../src/types'

const root = process.cwd()
const srcDir = path.join(root, 'themes', 'src')
const outFile = path.join(root, 'themes', 'dist', 'zeit-theme-dark.json')

function readJson<T>(p: string): T {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

async function build(): Promise<void> {
  // Clear the module cache to get fresh imports
  const modulesToReload = [
    path.join(srcDir, 'vue.ts'),
    path.join(srcDir, 'css.ts'),
    path.join(srcDir, 'scss.ts'),
    path.join(srcDir, 'typescript.ts'),
    path.join(srcDir, 'colors.ts')
  ]

  // Delete cached modules
  for (const mod of modulesToReload) {
    delete require.cache[require.resolve(mod)]
  }

  // Dynamically import fresh modules
  const vueTokenColors = (await import(`../src/vue.ts?${Date.now()}`)).default
  const cssTokenColors = (await import(`../src/css.ts?${Date.now()}`)).default
  const scssTokenColors = (await import(`../src/scss.ts?${Date.now()}`)).default
  const jsonTokenColors = (await import(`../src/json.ts?${Date.now()}`)).default
  const envTokenColors = (await import(`../src/env.ts?${Date.now()}`)).default
  const othersTokenColors = (await import(`../src/others.ts?${Date.now()}`))
    .default

  const typescriptTokenColors = (
    await import(`../src/typescript.ts?${Date.now()}`)
  ).default
  const { colors } = await import(`../src/colors.ts?${Date.now()}`)

  // Combine all token colors from TypeScript modules
  const tokenColors = [
    ...vueTokenColors,
    ...cssTokenColors,
    ...scssTokenColors,
    ...typescriptTokenColors,
    ...jsonTokenColors,
    ...envTokenColors,
    ...othersTokenColors
  ]

  const theme: Theme = {
    name: 'Zeit Theme Dark',
    type: 'dark',
    colors,
    tokenColors
    // semanticHighlighting: true,
    // semanticTokenColors: {},
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
    if (filename && (filename.endsWith('.json') || filename.endsWith('.ts'))) {
      console.log(`${filename} changed, rebuilding...`)
      build().catch((err) => {
        console.error('Error building theme:', err)
      })
    }
  })
}
