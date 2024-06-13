import { AppHeader } from '@/components/headers'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen">
      <AppHeader />
      <main className="flex w-full flex-1 flex-col pt-14">
        <div className="w-full pt-6 pb-12 bg-neutral-50 dark:bg-neutral-950">
          <div className="container max-sm:px-4 mx-auto">{children}</div>
        </div>
      </main>
    </main>
  )
}
