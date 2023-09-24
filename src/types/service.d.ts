export interface ServiceResponse<T> {
  success: boolean
  data: null | T
  error: null | string
}
