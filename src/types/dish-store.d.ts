import { ProposerNames } from '.'

export interface DishState {
  dishes: Dish[]
  currDish: number
  roomId: string | null
  proposerName: ProposerNames | null
}

export interface DishStore {
  dishes: Dish[]
  currDish: number
  fetchDishes: () => Promise<void>
}
