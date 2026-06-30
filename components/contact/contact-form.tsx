'use client'

import { useState, type FormEvent } from 'react'
import { ArrowLeft, Check, Loader2 } from 'lucide-react'

const fieldClass =
  'w-full rounded-md border border-gold/15 bg-card/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-card focus:shadow-[0_0_0_3px_oklch(0.8_0.14_80/0.08)]'

const CONTACT_API =
  process.env.NEXT_PUBLIC_CONTACT_API_URL ?? '/api/send-contact.php'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        body: data,
      })

      const json = (await res.json()) as { ok: boolean; message: string }

      if (!res.ok || !json.ok) {
        setError(json.message || 'ارسال ناموفق بود. لطفاً دوباره تلاش کنید.')
        return
      }

      setSent(true)
      form.reset()
    } catch {
      setError('اتصال برقرار نشد. لطفاً دوباره تلاش کنید یا مستقیماً با ما تماس بگیرید.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-xl border border-gold/15 bg-card/40 p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-semibold text-gold-soft">
          درخواست شما ثبت شد
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          از اعتماد شما سپاسگزاریم. کارشناسان تاج هاب در نخستین فرصت برای
          هماهنگی جلسهٔ معرفی با شما تماس خواهند گرفت.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-sm text-gold transition-colors hover:text-gold-soft"
        >
          ارسال درخواست جدید
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-xl border border-gold/12 bg-card/30 p-8"
    >
      {/* Honeypot — hidden from users, bots fill it */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-foreground/80">
            نام و نام خانوادگی
          </label>
          <input
            id="name"
            name="name"
            required
            disabled={loading}
            placeholder="نام شما"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm text-foreground/80">
            شمارهٔ تماس
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            disabled={loading}
            placeholder="۰۹xxxxxxxxx"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-foreground/80">
            ایمیل
          </label>
          <input
            id="email"
            name="email"
            type="email"
            disabled={loading}
            placeholder="email@example.com"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="building" className="text-sm text-foreground/80">
            نام ساختمان / مجموعه
          </label>
          <input
            id="building"
            name="building"
            disabled={loading}
            placeholder="نام پروژه"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-foreground/80">
          پیام شما
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={loading}
          placeholder="درخواست یا توضیحات خود را بنویسید..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {error && (
        <p className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-7 py-3.5 text-sm font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_28px_-8px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_38px_-4px_oklch(0.8_0.14_80)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        )}
        {loading ? 'در حال ارسال…' : 'ثبت درخواست جلسه معرفی'}
      </button>
    </form>
  )
}
