export interface Page {
  pageNo: number
  pageSize: number
}

export interface ID {
  id: string
}

export interface ParentId {
  parentId: number
}

export interface PicUrl {
  picUrl: string
  name: string
}

export interface Option {
  label: string
  value: string
  [key: string]: any
}

export interface PageData<T> {
  list: T[]
  total: number
}
