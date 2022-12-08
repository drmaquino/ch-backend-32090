import { MongoClient } from 'mongodb'
import { CNX_STR } from '../../config.js'

const client = new MongoClient(CNX_STR)
await client.connect()
const db = client.db()

export { db }