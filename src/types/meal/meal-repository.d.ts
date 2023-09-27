import type { EdditableMeal } from '..'

export interface MealRepository {
  getAll: () => Promise<Meal[]>
  update: (meal: EdditableMeal) => Promise<Meal>
  create: (meal: NewMeal) => Promise<Meal>
}
