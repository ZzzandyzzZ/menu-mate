import { Box, Stack, Typography } from '@mui/material'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone'

import { EditMealCard, PageTitle, RedirectButton } from '@/components'
import { useMeals } from '@/hooks/useMeals'

export default async function ProposalsPage() {
  const meals = await useMeals()
  return (
    <>
      <PageTitle title="Propuestas" />
      <Stack width="100%" spacing={1} mb={5}>
        {meals.map((meal) => (
          <EditMealCard key={meal.id} {...meal} />
        ))}
      </Stack>
    </>
  )
}
