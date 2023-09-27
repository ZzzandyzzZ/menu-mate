import type { Meal } from '.'

export interface MealService {
  startMealCreation: (newMealFormData: NewMealFormData) => Promise<void>
  startMealUpdate: (edditableMeal: EdditableMeal) => Promise<void>
  getMeals: (roomId: string) => Promise<Meal[]>
}
