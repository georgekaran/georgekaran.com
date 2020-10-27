import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import AOS from 'aos'

import * as S from '@/presentation/styles/pages/_app'
import GlobalStyles from '@/presentation/styles/global'
import theme from '@/presentation/styles/theme'
import { Footer } from '@/presentation/components/Footer'
import { Menu } from '@/presentation/components/Menu'
import LanguageProvider from '@/main/factories/context/LanguageProvider'
import I18NProvider from '@/main/factories/context/I18NProvider'
import { getCurrentLanguageAdapter, setCurrentLanguageAdapter } from '@/main/adapters/current-language'

function App ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <LanguageProvider
      setCurrentLanguage={setCurrentLanguageAdapter}
      getCurrentLanguage={getCurrentLanguageAdapter}
    >
      <I18NProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>George Karan Personal Page</title>
            <link rel="shortcut icon" href="/img/icon.svg" />
            <link rel="apple-touch-icon" href="/img/icon.svg" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="stylesheet" href="/css/aos.css" />
            <meta name="description" content="This is my personal page where i'll post my projects and updates about me." />
          </Head>
          <GlobalStyles />
          <S.Wrapper>
            <Menu />
            <S.Container>
              <S.Main>
                <Component {...pageProps} />
              </S.Main>
            </S.Container>
            <Footer />
          </S.Wrapper>
        </ThemeProvider>
      </I18NProvider>
    </LanguageProvider>
  )
}

export default App
