import * as schema from './schema'
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const DATABASE_URL = process.env.DATABASE_URL as string

// declare global {
//   // eslint-disable-next-line no-var -- only var works here
//   var db: PostgresJsDatabase<typeof schema> | undefined
//   var qc: postgres.Sql<{}>
// }

// let db: PostgresJsDatabase<typeof schema>
// let qc: postgres.Sql<{}>

// if (process.env.NODE_ENV === 'production') {
//   qc = postgres(DATABASE_URL)
//   db = drizzle(qc, { schema })
// } else {
//   if (!global.db) {
//     qc = postgres(DATABASE_URL)
//     global.db = drizzle(qc, { schema })
//   }
//   db = global.db
// }

// export { db }

const qc = postgres(DATABASE_URL)
export const db = drizzle(qc, { schema })
