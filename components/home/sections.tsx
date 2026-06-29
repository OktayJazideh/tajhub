import Image from 'next/image'
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
    icon: Gauge,
    title: 'وضعیت صفر',
    text: 'شناخت دقیق ساختمان پیش از هر تصمیم.',
  },
  {
    icon: ShieldCheck,
    title: 'نگهداری پیشگیرانه',
    text: 'پیشگیری از خرابی قبل از وقوع.',
  },
  {
    icon: Users,
    title: 'تجربهٔ ساکنین',
    text: 'شفافیت، آرامش و ارتباط بهتر میان مدیریت و ساکنین.',
  },
  {
    icon: BrainCircuit,
    title: 'حافظهٔ ساختمان',
    text: 'ثبت دانش، سوابق و تصمیمات ساختمان برای نسل‌های بعدی مدیریت.',
  },
]

export function PillarsSection() {
  return (
    <section className="relative border-t border-gold/10 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <span className="text-sm tracking-[0.3em] text-gold">اکوسیستم</span>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            چهار ستون سیستم‌عامل ساختمان‌های لوکس
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            هر تصمیم، هر سرویس و هر ماژول TAJ HUB بر پایه این چهار ستون طراحی شده است.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-xl border border-gold/10 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group flex h-full flex-col gap-5 bg-background p-8 transition-colors duration-500 hover:bg-card">
                <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-md border border-gold/20 text-gold">
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
  { icon: Gauge, label: 'وضعیت صفر', desc: 'شناخت دقیق ساختمان پیش از هر تصمیم.' },
  { icon: ClipboardList, label: 'چکاپ‌های دوره‌ای', desc: 'پیشگیری از خرابی قبل از وقوع.' },
  { icon: Wrench, label: 'مدیریت تجهیزات', desc: 'شناسنامه و چرخه عمر دارایی‌ها.' },
  { icon: Wallet, label: 'مدیریت مالی', desc: 'شفافیت کامل درآمدها و هزینه‌ها.' },
  { icon: Users, label: 'مدیریت ساکنین', desc: 'ارتباط هوشمند با ساکنان.' },
  { icon: LayoutDashboard, label: 'داشبورد مدیریتی', desc: 'تصمیم‌گیری مبتنی بر داده.' },
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
            اکوسیستم مدیریت ساختمان‌های لوکس{' '}
            <span className="text-gold-gradient">TAJ HUB</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            تمام ماژول‌های موردنیاز برای مدیریت یکپارچه ساختمان، در یک سیستم‌عامل هوشمند گرد هم آمده‌اند.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <div className="group flex items-start gap-4 rounded-xl border border-gold/12 bg-card/40 p-6 transition-all duration-500 hover:border-gold/35 hover:bg-card">
                <span className="icon-lift flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gold/10 text-gold">
                  <m.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-medium text-foreground/90">{m.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={100}>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
            همه این ماژول‌ها در کنار یکدیگر، تصویری کامل از ساختمان شما ایجاد می‌کنند.
          </p>
          <Link
            href="/services"
            className="group mt-6 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-soft"
          >
            مشاهده اکوسیستم کامل
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Section 5: Why TAJ HUB ---------- */
const reasons = [
  'کاهش هزینه‌های نگهداری',
  'افزایش عمر تجهیزات',
  'حفظ دانش و حافظه ساختمان',
  'افزایش ارزش سرمایه',
  'شفافیت مدیریتی',
  'تجربه‌ای آرام و لوکس برای ساکنین',
  'کاهش ریسک‌های عملیاتی',
  'تصمیم‌گیری مبتنی بر داده',
]

export function WhySection() {
  return (
    <section className="relative border-t border-gold/10 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <span className="text-sm tracking-[0.3em] text-gold">چرا تاج هاب</span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-snug sm:text-4xl">
            چرا ساختمان‌های لوکس به TAJ HUB نیاز دارند؟
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            ساختمان‌های لوکس تنها با معماری زیبا شناخته نمی‌شوند؛ ارزش واقعی آن‌ها در کیفیت مدیریت، حفظ دارایی‌ها، تجربه ساکنین و نگهداری ه��شمند آن‌هاست.
          </p>
          <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
            TAJ HUB تمام این عناصر را در یک اکوسیستم یکپارچه گرد هم می‌آورد.
          </p>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold tracking-[0.2em] text-gold-soft">
              ارزشی که TAJ HUB خلق می‌کند
            </span>
          </Reveal>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-xl border border-gold/10 bg-gold/10 sm:grid-cols-2">
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
      </div>

      {/* Golden quote */}
      <Reveal className="mx-auto mt-20 max-w-4xl px-6 text-center lg:px-10">
        <div aria-hidden className="mx-auto mb-8 h-px w-16 gold-hairline" />
        <p className="text-balance text-2xl font-semibold leading-relaxed text-gold-soft sm:text-3xl">
          ساختمان لوکس، تنها با نمای زیبا ساخته نمی‌شود؛ با مدیریت هوشمند ماندگار می‌شود.
        </p>
      </Reveal>
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
            مدیریت ساختمان، فقط اداره امور روزمره نیست.
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            مدیریت ساختمان یعنی حفظ سرمایه، ثبت دانش، افزایش طول عمر تجهیزات و خلق تجربه‌ای ماندگار برای ساکنان؛ امروز، فردا و سال‌های آینده.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-relaxed text-gold-soft">
            ساختمان‌های لوکس، به مدیریت لوکس نیاز دارند.
          </p>
        </Reveal>

        <Reveal delay={340} className="mt-16">
          <div className="image-fade image-hover-wrap mx-auto max-w-sm">
            <Image
              src="/brand-cityscape.jpg"
              alt="لوگو TAJ HUB با هاله طلایی و افق شهر"
              width={800}
              height={1067}
              className="img-fade h-auto w-full select-none"
            />
          </div>
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
          <p className="text-sm font-medium tracking-[0.2em] text-gold-soft">
            ساختمان‌های لوکس، به مدیریت لوکس نیاز دارند.
          </p>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
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
