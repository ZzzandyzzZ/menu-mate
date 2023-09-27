import type { EdditableMeal } from '..'

export interface MealRepository {
  getAll: (roomId: string) => Promise<Meal[]>
  update: (meal: EdditableMeal) => Promise<Meal>
  create: (meal: NewMeal) => Promise<Meal>
}
