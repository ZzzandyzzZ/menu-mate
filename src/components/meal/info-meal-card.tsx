import { Box, CardMedia, Paper } from '@mui/material'

import { MealCardData } from './meal-card-data'

import type { Meal } from '@/types'

type Props = Omit<Meal, 'id'>

export function InfoMealCard({ weekday, imageUrl, proposerName, mealName, accepted }: Props) {
  return (
    <Box sx={{ display: accepted ? 'flex' : 'none', alignItems: 'center', position: 'relative' }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={mealName}
        sx={{
          borderRadius: '50%',
          width: '40%',
          height: '40%',
          aspectRatio: 1 / 1,
          zIndex: 1,
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          pl: 1
        }}
      >
        <MealCardData weekday={weekday} proposerName={proposerName} mealName={mealName} />
      </Box>
      <Paper
        elevation={6}
        sx={{
          left: '20%',
          width: '80%',
          height: '75%',
          position: 'absolute',
          zIndex: 0,
          backgroundColor: '#F6F4EB'
        }}
      />
    </Box>
  )
}
