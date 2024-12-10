import type { Option, Page, PageData } from '../type'
import type { RecordList, RecordPage } from './types'

const RecordListUrl = 'member/point/record/list-all-simple'
const RecordOptionsUrl = 'member/point-biz/list-all-simple'
const RecordPageUrl = 'member/point/record/page'

export async function getRecordList() {
  return useNuxtApp().$clientApi<RecordList[]>(RecordListUrl)
}
export async function getRecordOptions() {
  return useNuxtApp().$clientApi<Option[]>(RecordOptionsUrl)
}

export async function asyncRecordList() {
  return useAPI<RecordList[]>(RecordListUrl)
}

export async function getRecordPage(params: Page & { bonusCode?: string | number }) {
  return useNuxtApp().$clientApi<PageData<RecordPage>>(RecordPageUrl, {
    params,
  })
}
