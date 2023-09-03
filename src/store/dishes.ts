import { getNotionMenuData } from '@/services/notion'
import { create } from 'zustand'

interface DishesState {
  dishes: Dish[]
  currDish: number
  fetchDishes: () => Promise<void>
}

export const useDishesStore = create<DishesState>((set) => {
  return {
    dishes: [],
    currDish: 0,
    fetchDishes: async () => {
      const dishes = await getNotionMenuData()
      set({ dishes })
    }
  }
})
