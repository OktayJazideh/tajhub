export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-x-clip border-b border-gold/10 pb-20 pt-40 lg:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[460px] max-w-[820px] w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.14_80/0.1),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span
          className="inline-block text-sm tracking-[0.3em] text-gold"
          style={{ animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
        >
          {eyebrow}
        </span>
        <h1
          className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl"
          style={{
            animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: '0.08s',
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-muted-foreground"
            style={{
              animation: 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
              animationDelay: '0.16s',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
