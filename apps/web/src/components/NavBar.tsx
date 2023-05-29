import Link from 'next/link'
import { Button, Socials } from '@codelife-ui/react'
import { useTranslation } from 'react-i18next'
import {
  FaDoorOpen,
  FaUserPlus,
  FaQuestionCircle,
  FaGlobeAmericas,
  FaFacebookSquare,
  FaYoutube,
} from 'react-icons/fa'
import Image from 'next/image'
import { InstagramSVGIcon } from './InstagramSVGIcon'
import SiteLogo from '../../public/codelife.svg'

function NavBar() {
  const { t } = useTranslation()

  return (
    <nav className="m-0 box-border flex items-center justify-between gap-8 px-4 pr-auto pl-auto h-14 ">
      <Link href="#" className="">
        <Image src={SiteLogo} alt="Codelife" className="w-fit h-7 "></Image>
      </Link>
      <div className="flex gap-5 items-center">
        <Button
          text
          variant="primary"
          onClick={() => console.log('mock login with Google ')}
          css={{
            padding: '1px',
            textTransform: 'uppercase',
            fontSize: '14px',
            gap: '3px',
            height: 'fit-content',
            fontWeight: 'bold',
            color: '$codelife-black-700',
          }}
        >
          <FaDoorOpen className="pb-0.5" />
          {t('Enter')}
        </Button>

        <Button
          text
          onClick={() => console.log('Create account')}
          css={{
            padding: '1px',
            textTransform: 'uppercase',
            fontSize: '14px',
            gap: '3px',
            height: 'fit-content',
            fontWeight: 'bold',
            color: '$codelife-black-700',
          }}
        >
          <FaUserPlus className="pb-0.5" />
          {t('Sign Up')}
        </Button>

        <Button
          text
          onClick={() => console.log('Create account')}
          css={{
            padding: '1px',
            textTransform: 'uppercase',
            fontSize: '14px',
            gap: '3px',
            height: 'fit-content',
            fontWeight: 'bold',
            color: '$codelife-black-700',
          }}
          className="hover:underline"
        >
          <FaQuestionCircle className="pb-0.5 h-100%" />
          {t('About')}
        </Button>
        <div className="flex">
          <div className="border-r border-black">
            <Button
              text
              onClick={() => console.log('Create account')}
              css={{
                padding: '1px',
                paddingRight: '5px',
                textTransform: 'uppercase',
                fontSize: '14px',
                gap: '3px',
                height: 'fit-content',
                fontWeight: 'bold',
                color: '$codelife-black-700',
              }}
              className="hover:underline"
            >
              <FaGlobeAmericas className="pb-0.5 h-100%" />
              <Link href="/" locale="pt-BR">
                {t('Portuguese')}
              </Link>
            </Button>
          </div>

          <Button
            text
            onClick={() => console.log('Create account')}
            css={{
              padding: '1px',
              marginLeft: '5px',
              textTransform: 'uppercase',
              fontSize: '14px',
              gap: '3px',
              height: 'fit-content',
              fontWeight: 'bold',
              color: '$codelife-black-700',
            }}
            className="hover:underline "
          >
            <Link href="/" locale="en">
              {t('English')}
            </Link>
          </Button>
        </div>
        <div className="">
          <Socials.Root className="gap-2 justify-between pb-2">
            <Socials.IconContainer
              link="https://www.facebook.com/CodeLifeBR/"
              css={{
                width: '$5',
                height: '$5',
              }}
            >
              <FaFacebookSquare className="text-codelife-black-400 hover:text-codelife-black-900" />
            </Socials.IconContainer>
            <Socials.IconContainer
              link="https://www.youtube.com/channel/UCR6iTxyV9jdSy21eqS1Ovyg"
              css={{
                width: '$7',
                height: '$7',
              }}
            >
              <FaYoutube className="text-codelife-black-400 hover:text-codelife-black-900" />
            </Socials.IconContainer>
            <Socials.IconContainer
              link="https://www.instagram.com/codelifebr/"
              css={{
                width: '$6',
                height: '$6',
              }}
            >
              <InstagramSVGIcon className="fill-codelife-black-400 hover:fill-codelife-black-900" />
            </Socials.IconContainer>
          </Socials.Root>
        </div>
      </div>
    </nav>
  )
}

// eslint-disable-next-line no-lone-blocks
{
  /*
  Buttons: text-codelife-green-400 hover:text-codelife-black-900 font-semibold
  ul: m-0 flex list-none gap-4 p-0 text-sm
  nav: m-0 box-border flex items-center justify-between gap-8 px-4 py-0

*/
}

export default NavBar
