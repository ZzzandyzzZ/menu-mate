import type { UUID } from 'crypto'
import type { ProposerNames } from '.'

export interface StoreState {
  dishes: Dish[]
  currDishId: UUID | null
  roomId: string | null
  proposerName: ProposerNames | null
}
