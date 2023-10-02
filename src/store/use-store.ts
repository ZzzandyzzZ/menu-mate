import { create } from 'zustand'

import { type StoreState } from '@/types'

const initialState = {
  currMealId: null,
  meals: [],
  roomId: null,
  proposerName: null,
  imageSearchResults: [],
  selectedSrc: ''
}

export const useStore = create<StoreState>((set) => {
  return {
    ...initialState,
    clear: () => {
      set(initialState)
    }
  }
})
