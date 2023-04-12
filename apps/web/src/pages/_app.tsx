import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import i18n from '@/i18n'
import { I18nextProvider } from 'react-i18next'
import { useRouter } from 'next/router'
import { GlobalContext } from '@/context'
import { GlobalStyles } from '@codelife-ui/react'
import { Layout } from './Layout'
GlobalStyles()
export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  i18n.changeLanguage(locale)
  return (
    <GlobalContext>
      <I18nextProvider i18n={i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </GlobalContext>
  )
}
