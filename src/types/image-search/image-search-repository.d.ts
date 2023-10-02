import type { ImgMealData } from '.'

export interface ImageSearchRepository {
  getByQuery: (query: string) => Promise<ImgMealData[]>
}
