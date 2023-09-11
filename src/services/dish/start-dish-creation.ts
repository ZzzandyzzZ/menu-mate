import { getDateFromWeeday, getMondayDate, errorLogger } from '@/lib'

import type { DishServiceParams, NewDish, NewDishFormData } from '@/types'

interface Params extends DishServiceParams {
  newDishFormData: NewDishFormData
}

export const _startDishCreation = async ({ repository, store, newDishFormData }: Params) => {
  try {
    const roomId = store.getState().roomId
    const proposerName = store.getState().proposerName

    if (roomId == null || proposerName == null) throw Error('Invalid session, login')

    const { dishName, weekday, imageUrl } = newDishFormData
    const weekdayDate = getDateFromWeeday(weekday)
    const dishId = crypto.randomUUID() as UUID
    const newDish: NewDish = {
      id: dishId,
      dishName,
      imageUrl,
      roomId,
      accepted: false,
      proposerName,
      weekday: weekdayDate.toLocaleString('sv'),
      weekStart: getMondayDate(weekdayDate).toLocaleString('sv')
    }
    const dish = await repository.create(newDish)
    console.log(dish)
    store.setState(() => ({
      currDish: dishId
    }))
  } catch (error) {
    errorLogger(error)
  }
}
