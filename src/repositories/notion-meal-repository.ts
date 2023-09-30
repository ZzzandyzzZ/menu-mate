import { fetchMealesFromNotionDB, postMealToNotionDB, updateMealInNotionDB } from '@/actions/notion'
import { getWeekDayFromNumber } from '@/lib'

import type {
  EdditableMeal,
  Meal,
  MealRepository,
  NewMeal,
  NotionPage,
  NotionProperties
} from '@/types'
import type { UUID } from 'crypto'

export class NotionMealRepository implements MealRepository {
  private readonly mapNotionPageToMeal = (page: NotionPage) => {
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
    const page = results.find((res) => res.id === mealId)
    return page == null ? null : this.mapNotionPageToMeal(page)
  }
}
