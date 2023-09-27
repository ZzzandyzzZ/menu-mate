'use server'
import { getNotionClient } from '.'

import type { NewMeal } from '@/types'

export const postMealToNotionDB = async ({
  mealName,
  imageUrl,
  roomId,
  accepted,
  weekday,
  weekStart,
  proposerName
}: NewMeal) => {
  const { notion, databaseId } = await getNotionClient()
  return await notion.pages.create({
    parent: {
      database_id: databaseId
    },
    properties: {
      meal_name: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: mealName
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
