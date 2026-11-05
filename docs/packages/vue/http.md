# HTTP 请求

基于 Axios 的增强封装：**拦截器可配置、请求取消、自动重试**。包出口为已初始化的单例。

## 快速开始

```ts
import { http } from '@miu-design/vue'

interface User {
  id: number
  name: string
}

// GET —— 业务数据在 res.data
const res = await http.get<User[]>('/api/users')
res.data // User[] | null

// POST / PUT / DELETE / PATCH
await http.post<User>('/api/users', { name: 'miu' })
await http.put('/api/users/1', { name: 'miu2' })
await http.delete('/api/users/1')
await http.patch('/api/users/1', { name: 'miu3' })
```

所有方法返回 `Promise<ResponseData<T>>`，响应拦截器已解包。响应体为统一信封，与 [`@miu-design/shared` 的接口响应规范](/packages/shared/response)一致：

```ts
import type { ApiResponse } from '@miu-design/shared'

// ResponseData<T> = ApiResponse<T>
// { code: number; data: T | null; message: string }
// 业务数据在 res.data 中
```

## 拦截器

通过单例方法动态设置 / 移除：

```ts
import { http } from '@miu-design/vue'

http.setRequestInterceptor(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error),
)

http.setResponseInterceptor(
  (response) => response, // 必须返回 response（解包由 request 统一完成）
  (error) => Promise.reject(error),
)

// 摘除拦截器
http.removeRequestInterceptor()
http.removeResponseInterceptor()

// 获取底层 Axios 实例（高级用法）
const axios = http.getInstance()
```

::: warning 注意
响应拦截器的默认实现返回 **`response`（而非 `response.data`）**，解包由 `request()` 统一完成。自定义时请保持返回 `response`，否则会双重解包导致 `code` / `message` 丢失。
:::

## 请求取消

以 `method-url` 自动生成请求键，**同键新请求会自动取消旧请求**（防重复提交）；也可传 `requestKey` 精确控制：

```ts
await http.get('/api/list', { requestKey: 'user-list' })

http.cancelRequest('user-list', '手动取消') // 返回 boolean
http.cancelAllRequests() // 取消全部
```

被取消的请求会 reject 原始取消错误，用 axios 判断（`axios` 为 peer 依赖）：

```ts
import axios from 'axios'

try {
  await http.get('/api/list')
} catch (err) {
  if (axios.isCancel(err)) return // 取消，静默处理
}
```

## 自动重试

```ts
await http.get('/api/data', {
  retry: {
    retries: 3, // 尝试次数（默认 0 = 不重试）
    retryDelay: 1000, // 重试间隔 ms（默认 1000）
    // 默认重试条件：网络错误（无响应）或 5xx；4xx / 取消的请求不重试
  },
})
```

## 默认行为

| 项               | 值                                                       |
| ---------------- | -------------------------------------------------------- |
| 超时             | `6000ms`                                                 |
| Content-Type     | `application/json;charset=utf-8`                         |
| 常见 HTTP 状态码 | 转换为友好中文错误（400/401/403/404/500/502/503/504 等） |

导出的类型：`ResponseData<T>`、`ApiResponse`（复用 `@miu-design/shared`）、`RetryConfig`、`ResponseValidator`、`http`。
