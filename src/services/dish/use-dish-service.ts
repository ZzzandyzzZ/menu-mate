import { useNotionDishRepository } from '@/repositories'
import { useDishStore } from '@/store'
import { _startDishesFetching } from './start-dishes-fetching'
import { _startDishCreation } from './start-dish-creation'

import type { NewDishFormData } from '@/types'

export const useDishService = () => {
  const store = useDishStore
  const repository = useNotionDishRepository()

  const startDishesFetching = async () => {
    await _startDishesFetching({ repository, store })
  }
  const startDishCreation = async (newDishFormData: NewDishFormData) => {
    await _startDishCreation({ repository, store, newDishFormData })
  }

  return {
    startDishCreation,
    startDishesFetching
  }
}
