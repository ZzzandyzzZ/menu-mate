import { errorLogger } from '@/lib'
import type { DishServiceParams } from '@/types/dish-service'

export const _startDishesFetching = async ({ repository, store }: DishServiceParams) => {
  try {
    const dishes = await repository.getAll()
    console.log('_startDishesFetching', dishes)
    store.setState(() => ({
      dishes
    }))
  } catch (error) {
    errorLogger(error)
  }
}
