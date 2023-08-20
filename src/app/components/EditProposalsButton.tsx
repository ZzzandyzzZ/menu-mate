import { useRouter } from 'next/navigation'

import { IconButton } from '@mui/material'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone'

export function EditProposalsButton () {
  const router = useRouter()
  const handleClick = () => {
    router.push('/proposals')
  }
  return (
    <IconButton onClick={handleClick} sx={{ fontSize: '50px' }}>
      <BuildCircleTwoToneIcon fontSize="inherit" />
    </IconButton>
  )
}
