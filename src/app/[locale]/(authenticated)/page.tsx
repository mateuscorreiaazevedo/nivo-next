import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icons'

type HomeProps = {
  searchParams: {
    tab?: string
  }
}

export default function Home({ searchParams }: HomeProps) {
  const { tab } = searchParams

  return (
    <>
      <section className="flex items-center gap-2">
        <h1>{tab}</h1>
        <Button className="h-fit w-fit gap-px rounded-full px-1.5 py-1">
          <Icon name="Plus" className="size-4" />
          Upload video
        </Button>
      </section>
    </>
  )
}
