export interface AuthRepository {
  getToken: (username: string, password: string) => Promise<string>
  clearToken: () => Promise<void>
}
