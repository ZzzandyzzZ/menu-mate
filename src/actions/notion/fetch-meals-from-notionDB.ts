'use server'

import { authenticateAndGetNotionClient } from './authenticate-and-get-notion-client'

export const fetchMealesFromNotionDB = async () => {
  const {
    jwtData: { roomId },
    notionClient: { databaseId, notion }
  } = await authenticateAndGetNotionClient()
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
