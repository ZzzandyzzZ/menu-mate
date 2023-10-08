import { getWeedayStringData } from '@/lib'
import { BaseService } from './base-service'

import type {
  EdditableMeal,
  MealService as IMealService,
  MealRepository,
  NewMeal,
  NewMealFormData
} from '@/types'

export class MealService extends BaseService<MealRepository> implements IMealService {
  createMeal = async (newMealFormData: NewMealFormData) => {
    const { mealName, weekday, imageUrl } = newMealFormData
    const { weekStartStr, weekdayStr } = getWeedayStringData(weekday)
    const newMeal: NewMeal = {
      mealName,
      imageUrl,
      accepted: false,
      weekday: weekdayStr,
      weekStart: weekStartStr
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

  getMealById = async (mealId: string) => {
    return await this.repository.getById(mealId)
  }
}
