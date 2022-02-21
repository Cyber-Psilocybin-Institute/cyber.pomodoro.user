import Redis from 'ioredis'

export const RedisConnection = {
  uri: '' as string,
  client: null as Redis,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = new Redis(uri)

    this.client.on('error', () => console.log('connection to redis server failed'))
    this.client.on('connect', () => console.log('connection to redis server established'))
    this.client.on('ready', () => console.log('redis server ready to receive commands'))
  },

  async disconnect (): Promise<void> {
    await this.client.disconnect()
  },

  getClient (): Redis {
    return this.client
  }
}
