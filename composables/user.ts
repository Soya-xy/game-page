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
    if (res.code === 0) {
      const { $serverApi } = useNuxtApp()
      user.value = res.data
      token.value = res.data.accessToken
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('user', JSON.stringify(res.data))
      localStorage.setItem('expiresTime', res.data.expiresTime)
      const data = await $serverApi('/api/login', {
        method: 'POST',
        body: res.data,
      })
      if (data) {
        if (isPc.value) {
          closeRouterModal()
          router.back()
        }
        else {
          router.back()
        }
        if (!isRefresh) {
          toast({
            title: 'Success',
            bgColor: 'bg-green-500',
          })
        }
      }
      else {
        toast({
          title: 'Failed',
          description: 'Please try again',
          bgColor: 'bg-red-500',
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
    console.log('🚀 ~ getUserInfo ~ res:', res)
    user.value = res.data
  }

  return { user, login, register, token, refreshToken, handleLogin, logout, getUserInfo }
})
