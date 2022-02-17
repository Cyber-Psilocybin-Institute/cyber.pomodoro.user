import { UserModel } from "@domain/models"

import faker from 'faker'

export const mockUserModel = (): UserModel => {
  return {
    id: faker.datatype.uuid(),
    user: faker.internet.userName(),
    name: faker.name.findName(),
    profileImage: faker.internet.avatar()
  }
}

export const mockUserModels = (quantity: number): UserModel[] => {
  const usersList: UserModel[] = []
  while (usersList.length < quantity) {
    const user: UserModel = {
      id: faker.datatype.uuid(),
      user: faker.internet.userName(),
      name: faker.name.findName(),
      profileImage: faker.internet.avatar()
    }
    usersList.push(user)
  }
  return usersList
}
