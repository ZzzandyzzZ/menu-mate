import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'
import LockTwoTone from '@mui/icons-material/LockTwoTone'

import { SquareIconButton } from '@/components'

interface Props {
  isAccepted: boolean
  onClick: () => void
}

export const EditMealButton = ({ isAccepted, onClick }: Props) => {
  return (
    <SquareIconButton onClick={onClick}>
      {isAccepted ? <LockTwoTone fontSize="inherit" /> : <LockOpenTwoToneIcon fontSize="inherit" />}
    </SquareIconButton>
  )
}
