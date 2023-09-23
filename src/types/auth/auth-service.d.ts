import type { ProposerNames } from '..'

export interface AuthService {
  startLogin: (roomId: string, proposerName: ProposerNames, password: string) => Promise<void>
  startLogout: () => Promise<void>
}
