import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  format: ['esm', 'cjs'],
  exports: true,
  plugins: [Vue({ isProduction: true })],
  dts: {
    tsc: {
      vue: true,
    },
  },
})
