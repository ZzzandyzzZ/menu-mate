'use client'

import { useStore } from '@/store'
import { Button } from '@mui/material'

export function ClientTest() {
  const state = useStore()
  // const { getMeals } = mealService
  const handleClick = () => {
    const _getMeals = async () => {
      //   const meals = await getMeals('982191')
      //   console.log({ meals })
    }
    void _getMeals()
  }

  return (
    <>
      Store Data:{JSON.stringify(state)}
      <Button onClick={handleClick}>Actualizar Store</Button>
    </>
  )
}
