'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'
import LockTwoTone from '@mui/icons-material/LockTwoTone'
import { Card, CardActionArea, CircularProgress, Grid, IconButton } from '@mui/material'

import { mealService } from '@/dependencies'
import { MealCardData } from '.'

import type { Meal } from '@/types'

export function EditMealCard({ weekday, proposerName, mealName, id, accepted }: Meal) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isAccepted, setIsAccepted] = useState(accepted)
  const { updateMeal } = mealService

  const onMealCardClick = (): void => {
    if (isAccepted) return
    router.push('/meals/edit/' + id)
  }

  const onUpdateMealClick = () => {
    setLoading(true)
    updateMeal({ id, accepted: !isAccepted })
      .then(() => {
        setIsAccepted(!isAccepted)
      })
      .catch(console.log)
      .finally(() => setLoading(false))
  }

  const EditMealButton = () => {
    return (
      <IconButton
        onClick={onUpdateMealClick}
        sx={{ fontSize: '22px', bgcolor: 'rgba(255, 255, 255, 0.45)' }}
      >
        {isAccepted ? (
          <LockTwoTone fontSize="inherit" />
        ) : (
          <LockOpenTwoToneIcon fontSize="inherit" />
        )}
      </IconButton>
    )
  }

  return (
    <Card elevation={5} sx={{ p: 1, bgcolor: isAccepted ? '#C6E5B1' : '#f9c1be' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={9} textAlign="left">
          <CardActionArea onClick={onMealCardClick} disabled={isAccepted || loading === true}>
            <MealCardData weekday={weekday} proposerName={proposerName} mealName={mealName} />
          </CardActionArea>
        </Grid>
        <Grid item xs={3} textAlign="center">
          {loading ? <CircularProgress /> : <EditMealButton />}
        </Grid>
      </Grid>
    </Card>
  )
}
