import { Paper, Typography } from '@mui/material'

import { LoginForm } from '@/components/login'

export default function LoginPage() {
  return (
    <Paper
      elevation={5}
      sx={{
        p: 2
      }}
    >
      <Typography component="h1" variant="h5">
        Iniciar sesión
      </Typography>
      <LoginForm />
    </Paper>
  )
}
