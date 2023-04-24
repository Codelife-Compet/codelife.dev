'use-client'
import { CourseCarousel } from '@/components/Carousel'
import { useAuth } from '@/context/auth/AuthContext'
import { Button, Heading, Text, Card } from '@codelife-ui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaMap,
  FaPaste,
  FaTerminal,
} from 'react-icons/fa'
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
          <main className="mb-20 flex items-center flex-col gap-20">
            {/* <NavBar /> Componente com defeito visual no sm breakpoint */}
            <section
              id="codelife-presenter"
              className="max-w-[83%] flex flex-col items-center justify-around h-[80vh] xl:h-auto xl:gap-14 bg-home bg-no-repeat bg-cover"
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
                size={'lg'}
                css={{
                  color: '$codelife-black-100',
                }}
                onClick={
                  () => signIn({ email: 'teste@teste.com', password: '123456' }) // mock login with credentials
                }
              >
                {t('Home.Start')}
                <FaArrowRight />
              </Button>
              <div className="flex items-center opacity-50 py-2 justify-center w-full after:block after:h-[1px] after:mx-2.5 after:bg-current after:w-[20%] before:block before:h-[1px] before:mx-2.5 before:bg-current before:w-[20%]">
                {t('Or')}
              </div>
              <div className="flex justify-around items-center flex-col gap-3 sm:flex-row sm:gap-4 md:gap-8">
                <Button
                  onClick={() => console.log('mock login with github ')}
                  css={{
                    '@phoneOnly': {
                      height: '$8',
                      fontSize: 'small',
                    },
                    backgroundColor: '$codelife-black-800',
                    color: '$codelife-black-100',
                    borderColor: '$codelife-black-800',
                  }}
                >
                  <FaGithub />
                  Github &nbsp; &nbsp;
                </Button>
                <Button
                  onClick={() => console.log('mock login with Google ')}
                  css={{
                    '@phoneOnly': {
                      height: '$8',
                      fontSize: 'small',
                    },
                    backgroundColor: '#DB4437',
                    color: '$codelife-black-100',
                    borderColor: '#DB4437',
                  }}
                >
                  <FaGoogle />
                  Google &nbsp; &nbsp;
                </Button>
                <Button
                  onClick={() => console.log('mock login with Facebook ')}
                  css={{
                    '@phoneOnly': {
                      height: '$8',
                      fontSize: 'small',
                    },
                    backgroundColor: '#3b5998',
                    color: '$codelife-black-100',
                    borderColor: '#3b5998',
                  }}
                >
                  <FaFacebook />
                  Facebook
                </Button>
              </div>
            </section>
            <section
              id="courses carrousel"
              className="w-max-lg w-[80%] relative flex justify-center items-center"
            >
              <CourseCarousel />
            </section>
            <section
              id="videoPresenter"
              className="w-[80%] overflow-hidden rounded border border-gray-500 "
            >
              <iframe
                className="w-full aspect-video"
                id="ytplayer"
                src="https://www.youtube.com/embed/9ImSvqDDQuc?cc_load_policy=1&hl=pt-br&color=white"
                frameBorder="0"
                allowFullScreen
              />
            </section>
            <section
              id="for-you"
              className="mx-4 flex flex-col justify-around content-center gap-4 sm:flex-row flex-wrap"
            >
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
