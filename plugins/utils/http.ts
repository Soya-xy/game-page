import type { $Fetch, FetchContext, FetchOptions } from 'ofetch'
import { createConsola } from 'consola'

function createLogger(logLevel: number) {
  const envSuffix = import.meta.env.SSR ? 'ssr' : 'csr'
  const loggerName = `AFUN:${envSuffix}`

  return createConsola({ level: logLevel }).withTag(loggerName)
}

const logger = createLogger(1)
export function createHttpClient(isServer: boolean): $Fetch {
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()
  const { isPc } = useDevice()
  const { openRouterModal } = useModal()

  const httpOptions: FetchOptions = {
    baseURL: config.public.appUrl,

    async onRequest({ options }: FetchContext): Promise<void> {
      if (isServer) {
        options.baseURL = '/'
      }

      logger.info('Request:', options)
    },

    async onResponse({ response }: FetchContext) {
      if (response?._data?.code === 401) {
        if (isPc) {
          openRouterModal('login')
        }
        else {
          await nuxtApp.runWithContext(() => navigateTo('/login'))
        }
      }

      if (response?._data?.code === 0) {
        return response._data.data
      }
    },

    async onResponseError({ response }): Promise<void> {
      console.log('🚀 ~ onResponseError ~ response:', response)
      if (response.status === 419) {
        logger.warn('CSRF token mismatch, check your API configuration')
        return
      }

      if (response.status === 401) {
        await nuxtApp.runWithContext(
          async () =>
            await navigateTo('/login'),
        )
      }
    },
  }

  return $fetch.create(httpOptions) as $Fetch
}
