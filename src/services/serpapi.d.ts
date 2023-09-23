export interface SerpApiData {
  search_metadata: SearchMetadata
  search_parameters: SearchParameters
  search_information: SearchInformation
  suggested_searches: SuggestedSearch[]
  images_results: ImagesResult[]
}

export interface SearchMetadata {
  id: string
  status: string
  json_endpoint: string
  created_at: string
  processed_at: string
  google_images_url: string
  raw_html_file: string
  total_time_taken: number
}

export interface SearchParameters {
  engine: string
  q: string
  location_requested: string
  location_used: string
  google_domain: string
  hl: string
  gl: string
  chips: string
  device: string
}

export interface SearchInformation {
  menu_items: MenuItem[]
}

export interface MenuItem {
  position: number
  title: string
  link?: string
  serpapi_link?: string
}

export interface SuggestedSearch {
  name: string
  link: string
  chips: string
  serpapi_link: string
  thumbnail: string
}

export interface ImagesResult {
  position: number
  thumbnail: string
  related_content_id: string
  serpapi_related_content_link: string
  source: string
  source_logo: string
  title: string
  link: string
  original: string
  original_width: number
  original_height: number
  is_product: boolean
}
