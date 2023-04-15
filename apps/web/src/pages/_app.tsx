import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { GlobalContext } from '@/context'
import { GlobalStyles } from '@codelife-ui/react'
import { Layout } from './Layout'
GlobalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  )
}
