import { errorLogger, getWeedayStringData } from '@/lib'

import type { StoreApi, UseBoundStore } from 'zustand'
import type {
  DishRepository,
  StoreState,
  EdditableDish,
  NewDish,
  NewDishFormData,
  DishService as IDishService
} from '@/types'

export class DishService implements IDishService {
  private readonly repository: DishRepository
  private readonly store: UseBoundStore<StoreApi<StoreState>>

  constructor(repository: DishRepository, store: UseBoundStore<StoreApi<StoreState>>) {
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
    const { weekStartStr, weekdayStr } = getWeedayStringData(weekday)
    const newDish: NewDish = {
      dishName,
      imageUrl,
      roomId,
      accepted: false,
      proposerName,
      weekday: weekdayStr,
      weekStart: weekStartStr
    }

    await this.handleErrorsAsync(async () => {
      const dish = await this.repository.create(newDish)
      this.store.setState(() => ({
        currDishId: dish.id
      }))
    })
  }

  startDishUpdate = async (edditableDish: EdditableDish) => {
    await this.handleErrorsAsync(async () => {
      const { weekday } = edditableDish
      if (weekday != null && weekday !== '') {
        const { weekStartStr, weekdayStr } = getWeedayStringData(weekday)
        edditableDish = { ...edditableDish, weekStartStr, weekdayStr }
      }
      const currDish = await this.repository.update(edditableDish)
      this.store.setState(() => ({
        currDishId: currDish.id
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
