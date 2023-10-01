import type {
  CreatePageResponse,
  UpdatePageResponse
} from '@notionhq/client/build/src/api-endpoints'
import type { EdditableMeal, Meal, NewMealFormData } from '.'

export interface MealService {
  getMealById: (mealId: string) => Promise<Meal | null>
  getMeals: () => Promise<Meal[]>
  updateMeal: (edditableMeal: EdditableMeal) => Promise<UpdatePageResponse>
  createMeal: (newMealFormData: NewMealFormData) => Promise<CreatePageResponse>
}
