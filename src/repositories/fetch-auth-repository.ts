import type { AuthRepository } from '@/types'

export class FetchAuthRepository implements AuthRepository {
  getToken = async (username: string, password: string) => {
    console.log('start fetching')
    const response = await fetch('api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
    const token = await response.json()
    return token
  }

  clearToken = async () => {}
}
