import type { AsyncData, AsyncDataOptions } from '#app'
import { useNuxtApp } from '#app'

export async function useMyAsyncData(key: string, url: string, params?: Record<string, any>, options?: AsyncDataOptions<any, any, any, any>) {
  const { $clientApi, $serverApi } = useNuxtApp()
  let fn: () => Promise<any>

  if (options?.server) {
    fn = () => $serverApi(url, params)
  }
  else {
    fn = () => $clientApi(url, params)
  }
  return useAsyncData(key, fn, {
    transform: (data) => {
      if (data.code === 0) {
        return data.data
      }
      return []
    },
    ...options,
  })
}

export async function getHomeData(): Promise<AsyncData<any, any>> {
  return useMyAsyncData('getHomeData', '/api/getHomeData', undefined, {
    server: true,
  })
}

export async function getSportData() {
  return useMyAsyncData('getSportData', '/promotion/homepage-layout/home-module-sports')
}

export async function getGameData(id: string, params?: Record<string, any>, options?: AsyncDataOptions<any, any, any, any>) {
  return useMyAsyncData(`getGameData-${id}`, '/promotion/homepage-layout/home-module-data', {
    params,
  }, options)
}
