export const updateEmailUrl = '/member/user/update-email'
export const updatePhoneUrl = '/member/user/update-phone'
export const updatePasswordUrl = '/member/user/update-password'
export const verifyPhoneUrl = '/member/user/verify-mobile-number'
export const updateCpfUrl = '/member/user/update-cpf-birthday'
export const updateAccountUrl = '/member/user/update-loginName'
export const sendCodeToMobileUrl = '/member/auth/send-sms-code'

export async function sendCodeToMobile(mobile: string, scene: number) {
  return useNuxtApp().$clientApi(sendCodeToMobileUrl, {
    method: 'POST',
    body: {
      mobile,
      scene,
    },
  })
}

export async function updateEmail(email: string) {
  return useNuxtApp().$clientApi(updateEmailUrl, {
    method: 'PUT',
    body: {
      email,
    },
  })
}

export async function updatePhone(body: Record<string, any>) {
  return useNuxtApp().$clientApi(updatePhoneUrl, {
    method: 'PUT',
    body,
  })
}

export async function updatePassword(body: Record<string, any>) {
  return useNuxtApp().$clientApi(updatePasswordUrl, {
    method: 'PUT',
    body,
  })
}

export async function verifyPhone(body: Record<string, any>) {
  return useNuxtApp().$clientApi(verifyPhoneUrl, {
    method: 'PUT',
    body,
  })
}

export async function updateCpf(body: Record<string, any>) {
  return useNuxtApp().$clientApi(updateCpfUrl, {
    method: 'PUT',
    body,
  })
}

export async function updateAccount(loginName: string) {
  return useNuxtApp().$clientApi(updateAccountUrl, {
    method: 'PUT',
    body: {
      loginName,
    },
  })
}
