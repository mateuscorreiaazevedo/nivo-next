'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { Table } from '@/components/ui/table'
import { TableTagsHeader } from './header'
import { Suspense, useId } from 'react'
import { TableTagsBody } from './body'
import { useTableTags } from './table.model'
import { TableTagsFooter } from './footer'

export function TableTags() {
  const initialData: DataTableInterface[] = [
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
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
    {
      id: useId(),
      title: 'NodeJs',
      amount: 5,
    },
  ]

  const { data, ...tableFooter } = useTableTags(initialData)

  return (
    <Suspense fallback={<Skeleton className="h-40 w-full rounded-lg" />}>
      <section className="rounded-2xl border border-accent p-4 shadow">
        <Table>
          <TableTagsHeader />
          <TableTagsBody data={data} />
          <TableTagsFooter {...tableFooter} />
        </Table>
      </section>
    </Suspense>
  )
}
