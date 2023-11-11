import type { UUID } from 'crypto'
import type { StoreApi, UseBoundStore } from 'zustand'
import type { ImgMealData } from '.'

export interface StoreState {
  meals: Meal[]
  currMealId: UUID | null
  imageSearchResults: ImgMealData[]
  selectedSrc: string
  globalError: string
  clear: () => void
  setGlobalError: (error: string) => void
  clearGlobalError: () => void
  setImageSearchResults: (data: ImgMealData[]) => void
}

export type StoreInstance = UseBoundStore<StoreApi<StoreState>>
