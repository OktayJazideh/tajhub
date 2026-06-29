import Link from 'next/link'
import { Logo } from '@/components/logo'

const footerNav = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/services', label: 'خدمات' },
  { href: '/zero-state', label: 'وضعیت صفر' },
  { href: '/contact', label: 'تماس با ما' },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col items-center gap-10 text-center">
          <Logo showTagline />
          <p className="max-w-md text-balance leading-relaxed text-muted-foreground">
            اگر ساختمانتان لوکس است، مدیریت آن نیز باید در همان سطح باشد.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="h-px w-full max-w-xs gold-hairline" />
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} تاج هاب. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  )
}
