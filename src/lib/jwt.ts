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

export const validateJwtToken = async (jwt: string, secret: string) => {
  const encondedSecret = new TextEncoder().encode(secret)
  return await jwtVerify(jwt, encondedSecret)
}

export const getJwtData = async (jwt: string | undefined, secret: string | undefined) => {
  if (jwt == null || secret == null) {
    throw Error('Cannot get data from null jwt token')
  }
  try {
    const data = await validateJwtToken(jwt, secret)
    const payload: unknown = data.payload
    return payload as JwtData
  } catch (error) {
    throw Error('Invalid jwt token')
  }
}
