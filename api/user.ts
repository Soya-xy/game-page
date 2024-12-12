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

export interface UserInfo {
  id: number
  nickname: string
  avatar: string
  mobile: string
  mobileBind: boolean
  verifyMobile: boolean
  sex: number | null
  giveAmountPoint: number
  registerTime: number
  birth: number | null
  account: string
  cpf: string | null
  email: string | null
  emailBind: boolean
  realName: string | null
  userVip: { vipLevel: number, vipCoin: number, nextCoin: number }
  userFavoriteThreeGames: any
}

export async function register(body: RegisterData) {
  const { $clientApi } = useNuxtApp()
  return $clientApi('/member/auth/register', {
    method: 'POST',
    body,
  })
}
