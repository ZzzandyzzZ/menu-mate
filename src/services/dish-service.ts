import { getDateFromWeeday, getMondayDate, errorLogger } from '@/lib'

import type { DishRepository, DishState, EdditableDish, NewDish, NewDishFormData } from '@/types'
import type { StoreApi, UseBoundStore } from 'zustand'

export class DishService {
  private readonly repository: DishRepository
  private readonly store: UseBoundStore<StoreApi<DishState>>

  constructor(repository: DishRepository, store: UseBoundStore<StoreApi<DishState>>) {
    this.repository = repository
    this.store = store
  }

  private async handleErrorsAsync<T>(fn: () => Promise<T>) {
    try {
      return await fn()
    } catch (error) {
      errorLogger(error)
    }
  }

  startDishCreation = async (newDishFormData: NewDishFormData) => {
    const roomId = this.store.getState().roomId
    const proposerName = this.store.getState().proposerName
    if (roomId == null || proposerName == null) throw Error('Invalid session, login')
    const { dishName, weekday, imageUrl } = newDishFormData
    const weekdayDate = getDateFromWeeday(weekday)
    const newDish: NewDish = {
      dishName,
      imageUrl,
      roomId,
      accepted: false,
      proposerName,
      weekday: weekdayDate.toLocaleString('sv'),
      weekStart: getMondayDate(weekdayDate).toLocaleString('sv')
    }

    await this.handleErrorsAsync(async () => {
      const dish = await this.repository.create(newDish)
      this.store.setState(() => ({
        currDish: dish.id
      }))
    })
  }

  startDishUpdate = async (edditableDish: EdditableDish) => {
    await this.handleErrorsAsync(async () => {
      const currDish = await this.repository.update(edditableDish)
      this.store.setState(() => ({
        currDish: currDish.id
      }))
    })
  }

  startDishesFetching = async () => {
    await this.handleErrorsAsync(async () => {
      const dishes = await this.repository.getAll()
      this.store.setState(() => ({
        dishes
      }))
    })
  }
}
