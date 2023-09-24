import type { AuthRepository } from '@/types'

export class FetchAuthRepository implements AuthRepository {
  setCookieToken = async (username: string, password: string) => {
    const response = await fetch('api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
    const body = await response.json()
    if (response.status !== 200) throw Error(body.error)
    return body
  }

  clearToken = async () => {
    const response = await fetch('api/auth/logout')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.error)
  }
}
