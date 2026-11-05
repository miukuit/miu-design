/** 各语言文案结构，键与 constant/options 中选项 label 的 i18n 路径对应 */
export interface LocaleMessages {
  app: {
    locale: {
      zh: string
      en: string
    }
    theme: {
      light: string
      dark: string
    }
    common: {
      close: string
      confirm: string
      cancel: string
      add: string
      delete: string
      batchDelete: string
      edit: string
      copy: string
      paste: string
      cut: string
      rename: string
      save: string
      reset: string
      prev: string
      next: string
    }
  }
}
