import { Typography } from '@mui/material'

interface Props {
  text: string
}

export const PageSubtitle = ({ text }: Props) => {
  return (
    <Typography variant="subtitle1" textAlign="center" sx={{ pb: 1 }}>
      {text}
    </Typography>
  )
}
