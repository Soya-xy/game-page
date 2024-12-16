export type ModuleType = 'banner' | 'BigWins' | 'CSL' | 'game' | 'Withdraw' | 'Deposit' | 'Casino' | 'Sports' | 'LatestBet'

export const Component: Record<ModuleType, Promise<Component>> = {
  banner: import('~/components/Home/Swiper.vue'),
  BigWins: import('~/components/Home/Recent.vue'),
  CSL: import('~/components/Home/Card.vue'),
  game: import('~/components/Base/Game/List.vue'),
  Withdraw: import('~/components/Home/Withdraw.vue'),
  Deposit: import('~/components/Base/Deposit.vue'),
  Casino: import('~/components/Home/PrizePool.vue'),
  Sports: import('~/components/Home/Live.vue'),
  LatestBet: import('~/components/Home/LatestBet.vue'),
}
