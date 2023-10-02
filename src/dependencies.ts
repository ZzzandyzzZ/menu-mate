import { NotionMealRepository } from './repositories'
import { FetchAuthRepository } from './repositories/fetch-auth-repository'
import { FetchImageSearchRepository } from './repositories/fetch-image-search-repository'
import { MealService } from './services'
import { AuthService } from './services/auth-service'
import { ImageSearchService } from './services/image-search-service'
import { useStore } from './store'

const mealRepository = new NotionMealRepository()
const store = useStore
export const mealService = new MealService(mealRepository, store)

const authRepository = new FetchAuthRepository()
export const authService = new AuthService(authRepository, store)

const imgSearchRepository = new FetchImageSearchRepository()
export const imgSearchService = new ImageSearchService(imgSearchRepository, store)
