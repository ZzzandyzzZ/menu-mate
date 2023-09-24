import { Typography } from '@mui/material'

interface Props {
  title: string
  message: string
}

export function SimpleMessage({ title, message }: Props) {
  return (
    <>
      <Typography variant="h1" fontWeight="bold" textAlign="center">
        {title}
      </Typography>
      <Typography variant="h5" textAlign="center">
        {message}
      </Typography>
    </>
  )
}
