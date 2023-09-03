import { fetchNotionDB } from '@/actions/notion-action'
import { getWeekDayFromNumber } from '@/lib/date'

export const getNotionMenuData = async (): Promise<Dish[]> => {
  const results = await fetchNotionDB('1')
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
