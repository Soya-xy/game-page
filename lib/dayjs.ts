import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
// Initialize dayjs
export function initializeDayjs() {
  dayjs.extend(duration)
  dayjs.extend(relativeTime)
  dayjs.extend(localizedFormat)
}

export function formatTime(time: string | number | Date) {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}

// 获取月份
export function getMonth(time: number) {
  return dayjs(time).format('MMMM')
}

// 获取日期
export function getDay(time: number) {
  return dayjs(time).format('DD')
}

// 判断是否是相同的一天
export function isSameDay(time1: Date, time2?: Date) {
  if (dayjs(time2).year() < 2000)
    return false

  return dayjs(time1).isSame(dayjs(time2), 'day')
}

// 获取时间AM/PM
export function getAPMTime(time: number) {
  return dayjs(time).format('HH:mmA')
}
