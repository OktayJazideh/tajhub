import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Building2, Sparkles } from 'lucide-react'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'ورود به داشبورد | تاج هاب',
  description:
    'ورود به داشبورد مدیریت تاج هاب — دسترسی امن به اکوسیستم مدیریت ساختمان‌های لوکس.',
}

const perks = [
  { icon: ShieldCheck, text: 'دسترسی امن و رمزنگاری‌شده' },
  { icon: Building2, text: 'مدیریت یکپارچهٔ ساختمان' },
  { icon: Sparkles, text: 'تجربهٔ اختصاصی مدیران لوکس' },
]

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-14 lg:py-20">
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-10 px-6 lg:grid-cols-2 lg:px-10">
        {/* Branded panel */}
        <div className="relative hidden overflow-hidden rounded-2xl border border-gold/15 lg:block">
          <Image
            src="/brand-cityscape.jpg"
            alt="نمای ساختمان‌های لوکس"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient veil */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-l from-background/60 to-transparent" />

          <div className="relative flex h-full flex-col justify-between p-10">
            <Image
              src="/logo-navbar.png"
              alt="تاج هاب"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
            />

            <div>
              <h2 className="text-balance text-3xl font-bold leading-snug text-gold-soft">
                به اکوسیستم تاج هاب
                <span className="mt-1 block text-gold-gradient">
                  خوش آمدید
                </span>
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
                      <p.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-foreground/85">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="flex items-center">
          <div className="w-full rounded-2xl border border-gold/12 bg-card/30 p-8 backdrop-blur-sm sm:p-10">
            {/* Mobile logo */}
            <Image
              src="/logo-navbar.png"
              alt="تاج هاب"
              width={180}
              height={54}
              className="mb-8 h-11 w-auto object-contain lg:hidden"
            />

            <div className="mb-8">
              <span className="text-sm tracking-[0.25em] text-gold">
                ورود به داشبورد
              </span>
              <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                حساب کاربری خود را وارد کنید
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                برای دسترسی به داشبورد مدیریت ساختمان، اطلاعات ورود خود را وارد
                کنید.
              </p>
            </div>

            <LoginForm />

            <p className="mt-8 text-center text-sm text-muted-foreground">
              حساب کاربری ندارید؟{' '}
              <Link
                href="/contact"
                className="text-gold transition-colors hover:text-gold-soft"
              >
                درخواست دسترسی
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
