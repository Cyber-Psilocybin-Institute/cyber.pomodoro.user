import Redis from 'ioredis'

type RedisConnectionUri = {
  host: string | undefined
  port: number | undefined
  password: string | undefined
}

export const RedisConnection = {
  hostData: { host: '', port: undefined } as RedisConnectionUri,
  client: null,

  async connect (data: RedisConnectionUri): Promise<boolean> {
    return new Promise<boolean> ((resolve, reject) => {
      this.hostData = data
      
      this.client = new Redis({
        host: data?.host,
        port: data?.port,
        password: data?.password
      })

      this.client.on('error', () => {
        console.log('connection to redis server failed')
        return reject(false)
      })
      this.client.on('connect', () => {
        console.log('connection to redis server established')
      })
      this.client.on('ready', () => {
        console.log('redis server ready to receive commands')
        return resolve(true)
      })
    })
  },

  async disconnect (): Promise<boolean> {
    return new Promise<boolean> ((resolve, reject) => {
      this.client.disconnect()
      
      this.client.on('close', () => {
        console.log('connection to server redis is closed')
        return resolve(true)
      })
      this.client.on('error', () => {
        console.log('error closing connection to redis server')
        return reject(false)
      })
    })
  },

  getClient (): any {
    return this.client
  }
}
