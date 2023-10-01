import { Stack } from '@mui/material'

import { InfoMealCard, PageTitle } from '@/components'
import { mealService } from '@/dependencies'

export default async function MealsPage() {
  const meals = await mealService.getMeals()
  return (
    <>
      <PageTitle title="Menu Semanal" />
      <Stack width="100%" spacing={1} mb={5}>
        {meals.map((meal) => (
          <InfoMealCard key={meal.id} {...meal} />
        ))}
      </Stack>
    </>
  )
}
