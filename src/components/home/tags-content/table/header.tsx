import { Checkbox } from '@/components/ui/checkbox'
import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useTranslations } from 'next-intl'

export function TableTagsHeader() {
  const t = useTranslations('home.tab.tags.table.columns')

  return (
    <TableHeader>
      <TableRow>
        <TableHead className="h-10 w-10">
          <Checkbox id="select-all" />
        </TableHead>
        <TableHead className="h-10">{t('tag')}</TableHead>
        <TableHead className="h-10 w-3/12">{t('amount')}</TableHead>
        <TableHead align="right" className="h-10 w-4" />
      </TableRow>
    </TableHeader>
  )
}
