import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { User } from 'lucide-react'

export default function Page() {
  return (
    <div className="w-full flex flex-col flex-1">
      <h1 className="text-3xl font-bold">Home</h1>
      <div className="mt-7 py-2">
        <div className="w-full flex flex-1 items-center border-green-200 h-full">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-3">
                Profile
                <User />
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="text-sm">
              View and make changes to your profile
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
