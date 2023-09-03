'use server'
import { getMondayDate } from '@/lib/date'
import { Client } from '@notionhq/client'
import { type UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints'

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

const getQueryFromEditableDish = (pageId: string, edditableDish: EdditableDish) => {
  const { dishName, imageUrl, accepted, weekday } = edditableDish
  console.log({ dishName, imageUrl, accepted, weekday })
  const query: UpdatePageParameters = {
    page_id: pageId
  }
  query.properties = {}
  if (dishName != null) {
    query.properties.dish_name = {
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: dishName
          }
        }
      ]
    }
  }
  if (imageUrl != null) {
    query.properties.image_url = {
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: imageUrl
          }
        }
      ]
    }
  }
  if (accepted != null) {
    query.properties.accepted = {
      type: 'checkbox',
      checkbox: accepted
    }
  }
  if (weekday != null) {
    query.properties.weekday = {
      type: 'date',
      date: {
        start: weekday.toISOString().split('T')[0]
      }
    }
  }
  return query
}

export const fetchNotionDB = async (roomId: string) => {
  const { notion, databaseId } = getNotionClient()
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

export const updateNotionPage = async ({ pageId, edditableDish }: updateNotionPageProps) => {
  const { notion } = getNotionClient()
  const query = getQueryFromEditableDish(pageId, edditableDish)
  return await notion.pages.update(query)
}

export async function postToNotionDB({
  id,
  dishName,
  imageUrl,
  roomId,
  accepted,
  dateStr,
  proposerName
}: postToNotionDBProps) {
  const { notion, databaseId } = getNotionClient()
  const date = new Date(dateStr)
  return await notion.pages.create({
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
}
