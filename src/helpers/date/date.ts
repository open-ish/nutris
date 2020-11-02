import { Alerts } from '@/enums/alerts'
import { Label } from '@/enums/label'
import dayjs from 'dayjs'

export function formatDate(date: string | Date | number) {
  const formatedDate = dayjs(date).format(Label.fullDate)
  const isInvalidDate = Alerts.DayjsInvalidDate

  return formatedDate !== isInvalidDate && formatedDate ? formatedDate : ''
}

export function timestamp(): number {
  return new Date().getTime()
}
