'use server'
import { getNotionClient } from './notion-client'

import type { UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints'
import type { EdditableDish } from '@/types/dish'

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
export const updateDishInNotionDB = async (edditableDish: EdditableDish) => {
  const { notion } = await getNotionClient()
  const query = getQueryFromEditableDish(edditableDish)
  return await notion.pages.update(query)
}
