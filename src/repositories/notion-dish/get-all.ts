import { fetchDishesFromNotionDB } from '@/actions/notion'
import { getWeekDayFromNumber } from '@/lib'

import type { Dish } from '@/types'

type NotionProperties = Record<string, any>

export const getAll = async () => {
  const results = await fetchDishesFromNotionDB('1')

  return results.map((page) => {
    if (!('properties' in page)) throw Error('Not data found in Notion API')
    const { properties } = page
    const {
      id,
      dish_name: dishName,
      proposer_name: proposerName,
      image_url: imageUrl,
      accepted,
      weekday
    }: NotionProperties = properties
    const weekdayDate = new Date(weekday.date.start)
    const dish: Dish = {
      accepted: accepted.checkbox,
      weekday: getWeekDayFromNumber(weekdayDate.getDay()),
      dishName: dishName.rich_text[0].plain_text,
      id: id.title[0].plain_text,
      imageUrl: imageUrl.rich_text[0].plain_text,
      proposerName: proposerName.select.name
    }
    return dish
  })
}
