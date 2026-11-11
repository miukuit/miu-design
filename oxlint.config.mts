import { defineConfig } from 'oxlint'

export default defineConfig({
  ignorePatterns: [
    'dist',
    'out',
    'release',
    'node_modules',
    'drizzle',
    'src-tauri/target',
    'unpackage',
  ],
})
