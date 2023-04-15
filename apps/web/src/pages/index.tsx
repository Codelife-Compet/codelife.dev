'use-client'
import { useAuth } from '@/context/auth/AuthContext'
import { Button, Heading, Text } from '@codelife-ui/react'
import { useEffect, useState } from 'react'
// import NavBar from '@/components/NavBar' Componente com defeito visual: linha 23

export default function Home() {
  const { signIn } = useAuth()
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    <>
      {hydrated && (
        <>
          <main className="mb-20">
            {/* <NavBar /> Componente com defeito visual no sm breakpoint */}
            <Heading size={'xl'} css={{ textAlign: 'center' }}>
              Aprenda a desenvolver websites
            </Heading>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ex
              nisi aliquid adipisci, ratione nulla exercitationem porro!
              Perspiciatis quae voluptatem numquam quis officiis, nobis, quaerat
              perferendis hic, ad dolore deserunt.
            </Text>

            <Button
              onClick={() =>
                signIn({ email: 'teste@teste.com', password: '123456' })
              }
            >
              SIGN IN
            </Button>
          </main>
        </>
      )}
    </>
  )
}
