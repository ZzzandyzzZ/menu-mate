import type { UUID } from 'crypto'
import type { WeekDays } from '.'

type WeekStart = `${number}-${'0' | '1'}${number}-${'0' | '1' | '2' | '3'}${number}`
export interface Meal {
  id: UUID
  accepted: boolean
  mealName: string
  imageUrl: string
  proposerName: ProposerNames | ''
  weekday: WeekDays | ''
  weekStart: WeekStart
}

export type EdditableMeal = Partial<Omit<Meal, 'proposerName'>> & {
  id: UUID
  weekdayStr?: string
  weekStartStr?: string
}

interface NewMeal extends Omit<Meal, 'id' | 'proposerName'> {
  weekStart: string
  weekday: string
}

interface NewMealFormData {
  mealName: string
  weekday: WeekDays
  imageUrl: string
  weekStartStr?: string
}
