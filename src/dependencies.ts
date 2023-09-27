import { NotionMealRepository } from './repositories'
import { FetchAuthRepository } from './repositories/fetch-auth-repository'
import { MealService } from './services'
import { AuthService } from './services/auth-service'
import { useStore } from './store'

const mealRepository = new NotionMealRepository()
const store = useStore
export const mealService = new MealService(mealRepository, store)

const authRepository = new FetchAuthRepository()
export const authService = new AuthService(authRepository, store)
