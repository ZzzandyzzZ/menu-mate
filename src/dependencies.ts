import { NotionDishRepository } from './repositories'
import { DishService } from './services'
import { AuthService } from './services/auth-service'
import { useStore } from './store'

const repository = new NotionDishRepository()
const store = useStore
export const dishService = new DishService(repository, store)

export const authService = new AuthService(repository, store)
