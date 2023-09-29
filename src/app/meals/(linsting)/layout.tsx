import { Box } from '@mui/material'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'

import { RedirectButton } from '@/components'

export default function MealsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Box sx={{ position: 'fixed', bottom: 10, right: 10 }}>
        <RedirectButton redirect="/meals/new" fontSize="40px" Icon={AddCircleTwoToneIcon} />
      </Box>
    </>
  )
}
