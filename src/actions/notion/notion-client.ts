'use server'
import { Client } from '@notionhq/client'

export const getNotionClient = async () => {
  if (process.env.NOTION_API_KEY == null) throw Error('NOTION_API_KEY not found')
  if (process.env.NOTION_DB_ID == null) throw Error('NOTION_DB_ID not found')
  return {
    notion: new Client({
      auth: process.env.NOTION_API_KEY
    }),
    databaseId: process.env.NOTION_DB_ID
  }
}
