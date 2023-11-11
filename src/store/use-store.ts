import { create } from 'zustand'

import type { ImgMealData, StoreState } from '@/types'

const initialState = {
  currMealId: null,
  meals: [],
  imageSearchResults: [],
  selectedSrc: '',
  globalError: ''
}

export const useStore = create<StoreState>((set) => {
  return {
    ...initialState,
    clear: () => {
      set(initialState)
    },
    setImageSearchResults: (data: ImgMealData[]) => {
      set({ imageSearchResults: data })
    },
    setGlobalError: (globalError: string) => {
      set({ globalError })
    },
    clearGlobalError: () => {
      set({ globalError: '' })
    }
  }
})
