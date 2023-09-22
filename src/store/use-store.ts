import { create } from 'zustand'

import { type StoreState, ProposerNames } from '@/types'

export const useStore = create<StoreState>(() => {
  return {
    currDishId: null,
    dishes: [],
    roomId: '1',
    proposerName: ProposerNames.Andy
  }
})
