import { Typography } from '@mui/material'

import type { Meal } from '@/types'

type Props = Pick<Meal, 'weekday' | 'proposerName' | 'mealName'>

export function MealCardData({ weekday, proposerName, mealName }: Props) {
  return (
    <>
      <Typography component="div" variant="h6">
        {mealName}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {weekday} - {proposerName}
      </Typography>
    </>
  )
}
