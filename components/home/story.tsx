import { Reveal } from '@/components/reveal'

/* ---------- The "Building Memory" story ---------- */
/*
  A cinematic, minimal narrative section. Three ordinary truths fade in and
  dim, the quiet turning point lands in full light, and TAJ HUB arrives as
  the answer. Lots of negative space, slow blur-in motion, no busy cards.
*/

const ordinaryTruths = [
  'بسیاری از ساختمان‌ها تجهیزات دارند.',
  'بسیاری از ساختمان‌ها بودجه دارند.',
  'بسیاری از ساختمان‌ها مدیر دارند.',
]

export function StorySection() {
  return (
    <section className="relative overflow-hidden border-t border-gold/10 py-36 lg:py-52">
      {/* faint vertical light, like a beam through an atrium */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.07),transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal soft>
          <span className="text-xs tracking-[0.4em] text-gold/80">
            حافظهٔ ساختمان
          </span>
        </Reveal>

        {/* The three ordinary truths — quiet, muted, almost forgettable */}
        <div className="mx-auto mt-20 flex flex-col gap-7">
          {ordinaryTruths.map((line, i) => (
            <Reveal soft key={line} delay={i * 260}>
              <p className="text-pretty text-xl font-light leading-relaxed text-muted-foreground/70 sm:text-2xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        {/* The turning point — full light, the line that changes everything */}
        <Reveal soft delay={300} className="mt-20">
          <div
            aria-hidden
            className="mx-auto mb-12 h-px w-24 gold-hairline"
          />
          <p className="text-balance text-3xl font-bold leading-[1.45] text-foreground sm:text-4xl lg:text-5xl">
            اما تعداد کمی از ساختمان‌ها
            <span className="mt-2 block text-gold-gradient">حافظه دارند.</span>
          </p>
        </Reveal>

        {/* The answer */}
        <Reveal soft delay={220} className="mt-24">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            ساختمان‌ها فراموش می‌کنند؛ تصمیم‌ها، تجربه‌ها و دانشی که سال‌ها ساخته
            شده، با هر تغییرِ مدیریت محو می‌شود.
          </p>
          <p className="mt-8 text-balance text-2xl font-semibold leading-relaxed text-gold-soft sm:text-3xl">
            <span className="font-display tracking-wide">TAJ HUB</span> برای
            ساختنِ حافظهٔ ساختمان ایجاد شده است.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
