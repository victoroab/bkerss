import { getCountries, createCountry } from './functions'
export default async function Home() {
  const countries = await getCountries()
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      List of Countries:
      <h1 className="font-semibold text-2xl">
        {countries.length < 1 && 'no countries found'}
      </h1>
      {countries.map((country) => (
        <h1 key={country.id}>{country.name}</h1>
      ))}
      <form action={createCountry} className="rounded-md space-x-4 mt-3">
        <input type="text" name="name" className="border rounded-md p-2" />
        <button type="submit" className="p-2 bg-sky-700 text-white rounded-md">
          Create Country
        </button>
      </form>
    </main>
  )
}
