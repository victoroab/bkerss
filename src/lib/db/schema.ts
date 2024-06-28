import {
  pgEnum,
  pgTable,
  serial,
  varchar,
  text,
  unique,
} from 'drizzle-orm/pg-core'

export const popularityEnum = pgEnum('popularity', [
  'unknown',
  'known',
  'popular',
])

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name'),
    email: varchar('email', { length: 256 }),
    phone: text('phone'),
    displayName: text('displayName'),
    address: text('address'),
    bio: text('bio'),
    location: text('location'),
  },
  (users) => {
    return {
      unique: unique('usr_email').on(users.email),
    }
  }
)
