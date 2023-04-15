import React, { PropsWithChildren } from 'react'
import { AuthProvider } from './auth/AuthContext'
import { darkTheme } from '@codelife-ui/react'
import { ThemeProvider } from 'next-themes'
import i18n from '@/i18n'
import { I18nextProvider } from 'react-i18next'
export const GlobalContext: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    storageKey="codelife-theme"
    enableSystem={true}
    defaultTheme="system"
    enableColorScheme
    value={{ dark: darkTheme, light: 'light', kids: 'kids' }}
    themes={['dark', 'light', 'kids']}
  >
    <AuthProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </AuthProvider>
  </ThemeProvider>
)
