import Link from 'next/link'
import {
  BrainCircuit,
  Gauge,
  ShieldCheck,
  Users,
  ArrowLeft,
  Check,
  Building2,
  Wallet,
  Wrench,
  ClipboardList,
  LayoutDashboard,
  CircleDot,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

/* ---------- Section 3: Four pillars ---------- */
const pillars = [
  {
    icon: BrainCircuit,
    title: 'حافظهٔ ساختمان',
    text: 'ثبت دانش، تجربیات، سوابق، تصمیمات و تاریخچهٔ ساختمان برای نسل‌های بعدی مدیریت.',
  },
  {
    icon: Gauge,
    title: 'وضعیت صفر',
    text: 'شناخت دقیق واقعیت ساختمان پیش از هر تصمیم مدیریتی.',
  },
  {
    icon: ShieldCheck,
    title: 'نگهداری پیشگیرانه',
    text: 'کاهش هزینه‌های اضطراری از طریق پایش مستمر تجهیزات و زیرساخت‌ها.',
  },
  {
    icon: Users,
    title: 'تجربهٔ ساکنین',
    text: 'ایجاد شفافیت، آرامش و ارتباط بهتر میان مدیریت، مالکان و ساکنین.',
  },
]

export function PillarsSection() {
  return (
    <section className="relative border-t border-gold/10 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <span className="text-sm tracking-[0.3em] text-gold">اکوسیستم</span>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            چهار ستون اصلی اکوسیستم
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-xl border border-gold/10 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group flex h-full flex-col gap-5 bg-background p-8 transition-colors duration-500 hover:bg-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-gold/20 text-gold transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[0_0_24px_-8px_oklch(0.8_0.14_80)]">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-gold-soft">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Section 4: Ecosystem modules ---------- */
const modules = [
  { icon: Gauge, label: 'وضعیت صفر' },
  { icon: ClipboardList, label: 'چکاپ‌های دوره‌ای' },
  { icon: Wrench, label: 'مدیریت تجهیزات' },
  { icon: Wallet, label: 'مدیریت مالی' },
  { icon: Users, label: 'مدیریت ساکنین' },
  { icon: LayoutDashboard, label: 'داشبورد مدیریتی' },
]

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative scroll-mt-24 border-t border-gold/10 py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.08),transparent_70%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            اکوسیستم <span className="text-gold-gradient">TAJ HUB</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            ماژول‌هایی یکپارچه که در کنار هم، تصویری کامل از ساختمان می‌سازند.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <div className="group flex items-center gap-4 rounded-xl border border-gold/12 bg-card/40 p-6 transition-all duration-500 hover:border-gold/35 hover:bg-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="text-base font-medium text-foreground/90">
                  {m.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-soft"
          >
            مشاهدهٔ همهٔ خدمات
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Section 5: Why TAJ HUB ---------- */
const reasons = [
  'حفظ دانش و تجربهٔ ساختمان',
  'کاهش هزینه‌های ناگهانی',
  'افزایش عمر تجهیزات',
  'کاهش ریسک‌های عملیاتی',
  'شفافیت مدیریتی',
  'افزایش ارزش ساختمان',
  'بهبود تجربهٔ زندگی ساکنین',
  'ایجاد حافظهٔ ماندگار برای ساختمان',
]

export function WhySection() {
  return (
    <section className="relative border-t border-gold/10 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <span className="text-sm tracking-[0.3em] text-gold">چرا تاج هاب</span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-snug sm:text-4xl">
            چرا TAJ HUB؟
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            مدیریت ساختمان لوکس به ابزاری در سطح خود نیاز دارد؛ ابزاری که ارزش،
            دانش و کیفیت زندگی را برای سال‌ها حفظ کند.
          </p>
        </Reveal>

        <ul className="grid gap-px overflow-hidden rounded-xl border border-gold/10 bg-gold/10 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r} delay={i * 60}>
              <div className="flex h-full items-center gap-3 bg-background p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground/90">{r}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- Section 6: Legacy ---------- */
export function LegacySection() {
  return (
    <section className="relative border-t border-gold/10 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-gold/20 text-gold">
            <Building2 className="h-6 w-6" />
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 text-balance text-3xl font-bold leading-[1.4] sm:text-4xl">
            برج‌ها فقط برای امروز ساخته نمی‌شوند.
            <span className="mt-2 block text-gold-gradient">
              برای نسل بعد نیز ساخته می‌شوند.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            مدیریت ساختمان فقط ادارهٔ امروز نیست؛ حفظ ارزش، دانش، تجربه و کیفیت
            زندگی برای سال‌های آینده است.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Closing CTA ---------- */
export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-gold/10 py-28 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[420px] w-[820px] rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.12),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-10">
        <Reveal>
          <CircleDot className="h-7 w-7 text-gold/70" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 text-balance text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            اگر ساختمانتان لوکس است،
            <span className="mt-2 block text-gold-gradient">
              مدیریت آن نیز باید در همان سطح باشد.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <Link
            href="/contact"
            className="group mt-12 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-8 py-4 text-base font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_34px_-8px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_44px_-4px_oklch(0.8_0.14_80)]"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            درخواست جلسه معرفی
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
