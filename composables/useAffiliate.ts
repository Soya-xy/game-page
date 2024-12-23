import type { AffiliateActivity, AffiliateCode, AffiliateLevel, AffiliateRecord, AffiliateSummary } from '~/api/affiliate/type'
import { getAffiliateActivity, getAffiliateCode, getAffiliateLevel, getAffiliateMaxReward, getAffiliateRecord, getAffiliateSummary } from '~/api/affiliate'

export const useAffiliate = defineStore('affiliate', () => {
  const summary = ref<AffiliateSummary>()
  const code = ref<AffiliateCode>()
  const activity = ref<AffiliateActivity[]>()
  const maxReward = ref<number>(0)
  const record = ref<AffiliateRecord>()
  const level = ref<AffiliateLevel[][]>()

  const userStore = useUserStore()
  const { token } = storeToRefs(userStore)

  async function init() {
    try {
      const activityData = await getAffiliateActivity()
      const recordData = await getAffiliateRecord()
      record.value = recordData
      activity.value = activityData

      if (!token.value)
        return
      const summaryData = await getAffiliateSummary()
      const codeData = await getAffiliateCode()
      const maxRewardData = await getAffiliateMaxReward()
      const levelData = await getAffiliateLevel()

      // 找出levelData中gameCategory一样的并合并成一个对象数组 and 按tier排序
      const levelMap = levelData.reduce((acc, item) => {
        if (acc[item.gameCategory]) {
          acc[item.gameCategory]!.push(item)
        }
        else {
          acc[item.gameCategory] = [item]
        }
        return acc
      }, {} as Record<string, AffiliateLevel[]>)

      const levelList = Object.values(levelMap).map((item) => {
        item.sort((a, b) => a.tier - b.tier)
        return item
      })
      summary.value = summaryData
      code.value = codeData
      maxReward.value = maxRewardData
      level.value = levelList
    }
    catch (error) {
      console.error(error)
    }
  }
  return {
    summary,
    code,
    activity,
    maxReward,
    record,
    level,
    init,
  }
})
