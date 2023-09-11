'use client'

import { useDishService } from '@/services/dish/use-dish-service'
import { useDishStore } from '@/store/use-dish-store'
import { WeekDays } from '@/types'
import { Typography } from '@mui/material'

export default function Home() {
  const dishes = useDishStore((state) => state.dishes)
  const currDish = useDishStore((state) => state.currDish)
  const { startDishesFetching, startDishCreation } = useDishService()

  const Insertar = async () => {
    void startDishCreation({ dishName: 'Churrasco', imageUrl: 'asd', weekday: WeekDays.Sunday })
    console.log({ currDish })
  }

  const Listar = async () => {
    void startDishesFetching()
    console.log({ dishes })
  }

  const ver = async () => {
    console.log(dishes)
    // void updateNotionPage({
    //   pageId: '05ba4a6d-1315-44ee-aad2-c9a3ed3cdcf8',
    //   edditableDish: { accepted: false, dishName: 'Andy' }
    // })
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
          void ver()
        }}
      >
        ver
      </button>
      {dishes.map((dish) => (
        <div key={dish.id}>
          {dish.dishName}, {dish.weekday}
        </div>
      ))}
    </main>
  )
}
