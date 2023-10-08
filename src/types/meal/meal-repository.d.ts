import type {
  CreatePageResponse,
  UpdatePageResponse
} from '@notionhq/client/build/src/api-endpoints'
import type { EdditableMeal, Meal, NewMeal } from '..'

export interface MealRepository {
  create: (meal: NewMeal) => Promise<CreatePageResponse>
  getAll: () => Promise<Meal[]>
  getById: (mealId: string) => Promise<Meal | null>
  update: (meal: EdditableMeal) => Promise<UpdatePageResponse>
}
