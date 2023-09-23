import { errorLogger } from '@/lib'

import type { StoreApi, UseBoundStore } from 'zustand'
import type { StoreState } from '@/types'

export class BaseService<T> {
  protected readonly repository: T
  protected readonly store: UseBoundStore<StoreApi<StoreState>>

  constructor(repository: T, store: UseBoundStore<StoreApi<StoreState>>) {
    this.repository = repository
    this.store = store
  }

  protected async handleErrorsAsync<T>(fn: () => Promise<T>) {
    try {
      return await fn()
    } catch (error) {
      errorLogger(error)
    }
  }
}
