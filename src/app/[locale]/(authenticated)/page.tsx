import { Anchor } from '@/components/commons/anchor'

export default async function Home() {
  return (
    <div className={'flex flex-col gap-2'}>
      <Anchor to={'/users'}>To users with Custom Link</Anchor>
    </div>
  )
}
