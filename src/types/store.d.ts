import type { UUID } from 'crypto'
import type { ProposerNames } from '.'

export interface StoreState {
  meals: Meal[]
  currMealId: UUID | null
  roomId: string | null
  proposerName: ProposerNames | null
  clear: () => void
}
