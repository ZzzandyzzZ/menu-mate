import { NotionDishRepository } from './repositories/notion-dish-repository'
import { DishService } from './services'
import { useStore } from './store'

const repository = new NotionDishRepository()
const store = useStore
export const dishService = new DishService(repository, store)
