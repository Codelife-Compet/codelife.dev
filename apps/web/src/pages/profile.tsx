import { signIn, signOut } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

export default function Component() {

  const session = await getServerSession(authOptions)

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <img src={session.user?.image} /> <br />
        {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
