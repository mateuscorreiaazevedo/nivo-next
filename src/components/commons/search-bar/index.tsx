'use client'

import { Input } from '@/components/ui/input'
import { Icon } from '@/components/ui/icons'
import { SearchBarProps } from './types'
import { forwardRef } from 'react'
import { useSearchBar } from './search-bar.model'

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(props => {
  const { onSubmit, register } = useSearchBar()

  return (
    <form className="relative h-fit w-fit" onSubmit={onSubmit}>
      <Icon
        name="Search"
        className="absolute left-2 top-1/2 size-4 -translate-y-1/2"
      />
      <Input
        {...register}
        autoComplete="off"
        className="rounded-full border-dashed pl-7 transition-all"
        {...props}
      />
    </form>
  )
})

SearchBar.displayName = 'SearchBar'

export { SearchBar }
