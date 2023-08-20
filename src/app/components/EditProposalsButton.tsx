import { useRouter } from 'next/navigation'

import { IconButton } from '@mui/material'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone'

export function EditProposalsButton (): JSX.Element {
  const router = useRouter()
  const handleClick = (): void => {
    router.push('/proposals')
  }
  return (
    <IconButton onClick={handleClick} sx={{ fontSize: '50px' }}>
      <BuildCircleTwoToneIcon fontSize="inherit" />
    </IconButton>
  )
}
