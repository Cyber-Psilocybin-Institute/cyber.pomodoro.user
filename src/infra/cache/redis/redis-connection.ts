export const RedisConnection = {
  uri: '',
  client: null,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = {}
  }
}
