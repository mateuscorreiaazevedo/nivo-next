import { Anchor } from '@/components/commons/anchor'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nivo - Users',
}

export default function Users() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Users</h1>
      <Anchor to={'/'}>To Home</Anchor>
    </div>
  )
}
