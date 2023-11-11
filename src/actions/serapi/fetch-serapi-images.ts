'use server'

import { SERPAPI_KEY } from '@/config'

export const fetchSerapiImages = async (query: string) => {
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
  const response = await fetch(`https://serpapi.com/search.json?${params.toString()}`)
  const data = await response.json()
  return data
}
