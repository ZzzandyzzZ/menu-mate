import { create } from 'zustand'

import { ImgMealData, type StoreState } from '@/types'

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
    },
    setImageSearchResults: (data: ImgMealData[]) => {
      set({ imageSearchResults: data })
    }
  }
})
