'use client'
import { useRouter } from 'next/navigation'

import { Card, CardActionArea, Grid, IconButton } from '@mui/material'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'
import LockTwoTone from '@mui/icons-material/LockTwoTone'

import type { Meal } from '@/types'
import { MealCardData } from '.'

export function EditMealCard({ weekday, proposerName, mealName, id, accepted }: Meal) {
  const router = useRouter()

  const onDishCardClick = (): void => {
    if (accepted) return
    router.push('/dishes/edit')
  }

  return (
    <Card elevation={5} sx={{ p: 1, bgcolor: accepted ? '#C6E5B1' : '#f9c1be' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={9} textAlign="left">
          <CardActionArea onClick={onDishCardClick} disabled={accepted}>
            <MealCardData weekday={weekday} proposerName={proposerName} mealName={mealName} />
          </CardActionArea>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <IconButton
            onClick={() => {
              // toggleAcceptedOnList(id)
            }}
            sx={{ fontSize: '22px', bgcolor: 'rgba(255, 255, 255, 0.45)' }}
          >
            {accepted ? (
              <LockTwoTone fontSize="inherit" />
            ) : (
              <LockOpenTwoToneIcon fontSize="inherit" />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
}
