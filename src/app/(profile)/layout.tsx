import { AppHeader } from '@/components/headers'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Newspaper, User } from 'lucide-react'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full min-h-screen">
      <AppHeader />
      <aside className="min-h-screen fixed flex-items-center w-48 p-4 border-r bg-neutral-100">
        <nav className="h-full flex flex-col items-start">
          <div className="w-full flex flex-col justify-start gap-3">
            <span className="w-full pl-2 uppercase text-sm font-semibold text-sky-900">
              Pages
            </span>
            <Button
              className="flex justify-start gap-3 py-0 pl-2 w-full rounded-lg hover:text-sky-700 hover:border hover:border-sky-200 hover:bg-sky-50 text-gray-900 bg-transparent"
              size={'sm'}
            >
              <LayoutDashboard /> Home
            </Button>
            <Button
              className="flex justify-start gap-3 py-0 pl-2 w-full rounded-lg hover:text-sky-700 hover:border hover:border-sky-200 hover:bg-sky-50 text-gray-900 bg-transparent"
              size={'sm'}
            >
              <Newspaper /> Activity
            </Button>
            <Button
              className="flex justify-start gap-3 py-0 pl-2 w-full rounded-lg hover:text-sky-700 hover:border hover:border-sky-200 hover:bg-sky-50 text-gray-900 bg-transparent"
              size={'sm'}
            >
              <User /> Groups
            </Button>
          </div>
        </nav>
      </aside>

      <div>{children}</div>
    </main>
  )
}