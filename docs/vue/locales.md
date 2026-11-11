# Locales 国际化

应用语言选项与内置语言包。

## 导出

| 导出             | 类型                                 | 说明           |
| ---------------- | ------------------------------------ | -------------- |
| `AppLocale`      | `'zhCn' \| 'en'`                     | 应用语言类型   |
| `localeOptions`  | `readonly SelectOption<AppLocale>[]` | 语言选项列表   |
| `locales`        | `Record<AppLocale, LocaleMessages>`  | 全部语言包     |
| `LocaleMessages` | interface                            | 语言包结构     |
| `zhCn`           | `LocaleMessages`                     | 简体中文语言包 |
| `en`             | `LocaleMessages`                     | 英文语言包     |

## localeOptions

`label` 为 i18n key（`app.locale.zh` / `app.locale.en`），不是展示文案。

```ts
import { localeOptions } from '@miu-design/vue'

localeOptions
// [
//   { label: 'app.locale.zh', value: 'zhCn' },
//   { label: 'app.locale.en', value: 'en' },
// ]
```

## locales

按语言取对应的语言包，`zhCn`、`en` 也可单独导入。

```ts
import { locales, type AppLocale } from '@miu-design/vue'

const locale: AppLocale = 'zhCn'

locales[locale].app.locale.title // 语言
locales[locale].app.theme.light // 浅色
```

## LocaleMessages

```ts
import type { LocaleMessages } from '@miu-design/vue'

interface LocaleMessages {
  app: {
    locale: {
      title: string
      zh: string
      en: string
    }
    theme: {
      title: string
      light: string
      dark: string
    }
  }
}
```

## 使用示例

切换语言后通过 `locales` 取当前语言包：

```ts
import { computed, ref } from 'vue'
import { localeOptions, locales, type AppLocale } from '@miu-design/vue'

const locale = ref<AppLocale>('zhCn')
const messages = computed(() => locales[locale.value])

messages.value.app.locale.title // 语言
messages.value.app.theme.light // 浅色

// localeOptions 的 label 需要用当前语言包翻译
const options = computed(() =>
  localeOptions.map((item) => ({
    ...item,
    label: messages.value.app.locale[item.value === 'zhCn' ? 'zh' : 'en'],
  })),
)
```
