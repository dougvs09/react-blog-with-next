import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
