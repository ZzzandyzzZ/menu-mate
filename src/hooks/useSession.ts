import { useContext } from 'react'

import { SessionContext } from '@/contexts/sessionContext'
import { type SessionContext as SessionContextType } from '@/types.d'

export function useSession (): SessionContextType {
  const context = useContext(SessionContext)
  if (context == null) throw new Error('useSession must be used within a SessionProvider')
  return context
}
