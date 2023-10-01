import { Box, Toolbar } from '@mui/material'

import { DrawerAppBar } from '@/components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meals list'
}

export default function MealLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DrawerAppBar />
      <Toolbar />
      <Box px={2} width="100%">
        {children}
      </Box>
    </>
  )
}
