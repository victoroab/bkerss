import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import UserImage from './user-image'

export default function Page() {
  return (
    <div className="w-full flex flex-col flex-1">
      <h1 className="text-3xl font-bold">Home</h1>
      <div className="mt-7 py-2">
        <div className="w-full flex flex-1 items-center border-green-200 h-full">
          <Link href={'/profile'}>
            <Card className="cursor-pointer hover:shadow-md transition-shadow w-80">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3">
                  Profile
                  <div className="">
                    <UserImage />
                  </div>
                </CardTitle>
                <CardDescription>5 steps pending</CardDescription>
              </CardHeader>
              <CardFooter className="text-sm">
                <div className="w-full h-1 bg-sky-800 dark:bg-sky-500"></div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
