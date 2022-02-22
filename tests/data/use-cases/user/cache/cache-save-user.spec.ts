import { CacheSaveUser } from '@data/use-cases/user/cache'
import { mockSaveUserCacheParams } from '@tests/domain/use-case'
import { InsertDataCacheSpy } from '@tests/data/mocks/protocols/cache'

type SutTypes = {
  sut: CacheSaveUser
  insertDataCacheSpy: InsertDataCacheSpy
}

const makeSut = (): SutTypes => {
  const insertDataCacheSpy = new InsertDataCacheSpy()
  const sut = new CacheSaveUser(insertDataCacheSpy)
  return {
    sut: sut,
    insertDataCacheSpy: insertDataCacheSpy
  }
}

describe('CacheSaveUser use case', () => {
  it('Should be call InsertDataCache with correct params', async () => {
    const { sut, insertDataCacheSpy } = makeSut()
    const userData = mockSaveUserCacheParams()
    await sut.save(userData)
    expect(insertDataCacheSpy.params).toEqual({
      key: `user:${userData.user}`,
      value: JSON.stringify(userData)
    })
  })

  it('Should be return false if InsertDataCache returns false, on error', async () => {
    const { sut, insertDataCacheSpy } = makeSut()
    insertDataCacheSpy.result = false
    await sut.save(mockSaveUserCacheParams())
    expect(insertDataCacheSpy.result).toBe(false)
  })

  it('Should be return true if InsertDataCache returns true, on success', async () => {
    const { sut, insertDataCacheSpy } = makeSut()
    await sut.save(mockSaveUserCacheParams())
    expect(insertDataCacheSpy.result).toBe(true)
  })

  it('Should be throw if InsertDataCache throws', async () => {
    const { sut, insertDataCacheSpy } = makeSut()
    jest.spyOn(insertDataCacheSpy, 'insert').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.save(mockSaveUserCacheParams())
    await expect(promise).rejects.toThrow()
  })
})
