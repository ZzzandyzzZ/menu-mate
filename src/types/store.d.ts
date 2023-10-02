import type { UUID } from 'crypto'
import type { StoreApi, UseBoundStore } from 'zustand'
import type { ImgMealData, ProposerNames } from '.'

export interface StoreState {
  meals: Meal[]
  currMealId: UUID | null
  roomId: string | null
  proposerName: ProposerNames | null
  imageSearchResults: ImgMealData[]
  clear: () => void
}

export type StoreInstance = UseBoundStore<StoreApi<StoreState>>
