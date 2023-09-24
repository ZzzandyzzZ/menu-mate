import { SignJWT, jwtVerify } from 'jose'

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
