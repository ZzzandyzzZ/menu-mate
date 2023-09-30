import type { EdditableMeal } from '..'

export interface MealRepository {
  create: (meal: NewMeal) => Promise<Meal>
  getAll: (roomId: string) => Promise<Meal[]>
  getById: (mealId: string, roomId: string) => Promise<Meal | null>
  update: (meal: EdditableMeal) => Promise<Meal>
}
