import { create } from 'zustand'

import { type StoreState, ProposerNames } from '@/types'

const initialState = {
  currMealId: null,
  meals: [],
  roomId: null,
  proposerName: null
}

export const useStore = create<StoreState>((set) => {
  return {
    ...initialState,
    clear: () => {
      set(initialState)
    }
  }
})
