'use server'

import { countries } from '@/lib/db/schema'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const getCountries = async () => await db.query.countries.findMany()

export const createCountry = async (formData: FormData) => {
  await db.insert(countries).values({ name: formData.get('name') as string })
  revalidatePath('/')
}
