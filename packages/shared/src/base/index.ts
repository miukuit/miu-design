/** 选项接口。默认string，支持字面量、string、number */
export interface BaseOption<V extends string | number = string> {
  label: string
  value: V
  disabled?: boolean
  children?: BaseOption<V>[]
}
