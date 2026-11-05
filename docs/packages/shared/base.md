# 通用类型

## BaseOption

通用的下拉/单选/树形选项结构，`label` 存显示文案（通常为 i18n key），`value` 存值。

```ts
export interface BaseOption<V extends string | number = string> {
  label: string
  value: V
  disabled?: boolean
  children?: BaseOption<V>[]
}
```

### 泛型参数

| 写法                            | 含义                                   |
| ------------------------------- | -------------------------------------- |
| `BaseOption`                    | 默认 `value: string`，任意字符串可赋值 |
| `BaseOption<'light' \| 'dark'>` | 值收紧为字面量联合，越界值编译报错     |
| `BaseOption<1 \| 2 \| 3>`       | 数字字面量同样支持                     |
| `BaseOption<number>`            | 宽泛数字                               |

### 典型用法

推荐把联合类型作为**单一数据源**，数组向它看齐：

```ts
export type AppTheme = 'light' | 'dark'

export const themeOptions: readonly BaseOption<AppTheme>[] = [
  { label: 'app.theme.light', value: 'light' },
  { label: 'app.theme.dark', value: 'dark' },
]

// value 写错直接编译报错
// ❌ { label: 'x', value: 'blue' } → TS2322
```

### 树形选项

`children` 递归携带同一泛型，**任意层级的值都受同一联合约束**：

```ts
const options: BaseOption<'a' | 'b'>[] = [
  {
    label: '父级',
    value: 'a',
    children: [
      { label: '子级', value: 'b' }, // ✅
      { label: '越界', value: 'c' }, // ❌ TS2322
    ],
  },
]
```
