import type { WeekDays } from '.'

export interface Auth {
  id: UUID
  accepted: boolean
  mealName: string
  imageUrl: string
  proposerName: ProposerNames | ''
  weekday: WeekDays | ''
}
