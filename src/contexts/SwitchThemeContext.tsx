import { createContext } from 'react'

import usePersistedTheme from '@hooks/usePersistedTheme'
import dark from '@styles/themes/dark'
import light from '@styles/themes/light'
import { ThemeProvider } from 'styled-components'

type Theme = {
  title: string
  colors: {
    primary: string
    secondary: string
    backgroundDetails: string
    fontColor: string
    gray: string
    babyBlue: string
  }
}

type SwitchThemeContextType = {
  theme: Theme
  toggleTheme(): void
}

export const SwitchThemeContext = createContext({} as SwitchThemeContextType)

// eslint-disable-next-line react/prop-types
const SwitchThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedTheme('prefferenceTheme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <SwitchThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}

export default SwitchThemeContextProvider
