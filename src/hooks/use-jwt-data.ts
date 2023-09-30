import { cookies } from 'next/headers'

import { COOKIE_JWT_NAME } from '@/constants'
import { getJwtData } from '@/lib'

export const useJwtData = async () => {
  const jwtToken = cookies().get(COOKIE_JWT_NAME)
  return await getJwtData(jwtToken?.value, process.env.JWT_KEY)
}
