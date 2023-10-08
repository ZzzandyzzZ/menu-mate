import { IconButton } from '@mui/material'

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export const SquareIconButton = ({ onClick, children }: Props) => {
  return (
    <div>
      <IconButton
        onClick={() => {
          void onClick?.()
        }}
        sx={{ fontSize: '22px', bgcolor: 'rgba(255, 255, 255, 0.45)' }}
      >
        {children}
      </IconButton>
    </div>
  )
}
