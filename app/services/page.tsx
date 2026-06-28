import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Building2,
  ClipboardCheck,
  CreditCard,
  IdCard,
  Cpu,
  WrenchIcon,
  BarChart3,
  BellRing,
  FolderLock,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Cog,
  Sprout,
  ArrowLeft,
  Play,
  CalendarCheck,
  Users,
  Smile,
  Clock,
  Apple,
  Bot,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'خدمات | تاج هاب',
  description:
    'خدمات تاج هاب؛ مدیریت هوشمند ساختمان در یک پلتفرم جامع. مجموعه‌ای کامل از خدمات تخصصی برای مدیران و ساکنین ساختمان.',
}

type Service = {
  icon: typeof Building2
  title: string
  text: string
  href?: string
  app?: boolean
}

const services: Service[] = [
  {
    icon: Building2,
    title: 'وضعیت صفر ساختمان',
    text: 'ارزیابی کامل ساختمان در ۱۶ فصل و ایجاد شناسنامه دقیق برای هر ساختمان.',
    href: '/zero-state',
  },
  {
    icon: ClipboardCheck,
    title: 'چک لیست تکنسین',
    text: 'ثبت بازرسی‌ها و اقدامات فنی با چک‌لیست‌های استاندارد و گزارش‌گیری لحظه‌ای.',
  },
  {
    icon: CreditCard,
    title: 'مدیریت مالی و شارژ',
    text: 'مدیریت شارژ ساکنین و مالکین، محاسبه دقیق، دریافت آنلاین و گزارش‌های مالی.',
  },
  {
    icon: IdCard,
    title: 'شناسنامه ساختمان',
    text: 'ثبت و نگهداری اطلاعات کامل ساختمان، واحدها، اسناد، تأسیسات و مدارک.',
  },
  {
    icon: Cpu,
    title: 'شناسنامه تجهیزات',
    text: 'ثبت و مدیریت تجهیزات، مشخصات فنی، سرویس‌ها و تاریخچه نگهداری.',
  },
  {
    icon: WrenchIcon,
    title: 'مدیریت درخواست‌ها',
    text: 'ثبت، پیگیری و انجام درخواست‌های ساکنین و گزارش لحظه‌ای.',
  },
  {
    icon: BarChart3,
    title: 'داشبورد مدیریتی',
    text: 'دسترسی به داده‌های کلیدی و شاخص‌های عملکرد در یک نگاه.',
  },
  {
    icon: BellRing,
    title: 'اطلاع‌رسانی هوشمند',
    text: 'ارسال اعلان‌ها، پیامک‌ها و اطلاعیه‌های مهم به صورت هدفمند.',
  },
  {
    icon: FolderLock,
    title: 'مدیریت اسناد و مدارک',
    text: 'بایگانی امن اسناد، قراردادها، بیمه‌ها و مجوزها.',
  },
  {
    icon: ShieldAlert,
    title: 'مدیریت ریسک‌ها',
    text: 'شناسایی، ارزیابی و پایش ریسک‌های ساختمان و ارائه راهکارهای کنترل.',
  },
  {
    icon: ShieldCheck,
    title: 'مدیریت بیمه',
    text: 'ثبت و پیگیری بیمه‌های ساختمان، حوادث و مسئولیت‌ها به صورت یکپارچه.',
  },
  {
    icon: Smartphone,
    title: 'اپلیکیشن ساکنین',
    text: 'دسترسی آسان ساکنین به خدمات، پرداخت‌ها، اطلاعیه‌ها و درخواست‌ها.',
    app: true,
  },
  {
    icon: Bot,
    title: 'اپلیکیشن تکنسین',
    text: 'دریافت و انجام مأموریت‌ها، ثبت گزارش‌ها و مدیریت برنامه‌ کاری.',
    app: true,
  },
  {
    icon: Cog,
    title: 'مدیریت تأسیسات',
    text: 'پایش و نگهداری تأسیسات مکانیکی و برقی برای بهینه‌سازی عملکرد.',
  },
  {
    icon: Sprout,
    title: 'مدیریت انرژی',
    text: 'پایش مصرف انرژی، گزارش‌ها و راهکارهای بهینه‌سازی و کاهش هزینه‌ها.',
  },
]

const stats = [
  { icon: Users, value: 'تخصصی', label: 'پشتیبانی تخصصی' },
  { icon: Smile, value: 'سریع', label: 'راه‌اندازی سریع' },
  { icon: Clock, value: 'کامل', label: 'همراهی تا استقرار کامل' },
]

const clients = [
  'برج آفرینش',
  'برج پارسیان',
  'مجتمع سپهر',
  'برج نیکان',
  'برج اطلس',
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold/10 pt-32 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute right-1/4 top-10 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.1),transparent_70%)] blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal>
              <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-gold">
                  صفحه اصلی
                </Link>
                <span className="text-gold/40">/</span>
                <span className="text-gold">خدمات</span>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
                خدمات <span className="text-gold-gradient">TAJ HUB</span>
                <span className="mt-3 block text-2xl font-semibold text-gold-soft sm:text-3xl">
                  تمام خدمات مدیریت ساختمان، در یک اکوسیستم هوشمند.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                از وضعیت صفر و نگهداری پیشگیرانه تا مدیریت ساکنان، تجهیزات، مالی و گزارش‌های مدیریتی؛ همه در یک سیستم یکپارچه.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="image-fade image-hover-wrap relative">
              <Image
                src="/services-infographic.jpg"
                alt="اینفوگرافیک TAJ HUB — از مدیریت سنتی تا هوشمندی پیشرو"
                width={1280}
                height={853}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 5) * 70}>
                <article className="group flex h-full flex-col rounded-xl border border-gold/12 bg-card/40 p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:bg-card hover:shadow-[0_18px_50px_-24px_oklch(0.8_0.14_80/0.6)]">
                  <span className="icon-lift mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                    <s.icon className="h-8 w-8" />
                  </span>
                  <h2 className="mt-5 text-base font-semibold text-gold-soft">
                    {s.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>

                  {s.app ? (
                    <div className="mt-5 flex items-center justify-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-gold/20 px-3 py-2 text-xs text-gold-soft">
                        <Bot className="h-4 w-4" />
                        اندروید
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-gold/20 px-3 py-2 text-xs text-gold-soft">
                        <Apple className="h-4 w-4" />
                        iOS
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={s.href ?? '/contact'}
                      className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-md border border-gold/20 px-4 py-2.5 text-xs font-medium text-gold-soft transition-all duration-300 hover:border-gold/50 hover:bg-gold/5"
                    >
                      اطلاعات بیشتر
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="px-6 pb-20 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 overflow-hidden rounded-2xl border border-gold/15 bg-card/40 p-8 lg:grid-cols-2 lg:p-12">
            <div className="image-fade image-hover-wrap relative order-2 rounded-xl lg:order-1">
              <Image
                src="/services-ecosystem.jpg"
                alt="اکوسیستم خدمات TAJ HUB — گوشی سه‌بعدی طلایی با کارت‌های خدمات متصل"
                width={1280}
                height={853}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="order-1 text-center lg:order-2 lg:text-right">
              <h2 className="text-balance text-2xl font-bold sm:text-3xl">
                تمام نیازهای مدیریت ساختمان‌های لوکس، در یک اکوسیستم هوشمند.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                از وضعیت صفر و نگهداری پیشگیرانه تا مدیریت مالی، ساکنان، تجهیزات و گزارش‌های مدیریتی؛ همه در یک سیستم یکپارچه.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-7 py-3.5 text-base font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_30px_-8px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_40px_-4px_oklch(0.8_0.14_80)]"
                >
                  <CalendarCheck className="h-5 w-5" />
                  درخواست دمو و مشاوره رایگان
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/25 px-7 py-3.5 text-base font-medium text-gold-soft transition-all duration-300 hover:border-gold/50 hover:bg-gold/5"
                >
                  <Play className="h-4 w-4" />
                  مشاهده سامانه
                </button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gold/10 pt-8">
                {stats.map((st) => (
                  <div key={st.label} className="flex flex-col items-center gap-2">
                    <st.icon className="h-6 w-6 text-gold" />
                    <span className="text-xl font-bold text-gold-soft">
                      {st.value}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Client trust strip */}
      <section className="border-t border-gold/10 py-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="mb-8 text-center text-sm text-muted-foreground">
            اعتماد مدیران حرفه‌ای ساختمان‌ها
          </Reveal>
          <Reveal
            delay={80}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            {clients.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 text-gold-muted transition-colors duration-300 hover:text-gold"
              >
                <Building2 className="h-5 w-5" />
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
