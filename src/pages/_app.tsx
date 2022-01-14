import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Router from 'next/router'

import '../styles/nprogress.css'
import SwitchThemeContextProvider from '@contexts/SwitchThemeContext'
import GlobalStyles from '@styles/GlobalStyles'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <SwitchThemeContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </SwitchThemeContextProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
