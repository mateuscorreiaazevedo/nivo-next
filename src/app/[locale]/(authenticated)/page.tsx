import { SwitchLocale } from '@/components/commons/switch-locale'
import { SwitchTheme } from '@/components/commons/switch-theme'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations()

  return (
    <div>
      <h1>{t('commons.greeting')}</h1>
      <SwitchLocale />
      <SwitchTheme />
    </div>
  )
}
