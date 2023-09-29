import { cookies } from 'next/headers'

import { COOKIE_JWT_NAME } from '@/constants'
import { getJwtData } from '@/lib'
import { mealService } from '@/dependencies'

export const useMeals = async () => {
  const jwtToken = cookies().get(COOKIE_JWT_NAME)
  const jwtData = await getJwtData(jwtToken?.value, process.env.JWT_KEY)
  const meals = await mealService.getMeals(jwtData?.roomId as string)
  return meals
}
