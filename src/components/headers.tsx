'use client'

import { Button } from './ui/button'
import { Pacifico } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const LOWER = 20
const UPPER = 784

export function Header() {
  const [isScroll, setIsScroll] = useState<0 | 1>(0)
  window.addEventListener('scroll', () => {
    if (window.scrollY < LOWER) {
      setIsScroll(0)
    }
    if (window.scrollY > LOWER && window.scrollY < UPPER) {
      setIsScroll(1)
    }
  })

  return (
    <header
      className={`w-full inset-x-0 transition-all duration-150 sticky top-0 z-20 flex items-center backdrop-blur-md ${
        isScroll > 0 && 'border-b'
      }`}
    >
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
