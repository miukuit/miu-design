import type { BaseOption } from '@miu-design/shared'
/** 应用主题选项 */
export type AppTheme = 'light' | 'dark'
export const themeOptions: readonly BaseOption<AppTheme>[] = [
  { label: 'app.theme.light', value: 'light' },
  { label: 'app.theme.dark', value: 'dark' },
]
