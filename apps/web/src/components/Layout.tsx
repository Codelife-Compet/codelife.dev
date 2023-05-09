'use-client'
import Head from 'next/head'
import Footer from '@/components/Footer'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
interface LayoutProps {}
const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  const { locale } = useRouter()
  const { i18n } = useTranslation()
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale, i18n])

  return (
    <>
      <Head>
        <title>Codelife</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {hydrated && (
        <>
          <main className="mb-20">{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}
export default Layout