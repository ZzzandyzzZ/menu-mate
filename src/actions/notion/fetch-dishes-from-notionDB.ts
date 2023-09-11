'use server'
import { getNotionClient } from './notion-client'

export const fetchDishesFromNotionDB = async (roomId: string) => {
  const { notion, databaseId } = await getNotionClient()
  const query = {
    database_id: databaseId,
    filter: {
      property: 'room_id',
      rich_text: {
        equals: roomId
      }
    }
  }
  const { results } = await notion.databases.query(query)
  return results
}
