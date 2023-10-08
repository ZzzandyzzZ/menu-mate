'use client'

import DeleteIcon from '@mui/icons-material/Delete'
import { Card, CardActionArea, CircularProgress, Grid, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { mealService } from '@/dependencies'
import { useSafeService } from '@/hooks'
import { EditMealButton, MealCardData } from '..'

import { SquareIconButton } from '@/components'
import type { EdditableMeal, Meal, Role } from '@/types'
import type { UUID } from 'crypto'

interface Props {
  meal: Meal
  role: Role
}

export function EditMealCard({ meal, role }: Props) {
  const { weekday, proposerName, mealName, id, accepted } = meal
  const router = useRouter()
  const [isAccepted, setIsAccepted] = useState(accepted)
  const [isDeleted, setIsDeleted] = useState(false)
  const edditableMeal = {
    id,
    accepted: !isAccepted
  }

  const { loading: updating, runner: runUpdate } = useSafeService<EdditableMeal>({
    execute: mealService.updateMeal,
    data: edditableMeal,
    callback: () => {
      setIsAccepted(!isAccepted)
    }
  })

  const { loading: deleting, runner: runDelete } = useSafeService<UUID>({
    execute: mealService.deleteMealById,
    data: id,
    callback: () => {
      setIsDeleted(true)
    }
  })

  const loading = updating || deleting

  const onMealCardClick = (): void => {
    if (isAccepted) return
    router.push('/meals/edit/' + id)
  }

  return (
    !isDeleted && (
      <Card
        elevation={5}
        sx={{
          p: 1,
          bgcolor: isAccepted ? '#C6E5B1' : '#f9c1be'
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={9} textAlign="left">
            <CardActionArea onClick={onMealCardClick} disabled={isAccepted || loading}>
              <MealCardData weekday={weekday} proposerName={proposerName} mealName={mealName} />
            </CardActionArea>
          </Grid>
          <Grid item xs={3} textAlign="center" display={role === 'admin' ? 'block' : 'none'}>
            <Stack
              spacing={1}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="center"
              alignItems="center"
            >
              {loading ? (
                <CircularProgress />
              ) : (
                <>
                  <EditMealButton
                    isAccepted={isAccepted}
                    onClick={() => {
                      void runUpdate()
                    }}
                  />
                  {!isAccepted && (
                    <SquareIconButton
                      onClick={() => {
                        void runDelete()
                      }}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </SquareIconButton>
                  )}
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Card>
    )
  )
}
