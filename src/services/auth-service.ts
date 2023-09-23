import type { AuthService as IAuthService, AuthRepository, ProposerNames } from '@/types'
import { BaseService } from './base-service'

export class AuthService extends BaseService<AuthRepository> implements IAuthService {
  startLogin = async (roomId: string, proposerName: ProposerNames, password: string) => {
    this.store.setState({
      roomId,
      proposerName
    })
  }

  startLogout = async () => {
    this.store((state) => state.clear)()
  }
}
