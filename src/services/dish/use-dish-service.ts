import { _startDishCreation } from './start-dish-creation'
import { _startDishesFetching } from './start-dishes-fetching'
import { _startDishUpdate } from './start-dish-update'
import { getNotionDishRepository } from '@/repositories'
import { useDishStore } from '@/store'

import type { EdditableDish, NewDishFormData } from '@/types'

const store = useDishStore
const repository = getNotionDishRepository()

export const useDishService = () => {
  const startDishesFetching = async () => {
    await _startDishesFetching({ repository, store })
  }
  const startDishCreation = async (newDishFormData: NewDishFormData) => {
    await _startDishCreation({ repository, store, newDishFormData })
  }

  const startDishUpdate = async (edditableDish: EdditableDish) => {
    await _startDishUpdate({ repository, store, edditableDish })
  }

  return {
    startDishCreation,
    startDishesFetching,
    startDishUpdate
  }
}
