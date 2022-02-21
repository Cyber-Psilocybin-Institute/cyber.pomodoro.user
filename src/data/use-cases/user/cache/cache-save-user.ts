import { SaveUserCache } from '@domain/use-case/user'
import { InsertDataCache } from '@data/protocols/cache'

export class CacheSaveUser implements SaveUserCache {
  constructor(private readonly insertDataCache: InsertDataCache) {}

  async save (data: SaveUserCache.Params): Promise<SaveUserCache.Result> {
    const ok = await this.insertDataCache.insert(data)
    return ok
  }
}
