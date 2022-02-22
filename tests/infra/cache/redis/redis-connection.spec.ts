import { RedisConnection } from '@infra/cache/redis'

const makeSut = (): any => {
  const sut = RedisConnection
  return {
    sut: sut
  }
}

describe('RedisConnection infrastructure', () => {
  let globalRedisClient = null

  beforeAll(async () => {
    const { sut } = makeSut()
    await sut.connect({
      host: '172.20.0.2',
      port: 6379
    })
    globalRedisClient = sut.getClient()
  })

  afterAll(async () => {
    globalRedisClient && (await globalRedisClient.disconnect())
  })

  it('Should be connect ans disconnect Redis client on Redis server', async () => {
    const { sut } = makeSut()
    const promise = sut.connect({
      host: '172.20.0.2',
      port: 6379
    })
    await expect(promise).resolves.toBe(true)
    
    const closePromise = sut.disconnect()
    await expect(closePromise).resolves.toBe(true)
  })

  it('Should be set and get values from Redis client', async () => {
    const TEST_KEY = 'hello:key'
    await globalRedisClient.set(TEST_KEY, 'world')
    await expect(globalRedisClient.get(TEST_KEY)).resolves.toBe('world')
  })
})
