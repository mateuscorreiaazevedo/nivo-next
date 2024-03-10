'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Button } from '../ui/button'
import { Icon } from '../ui/icons'
import { useTranslations } from 'next-intl'

type ExportButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const ExportButton = forwardRef<HTMLButtonElement, ExportButtonProps>(
  ({ ...rest }, ref) => {
    const t = useTranslations('commons.buttons')

    return (
      <Button ref={ref} {...rest} variant={'outline'} className="gap-2" size={'sm'}>
        <Icon name="FileDown" className="size-4" />
        {t('export')}
      </Button>
    )
  }
)

ExportButton.displayName = 'ExportButton'

export { ExportButton }
