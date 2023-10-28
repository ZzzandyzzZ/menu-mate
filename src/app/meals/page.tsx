import { redirect } from 'next/navigation'

import { Stack } from '@mui/material'

import { InfoMealCard, PageSubtitle, PageTitle } from '@/components'
import { mealService } from '@/dependencies'
import { getMondayDate, getNextWeek } from '@/lib'

interface Props {
  searchParams: {
    week_start: string
  }
}

export default async function MealsPage({ searchParams }: Props) {
  const weekStart = searchParams.week_start
  if (weekStart == null) {
    return redirect(`/meals?week_start=${getMondayDate(new Date())}`)
  }
  const meals = await mealService.getMeals()
  const mealsByWeekStart = meals.filter((meal) => meal.weekStart === weekStart && meal.accepted)
  return (
    <>
      <PageTitle title="Menu Semanal" />
      <PageSubtitle text={`Fechas: ${weekStart} ⇨ ${getNextWeek(weekStart)}`} />
      {mealsByWeekStart.length !== 0 ? (
        <Stack width="100%" spacing={1} mb={5}>
          {mealsByWeekStart.map((meal) => (
            <InfoMealCard key={meal.id} {...meal} />
          ))}
        </Stack>
      ) : (
        <PageSubtitle text="Aún no acepto ninguna propuesta" />
      )}
    </>
  )
}
