import { defineConfig } from 'vitepress'
import { nav } from './nav/index'
import { sidebar } from './sidebar/index'

export default defineConfig({
  title: 'miu-design',
  description: 'miukuit 系统设计文档',
  base: '/',
  lang: 'zh-CN',
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    lastUpdated: {
      text: '最后更新于',
    },
    returnToTopLabel: '回到顶部',
  },
})
