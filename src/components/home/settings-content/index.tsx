import { SearchBar } from '@/components/commons/search-bar'
import { useTranslations } from 'next-intl'
import React from 'react'

const pathTranslation = 'home.tab.settings'

export function SettingsContent() {
  const t = useTranslations()

  return (
    <>
      <section className="flex items-center gap-4">
        <h1 className="text-xl font-bold">{t(`${pathTranslation}.title`)}</h1>
        <SearchBar />
      </section>
    </>
  )
}
