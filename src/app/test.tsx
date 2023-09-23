'use client'

import { dishService } from '@/dependencies'
import { useStore } from '@/store/use-store'
import { WeekDays } from '@/types'
import { Typography } from '@mui/material'

export default function Home() {
  const dishes = useStore((state) => state.dishes)
  const currDishId = useStore((state) => state.currDishId)

  const { startDishCreation, startDishesFetching, startDishUpdate } = dishService
  const Insertar = async () => {
    void startDishCreation({
      dishName: 'Churrasco',
      imageUrl: 'asd',
      weekday: WeekDays.Monday
    })
    console.log({ currDishId })
  }

  const Listar = async () => {
    void startDishesFetching()
    console.log({ dishes })
  }

  const actualizar = async () => {
    void startDishUpdate({
      accepted: true,
      dishName: 'Pollo a la brasa',
      weekday: WeekDays.Tuesday,
      id: 'eff75ead-74fb-47b8-8e7c-ec970c09d09b'
    })
    console.log('update', { currDishId })
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
      {dishes.map((dish) => (
        <div key={dish.id}>
          {dish.dishName}, {dish.weekday}, {dish.id}
        </div>
      ))}
    </main>
  )
}
