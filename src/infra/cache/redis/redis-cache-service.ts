// import {} from '@infra/cache/redis'
import { InsertDataCache } from '@data/protocols/cache'

export class RedisCacheService implements InsertDataCache {

  async insert (data: string): Promise<boolean> {
    return true
  }
}
