import { Typography } from '@mui/material'

interface Props {
  title: string
}

export const PageTitle = ({ title }: Props) => {
  return (
    <Typography variant="h4" textAlign="center" py={2}>
      {title}
    </Typography>
  )
}
