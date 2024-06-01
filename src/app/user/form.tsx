'use client'

import { createUser } from './functions'

export function CreateUserForm() {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    await createUser({ name, email })
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="rounded-md space-x-4 mt-3"
    >
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
  )
}
