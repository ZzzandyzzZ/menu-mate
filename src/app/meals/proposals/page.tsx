import { Stack } from '@mui/material'

import { getAuth } from '@/actions/notion'
import { EditMealCard, PageSubtitle, PageTitle } from '@/components'
import { mealService } from '@/dependencies'
import { redirect } from 'next/navigation'

import { getMondayDate } from '@/lib'

interface Props {
  searchParams: {
    week_start: string
  }
}

export default async function ProposalsPage({ searchParams }: Props) {
  const meals = await mealService.getMeals()
  const { role } = await getAuth()
  const weekStart = searchParams.week_start
  if (weekStart == null) {
    return redirect(`/meals?week_start=${getMondayDate(new Date())}`)
  }
  const mealsByWeekStart = meals.filter((meal) => meal.weekStart === weekStart)
  return (
    <>
      <PageTitle title="Propuestas" />
      {mealsByWeekStart.length !== 0 ? (
        <Stack width="100%" spacing={1} mb={5}>
          {mealsByWeekStart.map((meal) => (
            <EditMealCard key={meal.id} role={role} meal={meal} />
          ))}
        </Stack>
      ) : (
        <PageSubtitle text="Sin propuestas, agrega una" />
      )}
    </>
  )
}
