import { Db, MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
const dbName = process.env.MONGODB_DB_NAME

interface ConnectType {
  db: Db
  client: MongoClient
}

const client = new MongoClient(uri)

const connect = async (): Promise<ConnectType> => {
  await client.connect()

  const db = client.db(dbName)

  return { client, db }
}

export default connect
