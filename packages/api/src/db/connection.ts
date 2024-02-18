import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { env } from '../env'

const connection = postgres(env.DATABASE_URL, {
  max: 1,
})

export const db = drizzle(connection, {
  schema,
})
