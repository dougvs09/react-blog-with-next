import type { AppProps } from 'next/app'

import SwitchThemeContextProvider from '../contexts/SwitchThemeContext'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SwitchThemeContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </SwitchThemeContextProvider>
    </>
  )
}

export default MyApp
