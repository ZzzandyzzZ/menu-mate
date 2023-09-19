import { create } from './create'
import { getAll } from './get-all'
import { update } from './update'

import type { DishRepository } from '@/types'

export const getNotionDishRepository = (): DishRepository => ({
  create,
  getAll,
  update
})
