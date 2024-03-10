'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { Table } from '@/components/ui/table'
import { TableTagsHeader } from './header'
import { Suspense, useId } from 'react'
import { TableTagsBody } from './body'
import { useTableTags } from './table.model'

export function TableTags() {
  const data: DataTableInterface[] = [
    {
      id: useId(),
      title: 'React',
      amount: 10,
    },
    {
      id: useId(),
      title: 'Bun',
      amount: 10,
    },
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
  ]

  return (
    <section className="rounded-2xl border border-accent p-4 shadow">
      <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
        <Table>
          <TableTagsHeader />
          <TableTagsBody {...useTableTags(data)} />
        </Table>
      </Suspense>
    </section>
  )
}
