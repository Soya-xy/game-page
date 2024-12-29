import { isClient } from '@vueuse/core'
import { path } from 'ramda'
// 替换 enum 为 const 对象
export const ActivityType = {
  CrazyGachapon: 3, // 扭蛋
  InviteWheel: 13, // 邀请转盘
  CheckIn: 6, // 签到转盘
  LevelReward: 8, // 等级奖励
  MonthlyReward: 5, // 月度奖励
  DailyReward: 4, // 每日奖励
  WeeklyReward: 7, // 周度奖励
} as const

// 创建类型
export type ActivityTypeKeys = keyof typeof ActivityType
export type ActivityTypeValues = (typeof ActivityType)[ActivityTypeKeys]

function getUserLevel() {
  if (isClient) {
    const userInfo = localStorage.getItem('userInfo')
    const level = userInfo ? JSON.parse(userInfo).userVip.vipLevel : 0
    return level
  }
  return 1
}

function getNextLevel(): string {
  const level = getUserLevel()
  const nextLevel = level + 1
  return `XP to VIP${nextLevel}`
}

export const activityTypeMap = {
  [ActivityType.CrazyGachapon]: {
    id: ActivityType.CrazyGachapon,
    title: 'Crazy Gachapon',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/gachapon.png',
    color: '#f92298',
    content: {
      'Remaining times': { key: 'chaperonGrandPrize.remainingTimes' },
      'Cards': { key: 'chaperonGrandPrize.cards' },
    },
  },
  [ActivityType.CheckIn]: {
    id: ActivityType.CheckIn,
    title: 'Check In',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/checkin.png',
    color: '#ff1f1a',
    content: {
      Counts: [{ key: 'checkIn.currentCheck' }, { key: 'checkIn.targetCheck' }],
      Deposit: [{ key: 'checkIn.currentDeposit', toCurrency: true }, { key: 'checkIn.targetDeposit' }],
    },
  },
  [ActivityType.InviteWheel]: {
    id: ActivityType.InviteWheel,
    title: 'Invite Wheel',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/pdd.png',
    color: '#02fffb',
    content: {
      'Spins available': { key: 'inviteWheel.spinsAvailable' },
      'Progress': [{ key: 'inviteWheel.current', toCurrency: true }, { key: 'inviteWheel.target' }],
    },
  },
  [ActivityType.DailyReward]: {
    id: ActivityType.DailyReward,
    title: 'Daily Rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_day_bonus.png',
    color: '#02fffb',
    content: {
      'Wager': { key: 'dailyRewardsRespVO.wager', toCurrency: true },
      'Daily Rewards': { key: 'dailyRewardsRespVO.dailyRewards', toCurrency: true },
    },
  },
  [ActivityType.LevelReward]: {
    id: ActivityType.LevelReward,
    title: 'Level up rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_upgrade.png',
    color: '#ffd900',
    content: {
      [getNextLevel()]: [{ key: 'levelUpRewards.current' }, { key: 'levelUpRewards.target' }],
      'Next Level Rewards': { key: 'levelUpRewards.rewards', toCurrency: true },
    },
  },
  [ActivityType.WeeklyReward]: {
    id: ActivityType.WeeklyReward,
    title: 'Weekly Rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_weekly.png',
    color: '#ffd900',
    content: {
      'Wager': { key: 'weeklyRewardsRespVO.wager', toCurrency: true },
      'Weekly Rewards': { key: 'weeklyRewardsRespVO.rewards', toCurrency: true },
    },
  },
  [ActivityType.MonthlyReward]: {
    id: ActivityType.MonthlyReward,
    title: 'Rewards Harian',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_month_bonus.png',
    color: '#ffd900',
    content: {
      'Wager': { key: 'monthlyRewardsRespVO.wager', toCurrency: true },
      'Monthly Rewards': { key: 'monthlyRewardsRespVO.rewards', toCurrency: true },
    },
  },

  // [ActivityType.RewardsRain]: {
  //   id: ActivityType.RewardsRain,
  //   title: 'Rewards Rain',
  //   image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/redpacket.png',
  //   color: '#ff1f1a',
  //   content: {
  //     Counts: 0,
  //     Wager: 1,
  //   },
  // },
}

export function getActivityDetail(id: ActivityTypeValues, data: any) {
  if (!data)
    return ''
  const content: any = activityTypeMap[id].content
  const keys = Object.keys(content)
  let html = ''
  keys.forEach((key) => {
    const item = content[key]
    let value
    if (!Array.isArray(item)) {
      value = `${item.toCurrency ? toCurrency(path(item.key.split('.'), data)) : path(item.key.split('.'), data)}`
    }
    else {
      value = item?.map((v: any) => `${v.toCurrency ? toCurrency(path(v.key.split('.'), data)) : path(v.key.split('.'), data)}`)
    }

    if (value === undefined || value === null)
      return ''

    html += `
      <div class="flex text-color shrink-0 justify-between ">
        <span>${key}</span>
        <div>
          <span style="white-space: pre; color: white;">${Array.isArray(value) ? value[0] : value}</span> 
          ${Array.isArray(value) ? `/ <span style="white-space: pre;">${value[1]}</span>` : ''}
        </div>
      </div>
  `
  })
  return html
}

// 转盘按钮
export function getSpinButton(data: any) {
  if (!data)
    return ''
  if (data?.inviteWheel?.spinsAvailable > 0) {
    return {
      type: 'details',
      text: 'Spin Now',
    }
  }
  else {
    return {
      type: 'details',
      text: 'Invite friends',
    }
  }
}

// 签到按钮
export function getCheckInButton(data: any) {
  if (!data)
    return ''
  return {
    type: 'details',
    text: 'Check In',
  }
}

// 月度奖励按钮
export function getMonthlyRewardButton(data: any) {
  if (!data)
    return ''
  if (data.unLockLv > getUserLevel()) {
    return {
      type: 'lock',
      text: `VIP${data.unLockLv} Unlocked`,
    }
  }
  else {
    return {
      type: 'claim',
      text: 'Claim',
    }
  }
}
