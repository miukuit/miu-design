# 主题

主题相关选项，`label` 为 i18n key，配合 vue-i18n 渲染显示文案。

## AppTheme

```ts
type AppTheme = 'light' | 'dark'
```

它是 `themeOptions` 的**单一数据源**——数组标注为 `readonly BaseOption<AppTheme>[]`，越界 `value` 在编译期直接报错。

## themeOptions

```ts
import { themeOptions, type AppTheme } from '@miu-design/vue'

themeOptions // readonly BaseOption<'light' | 'dark'>[]
```

| 字段    | 类型                | 说明                                             |
| ------- | ------------------- | ------------------------------------------------ |
| `label` | `string`            | i18n key（`app.theme.light` / `app.theme.dark`） |
| `value` | `'light' \| 'dark'` | 选项值，即 `AppTheme`                            |

## 配合 vue-i18n 使用

`label` 本身就是消息路径，`t(option.label)` 一行即可渲染：

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { themeOptions, type AppTheme } from '@miu-design/vue'

const theme = defineModel<AppTheme>({ required: true })
const { t } = useI18n()
</script>

<template>
  <label v-for="opt in themeOptions" :key="opt.value">
    <input type="radio" :value="opt.value" v-model="theme" />
    {{ t(opt.label) }}
  </label>
</template>
```
