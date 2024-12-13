import type { PageData } from '../type'
import type { AffiliateActivity, AffiliateCode, AffiliateInvite, AffiliateLevel, AffiliateRecord, AffiliateSummary } from './type'

export const affiliateSummaryUrl = 'trade/brokerage-user/get-summary'
export const affiliateCodeUrl = 'trade/config/get'
export const affiliateActivityUrl = 'trade/invitation-activity/activity-List'
export const affiliateMaxRewardUrl = 'trade/commission-reward/get-max-rewardPercentage'
export const affiliateRecordUrl = 'trade/brokerage-record/list'
export const affiliateLevelUrl = 'trade/commission-reward/list'
export const affiliateInvitePageUrl = 'trade/brokerage-withdraw/page'

export async function getAffiliateSummary() {
  return useNuxtApp().$clientApi<AffiliateSummary>(affiliateSummaryUrl)
}

export async function getAffiliateCode() {
  return useNuxtApp().$clientApi<AffiliateCode>(affiliateCodeUrl)
}

export async function getAffiliateActivity() {
  return useNuxtApp().$clientApi<AffiliateActivity[]>(affiliateActivityUrl)
}

export async function getAffiliateMaxReward() {
  return useNuxtApp().$clientApi<number>(affiliateMaxRewardUrl)
}

export async function getAffiliateRecord() {
  return useNuxtApp().$clientApi<AffiliateRecord>(affiliateRecordUrl)
}

export async function getAffiliateLevel() {
  return useNuxtApp().$clientApi<AffiliateLevel[]>(affiliateLevelUrl)
}

export async function getAffiliateInvitePage(params: URLSearchParams) {
  return useNuxtApp().$clientApi<PageData<AffiliateInvite>>(`${affiliateInvitePageUrl}?${params.toString()}`)
}
