import { TableCaption } from '@/components/ui/table'
import { useTranslations } from 'next-intl'
import { SelectRowsPerPage } from './select'
import { PaginationTableTags } from './pagination'

export function TableTagsFooter({ select, text }: TableTagsFooterInterface) {
  const t = useTranslations('home.tab.tags.table.footer')

  return (
    <TableCaption>
      <div className="flex flex-row items-center">
        <span className="flex-1 text-left text-sm">
          {t('text', { itemsPerPage: text.itemsPerPage, total: text.total })}
        </span>
        <div className="flex items-center gap-8">
          <div className="flex w-fit items-center gap-2">
            <span className="text-nowrap text-xs">{t('rows')}</span>
            <SelectRowsPerPage {...select} />
          </div>
          <div className="flex w-fit items-center gap-2">
            <span className="text-nowrap text-xs">
              {t('pagination', { current: 1, total: 10 })}
            </span>
            <PaginationTableTags />
          </div>
        </div>
      </div>
    </TableCaption>
  )
}
