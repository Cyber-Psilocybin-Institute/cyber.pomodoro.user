import { UserModel } from "@domain/models"

export interface SaveUserCache {
  save: (user: SaveUserCache.Params) => Promise<SaveUserCache.Result>
}

export namespace SaveUserCache {
  export type Params = UserModel

  export type Result = boolean
}
