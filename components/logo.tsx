import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * showTagline={false}  → navbar: icon + "TAJ HUB" only, compact height
 * showTagline={true}   → footer / hero: full logo with tagline, larger
 */
export function Logo({
  className,
  showTagline = false,
}: {
  className?: string
  showTagline?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex shrink-0 items-center image-fade', className)}
      aria-label="تاج هاب - صفحه اصلی"
    >
      <Image
        src="/logo.png"
        alt="TAJ HUB — Building Management Intelligence"
        width={showTagline ? 400 : 240}
        height={showTagline ? 160 : 120}
        className="h-auto w-auto object-contain transition-opacity duration-500 group-hover:opacity-85"
        style={{ height: showTagline ? '20rem' : '120px' }}
        priority
      />
    </Link>
  )
}
