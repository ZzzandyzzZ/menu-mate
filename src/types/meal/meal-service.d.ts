import type { Meal } from '.'

export interface MealService {
  getMealById: (mealId: string, roomId: string) => Promise<Meal>
  getMeals: (roomId: string) => Promise<Meal[]>
  startMealCreation: (newMealFormData: NewMealFormData) => Promise<void>
  startMealUpdate: (edditableMeal: EdditableMeal) => Promise<void>
}
