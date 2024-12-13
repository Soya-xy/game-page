import type { Wallet } from './type'

const walletUrl = 'pay/wallet/get'
export async function getWallet() {
  return useNuxtApp().$clientApi<Wallet>(walletUrl)
}
