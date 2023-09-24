import { NotionDishRepository } from './repositories'
import { FetchAuthRepository } from './repositories/fetch-auth-repository'
import { DishService } from './services'
import { AuthService } from './services/auth-service'
import { useStore } from './store'

const dishRepository = new NotionDishRepository()
const store = useStore
export const dishService = new DishService(dishRepository, store)

const authRepository = new FetchAuthRepository()
export const authService = new AuthService(authRepository, store)
