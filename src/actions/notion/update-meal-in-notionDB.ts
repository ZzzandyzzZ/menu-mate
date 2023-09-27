'use server'
import { getNotionClient } from '.'

import type { UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints'
import type { EdditableMeal } from '@/types/meal'

const getQueryFromEditableMeal = (edditableMeal: EdditableMeal) => {
  const { mealName, imageUrl, accepted, weekdayStr, weekStartStr, id } = edditableMeal
  const query: UpdatePageParameters = {
    page_id: id
  }
  query.properties = {}
  if (mealName != null) {
    query.properties.meal_name = {
      type: 'title',
      title: [
        {
          type: 'text',
          text: {
            content: mealName
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
  if (weekdayStr != null) {
    query.properties.weekday = {
      type: 'date',
      date: {
        start: weekdayStr
      }
    }
  }
  if (weekStartStr != null) {
    query.properties.week_start = {
      type: 'date',
      date: {
        start: weekStartStr
      }
    }
  }
  return query
}
export const updateMealInNotionDB = async (edditableMeal: EdditableMeal) => {
  const { notion } = await getNotionClient()
  const query = getQueryFromEditableMeal(edditableMeal)
  return await notion.pages.update(query)
}
