import type { Metadata } from 'next'

import { CssBaseline, Box, Container, Typography } from '@mui/material'

import Providers from '@/providers'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { DrawerAppBar } from '@/components'

export const metadata: Metadata = {
  title: 'Menu Mate',
  description: 'App to organize yours menus'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Providers>
          <Container
            sx={{
              bgcolor: '#91C8E4'
            }}
          >
            <Box
              component="main"
              sx={{
                bgcolor: '#91C8E4',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <DrawerAppBar />
              {children}
            </Box>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
