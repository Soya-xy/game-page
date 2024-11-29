import type { AsyncData } from '#app'
import { useMyAsyncData } from '.'

interface LoginData {
  mobile: string
  code: string
  socialType?: string
  socialCode?: string
  socialState?: string
}

export async function login(body: LoginData) {
  const { $clientApi } = useNuxtApp()
  return $clientApi('/member/auth/login', {
    method: 'POST',
    body,
  })
}

interface RegisterData {
  mobile: string
  code: string
}

export async function register(data: RegisterData): Promise<AsyncData<any, any>> {
  return useMyAsyncData('register', '/member/auth/register', {
    method: 'POST',
    body: data,
  })
}
