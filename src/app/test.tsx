'use client'

import { mealService } from '@/dependencies'
import { useStore } from '@/store/use-store'
import { WeekDays } from '@/types'
import { Typography } from '@mui/material'

export default function Home() {
  const meals = useStore((state) => state.meals)
  const currMealId = useStore((state) => state.currMealId)

  const { startMealCreation, startMealesFetching, startMealUpdate } = mealService
  const Insertar = async () => {
    void startMealCreation({
      mealName: 'Churrasco',
      imageUrl: 'asd',
      weekday: WeekDays.Monday
    })
    console.log({ currMealId })
  }

  const Listar = async () => {
    void startMealesFetching()
    console.log({ meals })
  }

  const actualizar = async () => {
    void startMealUpdate({
      accepted: true,
      mealName: 'Pollo a la brasa',
      weekday: WeekDays.Tuesday,
      id: 'eff75ead-74fb-47b8-8e7c-ec970c09d09b'
    })
    console.log('update', { currMealId })
  }

  return (
    <main>
      <Typography variant="h1">Hello World</Typography>
      <button
        onClick={() => {
          void Insertar()
        }}
      >
        Insertar
      </button>
      <button
        onClick={() => {
          void Listar()
        }}
      >
        Listar
      </button>
      <button
        onClick={() => {
          void actualizar()
        }}
      >
        actualizar
      </button>
      {meals.map((meal) => (
        <div key={meal.id}>
          {meal.mealName}, {meal.weekday}, {meal.id}
        </div>
      ))}
    </main>
  )
}
