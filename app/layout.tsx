import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn, Cormorant_Garamond } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

// Persian + Latin body/heading face. Variable font, only the weights we use.
const vazirmatn = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
})

// Luxury Latin display face — used only for the "TAJ HUB" wordmark and Latin accents.
const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  title: 'تاج هاب | سیستم‌جامع مدیریت ساختمان‌های لوکس',
  description:
    'TAJ HUB — اکوسیستمی یکپارچه برای حفظ دانش، تجربه، تجهیزات و کیفیت زندگی در ساختمان‌های لوکس. آینده مدیریت ساختمان‌های لوکس.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a08',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${cormorant.variable} dark bg-background`}
    >
      <body
        className="bg-background font-sans antialiased"
        suppressHydrationWarning
      >
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
