import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <div>
        <h1>{t('About')}</h1>
        <p>{t('aboutP1')}</p>
      </div>
    )
  )
}
