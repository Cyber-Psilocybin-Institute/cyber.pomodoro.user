import { RedisConnection } from '@infra/cache/redis'
import { InsertDataCache } from '@data/protocols/cache'

export class RedisCacheService implements InsertDataCache {

  async insert (data: InsertDataCache.Params): Promise<InsertDataCache.Result> {
    return new Promise<boolean> ((resolve, reject) => {
      const redis = RedisConnection.getClient()
      redis.set(data.key, data.value, (err: any, result: any) => {
        if (err) return reject(err)
        return resolve(true)
      })
    })
  }
}
