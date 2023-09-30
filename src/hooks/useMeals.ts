import { mealService } from '@/dependencies'
import { useJwtData } from '.'

export const useMeals = async () => {
  const jwtData = await useJwtData()
  const meals = await mealService.getMeals(jwtData?.roomId as string)
  return meals
}
