export interface InsertDataCache {
  insert: (data: InsertDataCache.Params) => Promise<InsertDataCache.Result>
}

export namespace InsertDataCache {
  export type Params = {
    key: string
    value: string
  }
  export type Result = boolean
}
