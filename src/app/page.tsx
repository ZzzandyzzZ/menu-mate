'use client'
import { Typography } from '@mui/material'

import { postToNotionDB, updateNotionPage } from '@/actions/notion-action'
import { getNotionMenuData } from '@/services/notion'
import { useDishesStore } from '@/store/dishes'

export default function Home () {
  const fetchDishes = useDishesStore(state => state.fetchDishes)
  const dishes = useDishesStore(state => state.dishes)
  const Insertar = async () => {
    const data = await postToNotionDB({
      id: crypto.randomUUID() as UUID,
      dishName: 'Churrasco',
      imageUrl: 'asd',
      roomId: '1',
      accepted: false,
      dateStr: '2023-08-02',
      proposerName: 'Carmen'
    })
    console.log(data)
  }
  const Listar = async () => {
    void fetchDishes()
    const dishes = await getNotionMenuData()
    console.log(dishes)
  }
  const ver = async () => {
    console.log(dishes)
    void updateNotionPage({ pageId: '05ba4a6d-1315-44ee-aad2-c9a3ed3cdcf8', edditableDish: { accepted: false, dishName: 'Andy' } })
  }
  return (
    <main>
      <Typography variant="h1">Hello World</Typography>
      <button onClick={() => { void Insertar() }}>Insertar</button>
      <button onClick={() => { void Listar() }}>Listar</button>
      <button onClick={() => { void ver() }}>ver</button>
    </main>
  )
}
