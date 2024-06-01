// import { getCountries, createCountry } from './functions'
import { CreateUserForm } from './form'
import { getUsers } from './functions'

export default async function Page() {
  const users = await getUsers()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      List of Users:
      <h1 className="font-semibold text-2xl">
        {users.length < 1 && 'no users found'}
      </h1>
      {users.map((user, idx) => (
        <div
          className="flex items-start gap-2 text-left justify-start"
          key={user.id}
        >
          {idx + 1}.
          <div className="flex items-center gap-2">
            <h1>{user.name}</h1>-<p>{user.email}</p>
          </div>
        </div>
      ))}
      <CreateUserForm />
    </main>
  )
}
