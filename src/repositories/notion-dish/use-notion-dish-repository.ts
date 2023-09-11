import { create } from './create'
import { getAll } from './get-all'

export const useNotionDishRepository = (): DishRepository => ({
  getAll,
  create
})
