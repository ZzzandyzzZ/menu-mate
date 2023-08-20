'use client'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import { DishesProvider } from '@/contexts/dishesContext'
import { SessionProvider } from '@/contexts/sessionContext'

import '@fontsource/roboto/700.css'

const clientSideEmotionCache = createCache({ key: 'mui' })

export function Providers ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <SessionProvider>
        <DishesProvider>
        { children }
        </DishesProvider>
      </SessionProvider>
    </CacheProvider>
  )
}
