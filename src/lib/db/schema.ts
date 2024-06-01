import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  text,
  unique,
} from 'drizzle-orm/pg-core'

export const popularityEnum = pgEnum('popularity', [
  'unknown',
  'known',
  'popular',
])

export const countries = pgTable(
  'countries',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
  },
  (countries) => {
    return {
      nameIndex: uniqueIndex('name_idx').on(countries.name),
    }
  }
)

export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  countryId: integer('country_id').references(() => countries.id),
  popularity: popularityEnum('popularity'),
})

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name'),
    email: varchar('email', { length: 256 }),
  },
  (users) => {
    return {
      unique: unique('usr_email').on(users.email),
    }
  }
)
