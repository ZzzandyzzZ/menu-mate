import { Stack } from '@mui/material'

import { PageTitle, PastWeeksList } from '@/components'
import { mealService } from '@/dependencies'
import { groupWeeksByMonth } from '@/lib'

export default async function PastWeeksPage() {
  const meals = await mealService.getMeals()
  const weekStarts = meals.map((meal) => meal.weekStart)
  const groupedWeeks = groupWeeksByMonth(weekStarts)
  return (
    <>
      <PageTitle title="Semanas anteriores" />
      <Stack width="100%" spacing={1} mb={5}>
        <PastWeeksList groupedWeeks={groupedWeeks} />
      </Stack>
    </>
  )
}
