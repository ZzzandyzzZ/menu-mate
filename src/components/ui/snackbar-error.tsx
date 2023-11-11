'use client'

import { useStore } from '@/store'
import { Alert, Snackbar } from '@mui/material'

export const ErrorSnackbar = () => {
  const globalError = useStore((state) => state.globalError)
  const clearGlobalError = useStore((state) => state.clearGlobalError)

  return (
    <Snackbar open={globalError !== ''} autoHideDuration={6000} onClose={() => clearGlobalError()}>
      <Alert onClose={() => clearGlobalError()} severity="error" sx={{ width: '100%' }}>
        {globalError}
      </Alert>
    </Snackbar>
  )
}
