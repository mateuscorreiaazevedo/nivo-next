'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icons'
import React, { useState } from 'react'
import { SwitchLocale } from './switch-locale'
import { SwitchTheme } from './switch-theme'

export const UserOptions = () => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen(prev => !prev)}>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="h-fit w-fit gap-3 p-2">
          <div className="flex flex-col items-start gap-1">
            <strong className="text-sm font-medium text-primary">John Doe</strong>
            <span className="text-xs font-normal text-muted-foreground">
              john@nivo.video
            </span>
          </div>
          <Avatar className="size-8">
            <AvatarFallback>JD</AvatarFallback>
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Avatar>
          <Icon
            data-open={open}
            name="ChevronDown"
            className="size-4 text-muted-foreground transition-all data-[open=true]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <SwitchLocale />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <SwitchTheme />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
