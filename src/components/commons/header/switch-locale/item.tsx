import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useTranslations } from 'next-intl'

type Props = {
  item: string
  handleChange: (value: string) => void
}

export function SwitchLocaleItem({ handleChange, item }: Props) {
  const t = useTranslations('commons.locale')

  const handleClick = () => {
    handleChange(item)
  }
  return <DropdownMenuItem onClick={handleClick}>{t(item)}</DropdownMenuItem>
}
