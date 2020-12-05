import { Diet } from '@/models/Diet'

export interface Snapshot {
  id: string
  data: () => any
}
