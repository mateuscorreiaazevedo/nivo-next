'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  to: string
  className?: string
}

export const Anchor = ({ to, className, children }: Props) => {
  const { locale } = useParams() as { locale: string }

  return (
    <Link href={`/${locale}${to}`} className={className}>
      {children}
    </Link>
  )
}
