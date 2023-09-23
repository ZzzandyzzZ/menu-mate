import type { WeekDays } from '.'

export interface Auth {
  id: UUID
  accepted: boolean
  dishName: string
  imageUrl: string
  proposerName: ProposerNames | ''
  weekday: WeekDays | ''
}
