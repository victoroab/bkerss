import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    // host: process.env.DB_HOST as string,
    // user: process.env.DB_USER as string,
    // password: process.env.DB_PASSWORD as string,
    // database: process.env.DB_NAME as string,
  },
  verbose: true,
  strict: true,
})
