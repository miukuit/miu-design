# 国际化

包内置简体中文（`zhCn`）与英文（`en`）文案。文案为**嵌套结构**，与 vue-i18n 默认的 `.` 分隔符天然对齐——`t('app.theme.light')` 直接可用。

## 导出总览

| 导出             | 类型                                | 说明                       |
| ---------------- | ----------------------------------- | -------------------------- |
| `AppLocale`      | `'zhCn' \| 'en'`                    | 语言联合类型（单一数据源） |
| `LocaleMessages` | `interface`                         | 文案结构约束（`app.*`）    |
| `locales`        | `Record<AppLocale, LocaleMessages>` | 全语言文案集合             |
| `localeOptions`  | `readonly BaseOption<AppLocale>[]`  | 语言切换选项               |
| `zhCn` / `en`    | `LocaleMessages`                    | 单语言文案包               |

## 接入 vue-i18n

```ts
// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import { locales, type AppLocale } from '@miu-design/vue'

const saved = localStorage.getItem('locale') as AppLocale | null

export const i18n = createI18n({
  legacy: false,
  locale: saved ?? 'zhCn',
  fallbackLocale: 'zhCn',
  messages: locales, // { zhCn: {...}, en: {...} } 直接整包接入
})

export function setLocale(locale: AppLocale): void {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
}
```

```ts
// main.ts
import { i18n } from './i18n'
createApp(App).use(i18n).mount('#app')
```

## 组件中使用

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { localeOptions } from '@miu-design/vue'

const { t, locale } = useI18n()
</script>

<template>
  <!-- label 本身就是 i18n key，选项列表直接驱动 UI -->
  <select :value="locale" @change="setLocale($event.target.value)">
    <option v-for="opt in localeOptions" :key="opt.value" :value="opt.value">
      {{ t(opt.label) }}
    </option>
  </select>
</template>
```

## 业务文案扩展（应用侧）

包只承载业务无关的基础文案（`app.*`），**业务文案（如 `login.*`）在应用侧叠加**：

```
src/i18n/
├── index.ts
└── locales/
    ├── zhCn/login.ts
    └── en/login.ts
```

```ts
import { locales, type LocaleMessages, type AppLocale } from '@miu-design/vue'
import loginZhCn from './locales/zhCn/login'
import loginEn from './locales/en/login'

/** 应用消息结构 = 包基础层 + 业务层 */
interface AppMessages extends LocaleMessages {
  login: typeof loginZhCn
}

const messages: Record<AppLocale, AppMessages> = {
  zhCn: { ...locales.zhCn, login: loginZhCn },
  en: { ...locales.en, login: loginEn },
}
```

类型防线在应用侧继续生效：en 版 `login` 缺键、或包升级新增语言而应用漏注册，**均直接 tsc 报错**。

## 新增语言（包内维护）

1. 新建 `locales/zhTw/{app,index}.ts`（复制 zhCn 翻译）
2. `messages.ts` 的 `app.locale` 命名空间加 `zhTw: string`
3. `locales/index.ts` 三处同步：`AppLocale` 联合类型、`localeOptions` 选项、`locales` 注册

漏任何一步由 `Record<AppLocale, LocaleMessages>` 类型强制拦截。
