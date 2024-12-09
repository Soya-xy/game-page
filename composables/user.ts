import { useToast } from '@/components/ui/toast/use-toast'
import { login as loginApi, register as registerApi } from '~/api/user'

export const useUserStore = defineStore('user', () => {
  const user = ref(JSON.parse(localStorage.getItem('user') || '{}') || undefined)
  const token = ref(localStorage.getItem('token') || undefined)
  const { isPc } = useDevice()
  const { closeRouterModal } = useModal()
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (res: any, isRefresh = false) => {
    if (res) {
      const { $serverApi } = useNuxtApp()
      user.value = res
      token.value = res.accessToken
      localStorage.setItem('token', res.accessToken)
      localStorage.setItem('user', JSON.stringify(res))
      localStorage.setItem('expiresTime', res.expiresTime)
      const data = await $serverApi('/api/login', {
        method: 'POST',
        body: res,
      })

      // 无感刷新
      if (isRefresh)
        return

      if (data) {
        if (isPc.value) {
          closeRouterModal()
        }
        toast({
          title: 'Success',
          class: 'bg-green',
        })
        setTimeout(() => {
          router.back()
        }, 1000)
      }
      else {
        toast({
          title: 'Failed',
          description: 'Please try again',
          class: 'bg-red',
        })
      }
    }
  }

  const login = async (data: any) => {
    const res = await loginApi(data)
    handleLogin(res)
  }

  const register = async (data: any) => {
    const res = await registerApi(data)
    handleLogin(res)
  }

  const refreshToken = async () => {
    const { $clientApi } = useNuxtApp()
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const res = await $clientApi('/member/auth/refresh-token', {
      method: 'POST',
      query: {
        refreshToken: user.refreshToken,
      },
    })
    handleLogin(res, true)
  }

  const logout = () => {
    user.value = undefined
    token.value = undefined
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const getUserInfo = async () => {
    const { $clientApi } = useNuxtApp()
    const res = await $clientApi('/member/user/get')
    user.value = res.data
  }

  return { user, login, register, token, refreshToken, handleLogin, logout, getUserInfo }
})
