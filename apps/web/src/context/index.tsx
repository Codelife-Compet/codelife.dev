import React, { PropsWithChildren } from 'react'
import { AuthProvider } from './auth/AuthContext'
import { darkTheme } from '@codelife-ui/react'
import { ThemeProvider } from 'next-themes'
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
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
)
