import { BaseService } from './base-service'

import type { ImageSearchService as IImageSearchService, ImageSearchRepository } from '@/types'

class ImageSearchService extends BaseService<ImageSearchRepository> implements IImageSearchService {
  getByQuery = async (query: string) => {
    const data = await this.repository.getByQuery(query)
    return data
  }
}

export { ImageSearchService }
