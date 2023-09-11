import { getNotionClient } from './notion-client'

import { type UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints'

interface Params {
  edditableDish: EdditableDish
  pageId: string
}

const getQueryFromEditableDish = (pageId: string, edditableDish: EdditableDish) => {
  const { dishName, imageUrl, accepted, weekday } = edditableDish
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
export const updateDishInNotionDB = async ({ pageId, edditableDish }: Params) => {
  const { notion } = await getNotionClient()
  const query = getQueryFromEditableDish(pageId, edditableDish)
  return await notion.pages.update(query)
}
