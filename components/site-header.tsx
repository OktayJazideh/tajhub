'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, LogIn, ArrowLeft, Globe, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'fa', label: 'فارسی', flag: 'IR' },
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'ar', label: 'العربية', flag: 'AR' },
  { code: 'fr', label: 'Français', flag: 'FR' },
]

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
  const [langOpen, setLangOpen] = useState(false)
  const [activeLang, setActiveLang] = useState(languages[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setLangOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [langOpen])

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

          {/* Language switcher */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-md border border-gold/20 px-3 py-2 text-xs text-muted-foreground transition-all duration-300 hover:border-gold/45 hover:text-gold"
              aria-label="انتخاب زبان"
              aria-expanded={langOpen}
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="tracking-wide">{activeLang.label}</span>
              <ChevronDown className={cn('h-3 w-3 transition-transform duration-300', langOpen && 'rotate-180')} />
            </button>

            {langOpen && (
              <div className="absolute left-0 top-full z-50 mt-1.5 min-w-[130px] overflow-hidden rounded-lg border border-gold/15 bg-background/95 py-1 shadow-[0_8px_32px_-8px_oklch(0_0_0/0.5)] backdrop-blur-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => { setActiveLang(lang); setLangOpen(false) }}
                    className={cn(
                      'flex w-full items-center gap-2.5 px-3 py-2 text-xs transition-colors hover:bg-gold/8 hover:text-gold',
                      activeLang.code === lang.code ? 'text-gold' : 'text-muted-foreground',
                    )}
                  >
                    <span className="w-7 text-center font-mono text-[10px] tracking-widest opacity-60">{lang.flag}</span>
                    {lang.label}
                    {activeLang.code === lang.code && (
                      <span className="mr-auto h-1.5 w-1.5 rounded-full bg-gold" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dashboard login */}
          <button
            type="button"
            className="group flex items-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-5 py-2 text-sm font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_24px_-6px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_30px_-4px_oklch(0.8_0.14_80)]"
            aria-label="ورود به داشبورد"
          >
            <LogIn className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            ورود به داشبورد
          </button>
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
          <div className="mt-3 flex gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setActiveLang(lang)}
                className={cn(
                  'flex-1 rounded-md border py-2 text-xs transition-colors',
                  activeLang.code === lang.code
                    ? 'border-gold/50 text-gold'
                    : 'border-gold/15 text-muted-foreground hover:border-gold/30 hover:text-gold',
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-3 py-3 text-sm font-semibold text-[oklch(0.14_0.01_60)]"
          >
            <LogIn className="h-4 w-4" />
            ورود به داشبورد
          </button>
        </nav>
      </div>
    </header>
  )
}
