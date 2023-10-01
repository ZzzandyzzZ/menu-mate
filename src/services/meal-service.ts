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
    const { roomId, proposerName } = this.store.getState()
    if (roomId == null || proposerName == null) throw Error('Invalid session, login')
    const newMeal: NewMeal = {
      mealName,
      imageUrl,
      roomId,
      accepted: false,
      proposerName,
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
    const { roomId } = this.store.getState()
    if (roomId == null) throw Error('Invalid session, login')
    return await this.repository.getAll(roomId)
  }

  getMealById = async (mealId: string) => {
    const { roomId } = this.store.getState()
    if (roomId == null) throw Error('Invalid session, login')
    return await this.repository.getById(mealId, roomId)
  }
}
