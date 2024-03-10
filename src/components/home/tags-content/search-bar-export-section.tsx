'use client'

import { ExportButton } from '@/components/commons/export-button'
import { SearchBar } from '@/components/commons/search-bar'
import { useTranslations } from 'next-intl'

export function SearchBarAndExportSection() {
  const t = useTranslations('home.tab.tags')
  return (
    <section className="flex items-center justify-between">
      <SearchBar placeholder={t('searchInput.placeholder')} />
      <ExportButton />
    </section>
  )
}
