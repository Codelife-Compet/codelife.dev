import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContext } from '@/context'
import { GlobalStyles } from '@codelife-ui/react'
import Layout from '@/components/Layout'
import { SessionProvider } from 'next-auth/react'

GlobalStyles()
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext>
    </SessionProvider>
  )
}
