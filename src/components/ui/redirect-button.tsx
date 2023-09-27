import Link from 'next/link'
import { IconButton } from '@mui/material'

interface Props {
  disabled?: boolean
  fontSize: string
  redirect: string
  Icon: React.ElementType
}

export function RedirectButton({ redirect, fontSize, Icon, disabled = false }: Props) {
  return (
    <Link href={redirect}>
      <IconButton
        size="small"
        disabled={disabled}
        sx={{ fontSize, bgcolor: 'rgba(255, 255, 255, 0.45)' }}
      >
        <Icon fontSize="inherit" />
      </IconButton>
    </Link>
  )
}
