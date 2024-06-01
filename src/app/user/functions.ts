'use server'

import { users } from '@/lib/db/schema'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const getUsers = async () => {
  return await db.query.users.findMany()
}

export const createUser = async ({
  name,
  email,
}: {
  name: string
  email: string
}) => {
  await db.insert(users).values({
    name,
    email,
  })
  revalidatePath('/')
}
