import { AppHeader } from '@/components/headers'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen">
      <AppHeader />
      <main className="flex w-full flex-1 flex-col">
        <div className="w-full bg-neutral-50 pt-6 pb-12">
          <div className="container max-sm:px-4 mx-auto">{children}</div>
        </div>
      </main>
    </main>
  )
}
