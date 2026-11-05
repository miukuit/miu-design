# @miu-design/shared

> 前后端通用的类型与基础结构包。仅包含同构代码（无 DOM、无 Node API），前后端可安全共用。

## 安装

```bash
pnpm add @miu-design/shared --save
```

## 使用

```ts
import { SUCCESS_CODE, type ApiResponse } from '@miu-design/shared'

const response: ApiResponse<User[]> = {
  code: SUCCESS_CODE,
  message: 'success',
  data: null,
}
```
