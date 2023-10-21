import { SignJWT, jwtVerify } from 'jose'

import type { JwtData } from '@/types'
import type { JWTPayload } from 'jose'

export const getJwtToken = async (data: JWTPayload, secret: string) => {
  const encondedSecret = new TextEncoder().encode(secret)
  const jwt = await new SignJWT(data)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(encondedSecret)
  return jwt
}

export const hasValidToken = async (jwt: string, secret: string) => {
  try {
    await jwtVerify(jwt, new TextEncoder().encode(secret))
  } catch (error) {
    return false
  }
  return true
}

export const getJwtData = async (jwt: string, secret: string) => {
  const encondedSecret = new TextEncoder().encode(secret)
  try {
    const data = await jwtVerify(jwt, encondedSecret)
    const payload: unknown = data.payload
    return payload as JwtData
  } catch (error) {
    throw Error('Invalid jwt token')
  }
}
