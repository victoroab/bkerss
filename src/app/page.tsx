import { Header } from '@/components/headers'
import { cn } from '@/lib/utils'
import { Mitr } from 'next/font/google'

const montseMitr = Mitr({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="border-flex min-h-screen flex-col items-center pt-36">
        <div className="container h-[90rem] flex flex-col items-center">
          <span
            className={cn(
              montseMitr.className,
              'text-6xl font-bold text-balance md:max-w-4xl text-center leading-tight tracking-tight'
            )}
          >
            The Best <span className="text-sky-900">Social</span> Platform For{' '}
            <span className="text-sky-900">Bakers</span> All Around The World
          </span>
        </div>
      </main>
    </div>
  )
}
