'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { itemsPerPageList } from '@/utils/mock-list/items-per-page-list'
import { useTranslations } from 'next-intl'

export const SelectRowsPerPage = ({
  itemsPerPage,
  handleSelectAmountOfRows,
}: TableTagsSelectRowsPerPage) => {
  const t = useTranslations('home.tab.tags.table.footer')

  return (
    <Select onValueChange={handleSelectAmountOfRows} defaultValue={itemsPerPage}>
      <SelectTrigger className="h-fit w-fit min-w-28">
        <SelectValue className="placeholder:text-xs" placeholder={t('select')} />
      </SelectTrigger>
      <SelectContent align="end">
        {itemsPerPageList.map(item => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
