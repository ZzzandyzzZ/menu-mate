'use client'

import { type FormEvent, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Box, Button, MenuItem, TextField } from '@mui/material'

import { authService } from '@/dependencies'

import { type KeyProposerNames, ProposerNames } from '@/types'

export const LoginForm = () => {
  const { push } = useRouter()
  const [proposerName, setProposerName] = useState('')
  const [errorMsg, setErrorMsg] = useState<null | string>(null)
  const [password, setPassword] = useState('')
  const roomId = useSearchParams().get('room_id') as string

  const { startLogin } = authService

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const enumProposer = ProposerNames[proposerName as KeyProposerNames]
    const { success, error } = await startLogin(roomId, enumProposer, password)
    if (success) {
      push('/meals')
    } else {
      setErrorMsg(error)
    }
  }

  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => {
          void handleSubmit(e)
        }}
        sx={{ mt: 1 }}
      >
        <TextField
          defaultValue=""
          label="Nombre de usuario"
          margin="dense"
          error={errorMsg != null}
          helperText={errorMsg}
          value={proposerName}
          onChange={(e) => {
            setProposerName(e.target.value)
          }}
          fullWidth
          required
          select
        >
          {Object.values(ProposerNames).map((proposerName) => (
            <MenuItem value={proposerName} key={proposerName}>
              {proposerName}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Contraseña"
          margin="dense"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          fullWidth
          required
        />
        <Button type="submit" fullWidth variant="outlined" sx={{ my: 2 }} color="info">
          Ingresar
        </Button>
      </Box>
    </>
  )
}
