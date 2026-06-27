import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Target,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Building2,
  DraftingCompass,
  Zap,
  Droplets,
  Wind,
  ArrowUpDown,
  Flame,
  Cctv,
  Thermometer,
  BatteryCharging,
  Container,
  Car,
  Trees,
  PaintRoller,
  FileCheck,
  BarChart3,
  Globe,
  RotateCw,
  Clock,
  Award,
  ArrowLeft,
  Download,
  CalendarCheck,
  BookOpen,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'وضعیت صفر | تاج هاب',
  description:
    'وضعیت صفر ساختمان؛ ۱۶ فصل ارزیابی جامع برای شناخت دقیق واقعیت ساختمان پیش از هر تصمیم مدیریتی.',
}

const highlights = [
  {
    icon: Target,
    title: 'ارزیابی دقیق ۳۶۰ درجه',
  },
  {
    icon: ShieldCheck,
    title: 'شناسایی ریسک‌ها قبل از وقوع',
  },
  {
    icon: ClipboardCheck,
    title: 'گزارش حرفه‌ای با استاندارد جهانی',
  },
  {
    icon: TrendingUp,
    title: 'برنامه‌ریزی بهینه نگهداری هوشمند',
  },
]

const chapters = [
  {
    icon: Building2,
    title: 'اطلاعات عمومی و شناسنامه',
    text: 'مشخصات کلی ساختمان، مالکیت، مدیریت و مدارک',
  },
  {
    icon: DraftingCompass,
    title: 'سازه و معماری',
    text: 'بررسی سازه ساختمان، نمای ساختمان، کفسازی و معماری',
  },
  {
    icon: Zap,
    title: 'برق و روشنایی',
    text: 'تابلوها، سیستم‌های برق، روشنایی و تأسیسات ضعیف',
  },
  {
    icon: Droplets,
    title: 'آبرسانی و فاضلاب',
    text: 'شبکه آب سرد و گرم، فاضلاب و سیستم‌های بهداشتی',
  },
  {
    icon: Wind,
    title: 'تأسیسات مکانیکی (HVAC)',
    text: 'گرمایش، سرمایش، تهویه مطبوع و فن‌کویل‌ها',
  },
  {
    icon: ArrowUpDown,
    title: 'آسانسورها و پله برقی',
    text: 'وضعیت آسانسور، پله برقی، درب‌ها و تجهیزات مرتبط',
  },
  {
    icon: Flame,
    title: 'ایمنی و اعلام حریق',
    text: 'سیستم‌های اعلام حریق، اطفاء حریق و ایمنی ساختمان',
  },
  {
    icon: Cctv,
    title: 'امنیت و کنترل تردد',
    text: 'دوربین‌ها، درب‌های کنترل تردد و سیستم‌های امنیتی',
  },
  {
    icon: Thermometer,
    title: 'موتورخانه و تجهیزات گرمایشی',
    text: 'بویلرها، مشعل‌ها، منبع انبساط و تجهیزات موتورخانه',
  },
  {
    icon: BatteryCharging,
    title: 'ژنراتور و برق اضطراری',
    text: 'وضعیت دیزل ژنراتور، ATS و تابلوهای اضطراری',
  },
  {
    icon: Container,
    title: 'مخازن و سیستم آبرسانی',
    text: 'مخازن ذخیره آب، پمپ‌ها و بوستر پمپ‌ها',
  },
  {
    icon: Car,
    title: 'پارکینگ و تأسیسات جانبی',
    text: 'سیستم تهویه، نورپردازی، ایمنی و تجهیزات پارکینگ',
  },
  {
    icon: Trees,
    title: 'فضای سبز و محوطه',
    text: 'محوطه‌سازی، فضای سبز، آبیاری و مبلمان محوطه',
  },
  {
    icon: PaintRoller,
    title: 'رنگ، پوشش‌ها و نما',
    text: 'رنگ‌آمیزی، عایق کاری و پوشش‌های داخلی و خارجی',
  },
  {
    icon: FileCheck,
    title: 'اسناد و قراردادها',
    text: 'قراردادهای پیمانکاری، گارانتی‌ها و مستندات فنی',
  },
  {
    icon: BarChart3,
    title: 'تحلیل، گزارش و برنامه‌ریزی',
    text: 'تحلیل داده‌ها، شاخص‌ها و برنامه نگهداری و بهبود',
  },
]

const stats = [
  {
    icon: Globe,
    title: 'استاندارد جهانی',
    text: 'بر اساس استانداردهای BMS و ISO',
  },
  {
    icon: RotateCw,
    title: 'ارزیابی ۳۶۰ درجه',
    text: 'بررسی همه جانبه ۱۶ فصل',
  },
  {
    icon: Clock,
    title: 'سرعت و دقت بالا',
    text: 'صرفه‌جویی در زمان و هزینه‌ها',
  },
  {
    icon: Award,
    title: 'تیم متخصص',
    text: 'مهندسان مجرب تاج هاب',
  },
]

export default function ZeroStatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold/10 pt-32 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.1),transparent_70%)] blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal>
              <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-gold">
                  صفحه اصلی
                </Link>
                <span className="text-gold/40">/</span>
                <span className="text-gold/80">خدمات</span>
                <span className="text-gold/40">/</span>
                <span className="text-gold">وضعیت صفر ساختمان</span>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
                وضعیت صفر ساختمان
                <span className="mt-2 block text-gold-gradient">
                  ۱۶ فصل ارزیابی جامع
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                ارزیابی کامل و دقیق وضعیت ساختمان در شانزده فصل تخصصی برای شناخت
                دقیق، برنامه‌ریزی بهتر و تصمیم‌گیری هوشمندانه.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-gold/12 bg-card/40 p-4 text-center transition-all duration-500 hover:border-gold/35 hover:bg-card"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/20 text-gold transition-all duration-500 group-hover:shadow-[0_0_22px_-8px_oklch(0.8_0.14_80)]">
                      <h.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {h.title}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="image-fade relative overflow-hidden rounded-2xl border border-gold/15">
              <Image
                src="/zero-state-building.png"
                alt="ورودی لوکس ساختمان با کره سیاه براق روی حلقه‌های نور طلایی"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                priority
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 16 chapters grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="mb-14 flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-12 gold-hairline" />
            <h2 className="text-balance text-center text-2xl font-bold sm:text-3xl">
              ۱۶ فصل وضعیت صفر ساختمان
            </h2>
            <span aria-hidden className="h-px w-12 gold-hairline" />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 80}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-gold/12 bg-card/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:bg-card hover:shadow-[0_18px_50px_-24px_oklch(0.8_0.14_80/0.6)]">
                  <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 text-xs font-semibold text-gold">
                    {i + 1}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold transition-all duration-500 group-hover:shadow-[0_0_28px_-8px_oklch(0.8_0.14_80)]">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-gold-soft">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 overflow-hidden rounded-2xl border border-gold/15 bg-card/40 p-8 lg:grid-cols-2 lg:p-12">
            <div className="flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                <BookOpen className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-gold-soft">
                  گزارش وضعیت صفر ساختمان
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  پس از ارزیابی ۱۶ فصل، گزارش کامل با تحلیل وضعیت، ریسک‌ها و
                  پیشنهادهای بهبود ارائه می‌شود.
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4 text-gold" />
                    گزارش دقیق و جامع
                  </li>
                  <li className="flex items-center gap-2">
                    <ClipboardCheck className="h-4 w-4 text-gold" />
                    اولویت‌بندی اقدامات
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-7 py-4 text-base font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_30px_-8px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_40px_-4px_oklch(0.8_0.14_80)] lg:w-auto"
              >
                <CalendarCheck className="h-5 w-5" />
                درخواست ارزیابی وضعیت صفر
              </Link>
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/25 px-7 py-4 text-base font-medium text-gold-soft transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 lg:w-auto"
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                دانلود نمونه گزارش
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="border-t border-gold/10 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-gold">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="text-base font-semibold text-gold-soft">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-gold/10 py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              ساختمان شما از کجا آغاز می‌کند؟
            </h2>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-8 py-4 text-base font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_30px_-8px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_40px_-4px_oklch(0.8_0.14_80)]"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              درخواست جلسه معرفی
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
