import type { WeekDays } from '.'

export interface Meal {
  id: UUID
  accepted: boolean
  mealName: string
  imageUrl: string
  proposerName: ProposerNames | ''
  weekday: WeekDays | ''
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
}
