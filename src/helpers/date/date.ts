import { Alerts } from '@/enums/alerts'
import { Label } from '@/enums/label'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export function formatDate(date: string | Date | number) {
  const formatedDate = dayjs(date).format(Label.fullDate)
  const isInvalidDate = Alerts.DayjsInvalidDate

  return formatedDate !== isInvalidDate && formatedDate ? formatedDate : ''
}

export function timestamp(): number {
  return new Date().getTime()
}

export function getAge(date: string | number) {
  dayjs.extend(relativeTime)
  const isOnlyValue = true
  console.log(dayjs(date).fromNow(isOnlyValue))
  return dayjs(date)
    .fromNow(isOnlyValue)
    .split(' ')[0]
}
