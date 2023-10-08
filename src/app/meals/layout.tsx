import { Toolbar } from '@mui/material'

import { DrawerAppBar } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meals list'
}

export default async function MealLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DrawerAppBar />
      <Toolbar />
      {children}
    </>
  )
}
