export type ApiResponse<T> = {
    data: T
    status: number
    statusText: string
  }