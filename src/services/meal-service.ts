import { getWeedayStringData } from '@/lib'
import { BaseService } from './base-service'

import type {
  MealRepository,
  EdditableMeal,
  NewMeal,
  NewMealFormData,
  MealService as IMealService
} from '@/types'

export class MealService extends BaseService<MealRepository> implements IMealService {
  startMealCreation = async (newMealFormData: NewMealFormData) => {
    const roomId = this.store.getState().roomId
    const proposerName = this.store.getState().proposerName
    if (roomId == null || proposerName == null) throw Error('Invalid session, login')
    const { mealName, weekday, imageUrl } = newMealFormData
    const { weekStartStr, weekdayStr } = getWeedayStringData(weekday)
    const newMeal: NewMeal = {
      mealName,
      imageUrl,
      roomId,
      accepted: false,
      proposerName,
      weekday: weekdayStr,
      weekStart: weekStartStr
    }

    await this.handleErrorsAsync(async () => {
      const meal = await this.repository.create(newMeal)
      this.store.setState(() => ({
        currMealId: meal.id
      }))
    })
  }

  startMealUpdate = async (edditableMeal: EdditableMeal) => {
    await this.handleErrorsAsync(async () => {
      const { weekday } = edditableMeal
      if (weekday != null && weekday !== '') {
        const { weekStartStr, weekdayStr } = getWeedayStringData(weekday)
        edditableMeal = { ...edditableMeal, weekStartStr, weekdayStr }
      }
      const currMeal = await this.repository.update(edditableMeal)
      this.store.setState(() => ({
        currMealId: currMeal.id
      }))
    })
  }

  getMeals = async (roomId: string) => {
    return await this.repository.getAll(roomId)
  }
}
