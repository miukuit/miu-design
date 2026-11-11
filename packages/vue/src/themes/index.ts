import type { SelectOption } from '@miu-design/shared'

/** 应用主题选项 */
export type AppTheme = 'light' | 'dark'
export const themeOptions: readonly SelectOption<AppTheme>[] = [
  { label: 'theme.light', value: 'light' },
  { label: 'theme.dark', value: 'dark' },
]
