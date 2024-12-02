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
  password: string
  inviteCode?: string
}

export async function register(body: RegisterData) {
  const { $clientApi } = useNuxtApp()
  return $clientApi('/member/auth/register', {
    method: 'POST',
    body,
  })
}
