import { create } from 'zustand'

import { type DishState, ProposerNames } from '@/types'

export const useDishStore = create<DishState>(() => {
  return {
    currDish: 0,
    dishes: [],
    roomId: '1',
    proposerName: ProposerNames.Andy
  }
})
