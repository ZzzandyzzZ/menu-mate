import { useRouter } from 'next/navigation'

import { IconButton } from '@mui/material'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'

export function AddDishButton (): JSX.Element {
  const router = useRouter()
  const handleClick = (): void => {
    router.push('/dishes/new')
  }
  return (
    <IconButton onClick={handleClick} sx={{ fontSize: '50px' }}>
      <AddCircleTwoToneIcon fontSize="inherit" />
    </IconButton>
  )
}
