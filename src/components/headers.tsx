'use client'

import { Button } from './ui/button'
import { Pacifico } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { SignInButton, SignedIn, SignIn } from '@clerk/nextjs'
import { SignOutButton, SignedOut } from '@clerk/clerk-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from './ui/dialog'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['cyrillic-ext'],
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
          className={cn(pacifico.className, 'text-3xl font-bold text-sky-900')}
        >
          Bkerss
        </span>
        <div className="flex items-center gap-4">
          <span className="cursor-pointer font-medium">
            <SignedIn>
              <SignOutButton />
            </SignedIn>
            <SignedOut>
              <Dialog>
                <DialogTrigger>Login</DialogTrigger>
                <DialogContent className="w-fit p-0 pt-9 bg-white">
                  <SignIn
                    appearance={{
                      elements: {
                        cardBox: 'border-none shadow-none',
                        formButtonPrimary: 'bg-sky-500 hover:bg-sky-600',
                        buttonArrowIcon: 'hidden',
                      },
                    }}
                  />
                </DialogContent>
              </Dialog>
            </SignedOut>
          </span>
          <Button className="rounded-3xl bg-sky-500 hover:bg-sky-600">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}

export function AppHeader() {
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
          className={cn(pacifico.className, 'text-3xl font-bold text-sky-900')}
        >
          Bkerss
        </span>
        <menu>
          <ul className="flex items-center gap-3">
            <li className="cursor-pointer hover:text-sky-600">Feed</li>
            <li className="cursor-pointer hover:text-sky-600">Groups</li>
          </ul>
        </menu>
        <div className="flex items-center gap-4">
          {/* <span className="cursor-pointer font-medium">Login</span>
          <Button className="rounded-3xl bg-sky-700 hover:bg-sky-600">
            Get Started
          </Button> */}
        </div>
      </nav>
    </header>
  )
}
