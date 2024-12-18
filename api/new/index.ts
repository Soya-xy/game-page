/**
 * 资源配置
 */
export async function asyncNotifacationList(type: string | number) {
  return useNuxtApp().$clientApi('/system/notice/page', {
    params: {
      type,
    },
  })
}
