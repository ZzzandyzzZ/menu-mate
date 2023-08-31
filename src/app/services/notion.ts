'use server'
const { Client } = require('@notionhq/client')

export const fetchNotionMenuData = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })

  const query = {
    database_id: '20d1908c855c47d08c9a2a3aed86db3a',
    filter: {
      property: 'room_id',
      rich_text: {
        equals: '1',
      },
    },
  }
  const { results } = await notion.databases.query(query)
  //   return results
  return results.map((page: unknown) => {
    const { properties } = page
    const { id, dish_name, proposer_name, image_url, accepted, weekday } = properties
    const weekdayDate = new Date(weekday.date.start)
    // return { id, dish_name, proposer_name, image_url }
    return {
      accepted: accepted.checkbox,
      weekday: weekdayDate.getDay(),
      dishName: dish_name.rich_text[0].plain_text,
      id: id.title[0].plain_text,
      imageUrl: image_url.rich_text[0].plain_text,
      proposerName: proposer_name.select.name,
    }
  })
}
