export interface InsertDataCache {
  insert: (data: any) => Promise<InsertDataCache.Result>;
}

export namespace InsertDataCache {
  export type Result = boolean
}
