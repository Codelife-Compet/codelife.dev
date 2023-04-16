'use-client'
import { useAuth } from '@/context/auth/AuthContext'
import { Button, Heading, Text, Card } from '@codelife-ui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaMap, FaPaste, FaTerminal } from 'react-icons/fa'
// import NavBar from '@/components/NavBar' Componente com defeito visual: linha 23

export default function Home() {
  const { signIn } = useAuth()
  const [hydrated, setHydrated] = useState(false)
  const { t } = useTranslation()
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    <>
      {hydrated && (
        <>
          <div className="p-10 w-full"></div>
          <main className="mb-20 flex items-center flex-col gap-20">
            {/* <NavBar /> Componente com defeito visual no sm breakpoint */}
            <section
              id="codelife-presenter"
              className="max-w-[83%] py-20 flex flex-col items-center gap-10"
            >
              <Heading size={'2xl'} css={{ textAlign: 'center' }}>
                {t('Home.Headline')}
              </Heading>
              <Text
                size={'lg'}
                css={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  maxWidth: '80%',
                }}
              >
                {t('Home.IntroText')}
              </Text>
              <Button
                onClick={() =>
                  signIn({ email: 'teste@teste.com', password: '123456' })
                }
              >
                {t('Home.Start')}
                <FaArrowRight />
              </Button>
            </section>
            <section
              id="videoPresenter"
              className="w-[80%] border border-black dark:border-gray-600"
            >
              <iframe
                className="w-full aspect-video"
                id="ytplayer"
                src="https://www.youtube.com/embed/9ImSvqDDQuc?cc_load_policy=1&hl=pt-br&color=white"
                frameBorder="0"
                allowFullScreen
              />
            </section>
            <section id="for-you" className="flex justify-around gap-4">
              <Card.Root elevation={'1'} variant={'primary'}>
                <Card.Header key={'Card-header-1'}>
                  <Card.IconContainer>
                    <FaMap />
                  </Card.IconContainer>
                  <Heading as={'h3'} css={{ lineHeight: '$shorter' }}>
                    {t('Home.Feature1')}
                  </Heading>
                </Card.Header>
                <Text size={'lg'} key={'Card-subtitle-1'}>
                  {t('Home.Feature1Caption')}
                </Text>
              </Card.Root>
              <Card.Root elevation={'1'} variant={'secondary'}>
                <Card.Header key={'Card-header-2'}>
                  <Card.IconContainer>
                    <FaTerminal />
                  </Card.IconContainer>
                  <Heading as={'h3'} css={{ lineHeight: '$shorter' }}>
                    {t('Home.Feature2')}
                  </Heading>
                </Card.Header>
                <Text size={'lg'} key={'Card-subtitle-2'}>
                  {t('Home.Feature2Caption')}
                </Text>
              </Card.Root>
              <Card.Root elevation={'1'} variant={'tertiary'}>
                <Card.Header key={'Card-header-3'}>
                  <Card.IconContainer>
                    <FaPaste />
                  </Card.IconContainer>
                  <Heading as={'h3'} css={{ lineHeight: '$shorter' }}>
                    {t('Home.Feature3')}
                  </Heading>
                </Card.Header>
                <Text size={'lg'} key={'Card-subtitle-3'}>
                  {t('Home.Feature3Caption')}
                </Text>
              </Card.Root>
            </section>
          </main>
        </>
      )}
    </>
  )
}
