import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Play, MouseIcon } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.16),transparent_70%)] blur-2xl"
      />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pb-24 pt-32 lg:grid-cols-2 lg:px-10 lg:pt-28">
        {/* Text column */}
        <div className="order-2 flex flex-col items-start lg:order-1">
          <span className="animate-fade-up rounded-full border border-gold/25 px-4 py-1.5 text-xs tracking-widest text-gold">
            آینده مدیریت ساختمان‌های لوکس
          </span>

          <h1
            className="mt-7 text-balance text-4xl font-bold leading-[1.25] sm:text-5xl lg:text-6xl"
            style={{ animation: 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both', animationDelay: '0.05s' }}
          >
            سیستم‌عامل و اکوسیستم
            <span className="mt-2 block text-gold-gradient">
              مدیریت ساختمان‌های لوکس
            </span>
          </h1>

          <p
            className="mt-7 max-w-md text-balance text-lg leading-relaxed text-gold-soft"
            style={{ animation: 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both', animationDelay: '0.15s' }}
          >
            آنچه امروز در ساختمان ساخته می‌شود، باید فردا هم باقی بماند.
          </p>

          <p
            className="mt-6 max-w-lg leading-relaxed text-muted-foreground"
            style={{ animation: 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both', animationDelay: '0.25s' }}
          >
            TAJ HUB تنها یک نرم‌افزار مدیریت ساختمان نیست. اکوسیستمی یکپارچه برای
            حفظ دانش، تجربه، تجهیزات، دارایی‌ها، فرآیندها و کیفیت زندگی در
            ساختمان‌های لوکس؛ از وضعیت صفر و نگهداری پیشگیرانه تا مدیریت مالی و
            تصمیم‌گیری‌های مدیریتی، همه در یک سیستم هوشمند و یکپارچه.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animation: 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both', animationDelay: '0.35s' }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-7 py-3.5 text-sm font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_30px_-8px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_38px_-4px_oklch(0.8_0.14_80)]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              درخواست جلسه معرفی
            </Link>
            <Link
              href="/#ecosystem"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-gold/25 px-7 py-3.5 text-sm text-foreground/90 transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              <Play className="h-4 w-4" />
              مشاهده اکوسیستم
            </Link>
          </div>
        </div>

        {/* Image column */}
        <div className="relative order-1 flex justify-center lg:order-2">
          <div className="image-fade w-full max-w-[520px]">
            <Image
              src="/hero-tower.png"
              alt="برج نمادین تاج هاب با هاله طلایی"
              width={680}
              height={680}
              priority
              className="h-auto w-full select-none"
            />
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-2 text-muted-foreground lg:flex">
        <MouseIcon className="h-5 w-5 text-gold/70" />
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
      </div>
    </section>
  )
}
