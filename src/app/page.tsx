import { Box, Paper, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        backgroundImage: 'url("./img/food-background.svg")',
        backgroundPosition: 'center',
        backgroundSize: 'auto 100%'
      }}
    >
      <Paper elevation={5} sx={{ p: 1, m: 1, opacity: 0.9 }}>
        <Typography variant="h1" fontWeight="bold">
          Menu Mate
        </Typography>
        <Typography variant="h5">Necesitas un link de invitación para poder ingresar.</Typography>
      </Paper>
    </Box>
  )
}
