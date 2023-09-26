import { COOKIE_JWT_NAME } from './constants'

import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const token = request.cookies.get(COOKIE_JWT_NAME)
  const roomId = searchParams.get('room_id')
  const availableRooms = process.env.ROOM_IDS
  if (pathname === '/login') {
    if (token != null) {
      return NextResponse.redirect(new URL('/app', request.url))
    }
    if (roomId == null || roomId === '') {
      return NextResponse.redirect(new URL('/', request.url))
    }
    if (availableRooms == null) {
      return NextResponse.redirect(new URL('/?error=NotAvailableRooms', request.url))
    }
    if (!availableRooms.split(',').includes(roomId)) {
      return NextResponse.redirect(new URL('/?error=InvalidRoom', request.url))
    }
  }
  if (pathname.startsWith('/app') && token == null) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}
