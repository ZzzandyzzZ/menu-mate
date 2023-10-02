import { ImgMealData } from '.'

export interface ImageSearchService {
  getByQuery: (query: string) => Promise<ImgMealData[]>
}
