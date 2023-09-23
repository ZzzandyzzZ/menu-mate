import { Box, Paper } from '@mui/material'

import { SimpleMessage } from '@/components'

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        backgroundImage: 'url("./img/food-background.png")',
        backgroundPosition: 'center',
        backgroundSize: 'auto 100%'
      }}
    >
      <Paper elevation={5} sx={{ p: 1, m: 1, opacity: 0.9 }}>
        <SimpleMessage
          title="Menu Mate"
          message="Necesitas un link de invitación para poder ingresar."
        />
      </Paper>
    </Box>
  )
}
