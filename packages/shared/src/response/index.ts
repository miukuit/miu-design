/** 业务成功状态码 0 */
export const SUCCESS_CODE = 0
/** API 响应体结构 */
export interface ApiResponse<T = any> {
  code: number
  data: T | null
  message: string
}
/** 分页响应体结构 */
export interface PageQuery {
  /** 分页页码 */
  page: number
  /** 分页每页数量 */
  pageSize: number
}
/** 分页响应体结构 */
export interface PageResponse<T = any> extends PageQuery {
  /** 分页列表 */
  list: T[]
  /** 分页总数量 */
  total: number
}
