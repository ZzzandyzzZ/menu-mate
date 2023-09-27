export interface AuthRepository {
  setCookieToken: (username: string, password: string, roomId: string) => Promise<void>
  clearToken: () => Promise<void>
}
