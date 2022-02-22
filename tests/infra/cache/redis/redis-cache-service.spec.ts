import { RedisConnection, RedisCacheService } from '@infra/cache/redis'
import { InsertDataCache } from '@data/protocols/cache'

import faker from 'faker'

type SutTypes = {
  sut: RedisCacheService
}

const makeSut = (): SutTypes => {
  const sut = new RedisCacheService
  return {
    sut: sut
  }
}

const makeRandomCacheValues = (): InsertDataCache.Params => ({
  key: faker.internet.userName(),
  value: faker.internet.password()
})

let globalRedisClient = null

beforeAll(async () => {
  await RedisConnection.connect({ host: '172.20.0.2', port: 6379 })
  globalRedisClient = RedisConnection.getClient()
})

afterAll(async () => {
  globalRedisClient && (await globalRedisClient.disconnect())
})

describe('insert ()', () => {
  it('Should be return true on success', async () => {
    const { sut } = makeSut()
    const promise = sut.insert(makeRandomCacheValues())
    await expect(promise).resolves.toBe(true)
  })
  it('Should be return false on error', async () => {
    const { sut } = makeSut()
    jest.spyOn(sut, 'insert').mockImplementationOnce(async () => {
      return new Promise<boolean>((_, reject) => {
        reject(false)
      })
    })
    const promise = sut.insert(makeRandomCacheValues())
    await expect(promise).rejects.toBe(false)
  })
  it.todo('atualize if pre-exists')
  it.todo('set and get an value')
})
