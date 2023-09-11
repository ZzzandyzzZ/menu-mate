import type { StoreApi, UseBoundStore } from 'zustand'

export interface DishServiceParams {
  repository: DishRepository
  store: UseBoundStore<StoreApi<DishState>>
}
