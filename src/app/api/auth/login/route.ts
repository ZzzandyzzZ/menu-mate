import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { CREDENTIALS, JWT_KEY } from '@/config'
import { COOKIE_JWT_NAME } from '@/constants'
import { getJwtToken } from '@/lib'

export async function POST(request: Request) {
  if (JWT_KEY == null || CREDENTIALS == null) {
    return NextResponse.json({ error: 'Env vars not defined' }, { status: 500 })
  }
  const { username, password: ReqPassword, roomId } = await request.json()
  const { password, role } = JSON.parse(CREDENTIALS)[username]
  if (password !== ReqPassword) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
  }
  const token = await getJwtToken({ role, proposerName: username, roomId }, JWT_KEY)
  cookies().set(COOKIE_JWT_NAME, token, {
    sameSite: 'strict',
    path: '/',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  })
  return NextResponse.json({ msg: 'Successful login' })
}
