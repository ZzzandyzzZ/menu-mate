import { mealService } from '@/dependencies'

import { getNumberFromWeekday } from '@/lib'

interface Props {
  weekStart: string
}

export async function getSortedMeals({ weekStart }: Props) {
  const meals = await mealService.getMeals()
  const mealsByWeekStart = meals.filter((meal) => meal.weekStart === weekStart && meal.accepted)
  const sortedMeals = mealsByWeekStart.sort((a, b) => {
    return getNumberFromWeekday(a.weekday) > getNumberFromWeekday(b.weekday) ? 1 : -1
  })
  return sortedMeals
}
