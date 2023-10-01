'use client'

import { useStore } from '@/store'
import { useRef } from 'react'

import type { JwtData } from '@/types'

export const StoreInitializer = ({ proposerName, roomId }: JwtData) => {
  const initialized = useRef(false)
  if (!initialized.current) {
    console.log('client', { roomId, proposerName })
    useStore.setState({ proposerName, roomId })
    initialized.current = true
  }
  return null
}
