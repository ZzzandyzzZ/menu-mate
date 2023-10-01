import { errorLogger } from '@/lib'

import type { StoreInstance } from '@/types'

export class BaseService<T> {
  protected readonly repository: T
  protected readonly store: StoreInstance

  constructor(repository: T, store: StoreInstance) {
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
