import { SearchBarAndExportSection } from './search-bar-export-section'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icons'
import { useTranslations } from 'next-intl'
import React from 'react'
import { TableTags } from './table'

const pathTranslation = 'home.tab.tags'

export function TagsContent() {
  const t = useTranslations()

  return (
    <>
      <section className="flex items-center gap-4">
        <h1 className="text-xl font-bold">{t(`${pathTranslation}.title`)}</h1>
        <Button className="h-auto w-auto rounded-full px-2 py-1">
          <Icon name="Plus" />
          {t(`${pathTranslation}.buttons.create`)}
        </Button>
      </section>
      <SearchBarAndExportSection />
      <TableTags />
    </>
  )
}
