'use server'

import { authenticateAndGetNotionClient } from './authenticate-and-get-notion-client'

import type { UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints'
import type { UUID } from 'crypto'

export const deleteMealInNotionDB = async (mealID: UUID) => {
  const {
    notionClient: { notion }
  } = await authenticateAndGetNotionClient()
  const query: UpdatePageParameters = {
    page_id: mealID,
    archived: true
  }
  return await notion.pages.update(query)
}
