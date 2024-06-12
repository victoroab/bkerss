import { currentUser } from '@clerk/nextjs/server'
import { User } from 'lucide-react'

export default async function UserImage() {
  const user = await currentUser()
  if (!user)
    return (
      <p>
        <User />
      </p>
    )

  const { imageUrl } = user
  const params = new URLSearchParams()

  params.set('height', '28')
  params.set('width', '28')
  params.set('quality', '100')
  params.set('fit', 'crop')

  const imageSrc = `${imageUrl}?${params.toString()}`

  return (
    <div>
      <img src={imageSrc} alt="User image" className="rounded-full" />
    </div>
  )
}
