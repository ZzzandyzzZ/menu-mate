'use server'
import { getNotionClient } from '.'

import type { NewDish } from '@/types'

export const postDishToNotionDB = async ({
  dishName,
  imageUrl,
  roomId,
  accepted,
  weekday,
  weekStart,
  proposerName
}: NewDish) => {
  const { notion, databaseId } = await getNotionClient()
  return await notion.pages.create({
    parent: {
      database_id: databaseId
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
