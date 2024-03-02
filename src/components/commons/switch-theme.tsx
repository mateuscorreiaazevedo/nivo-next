'use client'

import Cookies from 'js-cookie'
import { Switch } from '../ui/switch'
import { useTheme } from 'next-themes'

type Props = {
  theme?: 'light' | 'dark' | string
}

export const SwitchTheme = ({ theme }: Props) => {
  const { setTheme } = useTheme()
  const isLight = theme === 'light'

  const handleToggleTheme = () => {
    const newTheme = isLight ? 'dark' : 'light'
    Cookies.set('theme', newTheme)

    setTheme(newTheme)
  }

  return (
    <>
      <Switch defaultChecked={isLight} onCheckedChange={handleToggleTheme} />
    </>
  )
}
