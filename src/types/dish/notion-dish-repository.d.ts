export type NotionProperties = Record<string, any>

export interface NotionDishRepository {
  create: (newDish: NewDish) => Promise<Dish>
  getAll: () => Promise<Dish[]>
  update: (edditableDish: EdditableDish) => Promise<Dish>
}
