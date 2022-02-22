import { SaveUserCache } from '@domain/use-case/user'
import { InsertDataCache } from '@data/protocols/cache'

export class CacheSaveUser implements SaveUserCache {
  constructor(private readonly insertDataCache: InsertDataCache) {}

  async save (userData: SaveUserCache.Params): Promise<SaveUserCache.Result> {
    const cacheData = {
      key: `user:${userData.user}`,
      value: JSON.stringify(userData)
    }
    const inserted = await this.insertDataCache.insert(cacheData)
    return inserted
  }
}
