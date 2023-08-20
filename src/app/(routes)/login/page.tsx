'use client'
import { type FormEvent, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material'

import { capitalizeFirstLetter } from '@/lib'
import { ProposerNames } from '@/types.d'
import { useSession } from '@/hooks/useSession'
import { useDishes } from '@/hooks/useDishes'
import { MenuData } from '@/data'

export default function LoginPage (): JSX.Element {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { proposerName, setName, setRoomId } = useSession()
  const { setDishesList } = useDishes()

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // if (roomId == null) throw Error("Room not found");
    setDishesList(MenuData)
    router.push('/dishes')
  }

  useEffect(() => {
    setRoomId(searchParams.get('roomId'))
  }, [searchParams, setRoomId])

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
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          id="proposerName"
          label="Nombre de usuario"
          name="proposerName"
          margin="dense"
          value={proposerName}
          onChange={(e) => { setName(e.target.value) }}
          defaultValue=""
          fullWidth
          required
          select
        >
          {Object.values(ProposerNames).map((proposerName) => (
            <MenuItem value={proposerName} key={proposerName}>
              {capitalizeFirstLetter(proposerName)}
            </MenuItem>
          ))}
        </TextField>
        <TextField id="password" label="Contraseña" margin="dense" name="password" type="password" fullWidth required />
        <Button type="submit" fullWidth variant="outlined" sx={{ my: 2 }} color="info">
          Ingresar
        </Button>
      </Box>
    </Paper>
  )
}
