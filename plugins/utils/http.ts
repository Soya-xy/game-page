import type { $Fetch, FetchContext, FetchOptions } from 'ofetch'
import { useToast } from '@/components/ui/toast/use-toast'
import { createConsola } from 'consola'
import dayjs from 'dayjs'

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
  const { toast } = useToast()

  const httpOptions: FetchOptions = {
    baseURL: config.public.appUrl,

    async onRequest({ request, options }): Promise<void> {
      if (isServer) {
        options.baseURL = '/'
      }

      const expiresTime = localStorage.getItem('expiresTime')
      const token = localStorage.getItem('token')
      // 如果当前时间还有1分钟就过期，则重新刷新token
      if (
        dayjs().isAfter(dayjs(Number(expiresTime)).subtract(1, 'minute'))
        && !(request as string).includes('refresh-token')
        && token
      ) {
        await nuxtApp.runWithContext(async () => await useUserStore().refreshToken())
      }

      if (token) {
        options.headers.set('Authorization', `Bearer ${token}`)
      }

      options.headers.set('Accept-Language', useCookieLocale().value)

      logger.info('Request:', options)
    },

    async onResponse({ response }: FetchContext) {
      if (response) {
        if (response?._data?.code === 401) {
          if (isPc) {
            openRouterModal('login')
          }
          else {
            await nuxtApp.runWithContext(() => navigateTo('/login'))
          }
        }

        const data = response._data

        if (data?.code === 0) {
          return data.data
        }
        else {
          toast({
            title: '请求异常',
            description: data.msg,
            duration: 2000,
            bgColor: 'bg-red-500',
          })
        }
      }
    },

    async onResponseError({ response }): Promise<void> {
      if (response.status === 419) {
        logger.warn('CSRF token mismatch, check your API configuration')
      }
    },
  }

  return $fetch.create(httpOptions) as $Fetch
}
