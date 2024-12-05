import type { UseFetchOptions } from 'nuxt/app'

interface ApiResponse<T> {
  code: number
  data: T
  msg: string
}

export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
  isServer = false,
) {
  return useFetch(url, {
    ...options,
    $fetch: (isServer ? useNuxtApp().$serverApi : useNuxtApp().$clientApi) as typeof $fetch,
    transform: (data: ApiResponse<T>): T => {
      if (data.code === 0 && data.data) {
        return data.data as T
      }
      return data as T
    },
  })
}
