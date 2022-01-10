import { createContext } from 'react'

import { ThemeProvider } from 'styled-components'

import usePersistedTheme from '../hooks/usePersistedTheme'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

type Theme = {
  title: string
  colors: {
    backgroundDetails: string
    fontColor: string
  }
}

type SwitchThemeContextType = {
  theme: Theme
  toggleTheme(): void
}

export const SwitchThemeContext = createContext({} as SwitchThemeContextType)

const SwitchThemeContextProvider: React.FC = (children) => {
  const [theme, setTheme] = usePersistedTheme('prefferenceTheme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <SwitchThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}

export default SwitchThemeContextProvider
