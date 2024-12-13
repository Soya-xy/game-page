/**
 * 下载
 */
export async function asyncInstall(platform: string) {
  return useNuxtApp().$clientApi('/help/app-versions/get-app', {
    params: {
      platform,
    },
  })
}
/**
 * 下载记录
 */
export async function asyncInstallRecords(platform: string) {
  return useNuxtApp().$clientApi('/help/app-download-records/create-download-records', {
    method: 'post',
    params: {
      platform,
    },
  })
}
