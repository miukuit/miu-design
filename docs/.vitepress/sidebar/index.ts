import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/shared/': [
    {
      text: '简介',
      link: '/shared/',
    },
  ],
  '/vue/': [
    {
      text: '指南',
      base: '/vue',
      collapsed: true,
      items: [
        { text: '简介', link: '/' },
        { text: '国际化', link: '/locales' },
        { text: '主题', link: '/themes' },
      ],
    },
    {
      collapsed: true,
      text: 'Components 组件',
      link: '/vue/components/',
    },
    {
      collapsed: true,
      text: 'Utils 工具',
      base: '/vue/utils',
      items: [{ text: 'HTTP', link: '/http' }],
    },
  ],
}
