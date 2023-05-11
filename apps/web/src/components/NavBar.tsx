import Link from 'next/link'
import { Button } from '@codelife-ui/react'
import { useTranslation } from 'react-i18next'

function NavBar() {
  const { t } = useTranslation()

  return (
    <nav className="m-0 box-border flex items-center justify-between gap-8 px-4 py-0">
      <Link href="#" className="">
        CODELIFE
      </Link>

      <Button
        text
        onClick={() => console.log('mock login with Google ')}
        css={{
          '@phoneOnly': {
            height: '$8',
            fontSize: 'small',
          },
          backgroundColor: '#DB4437',
          color: '$codelife-black-100',
          borderColor: '#DB4437',
          padding: '1px',
          textTransform: 'uppercase',
          fontSize: '$sm',
          
        }}
      >
        {t('Enter')}
      </Button>
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
