'use client'

import { mealService } from '@/dependencies'
import { useStore } from '@/store'
import { Button } from '@mui/material'
import { useEffect } from 'react'

export function ClientTest({ data }) {
  const state = useStore()
  const { getMeals } = mealService
  const handleClick = () => {
    const _getMeals = async () => {
      //   const meals = await getMeals('982191')
      //   console.log({ meals })
    }
    void _getMeals()
    console.log({ data })
  }

  return (
    <>
      Store Data:{JSON.stringify(state)}
      <Button onClick={handleClick}>Actualizar Store</Button>
    </>
  )
}
