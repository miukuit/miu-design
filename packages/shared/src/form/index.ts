/** 选项接口。value 默认 string，支持字面量、string、number */
export interface SelectOption<V extends string | number = string> {
  label: string
  value: V
  disabled?: boolean
  children?: SelectOption<V>[]
}
