'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { Table } from '@/components/ui/table'
import { TableTagsHeader } from './header'
import { Suspense } from 'react'

export function TableTags() {
  return (
    <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
      <Table>
        <TableTagsHeader />
      </Table>
    </Suspense>
  )
}
