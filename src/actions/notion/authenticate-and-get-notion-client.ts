'use server'

import { Client } from '@notionhq/client'
import { cookies } from 'next/headers'

import { JWT_KEY, NOTION_API_KEY, NOTION_DB_ID } from '@/config'
import { COOKIE_JWT_NAME } from '@/constants'
import { getJwtData } from '@/lib'

const getNotionClient = () => {
  if (NOTION_API_KEY == null) throw Error('NOTION_API_KEY not found')
  if (NOTION_DB_ID == null) throw Error('NOTION_DB_ID not found')
  return {
    notion: new Client({
      auth: NOTION_API_KEY
    }),
    databaseId: NOTION_DB_ID
  }
}

export const getAuth = async () => {
  const jwtToken = cookies().get(COOKIE_JWT_NAME)
  if (jwtToken == null) {
    throw Error('Unauthorized')
  }
  return await getJwtData(jwtToken.value, JWT_KEY)
}
export const authenticateAndGetNotionClient = async () => {
  const jwtData = await getAuth()
  const notionClient = getNotionClient()
  return { jwtData, notionClient }
}
