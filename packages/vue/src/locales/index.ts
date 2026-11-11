import type { SelectOption } from '@miu-design/shared'
import type { LocaleMessages } from './messages'
import en from './en'
import zhCn from './zhCn'

/** 应用语言选项 */
export type AppLocale = 'zhCn' | 'en'
export const localeOptions: readonly SelectOption<AppLocale>[] = [
  { label: 'app.locale.zh', value: 'zhCn' },
  { label: 'app.locale.en', value: 'en' },
]

export type { LocaleMessages } from './messages'
export { en, zhCn }

export const locales: Record<AppLocale, LocaleMessages> = {
  zhCn,
  en,
}
