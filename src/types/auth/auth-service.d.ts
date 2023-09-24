import type { ProposerNames, ServiceResponse } from '..'

export interface AuthService {
  startLogin: (
    roomId: string,
    proposerName: ProposerNames,
    password: string
  ) => Promise<ServiceResponse<null>>
  startLogout: () => Promise<void>
}
