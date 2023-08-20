'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Box, Button, ImageList, ImageListItem, MenuItem, TextField, Typography } from '@mui/material'

import { DaysOfWeek, type DishViewProps, type UUID } from '@/types.d'
import { useDishes } from '@/hooks/useDishes'
import { useSession } from '@/hooks/useSession'
import { useDebounce } from '@/hooks/useDebounce'

export function DishView ({ dishImages, type }: DishViewProps): JSX.Element {
  const {
    currentDish: { dishName, weekday, id },
    clearCurrDish,
    addDishToList,
    updateCurrDish,
    updateDishOnList
  } = useDishes()
  const { proposerName } = useSession()
  const debouncedName = useDebounce(dishName, 500)
  const router = useRouter()

  useEffect(() => {
    if (type === 'add') clearCurrDish()
  }, [clearCurrDish, type])

  useEffect(() => {
    console.log({ debouncedName })
    if (debouncedName === '') return
    console.log('Request')
  }, [debouncedName])

  const handleClick = (): void => {
    if (type === 'add') {
      addDishToList({
        id: crypto.randomUUID() as UUID,
        dishName,
        weekday,
        imageUrl: '',
        accepted: false,
        proposerName
      })
      router.push('/proposals')
    } else {
      updateDishOnList({ id, dish: { dishName, weekday } })
      router.push('/proposals')
    }
  }

  return (
    <>
      <Typography variant="h5" textAlign="center" sx={{ py: 1 }}>
        {type === 'edit' ? 'Editar Plato' : 'Agregar Plato'}
      </Typography>
      <Box component="form">
        <TextField
          fullWidth
          label="Nombre del plato"
          sx={{ my: 1 }}
          size="small"
          value={dishName}
          onChange={(e) => {
            updateCurrDish({ dishName: e.target.value })
          }}
        />
        <TextField
          fullWidth
          label="Dia de la semana"
          select
          size="small"
          value={weekday}
          onChange={(e) => {
            updateCurrDish({ weekday: e.target.value as DaysOfWeek })
          }}
        >
          {Object.values(DaysOfWeek).map((option) => {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            )
          })}
        </TextField>
        <ImageList cols={2}>
          {dishImages.map(({ img, title }) => (
            <ImageListItem key={img} sx={{ bgcolor: '#F6F4EB' }}>
              <img src={img} alt={title} />
            </ImageListItem>
          ))}
        </ImageList>
        <Button fullWidth variant="outlined" sx={{ mb: 3 }} onClick={handleClick}>
          {type === 'edit' ? 'Editar' : 'Agregar'}
        </Button>
      </Box>
        </>
  )
}
