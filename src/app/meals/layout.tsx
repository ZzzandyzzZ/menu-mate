import { Toolbar } from '@mui/material'
import { cookies } from 'next/headers'

import { DrawerAppBar, StoreInitializer } from '@/components'
import { COOKIE_JWT_NAME } from '@/constants'
import { getJwtData } from '@/lib'
import { useStore } from '@/store'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meals list'
}

export default async function MealLayout({ children }: { children: React.ReactNode }) {
  const jwtToken = cookies().get(COOKIE_JWT_NAME)
  const { roomId, proposerName } = await getJwtData(jwtToken?.value, process.env.JWT_KEY)
  useStore.setState({ roomId, proposerName })
  return (
    <>
      <StoreInitializer proposerName={proposerName} roomId={roomId} />
      <DrawerAppBar />
      <Toolbar />
      {children}
    </>
  )
}
