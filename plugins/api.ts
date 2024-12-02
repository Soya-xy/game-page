import { createHttpClient } from './utils/http'

export default defineNuxtPlugin(() => {
  const serverApi = createHttpClient(true)
  const clientApi = createHttpClient(false)

  return {
    provide: {
      serverApi,
      clientApi,
    },
  }
})
