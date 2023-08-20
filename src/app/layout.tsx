import type { Metadata } from 'next'

import { CssBaseline, Box, Container, Typography } from '@mui/material'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Menu Mate',
  description: 'App to save your week menu'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
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
              {children}
              <Box position="fixed" bottom={0} zIndex={2} bgcolor="gray" left={0} right={0}>
                <Typography variant="h6" textAlign="center">
                  Menu Mate
                </Typography>
              </Box>
            </Box>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
