import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { COOKIE_JWT_NAME } from '@/constants'
import { validateJwtToken } from '@/lib'

export async function GET() {
  const JWT_KEY = process.env.JWT_KEY
  const jwtToken = cookies().get(COOKIE_JWT_NAME)
  if (jwtToken == null) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }
  if (JWT_KEY == null) {
    return NextResponse.json({ error: 'Env vars not defined' }, { status: 500 })
  }
  try {
    await validateJwtToken(jwtToken.value, JWT_KEY)
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
  cookies().delete(COOKIE_JWT_NAME)
  return NextResponse.json({ message: 'Successful logout' })
}
