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
      className={cn('group inline-flex items-center', className)}
      aria-label="تاج هاب - صفحه اصلی"
    >
      <Image
        src="/logo.png"
        alt="TAJ HUB — Building Management Intelligence"
        width={showTagline ? 180 : 120}
        height={showTagline ? 72 : 48}
        className="h-auto w-auto object-contain transition-opacity duration-500 group-hover:opacity-90"
        style={{ maxHeight: showTagline ? '72px' : '48px' }}
        priority
      />
    </Link>
  )
}
