import { IconButton } from '@mui/material'

import { type RedirectButtonProps } from '@/types.d'
import Link from 'next/link'

export function RedirectButton({ redirect, fontSize, disabled = false, Icon }: RedirectButtonProps): JSX.Element {
  return (
    <Link href={redirect}>
      <IconButton size="small" disabled={disabled} sx={{ fontSize, bgcolor: 'rgba(255, 255, 255, 0.45)' }}>
        <Icon fontSize="inherit" />
      </IconButton>
    </Link>
  )
}
