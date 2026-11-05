import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/packages/shared': {
    base: '/packages/shared/',
    items: [
      { text: '说明及安装', link: '/' },
      {
        text: '类型定义',
        collapsed: true,
        items: [
          { text: '通用类型', link: '/base' },
          { text: '接口响应', link: '/response' },
        ],
      },
    ],
  },
  '/packages/vue': {
    base: '/packages/vue/',
    items: [
      { text: '说明及安装', link: '/' },
      { text: '主题', link: '/themes' },
      { text: '国际化', link: '/locales' },
      { text: 'HTTP 请求', link: '/http' },
    ],
  },
  '/packages/nest': {
    base: '/packages/nest/',
    items: [{ text: '说明及安装', link: '/' }],
  },
}
