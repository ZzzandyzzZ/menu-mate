'use client'

import { Box, Button, MenuItem, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import { mealService } from '@/dependencies'

import { WeekDays } from '@/types'
import type { UUID } from 'crypto'
import { CustomImageList } from './custom-image-list'
import { InputSearchField } from './input-search-field'

interface Props {
  mealId?: UUID
  buttonText: string
  currMealName?: string
  currWeekday?: WeekDays | ''
}

const imageUrl = 'https://www.deliciosi.com/images/2200/2235/arroz-verde-peruano-665.webp'

export const MealForm = ({ mealId, buttonText, currMealName = '', currWeekday = '' }: Props) => {
  const [mealName, setMealName] = useState(currMealName)
  const [weekday, setWeekday] = useState(currWeekday)
  const { createMeal, updateMeal } = mealService
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const handler = currMealName !== '' ? updateMeal : createMeal
    handler({ imageUrl, mealName, weekday, id: mealId })
      .then(() => {
        router.push('/meals/proposals')
        router.refresh()
      })
      .catch(console.log)
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <InputSearchField mealName={mealName} setMealName={setMealName} />
      <TextField
        fullWidth
        select
        defaultValue=""
        label="Dia de la semana"
        size="small"
        value={weekday}
        onChange={(e) => {
          setWeekday(e.target.value as WeekDays)
        }}
      >
        {Object.values(WeekDays).map((option) => {
          return (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          )
        })}
      </TextField>
      <CustomImageList />
      <Button fullWidth variant="outlined" sx={{ mb: 3 }} type="submit">
        {buttonText}
      </Button>
    </Box>
  )
}
