import { getWeedayStringData } from '@/lib'
import { BaseService } from './base-service'

import type {
  EdditableMeal,
  MealService as IMealService,
  MealRepository,
  NewMeal,
  NewMealFormData
} from '@/types'
import type { UUID } from 'crypto'

export class MealService extends BaseService<MealRepository> implements IMealService {
  createMeal = async (newMealFormData: NewMealFormData) => {
    const { mealName, weekday, imageUrl, weekStartStr } = newMealFormData
    const { weekStartStr: currWeekStartStr, weekdayStr } = getWeedayStringData(weekday)
    const newMeal: NewMeal = {
      mealName,
      imageUrl,
      accepted: false,
      weekday: weekdayStr,
      weekStart: weekStartStr ?? currWeekStartStr
    }
    return await this.repository.create(newMeal)
  }

  updateMeal = async (edditableMeal: EdditableMeal) => {
    const { weekday } = edditableMeal
    if (weekday != null && weekday !== '') {
      const { weekStartStr, weekdayStr } = getWeedayStringData(weekday)
      edditableMeal = { ...edditableMeal, weekStartStr, weekdayStr }
    }
    return await this.repository.update(edditableMeal)
  }

  getMeals = async () => {
    return await this.repository.getAll()
  }

  getMealById = async (mealId: UUID) => {
    return await this.repository.getById(mealId)
  }

  deleteMealById = async (mealId: UUID) => {
    return await this.repository.delete(mealId)
  }
}
