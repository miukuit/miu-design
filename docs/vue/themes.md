# Themes 主题

应用主题类型与主题选项。

## 导出

| 导出           | 类型                                | 说明         |
| -------------- | ----------------------------------- | ------------ |
| `AppTheme`     | `'light' \| 'dark'`                 | 应用主题类型 |
| `themeOptions` | `readonly SelectOption<AppTheme>[]` | 主题选项列表 |

## themeOptions

`label` 为 i18n key（`theme.light` / `theme.dark`），需要用语言包翻译后展示。

```ts
import { themeOptions, type AppTheme } from '@miu-design/vue'

const theme: AppTheme = 'light'

themeOptions
// [
//   { label: 'theme.light', value: 'light' },
//   { label: 'theme.dark', value: 'dark' },
// ]
```

## 使用示例

结合 `locales` 翻译选项文案：

```ts
import { computed, ref } from 'vue'
import { locales, themeOptions, type AppTheme } from '@miu-design/vue'

const theme = ref<AppTheme>('light')
const messages = computed(() => locales.zhCn)

const options = computed(() =>
  themeOptions.map((item) => ({
    ...item,
    label: messages.value.app.theme[item.value],
  })),
)

options.value
// [
//   { label: '浅色', value: 'light' },
//   { label: '深色', value: 'dark' },
// ]
```
