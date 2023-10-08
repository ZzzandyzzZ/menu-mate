import { NextResponse, type NextRequest } from 'next/server'

import { JWT_KEY, ROOM_IDS } from './config'
import { COOKIE_JWT_NAME } from './constants'
import { validateJwtToken } from './lib'

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const token = request.cookies.get(COOKIE_JWT_NAME)
  const roomId = searchParams.get('room_id')
  const availableRooms = ROOM_IDS
  if (pathname === '/login') {
    if (token != null) {
      return NextResponse.redirect(new URL('/meals', request.url))
    }
    if (roomId == null || roomId === '') {
      return NextResponse.redirect(new URL('/?error=NeedRoom', request.url))
    }
    if (availableRooms == null) {
      return NextResponse.redirect(new URL('/?error=NotAvailableRooms', request.url))
    }
    if (!availableRooms.split(',').includes(roomId)) {
      return NextResponse.redirect(new URL('/?error=InvalidRoom', request.url))
    }
  }
  if (pathname.startsWith('/meals')) {
    if (token == null) {
      return NextResponse.redirect(new URL('/?error=NotLogged', request.url))
    } else {
      try {
        await validateJwtToken(token.value, JWT_KEY)
      } catch (error) {
        const response = NextResponse.redirect(new URL('/?error=InvalidToken', request.url))
        response.cookies.delete(COOKIE_JWT_NAME)
        return response
      }
    }
  }
  return NextResponse.next()
}
