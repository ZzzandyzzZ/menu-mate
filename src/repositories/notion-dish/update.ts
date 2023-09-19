import { updateDishInNotionDB } from '@/actions/notion'

import type { EdditableDish } from '@/types'

export const update = async (edditableDish: EdditableDish) => {
  const result = await updateDishInNotionDB(edditableDish)
  return result
}
