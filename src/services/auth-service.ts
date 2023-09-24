import type { AuthService as IAuthService, AuthRepository, ProposerNames } from '@/types'
import { BaseService } from './base-service'

export class AuthService extends BaseService<AuthRepository> implements IAuthService {
  startLogin = async (roomId: string, proposerName: ProposerNames, password: string) => {
    try {
      await this.repository.setCookieToken(proposerName, password)
    } catch (error) {
      return {
        success: false,
        data: null,
        error: (error as Error).toString()
      }
    }
    this.store.setState({
      roomId,
      proposerName
    })
    return { success: true, data: null, error: null }
  }

  startLogout = async () => {
    await this.handleErrorsAsync(async () => {
      await this.repository.clearToken()
      this.store.getState().clear()
    })
  }
}
