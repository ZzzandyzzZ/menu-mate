import { fetchNotionDB } from '@/actions/notion-action'
import { getWeekDayFromNumber } from '@/lib/date'

export const getNotionMenuData = async () => {
  const results = await fetchNotionDB()
  return results.map((page) => {
    if (!('properties' in page)) return {}
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
    return {
      accepted: accepted.checkbox,
      weekday: getWeekDayFromNumber(weekdayDate.getDay()),
      dishName: dishName.rich_text[0].plain_text,
      id: id.title[0].plain_text,
      imageUrl: imageUrl.rich_text[0].plain_text,
      proposerName: proposerName.select.name
    }
  })
}
