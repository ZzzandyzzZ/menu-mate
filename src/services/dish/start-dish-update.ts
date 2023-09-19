import { errorLogger } from '@/lib'

import type { DishServiceParams } from '@/types/dish-service'
import type { EdditableDish } from '@/types'

interface Params extends DishServiceParams {
  edditableDish: EdditableDish
}

export const _startDishUpdate = async ({ repository, store, edditableDish }: Params) => {
  try {
    console.log('_startDishUpdate')
    const currDish = await repository.update(edditableDish)
    store.setState(() => ({
      currDish: currDish.id
    }))
  } catch (error) {
    errorLogger(error)
  }
}
