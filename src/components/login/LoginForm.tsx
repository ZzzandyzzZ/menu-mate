'use client'
import { useEffect, useState } from 'react'
import { redirect, useSearchParams } from 'next/navigation'
import { Box, Button, MenuItem, TextField } from '@mui/material'

import type { FormEvent } from 'react'
import { ProposerNames } from '@/types'

export const LoginForm = () => {
  const [proposerName, setProposerName] = useState('')
  const [password, setPassword] = useState('')
  const searchParams = useSearchParams()
  const roomId = searchParams.get('room_id')
  if (roomId == null) {
    redirect('/')
  }

  useEffect(() => {}, [roomId])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
