import { useRouter } from 'next/navigation'

import { Card, CardActionArea, Grid, IconButton } from '@mui/material'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'
import LockTwoTone from '@mui/icons-material/LockTwoTone'

import { type DishCardProps } from '@/types.d'
import { DishCardData } from './DishCardData'
import { useDishes } from '@/hooks/useDishes'

export function EditDishCard ({ weekday, proposerName, dishName, id, accepted }: DishCardProps): JSX.Element {
  const router = useRouter()
  const { setCurrDish, toggleAcceptedOnList } = useDishes()

  const onDishCardClick = (): void => {
    if (accepted) return
    setCurrDish({ weekday, proposerName, dishName, id, accepted })
    router.push('/dishes/edit')
  }

  return (
    <Card elevation={5} sx={{ p: 1, bgcolor: accepted ? '#C6E5B1' : '#f9c1be' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={9} textAlign="left">
          <CardActionArea onClick={onDishCardClick} disabled={accepted}>
            <DishCardData weekday={weekday} proposerName={proposerName} dishName={dishName} />
          </CardActionArea>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <IconButton
            onClick={() => {
              toggleAcceptedOnList(id)
            }}
            sx={{ fontSize: '22px', bgcolor: 'rgba(255, 255, 255, 0.45)' }}
          >
            {accepted ? <LockTwoTone fontSize="inherit" /> : <LockOpenTwoToneIcon fontSize="inherit" />}
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
}
