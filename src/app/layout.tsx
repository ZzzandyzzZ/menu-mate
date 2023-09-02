import type { Metadata } from 'next'

import { CssBaseline } from '@mui/material'

import Providers from '@/providers'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const metadata: Metadata = {
  title: 'Menu Mate',
  description: 'App to organize yours menus'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
