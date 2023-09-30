import { getWeekDayFromNumber } from '@/lib'
import { updateMealInNotionDB, postMealToNotionDB, fetchMealesFromNotionDB } from '@/actions/notion'

import type { UUID } from 'crypto'
import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse
} from '@notionhq/client/build/src/api-endpoints'
import type { Meal, EdditableMeal, NewMeal, NotionProperties, MealRepository } from '@/types'

export class NotionMealRepository implements MealRepository {
  private mapNotionPageToMeal = (
    page:
      | PageObjectResponse
      | PartialPageObjectResponse
      | PartialDatabaseObjectResponse
      | DatabaseObjectResponse
  ) => {
    if (!('properties' in page)) throw Error('Not data found in Notion API')
    const { properties } = page
    const id = page.id as UUID
    const {
      meal_name: mealName,
      proposer_name: proposerName,
      image_url: imageUrl,
      accepted,
      weekday
    }: NotionProperties = properties
    const weekdayDate = new Date(weekday.date.start)
    const meal: Meal = {
      id,
      accepted: accepted.checkbox,
      weekday: getWeekDayFromNumber(weekdayDate.getDay()),
      mealName: mealName.title[0].plain_text,
      imageUrl: imageUrl.rich_text[0].plain_text,
      proposerName: proposerName.select.name
    }
    return meal
  }

  create = async (newMeal: NewMeal) => {
    return await postMealToNotionDB(newMeal)
  }

  getAll = async (roomId: string) => {
    const results = await fetchMealesFromNotionDB(roomId)
    return results.map(this.mapNotionPageToMeal)
  }

  update = async (edditableMeal: EdditableMeal) => {
    return await updateMealInNotionDB(edditableMeal)
  }

  getById = async (mealId: string, roomId: string) => {
    const results = await fetchMealesFromNotionDB(roomId)
    const page = results.find((res) => res.id == mealId)
    return page == null ? null : this.mapNotionPageToMeal(page)
  }
}
