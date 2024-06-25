import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/entrar.css'
import type { AppProps } from 'next/app'
import { GlobalContext } from '@/context'
import { GlobalStyles } from '@codelife-ui/react'
import Layout from '@/components/Layout'

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
