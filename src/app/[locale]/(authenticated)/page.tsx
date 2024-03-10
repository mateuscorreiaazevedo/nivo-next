import { SettingsContent } from '@/components/home/settings-content'
import { TagsContent } from '@/components/home/tags-content'

type HomeProps = {
  searchParams: {
    tab?: string
  }
}

export default function Home({ searchParams }: HomeProps) {
  const { tab } = searchParams

  const tabContent: Record<string, JSX.Element> = {
    tags: <TagsContent />,
    settings: <SettingsContent />,
  }

  return (
    <article className="w-full space-y-5">{tab ? tabContent[tab] : <></>}</article>
  )
}
