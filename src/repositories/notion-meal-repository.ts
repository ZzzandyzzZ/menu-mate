import { getWeekDayFromNumber } from '@/lib'
import { updateMealInNotionDB, postMealToNotionDB, fetchMealesFromNotionDB } from '@/actions/notion'

import type { UUID } from 'crypto'
import type { Meal, EdditableMeal, NewMeal, NotionProperties, MealRepository } from '@/types'

export class NotionMealRepository implements MealRepository {
  create = async (newMeal: NewMeal) => {
    return await postMealToNotionDB(newMeal)
  }

  getAll = async () => {
    const results = await fetchMealesFromNotionDB('1')
    return results.map((page) => {
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
    })
  }

  update = async (edditableMeal: EdditableMeal) => {
    return await updateMealInNotionDB(edditableMeal)
  }
}
