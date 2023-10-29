'use client'

import { Box, Button, CircularProgress, MenuItem, TextField } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { authService } from '@/dependencies'
import { useSafeService } from '@/hooks'

import { LoginData, ProposerNames, type KeyProposerNames } from '@/types'
import { LoginPasswordField } from './login-password-field'

export const LoginForm = () => {
  const { push } = useRouter()
  const [proposerName, setProposerName] = useState('')
  const [password, setPassword] = useState('')
  const roomId = useSearchParams().get('room_id') as string
  const { startLogin } = authService
  const enumProposer = ProposerNames[proposerName as KeyProposerNames]
  const { runner, loading, error } = useSafeService<LoginData, void>({
    execute: startLogin,
    data: { roomId, proposerName: enumProposer, password },
    callback: () => {
      push('/meals')
    }
  })

  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault()
          runner()
        }}
        sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <TextField
          defaultValue=""
          label="Nombre de usuario"
          margin="dense"
          error={error != null}
          helperText={error}
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
        <LoginPasswordField password={password} setPassword={setPassword} />

        {loading ? (
          <CircularProgress />
        ) : (
          <Button type="submit" fullWidth variant="outlined" sx={{ my: 2 }} color="info">
            Ingresar
          </Button>
        )}
      </Box>
    </>
  )
}
