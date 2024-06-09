'use client'

import { Button } from './ui/button'
import { Pacifico } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { SignedIn, SignIn, UserButton } from '@clerk/nextjs'
import { SignOutButton, SignedOut } from '@clerk/clerk-react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { DoorClosed, Newspaper, Users } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['cyrillic-ext'],
})

const LOWER = 20
const UPPER = 784

const REDIRECT_URL = process.env
  .NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL as string

export function Header() {
  const [isScroll, setIsScroll] = useState<0 | 1>(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < LOWER) {
        setIsScroll(0)
      }
      if (window.scrollY > LOWER && window.scrollY < UPPER) {
        setIsScroll(1)
      }
    })
  }, [])

  return (
    <header
      className={`w-full inset-x-0 transition-all duration-150 sticky top-0 z-20 flex items-center backdrop-blur-md ${
        isScroll > 0 && 'border-b'
      }`}
    >
      <nav className="container flex items-center justify-between py-3">
        <Link href={'/'}>
          <span
            className={cn(
              pacifico.className,
              'text-3xl font-bold text-sky-900'
            )}
          >
            Bkerss
          </span>
        </Link>
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
                    routing="hash"
                    forceRedirectUrl={REDIRECT_URL}
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
          <SignedOut>
            <Button className="rounded-3xl bg-sky-500 hover:bg-sky-600" asChild>
              <Link href={'/sign-up'}>Get Started</Link>
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  )
}

export function AppHeader() {
  return (
    <header className="w-full inset-x-0 transition-all duration-150 sticky z-20 flex items-center backdrop-blur-md border-b">
      <nav className="w-full flex items-center p-4">
        <Link href={'/app'}>
          <span
            className={cn(
              pacifico.className,
              'text-3xl font-bold text-sky-900'
            )}
          >
            Bkerss
          </span>
        </Link>
        <menu className="ml-36">
          <ul className="flex items-center gap-9">
            <li className="cursor-pointer hover:text-sky-600 font-light flex items-center gap-2">
              <DoorClosed />
              Home
            </li>
            <li className="cursor-pointer hover:text-sky-600 font-light flex items-center gap-2">
              <Newspaper />
              Feed
            </li>
            <li className="cursor-pointer hover:text-sky-600 font-light flex items-center gap-2">
              <Users />
              Groups
            </li>
          </ul>
        </menu>
        <div className="flex items-center gap-2 ml-auto">
          <ModeToggle />
          <UserButton />
        </div>
      </nav>
    </header>
  )
}
