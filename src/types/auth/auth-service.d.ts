import type { ProposerNames } from '..'

interface LoginData {
  roomId: string
  proposerName: ProposerNames
  password: string
}

export interface AuthService {
  startLogin: (data: LoginData) => Promise<void>
  startLogout: () => Promise<void>
}
