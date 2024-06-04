import { Header } from '@/components/headers'

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="border-flex min-h-screen flex-col items-center pt-36">
        <div className="h-[90rem] container flex flex-col items-center">
          <span className="text-6xl font-bold text-balance md:max-w-4xl text-center leading-tight">
            The Best Platform For <span className="text-sky-900">Bakers</span>{' '}
            All Around The World
          </span>
        </div>
      </main>
    </div>
    // <div className="border">
    // </div>
  )
}
