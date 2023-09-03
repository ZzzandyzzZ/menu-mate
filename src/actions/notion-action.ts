'use server'
import { getMondayDate } from '@/lib/date'
import { Client } from '@notionhq/client'

const getNotionClient = () => {
  if (process.env.NOTION_API_KEY == null) throw Error('NOTION_API_KEY not found')
  if (process.env.NOTION_DB_ID == null) throw Error('NOTION_DB_ID not found')
  return {
    notion: new Client({
      auth: process.env.NOTION_API_KEY
    }),
    databaseId: process.env.NOTION_DB_ID
  }
}

export const fetchNotionDB = async () => {
  const { notion, databaseId } = getNotionClient()
  const query = {
    database_id: databaseId,
    filter: {
      property: 'room_id',
      rich_text: {
        equals: '1'
      }
    }
  }
  const { results } = await notion.databases.query(query)
  return results
}

export async function addToDatabase({
  id,
  dishName,
  imageUrl,
  roomId,
  accepted,
  dateStr,
  proposerName
}: addToDatabaseProps) {
  const { notion, databaseId } = getNotionClient()
  const date = new Date(dateStr)
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId
    },
    properties: {
      id: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: id
            }
          }
        ]
      },
      dish_name: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: dishName
            }
          }
        ]
      },
      image_url: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: imageUrl
            }
          }
        ]
      },
      room_id: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: roomId
            }
          }
        ]
      },
      accepted: {
        type: 'checkbox',
        checkbox: accepted
      },
      weekday: {
        type: 'date',
        date: {
          start: date.toISOString().split('T')[0]
        }
      },
      week_start: {
        type: 'date',
        date: {
          start: getMondayDate(date).toISOString().split('T')[0]
        }
      },
      proposer_name: {
        type: 'select',
        select: {
          name: proposerName
        }
      }
    }
  })
  return response
}
