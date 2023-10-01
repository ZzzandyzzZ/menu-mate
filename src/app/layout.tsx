import { Box, Container, CssBaseline } from '@mui/material'

import Providers from '@/providers'

import type { Metadata } from 'next'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

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
          <Container disableGutters>
            <Box
              component="main"
              sx={{
                alignItems: 'center',
                bgcolor: '#91C8E4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '100vh'
              }}
            >
              {children}
            </Box>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
