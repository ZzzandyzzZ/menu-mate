import type { WeekDays } from '.'

export interface Dish {
  id: UUID
  accepted: boolean
  dishName: string
  imageUrl: string
  proposerName: ProposerNames | ''
  weekday: WeekDays | ''
}

export type EdditableDish = Partial<Omit<Dish, 'proposerName'>> & {
  id: UUID
}

interface NewDish extends Omit<Dish, 'id'> {
  roomId: string
  weekStart: string
  weekday: string
}

interface NewDishFormData {
  dishName: string
  weekday: WeekDays
  imageUrl: string
}
