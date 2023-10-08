'use server'

import { SERPAPI_KEY } from '@/config'

export const FetchSerapiImages = async (query: string) => {
  if (SERPAPI_KEY == null) {
    throw Error('SERPAPI_KEY not defined')
  }
  const params = new URLSearchParams({
    engine: 'google_images',
    q: query,
    location: 'Arequipa, Peru',
    gl: 'pe',
    hl: 'es',
    device: 'mobile',
    output: 'json',
    api_key: SERPAPI_KEY
  })
  try {
    const response = await fetch(`https://serpapi.com/search.json?${params.toString()}`)
    return { data: await response.json(), error: null }
  } catch (error) {
    return {
      data: [],
      error: (error as Error).message
    }
  }
}
