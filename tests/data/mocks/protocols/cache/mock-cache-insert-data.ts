import { InsertDataCache } from '@data/protocols/cache'

export class InsertDataCacheSpy implements InsertDataCache {
  params: InsertDataCache.Params = null
  result: InsertDataCache.Result = true

  async insert (data: InsertDataCache.Params): Promise<InsertDataCache.Result> {
    this.params = data
    return this.result
  }
}
