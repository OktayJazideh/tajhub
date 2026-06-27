'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, LogIn, ArrowLeft } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/#ecosystem', label: 'اکوسیستم' },
  { href: '/services', label: 'خدمات' },
  { href: '/zero-state', label: 'وضعیت صفر' },
  { href: '/contact', label: 'تماس با ما' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-gold/10 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo showTagline={false} />

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href.split('#')[0]) &&
                  item.href !== '/'
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm tracking-wide transition-colors duration-300 hover:text-gold',
                  active ? 'text-gold' : 'text-muted-foreground',
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 right-0 h-px w-full gold-hairline" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md border border-gold/25 px-4 py-2 text-sm text-foreground/90 transition-all duration-300 hover:border-gold/50 hover:text-gold"
            aria-label="ورود به داشبورد"
          >
            <LogIn className="h-4 w-4" />
            ورود به داشبورد
          </button>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-5 py-2 text-sm font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_24px_-6px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_30px_-4px_oklch(0.8_0.14_80)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            درخواست جلسه معرفی
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-gold lg:hidden"
          aria-label={open ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-gold/10 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden',
          open ? 'max-h-[480px] border-b' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-sm text-foreground/90 transition-colors hover:bg-secondary hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="mt-2 flex items-center gap-2 rounded-md border border-gold/25 px-3 py-3 text-sm text-foreground/90"
          >
            <LogIn className="h-4 w-4" />
            ورود به داشبورد
          </button>
          <Link
            href="/contact"
            className="mt-1 flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-3 py-3 text-sm font-semibold text-[oklch(0.14_0.01_60)]"
          >
            درخواست جلسه معرفی
          </Link>
        </nav>
      </div>
    </header>
  )
}
