import { Stack } from '@mui/material'

import { getAuth } from '@/actions/notion'
import { EditMealCard, PageTitle } from '@/components'
import { mealService } from '@/dependencies'

export default async function ProposalsPage() {
  const meals = await mealService.getMeals()
  const { role } = await getAuth()
  return (
    <>
      <PageTitle title="Propuestas" />
      <Stack width="100%" spacing={1} mb={5}>
        {meals.map((meal) => (
          <EditMealCard key={meal.id} role={role} meal={meal} />
        ))}
      </Stack>
    </>
  )
}
