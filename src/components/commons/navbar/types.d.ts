type NavLinkOption = {
  tag: string
  value: string | null
  icon: string
}

interface NavLinkItemProps extends NavLinkOption {
  tabActive: string | null
  handleAction: (value: string | null) => void
}
