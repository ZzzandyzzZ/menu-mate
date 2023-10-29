import { BaseService } from './base-service'

import type { AuthRepository, AuthService as IAuthService, LoginData } from '@/types'

export class AuthService extends BaseService<AuthRepository> implements IAuthService {
  startLogin = async ({ roomId, proposerName, password }: LoginData) => {
    await this.repository.setCookieToken(proposerName, password, roomId)
  }

  startLogout = async () => {
    await this.handleErrorsAsync(async () => {
      await this.repository.clearToken()
      this.store.getState().clear()
    })
  }
}
