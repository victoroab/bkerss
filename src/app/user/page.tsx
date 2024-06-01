// import { getCountries, createCountry } from './functions'
import { createUser, getUsers } from './functions'

export default async function Page() {
  const users = await getUsers()
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      List of Users:
      <h1 className="font-semibold text-2xl">
        {users.length < 1 && 'no users found'}
      </h1>
      {users.map((user, idx) => (
        <div className="flex items-center gap-2" key={user.id}>
          {idx + 1}.
          <div className="flex items-center gap-2">
            <h1>{user.name}</h1>-<p>{user.email}</p>
          </div>
        </div>
      ))}
      <form action={createUser} className="rounded-md space-x-4 mt-3">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className="border rounded-md p-2"
        />
        <button type="submit" className="p-2 bg-sky-700 text-white rounded-md">
          Create User
        </button>
      </form>
    </main>
  )
}
