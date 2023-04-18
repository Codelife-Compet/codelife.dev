import { useTheme as useNextTheme } from 'next-themes'
import { useEffect } from 'react'

export function useTheme() {
  const { theme, systemTheme, setTheme } = useNextTheme()
  useEffect(() => {
    const storagedTheme = localStorage.getItem('codelife-theme')
    if (!systemTheme || theme === systemTheme || storagedTheme !== systemTheme)
      return
    setTheme(systemTheme)
  }, [systemTheme, setTheme, theme])
  useEffect(() => {
    const storagedTheme = localStorage.getItem('codelife-theme')
    if (storagedTheme && storagedTheme !== theme) {
      setTheme(storagedTheme)
    }
  }, [])
  useEffect(() => {
    if (!theme) return
    localStorage.setItem('codelife-theme', theme)
  }, [theme])
  const toggleTheme = () => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(currentTheme)
  }
  return { theme, toggleTheme }
}
