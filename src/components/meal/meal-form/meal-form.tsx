'use client'

import { Box, Button, CircularProgress, MenuItem, TextField } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, type FormEvent } from 'react'

import { mealService } from '@/dependencies'
import { useSafeService } from '@/hooks'
import { getMondayDate } from '@/lib'
import { useStore } from '@/store'
import { CustomImageList } from './custom-image-list'
import { InputSearchField } from './input-search-field'

import { EdditableMeal, NewMealFormData, WeekDays } from '@/types'
import type { UUID } from 'crypto'

interface Props {
  mealId?: UUID
  buttonText: string
  currMealName?: string
  currWeekday?: WeekDays | ''
}

export const MealForm = ({ mealId, buttonText, currMealName = '', currWeekday = '' }: Props) => {
  const selectedSrc = useStore((state) => state.selectedSrc)
  const [mealName, setMealName] = useState(currMealName)
  const [weekday, setWeekday] = useState(currWeekday)
  const router = useRouter()
  const weekStartStr = useSearchParams().get('week_start') ?? getMondayDate(new Date())
  const baseMeal = { imageUrl: selectedSrc, mealName, weekday }

  const { loading: updating, runner: runUpdate } = useSafeService<EdditableMeal>({
    execute: mealService.updateMeal,
    data: { ...baseMeal, id: mealId as UUID }
  })

  const { loading: creating, runner: runCreate } = useSafeService<NewMealFormData>({
    execute: mealService.createMeal,
    data: { ...baseMeal, weekStartStr }
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (mealId == null) {
      await runCreate()
    } else {
      await runUpdate()
    }
    router.push(`/meals/proposals?week_start=${weekStartStr}`)
    router.refresh()
  }

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        void handleSubmit(e)
      }}
      sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}
    >
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
      {updating || creating ? (
        <CircularProgress />
      ) : (
        <Button fullWidth variant="outlined" sx={{ mb: 3 }} type="submit">
          {buttonText}
        </Button>
      )}
    </Box>
  )
}
