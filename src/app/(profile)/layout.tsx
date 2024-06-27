import { AppHeader } from '@/components/headers'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Newspaper, Users } from 'lucide-react'
import Link from 'next/link'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full min-h-screen">
      <AppHeader />
      <div className="w-full pt-14">
        <aside className="min-h-screen fixed flex-items-center w-48 p-4 border-r bg-neutral-100 dark:bg-neutral-950">
          <nav className="h-full flex flex-col items-start">
            <div className="w-full flex flex-col justify-start gap-3">
              <span className="w-full pl-2 uppercase text-sm font-semibold text-sky-900 dark:text-sky-600">
                Pages
              </span>
              <Link href={'/app'}>
                <Button
                  className="flex justify-start gap-3 py-0 pl-2 w-full rounded-lg dark:text-white dark:hover:bg-neutral-800 dark:hover:border-none hover:text-sky-700 hover:border hover:border-sky-200 hover:bg-sky-50 text-gray-900 bg-transparent"
                  size={'sm'}
                >
                  <LayoutDashboard /> Home
                </Button>
              </Link>
              <Button
                className="flex justify-start gap-3 py-0 pl-2 w-full rounded-lg dark:text-white dark:hover:bg-neutral-800 dark:hover:border-none hover:text-sky-700 hover:border hover:border-sky-200 hover:bg-sky-50 text-gray-900 bg-transparent"
                size={'sm'}
              >
                <Newspaper /> Activity
              </Button>
              <Button
                className="flex justify-start gap-3 py-0 pl-2 w-full rounded-lg dark:text-white dark:hover:bg-neutral-800 dark:hover:border-none hover:text-sky-700 hover:border hover:border-sky-200 hover:bg-sky-50 text-gray-900 bg-transparent"
                size={'sm'}
              >
                <Users /> Groups
              </Button>
            </div>
          </nav>
        </aside>

        <div className="ml-52 p-2">{children}</div>
      </div>
    </main>
  )
}
