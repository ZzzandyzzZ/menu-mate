import type { WeekDays } from '.'
import type { ProposerNames } from '..'

export interface Auth {
  id: UUID
  accepted: boolean
  mealName: string
  imageUrl: string
  proposerName: ProposerNames | ''
  weekday: WeekDays | ''
}

export interface JwtData {
  proposerName: ProposerNames
  roomId: string
  role?: string
}
