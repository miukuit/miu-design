/** 业务成功状态码 0 */
export const SUCCESS_CODE = 0
/** API 响应体结构 */
export interface ApiResponse<T = any> {
  code: number
  data: T | null
  message: string
}
