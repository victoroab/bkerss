import { AppHeader } from '@/components/headers'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      <AppHeader />
      <div className="container">{children}</div>
    </main>
  )
}
