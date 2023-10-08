import { create } from 'zustand'

import { type StoreState } from '@/types'

const initialState = {
  currMealId: null,
  meals: [],
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
