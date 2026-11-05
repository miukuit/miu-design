# 接口响应

统一的 API 响应与分页结构，前后端共用同一套类型。

### 常量

| 导出           | 值  | 说明                                       |
| -------------- | --- | ------------------------------------------ |
| `SUCCESS_CODE` | `0` | 业务成功状态码, 0 表示成功, 其他值表示失败 |

### 接口类型

```ts
/** API 响应体结构 */
interface ApiResponse<T> {
  code: number
  data: T | null
  message: string
}

/** 分页请求参数 */
interface PageQuery {
  page: number // 页码
  pageSize: number // 每页数量
}

/** 分页响应体结构 */
interface PageResponse<T> extends PageQuery {
  list: T[]
  total: number
}
```

### 典型用法

**后端（NestJS）**——Controller 返回值与分页 DTO 对齐：

```ts
listUsers(query: PageQuery): ApiResponse<PageResponse<User>> {
  // ...
}
```

**前端（Vue）**——接口返回类型注解与状态码判断：

```ts
import { SUCCESS_CODE, type ApiResponse } from '@miu-design/shared'

const res: ApiResponse<User[]> = await api.getUsers()
if (res.code === SUCCESS_CODE) {
  // res.data: User[] | null
}
```
