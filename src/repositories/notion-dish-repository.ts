import { getWeekDayFromNumber } from '@/lib'
import { updateDishInNotionDB, postDishToNotionDB, fetchDishesFromNotionDB } from '@/actions/notion'

import type { UUID } from 'crypto'
import type {
  Dish,
  EdditableDish,
  NewDish,
  NotionProperties,
  NotionDishRepository as INotionDishRepository
} from '@/types'

export class NotionDishRepository implements INotionDishRepository {
  create = async (newDish: NewDish) => {
    return await postDishToNotionDB(newDish)
  }

  getAll = async () => {
    const results = await fetchDishesFromNotionDB('1')
    return results.map((page) => {
      if (!('properties' in page)) throw Error('Not data found in Notion API')
      const { properties } = page
      const id = page.id as UUID
      const {
        dish_name: dishName,
        proposer_name: proposerName,
        image_url: imageUrl,
        accepted,
        weekday
      }: NotionProperties = properties
      const weekdayDate = new Date(weekday.date.start)
      const dish: Dish = {
        id,
        accepted: accepted.checkbox,
        weekday: getWeekDayFromNumber(weekdayDate.getDay()),
        dishName: dishName.title[0].plain_text,
        imageUrl: imageUrl.rich_text[0].plain_text,
        proposerName: proposerName.select.name
      }
      return dish
    })
  }

  update = async (edditableDish: EdditableDish) => {
    return await updateDishInNotionDB(edditableDish)
  }
}
