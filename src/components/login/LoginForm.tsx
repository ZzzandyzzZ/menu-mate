'use client'

import { useState } from 'react'
import { redirect, useSearchParams } from 'next/navigation'
import { Box, Button, MenuItem, TextField } from '@mui/material'

import { authService } from '@/dependencies'

import { type FormEvent } from 'react'
import { ProposerNames } from '@/types'

export const LoginForm = () => {
  const [proposerName, setProposerName] = useState('')
  const [password, setPassword] = useState('')
  const searchParams = useSearchParams()
  const roomId = searchParams.get('room_id')
  const { startLogin } = authService

  if (roomId == null) {
    redirect('/')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const enumObject = ProposerNames[proposerName as keyof typeof ProposerNames]
    startLogin(roomId, enumObject, password)
      .then(() => {
        redirect('/app')
      })
      .catch(console.error)
  }

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          label="Nombre de usuario"
          margin="dense"
          value={proposerName}
          onChange={(e) => {
            setProposerName(e.target.value)
          }}
          defaultValue=""
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
