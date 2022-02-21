import { SaveUserCache } from "@domain/use-case/user"

import faker from "faker"

export const mockSaveUserCacheParams = (): SaveUserCache.Params => ({
  id: faker.datatype.uuid(),
  user: faker.internet.userName(),
  name: faker.name.findName(),
  profileImage: faker.internet.avatar()
})

export const mockSaveUserCacheResult = (): SaveUserCache.Result => faker.datatype.boolean()
