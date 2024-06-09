import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full h-screen p-24 flex items-center justify-center">
      <SignUp />
    </div>
  )
}
