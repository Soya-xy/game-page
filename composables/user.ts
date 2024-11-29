import { useToast } from '@/components/ui/toast/use-toast'
import { login as loginApi } from '~/api/user'

export const useUserStore = defineStore('user', () => {
  const user = ref()
  const token = ref()
  const { isPc } = useDevice()
  const { closeRouterModal } = useModal()
  const router = useRouter()
  const { toast } = useToast()

  const login = async (data: any) => {
    const res = await loginApi(data)
    if (res.code === 0) {
      const { $serverApi } = useNuxtApp()
      user.value = res.data
      token.value = res.data.token
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
        }
        else {
          router.back()
        }
        toast({
          title: 'Login Success',
        })
      }
      else {
        toast({
          title: 'Login Failed',
          description: 'Please try again',
          bgColor: 'bg-red-500',
        })
      }
    }
  }
  return { user, login, token }
})
