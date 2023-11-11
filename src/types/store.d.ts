import type { UUID } from 'crypto'
import type { StoreApi, UseBoundStore } from 'zustand'
import type { ImgMealData } from '.'

export interface StoreState {
  meals: Meal[]
  currMealId: UUID | null
  imageSearchResults: ImgMealData[]
  selectedSrc: string
  clear: () => void
  setImageSearchResults: (data: ImgMealData[]) => void
}

export type StoreInstance = UseBoundStore<StoreApi<StoreState>>
