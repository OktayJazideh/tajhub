import { Reveal } from '@/components/reveal'

/*
  Two-act story section.
  Act 1: "لوکس بودن یک ظاهر است، لوکس ماندن یک فرآیند است"
  Act 2: "TAJ HUB باید مرکز فرماندهی ساختمان باشد"
*/

const commandItems = [
  'اطلاعات مالی',
  'اطلاعات فنی',
  'شناسنامه تجهیزات',
  'قوانین و مقررات',
  'قراردادها',
  'سوابق تعمیرات',
  'دانش مدیریت ساختمان',
  'آموزش مدیر',
  'آموزش ساکنین',
  'تصمیم‌های هیئت‌مدیره',
  'وضعیت صفر',
  'چکاپ‌های دوره‌ای',
]

export function StorySection() {
  return (
    <section className="relative overflow-hidden border-t border-gold/10">
      {/* faint vertical light */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/12 to-transparent"
      />

      {/* ── ACT 1: لوکس ماندن یک فرآیند است ── */}
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.07),transparent_70%)] blur-3xl"
        />

        <Reveal soft>
          <span className="text-xs tracking-[0.4em] text-gold/80">حافظهٔ ساختمان</span>
        </Reveal>

        {/* The three ordinary truths */}
        <div className="mx-auto mt-16 flex flex-col gap-6">
          <Reveal soft delay={120}>
            <p className="text-pretty text-xl font-light leading-relaxed text-muted-foreground/60 sm:text-2xl">
              بسیاری از ساختمان‌ها تجهیزات دارند.
            </p>
          </Reveal>
          <Reveal soft delay={280}>
            <p className="text-pretty text-xl font-light leading-relaxed text-muted-foreground/60 sm:text-2xl">
              بسیاری از ساختمان‌ها مدیر دارند.
            </p>
          </Reveal>
          <Reveal soft delay={440}>
            <p className="text-pretty text-xl font-light leading-relaxed text-muted-foreground/60 sm:text-2xl">
              بسیاری از ساختمان‌ها بودجه دارند.
            </p>
          </Reveal>
        </div>

        {/* Turning point */}
        <Reveal soft delay={320} className="mt-16">
          <div aria-hidden className="mx-auto mb-10 h-px w-24 gold-hairline" />
          <p className="text-balance text-3xl font-bold leading-[1.45] text-foreground sm:text-4xl lg:text-5xl">
            اما بسیاری از ساختمان ها
            <span className="mt-2 block text-gold-gradient">حافظه ندارند.</span>
          </p>
        </Reveal>

        {/* Answer */}
        <Reveal soft delay={200} className="mt-20">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            هر تعمیر، هر تصمیم، هر هزینه، هر خرابی و هر تجربه، بخشی از تاریخ
            ساختمان است. اگر این دانش ثبت نشود، با تغییر مدیر، هیئت‌مدیره یا
            پرسنل از بین می‌رود.
          </p>
          <p className="mt-10 text-balance text-2xl font-semibold leading-relaxed text-gold-soft sm:text-3xl">
            <span className="font-display tracking-wide">TAJ HUB</span>{' '}
            حافظه زنده ساختمان را می‌سازد.
          </p>
        </Reveal>
      </div>

      {/* ── ACT 2: لوکس ماندن یک فرآیند است ── */}
      <div className="relative border-t border-gold/10">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.06),transparent_70%)] blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-28">

          {/* Luxury durability */}
          <Reveal soft>
            <span className="text-xs tracking-[0.4em] text-gold/80">لوکس ماندن</span>
          </Reveal>
          <Reveal soft delay={100} className="mt-8">
            <p className="text-pretty text-xl font-light leading-relaxed text-muted-foreground/60 sm:text-2xl">
              لوکس بودن یک ظاهر است.
            </p>
          </Reveal>
          <Reveal soft delay={240} className="mt-5">
            <p className="text-balance text-3xl font-bold leading-[1.45] text-foreground sm:text-4xl">
              اما لوکس ماندن
              <span className="mt-1 block text-gold-gradient">یک فرآیند است.</span>
            </p>
          </Reveal>

          <Reveal soft delay={200} className="mt-16">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              بسیاری از ساختمان‌ها روز اول لوکس ساخته می‌شوند.
              <br />
              اما تعداد کمی از آن‌ها ده سال بعد نیز لوکس باقی می‌مانند.
            </p>
          </Reveal>

          <Reveal soft delay={180} className="mt-14">
            <div aria-hidden className="mx-auto mb-10 h-px w-24 gold-hairline" />
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              آنچه ارزش واقعی یک ساختمان را حفظ می‌کند، سنگ و نما نیست.
              <br className="hidden sm:block" />
              بلکه کیفیت مدیریت، کیفیت نگهداری و کیفیت تصمیم‌هایی است که در
              طول سال‌ها برای آن گرفته شده است.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── ACT 3: مرکز فرماندهی ── */}
      <div className="relative border-t border-gold/10">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.07),transparent_70%)] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">

          <Reveal soft>
            <span className="text-xs tracking-[0.4em] text-gold/80">مرکز فرماندهی</span>
          </Reveal>

          <Reveal soft delay={120} className="mt-8">
            <h2 className="text-balance text-3xl font-bold leading-[1.4] text-foreground sm:text-4xl lg:text-5xl">
              <span className="font-display tracking-wide text-gold-gradient">TAJ HUB</span>
              <span className="mt-3 block text-2xl font-medium text-foreground/80 sm:text-3xl">
                مرکز فرماندهی ساختمان است.
              </span>
            </h2>
          </Reveal>

          <Reveal soft delay={160} className="mt-8">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              جایی که همه چیز در آن جمع است.
            </p>
          </Reveal>

          {/* Command items grid */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold/12 bg-gold/8 sm:grid-cols-3">
            {commandItems.map((item, i) => (
              <Reveal key={item} delay={i * 55}>
                <div className="flex items-center justify-center bg-background px-4 py-4 text-sm text-muted-foreground/80 transition-colors duration-300 hover:bg-card hover:text-gold">
                  <span className="ml-2 h-1 w-1 rounded-full bg-gold/40" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal soft delay={200} className="mt-16">
            <p className="text-balance text-xl font-semibold leading-relaxed text-gold-soft sm:text-2xl">
              همه اینها در یک سیستم، یک اکوسیستم، یک حافظه.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
