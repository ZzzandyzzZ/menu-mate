import { Box, Typography } from '@mui/material'

interface Props {
  title: string
  message: string
}

export function SimpleMessage({ title, message }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#91C8E4'
      }}
    >
      <Typography variant="h1" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h5">{message}</Typography>
    </Box>
  )
}
