import { icons, LucideProps } from 'lucide-react'

export type IconName = keyof typeof icons

type _IconProps = LucideProps & {
  name: IconName
}

export const Icon = ({ name, strokeWidth = 1, ...props }: _IconProps) => {
  const Component = icons?.[name]

  return <Component {...props} strokeWidth={strokeWidth} />
}
