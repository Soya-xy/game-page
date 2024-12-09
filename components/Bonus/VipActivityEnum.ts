export enum ActivityTypeEnum {
  CrazyGachapon = 1, // 扭蛋
  CheckIn = 2, // 签到
  RewardsRain = 3, // 红包雨
  InviteWheel = 4, // 邀请转盘
  DailyReward = 5, // Vip日福利
  LevelReward = 6, // Vip升级奖励
  WeeklyReward = 7, // Vip周福利
  MonthlyReward = 8, // Vip月福利
}

export const activityTypeMap = {
  [ActivityTypeEnum.CrazyGachapon]: {
    id: ActivityTypeEnum.CrazyGachapon,
    title: 'Crazy Gachapon',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/gachapon.png',
    color: '#f92298',
    content: {
      'Remaining times': 0,
      'Cards': 1,
    },
  },
  [ActivityTypeEnum.CheckIn]: {
    id: ActivityTypeEnum.CheckIn,
    title: 'Check In',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/checkin.png',
    color: '#ff1f1a',
    content: {
      Counts: 0,
      Wager: 1,
    },
  },
  [ActivityTypeEnum.RewardsRain]: {
    id: ActivityTypeEnum.RewardsRain,
    title: 'Rewards Rain',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/redpacket.png',
    color: '#ff1f1a',
    content: {
      Counts: 0,
      Wager: 1,
    },
  },
  [ActivityTypeEnum.InviteWheel]: {
    id: ActivityTypeEnum.InviteWheel,
    title: 'Invite Wheel',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/pdd.png',
    color: '#02fffb',
    content: {
      'Spins available': 0,
      'Progress': 1,
    },
  },
  [ActivityTypeEnum.DailyReward]: {
    id: ActivityTypeEnum.DailyReward,
    title: 'Daily Rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_day_bonus.png',
    color: '#02fffb',
    content: {
      'Wager': 0,
      'Daily Rewards': 1,
    },
  },
  [ActivityTypeEnum.LevelReward]: {
    id: ActivityTypeEnum.LevelReward,
    title: 'Level up rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_upgrade.png',
    color: '#ffd900',
    content: {
      'Wager': 0,
      'Level Rewards': 1,
    },
  },
  [ActivityTypeEnum.WeeklyReward]: {
    id: ActivityTypeEnum.WeeklyReward,
    title: 'Weekly Rewards',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_weekly.png',
    color: '#ffd900',
    content: {
      'Wager': 0,
      'Weekly Rewards': 1,
    },
  },
  [ActivityTypeEnum.MonthlyReward]: {
    id: ActivityTypeEnum.MonthlyReward,
    title: 'Rewards Harian',
    image: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_month_bonus.png',
    color: '#ffd900',
    content: {
      'Wager': 0,
      'Monthly Rewards': 1,
    },
  },
}
