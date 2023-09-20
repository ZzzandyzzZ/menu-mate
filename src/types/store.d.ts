import type { ProposerNames } from '.'

export interface State {
  dishes: Dish[]
  currDish: number
  roomId: string | null
  proposerName: ProposerNames | null
}

export interface Store {
  dishes: Dish[]
  currDish: number
  fetchDishes: () => Promise<void>
}
