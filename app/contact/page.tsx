import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'تماس با ما | تاج هاب',
  description:
    'برای درخواست جلسهٔ معرفی تاج هاب و آشنایی با اکوسیستم مدیریت ساختمان‌های لوکس با ما در تماس باشید.',
}

const contactInfo = [
  { icon: Phone, label: 'تلفن', value: '۰۲۱ — ۰۰۰ ۰۰۰۰' },
  { icon: Mail, label: 'ایمیل', value: 'hello@tajhub.com' },
  { icon: MapPin, label: 'نشانی', value: 'تهران، ایران' },
  { icon: Clock, label: 'ساعات پاسخ‌گویی', value: 'شنبه تا چهارشنبه، ۹ تا ۱۷' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تماس با ما"
        title="درخواست جلسهٔ معرفی"
        description="اگر ساختمانتان لوکس است، مدیریت آن نیز باید در همان سطح باشد. برای آشنایی نزدیک با اکوسیستم تاج هاب، فرم زیر را تکمیل کنید."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          {/* Info column */}
          <Reveal>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gold-soft">
                  گفت‌وگو را آغاز کنیم
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                  کارشناسان ما آمادهٔ پاسخ‌گویی و برگزاری جلسهٔ معرفی اختصاصی
                  برای مجموعهٔ شما هستند.
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gold/20 text-gold">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">
                        {info.label}
                      </span>
                      <span className="text-sm text-foreground/90">
                        {info.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="h-px w-full max-w-xs gold-hairline" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                آنچه امروز در ساختمان ساخته می‌شود، باید فردا هم باقی بماند.
              </p>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
