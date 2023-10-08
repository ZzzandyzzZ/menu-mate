import type {
  CreatePageResponse,
  UpdatePageResponse
} from '@notionhq/client/build/src/api-endpoints'
import type { UUID } from 'crypto'
import type { EdditableMeal, Meal, NewMeal } from '..'

export interface MealRepository {
  create: (meal: NewMeal) => Promise<CreatePageResponse>
  delete: (mealId: UUID) => Promise<UpdatePageResponse>
  getAll: () => Promise<Meal[]>
  getById: (mealId: UUID) => Promise<Meal | null>
  update: (meal: EdditableMeal) => Promise<UpdatePageResponse>
}
