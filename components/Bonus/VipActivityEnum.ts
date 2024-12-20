// 替换 enum 为 const 对象
export const ActivityType = {
  CrazyGachapon: 1,
  CheckIn: 2,
  RewardsRain: 3,
  InviteWheel: 4,
  DailyReward: 5,
  LevelReward: 6,
  WeeklyReward: 7,
  MonthlyReward: 8,
} as const

// 创建类型
export type ActivityTypeKeys = keyof typeof ActivityType
export type ActivityTypeValues = (typeof ActivityType)[ActivityTypeKeys]

export const activityTypeMap = {
  [ActivityType.CrazyGachapon]: {
    id: ActivityType.CrazyGachapon,
    title: 'Crazy Gachapon',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/gachapon.png',
    color: '#f92298',
    content: {
      'Remaining times': 0,
      'Cards': 1,
    },
  },
  [ActivityType.CheckIn]: {
    id: ActivityType.CheckIn,
    title: 'Check In',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/checkin.png',
    color: '#ff1f1a',
    content: {
      Counts: 0,
      Wager: 1,
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
  [ActivityType.InviteWheel]: {
    id: ActivityType.InviteWheel,
    title: 'Invite Wheel',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/pdd.png',
    color: '#02fffb',
    content: {
      'Spins available': 0,
      'Progress': 1,
    },
  },
  [ActivityType.DailyReward]: {
    id: ActivityType.DailyReward,
    title: 'Daily Rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_day_bonus.png',
    color: '#02fffb',
    content: {
      'Wager': 0,
      'Daily Rewards': 1,
    },
  },
  [ActivityType.LevelReward]: {
    id: ActivityType.LevelReward,
    title: 'Level up rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_upgrade.png',
    color: '#ffd900',
    content: {
      'Wager': 0,
      'Level Rewards': 1,
    },
  },
  [ActivityType.WeeklyReward]: {
    id: ActivityType.WeeklyReward,
    title: 'Weekly Rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_weekly.png',
    color: '#ffd900',
    content: {
      'Wager': 0,
      'Weekly Rewards': 1,
    },
  },
  [ActivityType.MonthlyReward]: {
    id: ActivityType.MonthlyReward,
    title: 'Rewards Harian',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_month_bonus.png',
    color: '#ffd900',
    content: {
      'Wager': 0,
      'Monthly Rewards': 1,
    },
  },
}
