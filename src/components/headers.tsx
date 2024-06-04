import { Button } from './ui/button'
import { Pacifico } from 'next/font/google'
import { cn } from '@/lib/utils'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

export function Header() {
  return (
    <header className="w-full z-20 fixed border flex items-center backdrop-blur-md">
      <nav className="container flex items-center justify-between py-3">
        <span
          className={cn(pacifico.className, 'text-2xl font-bold text-sky-900')}
        >
          Bkerss
        </span>
        <div className="flex items-center gap-4">
          <span className="cursor-pointer font-medium">Login</span>
          <Button className="rounded-3xl bg-sky-700 hover:bg-sky-600">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}
