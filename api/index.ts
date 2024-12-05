import type { AsyncDataOptions } from '#app'

export async function useMyAsyncData(key: string, fn: () => Promise<any>, params?: Record<string, any>, options?: AsyncDataOptions<any, any, any, any>) {
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
