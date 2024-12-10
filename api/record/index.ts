import type { RecordList } from './types'

const RecordListUrl = 'member/point/record/list-all-simple'
const RecordPageUrl = 'member/point/record/page'

export async function getRecordList() {
  return useNuxtApp().$clientApi<RecordList[]>(RecordListUrl)
}

export async function asyncRecordList() {
  return useAPI<RecordList[]>(RecordListUrl)
}

export async function getRecordPage() {
  return useNuxtApp().$clientApi<RecordList[]>(RecordPageUrl)
}
