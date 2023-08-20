import { useContext } from 'react'

import { DishesContext } from '@/contexts/dishesContext'
import { type DishesContext as DishesContextType } from '@/types.d'

export function useDishes (): DishesContextType {
  const context = useContext(DishesContext)
  if (context == null) throw Error('useDishes must be used within a DishesProvider')
  return context
}
