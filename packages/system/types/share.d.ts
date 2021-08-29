interface PaginationOptions {
  search?: {
    key?: string
    groups?: string[]
  }
  limit?: number
  page?: number
}

interface PaginationResult<T = any[]> {
  total: number
  lastPage: number
  list: T
}

interface FontItem {
  id: string
  key: string
  value: string
  group: string
  createTime: number
  updateTime: number
}

interface GroupItem {
  id: string
  label: string
  prefix: string
  createTime: number
  updateTime: number
}
