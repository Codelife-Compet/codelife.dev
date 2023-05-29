import Link from 'next/link'
import { Button } from '@codelife-ui/react'
import { useTranslation } from 'react-i18next'
import {
  FaDoorOpen,
  FaUserPlus,
  FaQuestionCircle,
  FaGlobeAmericas,
} from 'react-icons/fa'
import Image from 'next/image'
import SiteLogo from '../../public/codelife.svg'

function NavBar() {
  const { t } = useTranslation()

  return (
    <nav className="m-0 box-border flex items-center justify-between gap-8 px-4 pr-auto pl-auto h-12 ">
      <Link href="#" className="">
        <Image src={SiteLogo} alt="Codelife" className="w-fit h-6 "></Image>
      </Link>
      <div className="flex gap-4 items-center">
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
          }}
          className="hover:underline"
        >
          <FaQuestionCircle className="pb-0.5 h-100%" />
          {t('About')}
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
          }}
          className="hover:underline "
        >
          <FaGlobeAmericas className="pb-0.5 h-100%" />
          {t('Portuguese')}
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
          }}
          className="hover:underline"
        >
          {t('English')}
        </Button>
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
