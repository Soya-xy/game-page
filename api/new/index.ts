/**
 * 资源配置
 */
export async function asyncNotificationList(type: string | number) {
  return useNuxtApp().$clientApi('/system/notice/page', {
    params: {
      type,
    },
  })
}
