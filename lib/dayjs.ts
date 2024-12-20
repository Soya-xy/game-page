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

export function formatTime(time: string) {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}
