'use client'

import { useState, type FormEvent } from 'react'
import { ArrowLeft, Eye, EyeOff, Lock, Mail, Loader2 } from 'lucide-react'

const fieldClass =
  'w-full rounded-md border border-gold/15 bg-card/40 py-3 pr-11 pl-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-card focus:shadow-[0_0_0_3px_oklch(0.8_0.14_80/0.08)]'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Placeholder — no backend wired yet.
    setTimeout(() => setLoading(false), 1400)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-foreground/80">
          ایمیل
        </label>
        <div className="relative">
          <Mail className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60" />
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email@example.com"
            className={fieldClass}
            dir="ltr"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm text-foreground/80">
            رمز عبور
          </label>
          <button
            type="button"
            className="text-xs text-gold/80 transition-colors hover:text-gold-soft"
          >
            فراموشی رمز عبور؟
          </button>
        </div>
        <div className="relative">
          <Lock className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60" />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className={`${fieldClass} pl-11`}
            dir="ltr"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'پنهان کردن رمز عبور' : 'نمایش رمز عبور'}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 transition-colors hover:text-gold"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Remember me */}
      <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="remember"
          className="peer sr-only"
          defaultChecked
        />
        <span className="flex h-4 w-4 items-center justify-center rounded border border-gold/30 transition-all peer-checked:border-gold peer-checked:bg-gold/90">
          <svg
            viewBox="0 0 12 12"
            className="h-3 w-3 text-[oklch(0.14_0.01_60)] opacity-0 transition-opacity peer-checked:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2.5 6.5L5 9l4.5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        مرا به خاطر بسپار
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-[oklch(0.62_0.1_68)] to-[oklch(0.85_0.1_85)] px-7 py-3.5 text-sm font-semibold text-[oklch(0.14_0.01_60)] shadow-[0_0_28px_-8px_oklch(0.8_0.14_80)] transition-all duration-300 hover:shadow-[0_0_38px_-4px_oklch(0.8_0.14_80)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            در حال ورود...
          </>
        ) : (
          <>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            ورود به داشبورد
          </>
        )}
      </button>
    </form>
  )
}
