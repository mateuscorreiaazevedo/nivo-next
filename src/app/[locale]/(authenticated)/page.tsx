import { SwitchLocale } from '@/components/commons/switch-locale'
import { SwitchTheme } from '@/components/commons/switch-theme'
import { getTranslations } from 'next-intl/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const theme = cookies().get('theme')?.value
  const t = await getTranslations()

  return (
    <div>
      <h1>{t('commons.greeting')}</h1>
      <SwitchLocale />
      <SwitchTheme theme={theme} />
    </div>
  )
}
