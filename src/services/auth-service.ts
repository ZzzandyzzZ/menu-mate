import { BaseService } from './base-service'

import type { AuthRepository, AuthService as IAuthService, ProposerNames } from '@/types'

export class AuthService extends BaseService<AuthRepository> implements IAuthService {
  startLogin = async (roomId: string, proposerName: ProposerNames, password: string) => {
    try {
      await this.repository.setCookieToken(proposerName, password, roomId)
    } catch (error) {
      return {
        success: false,
        data: null,
        error: (error as Error).message
      }
    }
    return { success: true, data: null, error: null }
  }

  startLogout = async () => {
    await this.handleErrorsAsync(async () => {
      await this.repository.clearToken()
      this.store.getState().clear()
    })
  }
}
