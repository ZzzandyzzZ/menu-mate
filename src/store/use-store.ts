import { create } from 'zustand'

import { type StoreState, ProposerNames } from '@/types'

const initialState = {
  currDishId: null,
  dishes: [],
  roomId: '1',
  proposerName: ProposerNames.Andy
}

export const useStore = create<StoreState>((set) => {
  return {
    ...initialState,
    clear: () => {
      set(initialState)
    }
  }
})