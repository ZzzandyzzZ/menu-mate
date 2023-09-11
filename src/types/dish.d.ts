import { WeekDays } from '.'

export interface Dish {
  id: UUID
  accepted: boolean
  dishName: string
  imageUrl: string
  proposerName: ProposerNames | ''
  weekday: WeekDays | ''
}

type EdditableDish = Partial<Pick<Dish, Exclude<keyof Dish, 'id' | 'proposerName'>>>

interface NewDish extends Dish {
  roomId: string
  weekStart: string
  weekday: string
}

interface NewDishFormData {
  dishName: string
  weekday: WeekDays
  imageUrl: string
}
