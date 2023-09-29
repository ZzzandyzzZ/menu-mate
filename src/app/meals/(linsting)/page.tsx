import { Box, Stack, Typography } from '@mui/material'

import { InfoMealCard, PageTitle } from '@/components'
import { useMeals } from '@/hooks/useMeals'

export default async function MealsPage() {
  const meals = await useMeals()
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
