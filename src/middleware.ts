import { NextResponse, type NextRequest } from 'next/server'

import { decodeJwt } from 'jose'
import { JWT_KEY, ROOM_IDS } from './config'
import { COOKIE_JWT_NAME } from './constants'
import { hasValidToken } from './lib'

export async function middleware({ url, nextUrl, cookies }: NextRequest) {
  const { pathname, searchParams, href } = nextUrl
  const token = cookies.get(COOKIE_JWT_NAME)
  const roomId = searchParams.get('room_id')
  const availableRooms = ROOM_IDS
  let validToken = false
  let tokenRoomId = null
  if (token != null) {
    validToken = await hasValidToken(token.value, JWT_KEY)
    try {
      tokenRoomId = await decodeJwt(token.value).roomId
    } catch (error) {}
  }
  if (pathname === '/login') {
    if (roomId == null || roomId === '') {
      return NextResponse.redirect(new URL('/?error=NeedRoom', url))
    }
    if (availableRooms == null) {
      return NextResponse.redirect(new URL('/?error=NotAvailableRooms', url))
    }
    if (!availableRooms.split(',').includes(roomId)) {
      return NextResponse.redirect(new URL('/?error=InvalidRoom', url))
    }
    if (validToken) {
      return NextResponse.redirect(new URL('/meals', url))
    }
    if (!validToken && token != null) {
      const url = new URL(href)
      url.searchParams.append('error', 'LoginAgain')
      const response = NextResponse.redirect(url)
      response.cookies.delete(COOKIE_JWT_NAME)
      return response
    }
  }
  if (pathname.startsWith('/meals')) {
    if (validToken) {
      return NextResponse.next()
    }
    if (tokenRoomId != null) {
      const redirUrl = new URL(new URL(`/login?room_id=${tokenRoomId}&error=ExpiredToken`, url))
      const response = NextResponse.redirect(redirUrl)
      response.cookies.delete(COOKIE_JWT_NAME)
      return response
    } else {
      return NextResponse.redirect(new URL('/?error=NotLogged', url))
    }
  }
  return NextResponse.next()
}
