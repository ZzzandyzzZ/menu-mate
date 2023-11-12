import { redirect } from 'next/navigation'

import { Stack } from '@mui/material'

import { getAuth } from '@/actions/notion'
import { EditMealCard, PageSubtitle, PageTitle } from '@/components'
import { getSortedMeals } from '@/helpers'
import { getMondayDate } from '@/lib'

interface Props {
  searchParams: {
    week_start: string
  }
}

export default async function ProposalsPage({ searchParams }: Props) {
  const { role } = await getAuth()
  const weekStart = searchParams.week_start
  if (weekStart == null) {
    return redirect(`/meals/proposals?week_start=${getMondayDate(new Date())}`)
  }
  const sortedMeals = await getSortedMeals({ weekStart })
  return (
    <>
      <PageTitle title="Propuestas" />
      {sortedMeals.length !== 0 ? (
        <Stack width="100%" spacing={1} mb={5}>
          {sortedMeals.map((meal) => (
            <EditMealCard key={meal.id} role={role} meal={meal} />
          ))}
        </Stack>
      ) : (
        <PageSubtitle text="Sin propuestas, agrega una" />
      )}
    </>
  )
}
