export interface AuthRepository {
  setCookieToken: (username: string, password: string) => Promise<void>
  clearToken: () => Promise<void>
}
