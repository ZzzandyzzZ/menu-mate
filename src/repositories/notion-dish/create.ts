import { postDishToNotionDB } from '@/actions/notion'

import type { NewDish } from '@/types'

export const create = async (newDish: NewDish) => {
  const result = await postDishToNotionDB(newDish)
  return result
}
