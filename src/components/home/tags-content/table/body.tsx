import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { TableActions } from './table-actions'
import { useTranslations } from 'next-intl'

export function TableTagsBody({ data }: TableTagsBodyInterface) {
  const t = useTranslations('home.tab.tags.table.body')

  return (
    <TableBody className="max-h-80 overflow-auto scrollbar-thin">
      {data.map(item => (
        <TableRow key={item.id}>
          <TableCell>
            <Checkbox id={item.id} />
            <span className="sr-only">{t('checkbox')}</span>
          </TableCell>
          <TableCell align="char" className="flex w-full flex-col gap-y-0.5">
            <span className="font-medium">{item.title}</span>
            <span className="text-xs text-muted-foreground">{item.id}</span>
          </TableCell>
          <TableCell className="w-40 text-muted-foreground">
            {t('amount', { amount: item.amount })}
          </TableCell>
          <TableCell align="right">
            <TableActions />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
