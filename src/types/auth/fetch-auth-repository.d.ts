export interface FetchAuthRepository {
  create: (newDish: NewDish) => Promise<Dish>
  getAll: () => Promise<Dish[]>
  update: (edditableDish: EdditableDish) => Promise<Dish>
}
