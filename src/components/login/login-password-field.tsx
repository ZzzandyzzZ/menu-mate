'use client'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'

interface Props {
  password: string
  setPassword: (password: string) => void
}

export const LoginPasswordField = ({ password, setPassword }: Props) => {
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <TextField
      label="Contraseña"
      margin="dense"
      type={hidePassword ? 'password' : 'text'}
      value={password}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setHidePassword(!hidePassword)
              }}
            >
              {hidePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        )
      }}
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      fullWidth
      required
    />
  )
}
