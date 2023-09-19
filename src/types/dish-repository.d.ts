import type { EdditableDish } from '.'

interface DishRepository {
  getAll: () => Promise<Dish[]>
  update: (dish: EdditableDish) => Promise<Dish>
  create: (dish: NewDish) => Promise<Dish>
}
