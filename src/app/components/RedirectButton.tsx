import { useRouter } from 'next/navigation'

import { IconButton } from '@mui/material'

import { type RedirectButtonProps } from '@/types.d'

export function RedirectButton ({ redirect, fontSize, disabled = false, Icon }: RedirectButtonProps) {
  const router = useRouter()

  return (
    <IconButton
      size="small"
      onClick={() => {
        router.push(redirect)
      }}
      disabled={disabled}
      sx={{ fontSize, bgcolor: 'rgba(255, 255, 255, 0.45)' }}
    >
      <Icon fontSize="inherit" />
    </IconButton>
  )
}
