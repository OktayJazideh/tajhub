import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showTagline = true,
}: {
  className?: string
  showTagline?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-3', className)}
      aria-label="تاج هاب - صفحه اصلی"
    >
      <Image
        src="/taj-hub-icon.jpg"
        alt="نشان تاج هاب"
        width={44}
        height={44}
        className="h-11 w-11 rounded-md object-cover ring-1 ring-gold/20 transition-transform duration-500 group-hover:scale-105"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-[0.18em] text-gold-gradient">
          TAJ HUB
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] tracking-[0.25em] text-muted-foreground">
            LUXURY BUILDING OS
          </span>
        )}
      </span>
    </Link>
  )
}
