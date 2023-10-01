import type { Meal } from '.'

export interface MealService {
  getMealById: (mealId: string) => Promise<Meal>
  getMeals: () => Promise<Meal[]>
  startMealCreation: (newMealFormData: NewMealFormData) => Promise<void>
  startMealUpdate: (edditableMeal: EdditableMeal) => Promise<void>
}
