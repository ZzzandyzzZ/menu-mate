import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { JWT_KEY } from '@/config'
import { COOKIE_JWT_NAME } from '@/constants'
import { hasValidToken } from '@/lib'

export async function GET() {
  const jwtToken = cookies().get(COOKIE_JWT_NAME)
  if (jwtToken == null) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }
  if (JWT_KEY == null) {
    return NextResponse.json({ error: 'Env vars not defined' }, { status: 500 })
  }
  const validToken = await hasValidToken(jwtToken.value, JWT_KEY)
  if (!validToken) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
  cookies().delete(COOKIE_JWT_NAME)
  return NextResponse.json({ message: 'Successful logout' })
}
