'use server'

import { Client } from '@notionhq/client'

import type { UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints'
import type { EdditableDish, NewDish } from '@/types'

// const generateProperty = (type, value) => {
//   switch (type) {
//     case 'title':
//       return {
//         type: 'title',
//         title: [
//           {
//             type: 'text',
//             text: {
//               content: value
//             }
//           }
//         ]
//       }
//     case 'rich_text':
//       return {
//         type: 'rich_text',
//         rich_text: [
//           {
//             type: 'text',
//             text: {
//               content: value
//             }
//           }
//         ]
//       }
//     case 'checkbox':
//       return {
//         type: 'checkbox',
//         checkbox: value
//       }
//     case 'date':
//       return {
//         type: 'date',
//         date: {
//           start: value
//         }
//       }
//     case 'select':
//       return {
//         type: 'select',
//         select: {
//           name: value
//         }
//       }
//     default:
//       return null
//   }
// }

const getQueryFromEditableDish = (edditableDish: EdditableDish) => {
  const { dishName, imageUrl, accepted, weekday, id } = edditableDish
  const query: UpdatePageParameters = {
    page_id: id
  }
  query.properties = {}
  if (dishName != null) {
    query.properties.dish_name = {
      type: 'title',
      title: [
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

export class NotionActions {
  private readonly client
  private readonly databaseId: string
  constructor() {
    if (process.env.NOTION_API_KEY == null) throw Error('NOTION_API_KEY not found')
    if (process.env.NOTION_DB_ID == null) throw Error('NOTION_DB_ID not found')
    this.client = new Client({
      auth: process.env.NOTION_API_KEY
    })
    this.databaseId = process.env.NOTION_DB_ID
  }

  updateDishInNotionDB = async (edditableDish: EdditableDish) => {
    const query = getQueryFromEditableDish(edditableDish)
    return await this.client.pages.update(query)
  }

  postDishToNotionDB = async ({
    dishName,
    imageUrl,
    roomId,
    accepted,
    weekday,
    weekStart,
    proposerName
  }: NewDish) => {
    return await this.client.pages.create({
      parent: {
        database_id: this.databaseId
      },
      properties: {
        dish_name: {
          type: 'title',
          title: [
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
            start: weekday
          }
        },
        week_start: {
          type: 'date',
          date: {
            start: weekStart
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

  fetchDishesFromNotionDB = async (roomId: string) => {
    const query = {
      database_id: this.databaseId,
      filter: {
        property: 'room_id',
        rich_text: {
          equals: roomId
        }
      }
    }
    const { results } = await this.client.databases.query(query)
    return results
  }
}
