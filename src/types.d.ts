type UUID = `${string}-${string}-${string}-${string}-${string}`
interface Dish {
  accepted: boolean
  weekday: WeekDays | ''
  dishName: string
  id: UUID
  imageUrl: string
  proposerName: ProposerNames | ''
}

type EdditableDish = Partial<Pick<Dish, Exclude<keyof Dish, 'id' | 'proposerName'>>>
