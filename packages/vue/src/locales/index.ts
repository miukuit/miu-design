import type { BaseOption } from '@miu-design/shared'
import en from './en'
import zhCn from './zhCn'
import type { LocaleMessages } from './messages'

/** 应用语言选项 */
export type AppLocale = 'zhCn' | 'en'
export const localeOptions: readonly BaseOption<AppLocale>[] = [
  { label: 'app.locale.zh', value: 'zhCn' },
  { label: 'app.locale.en', value: 'en' },
]

export type { LocaleMessages } from './messages'
export { en, zhCn }

export const locales: Record<AppLocale, LocaleMessages> = {
  zhCn,
  en,
}
