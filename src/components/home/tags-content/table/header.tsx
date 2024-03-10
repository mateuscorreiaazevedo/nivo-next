import { Checkbox } from '@/components/ui/checkbox'
import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useTranslations } from 'next-intl'

export function TableTagsHeader() {
  const t = useTranslations('home.tab.tags.table.columns')

  return (
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox id="select-all" />
        </TableHead>
        <TableHead>{t('tag')}</TableHead>
        <TableHead>{t('qtdVideos')}</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
  )
}
