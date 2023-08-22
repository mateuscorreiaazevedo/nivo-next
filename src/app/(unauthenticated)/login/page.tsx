import { FaGoogle } from 'react-icons/fa'
import { FormSignIn } from '@/modules/auth'
import { LinkButton } from '@/modules/core'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Login() {
  const token = cookies().get('auth-case.token')?.value

  if (token) {
    redirect('/')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-fit min-h-[240px] w-96 flex-col items-stretch justify-between gap-4 rounded-lg border bg-slate-50 p-4">
        <h1 className="self-center text-3xl font-bold">Login</h1>
        <FormSignIn />
        <div className="w-full space-y-2">
          <LinkButton variant="button" size="lg" href="/">
            <FaGoogle />
            Entrar com Google
          </LinkButton>
        </div>
      </div>
    </div>
  )
}