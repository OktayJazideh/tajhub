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
      className={cn('group inline-flex shrink-0 items-center', className)}
      aria-label="تاج هاب - صفحه اصلی"
    >
      <Image
        src={showTagline ? '/logo.png' : '/logo-navbar.png'}
        alt="TAJ HUB — Building Management Intelligence"
        width={showTagline ? 400 : 280}
        height={showTagline ? 160 : 80}
        className="h-auto w-auto object-contain transition-opacity duration-500 group-hover:opacity-85"
        style={{ height: showTagline ? '20rem' : '50px' }}
        priority
      />
    </Link>
  )
}
