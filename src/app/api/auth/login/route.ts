import { NextResponse } from 'next/server'

import { getJwtToken } from '@/lib'
import type { KeyProposerNames } from '@/types'
import { COOKIE_JWT_NAME } from '@/constants'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { JWT_KEY, CREDENTIALS } = process.env
  if (JWT_KEY == null || CREDENTIALS == null) {
    return NextResponse.json({ error: 'Env vars not defined' }, { status: 500 })
  }
  const body = await request.json()
  const username: KeyProposerNames = body.username
  const credentials = JSON.parse(CREDENTIALS)
  const userData = credentials[username]
  if (userData.password !== body.password) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
  }
  const token = await getJwtToken({ userData }, JWT_KEY)
  cookies().set(COOKIE_JWT_NAME, token, {
    sameSite: 'strict',
    path: '/',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  })
  return NextResponse.json({ msg: 'Successful login' })
}
